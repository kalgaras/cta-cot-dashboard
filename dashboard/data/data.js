window.CTA_DASHBOARD_DATA = {
  "generatedAt": "2026-07-15T17:03:30+09:00",
  "latest": {
    "name": "last_report_latest.txt",
    "title": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger",
    "date": "2026-07-15",
    "trigger": "미발생",
    "regime": "neutral/no trigger",
    "mtime": "2026-07-15T17:03:30+09:00",
    "size": 4680,
    "body": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-14  SG CTA Trend Index (p…  99.81   +0.56%  +2.33%  +2.73%  0.56  프록시    \n2026-07-14  SG Short-Term Traders…  31.02   +0.10%  +0.85%  +1.11%  0.11  프록시    \n2026-07-14  Barclay BTOP50 (proxy…  104.69  +0.26%  +1.69%  +2.44%  0.28  프록시    \n2026-07-14  DBMF ETF                31.02   +0.10%  +0.85%  +1.11%  0.11  프록시    \n2026-07-14  KMLM ETF                28.81   +0.42%  +2.53%  +3.78%  0.37  프록시    \n2026-07-14  Simplify CTA ETF (pro…  26.89   +1.17%  +3.62%  +3.30%  0.75  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-07-07  S&P 500 (ES)    10,912      -151,081  -93.3%  -0.62  ❌        확인     \n2026-07-07  USD Index (DX)  -4,454      +1,126    +20.2%  +0.33  ❌        확인     \n2026-07-07  UST 10Y         -135,113    -1,386    -1.0%   +0.02  ❌        확인     \n2026-07-07  UST 2Y          -24,292     +541      +2.2%   +0.16  ❌        확인     \n2026-07-07  UST 5Y          -47,706     +651      +1.3%   +0.28  ❌        확인     \n2026-07-07  UST 30Y         -351,500    +569,148  +61.8%  +1.28  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-07-15)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인(캐시) \n2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인(캐시) \n2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인(캐시) \n2026-07-14  Russell 2000        294.51    +0.35%  -0.92%  프록시    \n2026-07-14  STOXX 600 (proxy:…  88.30     +0.50%  -0.12%  프록시    \n2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인(캐시) \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-09  UST 2Y   4.16%  -5.0bp  확인(캐시) \n2026-07-09  UST 5Y   4.27%  -4.0bp  확인(캐시) \n2026-07-09  UST 10Y  4.54%  -2.0bp  확인(캐시) \n2026-07-09  UST 30Y  5.05%  -1.0bp  확인(캐시) \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인(캐시) \n2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인(캐시) \n2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인(캐시) \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-06  WTI                69.60   -0.19%  -1.36%  확인(캐시) \n2026-07-06  Brent              69.56   +1.28%  +0.46%  확인(캐시) \n2026-07-14  Gold (proxy: GLD)  372.15  +1.37%  -1.59%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-09  VIX  15.84  -6.27%  +1.73%  확인(캐시) \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
    "summary": {
      "cta": "- CTA 프록시 트리거: 미발생 (기준일: 2026-07-15)",
      "regime": "- 국면 판단: neutral/no trigger",
      "network": "정상/미표기",
      "confirmLimited": 4,
      "proxy": 19,
      "availableRows": 27,
      "totalRows": 27,
      "coveragePct": 100.0
    },
    "dashboard": {
      "groups": [
        {
          "name": "Daily CTA Proxy",
          "sourceType": "official/manual/proxy",
          "status": "ok",
          "available": 5,
          "total": 5,
          "rows": [
            "2026-07-14  SG Short-Term Traders…  31.02   +0.10%  +0.85%  +1.11%  0.11  프록시",
            "2026-07-14  Barclay BTOP50 (proxy…  104.69  +0.26%  +1.69%  +2.44%  0.28  프록시",
            "2026-07-14  DBMF ETF                31.02   +0.10%  +0.85%  +1.11%  0.11  프록시",
            "2026-07-14  KMLM ETF                28.81   +0.42%  +2.53%  +3.78%  0.37  프록시",
            "2026-07-14  Simplify CTA ETF (pro…  26.89   +1.17%  +3.62%  +3.30%  0.75  프록시"
          ]
        },
        {
          "name": "Weekly COT",
          "sourceType": "official/CFTC",
          "status": "ok",
          "available": 5,
          "total": 5,
          "rows": [
            "2026-07-07  S&P 500 (ES)    10,912      -151,081  -93.3%  -0.62  ❌        확인",
            "2026-07-07  UST 10Y         -135,113    -1,386    -1.0%   +0.02  ❌        확인",
            "2026-07-07  UST 2Y          -24,292     +541      +2.2%   +0.16  ❌        확인",
            "2026-07-07  UST 5Y          -47,706     +651      +1.3%   +0.28  ❌        확인",
            "2026-07-07  UST 30Y         -351,500    +569,148  +61.8%  +1.28  ❌        확인"
          ]
        },
        {
          "name": "Overnight Index",
          "sourceType": "proxy quotes",
          "status": "ok",
          "available": 6,
          "total": 6,
          "rows": [
            "2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인(캐시)",
            "2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인(캐시)",
            "2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인(캐시)",
            "2026-07-14  Russell 2000        294.51    +0.35%  -0.92%  프록시",
            "2026-07-14  STOXX 600 (proxy:…  88.30     +0.50%  -0.12%  프록시",
            "2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인(캐시)"
          ]
        },
        {
          "name": "UST Rates",
          "sourceType": "official/FRED",
          "status": "ok",
          "available": 4,
          "total": 4,
          "rows": [
            "2026-07-09  UST 2Y   4.16%  -5.0bp  확인(캐시)",
            "2026-07-09  UST 5Y   4.27%  -4.0bp  확인(캐시)",
            "2026-07-09  UST 10Y  4.54%  -2.0bp  확인(캐시)",
            "2026-07-09  UST 30Y  5.05%  -1.0bp  확인(캐시)"
          ]
        },
        {
          "name": "FX",
          "sourceType": "official/proxy",
          "status": "ok",
          "available": 3,
          "total": 3,
          "rows": [
            "2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인(캐시)",
            "2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인(캐시)",
            "2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인(캐시)"
          ]
        },
        {
          "name": "Commodities",
          "sourceType": "official/proxy",
          "status": "ok",
          "available": 3,
          "total": 3,
          "rows": [
            "2026-07-06  WTI                69.60   -0.19%  -1.36%  확인(캐시)",
            "2026-07-06  Brent              69.56   +1.28%  +0.46%  확인(캐시)",
            "2026-07-14  Gold (proxy: GLD)  372.15  +1.37%  -1.59%  프록시"
          ]
        },
        {
          "name": "Volatility",
          "sourceType": "official/proxy",
          "status": "ok",
          "available": 1,
          "total": 1,
          "rows": [
            "2026-07-09  VIX  15.84  -6.27%  +1.73%  확인(캐시)"
          ]
        }
      ],
      "sourceStatus": [
        {
          "name": "Yahoo Finance",
          "status": "ok",
          "detail": "HTTP 200 application/json;charset=utf-8"
        },
        {
          "name": "FRED",
          "status": "http_fail",
          "detail": "ReadTimeout: "
        },
        {
          "name": "CFTC",
          "status": "ok",
          "detail": "HTTP 200 text/html; charset=UTF-8"
        },
        {
          "name": "Stooq",
          "status": "ok",
          "detail": "HTTP 200 text/html; charset=utf-8"
        },
        {
          "name": "Alpha Vantage",
          "status": "ok",
          "detail": "HTTP 200 application/json"
        }
      ],
      "recommendations": []
    },
    "sections": {
      "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-14  SG CTA Trend Index (p…  99.81   +0.56%  +2.33%  +2.73%  0.56  프록시    \n2026-07-14  SG Short-Term Traders…  31.02   +0.10%  +0.85%  +1.11%  0.11  프록시    \n2026-07-14  Barclay BTOP50 (proxy…  104.69  +0.26%  +1.69%  +2.44%  0.28  프록시    \n2026-07-14  DBMF ETF                31.02   +0.10%  +0.85%  +1.11%  0.11  프록시    \n2026-07-14  KMLM ETF                28.81   +0.42%  +2.53%  +3.78%  0.37  프록시    \n2026-07-14  Simplify CTA ETF (pro…  26.89   +1.17%  +3.62%  +3.30%  0.75  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
      "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-07-07  S&P 500 (ES)    10,912      -151,081  -93.3%  -0.62  ❌        확인     \n2026-07-07  USD Index (DX)  -4,454      +1,126    +20.2%  +0.33  ❌        확인     \n2026-07-07  UST 10Y         -135,113    -1,386    -1.0%   +0.02  ❌        확인     \n2026-07-07  UST 2Y          -24,292     +541      +2.2%   +0.16  ❌        확인     \n2026-07-07  UST 5Y          -47,706     +651      +1.3%   +0.28  ❌        확인     \n2026-07-07  UST 30Y         -351,500    +569,148  +61.8%  +1.28  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
      "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-07-15)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
      "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인(캐시) \n2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인(캐시) \n2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인(캐시) \n2026-07-14  Russell 2000        294.51    +0.35%  -0.92%  프록시    \n2026-07-14  STOXX 600 (proxy:…  88.30     +0.50%  -0.12%  프록시    \n2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인(캐시) \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-09  UST 2Y   4.16%  -5.0bp  확인(캐시) \n2026-07-09  UST 5Y   4.27%  -4.0bp  확인(캐시) \n2026-07-09  UST 10Y  4.54%  -2.0bp  확인(캐시) \n2026-07-09  UST 30Y  5.05%  -1.0bp  확인(캐시) \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인(캐시) \n2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인(캐시) \n2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인(캐시) \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-06  WTI                69.60   -0.19%  -1.36%  확인(캐시) \n2026-07-06  Brent              69.56   +1.28%  +0.46%  확인(캐시) \n2026-07-14  Gold (proxy: GLD)  372.15  +1.37%  -1.59%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-09  VIX  15.84  -6.27%  +1.73%  확인(캐시) \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
    },
    "alertBullets": [
      "CTA 프록시 트리거: 미발생 (기준일: 2026-07-15)",
      "국면 판단: neutral/no trigger",
      "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
      "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
    ]
  },
  "reports": [
    {
      "name": "last_report_latest.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger",
      "date": "2026-07-15",
      "trigger": "미발생",
      "regime": "neutral/no trigger",
      "mtime": "2026-07-15T17:03:30+09:00",
      "size": 4680,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-14  SG CTA Trend Index (p…  99.81   +0.56%  +2.33%  +2.73%  0.56  프록시    \n2026-07-14  SG Short-Term Traders…  31.02   +0.10%  +0.85%  +1.11%  0.11  프록시    \n2026-07-14  Barclay BTOP50 (proxy…  104.69  +0.26%  +1.69%  +2.44%  0.28  프록시    \n2026-07-14  DBMF ETF                31.02   +0.10%  +0.85%  +1.11%  0.11  프록시    \n2026-07-14  KMLM ETF                28.81   +0.42%  +2.53%  +3.78%  0.37  프록시    \n2026-07-14  Simplify CTA ETF (pro…  26.89   +1.17%  +3.62%  +3.30%  0.75  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-07-07  S&P 500 (ES)    10,912      -151,081  -93.3%  -0.62  ❌        확인     \n2026-07-07  USD Index (DX)  -4,454      +1,126    +20.2%  +0.33  ❌        확인     \n2026-07-07  UST 10Y         -135,113    -1,386    -1.0%   +0.02  ❌        확인     \n2026-07-07  UST 2Y          -24,292     +541      +2.2%   +0.16  ❌        확인     \n2026-07-07  UST 5Y          -47,706     +651      +1.3%   +0.28  ❌        확인     \n2026-07-07  UST 30Y         -351,500    +569,148  +61.8%  +1.28  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-07-15)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인(캐시) \n2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인(캐시) \n2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인(캐시) \n2026-07-14  Russell 2000        294.51    +0.35%  -0.92%  프록시    \n2026-07-14  STOXX 600 (proxy:…  88.30     +0.50%  -0.12%  프록시    \n2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인(캐시) \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-09  UST 2Y   4.16%  -5.0bp  확인(캐시) \n2026-07-09  UST 5Y   4.27%  -4.0bp  확인(캐시) \n2026-07-09  UST 10Y  4.54%  -2.0bp  확인(캐시) \n2026-07-09  UST 30Y  5.05%  -1.0bp  확인(캐시) \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인(캐시) \n2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인(캐시) \n2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인(캐시) \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-06  WTI                69.60   -0.19%  -1.36%  확인(캐시) \n2026-07-06  Brent              69.56   +1.28%  +0.46%  확인(캐시) \n2026-07-14  Gold (proxy: GLD)  372.15  +1.37%  -1.59%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-09  VIX  15.84  -6.27%  +1.73%  확인(캐시) \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 미발생 (기준일: 2026-07-15)",
        "regime": "- 국면 판단: neutral/no trigger",
        "network": "정상/미표기",
        "confirmLimited": 4,
        "proxy": 19,
        "availableRows": 27,
        "totalRows": 27,
        "coveragePct": 100.0
      },
      "dashboard": {
        "groups": [
          {
            "name": "Daily CTA Proxy",
            "sourceType": "official/manual/proxy",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-14  SG Short-Term Traders…  31.02   +0.10%  +0.85%  +1.11%  0.11  프록시",
              "2026-07-14  Barclay BTOP50 (proxy…  104.69  +0.26%  +1.69%  +2.44%  0.28  프록시",
              "2026-07-14  DBMF ETF                31.02   +0.10%  +0.85%  +1.11%  0.11  프록시",
              "2026-07-14  KMLM ETF                28.81   +0.42%  +2.53%  +3.78%  0.37  프록시",
              "2026-07-14  Simplify CTA ETF (pro…  26.89   +1.17%  +3.62%  +3.30%  0.75  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-07  S&P 500 (ES)    10,912      -151,081  -93.3%  -0.62  ❌        확인",
              "2026-07-07  UST 10Y         -135,113    -1,386    -1.0%   +0.02  ❌        확인",
              "2026-07-07  UST 2Y          -24,292     +541      +2.2%   +0.16  ❌        확인",
              "2026-07-07  UST 5Y          -47,706     +651      +1.3%   +0.28  ❌        확인",
              "2026-07-07  UST 30Y         -351,500    +569,148  +61.8%  +1.28  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인(캐시)",
              "2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인(캐시)",
              "2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인(캐시)",
              "2026-07-14  Russell 2000        294.51    +0.35%  -0.92%  프록시",
              "2026-07-14  STOXX 600 (proxy:…  88.30     +0.50%  -0.12%  프록시",
              "2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인(캐시)"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-09  UST 2Y   4.16%  -5.0bp  확인(캐시)",
              "2026-07-09  UST 5Y   4.27%  -4.0bp  확인(캐시)",
              "2026-07-09  UST 10Y  4.54%  -2.0bp  확인(캐시)",
              "2026-07-09  UST 30Y  5.05%  -1.0bp  확인(캐시)"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인(캐시)",
              "2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인(캐시)",
              "2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인(캐시)"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-06  WTI                69.60   -0.19%  -1.36%  확인(캐시)",
              "2026-07-06  Brent              69.56   +1.28%  +0.46%  확인(캐시)",
              "2026-07-14  Gold (proxy: GLD)  372.15  +1.37%  -1.59%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-09  VIX  15.84  -6.27%  +1.73%  확인(캐시)"
            ]
          }
        ],
        "sourceStatus": [
          {
            "name": "Yahoo Finance",
            "status": "ok",
            "detail": "HTTP 200 application/json;charset=utf-8"
          },
          {
            "name": "FRED",
            "status": "http_fail",
            "detail": "ReadTimeout: "
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=UTF-8"
          },
          {
            "name": "Stooq",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
          },
          {
            "name": "Alpha Vantage",
            "status": "ok",
            "detail": "HTTP 200 application/json"
          }
        ],
        "recommendations": []
      },
      "sections": {
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-14  SG CTA Trend Index (p…  99.81   +0.56%  +2.33%  +2.73%  0.56  프록시    \n2026-07-14  SG Short-Term Traders…  31.02   +0.10%  +0.85%  +1.11%  0.11  프록시    \n2026-07-14  Barclay BTOP50 (proxy…  104.69  +0.26%  +1.69%  +2.44%  0.28  프록시    \n2026-07-14  DBMF ETF                31.02   +0.10%  +0.85%  +1.11%  0.11  프록시    \n2026-07-14  KMLM ETF                28.81   +0.42%  +2.53%  +3.78%  0.37  프록시    \n2026-07-14  Simplify CTA ETF (pro…  26.89   +1.17%  +3.62%  +3.30%  0.75  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-07-07  S&P 500 (ES)    10,912      -151,081  -93.3%  -0.62  ❌        확인     \n2026-07-07  USD Index (DX)  -4,454      +1,126    +20.2%  +0.33  ❌        확인     \n2026-07-07  UST 10Y         -135,113    -1,386    -1.0%   +0.02  ❌        확인     \n2026-07-07  UST 2Y          -24,292     +541      +2.2%   +0.16  ❌        확인     \n2026-07-07  UST 5Y          -47,706     +651      +1.3%   +0.28  ❌        확인     \n2026-07-07  UST 30Y         -351,500    +569,148  +61.8%  +1.28  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-07-15)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인(캐시) \n2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인(캐시) \n2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인(캐시) \n2026-07-14  Russell 2000        294.51    +0.35%  -0.92%  프록시    \n2026-07-14  STOXX 600 (proxy:…  88.30     +0.50%  -0.12%  프록시    \n2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인(캐시) \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-09  UST 2Y   4.16%  -5.0bp  확인(캐시) \n2026-07-09  UST 5Y   4.27%  -4.0bp  확인(캐시) \n2026-07-09  UST 10Y  4.54%  -2.0bp  확인(캐시) \n2026-07-09  UST 30Y  5.05%  -1.0bp  확인(캐시) \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인(캐시) \n2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인(캐시) \n2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인(캐시) \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-06  WTI                69.60   -0.19%  -1.36%  확인(캐시) \n2026-07-06  Brent              69.56   +1.28%  +0.46%  확인(캐시) \n2026-07-14  Gold (proxy: GLD)  372.15  +1.37%  -1.59%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-09  VIX  15.84  -6.27%  +1.73%  확인(캐시) \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 미발생 (기준일: 2026-07-15)",
        "국면 판단: neutral/no trigger",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260715.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger",
      "date": "2026-07-15",
      "trigger": "미발생",
      "regime": "neutral/no trigger",
      "mtime": "2026-07-15T17:03:30+09:00",
      "size": 4680,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-14  SG CTA Trend Index (p…  99.81   +0.56%  +2.33%  +2.73%  0.56  프록시    \n2026-07-14  SG Short-Term Traders…  31.02   +0.10%  +0.85%  +1.11%  0.11  프록시    \n2026-07-14  Barclay BTOP50 (proxy…  104.69  +0.26%  +1.69%  +2.44%  0.28  프록시    \n2026-07-14  DBMF ETF                31.02   +0.10%  +0.85%  +1.11%  0.11  프록시    \n2026-07-14  KMLM ETF                28.81   +0.42%  +2.53%  +3.78%  0.37  프록시    \n2026-07-14  Simplify CTA ETF (pro…  26.89   +1.17%  +3.62%  +3.30%  0.75  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-07-07  S&P 500 (ES)    10,912      -151,081  -93.3%  -0.62  ❌        확인     \n2026-07-07  USD Index (DX)  -4,454      +1,126    +20.2%  +0.33  ❌        확인     \n2026-07-07  UST 10Y         -135,113    -1,386    -1.0%   +0.02  ❌        확인     \n2026-07-07  UST 2Y          -24,292     +541      +2.2%   +0.16  ❌        확인     \n2026-07-07  UST 5Y          -47,706     +651      +1.3%   +0.28  ❌        확인     \n2026-07-07  UST 30Y         -351,500    +569,148  +61.8%  +1.28  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-07-15)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인(캐시) \n2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인(캐시) \n2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인(캐시) \n2026-07-14  Russell 2000        294.51    +0.35%  -0.92%  프록시    \n2026-07-14  STOXX 600 (proxy:…  88.30     +0.50%  -0.12%  프록시    \n2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인(캐시) \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-09  UST 2Y   4.16%  -5.0bp  확인(캐시) \n2026-07-09  UST 5Y   4.27%  -4.0bp  확인(캐시) \n2026-07-09  UST 10Y  4.54%  -2.0bp  확인(캐시) \n2026-07-09  UST 30Y  5.05%  -1.0bp  확인(캐시) \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인(캐시) \n2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인(캐시) \n2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인(캐시) \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-06  WTI                69.60   -0.19%  -1.36%  확인(캐시) \n2026-07-06  Brent              69.56   +1.28%  +0.46%  확인(캐시) \n2026-07-14  Gold (proxy: GLD)  372.15  +1.37%  -1.59%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-09  VIX  15.84  -6.27%  +1.73%  확인(캐시) \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 미발생 (기준일: 2026-07-15)",
        "regime": "- 국면 판단: neutral/no trigger",
        "network": "정상/미표기",
        "confirmLimited": 4,
        "proxy": 19,
        "availableRows": 27,
        "totalRows": 27,
        "coveragePct": 100.0
      },
      "dashboard": {
        "groups": [
          {
            "name": "Daily CTA Proxy",
            "sourceType": "official/manual/proxy",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-14  SG Short-Term Traders…  31.02   +0.10%  +0.85%  +1.11%  0.11  프록시",
              "2026-07-14  Barclay BTOP50 (proxy…  104.69  +0.26%  +1.69%  +2.44%  0.28  프록시",
              "2026-07-14  DBMF ETF                31.02   +0.10%  +0.85%  +1.11%  0.11  프록시",
              "2026-07-14  KMLM ETF                28.81   +0.42%  +2.53%  +3.78%  0.37  프록시",
              "2026-07-14  Simplify CTA ETF (pro…  26.89   +1.17%  +3.62%  +3.30%  0.75  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-07  S&P 500 (ES)    10,912      -151,081  -93.3%  -0.62  ❌        확인",
              "2026-07-07  UST 10Y         -135,113    -1,386    -1.0%   +0.02  ❌        확인",
              "2026-07-07  UST 2Y          -24,292     +541      +2.2%   +0.16  ❌        확인",
              "2026-07-07  UST 5Y          -47,706     +651      +1.3%   +0.28  ❌        확인",
              "2026-07-07  UST 30Y         -351,500    +569,148  +61.8%  +1.28  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인(캐시)",
              "2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인(캐시)",
              "2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인(캐시)",
              "2026-07-14  Russell 2000        294.51    +0.35%  -0.92%  프록시",
              "2026-07-14  STOXX 600 (proxy:…  88.30     +0.50%  -0.12%  프록시",
              "2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인(캐시)"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-09  UST 2Y   4.16%  -5.0bp  확인(캐시)",
              "2026-07-09  UST 5Y   4.27%  -4.0bp  확인(캐시)",
              "2026-07-09  UST 10Y  4.54%  -2.0bp  확인(캐시)",
              "2026-07-09  UST 30Y  5.05%  -1.0bp  확인(캐시)"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인(캐시)",
              "2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인(캐시)",
              "2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인(캐시)"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-06  WTI                69.60   -0.19%  -1.36%  확인(캐시)",
              "2026-07-06  Brent              69.56   +1.28%  +0.46%  확인(캐시)",
              "2026-07-14  Gold (proxy: GLD)  372.15  +1.37%  -1.59%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-09  VIX  15.84  -6.27%  +1.73%  확인(캐시)"
            ]
          }
        ],
        "sourceStatus": [
          {
            "name": "Yahoo Finance",
            "status": "ok",
            "detail": "HTTP 200 application/json;charset=utf-8"
          },
          {
            "name": "FRED",
            "status": "http_fail",
            "detail": "ReadTimeout: "
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=UTF-8"
          },
          {
            "name": "Stooq",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
          },
          {
            "name": "Alpha Vantage",
            "status": "ok",
            "detail": "HTTP 200 application/json"
          }
        ],
        "recommendations": []
      },
      "sections": {
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-14  SG CTA Trend Index (p…  99.81   +0.56%  +2.33%  +2.73%  0.56  프록시    \n2026-07-14  SG Short-Term Traders…  31.02   +0.10%  +0.85%  +1.11%  0.11  프록시    \n2026-07-14  Barclay BTOP50 (proxy…  104.69  +0.26%  +1.69%  +2.44%  0.28  프록시    \n2026-07-14  DBMF ETF                31.02   +0.10%  +0.85%  +1.11%  0.11  프록시    \n2026-07-14  KMLM ETF                28.81   +0.42%  +2.53%  +3.78%  0.37  프록시    \n2026-07-14  Simplify CTA ETF (pro…  26.89   +1.17%  +3.62%  +3.30%  0.75  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-07-07  S&P 500 (ES)    10,912      -151,081  -93.3%  -0.62  ❌        확인     \n2026-07-07  USD Index (DX)  -4,454      +1,126    +20.2%  +0.33  ❌        확인     \n2026-07-07  UST 10Y         -135,113    -1,386    -1.0%   +0.02  ❌        확인     \n2026-07-07  UST 2Y          -24,292     +541      +2.2%   +0.16  ❌        확인     \n2026-07-07  UST 5Y          -47,706     +651      +1.3%   +0.28  ❌        확인     \n2026-07-07  UST 30Y         -351,500    +569,148  +61.8%  +1.28  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-07-15)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인(캐시) \n2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인(캐시) \n2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인(캐시) \n2026-07-14  Russell 2000        294.51    +0.35%  -0.92%  프록시    \n2026-07-14  STOXX 600 (proxy:…  88.30     +0.50%  -0.12%  프록시    \n2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인(캐시) \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-09  UST 2Y   4.16%  -5.0bp  확인(캐시) \n2026-07-09  UST 5Y   4.27%  -4.0bp  확인(캐시) \n2026-07-09  UST 10Y  4.54%  -2.0bp  확인(캐시) \n2026-07-09  UST 30Y  5.05%  -1.0bp  확인(캐시) \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인(캐시) \n2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인(캐시) \n2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인(캐시) \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-06  WTI                69.60   -0.19%  -1.36%  확인(캐시) \n2026-07-06  Brent              69.56   +1.28%  +0.46%  확인(캐시) \n2026-07-14  Gold (proxy: GLD)  372.15  +1.37%  -1.59%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-09  VIX  15.84  -6.27%  +1.73%  확인(캐시) \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 미발생 (기준일: 2026-07-15)",
        "국면 판단: neutral/no trigger",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260713.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / insufficient data / 확인 제한",
      "date": "2026-07-13",
      "trigger": "확인 제한",
      "regime": "insufficient data / 확인 제한",
      "mtime": "2026-07-13T08:32:39+09:00",
      "size": 5380,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / insufficient data / 확인 제한\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%  D3  D5  Δ Z  Confirm\n----------  ----------------------  -----  -----  --  --  ---  -------\n2026-07-13  SG CTA Trend Index (p…  NA     NA     NA  NA  NA   확인 제한  \n2026-07-13  SG Short-Term Traders…  NA     NA     NA  NA  NA   확인 제한  \n2026-07-13  Barclay BTOP50 (proxy…  NA     NA     NA  NA  NA   확인 제한  \n2026-07-13  DBMF ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-07-13  KMLM ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-07-13  Simplify CTA ETF (pro…  NA     NA     NA  NA  NA   확인 제한  \n```\n메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=HTTP 429 text/html Too Many Requests\n\\n; stooq=unexpected content-type: text/html; charset=utf-8; alpha_vantage=missing ALPHA_VANTAGE_API_KEY); KMLM(yahoo=HTTP 429 text/html Too Many Requests\n\\n; stooq=unexpected content-type: text/html; charset=utf-8; alpha_vantage=missing ALPHA_VANTAGE_API_KEY); CTA(yahoo=HTTP 429 text/html Too Many Requests\n\\n; stooq=unexpected content-type: text/html; charset=utf-8; alpha_vantage=missing ALPHA_VANTAGE_API_KEY)) → 확인 제한\n판정: 유효 데이터 부족 → Trigger 판정 불가\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-07-07  S&P 500 (ES)    10,912      -151,081  -93.3%  -0.62  ❌        확인     \n2026-07-07  USD Index (DX)  -4,454      +1,126    +20.2%  +0.33  ❌        확인     \n2026-07-07  UST 10Y         -135,113    -1,386    -1.0%   +0.02  ❌        확인     \n2026-07-07  UST 2Y          -24,292     +541      +2.2%   +0.16  ❌        확인     \n2026-07-07  UST 5Y          -47,706     +651      +1.3%   +0.28  ❌        확인     \n2026-07-07  UST 30Y         -351,500    +569,148  +61.8%  +1.28  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 확인 제한 (기준일: 2026-07-13)\n- 국면 판단: insufficient data / 확인 제한\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인     \n2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인     \n2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인     \n2026-07-13  Russell 2000        NA        NA      NA      확인 제한  \n2026-07-13  STOXX 600 (proxy:…  NA        NA      NA      확인 제한  \n2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-09  UST 2Y   4.16%  -5.0bp  확인     \n2026-07-09  UST 5Y   4.27%  -4.0bp  확인     \n2026-07-09  UST 10Y  4.54%  -2.0bp  확인     \n2026-07-09  UST 30Y  5.05%  -1.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인     \n2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인     \n2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity  Value  D1      D3      Confirm\n----------  ---------  -----  ------  ------  -------\n2026-07-06  WTI        69.60  -0.19%  -1.36%  확인     \n2026-07-06  Brent      69.56  +1.28%  +0.46%  확인     \n2026-07-13  Gold       NA     NA      NA      확인 제한  \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol                 Value  D1      D3      Confirm\n----------  ------------------  -----  ------  ------  -------\n2026-07-09  VIX                 15.84  -6.27%  +1.73%  확인     \n2026-07-13  VVIX (proxy: VVIX)  NA     NA      NA      확인 제한  \n```\n메모: Russell 2000: 시세 접근 실패(yahoo=HTTP 429 text/html Too Many Requests\n\\n; stooq=unexpected content-type: text/html; charset=utf-8; alpha_vantage=missing ALPHA_VANTAGE_API_KEY)\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 확인 제한 (기준일: 2026-07-13)",
        "regime": "- 국면 판단: insufficient data / 확인 제한",
        "network": "정상/미표기",
        "confirmLimited": 19,
        "proxy": 10,
        "availableRows": 19,
        "totalRows": 27,
        "coveragePct": 70.4
      },
      "dashboard": {
        "groups": [
          {
            "name": "Daily CTA Proxy",
            "sourceType": "official/manual/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 5,
            "rows": [
              "2026-07-13  SG Short-Term Traders…  NA     NA     NA  NA  NA   확인 제한",
              "2026-07-13  Barclay BTOP50 (proxy…  NA     NA     NA  NA  NA   확인 제한",
              "2026-07-13  DBMF ETF                NA     NA     NA  NA  NA   확인 제한",
              "2026-07-13  KMLM ETF                NA     NA     NA  NA  NA   확인 제한",
              "2026-07-13  Simplify CTA ETF (pro…  NA     NA     NA  NA  NA   확인 제한"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-07  S&P 500 (ES)    10,912      -151,081  -93.3%  -0.62  ❌        확인",
              "2026-07-07  UST 10Y         -135,113    -1,386    -1.0%   +0.02  ❌        확인",
              "2026-07-07  UST 2Y          -24,292     +541      +2.2%   +0.16  ❌        확인",
              "2026-07-07  UST 5Y          -47,706     +651      +1.3%   +0.28  ❌        확인",
              "2026-07-07  UST 30Y         -351,500    +569,148  +61.8%  +1.28  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "partial",
            "available": 4,
            "total": 6,
            "rows": [
              "2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인",
              "2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인",
              "2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인",
              "2026-07-13  Russell 2000        NA        NA      NA      확인 제한",
              "2026-07-13  STOXX 600 (proxy:…  NA        NA      NA      확인 제한",
              "2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-09  UST 2Y   4.16%  -5.0bp  확인",
              "2026-07-09  UST 5Y   4.27%  -4.0bp  확인",
              "2026-07-09  UST 10Y  4.54%  -2.0bp  확인",
              "2026-07-09  UST 30Y  5.05%  -1.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인",
              "2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인",
              "2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "partial",
            "available": 2,
            "total": 3,
            "rows": [
              "2026-07-06  WTI        69.60  -0.19%  -1.36%  확인",
              "2026-07-06  Brent      69.56  +1.28%  +0.46%  확인",
              "2026-07-13  Gold       NA     NA      NA      확인 제한"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-09  VIX                 15.84  -6.27%  +1.73%  확인"
            ]
          }
        ],
        "sourceStatus": [
          {
            "name": "Yahoo Finance",
            "status": "ok",
            "detail": "HTTP 200 application/json;charset=utf-8"
          },
          {
            "name": "FRED",
            "status": "http_fail",
            "detail": "ReadTimeout: "
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=UTF-8"
          },
          {
            "name": "Stooq",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
          },
          {
            "name": "Alpha Vantage",
            "status": "missing_key",
            "detail": "reachable, but ALPHA_VANTAGE_API_KEY is not configured"
          }
        ],
        "recommendations": [
          "ETF/지수 프록시 확인 제한을 줄이려면 .env에 ALPHA_VANTAGE_API_KEY를 추가하세요.",
          "SG CTA/BTOP50은 data/cta_proxies.csv에 수동 값이 있으면 네트워크와 무관하게 살아납니다."
        ]
      },
      "sections": {
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%  D3  D5  Δ Z  Confirm\n----------  ----------------------  -----  -----  --  --  ---  -------\n2026-07-13  SG CTA Trend Index (p…  NA     NA     NA  NA  NA   확인 제한  \n2026-07-13  SG Short-Term Traders…  NA     NA     NA  NA  NA   확인 제한  \n2026-07-13  Barclay BTOP50 (proxy…  NA     NA     NA  NA  NA   확인 제한  \n2026-07-13  DBMF ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-07-13  KMLM ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-07-13  Simplify CTA ETF (pro…  NA     NA     NA  NA  NA   확인 제한  \n```\n메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=HTTP 429 text/html Too Many Requests\n\\n; stooq=unexpected content-type: text/html; charset=utf-8; alpha_vantage=missing ALPHA_VANTAGE_API_KEY); KMLM(yahoo=HTTP 429 text/html Too Many Requests\n\\n; stooq=unexpected content-type: text/html; charset=utf-8; alpha_vantage=missing ALPHA_VANTAGE_API_KEY); CTA(yahoo=HTTP 429 text/html Too Many Requests\n\\n; stooq=unexpected content-type: text/html; charset=utf-8; alpha_vantage=missing ALPHA_VANTAGE_API_KEY)) → 확인 제한\n판정: 유효 데이터 부족 → Trigger 판정 불가\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-07-07  S&P 500 (ES)    10,912      -151,081  -93.3%  -0.62  ❌        확인     \n2026-07-07  USD Index (DX)  -4,454      +1,126    +20.2%  +0.33  ❌        확인     \n2026-07-07  UST 10Y         -135,113    -1,386    -1.0%   +0.02  ❌        확인     \n2026-07-07  UST 2Y          -24,292     +541      +2.2%   +0.16  ❌        확인     \n2026-07-07  UST 5Y          -47,706     +651      +1.3%   +0.28  ❌        확인     \n2026-07-07  UST 30Y         -351,500    +569,148  +61.8%  +1.28  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 확인 제한 (기준일: 2026-07-13)\n- 국면 판단: insufficient data / 확인 제한\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인     \n2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인     \n2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인     \n2026-07-13  Russell 2000        NA        NA      NA      확인 제한  \n2026-07-13  STOXX 600 (proxy:…  NA        NA      NA      확인 제한  \n2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-09  UST 2Y   4.16%  -5.0bp  확인     \n2026-07-09  UST 5Y   4.27%  -4.0bp  확인     \n2026-07-09  UST 10Y  4.54%  -2.0bp  확인     \n2026-07-09  UST 30Y  5.05%  -1.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인     \n2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인     \n2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity  Value  D1      D3      Confirm\n----------  ---------  -----  ------  ------  -------\n2026-07-06  WTI        69.60  -0.19%  -1.36%  확인     \n2026-07-06  Brent      69.56  +1.28%  +0.46%  확인     \n2026-07-13  Gold       NA     NA      NA      확인 제한  \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol                 Value  D1      D3      Confirm\n----------  ------------------  -----  ------  ------  -------\n2026-07-09  VIX                 15.84  -6.27%  +1.73%  확인     \n2026-07-13  VVIX (proxy: VVIX)  NA     NA      NA      확인 제한  \n```\n메모: Russell 2000: 시세 접근 실패(yahoo=HTTP 429 text/html Too Many Requests\n\\n; stooq=unexpected content-type: text/html; charset=utf-8; alpha_vantage=missing ALPHA_VANTAGE_API_KEY)\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 확인 제한 (기준일: 2026-07-13)",
        "국면 판단: insufficient data / 확인 제한",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260712.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / insufficient data / 확인 제한",
      "date": "2026-07-12",
      "trigger": "확인 제한",
      "regime": "insufficient data / 확인 제한",
      "mtime": "2026-07-12T09:31:36+09:00",
      "size": 6234,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / insufficient data / 확인 제한\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%  D3  D5  Δ Z  Confirm\n----------  ----------------------  -----  -----  --  --  ---  -------\n2026-07-12  SG CTA Trend Index (p…  NA     NA     NA  NA  NA   확인 제한  \n2026-07-12  SG Short-Term Traders…  NA     NA     NA  NA  NA   확인 제한  \n2026-07-12  Barclay BTOP50 (proxy…  NA     NA     NA  NA  NA   확인 제한  \n2026-07-12  DBMF ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-07-12  KMLM ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-07-12  Simplify CTA ETF (pro…  NA     NA     NA  NA  NA   확인 제한  \n```\n메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한\n판정: 유효 데이터 부족 → Trigger 판정 불가\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate  Asset           Value(Net)  WoW Δ  %   Δ Z  Unwind?  Confirm\n----  --------------  ----------  -----  --  ---  -------  -------\nNA    S&P 500 (ES)    NA          NA     NA  NA   ❌        확인 제한  \nNA    USD Index (DX)  NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 10Y         NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 2Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 5Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 30Y         NA          NA     NA  NA   ❌        확인 제한  \n```\n메모: S&P 500 (ES): CFTC COT 접근/매칭 실패(ConnectError: [Errno 8] nodename nor servname provided, or not known) → 확인 제한\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 확인 제한 (기준일: 2026-07-12)\n- 국면 판단: insufficient data / 확인 제한\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 환경 제약: 현재 실행 환경에서 외부 네트워크/DNS 접근이 제한되어 실시간 확인이 대폭 제한됨\n- 데이터 메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한 / SG Short-Term Traders Index (proxy: DBMF): 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)) → 확인 제한\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-07-12  S&P 500             NA     NA  NA  확인 제한  \n2026-07-12  Nasdaq 100          NA     NA  NA  확인 제한  \n2026-07-12  Dow                 NA     NA  NA  확인 제한  \n2026-07-12  Russell 2000        NA     NA  NA  확인 제한  \n2026-07-12  STOXX 600 (proxy:…  NA     NA  NA  확인 제한  \n2026-07-12  Nikkei 225          NA     NA  NA  확인 제한  \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1  Confirm\n----------  -------  -----  --  -------\n2026-07-12  UST 2Y   NA     NA  확인 제한  \n2026-07-12  UST 5Y   NA     NA  확인 제한  \n2026-07-12  UST 10Y  NA     NA  확인 제한  \n2026-07-12  UST 30Y  NA     NA  확인 제한  \n```\n(금리) FRED 접근 실패: FRED fredgraph.csv (public): curl rc=6: curl: (6) Could not resolve host: fred.stlouisfed.org\n\n(3) FX (프록시)\n```\n기준일         FX                  Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-07-12  DXY (proxy: DTWEX…  NA     NA  NA  확인 제한  \n2026-07-12  EURUSD              NA     NA  NA  확인 제한  \n2026-07-12  USDJPY              NA     NA  NA  확인 제한  \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity  Value  D1  D3  Confirm\n----------  ---------  -----  --  --  -------\n2026-07-12  WTI        NA     NA  NA  확인 제한  \n2026-07-12  Brent      NA     NA  NA  확인 제한  \n2026-07-12  Gold       NA     NA  NA  확인 제한  \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol                 Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-07-12  VIX                 NA     NA  NA  확인 제한  \n2026-07-12  VVIX (proxy: VVIX)  NA     NA  NA  확인 제한  \n```\n메모: S&P 500: 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=ConnectError: [Errno 8] nodename nor servname provided, or not known)\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n네트워크/DNS 진단:\n- query1.finance.yahoo.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- stooq.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- www.cftc.gov: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 확인 제한 (기준일: 2026-07-12)",
        "regime": "- 국면 판단: insufficient data / 확인 제한",
        "network": "확인 제한",
        "confirmLimited": 42,
        "proxy": 10,
        "availableRows": 0,
        "totalRows": 27,
        "coveragePct": 0.0
      },
      "dashboard": {
        "groups": [
          {
            "name": "Daily CTA Proxy",
            "sourceType": "official/manual/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 5,
            "rows": [
              "2026-07-12  SG Short-Term Traders…  NA     NA     NA  NA  NA   확인 제한",
              "2026-07-12  Barclay BTOP50 (proxy…  NA     NA     NA  NA  NA   확인 제한",
              "2026-07-12  DBMF ETF                NA     NA     NA  NA  NA   확인 제한",
              "2026-07-12  KMLM ETF                NA     NA     NA  NA  NA   확인 제한",
              "2026-07-12  Simplify CTA ETF (pro…  NA     NA     NA  NA  NA   확인 제한"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "unavailable",
            "available": 0,
            "total": 5,
            "rows": [
              "NA    S&P 500 (ES)    NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 10Y         NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 2Y          NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 5Y          NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 30Y         NA          NA     NA  NA   ❌        확인 제한"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "unavailable",
            "available": 0,
            "total": 6,
            "rows": [
              "2026-07-12  S&P 500             NA     NA  NA  확인 제한",
              "2026-07-12  Nasdaq 100          NA     NA  NA  확인 제한",
              "2026-07-12  Dow                 NA     NA  NA  확인 제한",
              "2026-07-12  Russell 2000        NA     NA  NA  확인 제한",
              "2026-07-12  STOXX 600 (proxy:…  NA     NA  NA  확인 제한",
              "2026-07-12  Nikkei 225          NA     NA  NA  확인 제한"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "unavailable",
            "available": 0,
            "total": 4,
            "rows": [
              "2026-07-12  UST 2Y   NA     NA  확인 제한",
              "2026-07-12  UST 5Y   NA     NA  확인 제한",
              "2026-07-12  UST 10Y  NA     NA  확인 제한",
              "2026-07-12  UST 30Y  NA     NA  확인 제한"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 3,
            "rows": [
              "2026-07-12  DXY (proxy: DTWEX…  NA     NA  NA  확인 제한",
              "2026-07-12  EURUSD              NA     NA  NA  확인 제한",
              "2026-07-12  USDJPY              NA     NA  NA  확인 제한"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 3,
            "rows": [
              "2026-07-12  WTI        NA     NA  NA  확인 제한",
              "2026-07-12  Brent      NA     NA  NA  확인 제한",
              "2026-07-12  Gold       NA     NA  NA  확인 제한"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 1,
            "rows": [
              "2026-07-12  VIX                 NA     NA  NA  확인 제한"
            ]
          }
        ],
        "sourceStatus": [
          {
            "name": "Yahoo Finance",
            "status": "ok",
            "detail": "HTTP 200 application/json;charset=utf-8"
          },
          {
            "name": "FRED",
            "status": "http_fail",
            "detail": "ReadTimeout: "
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=UTF-8"
          },
          {
            "name": "Stooq",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
          },
          {
            "name": "Alpha Vantage",
            "status": "ok",
            "detail": "HTTP 200 application/json"
          }
        ],
        "recommendations": [
          "SG CTA/BTOP50은 data/cta_proxies.csv에 수동 값이 있으면 네트워크와 무관하게 살아납니다.",
          "COT는 CFTC 공식 주간 데이터라 네트워크 성공 후 캐시 재사용 전략이 가장 현실적입니다."
        ]
      },
      "sections": {
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%  D3  D5  Δ Z  Confirm\n----------  ----------------------  -----  -----  --  --  ---  -------\n2026-07-12  SG CTA Trend Index (p…  NA     NA     NA  NA  NA   확인 제한  \n2026-07-12  SG Short-Term Traders…  NA     NA     NA  NA  NA   확인 제한  \n2026-07-12  Barclay BTOP50 (proxy…  NA     NA     NA  NA  NA   확인 제한  \n2026-07-12  DBMF ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-07-12  KMLM ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-07-12  Simplify CTA ETF (pro…  NA     NA     NA  NA  NA   확인 제한  \n```\n메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한\n판정: 유효 데이터 부족 → Trigger 판정 불가\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate  Asset           Value(Net)  WoW Δ  %   Δ Z  Unwind?  Confirm\n----  --------------  ----------  -----  --  ---  -------  -------\nNA    S&P 500 (ES)    NA          NA     NA  NA   ❌        확인 제한  \nNA    USD Index (DX)  NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 10Y         NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 2Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 5Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 30Y         NA          NA     NA  NA   ❌        확인 제한  \n```\n메모: S&P 500 (ES): CFTC COT 접근/매칭 실패(ConnectError: [Errno 8] nodename nor servname provided, or not known) → 확인 제한\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 확인 제한 (기준일: 2026-07-12)\n- 국면 판단: insufficient data / 확인 제한\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 환경 제약: 현재 실행 환경에서 외부 네트워크/DNS 접근이 제한되어 실시간 확인이 대폭 제한됨\n- 데이터 메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한 / SG Short-Term Traders Index (proxy: DBMF): 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)) → 확인 제한",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-07-12  S&P 500             NA     NA  NA  확인 제한  \n2026-07-12  Nasdaq 100          NA     NA  NA  확인 제한  \n2026-07-12  Dow                 NA     NA  NA  확인 제한  \n2026-07-12  Russell 2000        NA     NA  NA  확인 제한  \n2026-07-12  STOXX 600 (proxy:…  NA     NA  NA  확인 제한  \n2026-07-12  Nikkei 225          NA     NA  NA  확인 제한  \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1  Confirm\n----------  -------  -----  --  -------\n2026-07-12  UST 2Y   NA     NA  확인 제한  \n2026-07-12  UST 5Y   NA     NA  확인 제한  \n2026-07-12  UST 10Y  NA     NA  확인 제한  \n2026-07-12  UST 30Y  NA     NA  확인 제한  \n```\n(금리) FRED 접근 실패: FRED fredgraph.csv (public): curl rc=6: curl: (6) Could not resolve host: fred.stlouisfed.org\n\n(3) FX (프록시)\n```\n기준일         FX                  Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-07-12  DXY (proxy: DTWEX…  NA     NA  NA  확인 제한  \n2026-07-12  EURUSD              NA     NA  NA  확인 제한  \n2026-07-12  USDJPY              NA     NA  NA  확인 제한  \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity  Value  D1  D3  Confirm\n----------  ---------  -----  --  --  -------\n2026-07-12  WTI        NA     NA  NA  확인 제한  \n2026-07-12  Brent      NA     NA  NA  확인 제한  \n2026-07-12  Gold       NA     NA  NA  확인 제한  \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol                 Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-07-12  VIX                 NA     NA  NA  확인 제한  \n2026-07-12  VVIX (proxy: VVIX)  NA     NA  NA  확인 제한  \n```\n메모: S&P 500: 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=ConnectError: [Errno 8] nodename nor servname provided, or not known)\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n네트워크/DNS 진단:\n- query1.finance.yahoo.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- stooq.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- www.cftc.gov: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 확인 제한 (기준일: 2026-07-12)",
        "국면 판단: insufficient data / 확인 제한",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "환경 제약: 현재 실행 환경에서 외부 네트워크/DNS 접근이 제한되어 실시간 확인이 대폭 제한됨",
        "데이터 메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한 / SG Short-Term Traders Index (proxy: DBMF): 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)) → 확인 제한"
      ]
    },
    {
      "name": "last_report_20260602.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / insufficient data / 확인 제한",
      "date": "2026-06-02",
      "trigger": "확인 제한",
      "regime": "insufficient data / 확인 제한",
      "mtime": "2026-06-02T07:21:55+09:00",
      "size": 6234,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / insufficient data / 확인 제한\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%  D3  D5  Δ Z  Confirm\n----------  ----------------------  -----  -----  --  --  ---  -------\n2026-06-02  SG CTA Trend Index (p…  NA     NA     NA  NA  NA   확인 제한  \n2026-06-02  SG Short-Term Traders…  NA     NA     NA  NA  NA   확인 제한  \n2026-06-02  Barclay BTOP50 (proxy…  NA     NA     NA  NA  NA   확인 제한  \n2026-06-02  DBMF ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-06-02  KMLM ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-06-02  Simplify CTA ETF (pro…  NA     NA     NA  NA  NA   확인 제한  \n```\n메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한\n판정: 유효 데이터 부족 → Trigger 판정 불가\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate  Asset           Value(Net)  WoW Δ  %   Δ Z  Unwind?  Confirm\n----  --------------  ----------  -----  --  ---  -------  -------\nNA    S&P 500 (ES)    NA          NA     NA  NA   ❌        확인 제한  \nNA    USD Index (DX)  NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 10Y         NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 2Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 5Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 30Y         NA          NA     NA  NA   ❌        확인 제한  \n```\n메모: S&P 500 (ES): CFTC COT 접근/매칭 실패(ConnectError: [Errno 8] nodename nor servname provided, or not known) → 확인 제한\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 확인 제한 (기준일: 2026-06-02)\n- 국면 판단: insufficient data / 확인 제한\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 환경 제약: 현재 실행 환경에서 외부 네트워크/DNS 접근이 제한되어 실시간 확인이 대폭 제한됨\n- 데이터 메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한 / SG Short-Term Traders Index (proxy: DBMF): 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)) → 확인 제한\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-06-02  S&P 500             NA     NA  NA  확인 제한  \n2026-06-02  Nasdaq 100          NA     NA  NA  확인 제한  \n2026-06-02  Dow                 NA     NA  NA  확인 제한  \n2026-06-02  Russell 2000        NA     NA  NA  확인 제한  \n2026-06-02  STOXX 600 (proxy:…  NA     NA  NA  확인 제한  \n2026-06-02  Nikkei 225          NA     NA  NA  확인 제한  \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1  Confirm\n----------  -------  -----  --  -------\n2026-06-02  UST 2Y   NA     NA  확인 제한  \n2026-06-02  UST 5Y   NA     NA  확인 제한  \n2026-06-02  UST 10Y  NA     NA  확인 제한  \n2026-06-02  UST 30Y  NA     NA  확인 제한  \n```\n(금리) FRED 접근 실패: FRED fredgraph.csv (public): curl rc=6: curl: (6) Could not resolve host: fred.stlouisfed.org\n\n(3) FX (프록시)\n```\n기준일         FX                  Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-06-02  DXY (proxy: DTWEX…  NA     NA  NA  확인 제한  \n2026-06-02  EURUSD              NA     NA  NA  확인 제한  \n2026-06-02  USDJPY              NA     NA  NA  확인 제한  \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity  Value  D1  D3  Confirm\n----------  ---------  -----  --  --  -------\n2026-06-02  WTI        NA     NA  NA  확인 제한  \n2026-06-02  Brent      NA     NA  NA  확인 제한  \n2026-06-02  Gold       NA     NA  NA  확인 제한  \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol                 Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-06-02  VIX                 NA     NA  NA  확인 제한  \n2026-06-02  VVIX (proxy: VVIX)  NA     NA  NA  확인 제한  \n```\n메모: S&P 500: 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=ConnectError: [Errno 8] nodename nor servname provided, or not known)\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n네트워크/DNS 진단:\n- query1.finance.yahoo.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- stooq.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- www.cftc.gov: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 확인 제한 (기준일: 2026-06-02)",
        "regime": "- 국면 판단: insufficient data / 확인 제한",
        "network": "확인 제한",
        "confirmLimited": 42,
        "proxy": 10,
        "availableRows": 0,
        "totalRows": 27,
        "coveragePct": 0.0
      },
      "dashboard": {
        "groups": [
          {
            "name": "Daily CTA Proxy",
            "sourceType": "official/manual/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 5,
            "rows": [
              "2026-06-02  SG Short-Term Traders…  NA     NA     NA  NA  NA   확인 제한",
              "2026-06-02  Barclay BTOP50 (proxy…  NA     NA     NA  NA  NA   확인 제한",
              "2026-06-02  DBMF ETF                NA     NA     NA  NA  NA   확인 제한",
              "2026-06-02  KMLM ETF                NA     NA     NA  NA  NA   확인 제한",
              "2026-06-02  Simplify CTA ETF (pro…  NA     NA     NA  NA  NA   확인 제한"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "unavailable",
            "available": 0,
            "total": 5,
            "rows": [
              "NA    S&P 500 (ES)    NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 10Y         NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 2Y          NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 5Y          NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 30Y         NA          NA     NA  NA   ❌        확인 제한"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "unavailable",
            "available": 0,
            "total": 6,
            "rows": [
              "2026-06-02  S&P 500             NA     NA  NA  확인 제한",
              "2026-06-02  Nasdaq 100          NA     NA  NA  확인 제한",
              "2026-06-02  Dow                 NA     NA  NA  확인 제한",
              "2026-06-02  Russell 2000        NA     NA  NA  확인 제한",
              "2026-06-02  STOXX 600 (proxy:…  NA     NA  NA  확인 제한",
              "2026-06-02  Nikkei 225          NA     NA  NA  확인 제한"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "unavailable",
            "available": 0,
            "total": 4,
            "rows": [
              "2026-06-02  UST 2Y   NA     NA  확인 제한",
              "2026-06-02  UST 5Y   NA     NA  확인 제한",
              "2026-06-02  UST 10Y  NA     NA  확인 제한",
              "2026-06-02  UST 30Y  NA     NA  확인 제한"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 3,
            "rows": [
              "2026-06-02  DXY (proxy: DTWEX…  NA     NA  NA  확인 제한",
              "2026-06-02  EURUSD              NA     NA  NA  확인 제한",
              "2026-06-02  USDJPY              NA     NA  NA  확인 제한"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 3,
            "rows": [
              "2026-06-02  WTI        NA     NA  NA  확인 제한",
              "2026-06-02  Brent      NA     NA  NA  확인 제한",
              "2026-06-02  Gold       NA     NA  NA  확인 제한"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 1,
            "rows": [
              "2026-06-02  VIX                 NA     NA  NA  확인 제한"
            ]
          }
        ],
        "sourceStatus": [
          {
            "name": "Yahoo Finance",
            "status": "ok",
            "detail": "HTTP 200 application/json;charset=utf-8"
          },
          {
            "name": "FRED",
            "status": "http_fail",
            "detail": "ReadTimeout: "
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=UTF-8"
          },
          {
            "name": "Stooq",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
          },
          {
            "name": "Alpha Vantage",
            "status": "ok",
            "detail": "HTTP 200 application/json"
          }
        ],
        "recommendations": [
          "SG CTA/BTOP50은 data/cta_proxies.csv에 수동 값이 있으면 네트워크와 무관하게 살아납니다.",
          "COT는 CFTC 공식 주간 데이터라 네트워크 성공 후 캐시 재사용 전략이 가장 현실적입니다."
        ]
      },
      "sections": {
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%  D3  D5  Δ Z  Confirm\n----------  ----------------------  -----  -----  --  --  ---  -------\n2026-06-02  SG CTA Trend Index (p…  NA     NA     NA  NA  NA   확인 제한  \n2026-06-02  SG Short-Term Traders…  NA     NA     NA  NA  NA   확인 제한  \n2026-06-02  Barclay BTOP50 (proxy…  NA     NA     NA  NA  NA   확인 제한  \n2026-06-02  DBMF ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-06-02  KMLM ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-06-02  Simplify CTA ETF (pro…  NA     NA     NA  NA  NA   확인 제한  \n```\n메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한\n판정: 유효 데이터 부족 → Trigger 판정 불가\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate  Asset           Value(Net)  WoW Δ  %   Δ Z  Unwind?  Confirm\n----  --------------  ----------  -----  --  ---  -------  -------\nNA    S&P 500 (ES)    NA          NA     NA  NA   ❌        확인 제한  \nNA    USD Index (DX)  NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 10Y         NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 2Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 5Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 30Y         NA          NA     NA  NA   ❌        확인 제한  \n```\n메모: S&P 500 (ES): CFTC COT 접근/매칭 실패(ConnectError: [Errno 8] nodename nor servname provided, or not known) → 확인 제한\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 확인 제한 (기준일: 2026-06-02)\n- 국면 판단: insufficient data / 확인 제한\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 환경 제약: 현재 실행 환경에서 외부 네트워크/DNS 접근이 제한되어 실시간 확인이 대폭 제한됨\n- 데이터 메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한 / SG Short-Term Traders Index (proxy: DBMF): 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)) → 확인 제한",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-06-02  S&P 500             NA     NA  NA  확인 제한  \n2026-06-02  Nasdaq 100          NA     NA  NA  확인 제한  \n2026-06-02  Dow                 NA     NA  NA  확인 제한  \n2026-06-02  Russell 2000        NA     NA  NA  확인 제한  \n2026-06-02  STOXX 600 (proxy:…  NA     NA  NA  확인 제한  \n2026-06-02  Nikkei 225          NA     NA  NA  확인 제한  \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1  Confirm\n----------  -------  -----  --  -------\n2026-06-02  UST 2Y   NA     NA  확인 제한  \n2026-06-02  UST 5Y   NA     NA  확인 제한  \n2026-06-02  UST 10Y  NA     NA  확인 제한  \n2026-06-02  UST 30Y  NA     NA  확인 제한  \n```\n(금리) FRED 접근 실패: FRED fredgraph.csv (public): curl rc=6: curl: (6) Could not resolve host: fred.stlouisfed.org\n\n(3) FX (프록시)\n```\n기준일         FX                  Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-06-02  DXY (proxy: DTWEX…  NA     NA  NA  확인 제한  \n2026-06-02  EURUSD              NA     NA  NA  확인 제한  \n2026-06-02  USDJPY              NA     NA  NA  확인 제한  \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity  Value  D1  D3  Confirm\n----------  ---------  -----  --  --  -------\n2026-06-02  WTI        NA     NA  NA  확인 제한  \n2026-06-02  Brent      NA     NA  NA  확인 제한  \n2026-06-02  Gold       NA     NA  NA  확인 제한  \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol                 Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-06-02  VIX                 NA     NA  NA  확인 제한  \n2026-06-02  VVIX (proxy: VVIX)  NA     NA  NA  확인 제한  \n```\n메모: S&P 500: 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=ConnectError: [Errno 8] nodename nor servname provided, or not known)\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n네트워크/DNS 진단:\n- query1.finance.yahoo.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- stooq.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- www.cftc.gov: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 확인 제한 (기준일: 2026-06-02)",
        "국면 판단: insufficient data / 확인 제한",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "환경 제약: 현재 실행 환경에서 외부 네트워크/DNS 접근이 제한되어 실시간 확인이 대폭 제한됨",
        "데이터 메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한 / SG Short-Term Traders Index (proxy: DBMF): 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)) → 확인 제한"
      ]
    },
    {
      "name": "last_report_20260601.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / 프록시(CTA ETF) 기준, 광범위 트리거 부재",
      "date": "2026-06-01",
      "trigger": "미발생",
      "regime": "neutral/no trigger",
      "mtime": "2026-06-01T08:41:40+09:00",
      "size": 4097,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / 프록시(CTA ETF) 기준, 광범위 트리거 부재\n\n(기준일 KST 2026-06-01. 마켓 스냅샷은 미국 2026-05-29 종가/정산 중심. 실시간·유료지표는 확인 제한 표기)\n\n① DAILY CTA Proxy Trigger\n- Trigger 기준(예시): D1 ≤ -1.0% 또는 |Z|≥1.0 / 3D ≤ -2.0% / 5D ≤ -3.0%\n- SG CTA/BTOP50 등 비공개 지표는 오늘 자동 검증 불가 → 확인 제한\n\n[Proxy table]\nDate       Asset                          Value     D1Δ%   3DΔ%   5DΔ%   ΔZ   Confirm\n2026-05-29 DBMF (CTA ETF proxy)          31.00   -0.13  -0.54  -0.34   NA  확인(프록시)\n2026-05-29 KMLM (CTA ETF proxy)          28.46   -0.95    NA     NA    NA  확인(프록시)\n2026-05-29 SG CTA Trend Index               NA    NA     NA     NA    NA  확인 제한\n2026-05-29 SG Short-Term Traders Index      NA    NA     NA     NA    NA  확인 제한\n2026-05-29 Barclay BTOP50                   NA    NA     NA     NA    NA  확인 제한\n\n② Weekly COT Signals (CFTC, 최신) — Leveraged(펀드) Net\n- CFTC TFF(금융선물, Futures Only) 기준일: 2026-05-26 (발표: 2026-05-29)\n\nDate       Asset                           Net(Contracts)   WoWΔ     ΔZ   Confirm\n2026-05-26 S&P 500 (E-mini, ES)                 -457,780  -56,226   NA  확인(공식)\n2026-05-26 USD Index (DX)                        -12,530     -814   NA  확인(공식)\n2026-05-26 UST 2Y Note                        -1,772,557  106,075   NA  확인(공식)\n2026-05-26 UST 10Y Note                       -2,005,980  -53,243   NA  확인(공식)\n2026-05-26 UST 30Y proxy (Ultra UST Bond)       -871,013   15,050   NA  확인(공식·프록시)\n- 5Y Note는 이번 스냅샷에서 자동 추출 실패(확인 제한)\n\n③ 종합 Alert\n- CTA 시스템 상태(프록시): 미발생 (DBMF/KMLM D1 기준)\n- S&P500·Nasdaq100은 05/29 종가 기준 소폭 상승(기록 경신 지속), VIX는 15.32로 하락\n- 유가 정산: WTI 87.36, Brent 92.05로 1%대 하락(휴르무즈/휴전 기대) → 인플레 압력 완화 쪽\n- COT(Leveraged): ES/UST 10Y는 순숏이 더 확대(위험/듀레이션 익스포저 보수적), UST 2Y·UltraBond는 순숏 일부 축소\n- Regime 판단: neutral/no trigger (risk grind-up + selective exposure reduction)\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) Overnight 주요 지수 (미국 2026-05-29 종가 / 유럽·일본 2026-05-29 종가)\nIndex        Level       D1Δ%   Confirm\nS&P 500       7580.06    0.22  확인\nNasdaq 100   30333.18    0.36  확인\nDow          51032.46    0.72  확인\nRussell 2000  2919.34   -0.60  확인\nSTOXX 600          NA    0.14  확인(레벨 제한)\nNikkei 225   66329.50    2.53  확인\n\n(2) 금리 (UST, 2026-05-29 close 스냅샷)\nTenor  Yield  D1(bp)  Confirm\n2Y     4.00%   NA     확인(프록시: Treasury.gov 기반 집계)\n5Y     4.15%   NA     확인(프록시: Treasury.gov 기반 집계)\n10Y    4.45%   NA     확인(프록시: Treasury.gov 기반 집계)\n30Y    4.98%   NA     확인(프록시: Treasury.gov 기반 집계)\n\n(3) FX (2026-05-29, Reuters)\n- DXY 98.90 (-0.1%), EURUSD 1.1663, USDJPY 159.26\n\n(4) 원자재 (2026-05-29)\n- WTI settle 87.36 (-1.73%), Brent settle 92.05 (-1.77%)\n- Gold spot 4,545.00 (+1.18%, Reuters snapshot)\n\n(5) 주식 변동성\n- VIX 15.32 (-2.67%) / VVIX: 확인 제한\n\n(6) 미 증시 breadth 요약\n- 공식 breadth(adv/dec, new highs/lows) 숫자 자동 확인 실패 → 확인 제한\n\n(7) 향후 24~48시간 주요 이벤트\n- BLS Release Calendar 기준: 2026-06-02 10:00 ET(County Employment and Wages, Q4 2025) (중요도 낮음)\n- 추가 핵심 매크로(ISM/JOLTS 등)는 공식 캘린더 자동 추출 실패 → 확인 제한\n\n(8) 실행 가능한 핵심 요약\n- CTA 프록시(Managed Futures ETF) 기준 D1/3D/5D 급락 트리거는 부재 → 포지션 급변 신호는 약함\n- COT Leveraged: ES·UST10Y 순숏 확대 → 위험/듀레이션을 보수적으로 유지하는 흐름 점검\n- 유가 하락 + VIX 하락 조합은 단기 리스크온 지지지만, 급변 재료(중동/연준) 재부각 시 역전 가능",
      "summary": {
        "cta": "확인 제한",
        "regime": "neutral/no trigger",
        "network": "정상/미표기",
        "confirmLimited": 9,
        "proxy": 10,
        "availableRows": 0,
        "totalRows": 0,
        "coveragePct": 0.0
      },
      "dashboard": {
        "groups": [
          {
            "name": "Daily CTA Proxy",
            "sourceType": "official/manual/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          }
        ],
        "sourceStatus": [
          {
            "name": "Yahoo Finance",
            "status": "ok",
            "detail": "HTTP 200 application/json;charset=utf-8"
          },
          {
            "name": "FRED",
            "status": "http_fail",
            "detail": "ReadTimeout: "
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=UTF-8"
          },
          {
            "name": "Stooq",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
          },
          {
            "name": "Alpha Vantage",
            "status": "ok",
            "detail": "HTTP 200 application/json"
          }
        ],
        "recommendations": [
          "SG CTA/BTOP50은 data/cta_proxies.csv에 수동 값이 있으면 네트워크와 무관하게 살아납니다.",
          "COT는 CFTC 공식 주간 데이터라 네트워크 성공 후 캐시 재사용 전략이 가장 현실적입니다."
        ]
      },
      "sections": {
        "cta": "① DAILY CTA Proxy Trigger\n- Trigger 기준(예시): D1 ≤ -1.0% 또는 |Z|≥1.0 / 3D ≤ -2.0% / 5D ≤ -3.0%\n- SG CTA/BTOP50 등 비공개 지표는 오늘 자동 검증 불가 → 확인 제한\n\n[Proxy table]\nDate       Asset                          Value     D1Δ%   3DΔ%   5DΔ%   ΔZ   Confirm\n2026-05-29 DBMF (CTA ETF proxy)          31.00   -0.13  -0.54  -0.34   NA  확인(프록시)\n2026-05-29 KMLM (CTA ETF proxy)          28.46   -0.95    NA     NA    NA  확인(프록시)\n2026-05-29 SG CTA Trend Index               NA    NA     NA     NA    NA  확인 제한\n2026-05-29 SG Short-Term Traders Index      NA    NA     NA     NA    NA  확인 제한\n2026-05-29 Barclay BTOP50                   NA    NA     NA     NA    NA  확인 제한",
        "cot": "② Weekly COT Signals (CFTC, 최신) — Leveraged(펀드) Net\n- CFTC TFF(금융선물, Futures Only) 기준일: 2026-05-26 (발표: 2026-05-29)\n\nDate       Asset                           Net(Contracts)   WoWΔ     ΔZ   Confirm\n2026-05-26 S&P 500 (E-mini, ES)                 -457,780  -56,226   NA  확인(공식)\n2026-05-26 USD Index (DX)                        -12,530     -814   NA  확인(공식)\n2026-05-26 UST 2Y Note                        -1,772,557  106,075   NA  확인(공식)\n2026-05-26 UST 10Y Note                       -2,005,980  -53,243   NA  확인(공식)\n2026-05-26 UST 30Y proxy (Ultra UST Bond)       -871,013   15,050   NA  확인(공식·프록시)\n- 5Y Note는 이번 스냅샷에서 자동 추출 실패(확인 제한)",
        "alert": "③ 종합 Alert\n- CTA 시스템 상태(프록시): 미발생 (DBMF/KMLM D1 기준)\n- S&P500·Nasdaq100은 05/29 종가 기준 소폭 상승(기록 경신 지속), VIX는 15.32로 하락\n- 유가 정산: WTI 87.36, Brent 92.05로 1%대 하락(휴르무즈/휴전 기대) → 인플레 압력 완화 쪽\n- COT(Leveraged): ES/UST 10Y는 순숏이 더 확대(위험/듀레이션 익스포저 보수적), UST 2Y·UltraBond는 순숏 일부 축소\n- Regime 판단: neutral/no trigger (risk grind-up + selective exposure reduction)",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) Overnight 주요 지수 (미국 2026-05-29 종가 / 유럽·일본 2026-05-29 종가)\nIndex        Level       D1Δ%   Confirm\nS&P 500       7580.06    0.22  확인\nNasdaq 100   30333.18    0.36  확인\nDow          51032.46    0.72  확인\nRussell 2000  2919.34   -0.60  확인\nSTOXX 600          NA    0.14  확인(레벨 제한)\nNikkei 225   66329.50    2.53  확인\n\n(2) 금리 (UST, 2026-05-29 close 스냅샷)\nTenor  Yield  D1(bp)  Confirm\n2Y     4.00%   NA     확인(프록시: Treasury.gov 기반 집계)\n5Y     4.15%   NA     확인(프록시: Treasury.gov 기반 집계)\n10Y    4.45%   NA     확인(프록시: Treasury.gov 기반 집계)\n30Y    4.98%   NA     확인(프록시: Treasury.gov 기반 집계)\n\n(3) FX (2026-05-29, Reuters)\n- DXY 98.90 (-0.1%), EURUSD 1.1663, USDJPY 159.26\n\n(4) 원자재 (2026-05-29)\n- WTI settle 87.36 (-1.73%), Brent settle 92.05 (-1.77%)\n- Gold spot 4,545.00 (+1.18%, Reuters snapshot)\n\n(5) 주식 변동성\n- VIX 15.32 (-2.67%) / VVIX: 확인 제한\n\n(6) 미 증시 breadth 요약\n- 공식 breadth(adv/dec, new highs/lows) 숫자 자동 확인 실패 → 확인 제한\n\n(7) 향후 24~48시간 주요 이벤트\n- BLS Release Calendar 기준: 2026-06-02 10:00 ET(County Employment and Wages, Q4 2025) (중요도 낮음)\n- 추가 핵심 매크로(ISM/JOLTS 등)는 공식 캘린더 자동 추출 실패 → 확인 제한\n\n(8) 실행 가능한 핵심 요약\n- CTA 프록시(Managed Futures ETF) 기준 D1/3D/5D 급락 트리거는 부재 → 포지션 급변 신호는 약함\n- COT Leveraged: ES·UST10Y 순숏 확대 → 위험/듀레이션을 보수적으로 유지하는 흐름 점검\n- 유가 하락 + VIX 하락 조합은 단기 리스크온 지지지만, 급변 재료(중동/연준) 재부각 시 역전 가능"
      },
      "alertBullets": [
        "CTA 시스템 상태(프록시): 미발생 (DBMF/KMLM D1 기준)",
        "S&P500·Nasdaq100은 05/29 종가 기준 소폭 상승(기록 경신 지속), VIX는 15.32로 하락",
        "유가 정산: WTI 87.36, Brent 92.05로 1%대 하락(휴르무즈/휴전 기대) → 인플레 압력 완화 쪽",
        "COT(Leveraged): ES/UST 10Y는 순숏이 더 확대(위험/듀레이션 익스포저 보수적), UST 2Y·UltraBond는 순숏 일부 축소",
        "Regime 판단: neutral/no trigger (risk grind-up + selective exposure reduction)"
      ]
    },
    {
      "name": "last_report_20260529.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / (주가) 신고가 vs (유가·금리) 완화",
      "date": "2026-05-29",
      "trigger": "확인 제한",
      "regime": "neutral/no trigger",
      "mtime": "2026-05-29T07:28:34+09:00",
      "size": 5471,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / (주가) 신고가 vs (유가·금리) 완화\n\n(기준일 KST) 2026-05-29\n메모:\n- 본 리포트의 “overnight”는 미국 2026-05-28(목) 마감/스냅샷 기준입니다.\n- CTA/BTOP50/SG CTA 등 비공개 지표는 최신 확인 제한 시 “프록시/확인 제한”으로 표기합니다.\n- COT는 (포지션 기준) 2026-05-19가 현재 시점 최신 CFTC 공개분이며, 다음 공개는 2026-05-29 15:30 ET(= 2026-05-30 04:30 KST) 예정입니다.\n\n① DAILY CTA Proxy Trigger\n`Date       | Asset / Index                           | Value     | D1 Δ%   | D3      | D5      | Δ Z | Confirm\n2026-05-29  | SG CTA Trend Index (proxy: DBMF/KMLM/CTA) | NA       | NA      | NA      | NA      | NA  | 확인 제한(비공개/최신 시세 미확인)\n2026-05-29  | SG Short-Term Traders (proxy: DBMF)       | NA       | NA      | NA      | NA      | NA  | 확인 제한(비공개/최신 시세 미확인)\n2026-05-29  | Barclay BTOP50                            | NA       | NA      | NA      | NA      | NA  | 확인 제한(일간 레벨 미확인)\n2026-05-29  | DBMF ETF (proxy)                          | NA       | NA      | NA      | NA      | NA  | 확인 제한(최신 시세 미확인)\n2026-05-29  | KMLM ETF (proxy)                          | NA       | NA      | NA      | NA      | NA  | 확인 제한(최신 시세 미확인)\n2026-05-29  | Simplify CTA ETF (proxy)                  | NA       | NA      | NA      | NA      | NA  | 확인 제한(최신 시세 미확인)`\n\n- Trigger 판정: 유효 데이터 부족 → 판정 불가(확인 제한)\n- 체크포인트: (1) CTA ETF 최신 종가 확보 (2) 3~5일 누적 변화로 재판정\n\n② Weekly COT Signals (최신 CFTC 기준: 2026-05-19, Leveraged Funds 프록시)\n`Date       | Asset                | Value(Net) | WoW Δ     | %       | Δ Z | Unwind? | Confirm\n2026-05-19  | S&P 500 (ES)         | -401,554   | +30,884   | +7.1%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | USD Index (DX)       | -11,716    | -6,965    | -146.6% | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 2Y               | -1,878,632 | +69,197   | +3.6%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 5Y               | -2,306,447 | +42,758   | +1.8%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 10Y              | -1,952,737 | +4,205    | +0.2%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 30Y(프록시: UB)  | -886,063   | -12,834   | -1.4%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)`\n\n- 표기: Net/WoW Δ/%는 “Leveraged Funds (Long-Short)” 기준(자금군 정의 차이 주의)\n\n③ 종합 Alert\n- CTA 시스템(프록시): neutral/no trigger (판정 보류) — 핵심 입력(CTA 프록시 최신) 확인 제한\n- Context\n  - (주가) S&P500/Nasdaq/Dow 모두 2026-05-28 종가 기준 신고가 흐름 지속\n  - (금리) 미 국채 금리 곡선은 2026-05-28 기준 전반 하락(특히 10Y/30Y)\n  - (FX/원자재) 달러 약세(DXY↓) + 유가 변동성 지속, 금은 반등\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (미국 2026-05-28 마감)\n`As of      | Index        | Level      | Chg\n2026-05-28  | S&P 500      | 7,563.63   | +0.6%\n2026-05-28  | Nasdaq 100   | 29,973.57  | 확인 제한(최신 1영업일 지연; 2026-05-27 종가)\n2026-05-28  | Dow          | 50,668.97  | ~+0.1%\n2026-05-28  | Russell 2000 | 2,936.57   | +0.6%\n2026-05-28  | STOXX 600    | 625.11     | -0.5%\n2026-05-28  | Nikkei 225   | 64,693.12  | -0.47%`\n\n(2) 금리: U.S. Treasury (2026-05-28, Daily Treasury Par Yield Curve Rates)\n`Date       | 2Y    | 5Y    | 10Y   | 30Y\n2026-05-28  | 3.99  | 4.15  | 4.45  | 4.98`\n\n(3) FX (2026-05-28 스냅샷)\n- DXY: 99.02\n- EURUSD: 1.1652\n- USDJPY: 159.27\n\n(4) 원자재 (2026-05-28, Reuters)\n- WTI(근월): 88.90 (settle)\n- Brent(7월): 93.71 (settle)\n- Gold: 4,504.07/oz (NY 13:31 ET 스냅샷)\n\n(5) 주식 변동성 (2026-05-28)\n- VIX: 15.74 (close 스냅샷)\n- VVIX: 89.55 (프록시; Barchart last price)\n\n(6) 미 증시 breadth 요약\n- 2026-05-28 수치: 확인 제한(공식/공신력 원천에서 숫자 스냅샷 확보 실패)\n\n(7) 향후 24~48시간 주요 이벤트\n- CFTC COT 공개: 2026-05-29 15:30 ET (KST 2026-05-30 04:30)\n- 그 외 매크로/실적/연준 발언: 확인 제한(캘린더 원천 자동 조회 실패)\n\n(8) 실행 가능한 핵심 요약(모니터링 관점)\n- (CTA) CTA 프록시(CTA/DBMF/KMLM) 최신 종가 확보 → 3~5일 누적 트리거 재판정\n- (크로스) “주가 신고가 + VIX 하락” 조합이 유지되는지(=리스크 프리미엄 추가 압축 가능) vs 이벤트(중동/유가) 재확대 시 변동성 재상승 위험\n- (금리) 10Y/30Y 하락이 이어질 경우(성장/인플레 기대 재조정) 리스크자산의 ‘상승 지속 vs 회전’ 신호를 분리 관찰\n\n데이터 소스(공신력 우선, 일부 프록시):\n- 미 증시 주요 지수(05/28): AP “How major US stock indexes fared Thursday 5/28/2026”\n- STOXX 600(05/28): Reuters(재배포, MarketScreener)\n- Nikkei 225(05/28): Nikkei Indexes (official archives)\n- 금리(05/28): U.S. Department of the Treasury (Daily Treasury Par Yield Curve Rates)\n- FX/금: Reuters(재배포, MarketScreener)\n- 유가: Reuters(재배포, MarketScreener)\n- VIX: ChartExchange (프록시)\n- VVIX: Barchart (프록시)\n- COT 공개 일정: CFTC Release Schedule",
      "summary": {
        "cta": "확인 제한",
        "regime": "neutral/no trigger",
        "network": "정상/미표기",
        "confirmLimited": 14,
        "proxy": 10,
        "availableRows": 0,
        "totalRows": 0,
        "coveragePct": 0.0
      },
      "dashboard": {
        "groups": [
          {
            "name": "Daily CTA Proxy",
            "sourceType": "official/manual/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          }
        ],
        "sourceStatus": [
          {
            "name": "Yahoo Finance",
            "status": "ok",
            "detail": "HTTP 200 application/json;charset=utf-8"
          },
          {
            "name": "FRED",
            "status": "http_fail",
            "detail": "ReadTimeout: "
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=UTF-8"
          },
          {
            "name": "Stooq",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
          },
          {
            "name": "Alpha Vantage",
            "status": "ok",
            "detail": "HTTP 200 application/json"
          }
        ],
        "recommendations": [
          "SG CTA/BTOP50은 data/cta_proxies.csv에 수동 값이 있으면 네트워크와 무관하게 살아납니다.",
          "COT는 CFTC 공식 주간 데이터라 네트워크 성공 후 캐시 재사용 전략이 가장 현실적입니다."
        ]
      },
      "sections": {
        "cta": "① DAILY CTA Proxy Trigger\n`Date       | Asset / Index                           | Value     | D1 Δ%   | D3      | D5      | Δ Z | Confirm\n2026-05-29  | SG CTA Trend Index (proxy: DBMF/KMLM/CTA) | NA       | NA      | NA      | NA      | NA  | 확인 제한(비공개/최신 시세 미확인)\n2026-05-29  | SG Short-Term Traders (proxy: DBMF)       | NA       | NA      | NA      | NA      | NA  | 확인 제한(비공개/최신 시세 미확인)\n2026-05-29  | Barclay BTOP50                            | NA       | NA      | NA      | NA      | NA  | 확인 제한(일간 레벨 미확인)\n2026-05-29  | DBMF ETF (proxy)                          | NA       | NA      | NA      | NA      | NA  | 확인 제한(최신 시세 미확인)\n2026-05-29  | KMLM ETF (proxy)                          | NA       | NA      | NA      | NA      | NA  | 확인 제한(최신 시세 미확인)\n2026-05-29  | Simplify CTA ETF (proxy)                  | NA       | NA      | NA      | NA      | NA  | 확인 제한(최신 시세 미확인)`\n\n- Trigger 판정: 유효 데이터 부족 → 판정 불가(확인 제한)\n- 체크포인트: (1) CTA ETF 최신 종가 확보 (2) 3~5일 누적 변화로 재판정",
        "cot": "② Weekly COT Signals (최신 CFTC 기준: 2026-05-19, Leveraged Funds 프록시)\n`Date       | Asset                | Value(Net) | WoW Δ     | %       | Δ Z | Unwind? | Confirm\n2026-05-19  | S&P 500 (ES)         | -401,554   | +30,884   | +7.1%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | USD Index (DX)       | -11,716    | -6,965    | -146.6% | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 2Y               | -1,878,632 | +69,197   | +3.6%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 5Y               | -2,306,447 | +42,758   | +1.8%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 10Y              | -1,952,737 | +4,205    | +0.2%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 30Y(프록시: UB)  | -886,063   | -12,834   | -1.4%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)`\n\n- 표기: Net/WoW Δ/%는 “Leveraged Funds (Long-Short)” 기준(자금군 정의 차이 주의)",
        "alert": "③ 종합 Alert\n- CTA 시스템(프록시): neutral/no trigger (판정 보류) — 핵심 입력(CTA 프록시 최신) 확인 제한\n- Context\n  - (주가) S&P500/Nasdaq/Dow 모두 2026-05-28 종가 기준 신고가 흐름 지속\n  - (금리) 미 국채 금리 곡선은 2026-05-28 기준 전반 하락(특히 10Y/30Y)\n  - (FX/원자재) 달러 약세(DXY↓) + 유가 변동성 지속, 금은 반등",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (미국 2026-05-28 마감)\n`As of      | Index        | Level      | Chg\n2026-05-28  | S&P 500      | 7,563.63   | +0.6%\n2026-05-28  | Nasdaq 100   | 29,973.57  | 확인 제한(최신 1영업일 지연; 2026-05-27 종가)\n2026-05-28  | Dow          | 50,668.97  | ~+0.1%\n2026-05-28  | Russell 2000 | 2,936.57   | +0.6%\n2026-05-28  | STOXX 600    | 625.11     | -0.5%\n2026-05-28  | Nikkei 225   | 64,693.12  | -0.47%`\n\n(2) 금리: U.S. Treasury (2026-05-28, Daily Treasury Par Yield Curve Rates)\n`Date       | 2Y    | 5Y    | 10Y   | 30Y\n2026-05-28  | 3.99  | 4.15  | 4.45  | 4.98`\n\n(3) FX (2026-05-28 스냅샷)\n- DXY: 99.02\n- EURUSD: 1.1652\n- USDJPY: 159.27\n\n(4) 원자재 (2026-05-28, Reuters)\n- WTI(근월): 88.90 (settle)\n- Brent(7월): 93.71 (settle)\n- Gold: 4,504.07/oz (NY 13:31 ET 스냅샷)\n\n(5) 주식 변동성 (2026-05-28)\n- VIX: 15.74 (close 스냅샷)\n- VVIX: 89.55 (프록시; Barchart last price)\n\n(6) 미 증시 breadth 요약\n- 2026-05-28 수치: 확인 제한(공식/공신력 원천에서 숫자 스냅샷 확보 실패)\n\n(7) 향후 24~48시간 주요 이벤트\n- CFTC COT 공개: 2026-05-29 15:30 ET (KST 2026-05-30 04:30)\n- 그 외 매크로/실적/연준 발언: 확인 제한(캘린더 원천 자동 조회 실패)\n\n(8) 실행 가능한 핵심 요약(모니터링 관점)\n- (CTA) CTA 프록시(CTA/DBMF/KMLM) 최신 종가 확보 → 3~5일 누적 트리거 재판정\n- (크로스) “주가 신고가 + VIX 하락” 조합이 유지되는지(=리스크 프리미엄 추가 압축 가능) vs 이벤트(중동/유가) 재확대 시 변동성 재상승 위험\n- (금리) 10Y/30Y 하락이 이어질 경우(성장/인플레 기대 재조정) 리스크자산의 ‘상승 지속 vs 회전’ 신호를 분리 관찰\n\n데이터 소스(공신력 우선, 일부 프록시):\n- 미 증시 주요 지수(05/28): AP “How major US stock indexes fared Thursday 5/28/2026”\n- STOXX 600(05/28): Reuters(재배포, MarketScreener)\n- Nikkei 225(05/28): Nikkei Indexes (official archives)\n- 금리(05/28): U.S. Department of the Treasury (Daily Treasury Par Yield Curve Rates)\n- FX/금: Reuters(재배포, MarketScreener)\n- 유가: Reuters(재배포, MarketScreener)\n- VIX: ChartExchange (프록시)\n- VVIX: Barchart (프록시)\n- COT 공개 일정: CFTC Release Schedule"
      },
      "alertBullets": [
        "CTA 시스템(프록시): neutral/no trigger (판정 보류) — 핵심 입력(CTA 프록시 최신) 확인 제한",
        "Context",
        "(주가) S&P500/Nasdaq/Dow 모두 2026-05-28 종가 기준 신고가 흐름 지속",
        "(금리) 미 국채 금리 곡선은 2026-05-28 기준 전반 하락(특히 10Y/30Y)",
        "(FX/원자재) 달러 약세(DXY↓) + 유가 변동성 지속, 금은 반등"
      ]
    },
    {
      "name": "last_report_20260528.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / (리스크자산) 신고가 갱신 vs (원자재·금리) 완화",
      "date": "2026-05-28",
      "trigger": "확인 제한",
      "regime": "neutral/no trigger",
      "mtime": "2026-05-28T07:29:38+09:00",
      "size": 5834,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / (리스크자산) 신고가 갱신 vs (원자재·금리) 완화\n\n(기준일 KST) 2026-05-28\n메모:\n- 외부 DNS/소켓 제한으로 “공식/공신력 원천에서 확인 가능한 값만” 반영했습니다.\n- 미 증시 지수: 2026-05-27(수) 마감(AP/Reuters).\n- STOXX 600 / Nikkei / Nasdaq 100: Reuters(재배포) 및 MarketScreener(프록시)에서 2026-05-27 기준 확인.\n- CTA 프록시(ETF 종가): DBMF는 최신 일자(2026-05-14)까지만 확인 가능, KMLM/CTA는 2026-05-22까지만 확인 가능 → 3~5일 트리거 재판정은 “확인 제한”.\n- COT는 (보고/포지션 기준) 2026-05-19가 최신이며, 이는 2026-05-28 기준 “가장 최근 CFTC 공개분”입니다.\n\n① DAILY CTA Proxy Trigger\n`Date       | Asset / Index                           | Value     | D1 Δ%   | D3      | D5      | Δ Z | Confirm\n2026-05-28  | SG CTA Trend Index (proxy: DBMF/KMLM/CTA) | NA       | NA      | NA      | NA      | NA  | 확인 제한(비공개/최신 시세 미확인)\n2026-05-28  | SG Short-Term Traders (proxy: DBMF)       | NA       | NA      | NA      | NA      | NA  | 확인 제한(최신 시세 미확인)\n2026-05-28  | Barclay BTOP50                            | NA       | NA      | NA      | NA      | NA  | 확인 제한(일간 레벨 미확인)\n2026-05-14  | DBMF ETF (proxy)                          | 31.24    | +0.39%  | NA      | NA      | NA  | 확인(프록시·일자 오래됨)\n2026-05-22  | KMLM ETF (proxy)                          | 29.22    | +0.09%  | -2.40%  | -2.08%  | NA  | 확인(프록시·최신 제한)\n2026-05-22  | Simplify CTA ETF (proxy)                  | 30.70    | -0.78%  | -5.07%  | -4.12%  | NA  | 확인(프록시·최신 제한)`\n\n- Trigger 판정(프록시): 최신 종가가 갱신되지 않아 “발생/미발생” 재판정 불가(확인 제한)\n- 체크포인트: (1) CTA(ETF) 하락 누적이 여전히 유지되는지 (2) DBMF/KMLM 동행 여부를 3~5일 창으로 재확인 필요\n\n② Weekly COT Signals (최신 CFTC 기준: 2026-05-19, Leveraged Funds 프록시)\n`Date       | Asset                | Value(Net) | WoW Δ     | %       | Δ Z | Unwind? | Confirm\n2026-05-19  | S&P 500 (ES)         | -401,554   | +30,884   | +7.1%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | USD Index (DX)       | -11,716    | -6,965    | -146.6% | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 2Y               | -1,878,632 | +69,197   | +3.6%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 5Y               | -2,306,447 | +42,758   | +1.8%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 10Y              | -1,952,737 | +4,205    | +0.2%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 30Y(프록시: UB)  | -886,063   | -12,834   | -1.4%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)`\n\n- 표기: Net/WoW Δ/%는 “Leveraged Funds (Long-Short)” 기준(보고서/자금군별 정의 차이 주의)\n\n③ 종합 Alert\n- CTA 시스템(프록시): “neutral/no trigger (판정 보류)” — 핵심 입력(CTA ETF 최신 종가) 확인 제한\n- Context\n  - 주가지수는 신고가(리스크온) vs 유가 급락/금리 하락(인플레 압력 완화 신호)로 “리스크 프리미엄 압축” 국면 지속\n  - CFTC(05/19 기준)에서는 Lev Funds의 ES net short 축소(+30.9k) → 주가지수 선물 숏 익스포저 축소 방향\n  - UST(2Y/5Y/10Y) Lev net short 축소(=숏 줄임) vs Ultra UST Bond는 net short 확대(=-12.8k) → 듀레이션 포지션은 혼재\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (2026-05-27 마감)\n`As of      | Index        | Level      | Chg\n2026-05-27  | S&P 500      | 7,520.36   | +0.02%\n2026-05-27  | Nasdaq 100   | 29,973.57  | -0.09%\n2026-05-27  | Dow          | 50,644.28  | +0.36%\n2026-05-27  | Russell 2000 | 2,919.94   | ~0.00%\n2026-05-27  | STOXX 600    | 628.18     | +0.03% (proxy)\n2026-05-27  | Nikkei 225   | 64,999.41  | ~0.00%`\n\n(2) 금리: U.S. Treasury (2026-05-27; Treasury 원문 접근 제한 → Treasury 기반 재가공(slickcharts) 사용)\n`Date       | 2Y    | 5Y    | 10Y   | 30Y   | D1(대략)\n2026-05-27  | 4.00  | 4.17  | 4.48  | 5.01  | -1~-2bp`\n\n(3) FX (2026-05-27 스냅샷)\n- DXY: 99.16\n- EURUSD: 1.1629\n- USDJPY: 159.46\n\n(4) 원자재 (2026-05-27 스냅샷)\n- WTI: 89.41\n- Brent: 92.92\n- Gold: 4,487.25\n\n(5) 주식 변동성\n- VIX: 16.29 (스냅샷)\n- VVIX: 89.55 (05/26 EDT 종가; 최신 반영 지연 가능)\n\n(6) 미 증시 breadth 요약 (2026-05-27, Reuters)\n- NYSE: Adv/Dec 1.13:1, New High/Low 453/99\n- Nasdaq: Adv/Dec 2,420/2,498, New High/Low 169/74\n- S&P 500: New High/Low 37/8\n\n(7) 향후 24~48시간 주요 이벤트(ET, Reuters/BEA 일정 참고)\n- 05/28(목): PCE(개인소비지출물가지수) 예정(시장 주시 포인트)\n\n(8) 실행 가능한 핵심 요약(모니터링 관점)\n- (CTA) CTA ETF(CTA/DBMF/KMLM) 최신 3~5일 누적 수익률을 다시 확보해 트리거를 “재판정” (현재는 확인 제한)\n- (매크로) 유가 급락 + 금리 하락 구간에서 “변동성 재확대(VIX)”가 동반되는지 체크(현재 VIX는 낮은 편)\n\n데이터 소스(공신력 우선, 일부 프록시):\n- 미 증시 주요 지수(05/27): AP “How major US stock indexes fared Wednesday 5/27/2026”\n- Nasdaq 100 및 breadth(05/27): Reuters(재배포, MarketScreener)\n- STOXX 600(05/27): MarketScreener quote (proxy)\n- Nikkei 225(05/27): Reuters(재배포, MarketScreener)\n- 금리(05/27): slickcharts(“Treasury.gov Daily Treasury Par Yield Curve Rates” 기반 재가공)\n- FX/원자재/VIX(05/27): Investing.com 스냅샷(프록시)\n- VVIX(05/26): Webull 스냅샷(프록시)\n- COT(05/19): CFTC “Traders in Financial Futures – Futures Only”",
      "summary": {
        "cta": "확인 제한",
        "regime": "neutral/no trigger",
        "network": "정상/미표기",
        "confirmLimited": 8,
        "proxy": 12,
        "availableRows": 0,
        "totalRows": 0,
        "coveragePct": 0.0
      },
      "dashboard": {
        "groups": [
          {
            "name": "Daily CTA Proxy",
            "sourceType": "official/manual/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          }
        ],
        "sourceStatus": [
          {
            "name": "Yahoo Finance",
            "status": "ok",
            "detail": "HTTP 200 application/json;charset=utf-8"
          },
          {
            "name": "FRED",
            "status": "http_fail",
            "detail": "ReadTimeout: "
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=UTF-8"
          },
          {
            "name": "Stooq",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
          },
          {
            "name": "Alpha Vantage",
            "status": "ok",
            "detail": "HTTP 200 application/json"
          }
        ],
        "recommendations": [
          "SG CTA/BTOP50은 data/cta_proxies.csv에 수동 값이 있으면 네트워크와 무관하게 살아납니다.",
          "COT는 CFTC 공식 주간 데이터라 네트워크 성공 후 캐시 재사용 전략이 가장 현실적입니다."
        ]
      },
      "sections": {
        "cta": "① DAILY CTA Proxy Trigger\n`Date       | Asset / Index                           | Value     | D1 Δ%   | D3      | D5      | Δ Z | Confirm\n2026-05-28  | SG CTA Trend Index (proxy: DBMF/KMLM/CTA) | NA       | NA      | NA      | NA      | NA  | 확인 제한(비공개/최신 시세 미확인)\n2026-05-28  | SG Short-Term Traders (proxy: DBMF)       | NA       | NA      | NA      | NA      | NA  | 확인 제한(최신 시세 미확인)\n2026-05-28  | Barclay BTOP50                            | NA       | NA      | NA      | NA      | NA  | 확인 제한(일간 레벨 미확인)\n2026-05-14  | DBMF ETF (proxy)                          | 31.24    | +0.39%  | NA      | NA      | NA  | 확인(프록시·일자 오래됨)\n2026-05-22  | KMLM ETF (proxy)                          | 29.22    | +0.09%  | -2.40%  | -2.08%  | NA  | 확인(프록시·최신 제한)\n2026-05-22  | Simplify CTA ETF (proxy)                  | 30.70    | -0.78%  | -5.07%  | -4.12%  | NA  | 확인(프록시·최신 제한)`\n\n- Trigger 판정(프록시): 최신 종가가 갱신되지 않아 “발생/미발생” 재판정 불가(확인 제한)\n- 체크포인트: (1) CTA(ETF) 하락 누적이 여전히 유지되는지 (2) DBMF/KMLM 동행 여부를 3~5일 창으로 재확인 필요",
        "cot": "② Weekly COT Signals (최신 CFTC 기준: 2026-05-19, Leveraged Funds 프록시)\n`Date       | Asset                | Value(Net) | WoW Δ     | %       | Δ Z | Unwind? | Confirm\n2026-05-19  | S&P 500 (ES)         | -401,554   | +30,884   | +7.1%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | USD Index (DX)       | -11,716    | -6,965    | -146.6% | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 2Y               | -1,878,632 | +69,197   | +3.6%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 5Y               | -2,306,447 | +42,758   | +1.8%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 10Y              | -1,952,737 | +4,205    | +0.2%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 30Y(프록시: UB)  | -886,063   | -12,834   | -1.4%   | NA  | ❌      | 확인(CFTC TFF, Lev Funds)`\n\n- 표기: Net/WoW Δ/%는 “Leveraged Funds (Long-Short)” 기준(보고서/자금군별 정의 차이 주의)",
        "alert": "③ 종합 Alert\n- CTA 시스템(프록시): “neutral/no trigger (판정 보류)” — 핵심 입력(CTA ETF 최신 종가) 확인 제한\n- Context\n  - 주가지수는 신고가(리스크온) vs 유가 급락/금리 하락(인플레 압력 완화 신호)로 “리스크 프리미엄 압축” 국면 지속\n  - CFTC(05/19 기준)에서는 Lev Funds의 ES net short 축소(+30.9k) → 주가지수 선물 숏 익스포저 축소 방향\n  - UST(2Y/5Y/10Y) Lev net short 축소(=숏 줄임) vs Ultra UST Bond는 net short 확대(=-12.8k) → 듀레이션 포지션은 혼재",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (2026-05-27 마감)\n`As of      | Index        | Level      | Chg\n2026-05-27  | S&P 500      | 7,520.36   | +0.02%\n2026-05-27  | Nasdaq 100   | 29,973.57  | -0.09%\n2026-05-27  | Dow          | 50,644.28  | +0.36%\n2026-05-27  | Russell 2000 | 2,919.94   | ~0.00%\n2026-05-27  | STOXX 600    | 628.18     | +0.03% (proxy)\n2026-05-27  | Nikkei 225   | 64,999.41  | ~0.00%`\n\n(2) 금리: U.S. Treasury (2026-05-27; Treasury 원문 접근 제한 → Treasury 기반 재가공(slickcharts) 사용)\n`Date       | 2Y    | 5Y    | 10Y   | 30Y   | D1(대략)\n2026-05-27  | 4.00  | 4.17  | 4.48  | 5.01  | -1~-2bp`\n\n(3) FX (2026-05-27 스냅샷)\n- DXY: 99.16\n- EURUSD: 1.1629\n- USDJPY: 159.46\n\n(4) 원자재 (2026-05-27 스냅샷)\n- WTI: 89.41\n- Brent: 92.92\n- Gold: 4,487.25\n\n(5) 주식 변동성\n- VIX: 16.29 (스냅샷)\n- VVIX: 89.55 (05/26 EDT 종가; 최신 반영 지연 가능)\n\n(6) 미 증시 breadth 요약 (2026-05-27, Reuters)\n- NYSE: Adv/Dec 1.13:1, New High/Low 453/99\n- Nasdaq: Adv/Dec 2,420/2,498, New High/Low 169/74\n- S&P 500: New High/Low 37/8\n\n(7) 향후 24~48시간 주요 이벤트(ET, Reuters/BEA 일정 참고)\n- 05/28(목): PCE(개인소비지출물가지수) 예정(시장 주시 포인트)\n\n(8) 실행 가능한 핵심 요약(모니터링 관점)\n- (CTA) CTA ETF(CTA/DBMF/KMLM) 최신 3~5일 누적 수익률을 다시 확보해 트리거를 “재판정” (현재는 확인 제한)\n- (매크로) 유가 급락 + 금리 하락 구간에서 “변동성 재확대(VIX)”가 동반되는지 체크(현재 VIX는 낮은 편)\n\n데이터 소스(공신력 우선, 일부 프록시):\n- 미 증시 주요 지수(05/27): AP “How major US stock indexes fared Wednesday 5/27/2026”\n- Nasdaq 100 및 breadth(05/27): Reuters(재배포, MarketScreener)\n- STOXX 600(05/27): MarketScreener quote (proxy)\n- Nikkei 225(05/27): Reuters(재배포, MarketScreener)\n- 금리(05/27): slickcharts(“Treasury.gov Daily Treasury Par Yield Curve Rates” 기반 재가공)\n- FX/원자재/VIX(05/27): Investing.com 스냅샷(프록시)\n- VVIX(05/26): Webull 스냅샷(프록시)\n- COT(05/19): CFTC “Traders in Financial Futures – Futures Only”"
      },
      "alertBullets": [
        "CTA 시스템(프록시): “neutral/no trigger (판정 보류)” — 핵심 입력(CTA ETF 최신 종가) 확인 제한",
        "Context",
        "주가지수는 신고가(리스크온) vs 유가 급락/금리 하락(인플레 압력 완화 신호)로 “리스크 프리미엄 압축” 국면 지속",
        "CFTC(05/19 기준)에서는 Lev Funds의 ES net short 축소(+30.9k) → 주가지수 선물 숏 익스포저 축소 방향",
        "UST(2Y/5Y/10Y) Lev net short 축소(=숏 줄임) vs Ultra UST Bond는 net short 확대(=-12.8k) → 듀레이션 포지션은 혼재"
      ]
    },
    {
      "name": "last_report_20260527.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 발생 / (프록시 기준) CTA 약세 누적 신호 지속",
      "date": "2026-05-27",
      "trigger": "발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-05-27T07:30:46+09:00",
      "size": 5364,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 발생 / (프록시 기준) CTA 약세 누적 신호 지속\n\n(기준일 KST) 2026-05-27\n메모:\n- 외부 DNS/소켓 제한으로 “공식/공신력 원천에서 확인 가능한 값만” 반영했습니다.\n- 미 증시 지수: 2026-05-26(화) 마감(AP).\n- Nasdaq 100 / STOXX 600 / Nikkei: 공신력 웹 원천(프록시)에서 2026-05-26 기준 확인.\n- CTA 프록시(ETF 종가)와 UST 금리(수익률 곡선)는 최신 확인 가능일이 2026-05-22로 제한됩니다.\n- COT는 (보고/포지션 기준) 2026-05-19가 최신이며, 이는 2026-05-27 기준 “가장 최근 CFTC 공개분”입니다.\n\n① DAILY CTA Proxy Trigger\n`Date       | Asset / Index                         | Value     | D1 Δ%   | D3      | D5      | Δ Z | Confirm\n2026-05-22  | SG CTA Trend Index (proxy: DBMF/KMLM/CTA)| NA      | NA      | NA      | NA      | NA  | 확인 제한(비공개/시세차단)\n2026-05-22  | SG Short-Term Traders (proxy: DBMF)    | NA        | NA      | NA      | NA      | NA  | 확인 제한(시세차단)\n2026-05-22  | Barclay BTOP50                         | NA        | NA      | NA      | NA      | NA  | 확인 제한(일간 레벨 미확인)\n2026-05-22  | DBMF ETF                               | 31.09     | -0.06%  | -0.73%  | -0.45%  | NA  | 확인(프록시: ETF 종가)\n2026-05-22  | KMLM ETF                               | 29.22     | +0.09%  | -2.40%  | -2.08%  | NA  | 확인(프록시: ETF 종가)\n2026-05-22  | Simplify CTA ETF (proxy)               | 30.70     | -0.78%  | -5.07%  | -4.12%  | NA  | 확인(프록시: ETF 종가)`\n\n- Trigger 판정(프록시): CTA ETF가 3D≤-2% 및 5D≤-3% 조건 충족 → “발생”\n- 주의: DBMF/KMLM은 동기간 낙폭이 제한적 → “광범위한 CTA unwind”로 단정 금지(모니터링)\n\n② Weekly COT Signals (최신 CFTC 기준: 2026-05-19, Leveraged Funds 프록시)\n`Date       | Asset           | Value(Net) | WoW Δ    | %      | Δ Z | Unwind? | Confirm\n2026-05-19  | S&P 500 (ES)    | -401,554   | +30,884  | +7.1%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | USD Index (DX)  | -11,716    | -6,965   | -146.6%| NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 2Y          | -1,878,632 | +69,197  | +3.6%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 5Y          | -2,306,447 | +42,758  | +1.8%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 10Y         | -1,952,737 | +4,205   | +0.2%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 30Y(USTBond)| -326,383   | -30,187  | -10.2% | NA  | ❌      | 확인(CFTC TFF, Lev Funds)`\n\n- 표기: Net/WoW Δ/%는 “Leveraged Funds (Long-Short)” 기준 프록시(자금군/보고서별 Net 정의 상이)\n\n③ 종합 Alert\n- CTA 시스템(프록시): “slow deleveraging / exposure reduction” 쪽으로 기울어짐(CTA ETF 하락 누적)\n- Context\n  - CTA ETF 3~5일 누적 하락이 -2%/-3% 기준을 초과(프록시 트리거)\n  - CFTC(05/19 기준)에서는 Lev Funds의 ES net short가 축소(+30.9k) → “주가지수 선물의 숏 익스포저 축소” 신호\n  - UST(2Y/5Y/10Y)에서는 net short 축소, UST Bond에서는 net short 확대 → 듀레이션/커브 포지션은 혼재(모니터링)\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (2026-05-26 기준)\n`As of      | Index         | Level      | Chg\n2026-05-26  | S&P 500       | 7,519.12   | +0.6%\n2026-05-26  | Nasdaq 100    | 30,001.32  | +1.76% (proxy)\n2026-05-26  | Dow           | 50,461.68  | -0.2%\n2026-05-26  | Russell 2000  | 2,920.54   | +1.8%\n2026-05-26  | STOXX 600     | 628.01     | -0.57% (proxy)\n2026-05-26  | Nikkei 225    | 64,996.09  | -0.25%`\n\n(2) 금리: U.S. Treasury (Daily Par Yield Curve Rates, 2026-05-22; 최신 확인 가능일 제한)\n`Date       | 2Y   | 5Y   | 10Y  | 30Y\n2026-05-22  | 4.13 | 4.27 | 4.56 | 5.07`\n\n(3) FX (Reuters, 2026-05-26 기준 스냅샷)\n- DXY: 99.031\n- EURUSD: 1.1636\n- USDJPY: 158.99\n\n(4) 원자재\n- WTI / Brent: 확인 제한(공신력 원천에서 05/26 종가 숫자 자동 추출 실패; “$100 아래” 구간은 Reuters 코멘트로만 확인)\n- Gold(Spot): $4,511.23/oz (Reuters, 05/26)\n\n(5) 주식 변동성\n- VIX / VVIX: 확인 제한(공식 종가 자동 추출 실패)\n\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n\n(7) 향후 24~48시간 주요 이벤트(ET)\n- 05/28(목): Personal Income and Outlays / PCE(예정, BEA 일정 기준)\n\n(8) 실행 가능한 핵심 요약(모니터링 관점)\n- (CTA) “CTA ETF 약세 누적”이 DBMF/KMLM로 확산되는지 3~5일 창으로 재확인(프록시)\n- (매크로) 금리 레벨이 높은 구간(10Y 4%대 중반)에서 “주가 고점권” → 변동성 재확대 신호(VIX) 확인이 필요(현재는 확인 제한)\n\n데이터 소스(공신력 우선, 일부 프록시):\n- 미 증시 주요 지수(05/26): AP “How major US stock indexes fared Tuesday 5/26/2026”\n- Nasdaq 100 / STOXX 600: MarketScreener (05/26, proxy)\n- Nikkei 225(05/26): StockQ\n- 금리(05/22): U.S. Treasury “Daily Treasury Par Yield Curve Rates”\n- COT(05/19): CFTC “Traders in Financial Futures – Futures Only”\n- ETF 종가(DBMF/KMLM/CTA, 05/22): StockAnalysis ETF historical data (프록시)\n- FX/Gold 일부(05/26): Reuters(Investing/MarketScreener 재배포)",
      "summary": {
        "cta": "확인 제한",
        "regime": "slow deleveraging / exposure reduction",
        "network": "정상/미표기",
        "confirmLimited": 7,
        "proxy": 14,
        "availableRows": 0,
        "totalRows": 0,
        "coveragePct": 0.0
      },
      "dashboard": {
        "groups": [
          {
            "name": "Daily CTA Proxy",
            "sourceType": "official/manual/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          }
        ],
        "sourceStatus": [
          {
            "name": "Yahoo Finance",
            "status": "ok",
            "detail": "HTTP 200 application/json;charset=utf-8"
          },
          {
            "name": "FRED",
            "status": "http_fail",
            "detail": "ReadTimeout: "
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=UTF-8"
          },
          {
            "name": "Stooq",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
          },
          {
            "name": "Alpha Vantage",
            "status": "ok",
            "detail": "HTTP 200 application/json"
          }
        ],
        "recommendations": [
          "SG CTA/BTOP50은 data/cta_proxies.csv에 수동 값이 있으면 네트워크와 무관하게 살아납니다.",
          "COT는 CFTC 공식 주간 데이터라 네트워크 성공 후 캐시 재사용 전략이 가장 현실적입니다."
        ]
      },
      "sections": {
        "cta": "① DAILY CTA Proxy Trigger\n`Date       | Asset / Index                         | Value     | D1 Δ%   | D3      | D5      | Δ Z | Confirm\n2026-05-22  | SG CTA Trend Index (proxy: DBMF/KMLM/CTA)| NA      | NA      | NA      | NA      | NA  | 확인 제한(비공개/시세차단)\n2026-05-22  | SG Short-Term Traders (proxy: DBMF)    | NA        | NA      | NA      | NA      | NA  | 확인 제한(시세차단)\n2026-05-22  | Barclay BTOP50                         | NA        | NA      | NA      | NA      | NA  | 확인 제한(일간 레벨 미확인)\n2026-05-22  | DBMF ETF                               | 31.09     | -0.06%  | -0.73%  | -0.45%  | NA  | 확인(프록시: ETF 종가)\n2026-05-22  | KMLM ETF                               | 29.22     | +0.09%  | -2.40%  | -2.08%  | NA  | 확인(프록시: ETF 종가)\n2026-05-22  | Simplify CTA ETF (proxy)               | 30.70     | -0.78%  | -5.07%  | -4.12%  | NA  | 확인(프록시: ETF 종가)`\n\n- Trigger 판정(프록시): CTA ETF가 3D≤-2% 및 5D≤-3% 조건 충족 → “발생”\n- 주의: DBMF/KMLM은 동기간 낙폭이 제한적 → “광범위한 CTA unwind”로 단정 금지(모니터링)",
        "cot": "② Weekly COT Signals (최신 CFTC 기준: 2026-05-19, Leveraged Funds 프록시)\n`Date       | Asset           | Value(Net) | WoW Δ    | %      | Δ Z | Unwind? | Confirm\n2026-05-19  | S&P 500 (ES)    | -401,554   | +30,884  | +7.1%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | USD Index (DX)  | -11,716    | -6,965   | -146.6%| NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 2Y          | -1,878,632 | +69,197  | +3.6%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 5Y          | -2,306,447 | +42,758  | +1.8%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 10Y         | -1,952,737 | +4,205   | +0.2%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 30Y(USTBond)| -326,383   | -30,187  | -10.2% | NA  | ❌      | 확인(CFTC TFF, Lev Funds)`\n\n- 표기: Net/WoW Δ/%는 “Leveraged Funds (Long-Short)” 기준 프록시(자금군/보고서별 Net 정의 상이)",
        "alert": "③ 종합 Alert\n- CTA 시스템(프록시): “slow deleveraging / exposure reduction” 쪽으로 기울어짐(CTA ETF 하락 누적)\n- Context\n  - CTA ETF 3~5일 누적 하락이 -2%/-3% 기준을 초과(프록시 트리거)\n  - CFTC(05/19 기준)에서는 Lev Funds의 ES net short가 축소(+30.9k) → “주가지수 선물의 숏 익스포저 축소” 신호\n  - UST(2Y/5Y/10Y)에서는 net short 축소, UST Bond에서는 net short 확대 → 듀레이션/커브 포지션은 혼재(모니터링)",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (2026-05-26 기준)\n`As of      | Index         | Level      | Chg\n2026-05-26  | S&P 500       | 7,519.12   | +0.6%\n2026-05-26  | Nasdaq 100    | 30,001.32  | +1.76% (proxy)\n2026-05-26  | Dow           | 50,461.68  | -0.2%\n2026-05-26  | Russell 2000  | 2,920.54   | +1.8%\n2026-05-26  | STOXX 600     | 628.01     | -0.57% (proxy)\n2026-05-26  | Nikkei 225    | 64,996.09  | -0.25%`\n\n(2) 금리: U.S. Treasury (Daily Par Yield Curve Rates, 2026-05-22; 최신 확인 가능일 제한)\n`Date       | 2Y   | 5Y   | 10Y  | 30Y\n2026-05-22  | 4.13 | 4.27 | 4.56 | 5.07`\n\n(3) FX (Reuters, 2026-05-26 기준 스냅샷)\n- DXY: 99.031\n- EURUSD: 1.1636\n- USDJPY: 158.99\n\n(4) 원자재\n- WTI / Brent: 확인 제한(공신력 원천에서 05/26 종가 숫자 자동 추출 실패; “$100 아래” 구간은 Reuters 코멘트로만 확인)\n- Gold(Spot): $4,511.23/oz (Reuters, 05/26)\n\n(5) 주식 변동성\n- VIX / VVIX: 확인 제한(공식 종가 자동 추출 실패)\n\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n\n(7) 향후 24~48시간 주요 이벤트(ET)\n- 05/28(목): Personal Income and Outlays / PCE(예정, BEA 일정 기준)\n\n(8) 실행 가능한 핵심 요약(모니터링 관점)\n- (CTA) “CTA ETF 약세 누적”이 DBMF/KMLM로 확산되는지 3~5일 창으로 재확인(프록시)\n- (매크로) 금리 레벨이 높은 구간(10Y 4%대 중반)에서 “주가 고점권” → 변동성 재확대 신호(VIX) 확인이 필요(현재는 확인 제한)\n\n데이터 소스(공신력 우선, 일부 프록시):\n- 미 증시 주요 지수(05/26): AP “How major US stock indexes fared Tuesday 5/26/2026”\n- Nasdaq 100 / STOXX 600: MarketScreener (05/26, proxy)\n- Nikkei 225(05/26): StockQ\n- 금리(05/22): U.S. Treasury “Daily Treasury Par Yield Curve Rates”\n- COT(05/19): CFTC “Traders in Financial Futures – Futures Only”\n- ETF 종가(DBMF/KMLM/CTA, 05/22): StockAnalysis ETF historical data (프록시)\n- FX/Gold 일부(05/26): Reuters(Investing/MarketScreener 재배포)"
      },
      "alertBullets": [
        "CTA 시스템(프록시): “slow deleveraging / exposure reduction” 쪽으로 기울어짐(CTA ETF 하락 누적)",
        "Context",
        "CTA ETF 3~5일 누적 하락이 -2%/-3% 기준을 초과(프록시 트리거)",
        "CFTC(05/19 기준)에서는 Lev Funds의 ES net short가 축소(+30.9k) → “주가지수 선물의 숏 익스포저 축소” 신호",
        "UST(2Y/5Y/10Y)에서는 net short 축소, UST Bond에서는 net short 확대 → 듀레이션/커브 포지션은 혼재(모니터링)"
      ]
    },
    {
      "name": "last_report_20260526.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 발생 / slow deleveraging / exposure reduction",
      "date": "2026-05-26",
      "trigger": "발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-05-26T07:56:24+09:00",
      "size": 5021,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 발생 / slow deleveraging / exposure reduction\n\n(기준일 KST) 2026-05-26\n메모: 2026-05-25(월)은 Memorial Day로 미 주식/채권 시장 휴장 → 아래 “마켓” 수치는 주로 2026-05-22(금) 종가/마감치 기준.\n\n① DAILY CTA Proxy Trigger\n`Date      | Asset / Index                         | Value     | D1 Δ%   | Δ Z | Confirm\n2026-05-22 | SG CTA Trend Index                    | NA        | NA      | NA  | 확인 제한(비공개 지수)\n2026-05-22 | SG Short-Term Traders Index           | NA        | NA      | NA  | 확인 제한(비공개 지수)\n2026-05-25 | Barclay BTOP50 (Monthly return, est.) | May +0.92%| NA      | NA  | 확인(BarclayHedge, est.)\n2026-05-22 | DBMF ETF                              | 31.09     | -0.06%  | NA  | 확인(프록시: ETF 종가)\n2026-05-22 | KMLM ETF                              | 29.22     | +0.09%  | NA  | 확인(프록시: ETF 종가)\n2026-05-22 | CTA ETF                               | 30.70     | -0.78%  | NA  | 확인(프록시: ETF 종가)`\n\n- 3~5일 누적(프록시, 종가 기준):\n  - DBMF: 3D -0.73% / 5D -0.45% (05/19·05/15 대비)\n  - KMLM: 3D -2.40% / 5D -2.08% (05/19·05/15 대비)\n  - CTA : 3D -5.07% / 5D -4.12% (05/19·05/15 대비) → 3D/5D 기준 Trigger 충족\n- Trigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n`Date       | Asset           | Value(Net) | WoW Δ    | %      | Δ Z | Unwind? | Confirm\n2026-05-19  | S&P 500 (ES)    | -401,554   | +30,884  | +7.1%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | USD Index (DX)  | -11,716    | -6,965   | -146.6%| NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 2Y          | -1,878,632 | +69,197  | +3.6%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 5Y          | -2,306,447 | +42,758  | +1.8%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 10Y         | -1,952,737 | +4,205   | +0.2%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 30Y(USTBond)| -326,383   | -30,187  | -10.2% | NA  | ❌      | 확인(CFTC TFF, Lev Funds)`\n\n- 표기: Net/WoW Δ/%는 “Leveraged Funds” (Long-Short) 기준 프록시. (비상업/자금군 전체 Net과 다를 수 있음)\n\n③ 종합 Alert\n- CTA 프록시 트리거: 발생 (기준일: 2026-05-26 KST / 프록시 데이터는 05-22 마감치 중심)\n- 국면 판단: slow deleveraging / exposure reduction\n- Context\n  - managed-futures ETF(CTA)에서 3~5일 누적 하락이 -2%/-3% 기준을 넘어섬(프록시 트리거)\n  - 단, DBMF/KMLM은 동기간 낙폭이 상대적으로 제한적 → “광범위한 CTA unwind”로 단정은 금지(모니터링)\n  - 최신 CFTC(TFF, 05/19 기준)에서 Lev Funds는 ES net short 축소(+30.9k), UST(2Y/5Y/10Y)는 net short 축소, UST Bond는 net short 확대\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (최근 확인 가능 종가)\n`As of      | Index         | Level     | Chg\n2026-05-22  | S&P 500       | 7,473.47  | +0.4%\n2026-05-22  | Nasdaq 100    | 29,519.09 | +0.55%\n2026-05-22  | Dow           | 50,579.70 | +0.6%\n2026-05-22  | Russell 2000  | 2,869.23  | +0.9%\n2026-05-22  | STOXX 600     | 625.12    | +0.73%\n2026-05-22  | Nikkei 225    | 65,366.00 | +3.20%`\n\n(2) 금리: U.S. Treasury (Daily Par Yield Curve Rates, 2026-05-22)\n`Date       | 2Y   | 5Y   | 10Y  | 30Y\n2026-05-22  | 4.13 | 4.27 | 4.56 | 5.07`\n\n(3) FX (프록시/요약)\n- DXY(선물): 99.25 (2026-05-22 기준 기사 내 표기)\n- USDJPY: 159.12 (2026-05-22 기준 기사 내 표기)\n- EURUSD: 확인 제한\n\n(4) 원자재 (프록시/요약; 선물)\n- WTI Jul: $97.98\n- Brent Jul: $104.84\n- Gold Jun: $4,526.30/oz\n\n(5) 주식 변동성\n- VIX / VVIX: 확인 제한\n\n(6) 미 증시 breadth\n- 확인 제한(소스 미연동)\n\n(7) 향후 24~48시간 주요 이벤트 (ET 기준, 일부)\n- 05/25(월): Memorial Day 휴장(미 주식/채권)\n- 05/26(화): S&P CoreLogic Case‑Shiller(09:00) / Consumer Confidence(10:00)\n- 05/27(수): Fed 발언 일정 일부(연설) — 상세 확인 제한\n\n(8) 실행 가능한 핵심 요약(모니터링 관점)\n- CTA(프록시)에서 3~5일 누적 하락 신호가 1개(CTA ETF)에서 확인 → “추가 약세가 확산되는지”를 3~5일 창으로 재확인\n- 금리(05/22): 10Y 4.56% / 30Y 5.07%로 장기금리 레벨이 높은 구간 → 주식 조정 시 ‘금리 민감’ 섹터 변동성 확대 가능성 점검\n\n데이터 소스(공신력 우선, 일부 프록시):\n- 미 증시 주요 지수(05/22): AP “How major US stock indexes fared Friday 5/22/2026”\n- 금리(05/22): U.S. Treasury “Daily Treasury Par Yield Curve Rates”\n- COT(05/19): CFTC “Traders in Financial Futures – Futures Only”\n- BTOP50(5월 추정): BarclayHedge BTOP50 Index (estimated)\n- ETF 종가(DBMF/KMLM/CTA): StockAnalysis ETF historical data (프록시)\n- 일본/FX/원자재 일부: Investing.com(Reuters) 기사 내 수치(프록시)",
      "summary": {
        "cta": "- CTA 프록시 트리거: 발생 (기준일: 2026-05-26 KST / 프록시 데이터는 05-22 마감치 중심)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
        "network": "정상/미표기",
        "confirmLimited": 6,
        "proxy": 15,
        "availableRows": 0,
        "totalRows": 0,
        "coveragePct": 0.0
      },
      "dashboard": {
        "groups": [
          {
            "name": "Daily CTA Proxy",
            "sourceType": "official/manual/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          }
        ],
        "sourceStatus": [
          {
            "name": "Yahoo Finance",
            "status": "ok",
            "detail": "HTTP 200 application/json;charset=utf-8"
          },
          {
            "name": "FRED",
            "status": "http_fail",
            "detail": "ReadTimeout: "
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=UTF-8"
          },
          {
            "name": "Stooq",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
          },
          {
            "name": "Alpha Vantage",
            "status": "ok",
            "detail": "HTTP 200 application/json"
          }
        ],
        "recommendations": [
          "SG CTA/BTOP50은 data/cta_proxies.csv에 수동 값이 있으면 네트워크와 무관하게 살아납니다.",
          "COT는 CFTC 공식 주간 데이터라 네트워크 성공 후 캐시 재사용 전략이 가장 현실적입니다."
        ]
      },
      "sections": {
        "cta": "① DAILY CTA Proxy Trigger\n`Date      | Asset / Index                         | Value     | D1 Δ%   | Δ Z | Confirm\n2026-05-22 | SG CTA Trend Index                    | NA        | NA      | NA  | 확인 제한(비공개 지수)\n2026-05-22 | SG Short-Term Traders Index           | NA        | NA      | NA  | 확인 제한(비공개 지수)\n2026-05-25 | Barclay BTOP50 (Monthly return, est.) | May +0.92%| NA      | NA  | 확인(BarclayHedge, est.)\n2026-05-22 | DBMF ETF                              | 31.09     | -0.06%  | NA  | 확인(프록시: ETF 종가)\n2026-05-22 | KMLM ETF                              | 29.22     | +0.09%  | NA  | 확인(프록시: ETF 종가)\n2026-05-22 | CTA ETF                               | 30.70     | -0.78%  | NA  | 확인(프록시: ETF 종가)`\n\n- 3~5일 누적(프록시, 종가 기준):\n  - DBMF: 3D -0.73% / 5D -0.45% (05/19·05/15 대비)\n  - KMLM: 3D -2.40% / 5D -2.08% (05/19·05/15 대비)\n  - CTA : 3D -5.07% / 5D -4.12% (05/19·05/15 대비) → 3D/5D 기준 Trigger 충족\n- Trigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n`Date       | Asset           | Value(Net) | WoW Δ    | %      | Δ Z | Unwind? | Confirm\n2026-05-19  | S&P 500 (ES)    | -401,554   | +30,884  | +7.1%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | USD Index (DX)  | -11,716    | -6,965   | -146.6%| NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 2Y          | -1,878,632 | +69,197  | +3.6%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 5Y          | -2,306,447 | +42,758  | +1.8%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 10Y         | -1,952,737 | +4,205   | +0.2%  | NA  | ❌      | 확인(CFTC TFF, Lev Funds)\n2026-05-19  | UST 30Y(USTBond)| -326,383   | -30,187  | -10.2% | NA  | ❌      | 확인(CFTC TFF, Lev Funds)`\n\n- 표기: Net/WoW Δ/%는 “Leveraged Funds” (Long-Short) 기준 프록시. (비상업/자금군 전체 Net과 다를 수 있음)",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 발생 (기준일: 2026-05-26 KST / 프록시 데이터는 05-22 마감치 중심)\n- 국면 판단: slow deleveraging / exposure reduction\n- Context\n  - managed-futures ETF(CTA)에서 3~5일 누적 하락이 -2%/-3% 기준을 넘어섬(프록시 트리거)\n  - 단, DBMF/KMLM은 동기간 낙폭이 상대적으로 제한적 → “광범위한 CTA unwind”로 단정은 금지(모니터링)\n  - 최신 CFTC(TFF, 05/19 기준)에서 Lev Funds는 ES net short 축소(+30.9k), UST(2Y/5Y/10Y)는 net short 축소, UST Bond는 net short 확대",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (최근 확인 가능 종가)\n`As of      | Index         | Level     | Chg\n2026-05-22  | S&P 500       | 7,473.47  | +0.4%\n2026-05-22  | Nasdaq 100    | 29,519.09 | +0.55%\n2026-05-22  | Dow           | 50,579.70 | +0.6%\n2026-05-22  | Russell 2000  | 2,869.23  | +0.9%\n2026-05-22  | STOXX 600     | 625.12    | +0.73%\n2026-05-22  | Nikkei 225    | 65,366.00 | +3.20%`\n\n(2) 금리: U.S. Treasury (Daily Par Yield Curve Rates, 2026-05-22)\n`Date       | 2Y   | 5Y   | 10Y  | 30Y\n2026-05-22  | 4.13 | 4.27 | 4.56 | 5.07`\n\n(3) FX (프록시/요약)\n- DXY(선물): 99.25 (2026-05-22 기준 기사 내 표기)\n- USDJPY: 159.12 (2026-05-22 기준 기사 내 표기)\n- EURUSD: 확인 제한\n\n(4) 원자재 (프록시/요약; 선물)\n- WTI Jul: $97.98\n- Brent Jul: $104.84\n- Gold Jun: $4,526.30/oz\n\n(5) 주식 변동성\n- VIX / VVIX: 확인 제한\n\n(6) 미 증시 breadth\n- 확인 제한(소스 미연동)\n\n(7) 향후 24~48시간 주요 이벤트 (ET 기준, 일부)\n- 05/25(월): Memorial Day 휴장(미 주식/채권)\n- 05/26(화): S&P CoreLogic Case‑Shiller(09:00) / Consumer Confidence(10:00)\n- 05/27(수): Fed 발언 일정 일부(연설) — 상세 확인 제한\n\n(8) 실행 가능한 핵심 요약(모니터링 관점)\n- CTA(프록시)에서 3~5일 누적 하락 신호가 1개(CTA ETF)에서 확인 → “추가 약세가 확산되는지”를 3~5일 창으로 재확인\n- 금리(05/22): 10Y 4.56% / 30Y 5.07%로 장기금리 레벨이 높은 구간 → 주식 조정 시 ‘금리 민감’ 섹터 변동성 확대 가능성 점검\n\n데이터 소스(공신력 우선, 일부 프록시):\n- 미 증시 주요 지수(05/22): AP “How major US stock indexes fared Friday 5/22/2026”\n- 금리(05/22): U.S. Treasury “Daily Treasury Par Yield Curve Rates”\n- COT(05/19): CFTC “Traders in Financial Futures – Futures Only”\n- BTOP50(5월 추정): BarclayHedge BTOP50 Index (estimated)\n- ETF 종가(DBMF/KMLM/CTA): StockAnalysis ETF historical data (프록시)\n- 일본/FX/원자재 일부: Investing.com(Reuters) 기사 내 수치(프록시)"
      },
      "alertBullets": [
        "CTA 프록시 트리거: 발생 (기준일: 2026-05-26 KST / 프록시 데이터는 05-22 마감치 중심)",
        "국면 판단: slow deleveraging / exposure reduction",
        "Context",
        "managed-futures ETF(CTA)에서 3~5일 누적 하락이 -2%/-3% 기준을 넘어섬(프록시 트리거)",
        "단, DBMF/KMLM은 동기간 낙폭이 상대적으로 제한적 → “광범위한 CTA unwind”로 단정은 금지(모니터링)"
      ]
    },
    {
      "name": "last_report_20260522.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / COT(2026-05-12) 기준",
      "date": "2026-05-22",
      "trigger": "확인 제한",
      "regime": "insufficient data / 확인 제한(CTA 프록시 미집계로 시스템 판정 불가)",
      "mtime": "2026-05-22T07:28:43+09:00",
      "size": 4634,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / COT(2026-05-12) 기준\n\n기준일(KST): 2026-05-22\n미국장/금리 스냅샷(ET): 2026-05-21 종가(지수) / 2026-05-21 Treasury par yield(금리)\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset / Index                     Value  D1 Δ%  D3  D5  Δ Z  Confirm\n----------  -------------------------------  --------  -----  --  --  ---  ----------\n2026-05-22  SG CTA Trend Index (proxy)            NA     NA     NA  NA  NA   확인 제한\n2026-05-22  SG Short-Term Traders Index (proxy)   NA     NA     NA  NA  NA   확인 제한\n2026-05-22  Barclay BTOP50 (proxy)                NA     NA     NA  NA  NA   확인 제한\n2026-05-22  DBMF ETF                              NA     NA     NA  NA  NA   확인 제한\n2026-05-22  KMLM ETF                              NA     NA     NA  NA  NA   확인 제한\n```\n- 메모: 현재 실행 환경에서 외부 시세 소스(DNS)가 차단되어 프록시 기반 CTA 트리거 산출이 불가합니다.\n- 대안(권장): `data/cta_proxies.csv`에 SG CTA/BTOP50 일간 값을 업데이트하면(로컬 확인) 트리거 판정이 동작합니다.\n- Trigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)   WoW Δ      %     Δ Z  Unwind?  Confirm\n----------  --------------  ----------  -------  ------  ---  -------  -------\n2026-05-12  S&P 500 (ES)      -143,835  -39,950  -38.5%   NA     ❌     확인(공식)\n2026-05-12  USD Index (DX)       3,187    2,494  +359.9%  NA     ❌     확인(공식)\n2026-05-12  UST 2Y          -1,602,612   70,717   +4.2%   NA     ❌     확인(공식)\n2026-05-12  UST 5Y          -1,362,145   59,154   +4.2%   NA     ❌     확인(공식)\n2026-05-12  UST 10Y           -781,167   34,102   +4.2%   NA     ❌     확인(공식)\n2026-05-12  UST 30Y(UST Bond) -172,854       88   +0.1%   NA     ❌     확인(공식)\n```\n- 산식: Non-Commercial Net = Long - Short (CFTC Futures Only long report).\n- 표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔)이나, 히스토리 자동 수집이 차단되어 Δ Z는 NA입니다.\n- 출처: CFTC Futures Only long report(05/12/2026) — CME(ES), CBOT(UST), ICE(DX).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 확인 제한 (기준일: 2026-05-22, 시세 소스 접근 불가)\n- COT(2026-05-12 기준): 주식(ES) 비상업 순포지션은 순쇼트 유지, WoW 기준 쇼트 확대\n- 금리(2026-05-21 기준): UST 2Y/5Y 소폭 상승(+4bp/+3bp), 10Y 보합, 30Y 소폭 하락(-1bp)\n- 국면 판단: insufficient data / 확인 제한(CTA 프록시 미집계로 시스템 판정 불가)\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (미국장 2026-05-21 종가)\n```\nDate(ET)    Index                     Close      D1    Confirm\n----------  ----------------------  --------  ------  -----------\n2026-05-21  S&P 500                 7,445.72  +0.2%   확인(AP)\n2026-05-21  Nasdaq Composite        26,293.10 +0.1%   확인(AP)\n2026-05-21  Dow                     50,285.66 +0.6%   확인(AP)\n2026-05-21  Russell 2000             2,843.45 +0.9%   확인(AP)\n2026-05-21  Nasdaq 100              NA        NA      확인 제한\n2026-05-21  STOXX 600               NA        NA      확인 제한\n2026-05-21  Nikkei 225              NA        NA      확인 제한\n```\n\n(2) 금리 (U.S. Treasury Daily Par Yield Curve 2026-05-21)\n```\nDate(ET)    Rate     Yield   D1     Confirm\n----------  -------  ------  -----  -----------\n2026-05-21  UST 2Y   4.08%   +4bp   확인(공식)\n2026-05-21  UST 5Y   4.25%   +3bp   확인(공식)\n2026-05-21  UST 10Y  4.57%   +0bp   확인(공식)\n2026-05-21  UST 30Y  5.10%   -1bp   확인(공식)\n```\n\n(3) FX: 확인 제한(소스 미연동)\n(4) 원자재: 확인 제한(소스 미연동)\n(5) 주식 변동성(VIX/VVIX): 확인 제한(소스 미연동)\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트: 확인 제한(공식 캘린더 접근 차단)\n(8) 실행 가능한 핵심 요약\n- (체크리스트) CTA 프록시: `data/cta_proxies.csv` 업데이트 → 트리거 판정 복구\n- (체크리스트) COT: 2026-05-12(화) 기준 포지션 변화는 ‘주식 순쇼트 확대’ + ‘UST 순쇼트 완화(2Y/5Y/10Y)’\n\nSources (요약)\n- 지수(미국장): AP “How major US stock indexes fared Thursday 5/21/2026”\n- 금리: U.S. Treasury “Daily Treasury Par Yield Curve Rates” (2026-05-21)\n- COT: CFTC Futures Only long report (2026-05-12) — `deacmesf.htm`, `deacbtlf.htm`, `deanybtlf.htm`",
      "summary": {
        "cta": "- CTA 프록시 트리거: 확인 제한 (기준일: 2026-05-22, 시세 소스 접근 불가)",
        "regime": "- 국면 판단: insufficient data / 확인 제한(CTA 프록시 미집계로 시스템 판정 불가)",
        "network": "정상/미표기",
        "confirmLimited": 16,
        "proxy": 5,
        "availableRows": 8,
        "totalRows": 19,
        "coveragePct": 42.1
      },
      "dashboard": {
        "groups": [
          {
            "name": "Daily CTA Proxy",
            "sourceType": "official/manual/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 3,
            "rows": [
              "2026-05-22  Barclay BTOP50 (proxy)                NA     NA     NA  NA  NA   확인 제한",
              "2026-05-22  DBMF ETF                              NA     NA     NA  NA  NA   확인 제한",
              "2026-05-22  KMLM ETF                              NA     NA     NA  NA  NA   확인 제한"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "unavailable",
            "available": 0,
            "total": 5,
            "rows": [
              "2026-05-12  S&P 500 (ES)      -143,835  -39,950  -38.5%   NA     ❌     확인(공식)",
              "2026-05-12  UST 2Y          -1,602,612   70,717   +4.2%   NA     ❌     확인(공식)",
              "2026-05-12  UST 5Y          -1,362,145   59,154   +4.2%   NA     ❌     확인(공식)",
              "2026-05-12  UST 10Y           -781,167   34,102   +4.2%   NA     ❌     확인(공식)",
              "2026-05-12  UST 30Y(UST Bond) -172,854       88   +0.1%   NA     ❌     확인(공식)"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "partial",
            "available": 4,
            "total": 7,
            "rows": [
              "2026-05-21  S&P 500                 7,445.72  +0.2%   확인(AP)",
              "2026-05-21  Nasdaq Composite        26,293.10 +0.1%   확인(AP)",
              "2026-05-21  Dow                     50,285.66 +0.6%   확인(AP)",
              "2026-05-21  Russell 2000             2,843.45 +0.9%   확인(AP)",
              "2026-05-21  Nasdaq 100              NA        NA      확인 제한",
              "2026-05-21  STOXX 600               NA        NA      확인 제한",
              "2026-05-21  Nikkei 225              NA        NA      확인 제한"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-05-21  UST 2Y   4.08%   +4bp   확인(공식)",
              "2026-05-21  UST 5Y   4.25%   +3bp   확인(공식)",
              "2026-05-21  UST 10Y  4.57%   +0bp   확인(공식)",
              "2026-05-21  UST 30Y  5.10%   -1bp   확인(공식)"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 0,
            "rows": []
          }
        ],
        "sourceStatus": [
          {
            "name": "Yahoo Finance",
            "status": "ok",
            "detail": "HTTP 200 application/json;charset=utf-8"
          },
          {
            "name": "FRED",
            "status": "http_fail",
            "detail": "ReadTimeout: "
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=UTF-8"
          },
          {
            "name": "Stooq",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
          },
          {
            "name": "Alpha Vantage",
            "status": "ok",
            "detail": "HTTP 200 application/json"
          }
        ],
        "recommendations": [
          "SG CTA/BTOP50은 data/cta_proxies.csv에 수동 값이 있으면 네트워크와 무관하게 살아납니다.",
          "COT는 CFTC 공식 주간 데이터라 네트워크 성공 후 캐시 재사용 전략이 가장 현실적입니다."
        ]
      },
      "sections": {
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset / Index                     Value  D1 Δ%  D3  D5  Δ Z  Confirm\n----------  -------------------------------  --------  -----  --  --  ---  ----------\n2026-05-22  SG CTA Trend Index (proxy)            NA     NA     NA  NA  NA   확인 제한\n2026-05-22  SG Short-Term Traders Index (proxy)   NA     NA     NA  NA  NA   확인 제한\n2026-05-22  Barclay BTOP50 (proxy)                NA     NA     NA  NA  NA   확인 제한\n2026-05-22  DBMF ETF                              NA     NA     NA  NA  NA   확인 제한\n2026-05-22  KMLM ETF                              NA     NA     NA  NA  NA   확인 제한\n```\n- 메모: 현재 실행 환경에서 외부 시세 소스(DNS)가 차단되어 프록시 기반 CTA 트리거 산출이 불가합니다.\n- 대안(권장): `data/cta_proxies.csv`에 SG CTA/BTOP50 일간 값을 업데이트하면(로컬 확인) 트리거 판정이 동작합니다.\n- Trigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)   WoW Δ      %     Δ Z  Unwind?  Confirm\n----------  --------------  ----------  -------  ------  ---  -------  -------\n2026-05-12  S&P 500 (ES)      -143,835  -39,950  -38.5%   NA     ❌     확인(공식)\n2026-05-12  USD Index (DX)       3,187    2,494  +359.9%  NA     ❌     확인(공식)\n2026-05-12  UST 2Y          -1,602,612   70,717   +4.2%   NA     ❌     확인(공식)\n2026-05-12  UST 5Y          -1,362,145   59,154   +4.2%   NA     ❌     확인(공식)\n2026-05-12  UST 10Y           -781,167   34,102   +4.2%   NA     ❌     확인(공식)\n2026-05-12  UST 30Y(UST Bond) -172,854       88   +0.1%   NA     ❌     확인(공식)\n```\n- 산식: Non-Commercial Net = Long - Short (CFTC Futures Only long report).\n- 표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔)이나, 히스토리 자동 수집이 차단되어 Δ Z는 NA입니다.\n- 출처: CFTC Futures Only long report(05/12/2026) — CME(ES), CBOT(UST), ICE(DX).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 확인 제한 (기준일: 2026-05-22, 시세 소스 접근 불가)\n- COT(2026-05-12 기준): 주식(ES) 비상업 순포지션은 순쇼트 유지, WoW 기준 쇼트 확대\n- 금리(2026-05-21 기준): UST 2Y/5Y 소폭 상승(+4bp/+3bp), 10Y 보합, 30Y 소폭 하락(-1bp)\n- 국면 판단: insufficient data / 확인 제한(CTA 프록시 미집계로 시스템 판정 불가)",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (미국장 2026-05-21 종가)\n```\nDate(ET)    Index                     Close      D1    Confirm\n----------  ----------------------  --------  ------  -----------\n2026-05-21  S&P 500                 7,445.72  +0.2%   확인(AP)\n2026-05-21  Nasdaq Composite        26,293.10 +0.1%   확인(AP)\n2026-05-21  Dow                     50,285.66 +0.6%   확인(AP)\n2026-05-21  Russell 2000             2,843.45 +0.9%   확인(AP)\n2026-05-21  Nasdaq 100              NA        NA      확인 제한\n2026-05-21  STOXX 600               NA        NA      확인 제한\n2026-05-21  Nikkei 225              NA        NA      확인 제한\n```\n\n(2) 금리 (U.S. Treasury Daily Par Yield Curve 2026-05-21)\n```\nDate(ET)    Rate     Yield   D1     Confirm\n----------  -------  ------  -----  -----------\n2026-05-21  UST 2Y   4.08%   +4bp   확인(공식)\n2026-05-21  UST 5Y   4.25%   +3bp   확인(공식)\n2026-05-21  UST 10Y  4.57%   +0bp   확인(공식)\n2026-05-21  UST 30Y  5.10%   -1bp   확인(공식)\n```\n\n(3) FX: 확인 제한(소스 미연동)\n(4) 원자재: 확인 제한(소스 미연동)\n(5) 주식 변동성(VIX/VVIX): 확인 제한(소스 미연동)\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트: 확인 제한(공식 캘린더 접근 차단)\n(8) 실행 가능한 핵심 요약\n- (체크리스트) CTA 프록시: `data/cta_proxies.csv` 업데이트 → 트리거 판정 복구\n- (체크리스트) COT: 2026-05-12(화) 기준 포지션 변화는 ‘주식 순쇼트 확대’ + ‘UST 순쇼트 완화(2Y/5Y/10Y)’\n\nSources (요약)\n- 지수(미국장): AP “How major US stock indexes fared Thursday 5/21/2026”\n- 금리: U.S. Treasury “Daily Treasury Par Yield Curve Rates” (2026-05-21)\n- COT: CFTC Futures Only long report (2026-05-12) — `deacmesf.htm`, `deacbtlf.htm`, `deanybtlf.htm`"
      },
      "alertBullets": [
        "CTA 프록시 트리거: 확인 제한 (기준일: 2026-05-22, 시세 소스 접근 불가)",
        "COT(2026-05-12 기준): 주식(ES) 비상업 순포지션은 순쇼트 유지, WoW 기준 쇼트 확대",
        "금리(2026-05-21 기준): UST 2Y/5Y 소폭 상승(+4bp/+3bp), 10Y 보합, 30Y 소폭 하락(-1bp)",
        "국면 판단: insufficient data / 확인 제한(CTA 프록시 미집계로 시스템 판정 불가)"
      ]
    },
    {
      "name": "last_report_20260521.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / (CTA 프록시 시세 확인 제한, COT·마켓은 공신력 원천 기반)",
      "date": "2026-05-21",
      "trigger": "확인 제한",
      "regime": "neutral/no trigger (CTA 입력 공백으로 확신도 낮음)",
      "mtime": "2026-05-21T07:27:52+09:00",
      "size": 5747,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / (CTA 프록시 시세 확인 제한, COT·마켓은 공신력 원천 기반)\n\n- 실행 기준일(KST): 2026-05-21 (목)\n- 마켓 스냅샷 기준: 2026-05-20 (미국장 종가, ET 기준) / 유럽·일본은 2026-05-20 종가\n- 원천(가능한 범위): CFTC(COT), U.S. Treasury(수익률), Nasdaq Indexes(NDX), AP(미 지수), Nikkei Indexes(니케이), TradingEconomics(FX/원자재/금), Investing(주요 FX 실시간)\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset / Index                     Value     D1 Δ%   Δ Z-score  Confirmation\n----------  -------------------------------  ----------  -------  ---------  ------------\n2026-05-21  SG CTA Trend Index               NA          NA       NA         확인 제한\n2026-05-21  SG Short-Term Traders Index      NA          NA       NA         확인 제한\n2026-05-21  Barclay BTOP50                   NA          NA       NA         확인 제한\n2026-05-21  DBMF ETF                         NA          NA       NA         확인 제한\n2026-05-21  KMLM ETF                         NA          NA       NA         확인 제한\n```\n- 판정: 유효 데이터 부족 → Trigger 판정 불가(확인 제한)\n- 트리거 기준(프록시): D1≤-1% 또는 |Z|≥1.0, 3D≤-2%, 5D≤-3%.\n- 메모: SG/BTOP50는 로컬 CSV(`data/cta_proxies.csv`) 입력이 없으면 공신력 있는 무료 시세로 확인이 어려움.\n\n② Weekly COT Signals (최신 CFTC 기준)\n- 최신 공개: 2026-05-12(화) 포지션, 2026-05-15(금) 15:30 ET 공개. 다음 공개 예정: 2026-05-22(금).\n```\nReport Date   Asset           Value(Net)    WoW Δ     %      Δ Z-score  Unwind?  Confirmation\n----------  --------------  ----------  --------  -----  ---------  -------  ------------\n2026-05-12  S&P 500 (ES)    -143,835    -39,950   NA     NA         ❌        확인(CFTC)\n2026-05-12  USD Index (DX)  +3,187      +2,494    NA     NA         ❌        확인(CFTC)\n2026-05-12  UST 10Y         NA          NA        NA     NA         ❌        확인 제한\n2026-05-12  UST 2Y          NA          NA        NA     NA         ❌        확인 제한\n2026-05-12  UST 5Y          NA          NA        NA     NA         ❌        확인 제한\n2026-05-12  UST 30Y         NA          NA        NA     NA         ❌        확인 제한\n```\n- 해석(간단)\n  - ES: 비상업(Non-Commercial) 순포지션은 순숏 유지(주간 기준 순숏 확대).\n  - DX: 비상업 순포지션은 순롱 유지(주간 기준 순롱 확대).\n\n③ 종합 Alert\n- CTA 시스템 상태: CTA 프록시 지표(핵심 입력) 공백 → Proxy Trigger는 “판정 보류(확인 제한)”\n- Context\n  - 리스크온 반등: 05/20 미국 주식은 4거래일 하락 후 반등(S&P +1.1%, Russell +2.6%).\n  - 금리: 05/20 UST 10Y 4.57% / 30Y 5.11% (고금리 레벨 유지).\n  - 유가 급락: WTI/Brent 일간 -5% 내외(공급 기대/협상 뉴스 영향) → 인플레 압력 단기 완화 신호.\n- 국면 판단: neutral/no trigger (CTA 입력 공백으로 확신도 낮음)\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수\n```\n기준일(ET)     Index                 Close       D1       Confirmation\n----------  --------------------  ---------  -------  ------------\n2026-05-20  S&P 500               7,432.97   +1.10%   확인(AP)\n2026-05-20  Nasdaq 100 (NDX)      29,297.70  +1.67%   확인(Nasdaq)*\n2026-05-20  Dow                   50,009.35  +1.30%   확인(AP)\n2026-05-20  Russell 2000          2,817.36   +2.60%   확인(AP)\n2026-05-20  STOXX 600             620.29     +1.46%   확인(유럽 종가 보도)\n2026-05-20  Nikkei 225            59,804.41  -1.23%   확인(니케이)\n```\n* NDX 일간 변동률은 Nasdaq 공시값(Net Change)을 이용해 산출(공식 종가/전일값이 텍스트로 함께 노출되지 않아 %는 계산치).\n\n(2) 금리 (Daily Treasury Par Yield Curve Rates, %)\n```\nDate(ET)     2Y    5Y    10Y   30Y   Confirmation\n----------  ----  ----  ----  ----  ------------\n2026-05-20  4.04  4.22  4.57  5.11  확인(미 재무부)\n```\n\n(3) FX\n```\n기준일(ET)     FX      Value     D1       Confirmation\n----------  ------  -------  -------  ------------\n2026-05-20  DXY     99.11    -0.21%   확인(TradingEconomics)\n2026-05-20  EURUSD  1.1629   +0.03%   실시간(Investing)\n2026-05-20  USDJPY  158.84   -0.04%   실시간(Investing)\n```\n\n(4) 원자재\n```\n기준일(ET)     Commodity  Value     D1       Confirmation\n----------  ---------  ------  -------  ------------\n2026-05-20  WTI        98.99   -4.95%   확인(TradingEconomics)\n2026-05-20  Brent      105.19  -5.24%   확인(TradingEconomics)\n2026-05-20  Gold       4,528.22 +0.88%  확인(TradingEconomics)\n```\n\n(5) 주식 변동성\n```\n기준일(ET)     Vol   Value   D1       Confirmation\n----------  ----  -----  -------  ------------\n2026-05-20  VIX   NA     NA       확인 제한 (최신 확정치: 2026-05-19=18.06)\n2026-05-20  VVIX  NA     NA       확인 제한\n```\n\n(6) 미 증시 breadth\n- 확인 제한(공식 breadth feed/무료 집계 접근 제한)\n\n(7) 향후 24~48시간 주요 이벤트 (ET 기준)\n- 05/21(목) 08:30: Initial Jobless Claims(주간 신규 실업수당 청구)\n- 05/22(금) 15:30: CFTC COT(주간 포지션) 공개(05/19 기준분)\n\n(8) 실행 가능한 핵심 요약\n- (체크 1) CTA 프록시 입력 복구가 최우선: `data/cta_proxies.csv`(SG/BTOP50) + DBMF/KMLM 시세 확보 시 Trigger 판정 가능.\n- (체크 2) 유가 급락 + 주식 반등 조합은 단기 risk-on 리바운드에 우호적이나, 장기금리 레벨은 여전히 부담(10Y 4.57%).\n- (체크 3) COT(05/22 공개)에서 주식/달러/금리 포지션의 “언와인드 가속” 여부를 재확인.",
      "summary": {
        "cta": "확인 제한",
        "regime": "- 국면 판단: neutral/no trigger (CTA 입력 공백으로 확신도 낮음)",
        "network": "정상/미표기",
        "confirmLimited": 16,
        "proxy": 4,
        "availableRows": 14,
        "totalRows": 23,
        "coveragePct": 60.9
      },
      "dashboard": {
        "groups": [
          {
            "name": "Daily CTA Proxy",
            "sourceType": "official/manual/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 3,
            "rows": [
              "2026-05-21  Barclay BTOP50                   NA          NA       NA         확인 제한",
              "2026-05-21  DBMF ETF                         NA          NA       NA         확인 제한",
              "2026-05-21  KMLM ETF                         NA          NA       NA         확인 제한"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "unavailable",
            "available": 0,
            "total": 5,
            "rows": [
              "2026-05-12  S&P 500 (ES)    -143,835    -39,950   NA     NA         ❌        확인(CFTC)",
              "2026-05-12  UST 10Y         NA          NA        NA     NA         ❌        확인 제한",
              "2026-05-12  UST 2Y          NA          NA        NA     NA         ❌        확인 제한",
              "2026-05-12  UST 5Y          NA          NA        NA     NA         ❌        확인 제한",
              "2026-05-12  UST 30Y         NA          NA        NA     NA         ❌        확인 제한"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-05-20  S&P 500               7,432.97   +1.10%   확인(AP)",
              "2026-05-20  Nasdaq 100 (NDX)      29,297.70  +1.67%   확인(Nasdaq)*",
              "2026-05-20  Dow                   50,009.35  +1.30%   확인(AP)",
              "2026-05-20  Russell 2000          2,817.36   +2.60%   확인(AP)",
              "2026-05-20  STOXX 600             620.29     +1.46%   확인(유럽 종가 보도)",
              "2026-05-20  Nikkei 225            59,804.41  -1.23%   확인(니케이)"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 2,
            "total": 2,
            "rows": [
              "Date(ET)     2Y    5Y    10Y   30Y   Confirmation",
              "2026-05-20  4.04  4.22  4.57  5.11  확인(미 재무부)"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-05-20  DXY     99.11    -0.21%   확인(TradingEconomics)",
              "2026-05-20  EURUSD  1.1629   +0.03%   실시간(Investing)",
              "2026-05-20  USDJPY  158.84   -0.04%   실시간(Investing)"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-05-20  WTI        98.99   -4.95%   확인(TradingEconomics)",
              "2026-05-20  Brent      105.19  -5.24%   확인(TradingEconomics)",
              "2026-05-20  Gold       4,528.22 +0.88%  확인(TradingEconomics)"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 1,
            "rows": [
              "2026-05-20  VIX   NA     NA       확인 제한 (최신 확정치: 2026-05-19=18.06)"
            ]
          }
        ],
        "sourceStatus": [
          {
            "name": "Yahoo Finance",
            "status": "ok",
            "detail": "HTTP 200 application/json;charset=utf-8"
          },
          {
            "name": "FRED",
            "status": "http_fail",
            "detail": "ReadTimeout: "
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=UTF-8"
          },
          {
            "name": "Stooq",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
          },
          {
            "name": "Alpha Vantage",
            "status": "ok",
            "detail": "HTTP 200 application/json"
          }
        ],
        "recommendations": [
          "SG CTA/BTOP50은 data/cta_proxies.csv에 수동 값이 있으면 네트워크와 무관하게 살아납니다.",
          "COT는 CFTC 공식 주간 데이터라 네트워크 성공 후 캐시 재사용 전략이 가장 현실적입니다."
        ]
      },
      "sections": {
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset / Index                     Value     D1 Δ%   Δ Z-score  Confirmation\n----------  -------------------------------  ----------  -------  ---------  ------------\n2026-05-21  SG CTA Trend Index               NA          NA       NA         확인 제한\n2026-05-21  SG Short-Term Traders Index      NA          NA       NA         확인 제한\n2026-05-21  Barclay BTOP50                   NA          NA       NA         확인 제한\n2026-05-21  DBMF ETF                         NA          NA       NA         확인 제한\n2026-05-21  KMLM ETF                         NA          NA       NA         확인 제한\n```\n- 판정: 유효 데이터 부족 → Trigger 판정 불가(확인 제한)\n- 트리거 기준(프록시): D1≤-1% 또는 |Z|≥1.0, 3D≤-2%, 5D≤-3%.\n- 메모: SG/BTOP50는 로컬 CSV(`data/cta_proxies.csv`) 입력이 없으면 공신력 있는 무료 시세로 확인이 어려움.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n- 최신 공개: 2026-05-12(화) 포지션, 2026-05-15(금) 15:30 ET 공개. 다음 공개 예정: 2026-05-22(금).\n```\nReport Date   Asset           Value(Net)    WoW Δ     %      Δ Z-score  Unwind?  Confirmation\n----------  --------------  ----------  --------  -----  ---------  -------  ------------\n2026-05-12  S&P 500 (ES)    -143,835    -39,950   NA     NA         ❌        확인(CFTC)\n2026-05-12  USD Index (DX)  +3,187      +2,494    NA     NA         ❌        확인(CFTC)\n2026-05-12  UST 10Y         NA          NA        NA     NA         ❌        확인 제한\n2026-05-12  UST 2Y          NA          NA        NA     NA         ❌        확인 제한\n2026-05-12  UST 5Y          NA          NA        NA     NA         ❌        확인 제한\n2026-05-12  UST 30Y         NA          NA        NA     NA         ❌        확인 제한\n```\n- 해석(간단)\n  - ES: 비상업(Non-Commercial) 순포지션은 순숏 유지(주간 기준 순숏 확대).\n  - DX: 비상업 순포지션은 순롱 유지(주간 기준 순롱 확대).",
        "alert": "③ 종합 Alert\n- CTA 시스템 상태: CTA 프록시 지표(핵심 입력) 공백 → Proxy Trigger는 “판정 보류(확인 제한)”\n- Context\n  - 리스크온 반등: 05/20 미국 주식은 4거래일 하락 후 반등(S&P +1.1%, Russell +2.6%).\n  - 금리: 05/20 UST 10Y 4.57% / 30Y 5.11% (고금리 레벨 유지).\n  - 유가 급락: WTI/Brent 일간 -5% 내외(공급 기대/협상 뉴스 영향) → 인플레 압력 단기 완화 신호.\n- 국면 판단: neutral/no trigger (CTA 입력 공백으로 확신도 낮음)",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수\n```\n기준일(ET)     Index                 Close       D1       Confirmation\n----------  --------------------  ---------  -------  ------------\n2026-05-20  S&P 500               7,432.97   +1.10%   확인(AP)\n2026-05-20  Nasdaq 100 (NDX)      29,297.70  +1.67%   확인(Nasdaq)*\n2026-05-20  Dow                   50,009.35  +1.30%   확인(AP)\n2026-05-20  Russell 2000          2,817.36   +2.60%   확인(AP)\n2026-05-20  STOXX 600             620.29     +1.46%   확인(유럽 종가 보도)\n2026-05-20  Nikkei 225            59,804.41  -1.23%   확인(니케이)\n```\n* NDX 일간 변동률은 Nasdaq 공시값(Net Change)을 이용해 산출(공식 종가/전일값이 텍스트로 함께 노출되지 않아 %는 계산치).\n\n(2) 금리 (Daily Treasury Par Yield Curve Rates, %)\n```\nDate(ET)     2Y    5Y    10Y   30Y   Confirmation\n----------  ----  ----  ----  ----  ------------\n2026-05-20  4.04  4.22  4.57  5.11  확인(미 재무부)\n```\n\n(3) FX\n```\n기준일(ET)     FX      Value     D1       Confirmation\n----------  ------  -------  -------  ------------\n2026-05-20  DXY     99.11    -0.21%   확인(TradingEconomics)\n2026-05-20  EURUSD  1.1629   +0.03%   실시간(Investing)\n2026-05-20  USDJPY  158.84   -0.04%   실시간(Investing)\n```\n\n(4) 원자재\n```\n기준일(ET)     Commodity  Value     D1       Confirmation\n----------  ---------  ------  -------  ------------\n2026-05-20  WTI        98.99   -4.95%   확인(TradingEconomics)\n2026-05-20  Brent      105.19  -5.24%   확인(TradingEconomics)\n2026-05-20  Gold       4,528.22 +0.88%  확인(TradingEconomics)\n```\n\n(5) 주식 변동성\n```\n기준일(ET)     Vol   Value   D1       Confirmation\n----------  ----  -----  -------  ------------\n2026-05-20  VIX   NA     NA       확인 제한 (최신 확정치: 2026-05-19=18.06)\n2026-05-20  VVIX  NA     NA       확인 제한\n```\n\n(6) 미 증시 breadth\n- 확인 제한(공식 breadth feed/무료 집계 접근 제한)\n\n(7) 향후 24~48시간 주요 이벤트 (ET 기준)\n- 05/21(목) 08:30: Initial Jobless Claims(주간 신규 실업수당 청구)\n- 05/22(금) 15:30: CFTC COT(주간 포지션) 공개(05/19 기준분)\n\n(8) 실행 가능한 핵심 요약\n- (체크 1) CTA 프록시 입력 복구가 최우선: `data/cta_proxies.csv`(SG/BTOP50) + DBMF/KMLM 시세 확보 시 Trigger 판정 가능.\n- (체크 2) 유가 급락 + 주식 반등 조합은 단기 risk-on 리바운드에 우호적이나, 장기금리 레벨은 여전히 부담(10Y 4.57%).\n- (체크 3) COT(05/22 공개)에서 주식/달러/금리 포지션의 “언와인드 가속” 여부를 재확인."
      },
      "alertBullets": [
        "CTA 시스템 상태: CTA 프록시 지표(핵심 입력) 공백 → Proxy Trigger는 “판정 보류(확인 제한)”",
        "Context",
        "리스크온 반등: 05/20 미국 주식은 4거래일 하락 후 반등(S&P +1.1%, Russell +2.6%).",
        "금리: 05/20 UST 10Y 4.57% / 30Y 5.11% (고금리 레벨 유지).",
        "유가 급락: WTI/Brent 일간 -5% 내외(공급 기대/협상 뉴스 영향) → 인플레 압력 단기 완화 신호."
      ]
    },
    {
      "name": "last_report_20260520.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / (외부 시세·COT 직접 조회 제한)",
      "date": "2026-05-20",
      "trigger": "확인 제한",
      "regime": "slow deleveraging / exposure reduction (가격·금리 조합만 근거, 확신도 낮음)",
      "mtime": "2026-05-20T07:29:38+09:00",
      "size": 4924,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / (외부 시세·COT 직접 조회 제한)\n\n- 실행 기준일(KST): 2026-05-20 (수)\n- 마켓 스냅샷 기준: 2026-05-19 (미국장 종가, ET 기준) / 유럽·일본은 2026-05-19 종가\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset / Index                     Value     D1 Δ%   Δ Z-score  Confirmation\n----------  -------------------------------  ----------  -------  ---------  ------------\n2026-05-20  SG CTA Trend Index               NA          NA       NA         확인 제한\n2026-05-20  SG Short-Term Traders Index      NA          NA       NA         확인 제한\n2026-05-20  Barclay BTOP50                   NA          NA       NA         확인 제한\n2026-05-20  DBMF ETF                         NA          NA       NA         확인 제한\n2026-05-20  KMLM ETF                         NA          NA       NA         확인 제한\n```\n- 판정: 유효 데이터 부족 → Trigger 판정 불가(확인 제한)\n- 트리거 기준(프록시): D1≤-1% 또는 |Z|≥1.0, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nReport Date   Asset           Value(Net)  WoW Δ  %      Δ Z-score  Unwind?  Confirmation\n----------  --------------  ----------  -----  -----  ---------  -------  ------------\n2026-05-12  S&P 500 (ES)    NA          NA     NA     NA         ❌        확인 제한\n2026-05-12  USD Index (DX)  NA          NA     NA     NA         ❌        확인 제한\n2026-05-12  UST 10Y         NA          NA     NA     NA         ❌        확인 제한\n2026-05-12  UST 2Y          NA          NA     NA     NA         ❌        확인 제한\n2026-05-12  UST 5Y          NA          NA     NA     NA         ❌        확인 제한\n2026-05-12  UST 30Y         NA          NA     NA     NA         ❌        확인 제한\n```\n- 메모: COT 수치(순포지션/주간 변화/Z)는 CFTC 원천값 직접 조회가 불가해 이번 रन에서는 ‘확인 제한’으로 남김.\n- 참고: CFTC COT는 “화요일 기준 포지션 → 금요일(보통 3:30pm ET) 공개” 구조.\n\n③ 종합 Alert\n- CTA 시스템 상태: 데이터 공백(시세·COT 직접 확인 불가) → 트리거/언와인드 판정 보류\n- Context\n  - 미국 주식: 3거래일 연속 약세(대형주·기술주 조정) + 변동성 소폭 상승.\n  - 금리: 미 재무부 커브(2Y~30Y) 전구간 상승 레벨(장기금리 상단 재시험).\n  - 유가: 지정학 이슈로 변동성 높은 구간(100달러대 유지).\n- 국면 판단: slow deleveraging / exposure reduction (가격·금리 조합만 근거, 확신도 낮음)\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수\n```\n기준일(ET)     Index        Close       D1       Confirmation\n----------  ----------  ---------  -------  ------------\n2026-05-19  S&P 500     7,353.61   -0.67%   확인\n2026-05-19  Nasdaq 100  28,818.84  -0.61%   확인\n2026-05-19  Dow         49,363.88  -0.65%   확인\n2026-05-19  Russell2K   2,747.07   -1.00%   확인\n2026-05-19  STOXX 600   611.34     +0.19%   확인\n2026-05-19  Nikkei 225  60,550.59  -0.44%   확인\n```\n(2) 금리 (UST Par Yield Curve, %)\n```\nDate(ET)     2Y    5Y    10Y   30Y   Confirmation\n----------  ----  ----  ----  ----  ------------\n2026-05-19  4.13  4.32  4.67  5.18  확인(미 재무부)\n```\n(3) FX\n```\n기준일(ET)     FX      Value     D1       Confirmation\n----------  ------  -------  -------  ------------\n2026-05-19  DXY     99.26    +0.15%   확인\n2026-05-19  EURUSD  1.16     -0.44%   확인\n2026-05-19  USDJPY  159.08   +0.19%   확인\n```\n(4) 원자재\n```\n기준일(ET)     Commodity  Value      D1       Confirmation\n----------  ---------  -------  -------  ------------\n2026-05-19  WTI        104.19   -0.18%   확인\n2026-05-19  Brent      111.08   -0.91%   확인\n2026-05-19  Gold       4,488.30 -1.53%   확인\n```\n(5) 주식 변동성\n```\n기준일(ET)     Vol   Value   D1       Confirmation\n----------  ----  -----  -------  ------------\n2026-05-19  VIX   18.07  +1.40%   확인\n2026-05-19  VVIX  91.18  -1.89%   프록시(리서치 인용)\n```\n(6) 미 증시 breadth\n- NYSE: 하락 1,906 / 상승 843 (보합 74)\n- Nasdaq: 하락 2,131 / 상승 1,209 (보합 187)\n\n(7) 향후 24~48시간 주요 이벤트 (ET 기준)\n- 05/20(수): FOMC 회의록 공개(4월 회의)\n- 05/21(목): BEA ‘Global Value Chains (TiVA), 2024’(10:00am)\n- BLS(주별): 주/지역 고용·실업 통계 일정(공식 캘린더 기반)\n\n(8) 실행 가능한 핵심 요약\n- (리스크) 금리 상단 재확인 구간 → 기술주/고밸류 압력 재개 가능(변동성 완만한 재상승에 유의).\n- (체크) CTA 프록시 트리거는 이번 रन에선 판정 불가 → 다음 run에서 최소 DBMF/KMLM 가격 시계열 확보 여부부터 복구 필요.\n- (이벤트) FOMC minutes가 금리 변동성을 키울 수 있어 헤드라인 리스크 대비.",
      "summary": {
        "cta": "확인 제한",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction (가격·금리 조합만 근거, 확신도 낮음)",
        "network": "정상/미표기",
        "confirmLimited": 14,
        "proxy": 3,
        "availableRows": 15,
        "totalRows": 23,
        "coveragePct": 65.2
      },
      "dashboard": {
        "groups": [
          {
            "name": "Daily CTA Proxy",
            "sourceType": "official/manual/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 3,
            "rows": [
              "2026-05-20  Barclay BTOP50                   NA          NA       NA         확인 제한",
              "2026-05-20  DBMF ETF                         NA          NA       NA         확인 제한",
              "2026-05-20  KMLM ETF                         NA          NA       NA         확인 제한"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "unavailable",
            "available": 0,
            "total": 5,
            "rows": [
              "2026-05-12  S&P 500 (ES)    NA          NA     NA     NA         ❌        확인 제한",
              "2026-05-12  UST 10Y         NA          NA     NA     NA         ❌        확인 제한",
              "2026-05-12  UST 2Y          NA          NA     NA     NA         ❌        확인 제한",
              "2026-05-12  UST 5Y          NA          NA     NA     NA         ❌        확인 제한",
              "2026-05-12  UST 30Y         NA          NA     NA     NA         ❌        확인 제한"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-05-19  S&P 500     7,353.61   -0.67%   확인",
              "2026-05-19  Nasdaq 100  28,818.84  -0.61%   확인",
              "2026-05-19  Dow         49,363.88  -0.65%   확인",
              "2026-05-19  Russell2K   2,747.07   -1.00%   확인",
              "2026-05-19  STOXX 600   611.34     +0.19%   확인",
              "2026-05-19  Nikkei 225  60,550.59  -0.44%   확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 2,
            "total": 2,
            "rows": [
              "Date(ET)     2Y    5Y    10Y   30Y   Confirmation",
              "2026-05-19  4.13  4.32  4.67  5.18  확인(미 재무부)"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-05-19  DXY     99.26    +0.15%   확인",
              "2026-05-19  EURUSD  1.16     -0.44%   확인",
              "2026-05-19  USDJPY  159.08   +0.19%   확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-05-19  WTI        104.19   -0.18%   확인",
              "2026-05-19  Brent      111.08   -0.91%   확인",
              "2026-05-19  Gold       4,488.30 -1.53%   확인"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-05-19  VIX   18.07  +1.40%   확인"
            ]
          }
        ],
        "sourceStatus": [
          {
            "name": "Yahoo Finance",
            "status": "ok",
            "detail": "HTTP 200 application/json;charset=utf-8"
          },
          {
            "name": "FRED",
            "status": "http_fail",
            "detail": "ReadTimeout: "
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=UTF-8"
          },
          {
            "name": "Stooq",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
          },
          {
            "name": "Alpha Vantage",
            "status": "ok",
            "detail": "HTTP 200 application/json"
          }
        ],
        "recommendations": [
          "SG CTA/BTOP50은 data/cta_proxies.csv에 수동 값이 있으면 네트워크와 무관하게 살아납니다.",
          "COT는 CFTC 공식 주간 데이터라 네트워크 성공 후 캐시 재사용 전략이 가장 현실적입니다."
        ]
      },
      "sections": {
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset / Index                     Value     D1 Δ%   Δ Z-score  Confirmation\n----------  -------------------------------  ----------  -------  ---------  ------------\n2026-05-20  SG CTA Trend Index               NA          NA       NA         확인 제한\n2026-05-20  SG Short-Term Traders Index      NA          NA       NA         확인 제한\n2026-05-20  Barclay BTOP50                   NA          NA       NA         확인 제한\n2026-05-20  DBMF ETF                         NA          NA       NA         확인 제한\n2026-05-20  KMLM ETF                         NA          NA       NA         확인 제한\n```\n- 판정: 유효 데이터 부족 → Trigger 판정 불가(확인 제한)\n- 트리거 기준(프록시): D1≤-1% 또는 |Z|≥1.0, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nReport Date   Asset           Value(Net)  WoW Δ  %      Δ Z-score  Unwind?  Confirmation\n----------  --------------  ----------  -----  -----  ---------  -------  ------------\n2026-05-12  S&P 500 (ES)    NA          NA     NA     NA         ❌        확인 제한\n2026-05-12  USD Index (DX)  NA          NA     NA     NA         ❌        확인 제한\n2026-05-12  UST 10Y         NA          NA     NA     NA         ❌        확인 제한\n2026-05-12  UST 2Y          NA          NA     NA     NA         ❌        확인 제한\n2026-05-12  UST 5Y          NA          NA     NA     NA         ❌        확인 제한\n2026-05-12  UST 30Y         NA          NA     NA     NA         ❌        확인 제한\n```\n- 메모: COT 수치(순포지션/주간 변화/Z)는 CFTC 원천값 직접 조회가 불가해 이번 रन에서는 ‘확인 제한’으로 남김.\n- 참고: CFTC COT는 “화요일 기준 포지션 → 금요일(보통 3:30pm ET) 공개” 구조.",
        "alert": "③ 종합 Alert\n- CTA 시스템 상태: 데이터 공백(시세·COT 직접 확인 불가) → 트리거/언와인드 판정 보류\n- Context\n  - 미국 주식: 3거래일 연속 약세(대형주·기술주 조정) + 변동성 소폭 상승.\n  - 금리: 미 재무부 커브(2Y~30Y) 전구간 상승 레벨(장기금리 상단 재시험).\n  - 유가: 지정학 이슈로 변동성 높은 구간(100달러대 유지).\n- 국면 판단: slow deleveraging / exposure reduction (가격·금리 조합만 근거, 확신도 낮음)",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수\n```\n기준일(ET)     Index        Close       D1       Confirmation\n----------  ----------  ---------  -------  ------------\n2026-05-19  S&P 500     7,353.61   -0.67%   확인\n2026-05-19  Nasdaq 100  28,818.84  -0.61%   확인\n2026-05-19  Dow         49,363.88  -0.65%   확인\n2026-05-19  Russell2K   2,747.07   -1.00%   확인\n2026-05-19  STOXX 600   611.34     +0.19%   확인\n2026-05-19  Nikkei 225  60,550.59  -0.44%   확인\n```\n(2) 금리 (UST Par Yield Curve, %)\n```\nDate(ET)     2Y    5Y    10Y   30Y   Confirmation\n----------  ----  ----  ----  ----  ------------\n2026-05-19  4.13  4.32  4.67  5.18  확인(미 재무부)\n```\n(3) FX\n```\n기준일(ET)     FX      Value     D1       Confirmation\n----------  ------  -------  -------  ------------\n2026-05-19  DXY     99.26    +0.15%   확인\n2026-05-19  EURUSD  1.16     -0.44%   확인\n2026-05-19  USDJPY  159.08   +0.19%   확인\n```\n(4) 원자재\n```\n기준일(ET)     Commodity  Value      D1       Confirmation\n----------  ---------  -------  -------  ------------\n2026-05-19  WTI        104.19   -0.18%   확인\n2026-05-19  Brent      111.08   -0.91%   확인\n2026-05-19  Gold       4,488.30 -1.53%   확인\n```\n(5) 주식 변동성\n```\n기준일(ET)     Vol   Value   D1       Confirmation\n----------  ----  -----  -------  ------------\n2026-05-19  VIX   18.07  +1.40%   확인\n2026-05-19  VVIX  91.18  -1.89%   프록시(리서치 인용)\n```\n(6) 미 증시 breadth\n- NYSE: 하락 1,906 / 상승 843 (보합 74)\n- Nasdaq: 하락 2,131 / 상승 1,209 (보합 187)\n\n(7) 향후 24~48시간 주요 이벤트 (ET 기준)\n- 05/20(수): FOMC 회의록 공개(4월 회의)\n- 05/21(목): BEA ‘Global Value Chains (TiVA), 2024’(10:00am)\n- BLS(주별): 주/지역 고용·실업 통계 일정(공식 캘린더 기반)\n\n(8) 실행 가능한 핵심 요약\n- (리스크) 금리 상단 재확인 구간 → 기술주/고밸류 압력 재개 가능(변동성 완만한 재상승에 유의).\n- (체크) CTA 프록시 트리거는 이번 रन에선 판정 불가 → 다음 run에서 최소 DBMF/KMLM 가격 시계열 확보 여부부터 복구 필요.\n- (이벤트) FOMC minutes가 금리 변동성을 키울 수 있어 헤드라인 리스크 대비."
      },
      "alertBullets": [
        "CTA 시스템 상태: 데이터 공백(시세·COT 직접 확인 불가) → 트리거/언와인드 판정 보류",
        "Context",
        "미국 주식: 3거래일 연속 약세(대형주·기술주 조정) + 변동성 소폭 상승.",
        "금리: 미 재무부 커브(2Y~30Y) 전구간 상승 레벨(장기금리 상단 재시험).",
        "유가: 지정학 이슈로 변동성 높은 구간(100달러대 유지)."
      ]
    },
    {
      "name": "last_report_20260519.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / insufficient data / 확인 제한",
      "date": "2026-05-19",
      "trigger": "확인 제한",
      "regime": "insufficient data / 확인 제한",
      "mtime": "2026-05-19T07:22:32+09:00",
      "size": 6234,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / insufficient data / 확인 제한\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%  D3  D5  Δ Z  Confirm\n----------  ----------------------  -----  -----  --  --  ---  -------\n2026-05-19  SG CTA Trend Index (p…  NA     NA     NA  NA  NA   확인 제한  \n2026-05-19  SG Short-Term Traders…  NA     NA     NA  NA  NA   확인 제한  \n2026-05-19  Barclay BTOP50 (proxy…  NA     NA     NA  NA  NA   확인 제한  \n2026-05-19  DBMF ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-05-19  KMLM ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-05-19  Simplify CTA ETF (pro…  NA     NA     NA  NA  NA   확인 제한  \n```\n메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한\n판정: 유효 데이터 부족 → Trigger 판정 불가\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate  Asset           Value(Net)  WoW Δ  %   Δ Z  Unwind?  Confirm\n----  --------------  ----------  -----  --  ---  -------  -------\nNA    S&P 500 (ES)    NA          NA     NA  NA   ❌        확인 제한  \nNA    USD Index (DX)  NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 10Y         NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 2Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 5Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 30Y         NA          NA     NA  NA   ❌        확인 제한  \n```\n메모: S&P 500 (ES): CFTC COT 접근/매칭 실패(ConnectError: [Errno 8] nodename nor servname provided, or not known) → 확인 제한\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 확인 제한 (기준일: 2026-05-19)\n- 국면 판단: insufficient data / 확인 제한\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 환경 제약: 현재 실행 환경에서 외부 네트워크/DNS 접근이 제한되어 실시간 확인이 대폭 제한됨\n- 데이터 메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한 / SG Short-Term Traders Index (proxy: DBMF): 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)) → 확인 제한\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-05-19  S&P 500             NA     NA  NA  확인 제한  \n2026-05-19  Nasdaq 100          NA     NA  NA  확인 제한  \n2026-05-19  Dow                 NA     NA  NA  확인 제한  \n2026-05-19  Russell 2000        NA     NA  NA  확인 제한  \n2026-05-19  STOXX 600 (proxy:…  NA     NA  NA  확인 제한  \n2026-05-19  Nikkei 225          NA     NA  NA  확인 제한  \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1  Confirm\n----------  -------  -----  --  -------\n2026-05-19  UST 2Y   NA     NA  확인 제한  \n2026-05-19  UST 5Y   NA     NA  확인 제한  \n2026-05-19  UST 10Y  NA     NA  확인 제한  \n2026-05-19  UST 30Y  NA     NA  확인 제한  \n```\n(금리) FRED 접근 실패: FRED fredgraph.csv (public): curl rc=6: curl: (6) Could not resolve host: fred.stlouisfed.org\n\n(3) FX (프록시)\n```\n기준일         FX                  Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-05-19  DXY (proxy: DTWEX…  NA     NA  NA  확인 제한  \n2026-05-19  EURUSD              NA     NA  NA  확인 제한  \n2026-05-19  USDJPY              NA     NA  NA  확인 제한  \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity  Value  D1  D3  Confirm\n----------  ---------  -----  --  --  -------\n2026-05-19  WTI        NA     NA  NA  확인 제한  \n2026-05-19  Brent      NA     NA  NA  확인 제한  \n2026-05-19  Gold       NA     NA  NA  확인 제한  \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol                 Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-05-19  VIX                 NA     NA  NA  확인 제한  \n2026-05-19  VVIX (proxy: VVIX)  NA     NA  NA  확인 제한  \n```\n메모: S&P 500: 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=ConnectError: [Errno 8] nodename nor servname provided, or not known)\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n네트워크/DNS 진단:\n- query1.finance.yahoo.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- stooq.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- www.cftc.gov: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 확인 제한 (기준일: 2026-05-19)",
        "regime": "- 국면 판단: insufficient data / 확인 제한",
        "network": "확인 제한",
        "confirmLimited": 42,
        "proxy": 10,
        "availableRows": 0,
        "totalRows": 27,
        "coveragePct": 0.0
      },
      "dashboard": {
        "groups": [
          {
            "name": "Daily CTA Proxy",
            "sourceType": "official/manual/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 5,
            "rows": [
              "2026-05-19  SG Short-Term Traders…  NA     NA     NA  NA  NA   확인 제한",
              "2026-05-19  Barclay BTOP50 (proxy…  NA     NA     NA  NA  NA   확인 제한",
              "2026-05-19  DBMF ETF                NA     NA     NA  NA  NA   확인 제한",
              "2026-05-19  KMLM ETF                NA     NA     NA  NA  NA   확인 제한",
              "2026-05-19  Simplify CTA ETF (pro…  NA     NA     NA  NA  NA   확인 제한"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "unavailable",
            "available": 0,
            "total": 5,
            "rows": [
              "NA    S&P 500 (ES)    NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 10Y         NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 2Y          NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 5Y          NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 30Y         NA          NA     NA  NA   ❌        확인 제한"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "unavailable",
            "available": 0,
            "total": 6,
            "rows": [
              "2026-05-19  S&P 500             NA     NA  NA  확인 제한",
              "2026-05-19  Nasdaq 100          NA     NA  NA  확인 제한",
              "2026-05-19  Dow                 NA     NA  NA  확인 제한",
              "2026-05-19  Russell 2000        NA     NA  NA  확인 제한",
              "2026-05-19  STOXX 600 (proxy:…  NA     NA  NA  확인 제한",
              "2026-05-19  Nikkei 225          NA     NA  NA  확인 제한"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "unavailable",
            "available": 0,
            "total": 4,
            "rows": [
              "2026-05-19  UST 2Y   NA     NA  확인 제한",
              "2026-05-19  UST 5Y   NA     NA  확인 제한",
              "2026-05-19  UST 10Y  NA     NA  확인 제한",
              "2026-05-19  UST 30Y  NA     NA  확인 제한"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 3,
            "rows": [
              "2026-05-19  DXY (proxy: DTWEX…  NA     NA  NA  확인 제한",
              "2026-05-19  EURUSD              NA     NA  NA  확인 제한",
              "2026-05-19  USDJPY              NA     NA  NA  확인 제한"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 3,
            "rows": [
              "2026-05-19  WTI        NA     NA  NA  확인 제한",
              "2026-05-19  Brent      NA     NA  NA  확인 제한",
              "2026-05-19  Gold       NA     NA  NA  확인 제한"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 1,
            "rows": [
              "2026-05-19  VIX                 NA     NA  NA  확인 제한"
            ]
          }
        ],
        "sourceStatus": [
          {
            "name": "Yahoo Finance",
            "status": "ok",
            "detail": "HTTP 200 application/json;charset=utf-8"
          },
          {
            "name": "FRED",
            "status": "http_fail",
            "detail": "ReadTimeout: "
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=UTF-8"
          },
          {
            "name": "Stooq",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
          },
          {
            "name": "Alpha Vantage",
            "status": "ok",
            "detail": "HTTP 200 application/json"
          }
        ],
        "recommendations": [
          "SG CTA/BTOP50은 data/cta_proxies.csv에 수동 값이 있으면 네트워크와 무관하게 살아납니다.",
          "COT는 CFTC 공식 주간 데이터라 네트워크 성공 후 캐시 재사용 전략이 가장 현실적입니다."
        ]
      },
      "sections": {
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%  D3  D5  Δ Z  Confirm\n----------  ----------------------  -----  -----  --  --  ---  -------\n2026-05-19  SG CTA Trend Index (p…  NA     NA     NA  NA  NA   확인 제한  \n2026-05-19  SG Short-Term Traders…  NA     NA     NA  NA  NA   확인 제한  \n2026-05-19  Barclay BTOP50 (proxy…  NA     NA     NA  NA  NA   확인 제한  \n2026-05-19  DBMF ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-05-19  KMLM ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-05-19  Simplify CTA ETF (pro…  NA     NA     NA  NA  NA   확인 제한  \n```\n메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한\n판정: 유효 데이터 부족 → Trigger 판정 불가\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate  Asset           Value(Net)  WoW Δ  %   Δ Z  Unwind?  Confirm\n----  --------------  ----------  -----  --  ---  -------  -------\nNA    S&P 500 (ES)    NA          NA     NA  NA   ❌        확인 제한  \nNA    USD Index (DX)  NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 10Y         NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 2Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 5Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 30Y         NA          NA     NA  NA   ❌        확인 제한  \n```\n메모: S&P 500 (ES): CFTC COT 접근/매칭 실패(ConnectError: [Errno 8] nodename nor servname provided, or not known) → 확인 제한\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 확인 제한 (기준일: 2026-05-19)\n- 국면 판단: insufficient data / 확인 제한\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 환경 제약: 현재 실행 환경에서 외부 네트워크/DNS 접근이 제한되어 실시간 확인이 대폭 제한됨\n- 데이터 메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한 / SG Short-Term Traders Index (proxy: DBMF): 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)) → 확인 제한",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-05-19  S&P 500             NA     NA  NA  확인 제한  \n2026-05-19  Nasdaq 100          NA     NA  NA  확인 제한  \n2026-05-19  Dow                 NA     NA  NA  확인 제한  \n2026-05-19  Russell 2000        NA     NA  NA  확인 제한  \n2026-05-19  STOXX 600 (proxy:…  NA     NA  NA  확인 제한  \n2026-05-19  Nikkei 225          NA     NA  NA  확인 제한  \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1  Confirm\n----------  -------  -----  --  -------\n2026-05-19  UST 2Y   NA     NA  확인 제한  \n2026-05-19  UST 5Y   NA     NA  확인 제한  \n2026-05-19  UST 10Y  NA     NA  확인 제한  \n2026-05-19  UST 30Y  NA     NA  확인 제한  \n```\n(금리) FRED 접근 실패: FRED fredgraph.csv (public): curl rc=6: curl: (6) Could not resolve host: fred.stlouisfed.org\n\n(3) FX (프록시)\n```\n기준일         FX                  Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-05-19  DXY (proxy: DTWEX…  NA     NA  NA  확인 제한  \n2026-05-19  EURUSD              NA     NA  NA  확인 제한  \n2026-05-19  USDJPY              NA     NA  NA  확인 제한  \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity  Value  D1  D3  Confirm\n----------  ---------  -----  --  --  -------\n2026-05-19  WTI        NA     NA  NA  확인 제한  \n2026-05-19  Brent      NA     NA  NA  확인 제한  \n2026-05-19  Gold       NA     NA  NA  확인 제한  \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol                 Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-05-19  VIX                 NA     NA  NA  확인 제한  \n2026-05-19  VVIX (proxy: VVIX)  NA     NA  NA  확인 제한  \n```\n메모: S&P 500: 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=ConnectError: [Errno 8] nodename nor servname provided, or not known)\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n네트워크/DNS 진단:\n- query1.finance.yahoo.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- stooq.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- www.cftc.gov: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 확인 제한 (기준일: 2026-05-19)",
        "국면 판단: insufficient data / 확인 제한",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "환경 제약: 현재 실행 환경에서 외부 네트워크/DNS 접근이 제한되어 실시간 확인이 대폭 제한됨",
        "데이터 메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한 / SG Short-Term Traders Index (proxy: DBMF): 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)) → 확인 제한"
      ]
    },
    {
      "name": "last_report_20260518.txt",
      "title": "Attempt 1 at connecting failed: PermissionError: [Errno 1] Operation not permitted",
      "date": "2026-05-18",
      "trigger": "모니터링",
      "regime": "insufficient data / 확인 제한",
      "mtime": "2026-05-18T07:23:08+09:00",
      "size": 6864,
      "body": "Attempt 1 at connecting failed: PermissionError: [Errno 1] Operation not permitted\nAttempt 2 at connecting failed: PermissionError: [Errno 1] Operation not permitted\nCTA 포지셔닝 모니터 — Proxy Trigger 확인 제한 / insufficient data / 확인 제한\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%  D3  D5  Δ Z  Confirm\n----------  ----------------------  -----  -----  --  --  ---  -------\n2026-05-18  SG CTA Trend Index (p…  NA     NA     NA  NA  NA   확인 제한  \n2026-05-18  SG Short-Term Traders…  NA     NA     NA  NA  NA   확인 제한  \n2026-05-18  Barclay BTOP50 (proxy…  NA     NA     NA  NA  NA   확인 제한  \n2026-05-18  DBMF ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-05-18  KMLM ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-05-18  Simplify CTA ETF (pro…  NA     NA     NA  NA  NA   확인 제한  \n```\n메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한\n판정: 유효 데이터 부족 → Trigger 판정 불가\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate  Asset           Value(Net)  WoW Δ  %   Δ Z  Unwind?  Confirm\n----  --------------  ----------  -----  --  ---  -------  -------\nNA    S&P 500 (ES)    NA          NA     NA  NA   ❌        확인 제한  \nNA    USD Index (DX)  NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 10Y         NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 2Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 5Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 30Y         NA          NA     NA  NA   ❌        확인 제한  \n```\n메모: S&P 500 (ES): CFTC COT 접근/매칭 실패(ConnectError: [Errno 8] nodename nor servname provided, or not known) → 확인 제한\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 확인 제한 (기준일: 2026-05-18)\n- 국면 판단: insufficient data / 확인 제한\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 환경 제약: 현재 실행 환경에서 외부 네트워크/DNS 접근이 제한되어 실시간 확인이 대폭 제한됨\n- 데이터 메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한 / SG Short-Term Traders Index (proxy: DBMF): 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)) → 확인 제한\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-05-18  S&P 500             NA     NA  NA  확인 제한  \n2026-05-18  Nasdaq 100          NA     NA  NA  확인 제한  \n2026-05-18  Dow                 NA     NA  NA  확인 제한  \n2026-05-18  Russell 2000        NA     NA  NA  확인 제한  \n2026-05-18  STOXX 600 (proxy:…  NA     NA  NA  확인 제한  \n2026-05-18  Nikkei 225          NA     NA  NA  확인 제한  \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1  Confirm\n----------  -------  -----  --  -------\n2026-05-18  UST 2Y   NA     NA  확인 제한  \n2026-05-18  UST 5Y   NA     NA  확인 제한  \n2026-05-18  UST 10Y  NA     NA  확인 제한  \n2026-05-18  UST 30Y  NA     NA  확인 제한  \n```\n(금리) FRED 접근 실패: FRED fredgraph.csv (public): curl rc=6: curl: (6) Could not resolve host: fred.stlouisfed.org\n\n(3) FX (프록시)\n```\n기준일         FX                  Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-05-18  DXY (proxy: DTWEX…  NA     NA  NA  확인 제한  \n2026-05-18  EURUSD              NA     NA  NA  확인 제한  \n2026-05-18  USDJPY              NA     NA  NA  확인 제한  \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity  Value  D1  D3  Confirm\n----------  ---------  -----  --  --  -------\n2026-05-18  WTI        NA     NA  NA  확인 제한  \n2026-05-18  Brent      NA     NA  NA  확인 제한  \n2026-05-18  Gold       NA     NA  NA  확인 제한  \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol                 Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-05-18  VIX                 NA     NA  NA  확인 제한  \n2026-05-18  VVIX (proxy: VVIX)  NA     NA  NA  확인 제한  \n```\n메모: S&P 500: 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=ConnectError: [Errno 8] nodename nor servname provided, or not known)\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n네트워크/DNS 진단:\n- query1.finance.yahoo.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- stooq.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- www.cftc.gov: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.\n\n[TELEGRAM] 전송 실패로 출력으로 대체했습니다.\n[ERROR] Connection to Telegram failed 1 time(s)\n[HINT] 현재 실행 환경에서 네트워크/소켓 권한이 차단된 것으로 보입니다. (서버/로컬 cron에서 실행 권장)\n[HINT] target=제이팍 저장소\n[HINT] session=/Users/jaycom/.openclaw/workspace/telegram_session.session (존재=True)\n[HINT] credentials=/Users/jaycom/.openclaw/workspace/telegram_credentials.json (존재=True)",
      "summary": {
        "cta": "- CTA 프록시 트리거: 확인 제한 (기준일: 2026-05-18)",
        "regime": "- 국면 판단: insufficient data / 확인 제한",
        "network": "확인 제한",
        "confirmLimited": 42,
        "proxy": 10,
        "availableRows": 0,
        "totalRows": 27,
        "coveragePct": 0.0
      },
      "dashboard": {
        "groups": [
          {
            "name": "Daily CTA Proxy",
            "sourceType": "official/manual/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 5,
            "rows": [
              "2026-05-18  SG Short-Term Traders…  NA     NA     NA  NA  NA   확인 제한",
              "2026-05-18  Barclay BTOP50 (proxy…  NA     NA     NA  NA  NA   확인 제한",
              "2026-05-18  DBMF ETF                NA     NA     NA  NA  NA   확인 제한",
              "2026-05-18  KMLM ETF                NA     NA     NA  NA  NA   확인 제한",
              "2026-05-18  Simplify CTA ETF (pro…  NA     NA     NA  NA  NA   확인 제한"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "unavailable",
            "available": 0,
            "total": 5,
            "rows": [
              "NA    S&P 500 (ES)    NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 10Y         NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 2Y          NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 5Y          NA          NA     NA  NA   ❌        확인 제한",
              "NA    UST 30Y         NA          NA     NA  NA   ❌        확인 제한"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "unavailable",
            "available": 0,
            "total": 6,
            "rows": [
              "2026-05-18  S&P 500             NA     NA  NA  확인 제한",
              "2026-05-18  Nasdaq 100          NA     NA  NA  확인 제한",
              "2026-05-18  Dow                 NA     NA  NA  확인 제한",
              "2026-05-18  Russell 2000        NA     NA  NA  확인 제한",
              "2026-05-18  STOXX 600 (proxy:…  NA     NA  NA  확인 제한",
              "2026-05-18  Nikkei 225          NA     NA  NA  확인 제한"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "unavailable",
            "available": 0,
            "total": 4,
            "rows": [
              "2026-05-18  UST 2Y   NA     NA  확인 제한",
              "2026-05-18  UST 5Y   NA     NA  확인 제한",
              "2026-05-18  UST 10Y  NA     NA  확인 제한",
              "2026-05-18  UST 30Y  NA     NA  확인 제한"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 3,
            "rows": [
              "2026-05-18  DXY (proxy: DTWEX…  NA     NA  NA  확인 제한",
              "2026-05-18  EURUSD              NA     NA  NA  확인 제한",
              "2026-05-18  USDJPY              NA     NA  NA  확인 제한"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 3,
            "rows": [
              "2026-05-18  WTI        NA     NA  NA  확인 제한",
              "2026-05-18  Brent      NA     NA  NA  확인 제한",
              "2026-05-18  Gold       NA     NA  NA  확인 제한"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "unavailable",
            "available": 0,
            "total": 1,
            "rows": [
              "2026-05-18  VIX                 NA     NA  NA  확인 제한"
            ]
          }
        ],
        "sourceStatus": [
          {
            "name": "Yahoo Finance",
            "status": "ok",
            "detail": "HTTP 200 application/json;charset=utf-8"
          },
          {
            "name": "FRED",
            "status": "http_fail",
            "detail": "ReadTimeout: "
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=UTF-8"
          },
          {
            "name": "Stooq",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
          },
          {
            "name": "Alpha Vantage",
            "status": "ok",
            "detail": "HTTP 200 application/json"
          }
        ],
        "recommendations": [
          "SG CTA/BTOP50은 data/cta_proxies.csv에 수동 값이 있으면 네트워크와 무관하게 살아납니다.",
          "COT는 CFTC 공식 주간 데이터라 네트워크 성공 후 캐시 재사용 전략이 가장 현실적입니다."
        ]
      },
      "sections": {
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%  D3  D5  Δ Z  Confirm\n----------  ----------------------  -----  -----  --  --  ---  -------\n2026-05-18  SG CTA Trend Index (p…  NA     NA     NA  NA  NA   확인 제한  \n2026-05-18  SG Short-Term Traders…  NA     NA     NA  NA  NA   확인 제한  \n2026-05-18  Barclay BTOP50 (proxy…  NA     NA     NA  NA  NA   확인 제한  \n2026-05-18  DBMF ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-05-18  KMLM ETF                NA     NA     NA  NA  NA   확인 제한  \n2026-05-18  Simplify CTA ETF (pro…  NA     NA     NA  NA  NA   확인 제한  \n```\n메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한\n판정: 유효 데이터 부족 → Trigger 판정 불가\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate  Asset           Value(Net)  WoW Δ  %   Δ Z  Unwind?  Confirm\n----  --------------  ----------  -----  --  ---  -------  -------\nNA    S&P 500 (ES)    NA          NA     NA  NA   ❌        확인 제한  \nNA    USD Index (DX)  NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 10Y         NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 2Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 5Y          NA          NA     NA  NA   ❌        확인 제한  \nNA    UST 30Y         NA          NA     NA  NA   ❌        확인 제한  \n```\n메모: S&P 500 (ES): CFTC COT 접근/매칭 실패(ConnectError: [Errno 8] nodename nor servname provided, or not known) → 확인 제한\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 확인 제한 (기준일: 2026-05-18)\n- 국면 판단: insufficient data / 확인 제한\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 환경 제약: 현재 실행 환경에서 외부 네트워크/DNS 접근이 제한되어 실시간 확인이 대폭 제한됨\n- 데이터 메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한 / SG Short-Term Traders Index (proxy: DBMF): 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)) → 확인 제한",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-05-18  S&P 500             NA     NA  NA  확인 제한  \n2026-05-18  Nasdaq 100          NA     NA  NA  확인 제한  \n2026-05-18  Dow                 NA     NA  NA  확인 제한  \n2026-05-18  Russell 2000        NA     NA  NA  확인 제한  \n2026-05-18  STOXX 600 (proxy:…  NA     NA  NA  확인 제한  \n2026-05-18  Nikkei 225          NA     NA  NA  확인 제한  \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1  Confirm\n----------  -------  -----  --  -------\n2026-05-18  UST 2Y   NA     NA  확인 제한  \n2026-05-18  UST 5Y   NA     NA  확인 제한  \n2026-05-18  UST 10Y  NA     NA  확인 제한  \n2026-05-18  UST 30Y  NA     NA  확인 제한  \n```\n(금리) FRED 접근 실패: FRED fredgraph.csv (public): curl rc=6: curl: (6) Could not resolve host: fred.stlouisfed.org\n\n(3) FX (프록시)\n```\n기준일         FX                  Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-05-18  DXY (proxy: DTWEX…  NA     NA  NA  확인 제한  \n2026-05-18  EURUSD              NA     NA  NA  확인 제한  \n2026-05-18  USDJPY              NA     NA  NA  확인 제한  \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity  Value  D1  D3  Confirm\n----------  ---------  -----  --  --  -------\n2026-05-18  WTI        NA     NA  NA  확인 제한  \n2026-05-18  Brent      NA     NA  NA  확인 제한  \n2026-05-18  Gold       NA     NA  NA  확인 제한  \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol                 Value  D1  D3  Confirm\n----------  ------------------  -----  --  --  -------\n2026-05-18  VIX                 NA     NA  NA  확인 제한  \n2026-05-18  VVIX (proxy: VVIX)  NA     NA  NA  확인 제한  \n```\n메모: S&P 500: 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=ConnectError: [Errno 8] nodename nor servname provided, or not known)\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n네트워크/DNS 진단:\n- query1.finance.yahoo.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- stooq.com: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n- www.cftc.gov: FAIL (gaierror: [Errno 8] nodename nor servname provided, or not known)\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.\n\n[TELEGRAM] 전송 실패로 출력으로 대체했습니다.\n[ERROR] Connection to Telegram failed 1 time(s)\n[HINT] 현재 실행 환경에서 네트워크/소켓 권한이 차단된 것으로 보입니다. (서버/로컬 cron에서 실행 권장)\n[HINT] target=제이팍 저장소\n[HINT] session=/Users/jaycom/.openclaw/workspace/telegram_session.session (존재=True)\n[HINT] credentials=/Users/jaycom/.openclaw/workspace/telegram_credentials.json (존재=True)"
      },
      "alertBullets": [
        "CTA 프록시 트리거: 확인 제한 (기준일: 2026-05-18)",
        "국면 판단: insufficient data / 확인 제한",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "환경 제약: 현재 실행 환경에서 외부 네트워크/DNS 접근이 제한되어 실시간 확인이 대폭 제한됨",
        "데이터 메모: SG CTA Trend Index (proxy: DBMF/KMLM/CTA): 구성 시계열 부족(실패=DBMF(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); KMLM(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)); CTA(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha))) → 확인 제한 / SG Short-Term Traders Index (proxy: DBMF): 시세 접근 실패(yahoo=ConnectError: [Errno 8] nodename nor servname provided, or not known; stooq=blocked (requires apikey/captcha)) → 확인 제한"
      ]
    }
  ]
};
