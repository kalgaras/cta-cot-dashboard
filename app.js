(function () {
  "use strict";

  const dataVersion = new Date().toISOString().slice(0, 13).replace(/\D/g, "");

  function loadDashboardData() {
    return new Promise((resolve) => {
      if (window.CTA_DASHBOARD_DATA) {
        resolve(window.CTA_DASHBOARD_DATA);
        return;
      }

      const script = document.createElement("script");
      script.src = `./data/data.js?v=${dataVersion}`;
      script.onload = () => resolve(window.CTA_DASHBOARD_DATA || { reports: [], latest: null });
      script.onerror = () => resolve({ reports: [], latest: null });
      document.head.appendChild(script);
    });
  }

  loadDashboardData().then((DATA) => {
  const $ = (id) => document.getElementById(id);
  const reports = DATA.reports || [];
  const uniqueReports = reports.filter((report) => report.name !== "last_report_latest.txt");
  let active = DATA.latest || reports[0] || null;

  function triggerClass(trigger) {
    if (trigger === "발생" || trigger === "재차 발생") return "hot";
    if (trigger === "미발생") return "calm";
    if (trigger === "확인 제한") return "limited";
    return "watch";
  }

  function statusClass(status) {
    if (status === "ok" || status === "used") return "calm";
    if (status === "partial") return "watch";
    if (status === "missing_key" || status === "not_configured") return "limited";
    if (status === "blocked" || status === "unavailable") return "hot";
    return "limited";
  }

  function statusLabel(status) {
    return {
      ok: "정상",
      used: "사용",
      partial: "부분",
      unavailable: "미연결",
      blocked: "차단",
      http_fail: "HTTP 실패",
      missing_key: "키 필요",
      not_configured: "미설정",
      unknown: "미확인"
    }[status] || status;
  }

  function fmtTime(value) {
    if (!value) return "확인 제한";
    return new Intl.DateTimeFormat("ko-KR", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(new Date(value));
  }

  function extractRows(section) {
    const block = (section || "").match(/```([\s\S]*?)```/);
    if (!block) return [];
    return block[1]
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("---") && !line.includes("기준일") && !line.includes("Date  "));
  }

  function renderReportList() {
    $("reportList").innerHTML = uniqueReports
      .map((report) => {
        const current = active && active.name === report.name ? ' aria-current="page"' : "";
        const latest = DATA.latest && DATA.latest.date === report.date ? "<b>Latest</b>" : "";
        return `
          <button class="report-link" type="button" data-name="${report.name}"${current}>
            <span>${report.date}</span>
            <strong>${report.trigger}</strong>
            ${latest}
          </button>
        `;
      })
      .join("");

    document.querySelectorAll(".report-link").forEach((button) => {
      button.addEventListener("click", () => {
        const next = reports.find((report) => report.name === button.dataset.name);
        if (next) {
          active = next;
          render();
        }
      });
    });
  }

  function renderDatePicker() {
    const datePicker = $("reportDate");
    datePicker.innerHTML = uniqueReports
      .map((report) => `<option value="${report.name}">${report.date} · ${report.trigger}</option>`)
      .join("");
    if (active) {
      const selected = uniqueReports.find((report) => report.date === active.date) || active;
      datePicker.value = selected.name;
    }
  }

  function renderQuickRead() {
    const recs = (active.dashboard && active.dashboard.recommendations) || [];
    const bullets = recs.length ? recs : (active.alertBullets && active.alertBullets.length ? active.alertBullets : [
      active.summary.cta,
      active.summary.regime
    ]);
    $("signalStack").innerHTML = bullets
      .slice(0, 5)
      .map((bullet, index) => `
        <article class="signal-item ${index === 0 ? triggerClass(active.trigger) : ""}">
          <span class="signal-pill">${index === 0 ? "Primary" : "Context"}</span>
          <p>${bullet}</p>
        </article>
      `)
      .join("");
  }

  function renderCards() {
    const cards = [
      ["Proxy Trigger", active.trigger, active.summary.cta],
      ["Regime", active.regime, active.summary.regime],
      ["Data Coverage", `${active.summary.coveragePct || 0}%`, `${active.summary.availableRows || 0}/${active.summary.totalRows || 0} rows usable`],
      ["Source State", active.summary.network, `원문 제한 문구 ${active.summary.confirmLimited}회 · 프록시 ${active.summary.proxy}회`]
    ];
    $("statGrid").innerHTML = cards
      .map(([label, value, note]) => `
        <article class="idx-card">
          <span class="section-label">${label}</span>
          <div class="metric-main ${triggerClass(value)}">${value}</div>
          <p>${note}</p>
        </article>
      `)
      .join("");
  }

  function renderSources() {
    const sources = (active.dashboard && active.dashboard.sourceStatus) || [];
    $("sourceGrid").innerHTML = sources
      .map((source) => `
        <article class="source-card ${statusClass(source.status)}">
          <span>${source.name}</span>
          <strong>${statusLabel(source.status)}</strong>
          <p>${source.detail}</p>
        </article>
      `)
      .join("");
  }

  function renderRecommendations() {
    const recs = (active.dashboard && active.dashboard.recommendations) || [];
    $("recommendations").innerHTML = recs.length
      ? recs.map((rec) => `<li>${rec}</li>`).join("")
      : "<li>현재 추가 조치가 없습니다. 다음 실행에서 데이터 품질을 다시 확인하세요.</li>";
  }

  function renderBlocks() {
    const groups = (active.dashboard && active.dashboard.groups) || [];
    $("blockGrid").innerHTML = groups
      .map((group) => {
        const rows = group.rows && group.rows.length
          ? group.rows.slice(0, 5).map((row) => `<li>${row}</li>`).join("")
          : "<li>연결된 데이터 없음</li>";
        return `
          <article class="block-card ${statusClass(group.status)}">
            <div class="block-head">
              <div>
                <span class="section-label">${group.sourceType}</span>
                <h4>${group.name}</h4>
              </div>
              <strong>${statusLabel(group.status)}</strong>
            </div>
            <div class="coverage-bar" aria-label="가용 데이터 비율">
              <i style="width: ${group.total ? Math.round((group.available / group.total) * 100) : 0}%"></i>
            </div>
            <p>${group.available}/${group.total} rows usable</p>
            <ul class="mono-list">${rows}</ul>
          </article>
        `;
      })
      .join("");
  }

  function renderSections() {
    $("rawReport").textContent = active.body || "저장된 리포트가 없습니다.";
    $("marketSection").textContent = active.sections.market || "마켓 모니터 확인 제한";
  }

  function render() {
    if (!active) {
      $("rawReport").textContent = "저장된 리포트가 없습니다.";
      return;
    }

    document.title = `${active.date} CTA/COT Proxy Monitor`;
    $("updatedAt").textContent = `${active.date} 기준`;
    $("dataNote").textContent = `생성 ${fmtTime(DATA.generatedAt)}`;
    $("syncStatus").textContent = `저장 ${fmtTime(active.mtime)}`;
    $("heroTitle").textContent = active.title;
    $("triggerBadge").textContent = active.trigger;
    $("triggerBadge").className = `tab active ${triggerClass(active.trigger)}`;
    $("historyCount").textContent = `${uniqueReports.length}개`;

    renderDatePicker();
    renderReportList();
    renderQuickRead();
    renderCards();
    renderSources();
    renderRecommendations();
    renderBlocks();
    renderSections();
  }

  $("copyBtn").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(active ? active.body : "");
      $("copyBtn").textContent = "복사됨";
      setTimeout(() => {
        $("copyBtn").textContent = "원문 복사";
      }, 1200);
    } catch (_err) {
      $("copyBtn").textContent = "복사 제한";
    }
  });

  $("downloadBtn").addEventListener("click", () => {
    if (!active) return;
    const blob = new Blob([active.body + "\n"], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `cta_cot_report_${active.date.replaceAll("-", "")}.txt`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  });

  $("reportDate").addEventListener("change", (event) => {
    const next = reports.find((report) => report.name === event.target.value);
    if (next) {
      active = next;
      render();
    }
  });

  render();
  });
})();
