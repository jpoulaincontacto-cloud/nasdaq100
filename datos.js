/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Martes 3 de noviembre de 2026",
  "actualizado": "11:10 (Madrid) · cotizaciones de madrugada",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "Apertura cash", "v": "15:30" },
    { "n": "JOLTS", "v": "16:00" },
    { "n": "AMD", "v": "tras 22:00" }
  ],
  "precio": {
    "premarket": "≈ 28.164,75",
    "cambio": "≈ +37 · +0,13 %",
    "dir": "up",
    "cierre_ayer": "≈ 28.128 (lunes, futuro)",
    "gap": "≈ +37 pts (plano)",
    "gap_mnq": "≈ +74 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "dn",
    "titulo": "Bajista",
    "confianza": 3,
    "texto": "El futuro NQ está prácticamente plano tras otra sesión de venta en tecnología (Nasdaq 100 −1,39 % el lunes, a 27.989,82). Apple cae ≈ 2,8 % fuera de hora pese a batir: prevé menos margen por el coste de la memoria y una guía de servicios floja; Palantir también cede ≈ 3 %. Asia tecnológica se hunde (Corea hasta −4,1 %, Taiwán −3,3 %) y los futuros europeos caen ≈ 0,9 %. Hoy son las elecciones de mitad de mandato (resultados tras el cierre), JOLTS a las 16:00 y AMD tras el cierre. El RSI del futuro ronda 30 (sobreventa), así que caben rebotes, pero la estructura sigue bajista.",
    "condicion": "Bajista mientras no recupere 28.800 (ruptura de la bandera bajista). Cierre de 1H sobre 28.800 → 29.305; pérdida de 28.000 → 27.800 y 27.316."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · lunes 2 nov",
    "etiqueta": "Nasdaq −1,07 %",
    "dir": "dn",
    "resumen": "Rotación fuera de la tecnología: el Dow subió mientras el Nasdaq caía. Nasdaq 100 −1,39 % (27.989,82), Nasdaq 25.164,32, S&P 500 −0,51 % (7.541,40), Dow +0,41 % (51.983,98) y Russell 2000 −0,21 % (2.805,88). Lideraron consumo discrecional (+2,41 %), financieras (+1,86 %) y materiales (+1,76 %); a la cola, energía (−3,96 %) y tecnología (−2,95 %). El crudo se desplomó por las esperanzas de paz con Irán (Brent −7,6 %, a 104,77 $; WTI 96,46 $). ISM manufacturero 55,5 (est. 54,5). Bono a 10 años 4,89 % (−3,5 pb), oro +1,5 %, VIX 21,15 (+8,9 %). Tras el cierre, Apple y Palantir batieron previsiones pero caen ≈ 3 %. Futuro NQ: liquidación ≈ 28.128 (estimada); máx./mín.: —.",
    "indices": [
      { "n": "Nasdaq", "v": "−1,07 %", "dir": "dn" },
      { "n": "S&P 500", "v": "−0,51 %", "dir": "dn" },
      { "n": "Dow", "v": "+0,41 %", "dir": "up" },
      { "n": "Russell 2000", "v": "−0,21 %", "dir": "dn" }
    ]
  },
  "noticias": [
    { "t": "Apple bate (ingresos 114.480 M$, BPA 2,10 $) pero prevé menos margen por el coste de la memoria y una guía de servicios floja", "v": "AAPL ≈ −2,8 %", "dir": "dn" },
    { "t": "Palantir crece un 96 % y su negocio comercial en EE. UU. supera por primera vez al de gobierno, pero cae fuera de hora", "v": "PLTR ≈ −3 %", "dir": "dn" },
    { "t": "Hoy elecciones de mitad de mandato: los demócratas, favoritos en la Cámara; el Senado, muy ajustado. Resultados tras el cierre", "v": "3 nov", "dir": "" },
    { "t": "EE. UU. ataca la isla iraní de Qeshm en Ormuz mientras sigue la negociación de paz en Catar; el crudo rebota tras caer más del 7 %", "v": "Brent +0,5 %", "dir": "up" },
    { "t": "Asia tecnológica, a la baja: Corea llega a caer un 4,1 % y Taiwán un 3,3 %; el RBA sube tipos al 4,85 %", "v": "Taiex −3,3 %", "dir": "dn" },
    { "t": "AMD publica hoy tras el cierre (guía ≈ 13.000 M$); el mercado sigue dando ≈ 72 % a una subida de la Fed en diciembre", "v": "AMD", "dir": "" }
  ],
  "noticias_nota": "Futuro NQ: Gotrade (05:02 Madrid, 28.164,75, +0,13 %). Otras lecturas de madrugada: Goodreturns ≈ 28.251 (+0,44 %) y Yahoo/Reuters 28.092,75 (−0,12 %); el futuro oscila en torno al cierre. Apple y Palantir: Reuters, Gotrade y Goodreturns.",
  "estructura": {
    "h4": "Bajista. Máximos y mínimos decrecientes desde 30.007: CHoCH bajista el jueves (pérdida de 29.559), ruptura de los 29.000 el viernes y, el lunes, ruptura de la bandera bajista en 28.800 (Investing) y pérdida del mínimo reciente de 28.235. El precio está bajo las SMA 20, 50 y 200 (≈ 29.305, 29.430–29.526 y 30.115) y el SuperTrend es bajista en 29.302. Con RSI ≈ 30 hay sobreventa, pero no hay estructura de giro: haría falta un cierre de 4H sobre 28.800.",
    "h1": "Lateral-bajista de madrugada en torno a 28.100–28.250, sin dirección antes de las elecciones. 28.235 (mínimo perdido) es la primera resistencia y 28.800 la clave; por abajo, 28.000 es el soporte psicológico. Un BOS de 1H sobre 28.235 daría un rebote técnico hacia 28.800. Máx./mín. nocturnos: —."
  },
  "fuerza": [
    { "n": "Consumo discrecional (lun.)", "v": "+2,41 %", "pct": 32, "dir": "up" },
    { "n": "Financieras (lun.)", "v": "+1,86 %", "pct": 24, "dir": "up" },
    { "n": "Materiales (lun.)", "v": "+1,76 %", "pct": 23, "dir": "up" },
    { "n": "Dow (lun.)", "v": "+0,41 %", "pct": 5, "dir": "up" },
    { "n": "Nasdaq 100 (lun.)", "v": "−1,39 %", "pct": 18, "dir": "dn" },
    { "n": "Tecnología (lun.)", "v": "−2,95 %", "pct": 39, "dir": "dn" },
    { "n": "Taiex (hoy)", "v": "−3,3 %", "pct": 43, "dir": "dn" },
    { "n": "Energía (lun.)", "v": "−3,96 %", "pct": 52, "dir": "dn" },
    { "n": "Corea (hoy, máx. caída)", "v": "−4,1 %", "pct": 54, "dir": "dn" },
    { "n": "Brent (lun.)", "v": "−7,63 %", "pct": 100, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores e índices: cierre del lunes (Capp Notes); Asia, hoy (Reuters). La rotación sale de tecnología y energía hacia consumo discrecional, financieras y materiales.",
  "niveles": [
    { "n": "Resistencia 5 · SMA 200 (Investing)", "v": "30.115", "tipo": "r" },
    { "n": "Resistencia 4 · Fibo 38,2 % (Investing)", "v": "29.526", "tipo": "r" },
    { "n": "Resistencia 3 · SMA 20 / SuperTrend (Investing)", "v": "29.302–29.305", "tipo": "r" },
    { "n": "Resistencia 2 · ruptura de la bandera bajista", "v": "28.800", "tipo": "r" },
    { "n": "Resistencia 1 · mínimo reciente perdido", "v": "28.235", "tipo": "r" },
    { "n": "Precio premarket (05:02 Madrid)", "v": "≈ 28.164,75", "tipo": "precio" },
    { "n": "Cierre de ayer (futuro, estimado)", "v": "≈ 28.128", "tipo": "ref" },
    { "n": "Soporte 1 · psicológico / zona de compra (Investing)", "v": "28.000", "tipo": "s" },
    { "n": "Soporte 2 · objetivo bajista (Investing)", "v": "27.800", "tipo": "s" },
    { "n": "Soporte 3 · extensión Fibo 127,2 % (Investing)", "v": "27.316", "tipo": "s" },
    { "n": "Soporte 4 · cambio de tendencia (Bolsamanía, cash)", "v": "27.176", "tipo": "s" }
  ],
  "niveles_nota": "Niveles del futuro NQ: Investing.com (análisis del 2 nov, 20:06 Madrid; RSI 30,46; ATR 271). 27.176: Bolsamanía (2 nov, Nasdaq 100 cash). Cierre de ayer estimado a partir de la cotización y el % de Gotrade. Máx./mín. de ayer y nocturnos: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · rebotes vendibles en día de elecciones", "dir": "dn", "texto": "Apertura plana con Apple pesando. Si el rebote se frena bajo 28.235 o, como mucho, en 28.800, vuelta a 28.000 y extensión a 27.800 a medida que el mercado reduce riesgo antes de las elecciones y de AMD. JOLTS (16:00) es el único dato del día.", "gatillo": "Gatillo: rechazo en 28.235 y cierre de 15 min bajo 28.000 tras la apertura cash (15:30)" },
    "alternativo": { "titulo": "Alternativo · rebote por sobreventa", "dir": "up", "texto": "Con RSI ≈ 30 y el Nasdaq 100 ≈ −11 % desde máximos, la sobreventa y la cobertura de cortos antes de las elecciones llevan al precio a recuperar 28.235 y buscar 28.800.", "gatillo": "Gatillo: cierre de 1H sobre 28.235" },
    "invalidacion": "Invalidación: cierre de 4H sobre 28.800 anula el sesgo bajista (→ 29.305); cierre de 4H bajo 27.800 lo acelera (→ 27.316)."
  },
  "intermercado": [
    { "n": "Brent", "v": "105,30", "c": "+0,5 % hoy · −7,6 % el lunes · WTI 97,2", "dir": "up" },
    { "n": "Bono 10A EE. UU.", "v": "≈ 4,91 %", "c": "+2 pb · 4,89 % cierre lun.", "dir": "up" },
    { "n": "Oro", "v": "3.931,8", "c": "−0,95 % hoy", "dir": "dn" },
    { "n": "USD/JPY", "v": "—", "c": "Japón, festivo · índice del dólar 101,78", "dir": "" },
    { "n": "VIX", "v": "21,15", "c": "+8,9 % (cierre lun.)", "dir": "dn" },
    { "n": "Bitcoin", "v": "≈ 76.800", "c": "plano", "dir": "" }
  ],
  "globales": "Asia a la baja, liderada por la tecnología: MSCI Asia-Pacífico sin Japón −1,4 % (mínimo desde el 23 oct), Corea llega a caer un 4,1 %, Taiex −3,3 % (−13,1 % desde su récord de octubre), ASX +0,3 %; Japón cerrado por festivo. El RBA subió tipos 25 pb al 4,85 % y China endureció el coeficiente de reservas en divisas. Europa: futuros ≈ −0,9 % (DAX −0,8 %, FTSE −0,2 %); apertura a las 09:00.",
  "agenda": [
    { "h": "Todo el día", "e": "Elecciones de mitad de mandato en EE. UU. (resultados a partir de la madrugada en Madrid)", "imp": "alto" },
    { "h": "15:30", "e": "Apertura de Wall Street", "imp": "medio" },
    { "h": "16:00", "e": "Ofertas de empleo JOLTS de septiembre (previo 7,1 M)", "imp": "medio" },
    { "h": "22:00", "e": "Cierre de Wall Street", "imp": "bajo" },
    { "h": "Tras cierre", "e": "AMD: resultados (guía ≈ 13.000 M$ ± 300 M$); conferencia a las 23:00", "imp": "alto" },
    { "h": "4 nov", "e": "ISM de servicios (16:00) · plan de emisiones del Tesoro · Qualcomm y Arm", "imp": "alto" },
    { "h": "6 nov", "e": "Empleo de octubre (14:30): est. +65.000, paro 4,2 %", "imp": "alto" },
    { "h": "8–9 dic", "e": "Próximo FOMC: el mercado da ≈ 72 % a una subida de 25 pb", "imp": "alto" }
  ],
  "resultados": "Hoy: AMD tras el cierre; también publican Super Micro, Pfizer, Shopify y Booking (horario: —). Ayer tras el cierre: Apple (≈ −2,8 %, bate pero guía floja de margen y servicios) y Palantir (≈ −3 %, crece un 96 %). Mañana: Qualcomm y Arm.",
  "pesados": [
    { "t": "NVDA", "v": "−1,26 % (lun.)", "dir": "dn" },
    { "t": "AAPL", "v": "≈ −2,8 % (fuera de hora)", "dir": "dn" },
    { "t": "MSFT", "v": "—", "dir": "" },
    { "t": "AMZN", "v": "+2,20 % (lun.)", "dir": "up" },
    { "t": "META", "v": "—", "dir": "" },
    { "t": "GOOGL", "v": "—", "dir": "" },
    { "t": "TSLA", "v": "—", "dir": "" },
    { "t": "AVGO", "v": "−1,18 % (lun.)", "dir": "dn" }
  ],
  "pesados_nota": "A esta hora no hay premarket publicado de los pesos pesados: AAPL es el movimiento fuera de hora (Reuters); NVDA, AMZN y AVGO, cierre del lunes (Capp Notes). MSFT, META, GOOGL y TSLA: sin dato. AMD subía ≈ 1,1 % fuera de hora antes de sus resultados.",
  "aviso_horario": "",
  "fuentes": [
    { "n": "Capp Notes (cierre del lunes, sectores y Apple/Palantir)", "url": "https://cappnotes.substack.com/p/closing-look-monday-november-2-2026" },
    { "n": "Reuters vía Yahoo Finance (Asia, crudo, RBA, Apple y elecciones)", "url": "https://finance.yahoo.com/markets/world-indices/articles/asian-stocks-retreat-ahead-us-022420502.html" },
    { "n": "Gotrade (futuros, AMD y agenda)", "url": "https://heygotrade.com/en/news/midterms-apple-palantir-and-amd-tonight" },
    { "n": "Goodreturns (futuros y resultados del día)", "url": "https://www.goodreturns.in/news/us-stock-market-today-us-midterm-election-polls-dow-jones-futures-nasdaq-s-p-500-wall-street-outlook-1544809.html" },
    { "n": "Investing.com (niveles técnicos del futuro NQ)", "url": "https://es.investing.com/news/stock-market-news/futuros-del-nasdaq-100-en-bandera-bajista-niveles-en-vivo-93CH-3904436" },
    { "n": "Bolsamanía (niveles del Nasdaq 100)", "url": "https://www.bolsamania.com/noticias/analisis-tecnico/alerta-en-el-nasdaq-100-que-ataca-nieves-clave--23960234.html" },
    { "n": "Opportunity Costs (agenda de la semana)", "url": "https://opportunitycosts.substack.com/p/week-ahead-aapl-and-pltr-monday-midterms" }
  ]
};
