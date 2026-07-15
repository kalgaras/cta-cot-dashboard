from __future__ import annotations

from dataclasses import dataclass
from datetime import date, datetime, timedelta, timezone
from typing import Optional

from dateutil import tz

from src.sources.http import fetch_text


@dataclass(frozen=True)
class IcsEvent:
    start: datetime
    summary: str
    source_label: str
    is_all_day: bool = False


@dataclass(frozen=True)
class IcsFetchResult:
    ok: bool
    used_url: Optional[str]
    events: list[IcsEvent]
    error: Optional[str]
    source_label: str


def _unfold_ics_lines(text: str) -> list[str]:
    # RFC 5545: lines can be "folded" with CRLF + leading space/tab.
    raw = (text or "").replace("\r\n", "\n").replace("\r", "\n").split("\n")
    out: list[str] = []
    for ln in raw:
        if not ln:
            out.append("")
            continue
        if (ln.startswith(" ") or ln.startswith("\t")) and out:
            out[-1] = out[-1] + ln[1:]
        else:
            out.append(ln)
    return out


def _parse_ics_datetime(value: str, tzid: Optional[str]) -> tuple[Optional[datetime], bool]:
    v = (value or "").strip()
    if not v:
        return None, False

    is_all_day = False
    if len(v) == 8 and v.isdigit():
        # DATE form: YYYYMMDD (all-day)
        try:
            d = datetime.strptime(v, "%Y%m%d").date()
            is_all_day = True
            # Treat as start-of-day in the provided tz (or ET by default).
            target_tz = tz.gettz(tzid) if tzid else tz.gettz("America/New_York")
            target_tz = target_tz or timezone.utc
            return datetime(d.year, d.month, d.day, 0, 0, 0, tzinfo=target_tz), is_all_day
        except ValueError:
            return None, False

    # DATE-TIME forms
    if v.endswith("Z"):
        for fmt in ("%Y%m%dT%H%M%SZ", "%Y%m%dT%H%M%S.%fZ", "%Y%m%dT%H%MZ"):
            try:
                return datetime.strptime(v, fmt).replace(tzinfo=timezone.utc), is_all_day
            except ValueError:
                continue
        return None, False

    for fmt in ("%Y%m%dT%H%M%S", "%Y%m%dT%H%M"):
        try:
            dt = datetime.strptime(v, fmt)
            break
        except ValueError:
            dt = None  # type: ignore[assignment]
    if dt is None:
        return None, False

    # When TZID is missing, most US macro calendars default to ET.
    target_tz = tz.gettz(tzid) if tzid else tz.gettz("America/New_York")
    target_tz = target_tz or timezone.utc
    return dt.replace(tzinfo=target_tz), is_all_day


def _parse_ics_dt_line(line: str) -> tuple[Optional[datetime], bool]:
    # Example: DTSTART;TZID=America/New_York:20260515T083000
    if ":" not in line:
        return None, False
    left, value = line.split(":", 1)
    tzid: Optional[str] = None
    for part in left.split(";")[1:]:
        if part.upper().startswith("TZID="):
            tzid = part.split("=", 1)[1].strip() or None
            break
    return _parse_ics_datetime(value, tzid)


def parse_ics_events(text: str, source_label: str) -> list[IcsEvent]:
    events: list[IcsEvent] = []
    lines = _unfold_ics_lines(text)
    in_event = False
    dtstart: Optional[datetime] = None
    is_all_day = False
    summary = ""

    for ln in lines:
        up = ln.upper()
        if up == "BEGIN:VEVENT":
            in_event = True
            dtstart = None
            is_all_day = False
            summary = ""
            continue
        if up == "END:VEVENT":
            if in_event and dtstart and summary:
                events.append(IcsEvent(start=dtstart, summary=summary, source_label=source_label, is_all_day=is_all_day))
            in_event = False
            continue
        if not in_event:
            continue

        if up.startswith("DTSTART"):
            dt, all_day = _parse_ics_dt_line(ln)
            if dt:
                dtstart = dt
                is_all_day = all_day
            continue
        if up.startswith("SUMMARY:"):
            summary = (ln.split(":", 1)[1] or "").strip()
            continue
    return events


async def fetch_ics_any(timeout_s: float, urls: list[str], source_label: str) -> IcsFetchResult:
    text: Optional[str] = None
    used_url: Optional[str] = None
    last_error: Optional[str] = None
    for url in urls:
        res = await fetch_text(url, timeout_s=timeout_s)
        if res.ok and res.text:
            text = res.text
            used_url = res.url
            break
        last_error = res.error or "fetch failed"

    if not text or not used_url:
        return IcsFetchResult(ok=False, used_url=None, events=[], error=last_error or "unreachable", source_label=source_label)

    try:
        evs = parse_ics_events(text, source_label=source_label)
        if not evs:
            return IcsFetchResult(ok=False, used_url=used_url, events=[], error="no events parsed", source_label=source_label)
        return IcsFetchResult(ok=True, used_url=used_url, events=evs, error=None, source_label=source_label)
    except Exception as exc:  # noqa: BLE001
        return IcsFetchResult(ok=False, used_url=used_url, events=[], error=str(exc), source_label=source_label)


def pick_upcoming_events(
    events: list[IcsEvent],
    *,
    now: datetime,
    within_hours: int,
    limit: int = 6,
) -> list[IcsEvent]:
    # Return upcoming events in [now, now+within_hours].
    if now.tzinfo is None:
        now = now.replace(tzinfo=timezone.utc)
    end = now + timedelta(hours=max(1, within_hours))

    out: list[IcsEvent] = []
    for ev in events:
        st = ev.start
        if st.tzinfo is None:
            st = st.replace(tzinfo=timezone.utc)
        if now <= st <= end:
            out.append(ev)
    out.sort(key=lambda e: e.start)
    return out[: max(0, limit)]

