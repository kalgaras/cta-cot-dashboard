window.CTA_DASHBOARD_DATA = {
  "generatedAt": "2026-08-23T06:53:52+09:00",
  "latest": {
    "name": "last_report_latest.txt",
    "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
    "date": "2026-08-23",
    "trigger": "재차 발생",
    "regime": "slow deleveraging / exposure reduction",
    "mtime": "2026-08-23T06:53:52+09:00",
    "size": 4700,
    "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-21  SG CTA Trend Index (p…  100.99  +0.43%  +0.83%  +1.91%  0.40  프록시    \n2026-08-21  SG Short-Term Traders…  31.37   +0.67%  +0.32%  +0.06%  1.05  프록시    \n2026-08-21  Barclay BTOP50 (proxy…  104.13  +0.53%  +0.14%  +0.39%  0.68  프록시    \n2026-08-21  DBMF ETF                31.37   +0.67%  +0.32%  +0.06%  1.05  프록시    \n2026-08-21  KMLM ETF                29.35   +0.38%  -0.03%  +0.72%  0.35  프록시    \n2026-08-21  Simplify CTA ETF (pro…  28.55   +0.25%  +2.22%  +5.00%  0.16  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-08-18  S&P 500 (ES)    5,949       -156,657  -96.3%     -0.67  ❌        확인     \n2026-08-18  USD Index (DX)  8,112       +2,340    +40.5%     +0.56  ❌        확인     \n2026-08-18  UST 10Y         -127,128    -128,348  -10520.3%  -1.17  부분 ✔     확인     \n2026-08-18  UST 2Y          87,195      +8,289    +10.5%     +0.46  ❌        확인     \n2026-08-18  UST 5Y          -13,295     +8,142    +38.0%     +1.09  ❌        확인     \n2026-08-18  UST 30Y         -353,477    +507,880  +59.0%     +1.16  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-23)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-21  S&P 500             7674.37   +0.43%  -0.23%  확인     \n2026-08-21  Nasdaq 100          29308.86  +0.33%  -0.62%  확인     \n2026-08-21  Dow                 53277.01  +0.98%  -0.12%  확인     \n2026-08-21  Russell 2000        299.96    +0.77%  -0.09%  프록시    \n2026-08-21  STOXX 600 (proxy:…  92.72     +0.77%  +1.28%  프록시    \n2026-08-21  Nikkei 225          66016.36  -0.30%  -2.14%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-20  UST 2Y   4.19%  +0.0bp  확인     \n2026-08-20  UST 5Y   4.39%  +4.0bp  확인     \n2026-08-20  UST 10Y  4.69%  +4.0bp  확인     \n2026-08-20  UST 30Y  5.23%  +4.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-18  WTI                86.48   +0.51%  +4.48%  확인     \n2026-08-18  Brent              95.29   +3.09%  +3.54%  확인     \n2026-08-21  Gold (proxy: GLD)  423.36  +1.95%  +6.23%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-20  VIX  16.01  +7.52%  +5.40%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
    "summary": {
      "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-23)",
      "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
            "2026-08-21  SG Short-Term Traders…  31.37   +0.67%  +0.32%  +0.06%  1.05  프록시",
            "2026-08-21  Barclay BTOP50 (proxy…  104.13  +0.53%  +0.14%  +0.39%  0.68  프록시",
            "2026-08-21  DBMF ETF                31.37   +0.67%  +0.32%  +0.06%  1.05  프록시",
            "2026-08-21  KMLM ETF                29.35   +0.38%  -0.03%  +0.72%  0.35  프록시",
            "2026-08-21  Simplify CTA ETF (pro…  28.55   +0.25%  +2.22%  +5.00%  0.16  프록시"
          ]
        },
        {
          "name": "Weekly COT",
          "sourceType": "official/CFTC",
          "status": "ok",
          "available": 5,
          "total": 5,
          "rows": [
            "2026-08-18  S&P 500 (ES)    5,949       -156,657  -96.3%     -0.67  ❌        확인",
            "2026-08-18  UST 10Y         -127,128    -128,348  -10520.3%  -1.17  부분 ✔     확인",
            "2026-08-18  UST 2Y          87,195      +8,289    +10.5%     +0.46  ❌        확인",
            "2026-08-18  UST 5Y          -13,295     +8,142    +38.0%     +1.09  ❌        확인",
            "2026-08-18  UST 30Y         -353,477    +507,880  +59.0%     +1.16  ❌        확인"
          ]
        },
        {
          "name": "Overnight Index",
          "sourceType": "proxy quotes",
          "status": "ok",
          "available": 6,
          "total": 6,
          "rows": [
            "2026-08-21  S&P 500             7674.37   +0.43%  -0.23%  확인",
            "2026-08-21  Nasdaq 100          29308.86  +0.33%  -0.62%  확인",
            "2026-08-21  Dow                 53277.01  +0.98%  -0.12%  확인",
            "2026-08-21  Russell 2000        299.96    +0.77%  -0.09%  프록시",
            "2026-08-21  STOXX 600 (proxy:…  92.72     +0.77%  +1.28%  프록시",
            "2026-08-21  Nikkei 225          66016.36  -0.30%  -2.14%  확인"
          ]
        },
        {
          "name": "UST Rates",
          "sourceType": "official/FRED",
          "status": "ok",
          "available": 4,
          "total": 4,
          "rows": [
            "2026-08-20  UST 2Y   4.19%  +0.0bp  확인",
            "2026-08-20  UST 5Y   4.39%  +4.0bp  확인",
            "2026-08-20  UST 10Y  4.69%  +4.0bp  확인",
            "2026-08-20  UST 30Y  5.23%  +4.0bp  확인"
          ]
        },
        {
          "name": "FX",
          "sourceType": "official/proxy",
          "status": "ok",
          "available": 3,
          "total": 3,
          "rows": [
            "2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인",
            "2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인",
            "2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인"
          ]
        },
        {
          "name": "Commodities",
          "sourceType": "official/proxy",
          "status": "ok",
          "available": 3,
          "total": 3,
          "rows": [
            "2026-08-18  WTI                86.48   +0.51%  +4.48%  확인",
            "2026-08-18  Brent              95.29   +3.09%  +3.54%  확인",
            "2026-08-21  Gold (proxy: GLD)  423.36  +1.95%  +6.23%  프록시"
          ]
        },
        {
          "name": "Volatility",
          "sourceType": "official/proxy",
          "status": "ok",
          "available": 1,
          "total": 1,
          "rows": [
            "2026-08-20  VIX  16.01  +7.52%  +5.40%  확인"
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
          "status": "ok",
          "detail": "HTTP 200 application/json; charset=UTF-8"
        },
        {
          "name": "CFTC",
          "status": "ok",
          "detail": "HTTP 200 text/html; charset=utf-8"
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
      "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-21  SG CTA Trend Index (p…  100.99  +0.43%  +0.83%  +1.91%  0.40  프록시    \n2026-08-21  SG Short-Term Traders…  31.37   +0.67%  +0.32%  +0.06%  1.05  프록시    \n2026-08-21  Barclay BTOP50 (proxy…  104.13  +0.53%  +0.14%  +0.39%  0.68  프록시    \n2026-08-21  DBMF ETF                31.37   +0.67%  +0.32%  +0.06%  1.05  프록시    \n2026-08-21  KMLM ETF                29.35   +0.38%  -0.03%  +0.72%  0.35  프록시    \n2026-08-21  Simplify CTA ETF (pro…  28.55   +0.25%  +2.22%  +5.00%  0.16  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
      "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-08-18  S&P 500 (ES)    5,949       -156,657  -96.3%     -0.67  ❌        확인     \n2026-08-18  USD Index (DX)  8,112       +2,340    +40.5%     +0.56  ❌        확인     \n2026-08-18  UST 10Y         -127,128    -128,348  -10520.3%  -1.17  부분 ✔     확인     \n2026-08-18  UST 2Y          87,195      +8,289    +10.5%     +0.46  ❌        확인     \n2026-08-18  UST 5Y          -13,295     +8,142    +38.0%     +1.09  ❌        확인     \n2026-08-18  UST 30Y         -353,477    +507,880  +59.0%     +1.16  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
      "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-23)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
      "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-21  S&P 500             7674.37   +0.43%  -0.23%  확인     \n2026-08-21  Nasdaq 100          29308.86  +0.33%  -0.62%  확인     \n2026-08-21  Dow                 53277.01  +0.98%  -0.12%  확인     \n2026-08-21  Russell 2000        299.96    +0.77%  -0.09%  프록시    \n2026-08-21  STOXX 600 (proxy:…  92.72     +0.77%  +1.28%  프록시    \n2026-08-21  Nikkei 225          66016.36  -0.30%  -2.14%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-20  UST 2Y   4.19%  +0.0bp  확인     \n2026-08-20  UST 5Y   4.39%  +4.0bp  확인     \n2026-08-20  UST 10Y  4.69%  +4.0bp  확인     \n2026-08-20  UST 30Y  5.23%  +4.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-18  WTI                86.48   +0.51%  +4.48%  확인     \n2026-08-18  Brent              95.29   +3.09%  +3.54%  확인     \n2026-08-21  Gold (proxy: GLD)  423.36  +1.95%  +6.23%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-20  VIX  16.01  +7.52%  +5.40%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
    },
    "alertBullets": [
      "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-23)",
      "국면 판단: slow deleveraging / exposure reduction",
      "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
      "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
    ]
  },
  "reports": [
    {
      "name": "last_report_latest.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-23",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-23T06:53:52+09:00",
      "size": 4700,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-21  SG CTA Trend Index (p…  100.99  +0.43%  +0.83%  +1.91%  0.40  프록시    \n2026-08-21  SG Short-Term Traders…  31.37   +0.67%  +0.32%  +0.06%  1.05  프록시    \n2026-08-21  Barclay BTOP50 (proxy…  104.13  +0.53%  +0.14%  +0.39%  0.68  프록시    \n2026-08-21  DBMF ETF                31.37   +0.67%  +0.32%  +0.06%  1.05  프록시    \n2026-08-21  KMLM ETF                29.35   +0.38%  -0.03%  +0.72%  0.35  프록시    \n2026-08-21  Simplify CTA ETF (pro…  28.55   +0.25%  +2.22%  +5.00%  0.16  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-08-18  S&P 500 (ES)    5,949       -156,657  -96.3%     -0.67  ❌        확인     \n2026-08-18  USD Index (DX)  8,112       +2,340    +40.5%     +0.56  ❌        확인     \n2026-08-18  UST 10Y         -127,128    -128,348  -10520.3%  -1.17  부분 ✔     확인     \n2026-08-18  UST 2Y          87,195      +8,289    +10.5%     +0.46  ❌        확인     \n2026-08-18  UST 5Y          -13,295     +8,142    +38.0%     +1.09  ❌        확인     \n2026-08-18  UST 30Y         -353,477    +507,880  +59.0%     +1.16  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-23)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-21  S&P 500             7674.37   +0.43%  -0.23%  확인     \n2026-08-21  Nasdaq 100          29308.86  +0.33%  -0.62%  확인     \n2026-08-21  Dow                 53277.01  +0.98%  -0.12%  확인     \n2026-08-21  Russell 2000        299.96    +0.77%  -0.09%  프록시    \n2026-08-21  STOXX 600 (proxy:…  92.72     +0.77%  +1.28%  프록시    \n2026-08-21  Nikkei 225          66016.36  -0.30%  -2.14%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-20  UST 2Y   4.19%  +0.0bp  확인     \n2026-08-20  UST 5Y   4.39%  +4.0bp  확인     \n2026-08-20  UST 10Y  4.69%  +4.0bp  확인     \n2026-08-20  UST 30Y  5.23%  +4.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-18  WTI                86.48   +0.51%  +4.48%  확인     \n2026-08-18  Brent              95.29   +3.09%  +3.54%  확인     \n2026-08-21  Gold (proxy: GLD)  423.36  +1.95%  +6.23%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-20  VIX  16.01  +7.52%  +5.40%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-23)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-21  SG Short-Term Traders…  31.37   +0.67%  +0.32%  +0.06%  1.05  프록시",
              "2026-08-21  Barclay BTOP50 (proxy…  104.13  +0.53%  +0.14%  +0.39%  0.68  프록시",
              "2026-08-21  DBMF ETF                31.37   +0.67%  +0.32%  +0.06%  1.05  프록시",
              "2026-08-21  KMLM ETF                29.35   +0.38%  -0.03%  +0.72%  0.35  프록시",
              "2026-08-21  Simplify CTA ETF (pro…  28.55   +0.25%  +2.22%  +5.00%  0.16  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-18  S&P 500 (ES)    5,949       -156,657  -96.3%     -0.67  ❌        확인",
              "2026-08-18  UST 10Y         -127,128    -128,348  -10520.3%  -1.17  부분 ✔     확인",
              "2026-08-18  UST 2Y          87,195      +8,289    +10.5%     +0.46  ❌        확인",
              "2026-08-18  UST 5Y          -13,295     +8,142    +38.0%     +1.09  ❌        확인",
              "2026-08-18  UST 30Y         -353,477    +507,880  +59.0%     +1.16  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-21  S&P 500             7674.37   +0.43%  -0.23%  확인",
              "2026-08-21  Nasdaq 100          29308.86  +0.33%  -0.62%  확인",
              "2026-08-21  Dow                 53277.01  +0.98%  -0.12%  확인",
              "2026-08-21  Russell 2000        299.96    +0.77%  -0.09%  프록시",
              "2026-08-21  STOXX 600 (proxy:…  92.72     +0.77%  +1.28%  프록시",
              "2026-08-21  Nikkei 225          66016.36  -0.30%  -2.14%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-20  UST 2Y   4.19%  +0.0bp  확인",
              "2026-08-20  UST 5Y   4.39%  +4.0bp  확인",
              "2026-08-20  UST 10Y  4.69%  +4.0bp  확인",
              "2026-08-20  UST 30Y  5.23%  +4.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인",
              "2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인",
              "2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-18  WTI                86.48   +0.51%  +4.48%  확인",
              "2026-08-18  Brent              95.29   +3.09%  +3.54%  확인",
              "2026-08-21  Gold (proxy: GLD)  423.36  +1.95%  +6.23%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-20  VIX  16.01  +7.52%  +5.40%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-21  SG CTA Trend Index (p…  100.99  +0.43%  +0.83%  +1.91%  0.40  프록시    \n2026-08-21  SG Short-Term Traders…  31.37   +0.67%  +0.32%  +0.06%  1.05  프록시    \n2026-08-21  Barclay BTOP50 (proxy…  104.13  +0.53%  +0.14%  +0.39%  0.68  프록시    \n2026-08-21  DBMF ETF                31.37   +0.67%  +0.32%  +0.06%  1.05  프록시    \n2026-08-21  KMLM ETF                29.35   +0.38%  -0.03%  +0.72%  0.35  프록시    \n2026-08-21  Simplify CTA ETF (pro…  28.55   +0.25%  +2.22%  +5.00%  0.16  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-08-18  S&P 500 (ES)    5,949       -156,657  -96.3%     -0.67  ❌        확인     \n2026-08-18  USD Index (DX)  8,112       +2,340    +40.5%     +0.56  ❌        확인     \n2026-08-18  UST 10Y         -127,128    -128,348  -10520.3%  -1.17  부분 ✔     확인     \n2026-08-18  UST 2Y          87,195      +8,289    +10.5%     +0.46  ❌        확인     \n2026-08-18  UST 5Y          -13,295     +8,142    +38.0%     +1.09  ❌        확인     \n2026-08-18  UST 30Y         -353,477    +507,880  +59.0%     +1.16  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-23)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-21  S&P 500             7674.37   +0.43%  -0.23%  확인     \n2026-08-21  Nasdaq 100          29308.86  +0.33%  -0.62%  확인     \n2026-08-21  Dow                 53277.01  +0.98%  -0.12%  확인     \n2026-08-21  Russell 2000        299.96    +0.77%  -0.09%  프록시    \n2026-08-21  STOXX 600 (proxy:…  92.72     +0.77%  +1.28%  프록시    \n2026-08-21  Nikkei 225          66016.36  -0.30%  -2.14%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-20  UST 2Y   4.19%  +0.0bp  확인     \n2026-08-20  UST 5Y   4.39%  +4.0bp  확인     \n2026-08-20  UST 10Y  4.69%  +4.0bp  확인     \n2026-08-20  UST 30Y  5.23%  +4.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-18  WTI                86.48   +0.51%  +4.48%  확인     \n2026-08-18  Brent              95.29   +3.09%  +3.54%  확인     \n2026-08-21  Gold (proxy: GLD)  423.36  +1.95%  +6.23%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-20  VIX  16.01  +7.52%  +5.40%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-23)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260823.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-23",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-23T06:53:52+09:00",
      "size": 4700,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-21  SG CTA Trend Index (p…  100.99  +0.43%  +0.83%  +1.91%  0.40  프록시    \n2026-08-21  SG Short-Term Traders…  31.37   +0.67%  +0.32%  +0.06%  1.05  프록시    \n2026-08-21  Barclay BTOP50 (proxy…  104.13  +0.53%  +0.14%  +0.39%  0.68  프록시    \n2026-08-21  DBMF ETF                31.37   +0.67%  +0.32%  +0.06%  1.05  프록시    \n2026-08-21  KMLM ETF                29.35   +0.38%  -0.03%  +0.72%  0.35  프록시    \n2026-08-21  Simplify CTA ETF (pro…  28.55   +0.25%  +2.22%  +5.00%  0.16  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-08-18  S&P 500 (ES)    5,949       -156,657  -96.3%     -0.67  ❌        확인     \n2026-08-18  USD Index (DX)  8,112       +2,340    +40.5%     +0.56  ❌        확인     \n2026-08-18  UST 10Y         -127,128    -128,348  -10520.3%  -1.17  부분 ✔     확인     \n2026-08-18  UST 2Y          87,195      +8,289    +10.5%     +0.46  ❌        확인     \n2026-08-18  UST 5Y          -13,295     +8,142    +38.0%     +1.09  ❌        확인     \n2026-08-18  UST 30Y         -353,477    +507,880  +59.0%     +1.16  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-23)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-21  S&P 500             7674.37   +0.43%  -0.23%  확인     \n2026-08-21  Nasdaq 100          29308.86  +0.33%  -0.62%  확인     \n2026-08-21  Dow                 53277.01  +0.98%  -0.12%  확인     \n2026-08-21  Russell 2000        299.96    +0.77%  -0.09%  프록시    \n2026-08-21  STOXX 600 (proxy:…  92.72     +0.77%  +1.28%  프록시    \n2026-08-21  Nikkei 225          66016.36  -0.30%  -2.14%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-20  UST 2Y   4.19%  +0.0bp  확인     \n2026-08-20  UST 5Y   4.39%  +4.0bp  확인     \n2026-08-20  UST 10Y  4.69%  +4.0bp  확인     \n2026-08-20  UST 30Y  5.23%  +4.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-18  WTI                86.48   +0.51%  +4.48%  확인     \n2026-08-18  Brent              95.29   +3.09%  +3.54%  확인     \n2026-08-21  Gold (proxy: GLD)  423.36  +1.95%  +6.23%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-20  VIX  16.01  +7.52%  +5.40%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-23)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-21  SG Short-Term Traders…  31.37   +0.67%  +0.32%  +0.06%  1.05  프록시",
              "2026-08-21  Barclay BTOP50 (proxy…  104.13  +0.53%  +0.14%  +0.39%  0.68  프록시",
              "2026-08-21  DBMF ETF                31.37   +0.67%  +0.32%  +0.06%  1.05  프록시",
              "2026-08-21  KMLM ETF                29.35   +0.38%  -0.03%  +0.72%  0.35  프록시",
              "2026-08-21  Simplify CTA ETF (pro…  28.55   +0.25%  +2.22%  +5.00%  0.16  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-18  S&P 500 (ES)    5,949       -156,657  -96.3%     -0.67  ❌        확인",
              "2026-08-18  UST 10Y         -127,128    -128,348  -10520.3%  -1.17  부분 ✔     확인",
              "2026-08-18  UST 2Y          87,195      +8,289    +10.5%     +0.46  ❌        확인",
              "2026-08-18  UST 5Y          -13,295     +8,142    +38.0%     +1.09  ❌        확인",
              "2026-08-18  UST 30Y         -353,477    +507,880  +59.0%     +1.16  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-21  S&P 500             7674.37   +0.43%  -0.23%  확인",
              "2026-08-21  Nasdaq 100          29308.86  +0.33%  -0.62%  확인",
              "2026-08-21  Dow                 53277.01  +0.98%  -0.12%  확인",
              "2026-08-21  Russell 2000        299.96    +0.77%  -0.09%  프록시",
              "2026-08-21  STOXX 600 (proxy:…  92.72     +0.77%  +1.28%  프록시",
              "2026-08-21  Nikkei 225          66016.36  -0.30%  -2.14%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-20  UST 2Y   4.19%  +0.0bp  확인",
              "2026-08-20  UST 5Y   4.39%  +4.0bp  확인",
              "2026-08-20  UST 10Y  4.69%  +4.0bp  확인",
              "2026-08-20  UST 30Y  5.23%  +4.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인",
              "2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인",
              "2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-18  WTI                86.48   +0.51%  +4.48%  확인",
              "2026-08-18  Brent              95.29   +3.09%  +3.54%  확인",
              "2026-08-21  Gold (proxy: GLD)  423.36  +1.95%  +6.23%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-20  VIX  16.01  +7.52%  +5.40%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-21  SG CTA Trend Index (p…  100.99  +0.43%  +0.83%  +1.91%  0.40  프록시    \n2026-08-21  SG Short-Term Traders…  31.37   +0.67%  +0.32%  +0.06%  1.05  프록시    \n2026-08-21  Barclay BTOP50 (proxy…  104.13  +0.53%  +0.14%  +0.39%  0.68  프록시    \n2026-08-21  DBMF ETF                31.37   +0.67%  +0.32%  +0.06%  1.05  프록시    \n2026-08-21  KMLM ETF                29.35   +0.38%  -0.03%  +0.72%  0.35  프록시    \n2026-08-21  Simplify CTA ETF (pro…  28.55   +0.25%  +2.22%  +5.00%  0.16  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-08-18  S&P 500 (ES)    5,949       -156,657  -96.3%     -0.67  ❌        확인     \n2026-08-18  USD Index (DX)  8,112       +2,340    +40.5%     +0.56  ❌        확인     \n2026-08-18  UST 10Y         -127,128    -128,348  -10520.3%  -1.17  부분 ✔     확인     \n2026-08-18  UST 2Y          87,195      +8,289    +10.5%     +0.46  ❌        확인     \n2026-08-18  UST 5Y          -13,295     +8,142    +38.0%     +1.09  ❌        확인     \n2026-08-18  UST 30Y         -353,477    +507,880  +59.0%     +1.16  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-23)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-21  S&P 500             7674.37   +0.43%  -0.23%  확인     \n2026-08-21  Nasdaq 100          29308.86  +0.33%  -0.62%  확인     \n2026-08-21  Dow                 53277.01  +0.98%  -0.12%  확인     \n2026-08-21  Russell 2000        299.96    +0.77%  -0.09%  프록시    \n2026-08-21  STOXX 600 (proxy:…  92.72     +0.77%  +1.28%  프록시    \n2026-08-21  Nikkei 225          66016.36  -0.30%  -2.14%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-20  UST 2Y   4.19%  +0.0bp  확인     \n2026-08-20  UST 5Y   4.39%  +4.0bp  확인     \n2026-08-20  UST 10Y  4.69%  +4.0bp  확인     \n2026-08-20  UST 30Y  5.23%  +4.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-18  WTI                86.48   +0.51%  +4.48%  확인     \n2026-08-18  Brent              95.29   +3.09%  +3.54%  확인     \n2026-08-21  Gold (proxy: GLD)  423.36  +1.95%  +6.23%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-20  VIX  16.01  +7.52%  +5.40%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-23)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260822.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger",
      "date": "2026-08-22",
      "trigger": "미발생",
      "regime": "neutral/no trigger",
      "mtime": "2026-08-22T06:53:53+09:00",
      "size": 4652,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-21  SG CTA Trend Index (p…  100.95  +0.39%  +0.79%  +1.87%  0.36  프록시    \n2026-08-21  SG Short-Term Traders…  31.34   +0.58%  +0.22%  -0.03%  0.89  프록시    \n2026-08-21  Barclay BTOP50 (proxy…  104.04  +0.44%  +0.06%  +0.31%  0.56  프록시    \n2026-08-21  DBMF ETF                31.34   +0.58%  +0.22%  -0.03%  0.89  프록시    \n2026-08-21  KMLM ETF                29.33   +0.31%  -0.10%  +0.65%  0.28  프록시    \n2026-08-21  Simplify CTA ETF (pro…  28.56   +0.28%  +2.26%  +5.04%  0.18  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-08-18  S&P 500 (ES)    5,949       -156,657  -96.3%     -0.67  ❌        확인     \n2026-08-18  USD Index (DX)  8,112       +2,340    +40.5%     +0.56  ❌        확인     \n2026-08-18  UST 10Y         -127,128    -128,348  -10520.3%  -1.17  부분 ✔     확인     \n2026-08-18  UST 2Y          87,195      +8,289    +10.5%     +0.46  ❌        확인     \n2026-08-18  UST 5Y          -13,295     +8,142    +38.0%     +1.09  ❌        확인     \n2026-08-18  UST 30Y         -353,477    +507,880  +59.0%     +1.16  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-08-22)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-20  S&P 500             7641.16   -0.87%  -1.34%  확인     \n2026-08-20  Nasdaq 100          29213.16  -0.72%  -2.61%  확인     \n2026-08-20  Dow                 52759.21  -1.32%  -1.31%  확인     \n2026-08-21  Russell 2000        299.94    +0.76%  -0.10%  프록시    \n2026-08-21  STOXX 600 (proxy:…  92.70     +0.75%  +1.26%  프록시    \n2026-08-21  Nikkei 225          66016.36  -0.30%  -2.14%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-20  UST 2Y   4.19%  +0.0bp  확인     \n2026-08-20  UST 5Y   4.39%  +4.0bp  확인     \n2026-08-20  UST 10Y  4.69%  +4.0bp  확인     \n2026-08-20  UST 30Y  5.23%  +4.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-18  WTI                86.48   +0.51%  +4.48%  확인     \n2026-08-18  Brent              95.29   +3.09%  +3.54%  확인     \n2026-08-21  Gold (proxy: GLD)  423.41  +1.96%  +6.24%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-20  VIX  16.01  +7.52%  +5.40%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 미발생 (기준일: 2026-08-22)",
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
              "2026-08-21  SG Short-Term Traders…  31.34   +0.58%  +0.22%  -0.03%  0.89  프록시",
              "2026-08-21  Barclay BTOP50 (proxy…  104.04  +0.44%  +0.06%  +0.31%  0.56  프록시",
              "2026-08-21  DBMF ETF                31.34   +0.58%  +0.22%  -0.03%  0.89  프록시",
              "2026-08-21  KMLM ETF                29.33   +0.31%  -0.10%  +0.65%  0.28  프록시",
              "2026-08-21  Simplify CTA ETF (pro…  28.56   +0.28%  +2.26%  +5.04%  0.18  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-18  S&P 500 (ES)    5,949       -156,657  -96.3%     -0.67  ❌        확인",
              "2026-08-18  UST 10Y         -127,128    -128,348  -10520.3%  -1.17  부분 ✔     확인",
              "2026-08-18  UST 2Y          87,195      +8,289    +10.5%     +0.46  ❌        확인",
              "2026-08-18  UST 5Y          -13,295     +8,142    +38.0%     +1.09  ❌        확인",
              "2026-08-18  UST 30Y         -353,477    +507,880  +59.0%     +1.16  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-20  S&P 500             7641.16   -0.87%  -1.34%  확인",
              "2026-08-20  Nasdaq 100          29213.16  -0.72%  -2.61%  확인",
              "2026-08-20  Dow                 52759.21  -1.32%  -1.31%  확인",
              "2026-08-21  Russell 2000        299.94    +0.76%  -0.10%  프록시",
              "2026-08-21  STOXX 600 (proxy:…  92.70     +0.75%  +1.26%  프록시",
              "2026-08-21  Nikkei 225          66016.36  -0.30%  -2.14%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-20  UST 2Y   4.19%  +0.0bp  확인",
              "2026-08-20  UST 5Y   4.39%  +4.0bp  확인",
              "2026-08-20  UST 10Y  4.69%  +4.0bp  확인",
              "2026-08-20  UST 30Y  5.23%  +4.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인",
              "2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인",
              "2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-18  WTI                86.48   +0.51%  +4.48%  확인",
              "2026-08-18  Brent              95.29   +3.09%  +3.54%  확인",
              "2026-08-21  Gold (proxy: GLD)  423.41  +1.96%  +6.24%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-20  VIX  16.01  +7.52%  +5.40%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-21  SG CTA Trend Index (p…  100.95  +0.39%  +0.79%  +1.87%  0.36  프록시    \n2026-08-21  SG Short-Term Traders…  31.34   +0.58%  +0.22%  -0.03%  0.89  프록시    \n2026-08-21  Barclay BTOP50 (proxy…  104.04  +0.44%  +0.06%  +0.31%  0.56  프록시    \n2026-08-21  DBMF ETF                31.34   +0.58%  +0.22%  -0.03%  0.89  프록시    \n2026-08-21  KMLM ETF                29.33   +0.31%  -0.10%  +0.65%  0.28  프록시    \n2026-08-21  Simplify CTA ETF (pro…  28.56   +0.28%  +2.26%  +5.04%  0.18  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-08-18  S&P 500 (ES)    5,949       -156,657  -96.3%     -0.67  ❌        확인     \n2026-08-18  USD Index (DX)  8,112       +2,340    +40.5%     +0.56  ❌        확인     \n2026-08-18  UST 10Y         -127,128    -128,348  -10520.3%  -1.17  부분 ✔     확인     \n2026-08-18  UST 2Y          87,195      +8,289    +10.5%     +0.46  ❌        확인     \n2026-08-18  UST 5Y          -13,295     +8,142    +38.0%     +1.09  ❌        확인     \n2026-08-18  UST 30Y         -353,477    +507,880  +59.0%     +1.16  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-08-22)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-20  S&P 500             7641.16   -0.87%  -1.34%  확인     \n2026-08-20  Nasdaq 100          29213.16  -0.72%  -2.61%  확인     \n2026-08-20  Dow                 52759.21  -1.32%  -1.31%  확인     \n2026-08-21  Russell 2000        299.94    +0.76%  -0.10%  프록시    \n2026-08-21  STOXX 600 (proxy:…  92.70     +0.75%  +1.26%  프록시    \n2026-08-21  Nikkei 225          66016.36  -0.30%  -2.14%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-20  UST 2Y   4.19%  +0.0bp  확인     \n2026-08-20  UST 5Y   4.39%  +4.0bp  확인     \n2026-08-20  UST 10Y  4.69%  +4.0bp  확인     \n2026-08-20  UST 30Y  5.23%  +4.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-18  WTI                86.48   +0.51%  +4.48%  확인     \n2026-08-18  Brent              95.29   +3.09%  +3.54%  확인     \n2026-08-21  Gold (proxy: GLD)  423.41  +1.96%  +6.24%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-20  VIX  16.01  +7.52%  +5.40%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 미발생 (기준일: 2026-08-22)",
        "국면 판단: neutral/no trigger",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260821.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-21",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-21T06:53:52+09:00",
      "size": 4672,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-20  SG CTA Trend Index (p…  99.93   +0.90%  +0.04%  +2.19%  0.87  프록시    \n2026-08-20  SG Short-Term Traders…  31.16   +0.69%  -1.22%  -0.53%  1.11  프록시    \n2026-08-20  Barclay BTOP50 (proxy…  103.25  +0.67%  -1.03%  +0.43%  0.90  프록시    \n2026-08-20  DBMF ETF                31.16   +0.69%  -1.22%  -0.53%  1.11  프록시    \n2026-08-20  KMLM ETF                29.20   +0.65%  -0.85%  +1.39%  0.66  프록시    \n2026-08-20  Simplify CTA ETF (pro…  28.50   +1.35%  +2.22%  +5.79%  0.77  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인     \n2026-08-11  USD Index (DX)  5,772       +1,923    +50.0%  +0.46  ❌        확인     \n2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인     \n2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인     \n2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인     \n2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-21)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-19  S&P 500             7707.98   +0.21%  -1.00%  확인     \n2026-08-19  Nasdaq 100          29426.02  -0.22%  -2.06%  확인     \n2026-08-19  Dow                 53463.05  +0.22%  -0.50%  확인     \n2026-08-20  Russell 2000        297.70    -1.33%  -2.09%  프록시    \n2026-08-20  STOXX 600 (proxy:…  92.00     -0.25%  -0.11%  프록시    \n2026-08-20  Nikkei 225          66216.79  +1.36%  -4.34%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-19  UST 2Y   4.19%  +0.0bp  확인     \n2026-08-19  UST 5Y   4.35%  -2.0bp  확인     \n2026-08-19  UST 10Y  4.65%  -6.0bp  확인     \n2026-08-19  UST 30Y  5.19%  -9.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-18  WTI                86.48   +0.51%  +4.48%  확인     \n2026-08-18  Brent              95.29   +3.09%  +3.54%  확인     \n2026-08-20  Gold (proxy: GLD)  415.27  +0.35%  +2.41%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-19  VIX  14.89  -6.00%  +4.49%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-21)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-20  SG Short-Term Traders…  31.16   +0.69%  -1.22%  -0.53%  1.11  프록시",
              "2026-08-20  Barclay BTOP50 (proxy…  103.25  +0.67%  -1.03%  +0.43%  0.90  프록시",
              "2026-08-20  DBMF ETF                31.16   +0.69%  -1.22%  -0.53%  1.11  프록시",
              "2026-08-20  KMLM ETF                29.20   +0.65%  -0.85%  +1.39%  0.66  프록시",
              "2026-08-20  Simplify CTA ETF (pro…  28.50   +1.35%  +2.22%  +5.79%  0.77  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인",
              "2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인",
              "2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인",
              "2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인",
              "2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-19  S&P 500             7707.98   +0.21%  -1.00%  확인",
              "2026-08-19  Nasdaq 100          29426.02  -0.22%  -2.06%  확인",
              "2026-08-19  Dow                 53463.05  +0.22%  -0.50%  확인",
              "2026-08-20  Russell 2000        297.70    -1.33%  -2.09%  프록시",
              "2026-08-20  STOXX 600 (proxy:…  92.00     -0.25%  -0.11%  프록시",
              "2026-08-20  Nikkei 225          66216.79  +1.36%  -4.34%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-19  UST 2Y   4.19%  +0.0bp  확인",
              "2026-08-19  UST 5Y   4.35%  -2.0bp  확인",
              "2026-08-19  UST 10Y  4.65%  -6.0bp  확인",
              "2026-08-19  UST 30Y  5.19%  -9.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인",
              "2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인",
              "2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-18  WTI                86.48   +0.51%  +4.48%  확인",
              "2026-08-18  Brent              95.29   +3.09%  +3.54%  확인",
              "2026-08-20  Gold (proxy: GLD)  415.27  +0.35%  +2.41%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-19  VIX  14.89  -6.00%  +4.49%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-20  SG CTA Trend Index (p…  99.93   +0.90%  +0.04%  +2.19%  0.87  프록시    \n2026-08-20  SG Short-Term Traders…  31.16   +0.69%  -1.22%  -0.53%  1.11  프록시    \n2026-08-20  Barclay BTOP50 (proxy…  103.25  +0.67%  -1.03%  +0.43%  0.90  프록시    \n2026-08-20  DBMF ETF                31.16   +0.69%  -1.22%  -0.53%  1.11  프록시    \n2026-08-20  KMLM ETF                29.20   +0.65%  -0.85%  +1.39%  0.66  프록시    \n2026-08-20  Simplify CTA ETF (pro…  28.50   +1.35%  +2.22%  +5.79%  0.77  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인     \n2026-08-11  USD Index (DX)  5,772       +1,923    +50.0%  +0.46  ❌        확인     \n2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인     \n2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인     \n2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인     \n2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-21)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-19  S&P 500             7707.98   +0.21%  -1.00%  확인     \n2026-08-19  Nasdaq 100          29426.02  -0.22%  -2.06%  확인     \n2026-08-19  Dow                 53463.05  +0.22%  -0.50%  확인     \n2026-08-20  Russell 2000        297.70    -1.33%  -2.09%  프록시    \n2026-08-20  STOXX 600 (proxy:…  92.00     -0.25%  -0.11%  프록시    \n2026-08-20  Nikkei 225          66216.79  +1.36%  -4.34%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-19  UST 2Y   4.19%  +0.0bp  확인     \n2026-08-19  UST 5Y   4.35%  -2.0bp  확인     \n2026-08-19  UST 10Y  4.65%  -6.0bp  확인     \n2026-08-19  UST 30Y  5.19%  -9.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-18  WTI                86.48   +0.51%  +4.48%  확인     \n2026-08-18  Brent              95.29   +3.09%  +3.54%  확인     \n2026-08-20  Gold (proxy: GLD)  415.27  +0.35%  +2.41%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-19  VIX  14.89  -6.00%  +4.49%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-21)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260820.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-20",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-20T06:53:53+09:00",
      "size": 4680,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-08-19  SG CTA Trend Index (p…  99.73   -0.60%  +0.46%  +0.71%  -0.58  프록시    \n2026-08-19  SG Short-Term Traders…  30.95   -1.04%  -1.29%  -1.54%  -1.81  프록시    \n2026-08-19  Barclay BTOP50 (proxy…  102.92  -1.12%  -0.87%  -0.58%  -1.64  프록시    \n2026-08-19  DBMF ETF                30.95   -1.04%  -1.29%  -1.54%  -1.81  프록시    \n2026-08-19  KMLM ETF                29.01   -1.19%  -0.45%  +0.38%  -1.31  프록시    \n2026-08-19  Simplify CTA ETF (pro…  28.05   +0.43%  +3.16%  +3.31%  0.27   프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인     \n2026-08-11  USD Index (DX)  5,772       +1,923    +50.0%  +0.46  ❌        확인     \n2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인     \n2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인     \n2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인     \n2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-20)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-18  S&P 500             7691.76   -0.69%  -1.37%  확인     \n2026-08-18  Nasdaq 100          29490.96  -1.68%  -1.97%  확인     \n2026-08-18  Dow                 53343.40  -0.22%  -0.92%  확인     \n2026-08-19  Russell 2000        301.72    +0.50%  -1.10%  프록시    \n2026-08-19  STOXX 600 (proxy:…  92.22     +0.73%  -0.16%  프록시    \n2026-08-19  Nikkei 225          65326.42  -3.16%  -4.93%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-18  UST 2Y   4.19%  +0.0bp  확인     \n2026-08-18  UST 5Y   4.37%  -1.0bp  확인     \n2026-08-18  UST 10Y  4.71%  -1.0bp  확인     \n2026-08-18  UST 30Y  5.28%  -3.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-18  WTI                86.48   +0.51%  +4.48%  확인     \n2026-08-18  Brent              95.29   +3.09%  +3.54%  확인     \n2026-08-19  Gold (proxy: GLD)  413.80  +3.83%  +3.07%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-18  VIX  15.84  +4.28%  +8.27%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-20)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-19  SG Short-Term Traders…  30.95   -1.04%  -1.29%  -1.54%  -1.81  프록시",
              "2026-08-19  Barclay BTOP50 (proxy…  102.92  -1.12%  -0.87%  -0.58%  -1.64  프록시",
              "2026-08-19  DBMF ETF                30.95   -1.04%  -1.29%  -1.54%  -1.81  프록시",
              "2026-08-19  KMLM ETF                29.01   -1.19%  -0.45%  +0.38%  -1.31  프록시",
              "2026-08-19  Simplify CTA ETF (pro…  28.05   +0.43%  +3.16%  +3.31%  0.27   프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인",
              "2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인",
              "2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인",
              "2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인",
              "2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-18  S&P 500             7691.76   -0.69%  -1.37%  확인",
              "2026-08-18  Nasdaq 100          29490.96  -1.68%  -1.97%  확인",
              "2026-08-18  Dow                 53343.40  -0.22%  -0.92%  확인",
              "2026-08-19  Russell 2000        301.72    +0.50%  -1.10%  프록시",
              "2026-08-19  STOXX 600 (proxy:…  92.22     +0.73%  -0.16%  프록시",
              "2026-08-19  Nikkei 225          65326.42  -3.16%  -4.93%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-18  UST 2Y   4.19%  +0.0bp  확인",
              "2026-08-18  UST 5Y   4.37%  -1.0bp  확인",
              "2026-08-18  UST 10Y  4.71%  -1.0bp  확인",
              "2026-08-18  UST 30Y  5.28%  -3.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인",
              "2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인",
              "2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-18  WTI                86.48   +0.51%  +4.48%  확인",
              "2026-08-18  Brent              95.29   +3.09%  +3.54%  확인",
              "2026-08-19  Gold (proxy: GLD)  413.80  +3.83%  +3.07%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-18  VIX  15.84  +4.28%  +8.27%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-08-19  SG CTA Trend Index (p…  99.73   -0.60%  +0.46%  +0.71%  -0.58  프록시    \n2026-08-19  SG Short-Term Traders…  30.95   -1.04%  -1.29%  -1.54%  -1.81  프록시    \n2026-08-19  Barclay BTOP50 (proxy…  102.92  -1.12%  -0.87%  -0.58%  -1.64  프록시    \n2026-08-19  DBMF ETF                30.95   -1.04%  -1.29%  -1.54%  -1.81  프록시    \n2026-08-19  KMLM ETF                29.01   -1.19%  -0.45%  +0.38%  -1.31  프록시    \n2026-08-19  Simplify CTA ETF (pro…  28.05   +0.43%  +3.16%  +3.31%  0.27   프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인     \n2026-08-11  USD Index (DX)  5,772       +1,923    +50.0%  +0.46  ❌        확인     \n2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인     \n2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인     \n2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인     \n2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-20)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-18  S&P 500             7691.76   -0.69%  -1.37%  확인     \n2026-08-18  Nasdaq 100          29490.96  -1.68%  -1.97%  확인     \n2026-08-18  Dow                 53343.40  -0.22%  -0.92%  확인     \n2026-08-19  Russell 2000        301.72    +0.50%  -1.10%  프록시    \n2026-08-19  STOXX 600 (proxy:…  92.22     +0.73%  -0.16%  프록시    \n2026-08-19  Nikkei 225          65326.42  -3.16%  -4.93%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-18  UST 2Y   4.19%  +0.0bp  확인     \n2026-08-18  UST 5Y   4.37%  -1.0bp  확인     \n2026-08-18  UST 10Y  4.71%  -1.0bp  확인     \n2026-08-18  UST 30Y  5.28%  -3.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-18  WTI                86.48   +0.51%  +4.48%  확인     \n2026-08-18  Brent              95.29   +3.09%  +3.54%  확인     \n2026-08-19  Gold (proxy: GLD)  413.80  +3.83%  +3.07%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-18  VIX  15.84  +4.28%  +8.27%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-20)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260819.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-19",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-19T06:53:54+09:00",
      "size": 4680,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-08-18  SG CTA Trend Index (p…  102.06  -0.26%  +1.88%  +1.53%  -0.27  프록시    \n2026-08-18  SG Short-Term Traders…  31.26   -0.89%  -0.19%  -0.22%  -1.58  프록시    \n2026-08-18  Barclay BTOP50 (proxy…  105.34  -0.59%  +0.88%  +0.81%  -0.91  프록시    \n2026-08-18  DBMF ETF                31.26   -0.89%  -0.19%  -0.22%  -1.58  프록시    \n2026-08-18  KMLM ETF                29.36   -0.29%  +1.96%  +1.86%  -0.37  프록시    \n2026-08-18  Simplify CTA ETF (pro…  27.99   +0.39%  +3.90%  +2.98%  0.23   프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인     \n2026-08-11  USD Index (DX)  5,772       +1,923    +50.0%  +0.46  ❌        확인     \n2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인     \n2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인     \n2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인     \n2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-19)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-17  S&P 500             7745.06   -0.52%  -0.04%  확인     \n2026-08-17  Nasdaq 100          29995.38  -0.17%  +0.85%  확인     \n2026-08-17  Dow                 53459.78  -0.51%  -0.58%  확인     \n2026-08-18  Russell 2000        300.19    -1.27%  -1.09%  프록시    \n2026-08-18  STOXX 600 (proxy:…  91.56     -0.59%  -0.89%  프록시    \n2026-08-18  Nikkei 225          67460.73  -2.54%  -1.24%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-17  UST 2Y   4.19%  +2.0bp  확인     \n2026-08-17  UST 5Y   4.38%  +2.0bp  확인     \n2026-08-17  UST 10Y  4.72%  +4.0bp  확인     \n2026-08-17  UST 30Y  5.31%  +6.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-11  WTI                84.77   +1.21%  +7.47%  확인     \n2026-08-11  Brent              93.26   +0.56%  +4.03%  확인     \n2026-08-18  Gold (proxy: GLD)  398.51  -1.72%  -0.11%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-17  VIX  15.19  +6.60%  +4.40%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-19)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-18  SG Short-Term Traders…  31.26   -0.89%  -0.19%  -0.22%  -1.58  프록시",
              "2026-08-18  Barclay BTOP50 (proxy…  105.34  -0.59%  +0.88%  +0.81%  -0.91  프록시",
              "2026-08-18  DBMF ETF                31.26   -0.89%  -0.19%  -0.22%  -1.58  프록시",
              "2026-08-18  KMLM ETF                29.36   -0.29%  +1.96%  +1.86%  -0.37  프록시",
              "2026-08-18  Simplify CTA ETF (pro…  27.99   +0.39%  +3.90%  +2.98%  0.23   프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인",
              "2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인",
              "2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인",
              "2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인",
              "2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-17  S&P 500             7745.06   -0.52%  -0.04%  확인",
              "2026-08-17  Nasdaq 100          29995.38  -0.17%  +0.85%  확인",
              "2026-08-17  Dow                 53459.78  -0.51%  -0.58%  확인",
              "2026-08-18  Russell 2000        300.19    -1.27%  -1.09%  프록시",
              "2026-08-18  STOXX 600 (proxy:…  91.56     -0.59%  -0.89%  프록시",
              "2026-08-18  Nikkei 225          67460.73  -2.54%  -1.24%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-17  UST 2Y   4.19%  +2.0bp  확인",
              "2026-08-17  UST 5Y   4.38%  +2.0bp  확인",
              "2026-08-17  UST 10Y  4.72%  +4.0bp  확인",
              "2026-08-17  UST 30Y  5.31%  +6.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인",
              "2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인",
              "2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-11  WTI                84.77   +1.21%  +7.47%  확인",
              "2026-08-11  Brent              93.26   +0.56%  +4.03%  확인",
              "2026-08-18  Gold (proxy: GLD)  398.51  -1.72%  -0.11%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-17  VIX  15.19  +6.60%  +4.40%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-08-18  SG CTA Trend Index (p…  102.06  -0.26%  +1.88%  +1.53%  -0.27  프록시    \n2026-08-18  SG Short-Term Traders…  31.26   -0.89%  -0.19%  -0.22%  -1.58  프록시    \n2026-08-18  Barclay BTOP50 (proxy…  105.34  -0.59%  +0.88%  +0.81%  -0.91  프록시    \n2026-08-18  DBMF ETF                31.26   -0.89%  -0.19%  -0.22%  -1.58  프록시    \n2026-08-18  KMLM ETF                29.36   -0.29%  +1.96%  +1.86%  -0.37  프록시    \n2026-08-18  Simplify CTA ETF (pro…  27.99   +0.39%  +3.90%  +2.98%  0.23   프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인     \n2026-08-11  USD Index (DX)  5,772       +1,923    +50.0%  +0.46  ❌        확인     \n2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인     \n2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인     \n2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인     \n2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-19)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-17  S&P 500             7745.06   -0.52%  -0.04%  확인     \n2026-08-17  Nasdaq 100          29995.38  -0.17%  +0.85%  확인     \n2026-08-17  Dow                 53459.78  -0.51%  -0.58%  확인     \n2026-08-18  Russell 2000        300.19    -1.27%  -1.09%  프록시    \n2026-08-18  STOXX 600 (proxy:…  91.56     -0.59%  -0.89%  프록시    \n2026-08-18  Nikkei 225          67460.73  -2.54%  -1.24%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-17  UST 2Y   4.19%  +2.0bp  확인     \n2026-08-17  UST 5Y   4.38%  +2.0bp  확인     \n2026-08-17  UST 10Y  4.72%  +4.0bp  확인     \n2026-08-17  UST 30Y  5.31%  +6.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-11  WTI                84.77   +1.21%  +7.47%  확인     \n2026-08-11  Brent              93.26   +0.56%  +4.03%  확인     \n2026-08-18  Gold (proxy: GLD)  398.51  -1.72%  -0.11%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-17  VIX  15.19  +6.60%  +4.40%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-19)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260818.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-18",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-18T06:53:53+09:00",
      "size": 4672,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-17  SG CTA Trend Index (p…  102.93  +1.36%  +1.61%  +2.04%  1.28  프록시    \n2026-08-17  SG Short-Term Traders…  31.50   +0.46%  +0.21%  +0.56%  0.69  프록시    \n2026-08-17  Barclay BTOP50 (proxy…  106.29  +0.75%  +1.04%  +1.40%  0.98  프록시    \n2026-08-17  DBMF ETF                31.50   +0.46%  +0.21%  +0.56%  0.69  프록시    \n2026-08-17  KMLM ETF                29.45   +1.05%  +1.89%  +2.24%  1.03  프록시    \n2026-08-17  Simplify CTA ETF (pro…  27.89   +2.57%  +2.73%  +3.33%  1.42  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인     \n2026-08-11  USD Index (DX)  5,772       +1,923    +50.0%  +0.46  ❌        확인     \n2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인     \n2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인     \n2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인     \n2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-18)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-14  S&P 500             7785.76   -0.17%  +0.74%  확인     \n2026-08-14  Nasdaq 100          30046.14  -0.13%  +1.76%  확인     \n2026-08-14  Dow                 53732.41  -0.20%  -0.11%  확인     \n2026-08-17  Russell 2000        304.04    -0.34%  +0.44%  프록시    \n2026-08-17  STOXX 600 (proxy:…  92.11     -0.28%  -0.15%  프록시    \n2026-08-17  Nikkei 225          69220.25  +0.74%  +2.51%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-14  UST 2Y   4.17%  +2.0bp  확인     \n2026-08-14  UST 5Y   4.36%  +4.0bp  확인     \n2026-08-14  UST 10Y  4.68%  +5.0bp  확인     \n2026-08-14  UST 30Y  5.25%  +4.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-11  WTI                84.77   +1.21%  +7.47%  확인     \n2026-08-11  Brent              93.26   +0.56%  +4.03%  확인     \n2026-08-17  Gold (proxy: GLD)  405.39  +0.97%  +0.12%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-14  VIX  14.25  -2.60%  -6.74%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-18)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-17  SG Short-Term Traders…  31.50   +0.46%  +0.21%  +0.56%  0.69  프록시",
              "2026-08-17  Barclay BTOP50 (proxy…  106.29  +0.75%  +1.04%  +1.40%  0.98  프록시",
              "2026-08-17  DBMF ETF                31.50   +0.46%  +0.21%  +0.56%  0.69  프록시",
              "2026-08-17  KMLM ETF                29.45   +1.05%  +1.89%  +2.24%  1.03  프록시",
              "2026-08-17  Simplify CTA ETF (pro…  27.89   +2.57%  +2.73%  +3.33%  1.42  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인",
              "2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인",
              "2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인",
              "2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인",
              "2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-14  S&P 500             7785.76   -0.17%  +0.74%  확인",
              "2026-08-14  Nasdaq 100          30046.14  -0.13%  +1.76%  확인",
              "2026-08-14  Dow                 53732.41  -0.20%  -0.11%  확인",
              "2026-08-17  Russell 2000        304.04    -0.34%  +0.44%  프록시",
              "2026-08-17  STOXX 600 (proxy:…  92.11     -0.28%  -0.15%  프록시",
              "2026-08-17  Nikkei 225          69220.25  +0.74%  +2.51%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-14  UST 2Y   4.17%  +2.0bp  확인",
              "2026-08-14  UST 5Y   4.36%  +4.0bp  확인",
              "2026-08-14  UST 10Y  4.68%  +5.0bp  확인",
              "2026-08-14  UST 30Y  5.25%  +4.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인",
              "2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인",
              "2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-11  WTI                84.77   +1.21%  +7.47%  확인",
              "2026-08-11  Brent              93.26   +0.56%  +4.03%  확인",
              "2026-08-17  Gold (proxy: GLD)  405.39  +0.97%  +0.12%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-14  VIX  14.25  -2.60%  -6.74%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-17  SG CTA Trend Index (p…  102.93  +1.36%  +1.61%  +2.04%  1.28  프록시    \n2026-08-17  SG Short-Term Traders…  31.50   +0.46%  +0.21%  +0.56%  0.69  프록시    \n2026-08-17  Barclay BTOP50 (proxy…  106.29  +0.75%  +1.04%  +1.40%  0.98  프록시    \n2026-08-17  DBMF ETF                31.50   +0.46%  +0.21%  +0.56%  0.69  프록시    \n2026-08-17  KMLM ETF                29.45   +1.05%  +1.89%  +2.24%  1.03  프록시    \n2026-08-17  Simplify CTA ETF (pro…  27.89   +2.57%  +2.73%  +3.33%  1.42  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인     \n2026-08-11  USD Index (DX)  5,772       +1,923    +50.0%  +0.46  ❌        확인     \n2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인     \n2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인     \n2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인     \n2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-18)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-14  S&P 500             7785.76   -0.17%  +0.74%  확인     \n2026-08-14  Nasdaq 100          30046.14  -0.13%  +1.76%  확인     \n2026-08-14  Dow                 53732.41  -0.20%  -0.11%  확인     \n2026-08-17  Russell 2000        304.04    -0.34%  +0.44%  프록시    \n2026-08-17  STOXX 600 (proxy:…  92.11     -0.28%  -0.15%  프록시    \n2026-08-17  Nikkei 225          69220.25  +0.74%  +2.51%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-14  UST 2Y   4.17%  +2.0bp  확인     \n2026-08-14  UST 5Y   4.36%  +4.0bp  확인     \n2026-08-14  UST 10Y  4.68%  +5.0bp  확인     \n2026-08-14  UST 30Y  5.25%  +4.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-14  DXY (proxy: DTWEX…  118.90  -0.24%  -0.23%  확인     \n2026-08-14  EURUSD              1.16    +0.43%  +0.33%  확인     \n2026-08-14  USDJPY              159.21  -0.09%  -0.03%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-11  WTI                84.77   +1.21%  +7.47%  확인     \n2026-08-11  Brent              93.26   +0.56%  +4.03%  확인     \n2026-08-17  Gold (proxy: GLD)  405.39  +0.97%  +0.12%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-14  VIX  14.25  -2.60%  -6.74%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-18)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260817.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-17",
      "trigger": "발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-17T06:53:51+09:00",
      "size": 4658,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-14  SG CTA Trend Index (p…  101.55  +0.73%  +0.39%  +3.25%  0.69  프록시    \n2026-08-14  SG Short-Term Traders…  31.35   +0.10%  +0.06%  +1.36%  0.07  프록시    \n2026-08-14  Barclay BTOP50 (proxy…  105.79  +0.64%  +0.57%  +2.33%  0.83  프록시    \n2026-08-14  DBMF ETF                31.35   +0.10%  +0.06%  +1.36%  0.07  프록시    \n2026-08-14  KMLM ETF                29.14   +1.18%  +1.08%  +3.30%  1.19  프록시    \n2026-08-14  Simplify CTA ETF (pro…  27.19   +0.93%  +0.04%  +5.10%  0.54  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인     \n2026-08-11  USD Index (DX)  5,772       +1,923    +50.0%  +0.46  ❌        확인     \n2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인     \n2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인     \n2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인     \n2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 발생 (기준일: 2026-08-17)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-14  S&P 500             7785.76   -0.17%  +0.74%  확인     \n2026-08-14  Nasdaq 100          30046.14  -0.13%  +1.76%  확인     \n2026-08-14  Dow                 53732.41  -0.20%  -0.11%  확인     \n2026-08-14  Russell 2000        305.09    +0.52%  +1.36%  프록시    \n2026-08-14  STOXX 600 (proxy:…  92.37     -0.01%  +0.08%  프록시    \n2026-08-14  Nikkei 225          68713.80  +0.59%  +2.60%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-13  UST 2Y   4.15%  -5.0bp  확인     \n2026-08-13  UST 5Y   4.32%  -6.0bp  확인     \n2026-08-13  UST 10Y  4.63%  -5.0bp  확인     \n2026-08-13  UST 30Y  5.21%  -3.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인     \n2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인     \n2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-11  WTI                84.77   +1.21%  +7.47%  확인     \n2026-08-11  Brent              93.26   +0.56%  +4.03%  확인     \n2026-08-14  Gold (proxy: GLD)  401.48  +0.63%  +0.13%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-13  VIX  14.63  +0.55%  -5.37%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 발생 (기준일: 2026-08-17)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-14  SG Short-Term Traders…  31.35   +0.10%  +0.06%  +1.36%  0.07  프록시",
              "2026-08-14  Barclay BTOP50 (proxy…  105.79  +0.64%  +0.57%  +2.33%  0.83  프록시",
              "2026-08-14  DBMF ETF                31.35   +0.10%  +0.06%  +1.36%  0.07  프록시",
              "2026-08-14  KMLM ETF                29.14   +1.18%  +1.08%  +3.30%  1.19  프록시",
              "2026-08-14  Simplify CTA ETF (pro…  27.19   +0.93%  +0.04%  +5.10%  0.54  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인",
              "2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인",
              "2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인",
              "2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인",
              "2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-14  S&P 500             7785.76   -0.17%  +0.74%  확인",
              "2026-08-14  Nasdaq 100          30046.14  -0.13%  +1.76%  확인",
              "2026-08-14  Dow                 53732.41  -0.20%  -0.11%  확인",
              "2026-08-14  Russell 2000        305.09    +0.52%  +1.36%  프록시",
              "2026-08-14  STOXX 600 (proxy:…  92.37     -0.01%  +0.08%  프록시",
              "2026-08-14  Nikkei 225          68713.80  +0.59%  +2.60%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-13  UST 2Y   4.15%  -5.0bp  확인",
              "2026-08-13  UST 5Y   4.32%  -6.0bp  확인",
              "2026-08-13  UST 10Y  4.63%  -5.0bp  확인",
              "2026-08-13  UST 30Y  5.21%  -3.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인",
              "2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인",
              "2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-11  WTI                84.77   +1.21%  +7.47%  확인",
              "2026-08-11  Brent              93.26   +0.56%  +4.03%  확인",
              "2026-08-14  Gold (proxy: GLD)  401.48  +0.63%  +0.13%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-13  VIX  14.63  +0.55%  -5.37%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-14  SG CTA Trend Index (p…  101.55  +0.73%  +0.39%  +3.25%  0.69  프록시    \n2026-08-14  SG Short-Term Traders…  31.35   +0.10%  +0.06%  +1.36%  0.07  프록시    \n2026-08-14  Barclay BTOP50 (proxy…  105.79  +0.64%  +0.57%  +2.33%  0.83  프록시    \n2026-08-14  DBMF ETF                31.35   +0.10%  +0.06%  +1.36%  0.07  프록시    \n2026-08-14  KMLM ETF                29.14   +1.18%  +1.08%  +3.30%  1.19  프록시    \n2026-08-14  Simplify CTA ETF (pro…  27.19   +0.93%  +0.04%  +5.10%  0.54  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인     \n2026-08-11  USD Index (DX)  5,772       +1,923    +50.0%  +0.46  ❌        확인     \n2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인     \n2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인     \n2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인     \n2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 발생 (기준일: 2026-08-17)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-14  S&P 500             7785.76   -0.17%  +0.74%  확인     \n2026-08-14  Nasdaq 100          30046.14  -0.13%  +1.76%  확인     \n2026-08-14  Dow                 53732.41  -0.20%  -0.11%  확인     \n2026-08-14  Russell 2000        305.09    +0.52%  +1.36%  프록시    \n2026-08-14  STOXX 600 (proxy:…  92.37     -0.01%  +0.08%  프록시    \n2026-08-14  Nikkei 225          68713.80  +0.59%  +2.60%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-13  UST 2Y   4.15%  -5.0bp  확인     \n2026-08-13  UST 5Y   4.32%  -6.0bp  확인     \n2026-08-13  UST 10Y  4.63%  -5.0bp  확인     \n2026-08-13  UST 30Y  5.21%  -3.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인     \n2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인     \n2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-11  WTI                84.77   +1.21%  +7.47%  확인     \n2026-08-11  Brent              93.26   +0.56%  +4.03%  확인     \n2026-08-14  Gold (proxy: GLD)  401.48  +0.63%  +0.13%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-13  VIX  14.63  +0.55%  -5.37%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 발생 (기준일: 2026-08-17)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260816.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-16",
      "trigger": "발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-16T06:53:54+09:00",
      "size": 4658,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-14  SG CTA Trend Index (p…  101.55  +0.73%  +0.39%  +3.25%  0.69  프록시    \n2026-08-14  SG Short-Term Traders…  31.35   +0.10%  +0.06%  +1.36%  0.07  프록시    \n2026-08-14  Barclay BTOP50 (proxy…  105.79  +0.64%  +0.57%  +2.33%  0.83  프록시    \n2026-08-14  DBMF ETF                31.35   +0.10%  +0.06%  +1.36%  0.07  프록시    \n2026-08-14  KMLM ETF                29.14   +1.18%  +1.08%  +3.30%  1.19  프록시    \n2026-08-14  Simplify CTA ETF (pro…  27.19   +0.93%  +0.04%  +5.10%  0.54  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인     \n2026-08-11  USD Index (DX)  5,772       +1,923    +50.0%  +0.46  ❌        확인     \n2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인     \n2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인     \n2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인     \n2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 발생 (기준일: 2026-08-16)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-14  S&P 500             7785.76   -0.17%  +0.74%  확인     \n2026-08-14  Nasdaq 100          30046.14  -0.13%  +1.76%  확인     \n2026-08-14  Dow                 53732.41  -0.20%  -0.11%  확인     \n2026-08-14  Russell 2000        305.09    +0.52%  +1.36%  프록시    \n2026-08-14  STOXX 600 (proxy:…  92.37     -0.01%  +0.08%  프록시    \n2026-08-14  Nikkei 225          68713.80  +0.59%  +2.60%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-13  UST 2Y   4.15%  -5.0bp  확인     \n2026-08-13  UST 5Y   4.32%  -6.0bp  확인     \n2026-08-13  UST 10Y  4.63%  -5.0bp  확인     \n2026-08-13  UST 30Y  5.21%  -3.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인     \n2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인     \n2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-11  WTI                84.77   +1.21%  +7.47%  확인     \n2026-08-11  Brent              93.26   +0.56%  +4.03%  확인     \n2026-08-14  Gold (proxy: GLD)  401.48  +0.63%  +0.13%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-13  VIX  14.63  +0.55%  -5.37%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 발생 (기준일: 2026-08-16)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-14  SG Short-Term Traders…  31.35   +0.10%  +0.06%  +1.36%  0.07  프록시",
              "2026-08-14  Barclay BTOP50 (proxy…  105.79  +0.64%  +0.57%  +2.33%  0.83  프록시",
              "2026-08-14  DBMF ETF                31.35   +0.10%  +0.06%  +1.36%  0.07  프록시",
              "2026-08-14  KMLM ETF                29.14   +1.18%  +1.08%  +3.30%  1.19  프록시",
              "2026-08-14  Simplify CTA ETF (pro…  27.19   +0.93%  +0.04%  +5.10%  0.54  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인",
              "2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인",
              "2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인",
              "2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인",
              "2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-14  S&P 500             7785.76   -0.17%  +0.74%  확인",
              "2026-08-14  Nasdaq 100          30046.14  -0.13%  +1.76%  확인",
              "2026-08-14  Dow                 53732.41  -0.20%  -0.11%  확인",
              "2026-08-14  Russell 2000        305.09    +0.52%  +1.36%  프록시",
              "2026-08-14  STOXX 600 (proxy:…  92.37     -0.01%  +0.08%  프록시",
              "2026-08-14  Nikkei 225          68713.80  +0.59%  +2.60%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-13  UST 2Y   4.15%  -5.0bp  확인",
              "2026-08-13  UST 5Y   4.32%  -6.0bp  확인",
              "2026-08-13  UST 10Y  4.63%  -5.0bp  확인",
              "2026-08-13  UST 30Y  5.21%  -3.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인",
              "2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인",
              "2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-11  WTI                84.77   +1.21%  +7.47%  확인",
              "2026-08-11  Brent              93.26   +0.56%  +4.03%  확인",
              "2026-08-14  Gold (proxy: GLD)  401.48  +0.63%  +0.13%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-13  VIX  14.63  +0.55%  -5.37%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-14  SG CTA Trend Index (p…  101.55  +0.73%  +0.39%  +3.25%  0.69  프록시    \n2026-08-14  SG Short-Term Traders…  31.35   +0.10%  +0.06%  +1.36%  0.07  프록시    \n2026-08-14  Barclay BTOP50 (proxy…  105.79  +0.64%  +0.57%  +2.33%  0.83  프록시    \n2026-08-14  DBMF ETF                31.35   +0.10%  +0.06%  +1.36%  0.07  프록시    \n2026-08-14  KMLM ETF                29.14   +1.18%  +1.08%  +3.30%  1.19  프록시    \n2026-08-14  Simplify CTA ETF (pro…  27.19   +0.93%  +0.04%  +5.10%  0.54  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인     \n2026-08-11  USD Index (DX)  5,772       +1,923    +50.0%  +0.46  ❌        확인     \n2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인     \n2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인     \n2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인     \n2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 발생 (기준일: 2026-08-16)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-14  S&P 500             7785.76   -0.17%  +0.74%  확인     \n2026-08-14  Nasdaq 100          30046.14  -0.13%  +1.76%  확인     \n2026-08-14  Dow                 53732.41  -0.20%  -0.11%  확인     \n2026-08-14  Russell 2000        305.09    +0.52%  +1.36%  프록시    \n2026-08-14  STOXX 600 (proxy:…  92.37     -0.01%  +0.08%  프록시    \n2026-08-14  Nikkei 225          68713.80  +0.59%  +2.60%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-13  UST 2Y   4.15%  -5.0bp  확인     \n2026-08-13  UST 5Y   4.32%  -6.0bp  확인     \n2026-08-13  UST 10Y  4.63%  -5.0bp  확인     \n2026-08-13  UST 30Y  5.21%  -3.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인     \n2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인     \n2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-11  WTI                84.77   +1.21%  +7.47%  확인     \n2026-08-11  Brent              93.26   +0.56%  +4.03%  확인     \n2026-08-14  Gold (proxy: GLD)  401.48  +0.63%  +0.13%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-13  VIX  14.63  +0.55%  -5.37%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 발생 (기준일: 2026-08-16)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260815.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-15",
      "trigger": "발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-15T06:53:51+09:00",
      "size": 4658,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-14  SG CTA Trend Index (p…  101.53  +0.72%  +0.37%  +3.23%  0.67  프록시    \n2026-08-14  SG Short-Term Traders…  31.36   +0.13%  +0.10%  +1.39%  0.12  프록시    \n2026-08-14  Barclay BTOP50 (proxy…  105.78  +0.63%  +0.56%  +2.31%  0.81  프록시    \n2026-08-14  DBMF ETF                31.36   +0.13%  +0.10%  +1.39%  0.12  프록시    \n2026-08-14  KMLM ETF                29.12   +1.13%  +1.02%  +3.24%  1.14  프록시    \n2026-08-14  Simplify CTA ETF (pro…  27.18   +0.89%  +0.00%  +5.06%  0.52  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인     \n2026-08-11  USD Index (DX)  5,772       +1,923    +50.0%  +0.46  ❌        확인     \n2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인     \n2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인     \n2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인     \n2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 발생 (기준일: 2026-08-15)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-13  S&P 500             7798.99   +0.65%  +0.59%  확인     \n2026-08-13  Nasdaq 100          30084.50  +1.15%  +1.56%  확인     \n2026-08-13  Dow                 53839.99  +0.13%  -0.25%  확인     \n2026-08-14  Russell 2000        305.06    +0.51%  +1.35%  프록시    \n2026-08-14  STOXX 600 (proxy:…  92.37     -0.01%  +0.08%  프록시    \n2026-08-14  Nikkei 225          68713.80  +0.59%  +2.60%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-13  UST 2Y   4.15%  -5.0bp  확인     \n2026-08-13  UST 5Y   4.32%  -6.0bp  확인     \n2026-08-13  UST 10Y  4.63%  -5.0bp  확인     \n2026-08-13  UST 30Y  5.21%  -3.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인     \n2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인     \n2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-11  WTI                84.77   +1.21%  +7.47%  확인     \n2026-08-11  Brent              93.26   +0.56%  +4.03%  확인     \n2026-08-14  Gold (proxy: GLD)  401.48  +0.63%  +0.13%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-13  VIX  14.63  +0.55%  -5.37%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 발생 (기준일: 2026-08-15)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-14  SG Short-Term Traders…  31.36   +0.13%  +0.10%  +1.39%  0.12  프록시",
              "2026-08-14  Barclay BTOP50 (proxy…  105.78  +0.63%  +0.56%  +2.31%  0.81  프록시",
              "2026-08-14  DBMF ETF                31.36   +0.13%  +0.10%  +1.39%  0.12  프록시",
              "2026-08-14  KMLM ETF                29.12   +1.13%  +1.02%  +3.24%  1.14  프록시",
              "2026-08-14  Simplify CTA ETF (pro…  27.18   +0.89%  +0.00%  +5.06%  0.52  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인",
              "2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인",
              "2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인",
              "2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인",
              "2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-13  S&P 500             7798.99   +0.65%  +0.59%  확인",
              "2026-08-13  Nasdaq 100          30084.50  +1.15%  +1.56%  확인",
              "2026-08-13  Dow                 53839.99  +0.13%  -0.25%  확인",
              "2026-08-14  Russell 2000        305.06    +0.51%  +1.35%  프록시",
              "2026-08-14  STOXX 600 (proxy:…  92.37     -0.01%  +0.08%  프록시",
              "2026-08-14  Nikkei 225          68713.80  +0.59%  +2.60%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-13  UST 2Y   4.15%  -5.0bp  확인",
              "2026-08-13  UST 5Y   4.32%  -6.0bp  확인",
              "2026-08-13  UST 10Y  4.63%  -5.0bp  확인",
              "2026-08-13  UST 30Y  5.21%  -3.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인",
              "2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인",
              "2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-11  WTI                84.77   +1.21%  +7.47%  확인",
              "2026-08-11  Brent              93.26   +0.56%  +4.03%  확인",
              "2026-08-14  Gold (proxy: GLD)  401.48  +0.63%  +0.13%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-13  VIX  14.63  +0.55%  -5.37%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-14  SG CTA Trend Index (p…  101.53  +0.72%  +0.37%  +3.23%  0.67  프록시    \n2026-08-14  SG Short-Term Traders…  31.36   +0.13%  +0.10%  +1.39%  0.12  프록시    \n2026-08-14  Barclay BTOP50 (proxy…  105.78  +0.63%  +0.56%  +2.31%  0.81  프록시    \n2026-08-14  DBMF ETF                31.36   +0.13%  +0.10%  +1.39%  0.12  프록시    \n2026-08-14  KMLM ETF                29.12   +1.13%  +1.02%  +3.24%  1.14  프록시    \n2026-08-14  Simplify CTA ETF (pro…  27.18   +0.89%  +0.00%  +5.06%  0.52  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %       Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ------  -----  -------  -------\n2026-08-11  S&P 500 (ES)    6,187       -160,503  -96.3%  -0.68  ❌        확인     \n2026-08-11  USD Index (DX)  5,772       +1,923    +50.0%  +0.46  ❌        확인     \n2026-08-11  UST 10Y         -128,917    -1,840    -1.4%   +0.01  ❌        확인     \n2026-08-11  UST 2Y          78,906      -337      -0.4%   -0.31  ❌        확인     \n2026-08-11  UST 5Y          -21,437     -805      -3.9%   -0.07  ❌        확인     \n2026-08-11  UST 30Y         -361,727    +491,670  +57.6%  +1.12  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 발생 (기준일: 2026-08-15)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-13  S&P 500             7798.99   +0.65%  +0.59%  확인     \n2026-08-13  Nasdaq 100          30084.50  +1.15%  +1.56%  확인     \n2026-08-13  Dow                 53839.99  +0.13%  -0.25%  확인     \n2026-08-14  Russell 2000        305.06    +0.51%  +1.35%  프록시    \n2026-08-14  STOXX 600 (proxy:…  92.37     -0.01%  +0.08%  프록시    \n2026-08-14  Nikkei 225          68713.80  +0.59%  +2.60%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-13  UST 2Y   4.15%  -5.0bp  확인     \n2026-08-13  UST 5Y   4.32%  -6.0bp  확인     \n2026-08-13  UST 10Y  4.63%  -5.0bp  확인     \n2026-08-13  UST 30Y  5.21%  -3.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인     \n2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인     \n2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-11  WTI                84.77   +1.21%  +7.47%  확인     \n2026-08-11  Brent              93.26   +0.56%  +4.03%  확인     \n2026-08-14  Gold (proxy: GLD)  401.48  +0.63%  +0.13%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-13  VIX  14.63  +0.55%  -5.37%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 발생 (기준일: 2026-08-15)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260814.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger",
      "date": "2026-08-14",
      "trigger": "미발생",
      "regime": "neutral/no trigger",
      "mtime": "2026-08-14T06:53:52+09:00",
      "size": 4640,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-08-13  SG CTA Trend Index (p…  101.57  -0.52%  -0.09%  +1.73%  -0.52  프록시    \n2026-08-13  SG Short-Term Traders…  31.32   -0.35%  +0.00%  +1.23%  -0.69  프록시    \n2026-08-13  Barclay BTOP50 (proxy…  105.70  -0.36%  -0.01%  +0.94%  -0.59  프록시    \n2026-08-13  DBMF ETF                31.32   -0.35%  +0.00%  +1.23%  -0.69  프록시    \n2026-08-13  KMLM ETF                28.80   -0.36%  -0.02%  +0.65%  -0.45  프록시    \n2026-08-13  Simplify CTA ETF (pro…  26.92   -0.85%  -0.26%  +3.30%  -0.43  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인     \n2026-08-04  USD Index (DX)  3,849       +5,450    +340.4%  +1.42  ❌        확인     \n2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인     \n2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인     \n2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인     \n2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-08-14)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-12  S&P 500             7748.50   +0.26%  -0.12%  확인     \n2026-08-12  Nasdaq 100          29742.60  +0.74%  +0.07%  확인     \n2026-08-12  Dow                 53770.27  -0.04%  -0.49%  확인     \n2026-08-13  Russell 2000        303.49    +0.26%  +1.17%  프록시    \n2026-08-13  STOXX 600 (proxy:…  92.37     +0.13%  +0.12%  프록시    \n2026-08-13  Nikkei 225          68308.59  +1.16%  +4.12%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-12  UST 2Y   4.20%  -2.0bp  확인     \n2026-08-12  UST 5Y   4.38%  -1.0bp  확인     \n2026-08-12  UST 10Y  4.68%  -2.0bp  확인     \n2026-08-12  UST 30Y  5.24%  +0.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인     \n2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인     \n2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-11  WTI                84.77   +1.21%  +7.47%  확인     \n2026-08-11  Brent              93.26   +0.56%  +4.03%  확인     \n2026-08-13  Gold (proxy: GLD)  398.99  -1.46%  -0.88%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-12  VIX  14.55  -4.78%  -2.35%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 미발생 (기준일: 2026-08-14)",
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
              "2026-08-13  SG Short-Term Traders…  31.32   -0.35%  +0.00%  +1.23%  -0.69  프록시",
              "2026-08-13  Barclay BTOP50 (proxy…  105.70  -0.36%  -0.01%  +0.94%  -0.59  프록시",
              "2026-08-13  DBMF ETF                31.32   -0.35%  +0.00%  +1.23%  -0.69  프록시",
              "2026-08-13  KMLM ETF                28.80   -0.36%  -0.02%  +0.65%  -0.45  프록시",
              "2026-08-13  Simplify CTA ETF (pro…  26.92   -0.85%  -0.26%  +3.30%  -0.43  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인",
              "2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인",
              "2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인",
              "2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인",
              "2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-12  S&P 500             7748.50   +0.26%  -0.12%  확인",
              "2026-08-12  Nasdaq 100          29742.60  +0.74%  +0.07%  확인",
              "2026-08-12  Dow                 53770.27  -0.04%  -0.49%  확인",
              "2026-08-13  Russell 2000        303.49    +0.26%  +1.17%  프록시",
              "2026-08-13  STOXX 600 (proxy:…  92.37     +0.13%  +0.12%  프록시",
              "2026-08-13  Nikkei 225          68308.59  +1.16%  +4.12%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-12  UST 2Y   4.20%  -2.0bp  확인",
              "2026-08-12  UST 5Y   4.38%  -1.0bp  확인",
              "2026-08-12  UST 10Y  4.68%  -2.0bp  확인",
              "2026-08-12  UST 30Y  5.24%  +0.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인",
              "2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인",
              "2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-11  WTI                84.77   +1.21%  +7.47%  확인",
              "2026-08-11  Brent              93.26   +0.56%  +4.03%  확인",
              "2026-08-13  Gold (proxy: GLD)  398.99  -1.46%  -0.88%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-12  VIX  14.55  -4.78%  -2.35%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-08-13  SG CTA Trend Index (p…  101.57  -0.52%  -0.09%  +1.73%  -0.52  프록시    \n2026-08-13  SG Short-Term Traders…  31.32   -0.35%  +0.00%  +1.23%  -0.69  프록시    \n2026-08-13  Barclay BTOP50 (proxy…  105.70  -0.36%  -0.01%  +0.94%  -0.59  프록시    \n2026-08-13  DBMF ETF                31.32   -0.35%  +0.00%  +1.23%  -0.69  프록시    \n2026-08-13  KMLM ETF                28.80   -0.36%  -0.02%  +0.65%  -0.45  프록시    \n2026-08-13  Simplify CTA ETF (pro…  26.92   -0.85%  -0.26%  +3.30%  -0.43  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인     \n2026-08-04  USD Index (DX)  3,849       +5,450    +340.4%  +1.42  ❌        확인     \n2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인     \n2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인     \n2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인     \n2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-08-14)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-12  S&P 500             7748.50   +0.26%  -0.12%  확인     \n2026-08-12  Nasdaq 100          29742.60  +0.74%  +0.07%  확인     \n2026-08-12  Dow                 53770.27  -0.04%  -0.49%  확인     \n2026-08-13  Russell 2000        303.49    +0.26%  +1.17%  프록시    \n2026-08-13  STOXX 600 (proxy:…  92.37     +0.13%  +0.12%  프록시    \n2026-08-13  Nikkei 225          68308.59  +1.16%  +4.12%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-12  UST 2Y   4.20%  -2.0bp  확인     \n2026-08-12  UST 5Y   4.38%  -1.0bp  확인     \n2026-08-12  UST 10Y  4.68%  -2.0bp  확인     \n2026-08-12  UST 30Y  5.24%  +0.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인     \n2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인     \n2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-11  WTI                84.77   +1.21%  +7.47%  확인     \n2026-08-11  Brent              93.26   +0.56%  +4.03%  확인     \n2026-08-13  Gold (proxy: GLD)  398.99  -1.46%  -0.88%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-12  VIX  14.55  -4.78%  -2.35%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 미발생 (기준일: 2026-08-14)",
        "국면 판단: neutral/no trigger",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260813.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger",
      "date": "2026-08-13",
      "trigger": "미발생",
      "regime": "neutral/no trigger",
      "mtime": "2026-08-13T06:53:52+09:00",
      "size": 4632,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-12  SG CTA Trend Index (p…  99.31   +0.11%  +2.96%  +3.48%  0.10  프록시    \n2026-08-12  SG Short-Term Traders…  31.42   +0.29%  +1.58%  +2.35%  0.39  프록시    \n2026-08-12  Barclay BTOP50 (proxy…  104.35  +0.20%  +1.94%  +2.02%  0.21  프록시    \n2026-08-12  DBMF ETF                31.42   +0.29%  +1.58%  +2.35%  0.39  프록시    \n2026-08-12  KMLM ETF                28.86   +0.10%  +2.30%  +1.69%  0.07  프록시    \n2026-08-12  Simplify CTA ETF (pro…  27.16   -0.07%  +4.99%  +6.43%  0.01  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인     \n2026-08-04  USD Index (DX)  3,849       +5,450    +340.4%  +1.42  ❌        확인     \n2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인     \n2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인     \n2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인     \n2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-08-13)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-11  S&P 500             7728.20   -0.32%  +0.24%  확인     \n2026-08-11  Nasdaq 100          29525.48  -0.33%  +0.52%  확인     \n2026-08-11  Dow                 53791.85  -0.34%  -0.17%  확인     \n2026-08-12  Russell 2000        302.68    +0.56%  +0.37%  프록시    \n2026-08-12  STOXX 600 (proxy:…  92.25     -0.05%  -0.38%  프록시    \n2026-08-12  Nikkei 225          67524.06  +0.83%  +2.80%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-11  UST 2Y   4.22%  -3.0bp  확인     \n2026-08-11  UST 5Y   4.39%  -2.0bp  확인     \n2026-08-11  UST 10Y  4.70%  -2.0bp  확인     \n2026-08-11  UST 30Y  5.24%  -1.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인     \n2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인     \n2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-11  WTI                84.77   +1.21%  +7.47%  확인     \n2026-08-11  Brent              93.26   +0.56%  +4.03%  확인     \n2026-08-12  Gold (proxy: GLD)  404.93  +0.99%  +1.62%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-11  VIX  15.28  -1.16%  +0.86%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 미발생 (기준일: 2026-08-13)",
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
              "2026-08-12  SG Short-Term Traders…  31.42   +0.29%  +1.58%  +2.35%  0.39  프록시",
              "2026-08-12  Barclay BTOP50 (proxy…  104.35  +0.20%  +1.94%  +2.02%  0.21  프록시",
              "2026-08-12  DBMF ETF                31.42   +0.29%  +1.58%  +2.35%  0.39  프록시",
              "2026-08-12  KMLM ETF                28.86   +0.10%  +2.30%  +1.69%  0.07  프록시",
              "2026-08-12  Simplify CTA ETF (pro…  27.16   -0.07%  +4.99%  +6.43%  0.01  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인",
              "2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인",
              "2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인",
              "2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인",
              "2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-11  S&P 500             7728.20   -0.32%  +0.24%  확인",
              "2026-08-11  Nasdaq 100          29525.48  -0.33%  +0.52%  확인",
              "2026-08-11  Dow                 53791.85  -0.34%  -0.17%  확인",
              "2026-08-12  Russell 2000        302.68    +0.56%  +0.37%  프록시",
              "2026-08-12  STOXX 600 (proxy:…  92.25     -0.05%  -0.38%  프록시",
              "2026-08-12  Nikkei 225          67524.06  +0.83%  +2.80%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-11  UST 2Y   4.22%  -3.0bp  확인",
              "2026-08-11  UST 5Y   4.39%  -2.0bp  확인",
              "2026-08-11  UST 10Y  4.70%  -2.0bp  확인",
              "2026-08-11  UST 30Y  5.24%  -1.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인",
              "2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인",
              "2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-11  WTI                84.77   +1.21%  +7.47%  확인",
              "2026-08-11  Brent              93.26   +0.56%  +4.03%  확인",
              "2026-08-12  Gold (proxy: GLD)  404.93  +0.99%  +1.62%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-11  VIX  15.28  -1.16%  +0.86%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-12  SG CTA Trend Index (p…  99.31   +0.11%  +2.96%  +3.48%  0.10  프록시    \n2026-08-12  SG Short-Term Traders…  31.42   +0.29%  +1.58%  +2.35%  0.39  프록시    \n2026-08-12  Barclay BTOP50 (proxy…  104.35  +0.20%  +1.94%  +2.02%  0.21  프록시    \n2026-08-12  DBMF ETF                31.42   +0.29%  +1.58%  +2.35%  0.39  프록시    \n2026-08-12  KMLM ETF                28.86   +0.10%  +2.30%  +1.69%  0.07  프록시    \n2026-08-12  Simplify CTA ETF (pro…  27.16   -0.07%  +4.99%  +6.43%  0.01  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인     \n2026-08-04  USD Index (DX)  3,849       +5,450    +340.4%  +1.42  ❌        확인     \n2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인     \n2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인     \n2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인     \n2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-08-13)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-11  S&P 500             7728.20   -0.32%  +0.24%  확인     \n2026-08-11  Nasdaq 100          29525.48  -0.33%  +0.52%  확인     \n2026-08-11  Dow                 53791.85  -0.34%  -0.17%  확인     \n2026-08-12  Russell 2000        302.68    +0.56%  +0.37%  프록시    \n2026-08-12  STOXX 600 (proxy:…  92.25     -0.05%  -0.38%  프록시    \n2026-08-12  Nikkei 225          67524.06  +0.83%  +2.80%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-11  UST 2Y   4.22%  -3.0bp  확인     \n2026-08-11  UST 5Y   4.39%  -2.0bp  확인     \n2026-08-11  UST 10Y  4.70%  -2.0bp  확인     \n2026-08-11  UST 30Y  5.24%  -1.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인     \n2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인     \n2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-11  WTI                84.77   +1.21%  +7.47%  확인     \n2026-08-11  Brent              93.26   +0.56%  +4.03%  확인     \n2026-08-12  Gold (proxy: GLD)  404.93  +0.99%  +1.62%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-11  VIX  15.28  -1.16%  +0.86%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 미발생 (기준일: 2026-08-13)",
        "국면 판단: neutral/no trigger",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260812.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger",
      "date": "2026-08-12",
      "trigger": "미발생",
      "regime": "neutral/no trigger",
      "mtime": "2026-08-12T06:53:51+09:00",
      "size": 4640,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-08-11  SG CTA Trend Index (p…  98.93   +0.28%  +2.10%  +3.51%  0.26   프록시    \n2026-08-11  SG Short-Term Traders…  31.32   +0.02%  +1.24%  +2.07%  -0.03  프록시    \n2026-08-11  Barclay BTOP50 (proxy…  103.62  +0.03%  +0.98%  +1.86%  -0.01  프록시    \n2026-08-11  DBMF ETF                31.32   +0.02%  +1.24%  +2.07%  -0.03  프록시    \n2026-08-11  KMLM ETF                28.82   +0.05%  +0.72%  +1.64%  0.01   프록시    \n2026-08-11  Simplify CTA ETF (pro…  27.20   +0.76%  +4.36%  +6.86%  0.45   프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인     \n2026-08-04  USD Index (DX)  3,849       +5,450    +340.4%  +1.42  ❌        확인     \n2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인     \n2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인     \n2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인     \n2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-08-12)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-10  S&P 500             7753.11   -0.06%  +0.38%  확인     \n2026-08-10  Nasdaq 100          29621.80  -0.34%  +0.45%  확인     \n2026-08-10  Dow                 53975.98  -0.11%  -0.69%  확인     \n2026-08-11  Russell 2000        301.03    +0.35%  +0.93%  프록시    \n2026-08-11  STOXX 600 (proxy:…  92.30     +0.04%  +0.51%  프록시    \n2026-08-10  Nikkei 225          66970.22  +2.08%  +1.01%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-10  UST 2Y   4.25%  +6.0bp  확인     \n2026-08-10  UST 5Y   4.41%  +6.0bp  확인     \n2026-08-10  UST 10Y  4.72%  +7.0bp  확인     \n2026-08-10  UST 30Y  5.25%  +6.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인     \n2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인     \n2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-03  WTI                81.96   -4.87%  -4.79%  확인     \n2026-08-03  Brent              88.90   -8.30%  -3.32%  확인     \n2026-08-11  Gold (proxy: GLD)  400.97  -0.39%  +2.90%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-10  VIX  15.46  +3.76%  -2.21%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 미발생 (기준일: 2026-08-12)",
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
              "2026-08-11  SG Short-Term Traders…  31.32   +0.02%  +1.24%  +2.07%  -0.03  프록시",
              "2026-08-11  Barclay BTOP50 (proxy…  103.62  +0.03%  +0.98%  +1.86%  -0.01  프록시",
              "2026-08-11  DBMF ETF                31.32   +0.02%  +1.24%  +2.07%  -0.03  프록시",
              "2026-08-11  KMLM ETF                28.82   +0.05%  +0.72%  +1.64%  0.01   프록시",
              "2026-08-11  Simplify CTA ETF (pro…  27.20   +0.76%  +4.36%  +6.86%  0.45   프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인",
              "2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인",
              "2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인",
              "2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인",
              "2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-10  S&P 500             7753.11   -0.06%  +0.38%  확인",
              "2026-08-10  Nasdaq 100          29621.80  -0.34%  +0.45%  확인",
              "2026-08-10  Dow                 53975.98  -0.11%  -0.69%  확인",
              "2026-08-11  Russell 2000        301.03    +0.35%  +0.93%  프록시",
              "2026-08-11  STOXX 600 (proxy:…  92.30     +0.04%  +0.51%  프록시",
              "2026-08-10  Nikkei 225          66970.22  +2.08%  +1.01%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-10  UST 2Y   4.25%  +6.0bp  확인",
              "2026-08-10  UST 5Y   4.41%  +6.0bp  확인",
              "2026-08-10  UST 10Y  4.72%  +7.0bp  확인",
              "2026-08-10  UST 30Y  5.25%  +6.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인",
              "2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인",
              "2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-03  WTI                81.96   -4.87%  -4.79%  확인",
              "2026-08-03  Brent              88.90   -8.30%  -3.32%  확인",
              "2026-08-11  Gold (proxy: GLD)  400.97  -0.39%  +2.90%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-10  VIX  15.46  +3.76%  -2.21%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-08-11  SG CTA Trend Index (p…  98.93   +0.28%  +2.10%  +3.51%  0.26   프록시    \n2026-08-11  SG Short-Term Traders…  31.32   +0.02%  +1.24%  +2.07%  -0.03  프록시    \n2026-08-11  Barclay BTOP50 (proxy…  103.62  +0.03%  +0.98%  +1.86%  -0.01  프록시    \n2026-08-11  DBMF ETF                31.32   +0.02%  +1.24%  +2.07%  -0.03  프록시    \n2026-08-11  KMLM ETF                28.82   +0.05%  +0.72%  +1.64%  0.01   프록시    \n2026-08-11  Simplify CTA ETF (pro…  27.20   +0.76%  +4.36%  +6.86%  0.45   프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인     \n2026-08-04  USD Index (DX)  3,849       +5,450    +340.4%  +1.42  ❌        확인     \n2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인     \n2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인     \n2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인     \n2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-08-12)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-10  S&P 500             7753.11   -0.06%  +0.38%  확인     \n2026-08-10  Nasdaq 100          29621.80  -0.34%  +0.45%  확인     \n2026-08-10  Dow                 53975.98  -0.11%  -0.69%  확인     \n2026-08-11  Russell 2000        301.03    +0.35%  +0.93%  프록시    \n2026-08-11  STOXX 600 (proxy:…  92.30     +0.04%  +0.51%  프록시    \n2026-08-10  Nikkei 225          66970.22  +2.08%  +1.01%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-10  UST 2Y   4.25%  +6.0bp  확인     \n2026-08-10  UST 5Y   4.41%  +6.0bp  확인     \n2026-08-10  UST 10Y  4.72%  +7.0bp  확인     \n2026-08-10  UST 30Y  5.25%  +6.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인     \n2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인     \n2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-03  WTI                81.96   -4.87%  -4.79%  확인     \n2026-08-03  Brent              88.90   -8.30%  -3.32%  확인     \n2026-08-11  Gold (proxy: GLD)  400.97  -0.39%  +2.90%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-10  VIX  15.46  +3.76%  -2.21%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 미발생 (기준일: 2026-08-12)",
        "국면 판단: neutral/no trigger",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260811.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-11",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-11T06:53:52+09:00",
      "size": 4680,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-10  SG CTA Trend Index (p…  97.19   +2.62%  +3.14%  +1.90%  2.52  프록시    \n2026-08-10  SG Short-Term Traders…  31.33   +1.29%  +2.05%  +2.29%  2.01  프록시    \n2026-08-10  Barclay BTOP50 (proxy…  102.03  +1.69%  +1.77%  +1.30%  2.33  프록시    \n2026-08-10  DBMF ETF                31.33   +1.29%  +2.05%  +2.29%  2.01  프록시    \n2026-08-10  KMLM ETF                28.80   +2.09%  +1.48%  +0.31%  2.17  프록시    \n2026-08-10  Simplify CTA ETF (pro…  27.03   +4.48%  +5.92%  +3.05%  2.50  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인     \n2026-08-04  USD Index (DX)  3,849       +5,450    +340.4%  +1.42  ❌        확인     \n2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인     \n2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인     \n2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인     \n2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-11)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-07  S&P 500             7757.64   +0.62%  +0.27%  확인     \n2026-08-07  Nasdaq 100          29722.30  +1.19%  -0.04%  확인     \n2026-08-07  Dow                 54036.93  +0.28%  -0.09%  확인     \n2026-08-10  Russell 2000        299.98    -0.52%  +0.07%  프록시    \n2026-08-10  STOXX 600 (proxy:…  92.27     -0.36%  +0.46%  프록시    \n2026-08-10  Nikkei 225          66970.22  +2.08%  +1.01%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-07  UST 2Y   4.19%  -6.0bp  확인     \n2026-08-07  UST 5Y   4.35%  -5.0bp  확인     \n2026-08-07  UST 10Y  4.65%  -4.0bp  확인     \n2026-08-07  UST 30Y  5.19%  -3.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인     \n2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인     \n2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-03  WTI                81.96   -4.87%  -4.79%  확인     \n2026-08-03  Brent              88.90   -8.30%  -3.32%  확인     \n2026-08-10  Gold (proxy: GLD)  402.62  +1.04%  +3.33%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-07  VIX  14.90  -1.65%  -9.70%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-11)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-10  SG Short-Term Traders…  31.33   +1.29%  +2.05%  +2.29%  2.01  프록시",
              "2026-08-10  Barclay BTOP50 (proxy…  102.03  +1.69%  +1.77%  +1.30%  2.33  프록시",
              "2026-08-10  DBMF ETF                31.33   +1.29%  +2.05%  +2.29%  2.01  프록시",
              "2026-08-10  KMLM ETF                28.80   +2.09%  +1.48%  +0.31%  2.17  프록시",
              "2026-08-10  Simplify CTA ETF (pro…  27.03   +4.48%  +5.92%  +3.05%  2.50  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인",
              "2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인",
              "2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인",
              "2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인",
              "2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-07  S&P 500             7757.64   +0.62%  +0.27%  확인",
              "2026-08-07  Nasdaq 100          29722.30  +1.19%  -0.04%  확인",
              "2026-08-07  Dow                 54036.93  +0.28%  -0.09%  확인",
              "2026-08-10  Russell 2000        299.98    -0.52%  +0.07%  프록시",
              "2026-08-10  STOXX 600 (proxy:…  92.27     -0.36%  +0.46%  프록시",
              "2026-08-10  Nikkei 225          66970.22  +2.08%  +1.01%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-07  UST 2Y   4.19%  -6.0bp  확인",
              "2026-08-07  UST 5Y   4.35%  -5.0bp  확인",
              "2026-08-07  UST 10Y  4.65%  -4.0bp  확인",
              "2026-08-07  UST 30Y  5.19%  -3.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인",
              "2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인",
              "2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-03  WTI                81.96   -4.87%  -4.79%  확인",
              "2026-08-03  Brent              88.90   -8.30%  -3.32%  확인",
              "2026-08-10  Gold (proxy: GLD)  402.62  +1.04%  +3.33%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-07  VIX  14.90  -1.65%  -9.70%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-10  SG CTA Trend Index (p…  97.19   +2.62%  +3.14%  +1.90%  2.52  프록시    \n2026-08-10  SG Short-Term Traders…  31.33   +1.29%  +2.05%  +2.29%  2.01  프록시    \n2026-08-10  Barclay BTOP50 (proxy…  102.03  +1.69%  +1.77%  +1.30%  2.33  프록시    \n2026-08-10  DBMF ETF                31.33   +1.29%  +2.05%  +2.29%  2.01  프록시    \n2026-08-10  KMLM ETF                28.80   +2.09%  +1.48%  +0.31%  2.17  프록시    \n2026-08-10  Simplify CTA ETF (pro…  27.03   +4.48%  +5.92%  +3.05%  2.50  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인     \n2026-08-04  USD Index (DX)  3,849       +5,450    +340.4%  +1.42  ❌        확인     \n2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인     \n2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인     \n2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인     \n2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-11)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-07  S&P 500             7757.64   +0.62%  +0.27%  확인     \n2026-08-07  Nasdaq 100          29722.30  +1.19%  -0.04%  확인     \n2026-08-07  Dow                 54036.93  +0.28%  -0.09%  확인     \n2026-08-10  Russell 2000        299.98    -0.52%  +0.07%  프록시    \n2026-08-10  STOXX 600 (proxy:…  92.27     -0.36%  +0.46%  프록시    \n2026-08-10  Nikkei 225          66970.22  +2.08%  +1.01%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-07  UST 2Y   4.19%  -6.0bp  확인     \n2026-08-07  UST 5Y   4.35%  -5.0bp  확인     \n2026-08-07  UST 10Y  4.65%  -4.0bp  확인     \n2026-08-07  UST 30Y  5.19%  -3.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-08-07  DXY (proxy: DTWEX…  119.06  -0.37%  -0.45%  확인     \n2026-08-07  EURUSD              1.16    +0.33%  +0.28%  확인     \n2026-08-07  USDJPY              157.54  -0.57%  +0.06%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-03  WTI                81.96   -4.87%  -4.79%  확인     \n2026-08-03  Brent              88.90   -8.30%  -3.32%  확인     \n2026-08-10  Gold (proxy: GLD)  402.62  +1.04%  +3.33%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-07  VIX  14.90  -1.65%  -9.70%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-11)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260810.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-10",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-10T06:53:53+09:00",
      "size": 4680,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  -----  ------  ------  ------  -----  -------\n2026-08-07  SG CTA Trend Index (p…  94.57  -0.72%  +0.65%  -2.80%  -0.64  프록시    \n2026-08-07  SG Short-Term Traders…  30.93  -0.03%  +0.78%  +0.03%  -0.05  프록시    \n2026-08-07  Barclay BTOP50 (proxy…  99.81  -0.72%  +0.14%  -1.87%  -1.00  프록시    \n2026-08-07  DBMF ETF                30.93  -0.03%  +0.78%  +0.03%  -0.05  프록시    \n2026-08-07  KMLM ETF                28.21  -1.40%  -0.49%  -3.75%  -1.49  프록시    \n2026-08-07  Simplify CTA ETF (pro…  25.87  -0.73%  +1.65%  -4.68%  -0.31  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인     \n2026-08-04  USD Index (DX)  3,849       +5,450    +340.4%  +1.42  ❌        확인     \n2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인     \n2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인     \n2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인     \n2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-10)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-07  S&P 500             7757.64   +0.62%  +0.27%  확인     \n2026-08-07  Nasdaq 100          29722.30  +1.19%  -0.04%  확인     \n2026-08-07  Dow                 54036.93  +0.28%  -0.09%  확인     \n2026-08-07  Russell 2000        301.56    +1.11%  -0.05%  프록시    \n2026-08-07  STOXX 600 (proxy:…  92.60     +0.84%  +0.83%  프록시    \n2026-08-07  Nikkei 225          65606.71  -0.12%  +2.58%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-06  UST 2Y   4.25%  +7.0bp  확인     \n2026-08-06  UST 5Y   4.40%  +7.0bp  확인     \n2026-08-06  UST 10Y  4.69%  +6.0bp  확인     \n2026-08-06  UST 30Y  5.22%  +5.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인     \n2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인     \n2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-03  WTI                81.96   -4.87%  -4.79%  확인     \n2026-08-03  Brent              88.90   -8.30%  -3.32%  확인     \n2026-08-07  Gold (proxy: GLD)  398.47  +2.26%  +6.50%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-06  VIX  15.15  -4.17%  -4.48%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-10)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-07  SG Short-Term Traders…  30.93  -0.03%  +0.78%  +0.03%  -0.05  프록시",
              "2026-08-07  Barclay BTOP50 (proxy…  99.81  -0.72%  +0.14%  -1.87%  -1.00  프록시",
              "2026-08-07  DBMF ETF                30.93  -0.03%  +0.78%  +0.03%  -0.05  프록시",
              "2026-08-07  KMLM ETF                28.21  -1.40%  -0.49%  -3.75%  -1.49  프록시",
              "2026-08-07  Simplify CTA ETF (pro…  25.87  -0.73%  +1.65%  -4.68%  -0.31  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인",
              "2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인",
              "2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인",
              "2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인",
              "2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-07  S&P 500             7757.64   +0.62%  +0.27%  확인",
              "2026-08-07  Nasdaq 100          29722.30  +1.19%  -0.04%  확인",
              "2026-08-07  Dow                 54036.93  +0.28%  -0.09%  확인",
              "2026-08-07  Russell 2000        301.56    +1.11%  -0.05%  프록시",
              "2026-08-07  STOXX 600 (proxy:…  92.60     +0.84%  +0.83%  프록시",
              "2026-08-07  Nikkei 225          65606.71  -0.12%  +2.58%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-06  UST 2Y   4.25%  +7.0bp  확인",
              "2026-08-06  UST 5Y   4.40%  +7.0bp  확인",
              "2026-08-06  UST 10Y  4.69%  +6.0bp  확인",
              "2026-08-06  UST 30Y  5.22%  +5.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인",
              "2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인",
              "2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-03  WTI                81.96   -4.87%  -4.79%  확인",
              "2026-08-03  Brent              88.90   -8.30%  -3.32%  확인",
              "2026-08-07  Gold (proxy: GLD)  398.47  +2.26%  +6.50%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-06  VIX  15.15  -4.17%  -4.48%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  -----  ------  ------  ------  -----  -------\n2026-08-07  SG CTA Trend Index (p…  94.57  -0.72%  +0.65%  -2.80%  -0.64  프록시    \n2026-08-07  SG Short-Term Traders…  30.93  -0.03%  +0.78%  +0.03%  -0.05  프록시    \n2026-08-07  Barclay BTOP50 (proxy…  99.81  -0.72%  +0.14%  -1.87%  -1.00  프록시    \n2026-08-07  DBMF ETF                30.93  -0.03%  +0.78%  +0.03%  -0.05  프록시    \n2026-08-07  KMLM ETF                28.21  -1.40%  -0.49%  -3.75%  -1.49  프록시    \n2026-08-07  Simplify CTA ETF (pro…  25.87  -0.73%  +1.65%  -4.68%  -0.31  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인     \n2026-08-04  USD Index (DX)  3,849       +5,450    +340.4%  +1.42  ❌        확인     \n2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인     \n2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인     \n2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인     \n2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-10)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-07  S&P 500             7757.64   +0.62%  +0.27%  확인     \n2026-08-07  Nasdaq 100          29722.30  +1.19%  -0.04%  확인     \n2026-08-07  Dow                 54036.93  +0.28%  -0.09%  확인     \n2026-08-07  Russell 2000        301.56    +1.11%  -0.05%  프록시    \n2026-08-07  STOXX 600 (proxy:…  92.60     +0.84%  +0.83%  프록시    \n2026-08-07  Nikkei 225          65606.71  -0.12%  +2.58%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-06  UST 2Y   4.25%  +7.0bp  확인     \n2026-08-06  UST 5Y   4.40%  +7.0bp  확인     \n2026-08-06  UST 10Y  4.69%  +6.0bp  확인     \n2026-08-06  UST 30Y  5.22%  +5.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인     \n2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인     \n2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-03  WTI                81.96   -4.87%  -4.79%  확인     \n2026-08-03  Brent              88.90   -8.30%  -3.32%  확인     \n2026-08-07  Gold (proxy: GLD)  398.47  +2.26%  +6.50%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-06  VIX  15.15  -4.17%  -4.48%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-10)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260809.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-09",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-09T06:53:54+09:00",
      "size": 4680,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  -----  ------  ------  ------  -----  -------\n2026-08-07  SG CTA Trend Index (p…  94.57  -0.72%  +0.65%  -2.80%  -0.64  프록시    \n2026-08-07  SG Short-Term Traders…  30.93  -0.03%  +0.78%  +0.03%  -0.05  프록시    \n2026-08-07  Barclay BTOP50 (proxy…  99.81  -0.72%  +0.14%  -1.87%  -1.00  프록시    \n2026-08-07  DBMF ETF                30.93  -0.03%  +0.78%  +0.03%  -0.05  프록시    \n2026-08-07  KMLM ETF                28.21  -1.40%  -0.49%  -3.75%  -1.49  프록시    \n2026-08-07  Simplify CTA ETF (pro…  25.87  -0.73%  +1.65%  -4.68%  -0.31  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인     \n2026-08-04  USD Index (DX)  3,849       +5,450    +340.4%  +1.42  ❌        확인     \n2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인     \n2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인     \n2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인     \n2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-09)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-07  S&P 500             7757.64   +0.62%  +0.27%  확인     \n2026-08-07  Nasdaq 100          29722.30  +1.19%  -0.04%  확인     \n2026-08-07  Dow                 54036.93  +0.28%  -0.09%  확인     \n2026-08-07  Russell 2000        301.56    +1.11%  -0.05%  프록시    \n2026-08-07  STOXX 600 (proxy:…  92.60     +0.84%  +0.83%  프록시    \n2026-08-07  Nikkei 225          65606.71  -0.12%  +2.58%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-06  UST 2Y   4.25%  +7.0bp  확인     \n2026-08-06  UST 5Y   4.40%  +7.0bp  확인     \n2026-08-06  UST 10Y  4.69%  +6.0bp  확인     \n2026-08-06  UST 30Y  5.22%  +5.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인     \n2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인     \n2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-03  WTI                81.96   -4.87%  -4.79%  확인     \n2026-08-03  Brent              88.90   -8.30%  -3.32%  확인     \n2026-08-07  Gold (proxy: GLD)  398.47  +2.26%  +6.50%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-06  VIX  15.15  -4.17%  -4.48%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-09)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-07  SG Short-Term Traders…  30.93  -0.03%  +0.78%  +0.03%  -0.05  프록시",
              "2026-08-07  Barclay BTOP50 (proxy…  99.81  -0.72%  +0.14%  -1.87%  -1.00  프록시",
              "2026-08-07  DBMF ETF                30.93  -0.03%  +0.78%  +0.03%  -0.05  프록시",
              "2026-08-07  KMLM ETF                28.21  -1.40%  -0.49%  -3.75%  -1.49  프록시",
              "2026-08-07  Simplify CTA ETF (pro…  25.87  -0.73%  +1.65%  -4.68%  -0.31  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인",
              "2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인",
              "2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인",
              "2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인",
              "2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-07  S&P 500             7757.64   +0.62%  +0.27%  확인",
              "2026-08-07  Nasdaq 100          29722.30  +1.19%  -0.04%  확인",
              "2026-08-07  Dow                 54036.93  +0.28%  -0.09%  확인",
              "2026-08-07  Russell 2000        301.56    +1.11%  -0.05%  프록시",
              "2026-08-07  STOXX 600 (proxy:…  92.60     +0.84%  +0.83%  프록시",
              "2026-08-07  Nikkei 225          65606.71  -0.12%  +2.58%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-06  UST 2Y   4.25%  +7.0bp  확인",
              "2026-08-06  UST 5Y   4.40%  +7.0bp  확인",
              "2026-08-06  UST 10Y  4.69%  +6.0bp  확인",
              "2026-08-06  UST 30Y  5.22%  +5.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인",
              "2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인",
              "2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-03  WTI                81.96   -4.87%  -4.79%  확인",
              "2026-08-03  Brent              88.90   -8.30%  -3.32%  확인",
              "2026-08-07  Gold (proxy: GLD)  398.47  +2.26%  +6.50%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-06  VIX  15.15  -4.17%  -4.48%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  -----  ------  ------  ------  -----  -------\n2026-08-07  SG CTA Trend Index (p…  94.57  -0.72%  +0.65%  -2.80%  -0.64  프록시    \n2026-08-07  SG Short-Term Traders…  30.93  -0.03%  +0.78%  +0.03%  -0.05  프록시    \n2026-08-07  Barclay BTOP50 (proxy…  99.81  -0.72%  +0.14%  -1.87%  -1.00  프록시    \n2026-08-07  DBMF ETF                30.93  -0.03%  +0.78%  +0.03%  -0.05  프록시    \n2026-08-07  KMLM ETF                28.21  -1.40%  -0.49%  -3.75%  -1.49  프록시    \n2026-08-07  Simplify CTA ETF (pro…  25.87  -0.73%  +1.65%  -4.68%  -0.31  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인     \n2026-08-04  USD Index (DX)  3,849       +5,450    +340.4%  +1.42  ❌        확인     \n2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인     \n2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인     \n2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인     \n2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-09)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-07  S&P 500             7757.64   +0.62%  +0.27%  확인     \n2026-08-07  Nasdaq 100          29722.30  +1.19%  -0.04%  확인     \n2026-08-07  Dow                 54036.93  +0.28%  -0.09%  확인     \n2026-08-07  Russell 2000        301.56    +1.11%  -0.05%  프록시    \n2026-08-07  STOXX 600 (proxy:…  92.60     +0.84%  +0.83%  프록시    \n2026-08-07  Nikkei 225          65606.71  -0.12%  +2.58%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-06  UST 2Y   4.25%  +7.0bp  확인     \n2026-08-06  UST 5Y   4.40%  +7.0bp  확인     \n2026-08-06  UST 10Y  4.69%  +6.0bp  확인     \n2026-08-06  UST 30Y  5.22%  +5.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인     \n2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인     \n2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-03  WTI                81.96   -4.87%  -4.79%  확인     \n2026-08-03  Brent              88.90   -8.30%  -3.32%  확인     \n2026-08-07  Gold (proxy: GLD)  398.47  +2.26%  +6.50%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-06  VIX  15.15  -4.17%  -4.48%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-09)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260808.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-08",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-08T06:53:53+09:00",
      "size": 4680,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  -----  ------  ------  ------  -----  -------\n2026-08-07  SG CTA Trend Index (p…  94.60  -0.69%  +0.67%  -2.78%  -0.61  프록시    \n2026-08-07  SG Short-Term Traders…  30.92  -0.06%  +0.75%  +0.00%  -0.10  프록시    \n2026-08-07  Barclay BTOP50 (proxy…  99.82  -0.71%  +0.15%  -1.86%  -0.99  프록시    \n2026-08-07  DBMF ETF                30.92  -0.06%  +0.75%  +0.00%  -0.10  프록시    \n2026-08-07  KMLM ETF                28.23  -1.35%  -0.44%  -3.70%  -1.44  프록시    \n2026-08-07  Simplify CTA ETF (pro…  25.89  -0.67%  +1.71%  -4.62%  -0.28  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인     \n2026-08-04  USD Index (DX)  3,849       +5,450    +340.4%  +1.42  ❌        확인     \n2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인     \n2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인     \n2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인     \n2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-08)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-06  S&P 500             7709.96   -0.18%  +1.44%  확인     \n2026-08-06  Nasdaq 100          29373.33  -0.39%  +2.07%  확인     \n2026-08-06  Dow                 53885.10  -0.85%  +1.33%  확인     \n2026-08-07  Russell 2000        301.53    +1.10%  -0.06%  프록시    \n2026-08-07  STOXX 600 (proxy:…  92.61     +0.85%  +0.84%  프록시    \n2026-08-07  Nikkei 225          65606.71  -0.12%  +2.58%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-06  UST 2Y   4.25%  +7.0bp  확인     \n2026-08-06  UST 5Y   4.40%  +7.0bp  확인     \n2026-08-06  UST 10Y  4.69%  +6.0bp  확인     \n2026-08-06  UST 30Y  5.22%  +5.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인     \n2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인     \n2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-03  WTI                81.96   -4.87%  -4.79%  확인     \n2026-08-03  Brent              88.90   -8.30%  -3.32%  확인     \n2026-08-07  Gold (proxy: GLD)  398.49  +2.26%  +6.50%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-06  VIX  15.15  -4.17%  -4.48%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-08)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-07  SG Short-Term Traders…  30.92  -0.06%  +0.75%  +0.00%  -0.10  프록시",
              "2026-08-07  Barclay BTOP50 (proxy…  99.82  -0.71%  +0.15%  -1.86%  -0.99  프록시",
              "2026-08-07  DBMF ETF                30.92  -0.06%  +0.75%  +0.00%  -0.10  프록시",
              "2026-08-07  KMLM ETF                28.23  -1.35%  -0.44%  -3.70%  -1.44  프록시",
              "2026-08-07  Simplify CTA ETF (pro…  25.89  -0.67%  +1.71%  -4.62%  -0.28  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인",
              "2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인",
              "2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인",
              "2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인",
              "2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-06  S&P 500             7709.96   -0.18%  +1.44%  확인",
              "2026-08-06  Nasdaq 100          29373.33  -0.39%  +2.07%  확인",
              "2026-08-06  Dow                 53885.10  -0.85%  +1.33%  확인",
              "2026-08-07  Russell 2000        301.53    +1.10%  -0.06%  프록시",
              "2026-08-07  STOXX 600 (proxy:…  92.61     +0.85%  +0.84%  프록시",
              "2026-08-07  Nikkei 225          65606.71  -0.12%  +2.58%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-06  UST 2Y   4.25%  +7.0bp  확인",
              "2026-08-06  UST 5Y   4.40%  +7.0bp  확인",
              "2026-08-06  UST 10Y  4.69%  +6.0bp  확인",
              "2026-08-06  UST 30Y  5.22%  +5.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인",
              "2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인",
              "2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-03  WTI                81.96   -4.87%  -4.79%  확인",
              "2026-08-03  Brent              88.90   -8.30%  -3.32%  확인",
              "2026-08-07  Gold (proxy: GLD)  398.49  +2.26%  +6.50%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-06  VIX  15.15  -4.17%  -4.48%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value  D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  -----  ------  ------  ------  -----  -------\n2026-08-07  SG CTA Trend Index (p…  94.60  -0.69%  +0.67%  -2.78%  -0.61  프록시    \n2026-08-07  SG Short-Term Traders…  30.92  -0.06%  +0.75%  +0.00%  -0.10  프록시    \n2026-08-07  Barclay BTOP50 (proxy…  99.82  -0.71%  +0.15%  -1.86%  -0.99  프록시    \n2026-08-07  DBMF ETF                30.92  -0.06%  +0.75%  +0.00%  -0.10  프록시    \n2026-08-07  KMLM ETF                28.23  -1.35%  -0.44%  -3.70%  -1.44  프록시    \n2026-08-07  Simplify CTA ETF (pro…  25.89  -0.67%  +1.71%  -4.62%  -0.28  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-08-04  S&P 500 (ES)    5,637       -165,703  -96.7%   -0.70  ❌        확인     \n2026-08-04  USD Index (DX)  3,849       +5,450    +340.4%  +1.42  ❌        확인     \n2026-08-04  UST 10Y         -127,077    -1,066    -0.8%    +0.01  ❌        확인     \n2026-08-04  UST 2Y          79,243      +25,236   +46.7%   +2.07  ❌        확인     \n2026-08-04  UST 5Y          -20,632     +20,087   +49.3%   +3.02  ❌        확인     \n2026-08-04  UST 30Y         -419,861    +429,829  +50.6%   +0.98  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-08)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-06  S&P 500             7709.96   -0.18%  +1.44%  확인     \n2026-08-06  Nasdaq 100          29373.33  -0.39%  +2.07%  확인     \n2026-08-06  Dow                 53885.10  -0.85%  +1.33%  확인     \n2026-08-07  Russell 2000        301.53    +1.10%  -0.06%  프록시    \n2026-08-07  STOXX 600 (proxy:…  92.61     +0.85%  +0.84%  프록시    \n2026-08-07  Nikkei 225          65606.71  -0.12%  +2.58%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-06  UST 2Y   4.25%  +7.0bp  확인     \n2026-08-06  UST 5Y   4.40%  +7.0bp  확인     \n2026-08-06  UST 10Y  4.69%  +6.0bp  확인     \n2026-08-06  UST 30Y  5.22%  +5.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인     \n2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인     \n2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-03  WTI                81.96   -4.87%  -4.79%  확인     \n2026-08-03  Brent              88.90   -8.30%  -3.32%  확인     \n2026-08-07  Gold (proxy: GLD)  398.49  +2.26%  +6.50%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-06  VIX  15.15  -4.17%  -4.48%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-08)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260807.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-07",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-07T06:53:53+09:00",
      "size": 4680,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-06  SG CTA Trend Index (p…  96.62   +1.19%  -0.04%  -1.85%  1.15  프록시    \n2026-08-06  SG Short-Term Traders…  30.94   +0.78%  +1.01%  +0.32%  1.21  프록시    \n2026-08-06  Barclay BTOP50 (proxy…  101.44  +0.76%  +0.30%  -0.95%  1.04  프록시    \n2026-08-06  DBMF ETF                30.94   +0.78%  +1.01%  +0.32%  1.21  프록시    \n2026-08-06  KMLM ETF                28.59   +0.74%  -0.42%  -2.22%  0.76  프록시    \n2026-08-06  Simplify CTA ETF (pro…  26.04   +2.04%  -0.72%  -3.66%  1.17  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인     \n2026-07-28  USD Index (DX)  -1,601      +337      +17.4%   +0.11  ❌        확인     \n2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인     \n2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인     \n2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인     \n2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-07)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-05  S&P 500             7723.55   -0.17%  +3.12%  확인     \n2026-08-05  Nasdaq 100          29487.79  -0.83%  +4.29%  확인     \n2026-08-05  Dow                 54349.12  +0.49%  +3.55%  확인     \n2026-08-06  Russell 2000        298.23    -0.51%  +0.68%  프록시    \n2026-08-06  STOXX 600 (proxy:…  91.89     +0.04%  +1.06%  프록시    \n2026-08-06  Nikkei 225          65683.26  -0.93%  +3.02%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-05  UST 2Y   4.18%  -2.0bp  확인     \n2026-08-05  UST 5Y   4.33%  +0.0bp  확인     \n2026-08-05  UST 10Y  4.63%  +0.0bp  확인     \n2026-08-05  UST 30Y  5.17%  -1.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인     \n2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인     \n2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-03  WTI                81.96   -4.87%  -4.79%  확인     \n2026-08-03  Brent              88.90   -8.30%  -3.32%  확인     \n2026-08-06  Gold (proxy: GLD)  389.70  +0.02%  +4.84%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-05  VIX  15.81  -4.18%  -1.13%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-07)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-06  SG Short-Term Traders…  30.94   +0.78%  +1.01%  +0.32%  1.21  프록시",
              "2026-08-06  Barclay BTOP50 (proxy…  101.44  +0.76%  +0.30%  -0.95%  1.04  프록시",
              "2026-08-06  DBMF ETF                30.94   +0.78%  +1.01%  +0.32%  1.21  프록시",
              "2026-08-06  KMLM ETF                28.59   +0.74%  -0.42%  -2.22%  0.76  프록시",
              "2026-08-06  Simplify CTA ETF (pro…  26.04   +2.04%  -0.72%  -3.66%  1.17  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인",
              "2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인",
              "2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인",
              "2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인",
              "2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-05  S&P 500             7723.55   -0.17%  +3.12%  확인",
              "2026-08-05  Nasdaq 100          29487.79  -0.83%  +4.29%  확인",
              "2026-08-05  Dow                 54349.12  +0.49%  +3.55%  확인",
              "2026-08-06  Russell 2000        298.23    -0.51%  +0.68%  프록시",
              "2026-08-06  STOXX 600 (proxy:…  91.89     +0.04%  +1.06%  프록시",
              "2026-08-06  Nikkei 225          65683.26  -0.93%  +3.02%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-05  UST 2Y   4.18%  -2.0bp  확인",
              "2026-08-05  UST 5Y   4.33%  +0.0bp  확인",
              "2026-08-05  UST 10Y  4.63%  +0.0bp  확인",
              "2026-08-05  UST 30Y  5.17%  -1.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인",
              "2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인",
              "2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-03  WTI                81.96   -4.87%  -4.79%  확인",
              "2026-08-03  Brent              88.90   -8.30%  -3.32%  확인",
              "2026-08-06  Gold (proxy: GLD)  389.70  +0.02%  +4.84%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-05  VIX  15.81  -4.18%  -1.13%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-08-06  SG CTA Trend Index (p…  96.62   +1.19%  -0.04%  -1.85%  1.15  프록시    \n2026-08-06  SG Short-Term Traders…  30.94   +0.78%  +1.01%  +0.32%  1.21  프록시    \n2026-08-06  Barclay BTOP50 (proxy…  101.44  +0.76%  +0.30%  -0.95%  1.04  프록시    \n2026-08-06  DBMF ETF                30.94   +0.78%  +1.01%  +0.32%  1.21  프록시    \n2026-08-06  KMLM ETF                28.59   +0.74%  -0.42%  -2.22%  0.76  프록시    \n2026-08-06  Simplify CTA ETF (pro…  26.04   +2.04%  -0.72%  -3.66%  1.17  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인     \n2026-07-28  USD Index (DX)  -1,601      +337      +17.4%   +0.11  ❌        확인     \n2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인     \n2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인     \n2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인     \n2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-07)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-05  S&P 500             7723.55   -0.17%  +3.12%  확인     \n2026-08-05  Nasdaq 100          29487.79  -0.83%  +4.29%  확인     \n2026-08-05  Dow                 54349.12  +0.49%  +3.55%  확인     \n2026-08-06  Russell 2000        298.23    -0.51%  +0.68%  프록시    \n2026-08-06  STOXX 600 (proxy:…  91.89     +0.04%  +1.06%  프록시    \n2026-08-06  Nikkei 225          65683.26  -0.93%  +3.02%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-05  UST 2Y   4.18%  -2.0bp  확인     \n2026-08-05  UST 5Y   4.33%  +0.0bp  확인     \n2026-08-05  UST 10Y  4.63%  +0.0bp  확인     \n2026-08-05  UST 30Y  5.17%  -1.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인     \n2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인     \n2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-03  WTI                81.96   -4.87%  -4.79%  확인     \n2026-08-03  Brent              88.90   -8.30%  -3.32%  확인     \n2026-08-06  Gold (proxy: GLD)  389.70  +0.02%  +4.84%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-05  VIX  15.81  -4.18%  -1.13%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-07)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260806.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-06",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-06T06:53:53+09:00",
      "size": 4688,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-08-05  SG CTA Trend Index (p…  95.06   +0.07%  -3.36%  -3.81%  0.11   프록시    \n2026-08-05  SG Short-Term Traders…  30.70   +0.02%  -0.73%  -1.08%  0.02   프록시    \n2026-08-05  Barclay BTOP50 (proxy…  100.92  -0.04%  -2.05%  -2.62%  -0.07  프록시    \n2026-08-05  DBMF ETF                30.70   +0.02%  -0.73%  -1.08%  0.02   프록시    \n2026-08-05  KMLM ETF                28.32   -0.09%  -3.36%  -4.15%  -0.12  프록시    \n2026-08-05  Simplify CTA ETF (pro…  25.52   +0.28%  -5.97%  -6.18%  0.23   프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인     \n2026-07-28  USD Index (DX)  -1,601      +337      +17.4%   +0.11  ❌        확인     \n2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인     \n2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인     \n2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인     \n2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-06)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-04  S&P 500             7736.52   +1.79%  +4.02%  확인     \n2026-08-04  Nasdaq 100          29733.16  +3.32%  +5.79%  확인     \n2026-08-04  Dow                 54085.88  +1.71%  +3.60%  확인     \n2026-08-05  Russell 2000        299.77    -0.64%  +2.94%  프록시    \n2026-08-05  STOXX 600 (proxy:…  91.85     +0.01%  +1.39%  프록시    \n2026-08-05  Nikkei 225          66300.44  +3.66%  +3.01%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-04  UST 2Y   4.20%  -5.0bp  확인     \n2026-08-04  UST 5Y   4.33%  -7.0bp  확인     \n2026-08-04  UST 10Y  4.63%  -7.0bp  확인     \n2026-08-04  UST 30Y  5.18%  -5.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인     \n2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인     \n2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-03  WTI                81.96   -4.87%  -4.79%  확인     \n2026-08-03  Brent              88.90   -8.30%  -3.32%  확인     \n2026-08-05  Gold (proxy: GLD)  389.61  +4.13%  +4.86%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-04  VIX  16.50  +4.04%  -3.45%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-06)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-05  SG Short-Term Traders…  30.70   +0.02%  -0.73%  -1.08%  0.02   프록시",
              "2026-08-05  Barclay BTOP50 (proxy…  100.92  -0.04%  -2.05%  -2.62%  -0.07  프록시",
              "2026-08-05  DBMF ETF                30.70   +0.02%  -0.73%  -1.08%  0.02   프록시",
              "2026-08-05  KMLM ETF                28.32   -0.09%  -3.36%  -4.15%  -0.12  프록시",
              "2026-08-05  Simplify CTA ETF (pro…  25.52   +0.28%  -5.97%  -6.18%  0.23   프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인",
              "2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인",
              "2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인",
              "2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인",
              "2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-04  S&P 500             7736.52   +1.79%  +4.02%  확인",
              "2026-08-04  Nasdaq 100          29733.16  +3.32%  +5.79%  확인",
              "2026-08-04  Dow                 54085.88  +1.71%  +3.60%  확인",
              "2026-08-05  Russell 2000        299.77    -0.64%  +2.94%  프록시",
              "2026-08-05  STOXX 600 (proxy:…  91.85     +0.01%  +1.39%  프록시",
              "2026-08-05  Nikkei 225          66300.44  +3.66%  +3.01%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-04  UST 2Y   4.20%  -5.0bp  확인",
              "2026-08-04  UST 5Y   4.33%  -7.0bp  확인",
              "2026-08-04  UST 10Y  4.63%  -7.0bp  확인",
              "2026-08-04  UST 30Y  5.18%  -5.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인",
              "2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인",
              "2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-08-03  WTI                81.96   -4.87%  -4.79%  확인",
              "2026-08-03  Brent              88.90   -8.30%  -3.32%  확인",
              "2026-08-05  Gold (proxy: GLD)  389.61  +4.13%  +4.86%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-04  VIX  16.50  +4.04%  -3.45%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-08-05  SG CTA Trend Index (p…  95.06   +0.07%  -3.36%  -3.81%  0.11   프록시    \n2026-08-05  SG Short-Term Traders…  30.70   +0.02%  -0.73%  -1.08%  0.02   프록시    \n2026-08-05  Barclay BTOP50 (proxy…  100.92  -0.04%  -2.05%  -2.62%  -0.07  프록시    \n2026-08-05  DBMF ETF                30.70   +0.02%  -0.73%  -1.08%  0.02   프록시    \n2026-08-05  KMLM ETF                28.32   -0.09%  -3.36%  -4.15%  -0.12  프록시    \n2026-08-05  Simplify CTA ETF (pro…  25.52   +0.28%  -5.97%  -6.18%  0.23   프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인     \n2026-07-28  USD Index (DX)  -1,601      +337      +17.4%   +0.11  ❌        확인     \n2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인     \n2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인     \n2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인     \n2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-06)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-04  S&P 500             7736.52   +1.79%  +4.02%  확인     \n2026-08-04  Nasdaq 100          29733.16  +3.32%  +5.79%  확인     \n2026-08-04  Dow                 54085.88  +1.71%  +3.60%  확인     \n2026-08-05  Russell 2000        299.77    -0.64%  +2.94%  프록시    \n2026-08-05  STOXX 600 (proxy:…  91.85     +0.01%  +1.39%  프록시    \n2026-08-05  Nikkei 225          66300.44  +3.66%  +3.01%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-04  UST 2Y   4.20%  -5.0bp  확인     \n2026-08-04  UST 5Y   4.33%  -7.0bp  확인     \n2026-08-04  UST 10Y  4.63%  -7.0bp  확인     \n2026-08-04  UST 30Y  5.18%  -5.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인     \n2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인     \n2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-08-03  WTI                81.96   -4.87%  -4.79%  확인     \n2026-08-03  Brent              88.90   -8.30%  -3.32%  확인     \n2026-08-05  Gold (proxy: GLD)  389.61  +4.13%  +4.86%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-08-04  VIX  16.50  +4.04%  -3.45%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-06)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260805.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-05",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-05T06:53:52+09:00",
      "size": 4691,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-08-04  SG CTA Trend Index (p…  94.53   -1.31%  -3.11%  -2.43%  -1.21  프록시    \n2026-08-04  SG Short-Term Traders…  30.68   +0.18%  -0.50%  -1.14%  0.29   프록시    \n2026-08-04  Barclay BTOP50 (proxy…  100.27  -0.52%  -1.76%  -2.06%  -0.73  프록시    \n2026-08-04  DBMF ETF                30.68   +0.18%  -0.50%  -1.14%  0.29   프록시    \n2026-08-04  KMLM ETF                28.36   -1.22%  -3.01%  -2.98%  -1.32  프록시    \n2026-08-04  Simplify CTA ETF (pro…  25.47   -2.90%  -5.77%  -3.23%  -1.49  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인     \n2026-07-28  USD Index (DX)  -1,601      +337      +17.4%   +0.11  ❌        확인     \n2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인     \n2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인     \n2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인     \n2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-05)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-03  S&P 500             7600.50   +1.48%  +3.89%  확인     \n2026-08-03  Nasdaq 100          28776.80  +1.78%  +5.83%  확인     \n2026-08-03  Dow                 53178.41  +1.32%  +3.07%  확인     \n2026-08-04  Russell 2000        301.69    +1.85%  +3.11%  프록시    \n2026-08-04  STOXX 600 (proxy:…  91.86     +1.02%  +0.96%  프록시    \n2026-08-04  Nikkei 225          63957.53  +0.32%  +3.38%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-03  UST 2Y   4.25%  -3.0bp  확인     \n2026-08-03  UST 5Y   4.40%  -5.0bp  확인     \n2026-08-03  UST 10Y  4.70%  -5.0bp  확인     \n2026-08-03  UST 30Y  5.23%  -4.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인     \n2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인     \n2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-27  WTI                84.25   -8.16%  -3.89%  확인     \n2026-07-27  Brent              91.82   -8.46%  -2.44%  확인     \n2026-08-04  Gold (proxy: GLD)  374.15  +0.66%  -0.80%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3       Confirm\n----------  ---  -----  ------  -------  -------\n2026-08-03  VIX  15.86  -0.81%  -23.23%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-05)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-04  SG Short-Term Traders…  30.68   +0.18%  -0.50%  -1.14%  0.29   프록시",
              "2026-08-04  Barclay BTOP50 (proxy…  100.27  -0.52%  -1.76%  -2.06%  -0.73  프록시",
              "2026-08-04  DBMF ETF                30.68   +0.18%  -0.50%  -1.14%  0.29   프록시",
              "2026-08-04  KMLM ETF                28.36   -1.22%  -3.01%  -2.98%  -1.32  프록시",
              "2026-08-04  Simplify CTA ETF (pro…  25.47   -2.90%  -5.77%  -3.23%  -1.49  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인",
              "2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인",
              "2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인",
              "2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인",
              "2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-08-03  S&P 500             7600.50   +1.48%  +3.89%  확인",
              "2026-08-03  Nasdaq 100          28776.80  +1.78%  +5.83%  확인",
              "2026-08-03  Dow                 53178.41  +1.32%  +3.07%  확인",
              "2026-08-04  Russell 2000        301.69    +1.85%  +3.11%  프록시",
              "2026-08-04  STOXX 600 (proxy:…  91.86     +1.02%  +0.96%  프록시",
              "2026-08-04  Nikkei 225          63957.53  +0.32%  +3.38%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-08-03  UST 2Y   4.25%  -3.0bp  확인",
              "2026-08-03  UST 5Y   4.40%  -5.0bp  확인",
              "2026-08-03  UST 10Y  4.70%  -5.0bp  확인",
              "2026-08-03  UST 30Y  5.23%  -4.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인",
              "2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인",
              "2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-27  WTI                84.25   -8.16%  -3.89%  확인",
              "2026-07-27  Brent              91.82   -8.46%  -2.44%  확인",
              "2026-08-04  Gold (proxy: GLD)  374.15  +0.66%  -0.80%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-08-03  VIX  15.86  -0.81%  -23.23%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-08-04  SG CTA Trend Index (p…  94.53   -1.31%  -3.11%  -2.43%  -1.21  프록시    \n2026-08-04  SG Short-Term Traders…  30.68   +0.18%  -0.50%  -1.14%  0.29   프록시    \n2026-08-04  Barclay BTOP50 (proxy…  100.27  -0.52%  -1.76%  -2.06%  -0.73  프록시    \n2026-08-04  DBMF ETF                30.68   +0.18%  -0.50%  -1.14%  0.29   프록시    \n2026-08-04  KMLM ETF                28.36   -1.22%  -3.01%  -2.98%  -1.32  프록시    \n2026-08-04  Simplify CTA ETF (pro…  25.47   -2.90%  -5.77%  -3.23%  -1.49  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인     \n2026-07-28  USD Index (DX)  -1,601      +337      +17.4%   +0.11  ❌        확인     \n2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인     \n2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인     \n2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인     \n2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-05)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-08-03  S&P 500             7600.50   +1.48%  +3.89%  확인     \n2026-08-03  Nasdaq 100          28776.80  +1.78%  +5.83%  확인     \n2026-08-03  Dow                 53178.41  +1.32%  +3.07%  확인     \n2026-08-04  Russell 2000        301.69    +1.85%  +3.11%  프록시    \n2026-08-04  STOXX 600 (proxy:…  91.86     +1.02%  +0.96%  프록시    \n2026-08-04  Nikkei 225          63957.53  +0.32%  +3.38%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-08-03  UST 2Y   4.25%  -3.0bp  확인     \n2026-08-03  UST 5Y   4.40%  -5.0bp  확인     \n2026-08-03  UST 10Y  4.70%  -5.0bp  확인     \n2026-08-03  UST 30Y  5.23%  -4.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인     \n2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인     \n2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-27  WTI                84.25   -8.16%  -3.89%  확인     \n2026-07-27  Brent              91.82   -8.46%  -2.44%  확인     \n2026-08-04  Gold (proxy: GLD)  374.15  +0.66%  -0.80%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3       Confirm\n----------  ---  -----  ------  -------  -------\n2026-08-03  VIX  15.86  -0.81%  -23.23%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-05)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260804.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-04",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-04T06:53:53+09:00",
      "size": 4691,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-08-03  SG CTA Trend Index (p…  96.25   -2.15%  -2.60%  -2.11%  -2.06  프록시    \n2026-08-03  SG Short-Term Traders…  30.63   -0.94%  -1.29%  -2.05%  -1.46  프록시    \n2026-08-03  Barclay BTOP50 (proxy…  101.15  -1.54%  -2.12%  -2.14%  -2.21  프록시    \n2026-08-03  DBMF ETF                30.63   -0.94%  -1.29%  -2.05%  -1.46  프록시    \n2026-08-03  KMLM ETF                28.68   -2.15%  -2.94%  -2.25%  -2.39  프록시    \n2026-08-03  Simplify CTA ETF (pro…  26.23   -3.35%  -3.57%  -2.09%  -1.78  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인     \n2026-07-28  USD Index (DX)  -1,601      +337      +17.4%   +0.11  ❌        확인     \n2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인     \n2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인     \n2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인     \n2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-04)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-31  S&P 500             7489.72   +0.70%  +0.82%  확인     \n2026-07-31  Nasdaq 100          28274.20  +0.60%  +1.84%  확인     \n2026-07-31  Dow                 52485.03  +0.53%  -0.50%  확인     \n2026-08-03  Russell 2000        296.23    +1.73%  +2.65%  프록시    \n2026-08-03  STOXX 600 (proxy:…  90.94     +0.39%  +2.34%  프록시    \n2026-08-03  Nikkei 225          63754.90  -0.94%  +3.78%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-31  UST 2Y   4.28%  +5.0bp  확인     \n2026-07-31  UST 5Y   4.45%  +7.0bp  확인     \n2026-07-31  UST 10Y  4.75%  +7.0bp  확인     \n2026-07-31  UST 30Y  5.27%  +6.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인     \n2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인     \n2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-27  WTI                84.25   -8.16%  -3.89%  확인     \n2026-07-27  Brent              91.82   -8.46%  -2.44%  확인     \n2026-08-03  Gold (proxy: GLD)  371.66  +0.03%  +0.16%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3       Confirm\n----------  ---  -----  ------  -------  -------\n2026-07-31  VIX  15.99  -6.44%  -12.19%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-04)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-08-03  SG Short-Term Traders…  30.63   -0.94%  -1.29%  -2.05%  -1.46  프록시",
              "2026-08-03  Barclay BTOP50 (proxy…  101.15  -1.54%  -2.12%  -2.14%  -2.21  프록시",
              "2026-08-03  DBMF ETF                30.63   -0.94%  -1.29%  -2.05%  -1.46  프록시",
              "2026-08-03  KMLM ETF                28.68   -2.15%  -2.94%  -2.25%  -2.39  프록시",
              "2026-08-03  Simplify CTA ETF (pro…  26.23   -3.35%  -3.57%  -2.09%  -1.78  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인",
              "2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인",
              "2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인",
              "2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인",
              "2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-31  S&P 500             7489.72   +0.70%  +0.82%  확인",
              "2026-07-31  Nasdaq 100          28274.20  +0.60%  +1.84%  확인",
              "2026-07-31  Dow                 52485.03  +0.53%  -0.50%  확인",
              "2026-08-03  Russell 2000        296.23    +1.73%  +2.65%  프록시",
              "2026-08-03  STOXX 600 (proxy:…  90.94     +0.39%  +2.34%  프록시",
              "2026-08-03  Nikkei 225          63754.90  -0.94%  +3.78%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-31  UST 2Y   4.28%  +5.0bp  확인",
              "2026-07-31  UST 5Y   4.45%  +7.0bp  확인",
              "2026-07-31  UST 10Y  4.75%  +7.0bp  확인",
              "2026-07-31  UST 30Y  5.27%  +6.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인",
              "2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인",
              "2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-27  WTI                84.25   -8.16%  -3.89%  확인",
              "2026-07-27  Brent              91.82   -8.46%  -2.44%  확인",
              "2026-08-03  Gold (proxy: GLD)  371.66  +0.03%  +0.16%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-31  VIX  15.99  -6.44%  -12.19%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-08-03  SG CTA Trend Index (p…  96.25   -2.15%  -2.60%  -2.11%  -2.06  프록시    \n2026-08-03  SG Short-Term Traders…  30.63   -0.94%  -1.29%  -2.05%  -1.46  프록시    \n2026-08-03  Barclay BTOP50 (proxy…  101.15  -1.54%  -2.12%  -2.14%  -2.21  프록시    \n2026-08-03  DBMF ETF                30.63   -0.94%  -1.29%  -2.05%  -1.46  프록시    \n2026-08-03  KMLM ETF                28.68   -2.15%  -2.94%  -2.25%  -2.39  프록시    \n2026-08-03  Simplify CTA ETF (pro…  26.23   -3.35%  -3.57%  -2.09%  -1.78  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인     \n2026-07-28  USD Index (DX)  -1,601      +337      +17.4%   +0.11  ❌        확인     \n2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인     \n2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인     \n2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인     \n2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-04)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-31  S&P 500             7489.72   +0.70%  +0.82%  확인     \n2026-07-31  Nasdaq 100          28274.20  +0.60%  +1.84%  확인     \n2026-07-31  Dow                 52485.03  +0.53%  -0.50%  확인     \n2026-08-03  Russell 2000        296.23    +1.73%  +2.65%  프록시    \n2026-08-03  STOXX 600 (proxy:…  90.94     +0.39%  +2.34%  프록시    \n2026-08-03  Nikkei 225          63754.90  -0.94%  +3.78%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-31  UST 2Y   4.28%  +5.0bp  확인     \n2026-07-31  UST 5Y   4.45%  +7.0bp  확인     \n2026-07-31  UST 10Y  4.75%  +7.0bp  확인     \n2026-07-31  UST 30Y  5.27%  +6.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-31  DXY (proxy: DTWEX…  119.70  +0.02%  -0.76%  확인     \n2026-07-31  EURUSD              1.15    -0.03%  +1.03%  확인     \n2026-07-31  USDJPY              159.16  -0.19%  -2.74%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-27  WTI                84.25   -8.16%  -3.89%  확인     \n2026-07-27  Brent              91.82   -8.46%  -2.44%  확인     \n2026-08-03  Gold (proxy: GLD)  371.66  +0.03%  +0.16%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3       Confirm\n----------  ---  -----  ------  -------  -------\n2026-07-31  VIX  15.99  -6.44%  -12.19%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-04)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260803.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-03",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-03T06:53:52+09:00",
      "size": 4683,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-31  SG CTA Trend Index (p…  98.39   +0.30%  +1.00%  -2.01%  0.31  프록시    \n2026-07-31  SG Short-Term Traders…  30.92   +0.26%  -0.39%  -1.56%  0.40  프록시    \n2026-07-31  Barclay BTOP50 (proxy…  103.04  +0.25%  -0.06%  -1.30%  0.31  프록시    \n2026-07-31  DBMF ETF                30.92   +0.26%  -0.39%  -1.56%  0.40  프록시    \n2026-07-31  KMLM ETF                29.31   +0.24%  +0.27%  -1.05%  0.19  프록시    \n2026-07-31  Simplify CTA ETF (pro…  27.14   +0.41%  +3.12%  -3.49%  0.28  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인     \n2026-07-28  USD Index (DX)  -1,601      +337      +17.4%   +0.11  ❌        확인     \n2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인     \n2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인     \n2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인     \n2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-03)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-31  S&P 500             7489.72   +0.70%  +0.82%  확인     \n2026-07-31  Nasdaq 100          28274.20  +0.60%  +1.84%  확인     \n2026-07-31  Dow                 52485.03  +0.53%  -0.50%  확인     \n2026-07-31  Russell 2000        291.20    -0.48%  -0.74%  프록시    \n2026-07-31  STOXX 600 (proxy:…  90.59     -0.44%  +1.52%  프록시    \n2026-07-31  Nikkei 225          64362.02  +4.03%  +3.20%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-30  UST 2Y   4.23%  +1.0bp  확인     \n2026-07-30  UST 5Y   4.38%  +1.0bp  확인     \n2026-07-30  UST 10Y  4.68%  +1.0bp  확인     \n2026-07-30  UST 30Y  5.21%  +1.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인     \n2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인     \n2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-27  WTI                84.25   -8.16%  -3.89%  확인     \n2026-07-27  Brent              91.82   -8.46%  -2.44%  확인     \n2026-07-31  Gold (proxy: GLD)  371.54  -1.49%  +0.59%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1       D3      Confirm\n----------  ---  -----  -------  ------  -------\n2026-07-30  VIX  17.09  -17.28%  -8.46%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-03)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-07-31  SG Short-Term Traders…  30.92   +0.26%  -0.39%  -1.56%  0.40  프록시",
              "2026-07-31  Barclay BTOP50 (proxy…  103.04  +0.25%  -0.06%  -1.30%  0.31  프록시",
              "2026-07-31  DBMF ETF                30.92   +0.26%  -0.39%  -1.56%  0.40  프록시",
              "2026-07-31  KMLM ETF                29.31   +0.24%  +0.27%  -1.05%  0.19  프록시",
              "2026-07-31  Simplify CTA ETF (pro…  27.14   +0.41%  +3.12%  -3.49%  0.28  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인",
              "2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인",
              "2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인",
              "2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인",
              "2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-31  S&P 500             7489.72   +0.70%  +0.82%  확인",
              "2026-07-31  Nasdaq 100          28274.20  +0.60%  +1.84%  확인",
              "2026-07-31  Dow                 52485.03  +0.53%  -0.50%  확인",
              "2026-07-31  Russell 2000        291.20    -0.48%  -0.74%  프록시",
              "2026-07-31  STOXX 600 (proxy:…  90.59     -0.44%  +1.52%  프록시",
              "2026-07-31  Nikkei 225          64362.02  +4.03%  +3.20%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-30  UST 2Y   4.23%  +1.0bp  확인",
              "2026-07-30  UST 5Y   4.38%  +1.0bp  확인",
              "2026-07-30  UST 10Y  4.68%  +1.0bp  확인",
              "2026-07-30  UST 30Y  5.21%  +1.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인",
              "2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인",
              "2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-27  WTI                84.25   -8.16%  -3.89%  확인",
              "2026-07-27  Brent              91.82   -8.46%  -2.44%  확인",
              "2026-07-31  Gold (proxy: GLD)  371.54  -1.49%  +0.59%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-30  VIX  17.09  -17.28%  -8.46%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-31  SG CTA Trend Index (p…  98.39   +0.30%  +1.00%  -2.01%  0.31  프록시    \n2026-07-31  SG Short-Term Traders…  30.92   +0.26%  -0.39%  -1.56%  0.40  프록시    \n2026-07-31  Barclay BTOP50 (proxy…  103.04  +0.25%  -0.06%  -1.30%  0.31  프록시    \n2026-07-31  DBMF ETF                30.92   +0.26%  -0.39%  -1.56%  0.40  프록시    \n2026-07-31  KMLM ETF                29.31   +0.24%  +0.27%  -1.05%  0.19  프록시    \n2026-07-31  Simplify CTA ETF (pro…  27.14   +0.41%  +3.12%  -3.49%  0.28  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인     \n2026-07-28  USD Index (DX)  -1,601      +337      +17.4%   +0.11  ❌        확인     \n2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인     \n2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인     \n2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인     \n2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-03)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-31  S&P 500             7489.72   +0.70%  +0.82%  확인     \n2026-07-31  Nasdaq 100          28274.20  +0.60%  +1.84%  확인     \n2026-07-31  Dow                 52485.03  +0.53%  -0.50%  확인     \n2026-07-31  Russell 2000        291.20    -0.48%  -0.74%  프록시    \n2026-07-31  STOXX 600 (proxy:…  90.59     -0.44%  +1.52%  프록시    \n2026-07-31  Nikkei 225          64362.02  +4.03%  +3.20%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-30  UST 2Y   4.23%  +1.0bp  확인     \n2026-07-30  UST 5Y   4.38%  +1.0bp  확인     \n2026-07-30  UST 10Y  4.68%  +1.0bp  확인     \n2026-07-30  UST 30Y  5.21%  +1.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인     \n2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인     \n2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-27  WTI                84.25   -8.16%  -3.89%  확인     \n2026-07-27  Brent              91.82   -8.46%  -2.44%  확인     \n2026-07-31  Gold (proxy: GLD)  371.54  -1.49%  +0.59%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1       D3      Confirm\n----------  ---  -----  -------  ------  -------\n2026-07-30  VIX  17.09  -17.28%  -8.46%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-03)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260802.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-02",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-02T06:53:52+09:00",
      "size": 4683,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-31  SG CTA Trend Index (p…  98.39   +0.30%  +1.00%  -2.01%  0.31  프록시    \n2026-07-31  SG Short-Term Traders…  30.92   +0.26%  -0.39%  -1.56%  0.40  프록시    \n2026-07-31  Barclay BTOP50 (proxy…  103.04  +0.25%  -0.06%  -1.30%  0.31  프록시    \n2026-07-31  DBMF ETF                30.92   +0.26%  -0.39%  -1.56%  0.40  프록시    \n2026-07-31  KMLM ETF                29.31   +0.24%  +0.27%  -1.05%  0.19  프록시    \n2026-07-31  Simplify CTA ETF (pro…  27.14   +0.41%  +3.12%  -3.49%  0.28  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인     \n2026-07-28  USD Index (DX)  -1,601      +337      +17.4%   +0.11  ❌        확인     \n2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인     \n2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인     \n2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인     \n2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-02)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-31  S&P 500             7489.72   +0.70%  +0.82%  확인     \n2026-07-31  Nasdaq 100          28274.20  +0.60%  +1.84%  확인     \n2026-07-31  Dow                 52485.03  +0.53%  -0.50%  확인     \n2026-07-31  Russell 2000        291.20    -0.48%  -0.74%  프록시    \n2026-07-31  STOXX 600 (proxy:…  90.59     -0.44%  +1.52%  프록시    \n2026-07-31  Nikkei 225          64362.02  +4.03%  +3.20%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-30  UST 2Y   4.23%  +1.0bp  확인     \n2026-07-30  UST 5Y   4.38%  +1.0bp  확인     \n2026-07-30  UST 10Y  4.68%  +1.0bp  확인     \n2026-07-30  UST 30Y  5.21%  +1.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인     \n2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인     \n2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-27  WTI                84.25   -8.16%  -3.89%  확인     \n2026-07-27  Brent              91.82   -8.46%  -2.44%  확인     \n2026-07-31  Gold (proxy: GLD)  371.54  -1.49%  +0.59%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1       D3      Confirm\n----------  ---  -----  -------  ------  -------\n2026-07-30  VIX  17.09  -17.28%  -8.46%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-02)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-07-31  SG Short-Term Traders…  30.92   +0.26%  -0.39%  -1.56%  0.40  프록시",
              "2026-07-31  Barclay BTOP50 (proxy…  103.04  +0.25%  -0.06%  -1.30%  0.31  프록시",
              "2026-07-31  DBMF ETF                30.92   +0.26%  -0.39%  -1.56%  0.40  프록시",
              "2026-07-31  KMLM ETF                29.31   +0.24%  +0.27%  -1.05%  0.19  프록시",
              "2026-07-31  Simplify CTA ETF (pro…  27.14   +0.41%  +3.12%  -3.49%  0.28  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인",
              "2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인",
              "2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인",
              "2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인",
              "2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-31  S&P 500             7489.72   +0.70%  +0.82%  확인",
              "2026-07-31  Nasdaq 100          28274.20  +0.60%  +1.84%  확인",
              "2026-07-31  Dow                 52485.03  +0.53%  -0.50%  확인",
              "2026-07-31  Russell 2000        291.20    -0.48%  -0.74%  프록시",
              "2026-07-31  STOXX 600 (proxy:…  90.59     -0.44%  +1.52%  프록시",
              "2026-07-31  Nikkei 225          64362.02  +4.03%  +3.20%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-30  UST 2Y   4.23%  +1.0bp  확인",
              "2026-07-30  UST 5Y   4.38%  +1.0bp  확인",
              "2026-07-30  UST 10Y  4.68%  +1.0bp  확인",
              "2026-07-30  UST 30Y  5.21%  +1.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인",
              "2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인",
              "2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-27  WTI                84.25   -8.16%  -3.89%  확인",
              "2026-07-27  Brent              91.82   -8.46%  -2.44%  확인",
              "2026-07-31  Gold (proxy: GLD)  371.54  -1.49%  +0.59%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-30  VIX  17.09  -17.28%  -8.46%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-31  SG CTA Trend Index (p…  98.39   +0.30%  +1.00%  -2.01%  0.31  프록시    \n2026-07-31  SG Short-Term Traders…  30.92   +0.26%  -0.39%  -1.56%  0.40  프록시    \n2026-07-31  Barclay BTOP50 (proxy…  103.04  +0.25%  -0.06%  -1.30%  0.31  프록시    \n2026-07-31  DBMF ETF                30.92   +0.26%  -0.39%  -1.56%  0.40  프록시    \n2026-07-31  KMLM ETF                29.31   +0.24%  +0.27%  -1.05%  0.19  프록시    \n2026-07-31  Simplify CTA ETF (pro…  27.14   +0.41%  +3.12%  -3.49%  0.28  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인     \n2026-07-28  USD Index (DX)  -1,601      +337      +17.4%   +0.11  ❌        확인     \n2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인     \n2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인     \n2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인     \n2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-02)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-31  S&P 500             7489.72   +0.70%  +0.82%  확인     \n2026-07-31  Nasdaq 100          28274.20  +0.60%  +1.84%  확인     \n2026-07-31  Dow                 52485.03  +0.53%  -0.50%  확인     \n2026-07-31  Russell 2000        291.20    -0.48%  -0.74%  프록시    \n2026-07-31  STOXX 600 (proxy:…  90.59     -0.44%  +1.52%  프록시    \n2026-07-31  Nikkei 225          64362.02  +4.03%  +3.20%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-30  UST 2Y   4.23%  +1.0bp  확인     \n2026-07-30  UST 5Y   4.38%  +1.0bp  확인     \n2026-07-30  UST 10Y  4.68%  +1.0bp  확인     \n2026-07-30  UST 30Y  5.21%  +1.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인     \n2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인     \n2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-27  WTI                84.25   -8.16%  -3.89%  확인     \n2026-07-27  Brent              91.82   -8.46%  -2.44%  확인     \n2026-07-31  Gold (proxy: GLD)  371.54  -1.49%  +0.59%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1       D3      Confirm\n----------  ---  -----  -------  ------  -------\n2026-07-30  VIX  17.09  -17.28%  -8.46%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-02)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260801.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-08-01",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-08-01T06:53:52+09:00",
      "size": 4683,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-31  SG CTA Trend Index (p…  98.43   +0.34%  +1.04%  -1.97%  0.34  프록시    \n2026-07-31  SG Short-Term Traders…  30.91   +0.24%  -0.40%  -1.58%  0.38  프록시    \n2026-07-31  Barclay BTOP50 (proxy…  103.09  +0.29%  -0.01%  -1.26%  0.37  프록시    \n2026-07-31  DBMF ETF                30.91   +0.24%  -0.40%  -1.58%  0.38  프록시    \n2026-07-31  KMLM ETF                29.34   +0.34%  +0.38%  -0.95%  0.30  프록시    \n2026-07-31  Simplify CTA ETF (pro…  27.15   +0.44%  +3.15%  -3.45%  0.30  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인     \n2026-07-28  USD Index (DX)  -1,601      +337      +17.4%   +0.11  ❌        확인     \n2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인     \n2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인     \n2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인     \n2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-01)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-30  S&P 500             7437.63   +1.66%  +0.33%  확인     \n2026-07-30  Nasdaq 100          28106.35  +3.36%  +0.24%  확인     \n2026-07-30  Dow                 52208.06  +1.19%  -0.00%  확인     \n2026-07-31  Russell 2000        291.24    -0.46%  -0.73%  프록시    \n2026-07-31  STOXX 600 (proxy:…  90.58     -0.45%  +1.51%  프록시    \n2026-07-31  Nikkei 225          64362.02  +4.03%  +3.20%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-30  UST 2Y   4.23%  +1.0bp  확인     \n2026-07-30  UST 5Y   4.38%  +1.0bp  확인     \n2026-07-30  UST 10Y  4.68%  +1.0bp  확인     \n2026-07-30  UST 30Y  5.21%  +1.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인     \n2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인     \n2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-27  WTI                84.25   -8.16%  -3.89%  확인     \n2026-07-27  Brent              91.82   -8.46%  -2.44%  확인     \n2026-07-31  Gold (proxy: GLD)  371.53  -1.49%  +0.58%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1       D3      Confirm\n----------  ---  -----  -------  ------  -------\n2026-07-30  VIX  17.09  -17.28%  -8.46%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-01)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-07-31  SG Short-Term Traders…  30.91   +0.24%  -0.40%  -1.58%  0.38  프록시",
              "2026-07-31  Barclay BTOP50 (proxy…  103.09  +0.29%  -0.01%  -1.26%  0.37  프록시",
              "2026-07-31  DBMF ETF                30.91   +0.24%  -0.40%  -1.58%  0.38  프록시",
              "2026-07-31  KMLM ETF                29.34   +0.34%  +0.38%  -0.95%  0.30  프록시",
              "2026-07-31  Simplify CTA ETF (pro…  27.15   +0.44%  +3.15%  -3.45%  0.30  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인",
              "2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인",
              "2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인",
              "2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인",
              "2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-30  S&P 500             7437.63   +1.66%  +0.33%  확인",
              "2026-07-30  Nasdaq 100          28106.35  +3.36%  +0.24%  확인",
              "2026-07-30  Dow                 52208.06  +1.19%  -0.00%  확인",
              "2026-07-31  Russell 2000        291.24    -0.46%  -0.73%  프록시",
              "2026-07-31  STOXX 600 (proxy:…  90.58     -0.45%  +1.51%  프록시",
              "2026-07-31  Nikkei 225          64362.02  +4.03%  +3.20%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-30  UST 2Y   4.23%  +1.0bp  확인",
              "2026-07-30  UST 5Y   4.38%  +1.0bp  확인",
              "2026-07-30  UST 10Y  4.68%  +1.0bp  확인",
              "2026-07-30  UST 30Y  5.21%  +1.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인",
              "2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인",
              "2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-27  WTI                84.25   -8.16%  -3.89%  확인",
              "2026-07-27  Brent              91.82   -8.46%  -2.44%  확인",
              "2026-07-31  Gold (proxy: GLD)  371.53  -1.49%  +0.58%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-30  VIX  17.09  -17.28%  -8.46%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-31  SG CTA Trend Index (p…  98.43   +0.34%  +1.04%  -1.97%  0.34  프록시    \n2026-07-31  SG Short-Term Traders…  30.91   +0.24%  -0.40%  -1.58%  0.38  프록시    \n2026-07-31  Barclay BTOP50 (proxy…  103.09  +0.29%  -0.01%  -1.26%  0.37  프록시    \n2026-07-31  DBMF ETF                30.91   +0.24%  -0.40%  -1.58%  0.38  프록시    \n2026-07-31  KMLM ETF                29.34   +0.34%  +0.38%  -0.95%  0.30  프록시    \n2026-07-31  Simplify CTA ETF (pro…  27.15   +0.44%  +3.15%  -3.45%  0.30  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %        Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  -------  -----  -------  -------\n2026-07-28  S&P 500 (ES)    5,413       -163,350  -96.8%   -0.68  ❌        확인     \n2026-07-28  USD Index (DX)  -1,601      +337      +17.4%   +0.11  ❌        확인     \n2026-07-28  UST 10Y         -126,011    +3,275    +2.5%    +0.05  ❌        확인     \n2026-07-28  UST 2Y          54,007      +30,041   +125.3%  +2.91  ❌        확인     \n2026-07-28  UST 5Y          -40,719     +3,319    +7.5%    +0.63  ❌        확인     \n2026-07-28  UST 30Y         -400,210    +462,428  +53.6%   +1.05  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-01)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-30  S&P 500             7437.63   +1.66%  +0.33%  확인     \n2026-07-30  Nasdaq 100          28106.35  +3.36%  +0.24%  확인     \n2026-07-30  Dow                 52208.06  +1.19%  -0.00%  확인     \n2026-07-31  Russell 2000        291.24    -0.46%  -0.73%  프록시    \n2026-07-31  STOXX 600 (proxy:…  90.58     -0.45%  +1.51%  프록시    \n2026-07-31  Nikkei 225          64362.02  +4.03%  +3.20%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-30  UST 2Y   4.23%  +1.0bp  확인     \n2026-07-30  UST 5Y   4.38%  +1.0bp  확인     \n2026-07-30  UST 10Y  4.68%  +1.0bp  확인     \n2026-07-30  UST 30Y  5.21%  +1.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인     \n2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인     \n2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-27  WTI                84.25   -8.16%  -3.89%  확인     \n2026-07-27  Brent              91.82   -8.46%  -2.44%  확인     \n2026-07-31  Gold (proxy: GLD)  371.53  -1.49%  +0.58%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1       D3      Confirm\n----------  ---  -----  -------  ------  -------\n2026-07-30  VIX  17.09  -17.28%  -8.46%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-08-01)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260731.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-07-31",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-07-31T06:53:52+09:00",
      "size": 4712,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-30  SG CTA Trend Index (p…  98.78   -0.79%  -0.30%  -3.29%  -0.76  프록시    \n2026-07-30  SG Short-Term Traders…  30.84   -0.63%  -1.39%  -2.08%  -0.99  프록시    \n2026-07-30  Barclay BTOP50 (proxy…  103.27  -0.86%  -0.88%  -2.09%  -1.27  프록시    \n2026-07-30  DBMF ETF                30.84   -0.63%  -1.39%  -2.08%  -0.99  프록시    \n2026-07-30  KMLM ETF                29.23   -1.08%  -0.37%  -2.11%  -1.26  프록시    \n2026-07-30  Simplify CTA ETF (pro…  27.02   -0.66%  +0.86%  -5.72%  -0.31  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %         Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  --------  -----  -------  -------\n2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인     \n2026-07-21  USD Index (DX)  -1,938      +2,928    +60.2%    +0.79  ❌        확인     \n2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인     \n2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인     \n2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인     \n2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-31)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-29  S&P 500             7316.15   -1.52%  -1.29%  확인     \n2026-07-29  Nasdaq 100          27192.31  -2.06%  -3.33%  확인     \n2026-07-29  Dow                 51594.14  -2.19%  -0.68%  확인     \n2026-07-30  Russell 2000        292.54    +1.38%  -0.13%  프록시    \n2026-07-30  STOXX 600 (proxy:…  90.95     +2.35%  +2.38%  프록시    \n2026-07-30  Nikkei 225          61867.43  +0.71%  -4.72%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1       Confirm\n----------  -------  -----  -------  -------\n2026-07-29  UST 2Y   4.22%  -4.0bp   확인     \n2026-07-29  UST 5Y   4.37%  +2.0bp   확인     \n2026-07-29  UST 10Y  4.67%  +6.0bp   확인     \n2026-07-29  UST 30Y  5.20%  +11.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인     \n2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인     \n2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-27  WTI                84.25   -8.16%  -3.89%  확인     \n2026-07-27  Brent              91.82   -8.46%  -2.44%  확인     \n2026-07-30  Gold (proxy: GLD)  377.17  +1.64%  +0.68%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1       D3       Confirm\n----------  ---  -----  -------  -------  -------\n2026-07-29  VIX  20.66  +13.45%  +11.19%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-31)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-07-30  SG Short-Term Traders…  30.84   -0.63%  -1.39%  -2.08%  -0.99  프록시",
              "2026-07-30  Barclay BTOP50 (proxy…  103.27  -0.86%  -0.88%  -2.09%  -1.27  프록시",
              "2026-07-30  DBMF ETF                30.84   -0.63%  -1.39%  -2.08%  -0.99  프록시",
              "2026-07-30  KMLM ETF                29.23   -1.08%  -0.37%  -2.11%  -1.26  프록시",
              "2026-07-30  Simplify CTA ETF (pro…  27.02   -0.66%  +0.86%  -5.72%  -0.31  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인",
              "2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인",
              "2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인",
              "2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인",
              "2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-29  S&P 500             7316.15   -1.52%  -1.29%  확인",
              "2026-07-29  Nasdaq 100          27192.31  -2.06%  -3.33%  확인",
              "2026-07-29  Dow                 51594.14  -2.19%  -0.68%  확인",
              "2026-07-30  Russell 2000        292.54    +1.38%  -0.13%  프록시",
              "2026-07-30  STOXX 600 (proxy:…  90.95     +2.35%  +2.38%  프록시",
              "2026-07-30  Nikkei 225          61867.43  +0.71%  -4.72%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-29  UST 2Y   4.22%  -4.0bp   확인",
              "2026-07-29  UST 5Y   4.37%  +2.0bp   확인",
              "2026-07-29  UST 10Y  4.67%  +6.0bp   확인",
              "2026-07-29  UST 30Y  5.20%  +11.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인",
              "2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인",
              "2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-27  WTI                84.25   -8.16%  -3.89%  확인",
              "2026-07-27  Brent              91.82   -8.46%  -2.44%  확인",
              "2026-07-30  Gold (proxy: GLD)  377.17  +1.64%  +0.68%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-29  VIX  20.66  +13.45%  +11.19%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-30  SG CTA Trend Index (p…  98.78   -0.79%  -0.30%  -3.29%  -0.76  프록시    \n2026-07-30  SG Short-Term Traders…  30.84   -0.63%  -1.39%  -2.08%  -0.99  프록시    \n2026-07-30  Barclay BTOP50 (proxy…  103.27  -0.86%  -0.88%  -2.09%  -1.27  프록시    \n2026-07-30  DBMF ETF                30.84   -0.63%  -1.39%  -2.08%  -0.99  프록시    \n2026-07-30  KMLM ETF                29.23   -1.08%  -0.37%  -2.11%  -1.26  프록시    \n2026-07-30  Simplify CTA ETF (pro…  27.02   -0.66%  +0.86%  -5.72%  -0.31  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %         Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  --------  -----  -------  -------\n2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인     \n2026-07-21  USD Index (DX)  -1,938      +2,928    +60.2%    +0.79  ❌        확인     \n2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인     \n2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인     \n2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인     \n2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-31)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-29  S&P 500             7316.15   -1.52%  -1.29%  확인     \n2026-07-29  Nasdaq 100          27192.31  -2.06%  -3.33%  확인     \n2026-07-29  Dow                 51594.14  -2.19%  -0.68%  확인     \n2026-07-30  Russell 2000        292.54    +1.38%  -0.13%  프록시    \n2026-07-30  STOXX 600 (proxy:…  90.95     +2.35%  +2.38%  프록시    \n2026-07-30  Nikkei 225          61867.43  +0.71%  -4.72%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1       Confirm\n----------  -------  -----  -------  -------\n2026-07-29  UST 2Y   4.22%  -4.0bp   확인     \n2026-07-29  UST 5Y   4.37%  +2.0bp   확인     \n2026-07-29  UST 10Y  4.67%  +6.0bp   확인     \n2026-07-29  UST 30Y  5.20%  +11.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인     \n2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인     \n2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-27  WTI                84.25   -8.16%  -3.89%  확인     \n2026-07-27  Brent              91.82   -8.46%  -2.44%  확인     \n2026-07-30  Gold (proxy: GLD)  377.17  +1.64%  +0.68%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1       D3       Confirm\n----------  ---  -----  -------  -------  -------\n2026-07-29  VIX  20.66  +13.45%  +11.19%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-31)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260730.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-07-30",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-07-30T06:53:52+09:00",
      "size": 4700,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-29  SG CTA Trend Index (p…  99.39   +1.48%  -1.54%  -1.09%  1.46   프록시    \n2026-07-29  SG Short-Term Traders…  31.02   -0.06%  -1.24%  -1.18%  -0.12  프록시    \n2026-07-29  Barclay BTOP50 (proxy…  104.11  +0.51%  -0.75%  -0.44%  0.66   프록시    \n2026-07-29  DBMF ETF                31.02   -0.06%  -1.24%  -1.18%  -0.12  프록시    \n2026-07-29  KMLM ETF                29.55   +1.08%  -0.25%  +0.29%  1.10   프록시    \n2026-07-29  Simplify CTA ETF (pro…  27.22   +3.42%  -3.20%  -2.47%  1.97   프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %         Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  --------  -----  -------  -------\n2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인     \n2026-07-21  USD Index (DX)  -1,938      +2,928    +60.2%    +0.79  ❌        확인     \n2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인     \n2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인     \n2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인     \n2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-30)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-28  S&P 500             7428.78   +0.21%  +0.28%  확인     \n2026-07-28  Nasdaq 100          27763.13  -0.98%  -2.43%  확인     \n2026-07-28  Dow                 52747.32  +1.03%  +2.00%  확인     \n2026-07-29  Russell 2000        288.63    -1.62%  -0.87%  프록시    \n2026-07-29  STOXX 600 (proxy:…  88.86     -0.41%  +0.51%  프록시    \n2026-07-29  Nikkei 225          61434.19  -1.49%  -4.92%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-28  UST 2Y   4.26%  -5.0bp  확인     \n2026-07-28  UST 5Y   4.35%  -5.0bp  확인     \n2026-07-28  UST 10Y  4.61%  -4.0bp  확인     \n2026-07-28  UST 30Y  5.09%  -3.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인     \n2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인     \n2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-27  WTI                84.25   -8.16%  -3.89%  확인     \n2026-07-27  Brent              91.82   -8.46%  -2.44%  확인     \n2026-07-29  Gold (proxy: GLD)  371.00  +0.44%  -0.24%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-28  VIX  18.21  -2.46%  -2.62%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-30)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-07-29  SG Short-Term Traders…  31.02   -0.06%  -1.24%  -1.18%  -0.12  프록시",
              "2026-07-29  Barclay BTOP50 (proxy…  104.11  +0.51%  -0.75%  -0.44%  0.66   프록시",
              "2026-07-29  DBMF ETF                31.02   -0.06%  -1.24%  -1.18%  -0.12  프록시",
              "2026-07-29  KMLM ETF                29.55   +1.08%  -0.25%  +0.29%  1.10   프록시",
              "2026-07-29  Simplify CTA ETF (pro…  27.22   +3.42%  -3.20%  -2.47%  1.97   프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인",
              "2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인",
              "2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인",
              "2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인",
              "2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-28  S&P 500             7428.78   +0.21%  +0.28%  확인",
              "2026-07-28  Nasdaq 100          27763.13  -0.98%  -2.43%  확인",
              "2026-07-28  Dow                 52747.32  +1.03%  +2.00%  확인",
              "2026-07-29  Russell 2000        288.63    -1.62%  -0.87%  프록시",
              "2026-07-29  STOXX 600 (proxy:…  88.86     -0.41%  +0.51%  프록시",
              "2026-07-29  Nikkei 225          61434.19  -1.49%  -4.92%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-28  UST 2Y   4.26%  -5.0bp  확인",
              "2026-07-28  UST 5Y   4.35%  -5.0bp  확인",
              "2026-07-28  UST 10Y  4.61%  -4.0bp  확인",
              "2026-07-28  UST 30Y  5.09%  -3.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인",
              "2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인",
              "2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-27  WTI                84.25   -8.16%  -3.89%  확인",
              "2026-07-27  Brent              91.82   -8.46%  -2.44%  확인",
              "2026-07-29  Gold (proxy: GLD)  371.00  +0.44%  -0.24%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-28  VIX  18.21  -2.46%  -2.62%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-29  SG CTA Trend Index (p…  99.39   +1.48%  -1.54%  -1.09%  1.46   프록시    \n2026-07-29  SG Short-Term Traders…  31.02   -0.06%  -1.24%  -1.18%  -0.12  프록시    \n2026-07-29  Barclay BTOP50 (proxy…  104.11  +0.51%  -0.75%  -0.44%  0.66   프록시    \n2026-07-29  DBMF ETF                31.02   -0.06%  -1.24%  -1.18%  -0.12  프록시    \n2026-07-29  KMLM ETF                29.55   +1.08%  -0.25%  +0.29%  1.10   프록시    \n2026-07-29  Simplify CTA ETF (pro…  27.22   +3.42%  -3.20%  -2.47%  1.97   프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %         Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  --------  -----  -------  -------\n2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인     \n2026-07-21  USD Index (DX)  -1,938      +2,928    +60.2%    +0.79  ❌        확인     \n2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인     \n2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인     \n2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인     \n2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-30)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-28  S&P 500             7428.78   +0.21%  +0.28%  확인     \n2026-07-28  Nasdaq 100          27763.13  -0.98%  -2.43%  확인     \n2026-07-28  Dow                 52747.32  +1.03%  +2.00%  확인     \n2026-07-29  Russell 2000        288.63    -1.62%  -0.87%  프록시    \n2026-07-29  STOXX 600 (proxy:…  88.86     -0.41%  +0.51%  프록시    \n2026-07-29  Nikkei 225          61434.19  -1.49%  -4.92%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-28  UST 2Y   4.26%  -5.0bp  확인     \n2026-07-28  UST 5Y   4.35%  -5.0bp  확인     \n2026-07-28  UST 10Y  4.61%  -4.0bp  확인     \n2026-07-28  UST 30Y  5.09%  -3.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인     \n2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인     \n2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-27  WTI                84.25   -8.16%  -3.89%  확인     \n2026-07-27  Brent              91.82   -8.46%  -2.44%  확인     \n2026-07-29  Gold (proxy: GLD)  371.00  +0.44%  -0.24%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-28  VIX  18.21  -2.46%  -2.62%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-30)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260729.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-07-29",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-07-29T06:53:52+09:00",
      "size": 4703,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-28  SG CTA Trend Index (p…  98.86   -1.03%  -4.00%  -2.28%  -1.01  프록시    \n2026-07-28  SG Short-Term Traders…  31.04   -0.75%  -1.44%  -0.91%  -1.18  프록시    \n2026-07-28  Barclay BTOP50 (proxy…  104.86  -0.61%  -1.83%  -0.86%  -0.94  프록시    \n2026-07-28  DBMF ETF                31.04   -0.75%  -1.44%  -0.91%  -1.18  프록시    \n2026-07-28  KMLM ETF                29.20   -0.48%  -2.21%  -0.82%  -0.61  프록시    \n2026-07-28  Simplify CTA ETF (pro…  26.29   -1.87%  -8.27%  -5.12%  -0.99  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %         Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  --------  -----  -------  -------\n2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인     \n2026-07-21  USD Index (DX)  -1,938      +2,928    +60.2%    +0.79  ❌        확인     \n2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인     \n2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인     \n2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인     \n2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-29)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-27  S&P 500             7413.18   +0.02%  -1.14%  확인     \n2026-07-27  Nasdaq 100          28039.21  -0.32%  -3.31%  확인     \n2026-07-27  Dow                 52210.08  +0.51%  -0.02%  확인     \n2026-07-28  Russell 2000        293.40    +0.17%  +0.45%  프록시    \n2026-07-28  STOXX 600 (proxy:…  89.22     +0.43%  +1.58%  프록시    \n2026-07-28  Nikkei 225          62364.92  -3.95%  -6.11%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-27  UST 2Y   4.31%  -2.0bp  확인     \n2026-07-27  UST 5Y   4.40%  -3.0bp  확인     \n2026-07-27  UST 10Y  4.65%  -4.0bp  확인     \n2026-07-27  UST 30Y  5.12%  -4.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인     \n2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인     \n2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-20  WTI                84.38   +1.14%  +4.52%  확인     \n2026-07-20  Brent              86.99   +2.33%  +4.71%  확인     \n2026-07-28  Gold (proxy: GLD)  369.36  -1.41%  -0.58%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3       Confirm\n----------  ---  -----  ------  -------  -------\n2026-07-27  VIX  18.67  +0.48%  +12.20%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-29)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-07-28  SG Short-Term Traders…  31.04   -0.75%  -1.44%  -0.91%  -1.18  프록시",
              "2026-07-28  Barclay BTOP50 (proxy…  104.86  -0.61%  -1.83%  -0.86%  -0.94  프록시",
              "2026-07-28  DBMF ETF                31.04   -0.75%  -1.44%  -0.91%  -1.18  프록시",
              "2026-07-28  KMLM ETF                29.20   -0.48%  -2.21%  -0.82%  -0.61  프록시",
              "2026-07-28  Simplify CTA ETF (pro…  26.29   -1.87%  -8.27%  -5.12%  -0.99  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인",
              "2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인",
              "2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인",
              "2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인",
              "2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-27  S&P 500             7413.18   +0.02%  -1.14%  확인",
              "2026-07-27  Nasdaq 100          28039.21  -0.32%  -3.31%  확인",
              "2026-07-27  Dow                 52210.08  +0.51%  -0.02%  확인",
              "2026-07-28  Russell 2000        293.40    +0.17%  +0.45%  프록시",
              "2026-07-28  STOXX 600 (proxy:…  89.22     +0.43%  +1.58%  프록시",
              "2026-07-28  Nikkei 225          62364.92  -3.95%  -6.11%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-27  UST 2Y   4.31%  -2.0bp  확인",
              "2026-07-27  UST 5Y   4.40%  -3.0bp  확인",
              "2026-07-27  UST 10Y  4.65%  -4.0bp  확인",
              "2026-07-27  UST 30Y  5.12%  -4.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인",
              "2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인",
              "2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-20  WTI                84.38   +1.14%  +4.52%  확인",
              "2026-07-20  Brent              86.99   +2.33%  +4.71%  확인",
              "2026-07-28  Gold (proxy: GLD)  369.36  -1.41%  -0.58%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-27  VIX  18.67  +0.48%  +12.20%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-28  SG CTA Trend Index (p…  98.86   -1.03%  -4.00%  -2.28%  -1.01  프록시    \n2026-07-28  SG Short-Term Traders…  31.04   -0.75%  -1.44%  -0.91%  -1.18  프록시    \n2026-07-28  Barclay BTOP50 (proxy…  104.86  -0.61%  -1.83%  -0.86%  -0.94  프록시    \n2026-07-28  DBMF ETF                31.04   -0.75%  -1.44%  -0.91%  -1.18  프록시    \n2026-07-28  KMLM ETF                29.20   -0.48%  -2.21%  -0.82%  -0.61  프록시    \n2026-07-28  Simplify CTA ETF (pro…  26.29   -1.87%  -8.27%  -5.12%  -0.99  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %         Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  --------  -----  -------  -------\n2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인     \n2026-07-21  USD Index (DX)  -1,938      +2,928    +60.2%    +0.79  ❌        확인     \n2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인     \n2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인     \n2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인     \n2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-29)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-27  S&P 500             7413.18   +0.02%  -1.14%  확인     \n2026-07-27  Nasdaq 100          28039.21  -0.32%  -3.31%  확인     \n2026-07-27  Dow                 52210.08  +0.51%  -0.02%  확인     \n2026-07-28  Russell 2000        293.40    +0.17%  +0.45%  프록시    \n2026-07-28  STOXX 600 (proxy:…  89.22     +0.43%  +1.58%  프록시    \n2026-07-28  Nikkei 225          62364.92  -3.95%  -6.11%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-27  UST 2Y   4.31%  -2.0bp  확인     \n2026-07-27  UST 5Y   4.40%  -3.0bp  확인     \n2026-07-27  UST 10Y  4.65%  -4.0bp  확인     \n2026-07-27  UST 30Y  5.12%  -4.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인     \n2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인     \n2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-20  WTI                84.38   +1.14%  +4.52%  확인     \n2026-07-20  Brent              86.99   +2.33%  +4.71%  확인     \n2026-07-28  Gold (proxy: GLD)  369.36  -1.41%  -0.58%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3       Confirm\n----------  ---  -----  ------  -------  -------\n2026-07-27  VIX  18.67  +0.48%  +12.20%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-29)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260728.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-07-28",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-07-28T06:53:56+09:00",
      "size": 4700,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-27  SG CTA Trend Index (p…  99.33   -2.04%  -1.59%  -0.21%  -2.05  프록시    \n2026-07-27  SG Short-Term Traders…  31.25   -0.49%  -0.43%  +1.02%  -0.77  프록시    \n2026-07-27  Barclay BTOP50 (proxy…  104.69  -0.74%  -0.43%  +0.65%  -1.11  프록시    \n2026-07-27  DBMF ETF                31.25   -0.49%  -0.43%  +1.02%  -0.77  프록시    \n2026-07-27  KMLM ETF                29.33   -0.98%  -0.44%  +0.27%  -1.17  프록시    \n2026-07-27  Simplify CTA ETF (pro…  26.81   -4.66%  -3.94%  -1.97%  -2.67  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %         Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  --------  -----  -------  -------\n2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인     \n2026-07-21  USD Index (DX)  -1,938      +2,928    +60.2%    +0.79  ❌        확인     \n2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인     \n2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인     \n2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인     \n2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-28)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-24  S&P 500             7411.98   +0.05%  -1.29%  확인     \n2026-07-24  Nasdaq 100          28128.34  -1.15%  -3.52%  확인     \n2026-07-24  Dow                 51947.25  +0.46%  -0.53%  확인     \n2026-07-27  Russell 2000        292.97    +0.62%  -0.28%  프록시    \n2026-07-27  STOXX 600 (proxy:…  88.84     +0.49%  -0.28%  프록시    \n2026-07-27  Nikkei 225          64931.19  +0.50%  -1.79%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-24  UST 2Y   4.33%  -4.0bp  확인     \n2026-07-24  UST 5Y   4.43%  -3.0bp  확인     \n2026-07-24  UST 10Y  4.69%  -2.0bp  확인     \n2026-07-24  UST 30Y  5.16%  -1.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인     \n2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인     \n2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-20  WTI                84.38   +1.14%  +4.52%  확인     \n2026-07-20  Brent              86.99   +2.33%  +4.71%  확인     \n2026-07-27  Gold (proxy: GLD)  374.57  +0.72%  -1.20%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-24  VIX  18.58  -0.64%  +8.97%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-28)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-07-27  SG Short-Term Traders…  31.25   -0.49%  -0.43%  +1.02%  -0.77  프록시",
              "2026-07-27  Barclay BTOP50 (proxy…  104.69  -0.74%  -0.43%  +0.65%  -1.11  프록시",
              "2026-07-27  DBMF ETF                31.25   -0.49%  -0.43%  +1.02%  -0.77  프록시",
              "2026-07-27  KMLM ETF                29.33   -0.98%  -0.44%  +0.27%  -1.17  프록시",
              "2026-07-27  Simplify CTA ETF (pro…  26.81   -4.66%  -3.94%  -1.97%  -2.67  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인",
              "2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인",
              "2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인",
              "2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인",
              "2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-24  S&P 500             7411.98   +0.05%  -1.29%  확인",
              "2026-07-24  Nasdaq 100          28128.34  -1.15%  -3.52%  확인",
              "2026-07-24  Dow                 51947.25  +0.46%  -0.53%  확인",
              "2026-07-27  Russell 2000        292.97    +0.62%  -0.28%  프록시",
              "2026-07-27  STOXX 600 (proxy:…  88.84     +0.49%  -0.28%  프록시",
              "2026-07-27  Nikkei 225          64931.19  +0.50%  -1.79%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-24  UST 2Y   4.33%  -4.0bp  확인",
              "2026-07-24  UST 5Y   4.43%  -3.0bp  확인",
              "2026-07-24  UST 10Y  4.69%  -2.0bp  확인",
              "2026-07-24  UST 30Y  5.16%  -1.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인",
              "2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인",
              "2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-20  WTI                84.38   +1.14%  +4.52%  확인",
              "2026-07-20  Brent              86.99   +2.33%  +4.71%  확인",
              "2026-07-27  Gold (proxy: GLD)  374.57  +0.72%  -1.20%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-24  VIX  18.58  -0.64%  +8.97%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-27  SG CTA Trend Index (p…  99.33   -2.04%  -1.59%  -0.21%  -2.05  프록시    \n2026-07-27  SG Short-Term Traders…  31.25   -0.49%  -0.43%  +1.02%  -0.77  프록시    \n2026-07-27  Barclay BTOP50 (proxy…  104.69  -0.74%  -0.43%  +0.65%  -1.11  프록시    \n2026-07-27  DBMF ETF                31.25   -0.49%  -0.43%  +1.02%  -0.77  프록시    \n2026-07-27  KMLM ETF                29.33   -0.98%  -0.44%  +0.27%  -1.17  프록시    \n2026-07-27  Simplify CTA ETF (pro…  26.81   -4.66%  -3.94%  -1.97%  -2.67  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %         Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  --------  -----  -------  -------\n2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인     \n2026-07-21  USD Index (DX)  -1,938      +2,928    +60.2%    +0.79  ❌        확인     \n2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인     \n2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인     \n2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인     \n2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-28)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-24  S&P 500             7411.98   +0.05%  -1.29%  확인     \n2026-07-24  Nasdaq 100          28128.34  -1.15%  -3.52%  확인     \n2026-07-24  Dow                 51947.25  +0.46%  -0.53%  확인     \n2026-07-27  Russell 2000        292.97    +0.62%  -0.28%  프록시    \n2026-07-27  STOXX 600 (proxy:…  88.84     +0.49%  -0.28%  프록시    \n2026-07-27  Nikkei 225          64931.19  +0.50%  -1.79%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-24  UST 2Y   4.33%  -4.0bp  확인     \n2026-07-24  UST 5Y   4.43%  -3.0bp  확인     \n2026-07-24  UST 10Y  4.69%  -2.0bp  확인     \n2026-07-24  UST 30Y  5.16%  -1.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-24  DXY (proxy: DTWEX…  120.71  -0.16%  +0.11%  확인     \n2026-07-24  EURUSD              1.14    +0.11%  -0.20%  확인     \n2026-07-24  USDJPY              163.71  -0.05%  +0.43%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-20  WTI                84.38   +1.14%  +4.52%  확인     \n2026-07-20  Brent              86.99   +2.33%  +4.71%  확인     \n2026-07-27  Gold (proxy: GLD)  374.57  +0.72%  -1.20%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-24  VIX  18.58  -0.64%  +8.97%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-28)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260727.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-07-27",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-07-27T06:53:54+09:00",
      "size": 4703,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-24  SG CTA Trend Index (p…  102.63  -0.98%  +0.80%  +2.55%  -1.01  프록시    \n2026-07-24  SG Short-Term Traders…  31.41   -0.25%  +0.29%  +1.75%  -0.43  프록시    \n2026-07-24  Barclay BTOP50 (proxy…  106.63  -0.53%  +0.45%  +1.97%  -0.84  프록시    \n2026-07-24  DBMF ETF                31.41   -0.25%  +0.29%  +1.75%  -0.43  프록시    \n2026-07-24  KMLM ETF                29.62   -0.80%  +0.61%  +2.19%  -0.99  프록시    \n2026-07-24  Simplify CTA ETF (pro…  28.12   -1.88%  +1.48%  +3.69%  -1.08  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %         Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  --------  -----  -------  -------\n2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인     \n2026-07-21  USD Index (DX)  -1,938      +2,928    +60.2%    +0.79  ❌        확인     \n2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인     \n2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인     \n2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인     \n2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-27)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-24  S&P 500             7411.98   +0.05%  -1.29%  확인     \n2026-07-24  Nasdaq 100          28128.34  -1.15%  -3.52%  확인     \n2026-07-24  Dow                 51947.25  +0.46%  -0.53%  확인     \n2026-07-24  Russell 2000        291.17    -0.31%  -1.81%  프록시    \n2026-07-24  STOXX 600 (proxy:…  88.41     +0.66%  -0.39%  프록시    \n2026-07-24  Nikkei 225          64611.15  -2.73%  -2.45%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-23  UST 2Y   4.37%  +6.0bp  확인     \n2026-07-23  UST 5Y   4.46%  +5.0bp  확인     \n2026-07-23  UST 10Y  4.71%  +4.0bp  확인     \n2026-07-23  UST 30Y  5.17%  +2.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인     \n2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인     \n2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-20  WTI                84.38   +1.14%  +4.52%  확인     \n2026-07-20  Brent              86.99   +2.33%  +4.71%  확인     \n2026-07-24  Gold (proxy: GLD)  371.90  +0.10%  -0.78%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1       D3      Confirm\n----------  ---  -----  -------  ------  -------\n2026-07-23  VIX  18.70  +12.38%  +0.27%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-27)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-07-24  SG Short-Term Traders…  31.41   -0.25%  +0.29%  +1.75%  -0.43  프록시",
              "2026-07-24  Barclay BTOP50 (proxy…  106.63  -0.53%  +0.45%  +1.97%  -0.84  프록시",
              "2026-07-24  DBMF ETF                31.41   -0.25%  +0.29%  +1.75%  -0.43  프록시",
              "2026-07-24  KMLM ETF                29.62   -0.80%  +0.61%  +2.19%  -0.99  프록시",
              "2026-07-24  Simplify CTA ETF (pro…  28.12   -1.88%  +1.48%  +3.69%  -1.08  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인",
              "2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인",
              "2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인",
              "2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인",
              "2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-24  S&P 500             7411.98   +0.05%  -1.29%  확인",
              "2026-07-24  Nasdaq 100          28128.34  -1.15%  -3.52%  확인",
              "2026-07-24  Dow                 51947.25  +0.46%  -0.53%  확인",
              "2026-07-24  Russell 2000        291.17    -0.31%  -1.81%  프록시",
              "2026-07-24  STOXX 600 (proxy:…  88.41     +0.66%  -0.39%  프록시",
              "2026-07-24  Nikkei 225          64611.15  -2.73%  -2.45%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-23  UST 2Y   4.37%  +6.0bp  확인",
              "2026-07-23  UST 5Y   4.46%  +5.0bp  확인",
              "2026-07-23  UST 10Y  4.71%  +4.0bp  확인",
              "2026-07-23  UST 30Y  5.17%  +2.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인",
              "2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인",
              "2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-20  WTI                84.38   +1.14%  +4.52%  확인",
              "2026-07-20  Brent              86.99   +2.33%  +4.71%  확인",
              "2026-07-24  Gold (proxy: GLD)  371.90  +0.10%  -0.78%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-23  VIX  18.70  +12.38%  +0.27%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-24  SG CTA Trend Index (p…  102.63  -0.98%  +0.80%  +2.55%  -1.01  프록시    \n2026-07-24  SG Short-Term Traders…  31.41   -0.25%  +0.29%  +1.75%  -0.43  프록시    \n2026-07-24  Barclay BTOP50 (proxy…  106.63  -0.53%  +0.45%  +1.97%  -0.84  프록시    \n2026-07-24  DBMF ETF                31.41   -0.25%  +0.29%  +1.75%  -0.43  프록시    \n2026-07-24  KMLM ETF                29.62   -0.80%  +0.61%  +2.19%  -0.99  프록시    \n2026-07-24  Simplify CTA ETF (pro…  28.12   -1.88%  +1.48%  +3.69%  -1.08  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %         Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  --------  -----  -------  -------\n2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인     \n2026-07-21  USD Index (DX)  -1,938      +2,928    +60.2%    +0.79  ❌        확인     \n2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인     \n2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인     \n2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인     \n2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-27)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-24  S&P 500             7411.98   +0.05%  -1.29%  확인     \n2026-07-24  Nasdaq 100          28128.34  -1.15%  -3.52%  확인     \n2026-07-24  Dow                 51947.25  +0.46%  -0.53%  확인     \n2026-07-24  Russell 2000        291.17    -0.31%  -1.81%  프록시    \n2026-07-24  STOXX 600 (proxy:…  88.41     +0.66%  -0.39%  프록시    \n2026-07-24  Nikkei 225          64611.15  -2.73%  -2.45%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-23  UST 2Y   4.37%  +6.0bp  확인     \n2026-07-23  UST 5Y   4.46%  +5.0bp  확인     \n2026-07-23  UST 10Y  4.71%  +4.0bp  확인     \n2026-07-23  UST 30Y  5.17%  +2.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인     \n2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인     \n2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-20  WTI                84.38   +1.14%  +4.52%  확인     \n2026-07-20  Brent              86.99   +2.33%  +4.71%  확인     \n2026-07-24  Gold (proxy: GLD)  371.90  +0.10%  -0.78%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1       D3      Confirm\n----------  ---  -----  -------  ------  -------\n2026-07-23  VIX  18.70  +12.38%  +0.27%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-27)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260726.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-07-26",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-07-26T06:53:54+09:00",
      "size": 4703,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-24  SG CTA Trend Index (p…  102.63  -0.98%  +0.80%  +2.55%  -1.01  프록시    \n2026-07-24  SG Short-Term Traders…  31.41   -0.25%  +0.29%  +1.75%  -0.43  프록시    \n2026-07-24  Barclay BTOP50 (proxy…  106.63  -0.53%  +0.45%  +1.97%  -0.84  프록시    \n2026-07-24  DBMF ETF                31.41   -0.25%  +0.29%  +1.75%  -0.43  프록시    \n2026-07-24  KMLM ETF                29.62   -0.80%  +0.61%  +2.19%  -0.99  프록시    \n2026-07-24  Simplify CTA ETF (pro…  28.12   -1.88%  +1.48%  +3.69%  -1.08  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %         Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  --------  -----  -------  -------\n2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인     \n2026-07-21  USD Index (DX)  -1,938      +2,928    +60.2%    +0.79  ❌        확인     \n2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인     \n2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인     \n2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인     \n2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-26)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-24  S&P 500             7411.98   +0.05%  -1.29%  확인     \n2026-07-24  Nasdaq 100          28128.34  -1.15%  -3.52%  확인     \n2026-07-24  Dow                 51947.25  +0.46%  -0.53%  확인     \n2026-07-24  Russell 2000        291.17    -0.31%  -1.81%  프록시    \n2026-07-24  STOXX 600 (proxy:…  88.41     +0.66%  -0.39%  프록시    \n2026-07-24  Nikkei 225          64611.15  -2.73%  -2.45%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-23  UST 2Y   4.37%  +6.0bp  확인     \n2026-07-23  UST 5Y   4.46%  +5.0bp  확인     \n2026-07-23  UST 10Y  4.71%  +4.0bp  확인     \n2026-07-23  UST 30Y  5.17%  +2.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인     \n2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인     \n2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-20  WTI                84.38   +1.14%  +4.52%  확인     \n2026-07-20  Brent              86.99   +2.33%  +4.71%  확인     \n2026-07-24  Gold (proxy: GLD)  371.90  +0.10%  -0.78%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1       D3      Confirm\n----------  ---  -----  -------  ------  -------\n2026-07-23  VIX  18.70  +12.38%  +0.27%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-26)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-07-24  SG Short-Term Traders…  31.41   -0.25%  +0.29%  +1.75%  -0.43  프록시",
              "2026-07-24  Barclay BTOP50 (proxy…  106.63  -0.53%  +0.45%  +1.97%  -0.84  프록시",
              "2026-07-24  DBMF ETF                31.41   -0.25%  +0.29%  +1.75%  -0.43  프록시",
              "2026-07-24  KMLM ETF                29.62   -0.80%  +0.61%  +2.19%  -0.99  프록시",
              "2026-07-24  Simplify CTA ETF (pro…  28.12   -1.88%  +1.48%  +3.69%  -1.08  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인",
              "2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인",
              "2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인",
              "2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인",
              "2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-24  S&P 500             7411.98   +0.05%  -1.29%  확인",
              "2026-07-24  Nasdaq 100          28128.34  -1.15%  -3.52%  확인",
              "2026-07-24  Dow                 51947.25  +0.46%  -0.53%  확인",
              "2026-07-24  Russell 2000        291.17    -0.31%  -1.81%  프록시",
              "2026-07-24  STOXX 600 (proxy:…  88.41     +0.66%  -0.39%  프록시",
              "2026-07-24  Nikkei 225          64611.15  -2.73%  -2.45%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-23  UST 2Y   4.37%  +6.0bp  확인",
              "2026-07-23  UST 5Y   4.46%  +5.0bp  확인",
              "2026-07-23  UST 10Y  4.71%  +4.0bp  확인",
              "2026-07-23  UST 30Y  5.17%  +2.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인",
              "2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인",
              "2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-20  WTI                84.38   +1.14%  +4.52%  확인",
              "2026-07-20  Brent              86.99   +2.33%  +4.71%  확인",
              "2026-07-24  Gold (proxy: GLD)  371.90  +0.10%  -0.78%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-23  VIX  18.70  +12.38%  +0.27%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-24  SG CTA Trend Index (p…  102.63  -0.98%  +0.80%  +2.55%  -1.01  프록시    \n2026-07-24  SG Short-Term Traders…  31.41   -0.25%  +0.29%  +1.75%  -0.43  프록시    \n2026-07-24  Barclay BTOP50 (proxy…  106.63  -0.53%  +0.45%  +1.97%  -0.84  프록시    \n2026-07-24  DBMF ETF                31.41   -0.25%  +0.29%  +1.75%  -0.43  프록시    \n2026-07-24  KMLM ETF                29.62   -0.80%  +0.61%  +2.19%  -0.99  프록시    \n2026-07-24  Simplify CTA ETF (pro…  28.12   -1.88%  +1.48%  +3.69%  -1.08  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %         Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  --------  -----  -------  -------\n2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인     \n2026-07-21  USD Index (DX)  -1,938      +2,928    +60.2%    +0.79  ❌        확인     \n2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인     \n2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인     \n2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인     \n2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-26)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-24  S&P 500             7411.98   +0.05%  -1.29%  확인     \n2026-07-24  Nasdaq 100          28128.34  -1.15%  -3.52%  확인     \n2026-07-24  Dow                 51947.25  +0.46%  -0.53%  확인     \n2026-07-24  Russell 2000        291.17    -0.31%  -1.81%  프록시    \n2026-07-24  STOXX 600 (proxy:…  88.41     +0.66%  -0.39%  프록시    \n2026-07-24  Nikkei 225          64611.15  -2.73%  -2.45%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-23  UST 2Y   4.37%  +6.0bp  확인     \n2026-07-23  UST 5Y   4.46%  +5.0bp  확인     \n2026-07-23  UST 10Y  4.71%  +4.0bp  확인     \n2026-07-23  UST 30Y  5.17%  +2.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인     \n2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인     \n2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-20  WTI                84.38   +1.14%  +4.52%  확인     \n2026-07-20  Brent              86.99   +2.33%  +4.71%  확인     \n2026-07-24  Gold (proxy: GLD)  371.90  +0.10%  -0.78%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1       D3      Confirm\n----------  ---  -----  -------  ------  -------\n2026-07-23  VIX  18.70  +12.38%  +0.27%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-26)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260725.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-07-25",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-07-25T06:53:52+09:00",
      "size": 4703,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-24  SG CTA Trend Index (p…  102.67  -0.94%  +0.84%  +2.59%  -0.97  프록시    \n2026-07-24  SG Short-Term Traders…  31.40   -0.29%  +0.26%  +1.72%  -0.48  프록시    \n2026-07-24  Barclay BTOP50 (proxy…  106.63  -0.53%  +0.45%  +1.97%  -0.84  프록시    \n2026-07-24  DBMF ETF                31.40   -0.29%  +0.26%  +1.72%  -0.48  프록시    \n2026-07-24  KMLM ETF                29.63   -0.77%  +0.65%  +2.23%  -0.96  프록시    \n2026-07-24  Simplify CTA ETF (pro…  28.16   -1.76%  +1.61%  +3.82%  -1.01  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %         Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  --------  -----  -------  -------\n2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인     \n2026-07-21  USD Index (DX)  -1,938      +2,928    +60.2%    +0.79  ❌        확인     \n2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인     \n2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인     \n2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인     \n2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-25)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-23  S&P 500             7408.30   -1.21%  -0.47%  확인     \n2026-07-23  Nasdaq 100          28454.81  -1.87%  -0.52%  확인     \n2026-07-23  Dow                 51711.65  -0.97%  -0.25%  확인     \n2026-07-24  Russell 2000        291.21    -0.30%  -1.80%  프록시    \n2026-07-24  STOXX 600 (proxy:…  88.42     +0.68%  -0.38%  프록시    \n2026-07-24  Nikkei 225          64611.15  -2.73%  -2.45%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-23  UST 2Y   4.37%  +6.0bp  확인     \n2026-07-23  UST 5Y   4.46%  +5.0bp  확인     \n2026-07-23  UST 10Y  4.71%  +4.0bp  확인     \n2026-07-23  UST 30Y  5.17%  +2.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인     \n2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인     \n2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-20  WTI                84.38   +1.14%  +4.52%  확인     \n2026-07-20  Brent              86.99   +2.33%  +4.71%  확인     \n2026-07-24  Gold (proxy: GLD)  371.95  +0.12%  -0.76%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1       D3      Confirm\n----------  ---  -----  -------  ------  -------\n2026-07-23  VIX  18.70  +12.38%  +0.27%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-25)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-07-24  SG Short-Term Traders…  31.40   -0.29%  +0.26%  +1.72%  -0.48  프록시",
              "2026-07-24  Barclay BTOP50 (proxy…  106.63  -0.53%  +0.45%  +1.97%  -0.84  프록시",
              "2026-07-24  DBMF ETF                31.40   -0.29%  +0.26%  +1.72%  -0.48  프록시",
              "2026-07-24  KMLM ETF                29.63   -0.77%  +0.65%  +2.23%  -0.96  프록시",
              "2026-07-24  Simplify CTA ETF (pro…  28.16   -1.76%  +1.61%  +3.82%  -1.01  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인",
              "2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인",
              "2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인",
              "2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인",
              "2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-23  S&P 500             7408.30   -1.21%  -0.47%  확인",
              "2026-07-23  Nasdaq 100          28454.81  -1.87%  -0.52%  확인",
              "2026-07-23  Dow                 51711.65  -0.97%  -0.25%  확인",
              "2026-07-24  Russell 2000        291.21    -0.30%  -1.80%  프록시",
              "2026-07-24  STOXX 600 (proxy:…  88.42     +0.68%  -0.38%  프록시",
              "2026-07-24  Nikkei 225          64611.15  -2.73%  -2.45%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-23  UST 2Y   4.37%  +6.0bp  확인",
              "2026-07-23  UST 5Y   4.46%  +5.0bp  확인",
              "2026-07-23  UST 10Y  4.71%  +4.0bp  확인",
              "2026-07-23  UST 30Y  5.17%  +2.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인",
              "2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인",
              "2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-20  WTI                84.38   +1.14%  +4.52%  확인",
              "2026-07-20  Brent              86.99   +2.33%  +4.71%  확인",
              "2026-07-24  Gold (proxy: GLD)  371.95  +0.12%  -0.76%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-23  VIX  18.70  +12.38%  +0.27%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-24  SG CTA Trend Index (p…  102.67  -0.94%  +0.84%  +2.59%  -0.97  프록시    \n2026-07-24  SG Short-Term Traders…  31.40   -0.29%  +0.26%  +1.72%  -0.48  프록시    \n2026-07-24  Barclay BTOP50 (proxy…  106.63  -0.53%  +0.45%  +1.97%  -0.84  프록시    \n2026-07-24  DBMF ETF                31.40   -0.29%  +0.26%  +1.72%  -0.48  프록시    \n2026-07-24  KMLM ETF                29.63   -0.77%  +0.65%  +2.23%  -0.96  프록시    \n2026-07-24  Simplify CTA ETF (pro…  28.16   -1.76%  +1.61%  +3.82%  -1.01  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %         Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  --------  -----  -------  -------\n2026-07-21  S&P 500 (ES)    5,413       -162,359  -96.8%    -0.67  ❌        확인     \n2026-07-21  USD Index (DX)  -1,938      +2,928    +60.2%    +0.79  ❌        확인     \n2026-07-21  UST 10Y         -129,286    -130,618  -9806.2%  -1.16  부분 ✔     확인     \n2026-07-21  UST 2Y          23,966      +43,914   +220.1%   +8.30  ❌        확인     \n2026-07-21  UST 5Y          -44,038     +1,970    +4.3%     +0.44  ❌        확인     \n2026-07-21  UST 30Y         -380,604    +518,561  +57.7%    +1.17  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-25)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-23  S&P 500             7408.30   -1.21%  -0.47%  확인     \n2026-07-23  Nasdaq 100          28454.81  -1.87%  -0.52%  확인     \n2026-07-23  Dow                 51711.65  -0.97%  -0.25%  확인     \n2026-07-24  Russell 2000        291.21    -0.30%  -1.80%  프록시    \n2026-07-24  STOXX 600 (proxy:…  88.42     +0.68%  -0.38%  프록시    \n2026-07-24  Nikkei 225          64611.15  -2.73%  -2.45%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-23  UST 2Y   4.37%  +6.0bp  확인     \n2026-07-23  UST 5Y   4.46%  +5.0bp  확인     \n2026-07-23  UST 10Y  4.71%  +4.0bp  확인     \n2026-07-23  UST 30Y  5.17%  +2.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인     \n2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인     \n2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-20  WTI                84.38   +1.14%  +4.52%  확인     \n2026-07-20  Brent              86.99   +2.33%  +4.71%  확인     \n2026-07-24  Gold (proxy: GLD)  371.95  +0.12%  -0.76%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1       D3      Confirm\n----------  ---  -----  -------  ------  -------\n2026-07-23  VIX  18.70  +12.38%  +0.27%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-25)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260724.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 발생 / slow deleveraging / exposure reduction",
      "date": "2026-07-24",
      "trigger": "발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-07-24T06:53:53+09:00",
      "size": 4689,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-23  SG CTA Trend Index (p…  101.64  +1.47%  +2.90%  +4.39%  1.44  프록시    \n2026-07-23  SG Short-Term Traders…  31.48   +0.29%  +1.75%  +1.94%  0.37  프록시    \n2026-07-23  Barclay BTOP50 (proxy…  105.13  +0.88%  +1.98%  +2.59%  1.12  프록시    \n2026-07-23  DBMF ETF                31.48   +0.29%  +1.75%  +1.94%  0.37  프록시    \n2026-07-23  KMLM ETF                29.89   +1.48%  +2.21%  +3.23%  1.53  프록시    \n2026-07-23  Simplify CTA ETF (pro…  28.65   +2.65%  +4.75%  +8.07%  1.59  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-07-14  S&P 500 (ES)    4,293       -166,009  -97.5%     -0.69  ❌        확인     \n2026-07-14  USD Index (DX)  -4,866      -412      -9.3%      -0.05  ❌        확인     \n2026-07-14  UST 10Y         -129,864    -131,132  -10341.6%  -1.18  부분 ✔     확인     \n2026-07-14  UST 2Y          -19,948     +4,344    +17.9%     +0.87  ❌        확인     \n2026-07-14  UST 5Y          -46,008     +1,698    +3.6%      +0.42  ❌        확인     \n2026-07-14  UST 30Y         -378,565    +531,887  +58.4%     +1.20  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 발생 (기준일: 2026-07-24)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-22  S&P 500             7498.96   -0.14%  +0.55%  확인     \n2026-07-22  Nasdaq 100          28998.10  -0.54%  +1.42%  확인     \n2026-07-22  Dow                 52218.58  -0.01%  +0.14%  확인     \n2026-07-23  Russell 2000        292.09    -0.58%  -0.08%  프록시    \n2026-07-23  STOXX 600 (proxy:…  87.79     -1.46%  +0.11%  프록시    \n2026-07-23  Nikkei 225          66422.60  +0.46%  +3.56%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-22  UST 2Y   4.31%  +5.0bp  확인     \n2026-07-22  UST 5Y   4.41%  +4.0bp  확인     \n2026-07-22  UST 10Y  4.67%  +4.0bp  확인     \n2026-07-22  UST 30Y  5.15%  +2.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인     \n2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인     \n2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-20  WTI                84.38   +1.14%  +4.52%  확인     \n2026-07-20  Brent              86.99   +2.33%  +4.71%  확인     \n2026-07-23  Gold (proxy: GLD)  371.53  -2.00%  +1.07%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3       Confirm\n----------  ---  -----  ------  -------  -------\n2026-07-22  VIX  16.64  -2.40%  -11.35%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 발생 (기준일: 2026-07-24)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-07-23  SG Short-Term Traders…  31.48   +0.29%  +1.75%  +1.94%  0.37  프록시",
              "2026-07-23  Barclay BTOP50 (proxy…  105.13  +0.88%  +1.98%  +2.59%  1.12  프록시",
              "2026-07-23  DBMF ETF                31.48   +0.29%  +1.75%  +1.94%  0.37  프록시",
              "2026-07-23  KMLM ETF                29.89   +1.48%  +2.21%  +3.23%  1.53  프록시",
              "2026-07-23  Simplify CTA ETF (pro…  28.65   +2.65%  +4.75%  +8.07%  1.59  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-14  S&P 500 (ES)    4,293       -166,009  -97.5%     -0.69  ❌        확인",
              "2026-07-14  UST 10Y         -129,864    -131,132  -10341.6%  -1.18  부분 ✔     확인",
              "2026-07-14  UST 2Y          -19,948     +4,344    +17.9%     +0.87  ❌        확인",
              "2026-07-14  UST 5Y          -46,008     +1,698    +3.6%      +0.42  ❌        확인",
              "2026-07-14  UST 30Y         -378,565    +531,887  +58.4%     +1.20  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-22  S&P 500             7498.96   -0.14%  +0.55%  확인",
              "2026-07-22  Nasdaq 100          28998.10  -0.54%  +1.42%  확인",
              "2026-07-22  Dow                 52218.58  -0.01%  +0.14%  확인",
              "2026-07-23  Russell 2000        292.09    -0.58%  -0.08%  프록시",
              "2026-07-23  STOXX 600 (proxy:…  87.79     -1.46%  +0.11%  프록시",
              "2026-07-23  Nikkei 225          66422.60  +0.46%  +3.56%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-22  UST 2Y   4.31%  +5.0bp  확인",
              "2026-07-22  UST 5Y   4.41%  +4.0bp  확인",
              "2026-07-22  UST 10Y  4.67%  +4.0bp  확인",
              "2026-07-22  UST 30Y  5.15%  +2.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인",
              "2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인",
              "2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-20  WTI                84.38   +1.14%  +4.52%  확인",
              "2026-07-20  Brent              86.99   +2.33%  +4.71%  확인",
              "2026-07-23  Gold (proxy: GLD)  371.53  -2.00%  +1.07%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-22  VIX  16.64  -2.40%  -11.35%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-23  SG CTA Trend Index (p…  101.64  +1.47%  +2.90%  +4.39%  1.44  프록시    \n2026-07-23  SG Short-Term Traders…  31.48   +0.29%  +1.75%  +1.94%  0.37  프록시    \n2026-07-23  Barclay BTOP50 (proxy…  105.13  +0.88%  +1.98%  +2.59%  1.12  프록시    \n2026-07-23  DBMF ETF                31.48   +0.29%  +1.75%  +1.94%  0.37  프록시    \n2026-07-23  KMLM ETF                29.89   +1.48%  +2.21%  +3.23%  1.53  프록시    \n2026-07-23  Simplify CTA ETF (pro…  28.65   +2.65%  +4.75%  +8.07%  1.59  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-07-14  S&P 500 (ES)    4,293       -166,009  -97.5%     -0.69  ❌        확인     \n2026-07-14  USD Index (DX)  -4,866      -412      -9.3%      -0.05  ❌        확인     \n2026-07-14  UST 10Y         -129,864    -131,132  -10341.6%  -1.18  부분 ✔     확인     \n2026-07-14  UST 2Y          -19,948     +4,344    +17.9%     +0.87  ❌        확인     \n2026-07-14  UST 5Y          -46,008     +1,698    +3.6%      +0.42  ❌        확인     \n2026-07-14  UST 30Y         -378,565    +531,887  +58.4%     +1.20  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 발생 (기준일: 2026-07-24)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-22  S&P 500             7498.96   -0.14%  +0.55%  확인     \n2026-07-22  Nasdaq 100          28998.10  -0.54%  +1.42%  확인     \n2026-07-22  Dow                 52218.58  -0.01%  +0.14%  확인     \n2026-07-23  Russell 2000        292.09    -0.58%  -0.08%  프록시    \n2026-07-23  STOXX 600 (proxy:…  87.79     -1.46%  +0.11%  프록시    \n2026-07-23  Nikkei 225          66422.60  +0.46%  +3.56%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-22  UST 2Y   4.31%  +5.0bp  확인     \n2026-07-22  UST 5Y   4.41%  +4.0bp  확인     \n2026-07-22  UST 10Y  4.67%  +4.0bp  확인     \n2026-07-22  UST 30Y  5.15%  +2.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인     \n2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인     \n2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-20  WTI                84.38   +1.14%  +4.52%  확인     \n2026-07-20  Brent              86.99   +2.33%  +4.71%  확인     \n2026-07-23  Gold (proxy: GLD)  371.53  -2.00%  +1.07%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3       Confirm\n----------  ---  -----  ------  -------  -------\n2026-07-22  VIX  16.64  -2.40%  -11.35%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 발생 (기준일: 2026-07-24)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260723.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger",
      "date": "2026-07-23",
      "trigger": "미발생",
      "regime": "neutral/no trigger",
      "mtime": "2026-07-23T06:53:51+09:00",
      "size": 4652,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-22  SG CTA Trend Index (p…  100.45  +0.51%  +2.25%  +2.69%  0.50  프록시    \n2026-07-22  SG Short-Term Traders…  31.41   +0.29%  +1.75%  +1.36%  0.38  프록시    \n2026-07-22  Barclay BTOP50 (proxy…  104.42  +0.28%  +1.80%  +1.87%  0.32  프록시    \n2026-07-22  DBMF ETF                31.41   +0.29%  +1.75%  +1.36%  0.38  프록시    \n2026-07-22  KMLM ETF                29.52   +0.27%  +1.85%  +2.39%  0.20  프록시    \n2026-07-22  Simplify CTA ETF (pro…  27.98   +0.97%  +3.17%  +4.33%  0.61  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-07-14  S&P 500 (ES)    4,293       -166,009  -97.5%     -0.69  ❌        확인     \n2026-07-14  USD Index (DX)  -4,866      -412      -9.3%      -0.05  ❌        확인     \n2026-07-14  UST 10Y         -129,864    -131,132  -10341.6%  -1.18  부분 ✔     확인     \n2026-07-14  UST 2Y          -19,948     +4,344    +17.9%     +0.87  ❌        확인     \n2026-07-14  UST 5Y          -46,008     +1,698    +3.6%      +0.42  ❌        확인     \n2026-07-14  UST 30Y         -378,565    +531,887  +58.4%     +1.20  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-07-23)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-21  S&P 500             7509.20   +0.89%  -0.33%  확인     \n2026-07-21  Nasdaq 100          29155.18  +1.93%  +0.45%  확인     \n2026-07-21  Dow                 52224.64  +0.74%  -0.62%  확인     \n2026-07-22  Russell 2000        293.77    -0.93%  -0.09%  프록시    \n2026-07-22  STOXX 600 (proxy:…  89.10     +0.38%  +0.58%  프록시    \n2026-07-22  Nikkei 225          66115.60  -0.18%  -1.08%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-21  UST 2Y   4.26%  +5.0bp  확인     \n2026-07-21  UST 5Y   4.37%  +4.0bp  확인     \n2026-07-21  UST 10Y  4.63%  +3.0bp  확인     \n2026-07-21  UST 30Y  5.13%  +2.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인     \n2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인     \n2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-20  WTI                84.38   +1.14%  +4.52%  확인     \n2026-07-20  Brent              86.99   +2.33%  +4.71%  확인     \n2026-07-22  Gold (proxy: GLD)  379.07  +1.14%  +2.89%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-21  VIX  17.05  -8.58%  +1.91%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 미발생 (기준일: 2026-07-23)",
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
              "2026-07-22  SG Short-Term Traders…  31.41   +0.29%  +1.75%  +1.36%  0.38  프록시",
              "2026-07-22  Barclay BTOP50 (proxy…  104.42  +0.28%  +1.80%  +1.87%  0.32  프록시",
              "2026-07-22  DBMF ETF                31.41   +0.29%  +1.75%  +1.36%  0.38  프록시",
              "2026-07-22  KMLM ETF                29.52   +0.27%  +1.85%  +2.39%  0.20  프록시",
              "2026-07-22  Simplify CTA ETF (pro…  27.98   +0.97%  +3.17%  +4.33%  0.61  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-14  S&P 500 (ES)    4,293       -166,009  -97.5%     -0.69  ❌        확인",
              "2026-07-14  UST 10Y         -129,864    -131,132  -10341.6%  -1.18  부분 ✔     확인",
              "2026-07-14  UST 2Y          -19,948     +4,344    +17.9%     +0.87  ❌        확인",
              "2026-07-14  UST 5Y          -46,008     +1,698    +3.6%      +0.42  ❌        확인",
              "2026-07-14  UST 30Y         -378,565    +531,887  +58.4%     +1.20  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-21  S&P 500             7509.20   +0.89%  -0.33%  확인",
              "2026-07-21  Nasdaq 100          29155.18  +1.93%  +0.45%  확인",
              "2026-07-21  Dow                 52224.64  +0.74%  -0.62%  확인",
              "2026-07-22  Russell 2000        293.77    -0.93%  -0.09%  프록시",
              "2026-07-22  STOXX 600 (proxy:…  89.10     +0.38%  +0.58%  프록시",
              "2026-07-22  Nikkei 225          66115.60  -0.18%  -1.08%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-21  UST 2Y   4.26%  +5.0bp  확인",
              "2026-07-21  UST 5Y   4.37%  +4.0bp  확인",
              "2026-07-21  UST 10Y  4.63%  +3.0bp  확인",
              "2026-07-21  UST 30Y  5.13%  +2.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인",
              "2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인",
              "2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-20  WTI                84.38   +1.14%  +4.52%  확인",
              "2026-07-20  Brent              86.99   +2.33%  +4.71%  확인",
              "2026-07-22  Gold (proxy: GLD)  379.07  +1.14%  +2.89%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-21  VIX  17.05  -8.58%  +1.91%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-22  SG CTA Trend Index (p…  100.45  +0.51%  +2.25%  +2.69%  0.50  프록시    \n2026-07-22  SG Short-Term Traders…  31.41   +0.29%  +1.75%  +1.36%  0.38  프록시    \n2026-07-22  Barclay BTOP50 (proxy…  104.42  +0.28%  +1.80%  +1.87%  0.32  프록시    \n2026-07-22  DBMF ETF                31.41   +0.29%  +1.75%  +1.36%  0.38  프록시    \n2026-07-22  KMLM ETF                29.52   +0.27%  +1.85%  +2.39%  0.20  프록시    \n2026-07-22  Simplify CTA ETF (pro…  27.98   +0.97%  +3.17%  +4.33%  0.61  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-07-14  S&P 500 (ES)    4,293       -166,009  -97.5%     -0.69  ❌        확인     \n2026-07-14  USD Index (DX)  -4,866      -412      -9.3%      -0.05  ❌        확인     \n2026-07-14  UST 10Y         -129,864    -131,132  -10341.6%  -1.18  부분 ✔     확인     \n2026-07-14  UST 2Y          -19,948     +4,344    +17.9%     +0.87  ❌        확인     \n2026-07-14  UST 5Y          -46,008     +1,698    +3.6%      +0.42  ❌        확인     \n2026-07-14  UST 30Y         -378,565    +531,887  +58.4%     +1.20  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-07-23)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-21  S&P 500             7509.20   +0.89%  -0.33%  확인     \n2026-07-21  Nasdaq 100          29155.18  +1.93%  +0.45%  확인     \n2026-07-21  Dow                 52224.64  +0.74%  -0.62%  확인     \n2026-07-22  Russell 2000        293.77    -0.93%  -0.09%  프록시    \n2026-07-22  STOXX 600 (proxy:…  89.10     +0.38%  +0.58%  프록시    \n2026-07-22  Nikkei 225          66115.60  -0.18%  -1.08%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-21  UST 2Y   4.26%  +5.0bp  확인     \n2026-07-21  UST 5Y   4.37%  +4.0bp  확인     \n2026-07-21  UST 10Y  4.63%  +3.0bp  확인     \n2026-07-21  UST 30Y  5.13%  +2.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인     \n2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인     \n2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-20  WTI                84.38   +1.14%  +4.52%  확인     \n2026-07-20  Brent              86.99   +2.33%  +4.71%  확인     \n2026-07-22  Gold (proxy: GLD)  379.07  +1.14%  +2.89%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-21  VIX  17.05  -8.58%  +1.91%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 미발생 (기준일: 2026-07-23)",
        "국면 판단: neutral/no trigger",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260722.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 발생 / slow deleveraging / exposure reduction",
      "date": "2026-07-22",
      "trigger": "발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-07-22T10:03:51+09:00",
      "size": 4689,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-21  SG CTA Trend Index (p…  100.57  +1.06%  +2.53%  +2.07%  1.05  프록시    \n2026-07-21  SG Short-Term Traders…  31.32   +1.23%  +1.42%  +0.97%  1.66  프록시    \n2026-07-21  Barclay BTOP50 (proxy…  104.69  +0.94%  +1.54%  +1.58%  1.21  프록시    \n2026-07-21  DBMF ETF                31.32   +1.23%  +1.42%  +0.97%  1.66  프록시    \n2026-07-21  KMLM ETF                29.44   +0.65%  +1.66%  +2.19%  0.62  프록시    \n2026-07-21  Simplify CTA ETF (pro…  27.71   +1.32%  +4.53%  +3.05%  0.82  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-07-14  S&P 500 (ES)    4,293       -166,009  -97.5%     -0.69  ❌        확인     \n2026-07-14  USD Index (DX)  -4,866      -412      -9.3%      -0.05  ❌        확인     \n2026-07-14  UST 10Y         -129,864    -131,132  -10341.6%  -1.18  부분 ✔     확인     \n2026-07-14  UST 2Y          -19,948     +4,344    +17.9%     +0.87  ❌        확인     \n2026-07-14  UST 5Y          -46,008     +1,698    +3.6%      +0.42  ❌        확인     \n2026-07-14  UST 30Y         -378,565    +531,887  +58.4%     +1.20  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 발생 (기준일: 2026-07-22)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-21  S&P 500             7509.20   +0.89%  -0.33%  확인     \n2026-07-20  Nasdaq 100          28604.23  +0.04%  -3.05%  확인     \n2026-07-21  Dow                 52224.64  +0.74%  -0.62%  확인     \n2026-07-21  Russell 2000        296.54    +1.45%  +0.32%  프록시    \n2026-07-21  STOXX 600 (proxy:…  88.76     +1.22%  -0.03%  프록시    \n2026-07-17  Nikkei 225          64141.12  -4.03%  -5.32%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-20  UST 2Y   4.21%  +3.0bp  확인     \n2026-07-20  UST 5Y   4.33%  +5.0bp  확인     \n2026-07-20  UST 10Y  4.60%  +5.0bp  확인     \n2026-07-20  UST 30Y  5.11%  +5.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인     \n2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인     \n2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-13  WTI                79.20   +9.32%  +6.22%  확인     \n2026-07-13  Brent              81.62   +9.79%  +6.69%  확인     \n2026-07-21  Gold (proxy: GLD)  374.81  +1.96%  +2.70%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3       Confirm\n----------  ---  -----  ------  -------  -------\n2026-07-20  VIX  18.65  -0.64%  +19.02%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 발생 (기준일: 2026-07-22)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-07-21  SG Short-Term Traders…  31.32   +1.23%  +1.42%  +0.97%  1.66  프록시",
              "2026-07-21  Barclay BTOP50 (proxy…  104.69  +0.94%  +1.54%  +1.58%  1.21  프록시",
              "2026-07-21  DBMF ETF                31.32   +1.23%  +1.42%  +0.97%  1.66  프록시",
              "2026-07-21  KMLM ETF                29.44   +0.65%  +1.66%  +2.19%  0.62  프록시",
              "2026-07-21  Simplify CTA ETF (pro…  27.71   +1.32%  +4.53%  +3.05%  0.82  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-14  S&P 500 (ES)    4,293       -166,009  -97.5%     -0.69  ❌        확인",
              "2026-07-14  UST 10Y         -129,864    -131,132  -10341.6%  -1.18  부분 ✔     확인",
              "2026-07-14  UST 2Y          -19,948     +4,344    +17.9%     +0.87  ❌        확인",
              "2026-07-14  UST 5Y          -46,008     +1,698    +3.6%      +0.42  ❌        확인",
              "2026-07-14  UST 30Y         -378,565    +531,887  +58.4%     +1.20  ❌        확인"
            ]
          },
          {
            "name": "Overnight Index",
            "sourceType": "proxy quotes",
            "status": "ok",
            "available": 6,
            "total": 6,
            "rows": [
              "2026-07-21  S&P 500             7509.20   +0.89%  -0.33%  확인",
              "2026-07-20  Nasdaq 100          28604.23  +0.04%  -3.05%  확인",
              "2026-07-21  Dow                 52224.64  +0.74%  -0.62%  확인",
              "2026-07-21  Russell 2000        296.54    +1.45%  +0.32%  프록시",
              "2026-07-21  STOXX 600 (proxy:…  88.76     +1.22%  -0.03%  프록시",
              "2026-07-17  Nikkei 225          64141.12  -4.03%  -5.32%  확인"
            ]
          },
          {
            "name": "UST Rates",
            "sourceType": "official/FRED",
            "status": "ok",
            "available": 4,
            "total": 4,
            "rows": [
              "2026-07-20  UST 2Y   4.21%  +3.0bp  확인",
              "2026-07-20  UST 5Y   4.33%  +5.0bp  확인",
              "2026-07-20  UST 10Y  4.60%  +5.0bp  확인",
              "2026-07-20  UST 30Y  5.11%  +5.0bp  확인"
            ]
          },
          {
            "name": "FX",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인",
              "2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인",
              "2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인"
            ]
          },
          {
            "name": "Commodities",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 3,
            "total": 3,
            "rows": [
              "2026-07-13  WTI                79.20   +9.32%  +6.22%  확인",
              "2026-07-13  Brent              81.62   +9.79%  +6.69%  확인",
              "2026-07-21  Gold (proxy: GLD)  374.81  +1.96%  +2.70%  프록시"
            ]
          },
          {
            "name": "Volatility",
            "sourceType": "official/proxy",
            "status": "ok",
            "available": 1,
            "total": 1,
            "rows": [
              "2026-07-20  VIX  18.65  -0.64%  +19.02%  확인"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-21  SG CTA Trend Index (p…  100.57  +1.06%  +2.53%  +2.07%  1.05  프록시    \n2026-07-21  SG Short-Term Traders…  31.32   +1.23%  +1.42%  +0.97%  1.66  프록시    \n2026-07-21  Barclay BTOP50 (proxy…  104.69  +0.94%  +1.54%  +1.58%  1.21  프록시    \n2026-07-21  DBMF ETF                31.32   +1.23%  +1.42%  +0.97%  1.66  프록시    \n2026-07-21  KMLM ETF                29.44   +0.65%  +1.66%  +2.19%  0.62  프록시    \n2026-07-21  Simplify CTA ETF (pro…  27.71   +1.32%  +4.53%  +3.05%  0.82  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-07-14  S&P 500 (ES)    4,293       -166,009  -97.5%     -0.69  ❌        확인     \n2026-07-14  USD Index (DX)  -4,866      -412      -9.3%      -0.05  ❌        확인     \n2026-07-14  UST 10Y         -129,864    -131,132  -10341.6%  -1.18  부분 ✔     확인     \n2026-07-14  UST 2Y          -19,948     +4,344    +17.9%     +0.87  ❌        확인     \n2026-07-14  UST 5Y          -46,008     +1,698    +3.6%      +0.42  ❌        확인     \n2026-07-14  UST 30Y         -378,565    +531,887  +58.4%     +1.20  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 발생 (기준일: 2026-07-22)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-21  S&P 500             7509.20   +0.89%  -0.33%  확인     \n2026-07-20  Nasdaq 100          28604.23  +0.04%  -3.05%  확인     \n2026-07-21  Dow                 52224.64  +0.74%  -0.62%  확인     \n2026-07-21  Russell 2000        296.54    +1.45%  +0.32%  프록시    \n2026-07-21  STOXX 600 (proxy:…  88.76     +1.22%  -0.03%  프록시    \n2026-07-17  Nikkei 225          64141.12  -4.03%  -5.32%  확인     \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-20  UST 2Y   4.21%  +3.0bp  확인     \n2026-07-20  UST 5Y   4.33%  +5.0bp  확인     \n2026-07-20  UST 10Y  4.60%  +5.0bp  확인     \n2026-07-20  UST 30Y  5.11%  +5.0bp  확인     \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-17  DXY (proxy: DTWEX…  120.53  +0.17%  +0.05%  확인     \n2026-07-17  EURUSD              1.14    -0.06%  +0.11%  확인     \n2026-07-17  USDJPY              162.43  +0.01%  +0.18%  확인     \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-13  WTI                79.20   +9.32%  +6.22%  확인     \n2026-07-13  Brent              81.62   +9.79%  +6.69%  확인     \n2026-07-21  Gold (proxy: GLD)  374.81  +1.96%  +2.70%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3       Confirm\n----------  ---  -----  ------  -------  -------\n2026-07-20  VIX  18.65  -0.64%  +19.02%  확인     \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 발생 (기준일: 2026-07-22)",
        "국면 판단: slow deleveraging / exposure reduction",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260721.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger",
      "date": "2026-07-21",
      "trigger": "미발생",
      "regime": "neutral/no trigger",
      "mtime": "2026-07-21T08:45:27+09:00",
      "size": 4708,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 미발생 / neutral/no trigger\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-20  SG CTA Trend Index (p…  99.63   +0.66%  +1.09%  +1.56%  0.66  프록시    \n2026-07-20  SG Short-Term Traders…  30.94   +0.23%  -0.16%  -0.16%  0.32  프록시    \n2026-07-20  Barclay BTOP50 (proxy…  103.79  +0.57%  +0.65%  +0.89%  0.72  프록시    \n2026-07-20  DBMF ETF                30.94   +0.23%  -0.16%  -0.16%  0.32  프록시    \n2026-07-20  KMLM ETF                29.25   +0.91%  +1.46%  +1.95%  0.92  프록시    \n2026-07-20  Simplify CTA ETF (pro…  27.35   +0.85%  +1.98%  +2.90%  0.55  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-07-14  S&P 500 (ES)    4,293       -166,009  -97.5%     -0.69  ❌        확인     \n2026-07-14  USD Index (DX)  -4,866      -412      -9.3%      -0.05  ❌        확인     \n2026-07-14  UST 10Y         -129,864    -131,132  -10341.6%  -1.18  부분 ✔     확인     \n2026-07-14  UST 2Y          -19,948     +4,344    +17.9%     +0.87  ❌        확인     \n2026-07-14  UST 5Y          -46,008     +1,698    +3.6%      +0.42  ❌        확인     \n2026-07-14  UST 30Y         -378,565    +531,887  +58.4%     +1.20  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-07-21)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인(캐시) \n2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인(캐시) \n2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인(캐시) \n2026-07-20  Russell 2000        292.31    -0.59%  -1.17%  프록시    \n2026-07-20  STOXX 600 (proxy:…  87.69     -1.02%  -1.60%  프록시    \n2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인(캐시) \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-09  UST 2Y   4.16%  -5.0bp  확인(캐시) \n2026-07-09  UST 5Y   4.27%  -4.0bp  확인(캐시) \n2026-07-09  UST 10Y  4.54%  -2.0bp  확인(캐시) \n2026-07-09  UST 30Y  5.05%  -1.0bp  확인(캐시) \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인(캐시) \n2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인(캐시) \n2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인(캐시) \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-06  WTI                69.60   -0.19%  -1.36%  확인(캐시) \n2026-07-06  Brent              69.56   +1.28%  +0.46%  확인(캐시) \n2026-07-20  Gold (proxy: GLD)  367.60  -0.22%  -1.28%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-09  VIX  15.84  -6.27%  +1.73%  확인(캐시) \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 미발생 (기준일: 2026-07-21)",
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
              "2026-07-20  SG Short-Term Traders…  30.94   +0.23%  -0.16%  -0.16%  0.32  프록시",
              "2026-07-20  Barclay BTOP50 (proxy…  103.79  +0.57%  +0.65%  +0.89%  0.72  프록시",
              "2026-07-20  DBMF ETF                30.94   +0.23%  -0.16%  -0.16%  0.32  프록시",
              "2026-07-20  KMLM ETF                29.25   +0.91%  +1.46%  +1.95%  0.92  프록시",
              "2026-07-20  Simplify CTA ETF (pro…  27.35   +0.85%  +1.98%  +2.90%  0.55  프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-14  S&P 500 (ES)    4,293       -166,009  -97.5%     -0.69  ❌        확인",
              "2026-07-14  UST 10Y         -129,864    -131,132  -10341.6%  -1.18  부분 ✔     확인",
              "2026-07-14  UST 2Y          -19,948     +4,344    +17.9%     +0.87  ❌        확인",
              "2026-07-14  UST 5Y          -46,008     +1,698    +3.6%      +0.42  ❌        확인",
              "2026-07-14  UST 30Y         -378,565    +531,887  +58.4%     +1.20  ❌        확인"
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
              "2026-07-20  Russell 2000        292.31    -0.59%  -1.17%  프록시",
              "2026-07-20  STOXX 600 (proxy:…  87.69     -1.02%  -1.60%  프록시",
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
              "2026-07-20  Gold (proxy: GLD)  367.60  -0.22%  -1.28%  프록시"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z   Confirm\n----------  ----------------------  ------  ------  ------  ------  ----  -------\n2026-07-20  SG CTA Trend Index (p…  99.63   +0.66%  +1.09%  +1.56%  0.66  프록시    \n2026-07-20  SG Short-Term Traders…  30.94   +0.23%  -0.16%  -0.16%  0.32  프록시    \n2026-07-20  Barclay BTOP50 (proxy…  103.79  +0.57%  +0.65%  +0.89%  0.72  프록시    \n2026-07-20  DBMF ETF                30.94   +0.23%  -0.16%  -0.16%  0.32  프록시    \n2026-07-20  KMLM ETF                29.25   +0.91%  +1.46%  +1.95%  0.92  프록시    \n2026-07-20  Simplify CTA ETF (pro…  27.35   +0.85%  +1.98%  +2.90%  0.55  프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-07-14  S&P 500 (ES)    4,293       -166,009  -97.5%     -0.69  ❌        확인     \n2026-07-14  USD Index (DX)  -4,866      -412      -9.3%      -0.05  ❌        확인     \n2026-07-14  UST 10Y         -129,864    -131,132  -10341.6%  -1.18  부분 ✔     확인     \n2026-07-14  UST 2Y          -19,948     +4,344    +17.9%     +0.87  ❌        확인     \n2026-07-14  UST 5Y          -46,008     +1,698    +3.6%      +0.42  ❌        확인     \n2026-07-14  UST 30Y         -378,565    +531,887  +58.4%     +1.20  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 미발생 (기준일: 2026-07-21)\n- 국면 판단: neutral/no trigger\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인(캐시) \n2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인(캐시) \n2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인(캐시) \n2026-07-20  Russell 2000        292.31    -0.59%  -1.17%  프록시    \n2026-07-20  STOXX 600 (proxy:…  87.69     -1.02%  -1.60%  프록시    \n2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인(캐시) \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-09  UST 2Y   4.16%  -5.0bp  확인(캐시) \n2026-07-09  UST 5Y   4.27%  -4.0bp  확인(캐시) \n2026-07-09  UST 10Y  4.54%  -2.0bp  확인(캐시) \n2026-07-09  UST 30Y  5.05%  -1.0bp  확인(캐시) \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인(캐시) \n2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인(캐시) \n2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인(캐시) \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-06  WTI                69.60   -0.19%  -1.36%  확인(캐시) \n2026-07-06  Brent              69.56   +1.28%  +0.46%  확인(캐시) \n2026-07-20  Gold (proxy: GLD)  367.60  -0.22%  -1.28%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-09  VIX  15.84  -6.27%  +1.73%  확인(캐시) \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 미발생 (기준일: 2026-07-21)",
        "국면 판단: neutral/no trigger",
        "실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인",
        "데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용"
      ]
    },
    {
      "name": "last_report_20260720.txt",
      "title": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction",
      "date": "2026-07-20",
      "trigger": "재차 발생",
      "regime": "slow deleveraging / exposure reduction",
      "mtime": "2026-07-20T10:00:01+09:00",
      "size": 4764,
      "body": "CTA 포지셔닝 모니터 — Proxy Trigger 재차 발생 / slow deleveraging / exposure reduction\n\n① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-17  SG CTA Trend Index (p…  99.28   +0.78%  +0.33%  +2.72%  0.79   프록시    \n2026-07-17  SG Short-Term Traders…  30.87   -0.03%  -0.48%  +0.23%  -0.04  프록시    \n2026-07-17  Barclay BTOP50 (proxy…  103.57  +0.03%  +0.06%  +1.68%  -0.02  프록시    \n2026-07-17  DBMF ETF                30.87   -0.03%  -0.48%  +0.23%  -0.04  프록시    \n2026-07-17  KMLM ETF                28.98   +0.09%  +0.61%  +3.15%  0.01   프록시    \n2026-07-17  Simplify CTA ETF (pro…  27.12   +2.30%  +0.86%  +4.79%  1.43   프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.\n\n② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-07-14  S&P 500 (ES)    4,293       -166,009  -97.5%     -0.69  ❌        확인     \n2026-07-14  USD Index (DX)  -4,866      -412      -9.3%      -0.05  ❌        확인     \n2026-07-14  UST 10Y         -129,864    -131,132  -10341.6%  -1.18  부분 ✔     확인     \n2026-07-14  UST 2Y          -19,948     +4,344    +17.9%     +0.87  ❌        확인     \n2026-07-14  UST 5Y          -46,008     +1,698    +3.6%      +0.42  ❌        확인     \n2026-07-14  UST 30Y         -378,565    +531,887  +58.4%     +1.20  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).\n\n③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-20)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용\n\n④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인(캐시) \n2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인(캐시) \n2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인(캐시) \n2026-07-17  Russell 2000        294.04    -0.52%  -0.16%  프록시    \n2026-07-17  STOXX 600 (proxy:…  88.59     -0.23%  +0.33%  프록시    \n2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인(캐시) \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-09  UST 2Y   4.16%  -5.0bp  확인(캐시) \n2026-07-09  UST 5Y   4.27%  -4.0bp  확인(캐시) \n2026-07-09  UST 10Y  4.54%  -2.0bp  확인(캐시) \n2026-07-09  UST 30Y  5.05%  -1.0bp  확인(캐시) \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인(캐시) \n2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인(캐시) \n2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인(캐시) \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-06  WTI                69.60   -0.19%  -1.36%  확인(캐시) \n2026-07-06  Brent              69.56   +1.28%  +0.46%  확인(캐시) \n2026-07-17  Gold (proxy: GLD)  368.41  +0.95%  -1.00%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-09  VIX  15.84  -6.27%  +1.73%  확인(캐시) \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기.",
      "summary": {
        "cta": "- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-20)",
        "regime": "- 국면 판단: slow deleveraging / exposure reduction",
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
              "2026-07-17  SG Short-Term Traders…  30.87   -0.03%  -0.48%  +0.23%  -0.04  프록시",
              "2026-07-17  Barclay BTOP50 (proxy…  103.57  +0.03%  +0.06%  +1.68%  -0.02  프록시",
              "2026-07-17  DBMF ETF                30.87   -0.03%  -0.48%  +0.23%  -0.04  프록시",
              "2026-07-17  KMLM ETF                28.98   +0.09%  +0.61%  +3.15%  0.01   프록시",
              "2026-07-17  Simplify CTA ETF (pro…  27.12   +2.30%  +0.86%  +4.79%  1.43   프록시"
            ]
          },
          {
            "name": "Weekly COT",
            "sourceType": "official/CFTC",
            "status": "ok",
            "available": 5,
            "total": 5,
            "rows": [
              "2026-07-14  S&P 500 (ES)    4,293       -166,009  -97.5%     -0.69  ❌        확인",
              "2026-07-14  UST 10Y         -129,864    -131,132  -10341.6%  -1.18  부분 ✔     확인",
              "2026-07-14  UST 2Y          -19,948     +4,344    +17.9%     +0.87  ❌        확인",
              "2026-07-14  UST 5Y          -46,008     +1,698    +3.6%      +0.42  ❌        확인",
              "2026-07-14  UST 30Y         -378,565    +531,887  +58.4%     +1.20  ❌        확인"
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
              "2026-07-17  Russell 2000        294.04    -0.52%  -0.16%  프록시",
              "2026-07-17  STOXX 600 (proxy:…  88.59     -0.23%  +0.33%  프록시",
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
              "2026-07-17  Gold (proxy: GLD)  368.41  +0.95%  -1.00%  프록시"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
        "cta": "① DAILY CTA Proxy Trigger\n```\n기준일         Asset/Index             Value   D1 Δ%   D3      D5      Δ Z    Confirm\n----------  ----------------------  ------  ------  ------  ------  -----  -------\n2026-07-17  SG CTA Trend Index (p…  99.28   +0.78%  +0.33%  +2.72%  0.79   프록시    \n2026-07-17  SG Short-Term Traders…  30.87   -0.03%  -0.48%  +0.23%  -0.04  프록시    \n2026-07-17  Barclay BTOP50 (proxy…  103.57  +0.03%  +0.06%  +1.68%  -0.02  프록시    \n2026-07-17  DBMF ETF                30.87   -0.03%  -0.48%  +0.23%  -0.04  프록시    \n2026-07-17  KMLM ETF                28.98   +0.09%  +0.61%  +3.15%  0.01   프록시    \n2026-07-17  Simplify CTA ETF (pro…  27.12   +2.30%  +0.86%  +4.79%  1.43   프록시    \n```\nTrigger 기준(프록시): D1≤-1% 또는 |Z|≥1, 3D≤-2%, 5D≤-3%.",
        "cot": "② Weekly COT Signals (최신 CFTC 기준)\n```\nDate        Asset           Value(Net)  WoW Δ     %          Δ Z    Unwind?  Confirm\n----------  --------------  ----------  --------  ---------  -----  -------  -------\n2026-07-14  S&P 500 (ES)    4,293       -166,009  -97.5%     -0.69  ❌        확인     \n2026-07-14  USD Index (DX)  -4,866      -412      -9.3%      -0.05  ❌        확인     \n2026-07-14  UST 10Y         -129,864    -131,132  -10341.6%  -1.18  부분 ✔     확인     \n2026-07-14  UST 2Y          -19,948     +4,344    +17.9%     +0.87  ❌        확인     \n2026-07-14  UST 5Y          -46,008     +1,698    +3.6%      +0.42  ❌        확인     \n2026-07-14  UST 30Y         -378,565    +531,887  +58.4%     +1.20  ❌        확인     \n```\n표기: Unwind?는 WoW Δ의 하방 Z-score 기준(≤-1.5 ✔, ≤-1.0 부분 ✔).",
        "alert": "③ 종합 Alert\n- CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-20)\n- 국면 판단: slow deleveraging / exposure reduction\n- 실행 포인트: 변동성/추세 훼손 신호(프록시)가 누적되는지 3~5일 창으로 재확인\n- 데이터 메모: S&P 500 (ES): CFTC COT Financial Futures (official zip) 사용 / USD Index (DX): CFTC COT Financial Futures (official zip) 사용",
        "market": "④ 간결한 일일 마켓 모니터(CTA 제외)\n(1) overnight 주요 지수 (프록시)\n```\n기준일         Index               Value     D1      D3      Confirm\n----------  ------------------  --------  ------  ------  -------\n2026-07-10  S&P 500             7575.39   +0.42%  +0.95%  확인(캐시) \n2026-07-10  Nasdaq 100          29825.11  +0.33%  +2.24%  확인(캐시) \n2026-07-10  Dow                 52637.01  +0.29%  -0.54%  확인(캐시) \n2026-07-17  Russell 2000        294.04    -0.52%  -0.16%  프록시    \n2026-07-17  STOXX 600 (proxy:…  88.59     -0.23%  +0.33%  프록시    \n2026-07-10  Nikkei 225          68557.73  +1.20%  +0.44%  확인(캐시) \n```\n(2) 금리 (FRED 공개 CSV)\n```\nDate        Rate     Yield  D1      Confirm\n----------  -------  -----  ------  -------\n2026-07-09  UST 2Y   4.16%  -5.0bp  확인(캐시) \n2026-07-09  UST 5Y   4.27%  -4.0bp  확인(캐시) \n2026-07-09  UST 10Y  4.54%  -2.0bp  확인(캐시) \n2026-07-09  UST 30Y  5.05%  -1.0bp  확인(캐시) \n```\n\n(3) FX (프록시)\n```\n기준일         FX                  Value   D1      D3      Confirm\n----------  ------------------  ------  ------  ------  -------\n2026-07-02  DXY (proxy: DTWEX…  120.69  -0.38%  -0.22%  확인(캐시) \n2026-07-02  EURUSD              1.14    +0.56%  +0.20%  확인(캐시) \n2026-07-02  USDJPY              160.90  -0.93%  -0.64%  확인(캐시) \n```\n(4) 원자재 (프록시)\n```\n기준일         Commodity          Value   D1      D3      Confirm\n----------  -----------------  ------  ------  ------  -------\n2026-07-06  WTI                69.60   -0.19%  -1.36%  확인(캐시) \n2026-07-06  Brent              69.56   +1.28%  +0.46%  확인(캐시) \n2026-07-17  Gold (proxy: GLD)  368.41  +0.95%  -1.00%  프록시    \n```\n(5) 주식 변동성 (프록시)\n```\n기준일         Vol  Value  D1      D3      Confirm\n----------  ---  -----  ------  ------  -------\n2026-07-09  VIX  15.84  -6.27%  +1.73%  확인(캐시) \n```\n메모: VVIX는 무료/공식 일봉 소스 미연동으로 핵심 coverage 계산에서 제외.\n(6) 미 증시 breadth: 확인 제한(소스 미연동)\n(7) 향후 24~48h 주요 이벤트(공식 일정): 없음/확인 제한\n(8) 실행 가능한 핵심 요약: 아래 Alert 참고\n\n데이터 소스/제약:\n- 일부 지수/ETF/FX/원자재는 무료 공개 소스를 프록시로 사용(리포트 내 Confirm=프록시).\n- COT는 CFTC 공개 데이터 접근 시에만 반영(실패 시 확인 제한).\n- 실시간/공식 소스 미확인 값은 추정처럼 쓰지 않고 ‘확인 제한/프록시’로 표기."
      },
      "alertBullets": [
        "CTA 프록시 트리거: 재차 발생 (기준일: 2026-07-20)",
        "국면 판단: slow deleveraging / exposure reduction",
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
            "status": "ok",
            "detail": "HTTP 200 application/json; charset=UTF-8"
          },
          {
            "name": "CFTC",
            "status": "ok",
            "detail": "HTTP 200 text/html; charset=utf-8"
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
