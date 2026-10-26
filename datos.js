/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Lunes 26 de octubre de 2026",
  "actualizado": "08:00 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "Datos EE. UU.", "v": "15:30" },
    { "n": "Apertura cash", "v": "14:30" },
    { "n": "Fed (FOMC)", "v": "28 oct · 19:00" }
  ],
  "precio": {
    "premarket": "≈ 29.179",
    "cambio": "≈ +61 · +0,21 %",
    "dir": "up",
    "cierre_ayer": "29.117,75 (viernes)",
    "gap": "≈ +61 pts (alcista leve)",
    "gap_mnq": "≈ 122 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "",
    "titulo": "Neutral",
    "confianza": 2,
    "texto": "El futuro sube un 0,2 % porque el crudo cede tras el «no habrá ataque hoy» de Trump sobre Irán, pero Asia cae con los chips y la semana trae Fed (miércoles), PIB y PCE (jueves) y Microsoft, Alphabet y Amazon. Lo normal es un lunes de rango y posicionamiento dentro del rango del viernes.",
    "condicion": "Rango del viernes 28.987–29.326. Aceptación por encima de 29.326 → alcista hacia 29.600; perder 28.987 → bajista hacia 28.860 y 28.400."
  },
  "ayer": {
    "titulo": "Qué pasó el viernes · 23 oct",
    "etiqueta": "Nasdaq −0,21 %",
    "dir": "dn",
    "resumen": "Día mixto: el Nasdaq 100 cerró plano (28.957,53) gracias a la tecnología (XLK +0,49 %) y los chips (SOX +0,44 %; Micron, AMD e Intel suben), mientras el Dow cayó un 1,23 % arrastrado por financieras, industriales y consumo. El crudo marcó máximos desde 2022 (Brent 116,72 $) por el riesgo de nuevos ataques a Irán, el bono a 10 años tocó ≈ 5 % y la confianza de Michigan bajó a 48,0 con expectativas de inflación a 1 año del 4,7 %. Siguen las dudas sobre el gasto en IA tras Meta y Tesla. En la semana, el Nasdaq 100 −0,79 % y el SOX −3,21 %.",
    "indices": [
      { "n": "Nasdaq", "v": "−0,21 %", "dir": "dn" },
      { "n": "S&P 500", "v": "−0,52 %", "dir": "dn" },
      { "n": "Dow", "v": "−1,23 %", "dir": "dn" },
      { "n": "Russell 2000", "v": "−0,29 %", "dir": "dn" }
    ]
  },
  "noticias": [
    { "t": "Trump: «no habrá ataque hoy» a Irán; el crudo cede desde máximos de 2022", "v": "Brent −1,3 %", "dir": "up" },
    { "t": "Mediadores de Catar en Teherán; Ormuz sigue sin acuerdo de reapertura", "v": "riesgo ↑", "dir": "dn" },
    { "t": "Amazon: capacidad de AWS vendida en 2026, casi toda 2027 y parte de 2028", "v": "AMZN +", "dir": "up" },
    { "t": "Dudas sobre el capex en IA tras Meta y el recorte del 20 % de Tesla", "v": "NDX semana −0,79 %", "dir": "dn" },
    { "t": "Michigan 48,0 y expectativas de inflación a 1 año del 4,7 %", "v": "inflación ↑", "dir": "dn" },
    { "t": "Asia: chips japoneses −3 %, Kospi −1,1 %; ETF de Brasil −15 % tras la victoria de Lula", "v": "futuro +0,2 %", "dir": "" }
  ],
  "noticias_nota": "% del cierre del viernes salvo indicación.",
  "estructura": {
    "h4": "Bajista. Tras el máximo del miércoles (contado 29.822) el jueves rompió estructura a la baja (BOS, −2,9 %) y el viernes fue una vela interior de 28.987 a 29.326 sin recuperar nada. Máximos decrecientes desde el récord de ≈ 31.600 y línea de tendencia de abril rota (XTB). Mientras no supere 29.326 y, sobre todo, la zona 29.600–29.800, cada rebote es un máximo decreciente; el último soporte antes de 28.175 (contado) es 28.860–28.907.",
    "h1": "Lateral. Dos sesiones dentro del rango 28.987–29.326 con mínimos casi iguales cerca de 29.000 (liquidez por debajo). El gap de la noche lleva el precio a la mitad superior del rango; solo un cierre de 1H por encima de 29.326 sería un CHoCH alcista, y perder 28.987 reanuda la secuencia de mínimos decrecientes."
  },
  "fuerza": [
    { "n": "Energía XLE", "v": "+2,60 %", "pct": 100, "dir": "up" },
    { "n": "Tecnología XLK", "v": "+0,49 %", "pct": 19, "dir": "up" },
    { "n": "Semis SOX", "v": "+0,44 %", "pct": 17, "dir": "up" },
    { "n": "Nasdaq 100", "v": "0,00 %", "pct": 0, "dir": "up" },
    { "n": "Russell 2000", "v": "−0,29 %", "pct": 11, "dir": "dn" },
    { "n": "S&P 500", "v": "−0,52 %", "pct": 20, "dir": "dn" },
    { "n": "Dow", "v": "−1,23 %", "pct": 47, "dir": "dn" },
    { "n": "Comunicaciones XLC", "v": "−1,78 %", "pct": 68, "dir": "dn" },
    { "n": "Consumo básico XLP", "v": "−1,92 %", "pct": 74, "dir": "dn" }
  ],
  "fuerza_nota": "Solo energía, tecnología e inmobiliario terminaron en verde; consumo básico, comunicaciones, consumo discrecional, financieras e industriales lideraron las caídas.",
  "niveles": [
    { "n": "Techo semanal opciones (contado)", "v": "29.978,3", "tipo": "ref" },
    { "n": "Resistencia 2 · Fibo 38,2 % XTB (contado)", "v": "29.935", "tipo": "r" },
    { "n": "Cierre del miércoles (contado)", "v": "29.822,52", "tipo": "ref" },
    { "n": "Resistencia 1 · máx. del viernes", "v": "29.326", "tipo": "r" },
    { "n": "Precio premarket (aprox.)", "v": "≈ 29.179", "tipo": "precio" },
    { "n": "Cierre del viernes", "v": "29.117,75", "tipo": "ref" },
    { "n": "Soporte 1 · mín. del viernes", "v": "28.987", "tipo": "s" },
    { "n": "Cierre NDX contado", "v": "28.957,53", "tipo": "ref" },
    { "n": "Soporte 2 · Fibo 61,8 % XTB (contado)", "v": "28.907", "tipo": "s" },
    { "n": "Soporte 3 · Pascali (contado)", "v": "28.860", "tipo": "s" },
    { "n": "Suelo semanal opciones (contado)", "v": "28.396,9", "tipo": "ref" },
    { "n": "Soporte 4 · Fibo 78,6 % XTB (contado)", "v": "28.175", "tipo": "s" }
  ],
  "niveles_nota": "Máx./mín. del viernes y cierre: futuro NQZ26 (Investing.com). Niveles «contado» = índice NDX/US100; el futuro cotiza ≈ 160 pts por encima. Máx./mín. nocturnos: —. RSI 14 diario: 39,6 (XTB, 20 oct); RSI 1H/4H: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · rango con techo", "dir": "dn", "texto": "Lunes de espera antes de la Fed y las megacaps: el gap alcista se agota por debajo de 29.326 y el precio rota de vuelta hacia el cierre del viernes (29.118) y la defensa de 29.000.", "gatillo": "Gatillo: rechazo en 29.300–29.326 o cierre de 15 min bajo 29.118" },
    "alternativo": { "titulo": "Alternativo · ruptura alcista", "dir": "up", "texto": "El crudo sigue cediendo y los compradores aprovechan el «no ataque» y las noticias de AWS: rompe el máximo del viernes y busca 29.600 y la zona 29.800.", "gatillo": "Gatillo: cierre de 1H por encima de 29.326" },
    "invalidacion": "Invalidación del sesgo neutral: cierre de 4H fuera del rango 28.987–29.326. Por debajo, la estructura bajista 4H toma el mando (28.860 → 28.400); por encima, la lectura pasa a alcista de corto plazo."
  },
  "intermercado": [
    { "n": "Brent", "v": "110,23", "c": "−1,3 % · alivio", "dir": "up" },
    { "n": "Bono 10A EE. UU.", "v": "4,97 %", "c": "−3 pb (viernes 4,999 %)", "dir": "" },
    { "n": "Oro", "v": "≈ 4.001", "c": "ligeramente al alza", "dir": "" },
    { "n": "USD/JPY", "v": "156,79", "c": "—", "dir": "" },
    { "n": "VIX", "v": "19,45", "c": "+2,2 % viernes", "dir": "dn" },
    { "n": "Bitcoin", "v": "≈ 80.000", "c": "a la baja", "dir": "dn" }
  ],
  "globales": "Asia (cierre/en curso): Nikkei −0,1 %, Kospi −1,1 % (≈ −20 % en el mes), Hang Seng +0,2 %, Shanghái −0,4 %, ASX −0,2 %; Tokyo Electron y Renesas −3 %. Europa abre a las 09:00: futuros —; Euro Stoxx 50 bajista mientras siga bajo 6.210 (Pascali). Semana de bancos centrales: Fed, BCE y Banco de Japón.",
  "agenda": [
    { "h": "14:30", "e": "Apertura de Wall Street", "imp": "alto" },
    { "h": "15:30", "e": "Fed de Dallas: índice manufacturero de octubre", "imp": "medio" },
    { "h": "27 oct", "e": "Pedidos de bienes duraderos, confianza del consumidor y venta de viviendas nuevas", "imp": "medio" },
    { "h": "28 oct 19:00", "e": "Decisión de la Fed (FOMC) y rueda de prensa a las 19:30 · ≈ 90 % mantener 3,75–4 %", "imp": "alto" },
    { "h": "28 oct", "e": "Microsoft y Alphabet, tras el cierre", "imp": "alto" },
    { "h": "29 oct 13:30", "e": "PIB T3 (avance) y PCE de septiembre", "imp": "alto" },
    { "h": "29 oct", "e": "Amazon e Intel, tras el cierre", "imp": "alto" }
  ],
  "resultados": "Antes de la apertura: Verizon · Después del cierre: Cadence Design, Nucor y Amkor (hora sin confirmar). Martes: Coca-Cola, UPS, SoFi y Robinhood. Miércoles: Microsoft y Alphabet. Jueves: Amazon e Intel. En Asia: SK Hynix y Samsung esta semana.",
  "pesados": [
    { "t": "MSFT", "v": "+0,66 %", "dir": "up" },
    { "t": "AAPL", "v": "−0,14 %", "dir": "dn" },
    { "t": "NVDA", "v": "−0,59 %", "dir": "dn" },
    { "t": "TSLA", "v": "−0,63 %", "dir": "dn" },
    { "t": "AMZN", "v": "−0,95 %", "dir": "dn" },
    { "t": "META", "v": "−0,96 %", "dir": "dn" },
    { "t": "GOOGL", "v": "−1,08 %", "dir": "dn" },
    { "t": "AVGO", "v": "—", "dir": "" }
  ],
  "pesados_nota": "Premarket individual: — (sin datos fiables a esta hora); los % son el cierre del viernes (GOOGL = clase C). Semis el viernes: SOX +0,44 %, Micron +2,46 %, AMD +1,74 %, Intel +1,72 %; en Asia hoy los chips caen (Tokyo Electron, Renesas −3 %). Amazon, atento a la noticia de AWS.",
  "aviso_horario": "Europa cambió de hora el domingo 25 y EE. UU. lo hará el 1 nov: del lunes 26 al viernes 30 oct el desfase con Nueva York es de 5 h → datos a las 13:30, apertura a las 14:30, cierre a las 21:00 y Fed el miércoles 28 a las 19:00 (Madrid).",
  "fuentes": [
    { "n": "AP vía Yahoo Finance (cierres)", "url": "https://finance.yahoo.com/markets/world-indices/articles/major-us-stock-indexes-fared-201458598.html" },
    { "n": "CappNotes (sectores e intermercado)", "url": "https://cappnotes.substack.com/p/closing-look-friday-october-23-2026" },
    { "n": "TheStreet (viernes)", "url": "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-oct-23-2026" },
    { "n": "ThetaDesk (Nasdaq 100)", "url": "https://thetadesk.substack.com/p/the-weekly-debrief-the-nasdaq-100" },
    { "n": "Investing.com (futuro NQZ26)", "url": "https://www.investing.com/indices/nq-100-futures" },
    { "n": "Benzinga (futuros del lunes)", "url": "https://www.benzinga.com/markets/prediction-markets/26/10/62581682/stock-market-will-sp-500-open-up-or-down-today-65" },
    { "n": "Reuters vía Business Recorder (Asia)", "url": "https://www.brecorder.com/news/40445944/stocks-trade-cautiously-in-asia-brent-off-six-month-top" },
    { "n": "AP vía AOL (Asia y crudo)", "url": "https://www.aol.com/articles/shares-fall-asia-decline-wall-024402000.html" },
    { "n": "Investing.com (chips en Asia)", "url": "https://www.investing.com/news/stock-market-news/asia-stocks-slip-as-chipmakers-retreat-earnings-central-bank-meetings-loom-4971378" },
    { "n": "TechFlow (megacaps, Irán, AWS)", "url": "https://www.techflowpost.com/en-US/article/34844" },
    { "n": "XTB (niveles US100)", "url": "https://www.xtb.com/int/market-analysis/news-and-research/chart-of-the-day-us100-nasdaq-100-rebound-in-ai-trade-vs-weakening-technical-picture" },
    { "n": "Silvio Pascali (análisis intermercado)", "url": "https://silviopascali.substack.com/p/daily-intermarket-analysis-26october2026" },
    { "n": "StrongBuy Analytics (agenda y resultados)", "url": "https://strongbuyanalytics.com/stock-market-outlook" },
    { "n": "DeanFi (sectores y VIX)", "url": "https://deanfi.com/insights/marketpulse/2026-10-23/" }
  ]
};
