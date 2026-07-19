# CTA/COT Proxy Trigger Daily Dashboard

매일(크론) 실행을 전제로, 가능한 범위 내에서 **최신 시장 데이터(프록시 포함)** 와 **CFTC COT(공식)** 를 수집해 한국어 리포트를 만들고, 로컬 파일과 웹 대시보드로 확인합니다. 텔레그램 전송은 기본 비활성화되어 있으며, 필요할 때만 명시적으로 켤 수 있습니다.

## 로컬 터미널에서 실행(Codex 밖 권장)

Codex 샌드박스에서는 DNS/HTTPS가 막힐 수 있으므로, 데이터 수집은 일반 macOS 터미널에서 실행하는 것을 권장합니다.

```bash
cd /Users/jaycom/Documents/Codex/2026-05-11/cta-cot-cta-proxy-trigger-daily
./scripts/run_local_dashboard.sh
```

이 명령은 venv가 없으면 만들고, 데이터 소스 네트워크 진단을 먼저 수행한 뒤, 리포트와 `dashboard/data/data.js`를 갱신합니다. 마지막에 열 파일 경로를 출력합니다.

대시보드는 서버가 필요 없는 정적 파일입니다.

```bash
open /Users/jaycom/Documents/Codex/2026-05-11/cta-cot-cta-proxy-trigger-daily/dashboard/index.html
```

Alpha Vantage 키가 있으면 아래처럼 추가한 뒤 다시 실행합니다. `YOUR_KEY_HERE`만 실제 키로 바꾸고, `#`로 시작하는 설명 줄은 터미널에 붙여넣지 마세요.

```bash
./scripts/set_alpha_vantage_key.sh YOUR_KEY_HERE
./scripts/run_local_dashboard.sh
```

키 검증만 따로 하려면:

```bash
. .venv/bin/activate
python3 scripts/check_alpha_vantage.py
```

## 개발용 수동 실행

```bash
cd /Users/jaycom/Documents/Codex/2026-05-11/cta-cot-cta-proxy-trigger-daily
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
REPORT_DELIVERY=dashboard python main.py
python3 scripts/build_dashboard_data.py
```

## 대시보드 실행

```bash
cd /Users/jaycom/Documents/Codex/2026-05-11/cta-cot-cta-proxy-trigger-daily
. .venv/bin/activate
python3 scripts/build_dashboard_data.py
```

브라우저에서 `/Users/jaycom/Documents/Codex/2026-05-11/cta-cot-cta-proxy-trigger-daily/dashboard/index.html`을 열면 최신 리포트와 과거 저장본을 볼 수 있습니다.

## GitHub Pages 배포

대시보드는 `dashboard/`를 원본으로 쓰고, GitHub Pages에는 `docs/` 폴더를 배포합니다. `.env`, `.venv`, `data/.cache`는 `.gitignore`로 제외됩니다.

1) 로컬에서 최신 데이터 생성:

```bash
./scripts/run_local_dashboard.sh
```

2) `dashboard/` 내용을 `docs/`에 반영:

```bash
mkdir -p docs/data
cp dashboard/index.html dashboard/styles.css dashboard/app.js dashboard/config.js dashboard/static.html docs/
cp dashboard/data/data.js dashboard/data/network_status.json docs/data/
cp dashboard/.nojekyll docs/.nojekyll
```

3) GitHub 저장소에 push:

```bash
git init
git add .gitignore dashboard docs README.md data/last_report_latest.txt data/last_report_*.txt scripts src main.py requirements.txt
git commit -m "Deploy CTA COT dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

4) GitHub 저장소의 **Settings → Pages**에서 아래처럼 설정합니다.

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/docs`

배포가 끝나면 사이트 주소는 보통 `https://YOUR_USER.github.io/YOUR_REPO/` 형태입니다.

### 매일 자동 업데이트 + 배포

아래 스크립트는 리포트를 새로 만들고, `dashboard/` 결과를 `docs/`에 반영한 뒤, 변경사항이 있으면 GitHub에 push합니다.

```bash
./scripts/publish_github_pages.sh
```

로컬 macOS에서 매일 오전 6시 50분에 자동 갱신하려면 `crontab -e`에 아래를 추가합니다.

```cron
50 6 * * * cd /Users/jaycom/Documents/Codex/2026-05-11/cta-cot-cta-proxy-trigger-daily && /bin/bash ./scripts/publish_github_pages.sh >> /tmp/cta-cot-pages-publish.log 2>&1
```

## 크론(서버) 실행 권장 방식

크론은 로그인 셸이 아니므로, **절대경로 + venv 고정**이 안전합니다.

1) 1회 세팅(서버에서):

```bash
cd /opt/cta-cot-cta-proxy-trigger-daily
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
```

2) `.env`에 필요한 환경변수 저장:

```bash
REPORT_DELIVERY=dashboard
# 선택: 확인 제한을 줄이기 위한 공식/키 기반 fallback
# FRED_API_KEY=...
# ALPHA_VANTAGE_API_KEY=...
```

3) crontab 예시는 `scripts/cron.example` 참고(기본 06:40, 서버 로컬 시간). 실제 실행은 `scripts/run_local_dashboard.sh` 호출을 권장합니다.

## 크론(로컬 macOS)로 “자동 발송”하기

이 프로젝트는 `scripts/run_local_dashboard.sh`가 **네트워크 진단 + .env 로딩 + venv 고정 + 리포트/대시보드 갱신**까지 처리합니다.

