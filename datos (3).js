/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Jueves 29 de octubre de 2026",
  "actualizado": "08:00 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "Datos EE. UU.", "v": "13:30" },
    { "n": "BCE", "v": "≈ 14:15" },
    { "n": "Apertura cash", "v": "14:30" }
  ],
  "precio": {
    "premarket": "≈ 29.637,75",
    "cambio": "−341,75 · −1,14 %",
    "dir": "dn",
    "cierre_ayer": "≈ 29.979,5 (miércoles, futuro)",
    "gap": "≈ −342 pts (bajista)",
    "gap_mnq": "≈ −684 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "dn",
    "titulo": "Bajista",
    "confianza": 3,
    "texto": "El futuro NQ cae ≈ 1,1 % porque Alphabet defrauda (ingresos por debajo y quema de caja por la IA; ≈ −10,5 % en premarket) y arrastra a los chips (AMD −3,3 %, Marvell −9,4 %, NVDA −1 %), aunque Microsoft sube ≈ 3,5 % por Azure. El precio pierde el POC de 29.805 tras fallar en 29.993–30.007. Hoy PIB del T3 y PCE a las 13:30, BCE a las 14:15 y Amazon e Intel tras el cierre; el mercado da más de un 81 % de probabilidad a una subida de la Fed en diciembre.",
    "condicion": "Bajista mientras el precio no recupere 29.833–29.881. Cierre de 1H sobre 29.881 → gap cubierto hacia 29.980; cierre de 4H bajo 29.559 → 29.288."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · miércoles 28 oct",
    "etiqueta": "Nasdaq +0,27 %",
    "dir": "up",
    "resumen": "Subidas moderadas tras la Fed, que mantuvo los tipos en 3,75–4,00 % (10 votos a 2; Cook y Hammack pedían subir 25 pb) y ve la inflación todavía elevada. Lideraron tecnología (XLK +0,80 %) y financieras (XLF +0,45 %); a la cola, utilities (XLU −0,84 %) e inmobiliario (XLRE −0,73 %). Cierres: S&P 500 7.743,98, Nasdaq 26.549,85, Dow 52.475,10 y Russell 2000 2.830,51. Tras el cierre Alphabet se hundió ≈ 10 % por ingresos por debajo de lo esperado y quema de caja; Microsoft subió ≈ 3 % por Azure; Fortinet (−25 %) y ServiceNow (−19 %) castigadas. Bono a 10 años 5,04 % (+5 pb), WTI +2,9 % (102,78 $), oro −0,5 %, VIX 16,91 (−3,5 %). Futuro NQ: liquidación ≈ 29.979,5; máx./mín.: —.",
    "indices": [
      { "n": "Nasdaq", "v": "+0,27 %", "dir": "up" },
      { "n": "S&P 500", "v": "+0,28 %", "dir": "up" },
      { "n": "Dow", "v": "+0,19 %", "dir": "up" },
      { "n": "Russell 2000", "v": "+0,41 %", "dir": "up" }
    ]
  },
  "noticias": [
    { "t": "Alphabet falla en ingresos y acelera la quema de caja por la IA; Google Cloud +103 % no basta", "v": "GOOGL ≈ −10,5 %", "dir": "dn" },
    { "t": "Microsoft bate en flujo de caja y da una previsión fuerte de la nube", "v": "MSFT ≈ +3,5 %", "dir": "up" },
    { "t": "Software y ciberseguridad castigados: Fortinet y ServiceNow tras resultados", "v": "FTNT −25 %", "dir": "dn" },
    { "t": "Chips a la baja con la venta de la IA; Marvell, en conversaciones para comprar Lumentum", "v": "MRVL −9,4 %", "dir": "dn" },
    { "t": "La Fed mantiene 3,75–4,00 % (10–2, dos votos por subir); más de un 81 % de probabilidad de subida en diciembre", "v": "10–2", "dir": "dn" },
    { "t": "Hoy: PIB del T3 y PCE de septiembre, decisión del BCE; Amazon e Intel tras el cierre", "v": "NQ −1,14 %", "dir": "dn" }
  ],
  "noticias_nota": "% del cierre del miércoles salvo indicación; premarket de Reuters/Investing (≈ 09:09 Madrid). Futuro NQ de Yahoo Finance a las 09:17 (Madrid); Reuters lo daba en −1,22 %.",
  "estructura": {
    "h4": "Bajista de corto plazo. El rebote del lunes–martes (CHoCH alcista sobre 29.326) fracasó el miércoles en el máximo decreciente de 29.993–30.007 (Fibonacci 38,2 %) y la reacción a Alphabet lleva al precio a ≈ 29.638, bajo el POC de 29.805 y a 80 puntos del mínimo creciente 29.559 (VAL). Un cierre de 4H bajo 29.559 sería CHoCH bajista del tramo de rebote y abriría 29.288; solo un cierre de 4H sobre 30.007 devolvería el control a los compradores.",
    "h1": "Bajista de madrugada: el precio pierde 29.805–29.833 (CHoCH bajista) y lateraliza en torno a 29.640; mientras no recupere 29.833, los máximos de 1H son decrecientes. Zona de rebote vendible 29.805–29.881; mínimo a vigilar 29.559. Un cierre de 1H sobre 29.881 anularía el CHoCH."
  },
  "fuerza": [
    { "n": "Microsoft (premarket)", "v": "+3,5 %", "pct": 33, "dir": "up" },
    { "n": "Nikkei (Asia)", "v": "+1,1 %", "pct": 10, "dir": "up" },
    { "n": "Tecnología XLK", "v": "+0,80 %", "pct": 8, "dir": "up" },
    { "n": "Financieras XLF", "v": "+0,45 %", "pct": 4, "dir": "up" },
    { "n": "Russell 2000", "v": "+0,41 %", "pct": 4, "dir": "up" },
    { "n": "Inmobiliario XLRE", "v": "−0,73 %", "pct": 7, "dir": "dn" },
    { "n": "Utilities XLU", "v": "−0,84 %", "pct": 8, "dir": "dn" },
    { "n": "Futuro NQ (noche)", "v": "−1,14 %", "pct": 11, "dir": "dn" },
    { "n": "AMD (premarket)", "v": "−3,3 %", "pct": 31, "dir": "dn" },
    { "n": "Alphabet (premarket)", "v": "−10,5 %", "pct": 100, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores e índices: cierre del miércoles (Capp Notes); Asia y futuro, jueves; valores, premarket (Reuters). Lideraron tecnología y financieras; utilities e inmobiliario, a la cola.",
  "niveles": [
    { "n": "Resistencia 4 · objetivo sobre 29.965 (XTB)", "v": "30.219", "tipo": "r" },
    { "n": "Resistencia 3 · SMA 200 (Investing) / objetivo XTB", "v": "30.112–30.118", "tipo": "r" },
    { "n": "Resistencia 2 · máx. decreciente 21–22 oct · Fibo 38,2 %", "v": "29.993–30.007", "tipo": "r" },
    { "n": "Cierre de ayer (futuro, liquidación)", "v": "≈ 29.979,5", "tipo": "ref" },
    { "n": "Resistencia 1 · máx. del martes / VAH", "v": "29.879–29.881", "tipo": "r" },
    { "n": "Fibo 76,4 % (XTB)", "v": "29.833", "tipo": "ref" },
    { "n": "POC del martes (ahora resistencia)", "v": "29.805", "tipo": "r" },
    { "n": "Precio premarket (09:17 Madrid)", "v": "≈ 29.637,75", "tipo": "precio" },
    { "n": "Soporte 1 · VAL del martes", "v": "29.559", "tipo": "s" },
    { "n": "Soporte 2 · mín. del martes / soporte XTB", "v": "29.288–29.295", "tipo": "s" },
    { "n": "Soporte 3 · línea de tendencia (Investing)", "v": "29.000", "tipo": "s" },
    { "n": "Soporte 4 · clave US100 (Bolsamanía)", "v": "28.742", "tipo": "s" }
  ],
  "niveles_nota": "Niveles de XTB del 28 oct (cierre sobre 29.965 → 30.112 y 30.219; rechazo → 29.833 y 29.295). POC/VAH/VAL y mín. del martes: futuro NQ (alphainvestment, 27 oct). SMA 200 y tendencia: Investing (27 oct); 28.742: Bolsamanía (26 oct, CFD US100). No hay niveles nuevos publicados hoy. Premarket: Yahoo Finance (NQ=F, 09:17 Madrid). Máx./mín. de ayer y nocturnos: —. RSI: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · gap bajista y venta de rebotes", "dir": "dn", "texto": "Apertura con gap de ≈ −342 puntos bajo el POC de 29.805. Si el rebote inicial se frena en 29.805–29.881 (zona de oferta), venta hacia 29.559 y 29.288, con el dato de las 13:30 (PIB, PCE) y el BCE (14:15) como primeros catalizadores y Amazon e Intel tras el cierre como riesgo de cola.", "gatillo": "Gatillo: rechazo en 29.805–29.881 y cierre de 15 min bajo 29.620 tras la apertura cash (14:30)" },
    "alternativo": { "titulo": "Alternativo · se absorbe Alphabet y se cubre el gap", "dir": "up", "texto": "Microsoft sostiene al índice y un PIB o PCE tranquilizador (subyacente ≈ 0,3 % m/m o menos) devuelve compradores: el precio recupera 29.833–29.881 y rellena el gap hacia 29.980.", "gatillo": "Gatillo: cierre de 1H sobre 29.881" },
    "invalidacion": "Invalidación: cierre de 4H sobre 30.007 anula el sesgo bajista (→ 30.112–30.118); cierre de 4H bajo 29.559 lo acelera (→ 29.288)."
  },
  "intermercado": [
    { "n": "Brent", "v": "110,94", "c": "−0,6 % hoy · WTI 101,96", "dir": "up" },
    { "n": "Bono 10A EE. UU.", "v": "≈ 5,00 %", "c": "5,04 % cierre miér. · 2A 4,69 %", "dir": "" },
    { "n": "Oro", "v": "4.043,9", "c": "−0,2 % hoy", "dir": "dn" },
    { "n": "USD/JPY", "v": "157,85", "c": "plano · EUR/USD 1,1139", "dir": "" },
    { "n": "VIX", "v": "17,20", "c": "+1,7 % (16,91 miér.)", "dir": "dn" },
    { "n": "Bitcoin", "v": "≈ 79.942", "c": "−1,75 %", "dir": "dn" }
  ],
  "globales": "Asia mixta: Nikkei +1,1 % (64.659,47; SoftBank +1,8 %), Kospi −1,2 % (5.937,66; Samsung −4,1 %, SK Hynix +2,6 %), Taiex −1,4 %, Hang Seng −0,2 % (23.038,70), Shanghai −0,8 % (3.651,43), ASX +0,5 %. Europa abre plana-alcista: Stoxx 600 +0,1 % (≈ 644,8) y FTSE +0,3 % a las 09:06; energía +1 % (Shell +2,6 %), tecnología −0,7 %, Airbus +3,2 %. BCE hoy (se espera mantener el 2,5 %); Banco de Japón, el viernes. Índice del dólar 102,16 (miér.).",
  "agenda": [
    { "h": "13:30", "e": "PIB EE. UU. T3 (avance; est. +3,2 %, previo +2,2 %)", "imp": "alto" },
    { "h": "13:30", "e": "PCE de septiembre: general est. +0,5 % m/m y 3,6 % a/a; subyacente +0,3 % m/m y 3,1 % a/a; gasto personal est. +0,6 %", "imp": "alto" },
    { "h": "13:30", "e": "Peticiones semanales de subsidio de paro (est. ≈ 199 K; previo 194 K)", "imp": "medio" },
    { "h": "≈ 14:15", "e": "Decisión del BCE (se espera mantener el 2,5 %) y rueda de prensa de Lagarde (≈ 14:45)", "imp": "alto" },
    { "h": "14:30", "e": "Apertura de Wall Street", "imp": "medio" },
    { "h": "21:00", "e": "Cierre de Wall Street", "imp": "bajo" },
    { "h": "Tras cierre", "e": "Amazon: resultados (BPA est. ≈ 1,96 $; ingresos ≈ 202.200 M$; foco en AWS y capex)", "imp": "alto" },
    { "h": "Tras cierre", "e": "Intel: resultados (foundry y márgenes)", "imp": "medio" },
    { "h": "30 oct", "e": "Banco de Japón · índice de costes laborales T3 (13:30) · PMI de Chicago (14:45)", "imp": "medio" },
    { "h": "8–9 dic", "e": "Próximo FOMC: CME FedWatch da más de un 81 % a una subida · empleo de octubre el 6 nov", "imp": "alto" }
  ],
  "resultados": "Antes de la apertura: Eli Lilly, Merck, Caterpillar, Ares Management y Blue Owl. Después del cierre: Amazon e Intel. También hoy: Mastercard, Linde, Gilead, Starbucks, Coinbase, Strategy y Roblox (horario: —). Ayer tras el cierre: Alphabet (≈ −10,5 %), Microsoft (+3,5 %), ServiceNow (−19 %), Fortinet (−25 %), Chipotle (+6,7 %) y Carvana (+9,2 %).",
  "pesados": [
    { "t": "NVDA", "v": "−1,0 %", "dir": "dn" },
    { "t": "AAPL", "v": "—", "dir": "" },
    { "t": "MSFT", "v": "+3,5 %", "dir": "up" },
    { "t": "AMZN", "v": "—", "dir": "" },
    { "t": "META", "v": "—", "dir": "" },
    { "t": "GOOGL", "v": "≈ −10,5 %", "dir": "dn" },
    { "t": "TSLA", "v": "—", "dir": "" },
    { "t": "AVGO", "v": "—", "dir": "" }
  ],
  "pesados_nota": "Premarket según Reuters/Investing (≈ 09:09 Madrid; otra fuente da GOOGL −10,8 %). AAPL, AMZN, META, TSLA y AVGO: sin premarket publicado a esta hora. Semis a la baja: AMD −3,3 %, Intel −3,6 %, Marvell −9,4 % (Lumentum +4,3 %); el SOXX cayó fuera de hora. Amazon e Intel publican tras el cierre.",
  "aviso_horario": "Europa cambió de hora el domingo 25 y EE. UU. lo hará el 1 nov: hasta el viernes 30 oct el desfase con Nueva York es de 5 h → datos a las 13:30, apertura a las 14:30 y cierre a las 21:00 (Madrid). Desde el lunes 2 nov vuelve a 6 h.",
  "fuentes": [
    { "n": "Yahoo Finance (futuros, intermercado y agenda)", "url": "https://finance.yahoo.com/markets/live/stock-market-today-thursday-october-29-dow-sp-500-nasdaq-alphabet-microsoft-081708101.html" },
    { "n": "Reuters vía Investing.com (futuros y premarket)", "url": "https://www.investing.com/news/economy-news/nasdaq-futures-slide-as-mixed-big-tech-results-test-ai-trade-4981842" },
    { "n": "Capp Notes (cierre del miércoles y sectores)", "url": "https://cappnotes.substack.com/p/closing-look-wednesday-october-28" },
    { "n": "AP vía KSAT (Asia, crudo y divisas)", "url": "https://www.ksat.com/business/2026/10/29/asian-shares-and-us-futures-are-mixed-after-google-parent-alphabets-earnings-disappoint/" },
    { "n": "Global Banking & Finance (apertura europea)", "url": "https://www.globalbankingandfinance.com/european-shares-inch-up-ahead-ecb-earnings-remain-focus/" },
    { "n": "StockTitan (Fed)", "url": "https://www.stocktitan.net/articles/stock-market-today-live-october-28-2026" },
    { "n": "alphainvestment (niveles del futuro NQ, 27 oct)", "url": "https://github.com/alphainvestment/Nasdaq/releases/tag/nasdaq-2026-10-27" },
    { "n": "Investing.com (niveles técnicos NQ)", "url": "https://es.investing.com/news/stock-market-news/futuros-del-nasdaq-100-comprimen-soporte-clave-niveles-en-vivo-93CH-3890585" },
    { "n": "Bolsamanía (soporte 28.742)", "url": "https://www.bolsamania.com/capitalbolsa/noticias/analisis-tecnico/el-nasdaq-se-juega-el-soporte-de-los-28742-puntos-antes-de-la-fed--23922238.html" }
  ]
};
