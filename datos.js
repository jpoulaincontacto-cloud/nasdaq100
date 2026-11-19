/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Jueves 19 de noviembre de 2026",
  "actualizado": "08:10 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "Philly Fed y paro", "v": "14:30" },
    { "n": "Apertura cash", "v": "15:30" },
    { "n": "Debut Anthropic", "v": "hoy" }
  ],
  "precio": {
    "premarket": "≈ 27.610,5",
    "cambio": "≈ +423,75 · +1,56 %",
    "dir": "up",
    "cierre_ayer": "≈ 27.186,75 (miércoles, futuro)",
    "gap": "≈ +424 pts (alcista)",
    "gap_mnq": "≈ +847 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "up",
    "titulo": "Alcista de corto plazo (día Anthropic)",
    "confianza": 3,
    "texto": "El futuro NQ sube ≈ 1–1,6 % (≈ 27.610) en el día del debut de Anthropic en el Nasdaq: fijó el precio en 83 $ por acción, por encima del rango de 70–78 $, y capta 81.300 M$, la mayor salida a bolsa de la historia (valoración de ≈ 1,5 billones de $ totalmente diluida). Ayer el Nasdaq 100 subió un 0,42 % con Amazon (+3,8 %) y Broadcom (+3,6 %), mientras el Dow caía un 1,1 % y el S&P 500 encadenaba su quinta caída. En contra: las actas de la Fed muestran que casi todos los miembros ven apropiadas más subidas y Waller plantea 50 pb en diciembre; Asia, débil en tecnología (Taiex −3,1 %, Hang Seng −1,9 %).",
    "condicion": "Alcista mientras el precio aguante sobre 27.433. Aceptación sobre 27.705 → 28.033 y 28.279; pérdida de 27.433 cierra el gap hacia 27.186."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · miércoles 18 nov",
    "etiqueta": "Nasdaq +0,42 %",
    "dir": "up",
    "resumen": "Sesión dividida antes de Anthropic: el Nasdaq subió mientras el Dow caía con fuerza. Nasdaq 100 +0,42 % (27.116,26), Nasdaq +0,42 % (24.429,89), S&P 500 −0,23 % (7.323,63, quinta caída seguida), Dow −1,11 % (50.198,17) y Russell 2000 +0,46 % (2.714,31). Lideraron consumo discrecional (+1,79 %), tecnología (+0,34 %) y comunicaciones (+0,30 %); a la cola, energía (−3,27 %), salud (−2,20 %) y financieras (−1,14 %). Amazon +3,82 %, Broadcom +3,64 %, Nvidia −2,89 % pese a batir. Actas de la Fed: casi todos los miembros ven «probablemente apropiadas» más subidas; Waller habla de «sorprender» con 50 pb. Bono a 10 años 5,07 % (−3 pb), WTI −3,2 % (83,26 $), Brent 91,95 $, oro −3,5 % (3.728,80 $, mínimo desde septiembre de 2025), VIX 24,56, índice del dólar 103,80, bitcoin ≈ 62.300 (−4 %). Futuro NQ: cierre ≈ 27.186,75; máx./mín.: —.",
    "indices": [
      { "n": "Nasdaq", "v": "+0,42 %", "dir": "up" },
      { "n": "S&P 500", "v": "−0,23 %", "dir": "dn" },
      { "n": "Dow", "v": "−1,11 %", "dir": "dn" },
      { "n": "Russell 2000", "v": "+0,46 %", "dir": "up" }
    ]
  },
  "noticias": [
    { "t": "Anthropic fija su salida a bolsa en 83 $ por acción (rango 70–78 $) y capta 81.300 M$, la mayor de la historia; hoy cotiza en el Nasdaq como ANT", "v": "≈ 1,5 bill. $", "dir": "up" },
    { "t": "Actas de la Fed: casi todos ven apropiadas más subidas; Waller plantea 50 pb en diciembre para «sorprender»", "v": "Kalshi 91 %", "dir": "dn" },
    { "t": "Palo Alto Networks bate, eleva su guía y compra Applied Compute por 4.500 M$", "v": "PANW ≈ +8 %", "dir": "up" },
    { "t": "Nvidia cae un 2,9 % pese a batir: el mercado vende la buena noticia", "v": "NVDA −2,89 %", "dir": "dn" },
    { "t": "Asia tecnológica, a la baja: Taiex −3,1 %, Hang Seng −1,9 %; hoy entran en vigor las nuevas licencias de exportación de chips", "v": "Taiex −3,1 %", "dir": "dn" },
    { "t": "Hoy Walmart antes de la apertura; tras el cierre, Intuit, Ross, Gap, Keysight y Elastic", "v": "WMT", "dir": "" }
  ],
  "noticias_nota": "Futuro NQ: cotización de Yahoo Finance (27.610,5, +423,75, +1,56 %; sin hora exacta); el texto del mismo artículo (07:10 Madrid) daba +0,97 %. El dato puede variar bastante hasta la apertura. Cierres: Capp Notes. Asia: AP (≈ 06:00 Madrid).",
  "estructura": {
    "h4": "Rebote dentro de una tendencia bajista. Tras perder 27.516 el lunes, el precio ha marcado un suelo en la zona 27.075–27.186 (martes y miércoles) y esta madrugada rebota hacia 27.600, cerca del VAH del lunes (27.705). Superar 27.705 sería el primer máximo creciente en una semana y abriría 28.033–28.279. La tendencia de fondo sigue siendo bajista mientras no supere 28.279 (máximo del lunes) y 28.441.",
    "h1": "Alcista de corto plazo: BOS alcista nocturno sobre 27.433 (POC del lunes) con máximos crecientes. Un retroceso que respete 27.433 sería de compra; perder 27.433 devolvería el precio al rango 27.075–27.433. Máx./mín. nocturnos: —."
  },
  "fuerza": [
    { "n": "Palo Alto (fuera de hora)", "v": "≈ +8 %", "pct": 100, "dir": "up" },
    { "n": "Amazon (miér.)", "v": "+3,82 %", "pct": 48, "dir": "up" },
    { "n": "Broadcom (miér.)", "v": "+3,64 %", "pct": 46, "dir": "up" },
    { "n": "Consumo discrecional (miér.)", "v": "+1,79 %", "pct": 22, "dir": "up" },
    { "n": "Futuro NQ (noche)", "v": "≈ +1,56 %", "pct": 20, "dir": "up" },
    { "n": "Nasdaq 100 (miér.)", "v": "+0,42 %", "pct": 5, "dir": "up" },
    { "n": "Dow (miér.)", "v": "−1,11 %", "pct": 14, "dir": "dn" },
    { "n": "Hang Seng (hoy)", "v": "−1,9 %", "pct": 24, "dir": "dn" },
    { "n": "Nvidia (miér.)", "v": "−2,89 %", "pct": 36, "dir": "dn" },
    { "n": "Taiex (hoy)", "v": "−3,1 %", "pct": 39, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores, índices y valores del miércoles: Capp Notes; Asia, hoy (AP); futuro NQ: Yahoo Finance. Ayer energía (−3,27 %) y salud (−2,20 %) fueron lo peor.",
  "niveles": [
    { "n": "Resistencia 3 · máx. del lunes", "v": "28.279", "tipo": "r" },
    { "n": "Resistencia 2 · cierre del 13 nov (est.)", "v": "≈ 28.033", "tipo": "r" },
    { "n": "Resistencia 1 · VAH del lunes", "v": "27.705", "tipo": "r" },
    { "n": "Precio premarket", "v": "≈ 27.610,5", "tipo": "precio" },
    { "n": "Soporte 1 · POC del lunes", "v": "27.433", "tipo": "s" },
    { "n": "Soporte 2 · mín. / cierre del lunes", "v": "27.235–27.285", "tipo": "s" },
    { "n": "Cierre de ayer (futuro)", "v": "≈ 27.186,75", "tipo": "ref" },
    { "n": "Soporte 3 · cierre del martes", "v": "≈ 27.075", "tipo": "s" },
    { "n": "Soporte 4 · mínimo del 9 nov", "v": "26.751", "tipo": "s" }
  ],
  "niveles_nota": "No he encontrado niveles del futuro NQ publicados hoy ni el máx./mín. de ayer: se usan los del lunes 16 (alphainvestment) y los cierres de los días anteriores. Cierre del miércoles calculado a partir de la cotización y la variación de Yahoo. RSI: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · el debut de Anthropic tira de la IA", "dir": "up", "texto": "El apetito por la mayor salida a bolsa de la historia arrastra al sector: el precio aguanta sobre 27.433, supera 27.705 y busca 28.033. Datos a las 14:30 (Philly Fed y paro) y Walmart antes de la apertura.", "gatillo": "Gatillo: cierre de 15 min sobre 27.705 tras la apertura cash (15:30)" },
    "alternativo": { "titulo": "Alternativo · «compra el rumor, vende la noticia»", "dir": "dn", "texto": "Si Anthropic abre muy por encima del precio y luego se desinfla, o si el mercado vuelve a fijarse en la Fed (50 pb), el gap se vende: el precio pierde 27.433 y vuelve a 27.186–27.075.", "gatillo": "Gatillo: cierre de 15 min bajo 27.433" },
    "invalidacion": "Invalidación: cierre de 4H bajo 27.075 reactiva la tendencia bajista (→ 26.751); cierre de 4H sobre 28.279 confirma el giro alcista de 4H (→ 28.441–28.969)."
  },
  "intermercado": [
    { "n": "Brent", "v": "≈ 92,1", "c": "+0,1–0,2 % hoy · WTI ≈ 82,2–83,0", "dir": "up" },
    { "n": "Bono 10A EE. UU.", "v": "5,07 %", "c": "−3 pb (cierre miér.) · 2A 4,80 %", "dir": "dn" },
    { "n": "Oro", "v": "≈ 3.733", "c": "−0,2 % hoy · −3,5 % ayer", "dir": "dn" },
    { "n": "USD/JPY", "v": "158,60", "c": "desde 159,35 · EUR/USD 1,0961", "dir": "dn" },
    { "n": "VIX", "v": "24,56", "c": "−3,5 % (cierre miér.)", "dir": "up" },
    { "n": "Bitcoin", "v": "≈ 62.300", "c": "−4 % (miér.)", "dir": "dn" }
  ],
  "globales": "Asia mixta y débil en tecnología: Taiex −3,1 %, Hang Seng −1,9 % (22.854,15), ASX −1,1 % (8.728,10), Kospi −0,7 % (5.033,27), Shanghai −0,4 % (3.571,99); Nikkei +0,1 % (59.084,79). Europa abre a las 09:00. Índice del dólar 103,80 (máximo del año en la sesión de ayer).",
  "agenda": [
    { "h": "Antes apertura", "e": "Walmart: resultados", "imp": "medio" },
    { "h": "14:30", "e": "Philly Fed de noviembre y peticiones semanales de subsidio de paro", "imp": "medio" },
    { "h": "15:30", "e": "Apertura de Wall Street", "imp": "medio" },
    { "h": "Sesión", "e": "Debut de Anthropic (ANT) en el Nasdaq (hora de la primera cotización: —)", "imp": "alto" },
    { "h": "16:00", "e": "Indicadores adelantados", "imp": "bajo" },
    { "h": "Tras cierre", "e": "Intuit, Ross Stores, Gap, Keysight y Elastic: resultados", "imp": "medio" },
    { "h": "26 nov", "e": "Acción de Gracias: bolsa de EE. UU. cerrada (27 nov, sesión corta)", "imp": "medio" },
    { "h": "8–9 dic", "e": "Próximo FOMC: Kalshi da un 91 % a una subida de 25 pb; Waller plantea 50 pb", "imp": "alto" }
  ],
  "resultados": "Hoy: Walmart y Alibaba (antes de la apertura, hora: —); tras el cierre, Intuit, Ross Stores, Gap, Keysight y Elastic. Ayer tras el cierre: Palo Alto Networks (≈ +8 %, bate y eleva su guía).",
  "pesados": [
    { "t": "NVDA", "v": "−2,89 % (miér.)", "dir": "dn" },
    { "t": "AAPL", "v": "—", "dir": "" },
    { "t": "MSFT", "v": "—", "dir": "" },
    { "t": "AMZN", "v": "+3,82 % (miér.)", "dir": "up" },
    { "t": "META", "v": "—", "dir": "" },
    { "t": "GOOGL", "v": "—", "dir": "" },
    { "t": "TSLA", "v": "—", "dir": "" },
    { "t": "AVGO", "v": "+3,64 % (miér.)", "dir": "up" }
  ],
  "pesados_nota": "Cierres del miércoles según Capp Notes; el resto de las 7 Magníficas no aparece en mi fuente. No hay premarket publicado con hora fiable a esta hora.",
  "analisis": {
    "swing": {
      "dir": "dn",
      "marco": "Diario / 4H · días a semanas",
      "titulo": "Neutral-bajista: el rebote aún no cambia la tendencia",
      "texto": "La tendencia diaria sigue bajista desde el récord, con el S&P 500 en cinco caídas seguidas y la Fed hablando de 50 pb. El debut de Anthropic puede dar un impulso de corto plazo, pero mientras el precio no supere 28.279 (máximo del lunes) los rebotes hacia 28.033–28.279 siguen siendo zonas de venta en swing.",
      "entrada": "28.033–28.279 (rechazo en 4H)",
      "stop": "Cierre diario sobre 28.441",
      "objetivos": ["27.433", "27.075", "26.751"],
      "alternativa": "Alternativa alcista: cierre diario sobre 28.441 cambia el sesgo swing a alcista (→ 28.969 y 29.727)."
    },
    "intradia": {
      "dir": "up",
      "marco": "15 min / 1H · solo hoy",
      "titulo": "Alcista: comprar retrocesos sobre el POC",
      "texto": "Gap alcista con el día de Anthropic. Plan: no perseguir la apertura; esperar un retroceso a 27.433–27.500 que aguante en 15 min para comprar, o una ruptura limpia de 27.705 con retesteo. Cuidado con el momento en que empiece a cotizar Anthropic: puede mover el índice en ambos sentidos.",
      "entrada": "27.433–27.500 (rechazo alcista en 15 min) o retesteo de 27.705",
      "stop": "27.380 (bajo el POC del lunes)",
      "objetivos": ["27.705", "28.033", "28.279"],
      "alternativa": "Si el precio cierra 15 min bajo 27.433, se anulan los largos: posible cierre del gap hacia 27.186."
    },
    "nota": "Análisis propio a partir de los niveles publicados (alphainvestment y días anteriores) y la estructura de price action. La cotización del futuro varía entre fuentes (+0,97 % a +1,56 %). No incluye tamaño de posición ni gestión de riesgo personal."
  },
  "aviso_horario": "",
  "fuentes": [
    { "n": "Capp Notes (cierre del miércoles, Fed y Anthropic)", "url": "https://cappnotes.substack.com/p/closing-look-wednesday-november-18" },
    { "n": "Yahoo Finance (futuros, agenda y materias primas)", "url": "https://finance.yahoo.com/markets/stocks/articles/stock-market-p-500-open-061052747.html" },
    { "n": "AP vía WSLS (Asia, divisas y Anthropic)", "url": "https://www.wsls.com/business/2026/11/19/asian-stocks-are-mixed-and-us-futures-climb-ahead-of-anthropics-blockbuster-ipo/" },
    { "n": "CNBC (salida a bolsa de Anthropic)", "url": "https://www.cnbc.com/2026/11/18/anthropic-ipo-ai-offering-price.html" },
    { "n": "alphainvestment (niveles del futuro NQ, 16 nov)", "url": "https://github.com/alphainvestment/Nasdaq/releases/tag/nasdaq-2026-11-17" }
  ]
};