1) 1회 세팅:

```bash
cd /Users/jaycom/Documents/Codex/2026-05-11/cta-cot-cta-proxy-trigger-daily
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
```

2) `.env` 작성(로컬에만 보관):

```bash
REPORT_DELIVERY=dashboard
# 선택: 확인 제한을 줄이기 위한 공식/키 기반 fallback
# FRED_API_KEY=...
# ALPHA_VANTAGE_API_KEY=...
```

3) 크론 등록:

```bash
crontab -e
```

예시(매일 06:40, 로컬 시간):

```cron
40 6 * * * cd /Users/jaycom/Documents/Codex/2026-05-11/cta-cot-cta-proxy-trigger-daily && ENV_FILE=/Users/jaycom/Documents/Codex/2026-05-11/cta-cot-cta-proxy-trigger-daily/.env ./scripts/run_local_dashboard.sh >> /tmp/cta-cot-daily.log 2>&1
```

4) 동작 확인:
- 로그: `/tmp/cta-cot-daily.log`
- 수동 실행: `ENV_FILE=... ./scripts/run_local_dashboard.sh`

## 텔레그램을 다시 켜야 할 때

기본값은 `REPORT_DELIVERY=dashboard`입니다. 과거 Telethon 방식으로 전송하려면 `.env`에 아래처럼 명시합니다.

```bash
REPORT_DELIVERY=telegram
TELEGRAM_TARGET_CHAT=제이팍 저장소
TELEGRAM_SESSION_PATH=/Users/jaycom/.openclaw/workspace/telegram_session.session
TELEGRAM_CREDENTIALS_PATH=/Users/jaycom/.openclaw/workspace/telegram_credentials.json
```

### 텔레그램 설정(우선순위)

1) 환경변수:
- `TELEGRAM_API_ID`
- `TELEGRAM_API_HASH`
- `TELEGRAM_TARGET_CHAT` (기본값: `제이팍 저장소`)
- (옵션) `TELEGRAM_SESSION_PATH` (기본 후보: `/Users/jaycom/.openclaw/workspace/telegram_session.session`)
- (옵션) `TELEGRAM_CREDENTIALS_PATH` (기본 후보: `/Users/jaycom/.openclaw/workspace/telegram_credentials.json`)

2) credentials 파일(없으면 생략):
- JSON 키 후보: `api_id`, `api_hash`

세션/크리덴셜/대상명을 찾지 못하면 **전송 대신 stdout로 리포트를 출력** 하며 누락된 설정을 명확히 안내합니다.

> 참고: `ValueError: too many values to unpack (expected 5)` 같은 에러가 나오면 Telethon 버전과 `.session` 파일 스키마가 안 맞는 경우가 있어 `pip install -U telethon`로 업그레이드하거나 세션을 재생성해야 할 수 있습니다.

## 데이터 소스

- 지수/ETF/FX/원자재 등: 무료 공개 소스를 **프록시로 사용**(가용 시). 실행 시 소스/제약을 리포트에 명시합니다.
- COT: CFTC 공개 데이터(가용 시). 실패 시 “확인 제한”으로 표기합니다.
- Yahoo/Stooq가 막힐 때 `ALPHA_VANTAGE_API_KEY`가 있으면 ETF/주식 프록시 일봉을 한 번 더 시도합니다.
- FRED 금리/매크로 계열은 공개 CSV를 우선 쓰고, `FRED_API_KEY`가 있으면 FRED API fallback을 시도합니다.
- 성공한 HTTP/ZIP 응답은 `data/.cache`에 URL 기반으로 저장해, 네트워크가 막힌 날에는 오래된 캐시라도 `확인(캐시)`로 재사용합니다.

### 데이터가 비어 보일 때(NA)

금리(FRED)는 채워지는데 지수/FX/원자재/VIX 등이 전부 `NA`라면, 실행 머신의 네트워크에서 아래 도메인이 차단/DNS 실패하는 경우가 많습니다.
- Yahoo 프록시: `query1.finance.yahoo.com`
- Stooq 프록시: `stooq.com` (최근 일부 심볼은 apikey/captcha를 요구할 수 있음)
- COT: `www.cftc.gov`

이때 리포트에는 `메모: ... 시세 접근 실패(yahoo=...; stooq=...)`처럼 1줄 진단이 함께 표시됩니다.

또한 지수/FX/원자재는 무료 소스에서 인덱스 티커가 불안정한 경우가 많아, 일부 항목은 **대표 ETF를 프록시로 사용**합니다(예: S&P500→SPY, DXY→UUP).

현재 기본 `④ 마켓 모니터`는 FRED 시리즈를 우선 사용해(가능하면) Yahoo 429/차단 영향을 줄입니다.

## (선택) SG/BTOP50 프록시 입력

`SG CTA Trend Index`, `SG Short-Term Traders Index`, `Barclay BTOP50`은 공개 무료 시세 소스가 애매해 기본은 로컬 CSV로 받습니다.

- 입력 파일: `/Users/jaycom/Documents/Codex/2026-05-11/cta-cot-cta-proxy-trigger-daily/data/cta_proxies.csv`
- 템플릿: `/Users/jaycom/Documents/Codex/2026-05-11/cta-cot-cta-proxy-trigger-daily/data/cta_proxies.csv.example`
- 컬럼: `date,asset,value` (asset 값은 리포트 표기명과 동일)
