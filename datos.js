/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Lunes 16 de noviembre de 2026",
  "actualizado": "08:12 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "Apertura cash", "v": "15:30" },
    { "n": "Cierre", "v": "22:00" },
    { "n": "Nvidia (martes)", "v": "tras 22:00" }
  ],
  "precio": {
    "premarket": "≈ 27.780,75",
    "cambio": "≈ −252 · −0,9 %",
    "dir": "dn",
    "cierre_ayer": "≈ 28.033 (viernes, futuro, estimado)",
    "gap": "≈ −252 pts (bajista)",
    "gap_mnq": "≈ −504 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "dn",
    "titulo": "Bajista",
    "confianza": 3,
    "texto": "El futuro NQ cae ≈ 0,9 % (27.781) en una semana clave: Nvidia publica el martes tras el cierre (primeros resultados sin Jensen Huang; según el FT, el consejo ha sondeado a Rene Haas, CEO de Arm, como sustituto), el miércoles salen las actas de la Fed y el jueves debuta Anthropic en el Nasdaq. Asia castiga a los chips: Taiex −4,1 %, Kospi −2,8 %, Nikkei −1,6 % (TSMC −3,4 %, SK Hynix −5,5 %). El viernes los semis cayeron un 3,4 % y Broadcom un 4,8 %. El 10 años sigue en el 5,14 %, el dólar en máximos de 19 meses y la subida de la Fed de diciembre está descontada.",
    "condicion": "Bajista mientras el precio no recupere 27.957–28.033 (POC previo y cierre del viernes). Pérdida de 27.516 → 27.100–27.166; recuperar 28.033 neutraliza el gap."
  },
  "ayer": {
    "titulo": "Qué pasó el viernes · 13 nov",
    "etiqueta": "Nasdaq −0,91 %",
    "dir": "dn",
    "resumen": "La tecnología volvió a caer por Nvidia y los chips, aunque la semana cerró en positivo (S&P 500 +2,51 %, Nasdaq +2,27 %; primera semana al alza en cinco). Nasdaq 100 −1,22 % (27.943,74), Nasdaq −0,91 % (25.136,27), S&P 500 −0,40 % (7.561,67), Dow +0,10 % (52.347,55) y Russell 2000 −0,31 % (2.790,49). Lideraron consumo básico (+1,42 %), comunicaciones (+1,05 %) y energía (+0,98 %); a la cola, tecnología (−2,01 %), consumo discrecional (−0,40 %) e industriales (−0,39 %). Semis −3,4 %: AMD −8,75 %, Broadcom −4,76 % (rebaja de Redburn), Arm −4,63 %, Nvidia −2,01 % (sexta semana de caídas). IPP de octubre +0,3 % m/m (est. +0,4 %) y +6,5 % a/a, el mayor desde nov. 2022. Bono a 10 años 5,15 % (≈ +30 pb en la semana), Brent 95,84 $, oro 3.886,30, VIX 19,30, índice del dólar 103,43, bitcoin ≈ 68.200 (−4,35 %, mínimo desde agosto). Futuro NQ: cierre ≈ 28.033 (estimado); máx./mín.: —.",
    "indices": [
      { "n": "Nasdaq", "v": "−0,91 %", "dir": "dn" },
      { "n": "S&P 500", "v": "−0,40 %", "dir": "dn" },
      { "n": "Dow", "v": "+0,10 %", "dir": "up" },
      { "n": "Russell 2000", "v": "−0,31 %", "dir": "dn" }
    ]
  },
  "noticias": [
    { "t": "Nvidia publica el martes tras el cierre: primeros resultados sin Jensen Huang; el FT dice que el consejo sondeó a Rene Haas (Arm) como sucesor", "v": "17 nov", "dir": "" },
    { "t": "Asia hunde a los chips antes de Nvidia: Taiex −4,1 %, TSMC −3,4 %, SK Hynix −5,5 %, SoftBank −4,2 %", "v": "Taiex −4,1 %", "dir": "dn" },
    { "t": "Anthropic fija precio el miércoles y debuta el jueves en el Nasdaq, la gran salida a bolsa del año", "v": "19 nov", "dir": "" },
    { "t": "IPP de octubre +6,5 % a/a, el mayor desde 2022; la subida de la Fed de diciembre, descontada (Kalshi: 91,5 %)", "v": "+6,5 %", "dir": "dn" },
    { "t": "La Guardia Revolucionaria iraní dice que dos petroleros chocaron con minas en Ormuz", "v": "Brent ≈ 95–96 $", "dir": "dn" },
    { "t": "Japón: el PIB se contrae en el trimestre; China: ventas minoristas y producción industrial por debajo de lo esperado", "v": "Asia", "dir": "dn" }
  ],
  "noticias_nota": "Futuro NQ: Investing.com (06:46 Madrid, 27.780,75, −0,9 %); su barra de cotización daba 27.680 (−0,94 %) más tarde. Cierres del viernes: Capp Notes; megacaps: Investing.com. Asia: AP. Las fechas de Walmart, Home Depot y Target no están confirmadas en mis fuentes.",
  "estructura": {
    "h4": "Bajista de nuevo. El rebote desde 26.366 (6 nov) se agotó en ≈ 28.441 (11 nov) sin superar el último máximo decreciente (28.969). El viernes el precio perdió 28.165 y esta madrugada pierde también 27.957–27.837 (POC y VWAP del 10 nov): CHoCH bajista de 4H. El siguiente soporte relevante es el mínimo creciente del 10 nov (27.516); perderlo confirmaría que el rebote ha terminado y abriría 27.100–27.166 y 26.751.",
    "h1": "Bajista: gap nocturno bajo el cierre del viernes y bajo 27.837, con máximos y mínimos decrecientes. Rebotes hacia 27.837–27.957 son zonas de venta; el primer objetivo es 27.516. Máx./mín. nocturnos: —."
  },
  "fuerza": [
    { "n": "Meta (vie.)", "v": "+2,90 %", "pct": 33, "dir": "up" },
    { "n": "Consumo básico (vie.)", "v": "+1,42 %", "pct": 16, "dir": "up" },
    { "n": "Hang Seng (hoy)", "v": "+0,9 %", "pct": 10, "dir": "up" },
    { "n": "Futuro NQ (noche)", "v": "≈ −0,9 %", "pct": 10, "dir": "dn" },
    { "n": "Nasdaq 100 (vie.)", "v": "−1,22 %", "pct": 14, "dir": "dn" },
    { "n": "Tecnología (vie.)", "v": "−2,01 %", "pct": 23, "dir": "dn" },
    { "n": "Kospi (hoy)", "v": "−2,8 %", "pct": 32, "dir": "dn" },
    { "n": "Semis SOX (vie.)", "v": "−3,4 %", "pct": 39, "dir": "dn" },
    { "n": "Taiex (hoy)", "v": "−4,1 %", "pct": 47, "dir": "dn" },
    { "n": "AMD (vie.)", "v": "−8,75 %", "pct": 100, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores, índices y semis del viernes: Capp Notes; Meta: Investing.com; Asia, hoy (AP); futuro NQ: Investing.com.",
  "niveles": [
    { "n": "Resistencia 4 · máx. del rebote (11 nov)", "v": "≈ 28.441", "tipo": "r" },
    { "n": "Resistencia 3 · VAL del 11 nov", "v": "28.165", "tipo": "r" },
    { "n": "Cierre del viernes (futuro, estimado)", "v": "≈ 28.033", "tipo": "ref" },
    { "n": "Resistencia 2 · POC previo", "v": "27.957", "tipo": "r" },
    { "n": "Resistencia 1 · POC y VWAP del 10 nov", "v": "27.837", "tipo": "r" },
    { "n": "Precio premarket (06:46 Madrid)", "v": "≈ 27.780,75", "tipo": "precio" },
    { "n": "Soporte 1 · mínimo creciente del 10 nov", "v": "27.516", "tipo": "s" },
    { "n": "Soporte 2 · antiguo soporte del 5 nov", "v": "27.100–27.166", "tipo": "s" },
    { "n": "Soporte 3 · mínimo del 9 nov", "v": "26.751", "tipo": "s" },
    { "n": "Soporte 4 · mínimo de la corrección (6 nov)", "v": "≈ 26.366", "tipo": "s" }
  ],
  "niveles_nota": "No he encontrado niveles del futuro NQ publicados hoy: se usan los de investingLive (10–12 nov), alphainvestment (9 nov) y ktusing34 (5 nov). Cierre del viernes estimado a partir de la cotización y el % de Investing. RSI: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · presión antes de Nvidia", "dir": "dn", "texto": "Con Asia hundiendo a los chips y Nvidia el martes, el mercado reduce riesgo en tecnología: rebotes hacia 27.837–27.957 se venden y el precio busca 27.516 y, si cede, 27.100–27.166. Día sin datos macro relevantes en EE. UU.", "gatillo": "Gatillo: rechazo en 27.837–27.957 y cierre de 15 min bajo 27.700 tras la apertura cash (15:30)" },
    "alternativo": { "titulo": "Alternativo · se cubre el gap", "dir": "up", "texto": "Compras de posicionamiento antes de Nvidia y de Anthropic: el mínimo creciente de 27.516 aguanta y el precio recupera 28.033 (cierre del viernes) y 28.165.", "gatillo": "Gatillo: cierre de 1H sobre 28.033" },
    "invalidacion": "Invalidación: cierre de 4H sobre 28.165 anula el sesgo bajista (→ 28.441); cierre de 4H bajo 27.516 lo acelera (→ 27.100 y 26.751)."
  },
  "intermercado": [
    { "n": "Brent", "v": "≈ 94,9–96,3", "c": "entre −1 % y +0,5 % según la hora · WTI ≈ 87,8", "dir": "" },
    { "n": "Bono 10A EE. UU.", "v": "5,14 %", "c": "5,15 % cierre vie. · 30A 5,47 %", "dir": "dn" },
    { "n": "Oro", "v": "3.886,30", "c": "+0,03 % (cierre vie.)", "dir": "" },
    { "n": "USD/JPY", "v": "159,64", "c": "plano · EUR/USD 1,1017", "dir": "" },
    { "n": "VIX", "v": "19,30", "c": "+3,2 % (cierre vie.)", "dir": "dn" },
    { "n": "Bitcoin", "v": "≈ 68.200", "c": "−4,35 % vie. · mínimo desde agosto", "dir": "dn" }
  ],
  "globales": "Asia a la baja por los chips antes de Nvidia: Taiex −4,1 % (TSMC −3,4 %), Kospi −2,8 % (5.142,84; SK Hynix −5,5 %), Nikkei −1,6 % (60.182,50; SoftBank −4,2 %), Shanghai −0,4 % (3.621,46), ASX −0,2 % (9.064,30); sube el Hang Seng (+0,9 %, 23.852,96). Japón: el PIB se contrajo en el trimestre. China: ventas minoristas y producción industrial decepcionan. Europa: futuros ligeramente al alza; apertura a las 09:00. Índice del dólar 103,43 (máximo de 19 meses).",
  "agenda": [
    { "h": "15:30", "e": "Apertura de Wall Street", "imp": "medio" },
    { "h": "22:00", "e": "Cierre de Wall Street", "imp": "bajo" },
    { "h": "17 nov", "e": "Nvidia: resultados del T3 fiscal (tras el cierre)", "imp": "alto" },
    { "h": "18 nov", "e": "Actas de la Fed · Anthropic fija el precio de su salida a bolsa", "imp": "alto" },
    { "h": "19 nov", "e": "Debut de Anthropic en el Nasdaq · reunión Trump–Xi–Putin en la APEC (Shenzhen)", "imp": "alto" },
    { "h": "Esta semana", "e": "Walmart, Home Depot y Target: resultados (fechas: —)", "imp": "medio" },
    { "h": "26 nov", "e": "Acción de Gracias: bolsa de EE. UU. cerrada (27 nov, sesión corta)", "imp": "medio" },
    { "h": "8–9 dic", "e": "Próximo FOMC: subida de 25 pb descontada", "imp": "alto" }
  ],
  "resultados": "Hoy: sin resultados relevantes del Nasdaq 100 en mis fuentes. Martes tras el cierre: Nvidia. Esta semana también Walmart, Home Depot y Target (fechas: —).",
  "pesados": [
    { "t": "NVDA", "v": "−2,01 % (vie.)", "dir": "dn" },
    { "t": "AAPL", "v": "+0,39 % (vie.)", "dir": "up" },
    { "t": "MSFT", "v": "+0,17 % (vie.)", "dir": "up" },
    { "t": "AMZN", "v": "−0,29 % (vie.)", "dir": "dn" },
    { "t": "META", "v": "+2,90 % (vie.)", "dir": "up" },
    { "t": "GOOGL", "v": "−0,98 % (vie.)", "dir": "dn" },
    { "t": "TSLA", "v": "−1,82 % (vie.)", "dir": "dn" },
    { "t": "AVGO", "v": "−4,76 % (vie.)", "dir": "dn" }
  ],
  "pesados_nota": "Cierres del viernes (Capp Notes e Investing.com). No hay premarket publicado a esta hora. Semis el viernes: SOX −3,4 %, AMD −8,75 %, Arm −4,63 %, Dell −7,18 %.",
  "analisis": {
    "swing": {
      "dir": "dn",
      "marco": "Diario / 4H · días a semanas",
      "titulo": "Bajista: el rebote ha fallado",
      "texto": "El rebote desde 26.366 se quedó en 28.441, por debajo del último máximo decreciente (28.969), y el precio vuelve a perder 27.837. La estructura diaria sigue bajista desde el récord (≈ 31.400). Nvidia (martes) es el gran riesgo binario de la semana: mejor esperar al dato para añadir. Mientras no haya cierre diario sobre 28.441, los rebotes son de venta.",
      "entrada": "28.033–28.165 (rebote fallido) o tras Nvidia",
      "stop": "Cierre diario sobre 28.441",
      "objetivos": ["27.516", "26.751", "26.366"],
      "alternativa": "Alternativa alcista: si Nvidia convence y el precio cierra en diario sobre 28.441, el sesgo pasa a neutral-alcista (→ 28.969)."
    },
    "intradia": {
      "dir": "dn",
      "marco": "15 min / 1H · solo hoy",
      "titulo": "Bajista: vender rebotes al POC",
      "texto": "Gap bajista de ≈ 250 puntos. Plan: esperar un rebote hacia 27.837–27.957 (POC y VWAP previos) y buscar rechazo en 15 min para vender. No vender en mínimos si el precio llega a 27.516 sin rebote previo: ahí es más probable un rebote técnico.",
      "entrada": "27.837–27.957 (rechazo en 15 min)",
      "stop": "28.040 (sobre el cierre del viernes)",
      "objetivos": ["27.700", "27.516", "27.166"],
      "alternativa": "Si el precio acepta sobre 28.033 en 1H, se anulan los cortos (posible cierre del gap hacia 28.165). Compra solo con confirmación en 27.516."
    },
    "nota": "Análisis propio a partir de los niveles publicados (investingLive, alphainvestment, ktusing34) y la estructura de price action. No incluye tamaño de posición ni gestión de riesgo personal."
  },
  "aviso_horario": "",
  "fuentes": [
    { "n": "Capp Notes (cierre del viernes)", "url": "https://cappnotes.substack.com/p/closing-look-friday-november-13-2026" },
    { "n": "Investing.com (futuros, megacaps y agenda)", "url": "https://www.investing.com/news/stock-market-news/us-stock-futures-little-changed-as-investors-await-nvidia-earnings-5028292" },
    { "n": "AP vía ClickOnDetroit (Asia, crudo, divisas y agenda)", "url": "https://www.clickondetroit.com/business/2026/11/16/stocks-decline-in-asia-as-investor-concerns-over-nvidia-fallout-extend-into-another-week/" },
    { "n": "investingLive (niveles del futuro NQ, 11–12 nov)", "url": "https://investinglive.com/technical-analysis/nasdaq-futures-are-under-pressure-is-it-too-late-to-short/" },
    { "n": "alphainvestment (niveles del futuro NQ, 9 nov)", "url": "https://github.com/alphainvestment/Nasdaq/releases/tag/nasdaq-2026-11-10" }
  ]
};
