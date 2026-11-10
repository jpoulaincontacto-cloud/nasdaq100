/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Martes 10 de noviembre de 2026",
  "actualizado": "08:10 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "IPC", "v": "14:30" },
    { "n": "Apertura cash", "v": "15:30" },
    { "n": "Cierre", "v": "22:00" }
  ],
  "precio": {
    "premarket": "≈ 28.013,75",
    "cambio": "≈ −59,5 · −0,2 % (plano)",
    "dir": "dn",
    "cierre_ayer": "28.073,25 (lunes, futuro)",
    "gap": "≈ −60 pts (plano)",
    "gap_mnq": "≈ −119 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "",
    "titulo": "Neutral (todo depende del IPC)",
    "confianza": 2,
    "texto": "Tras el mejor día del Nasdaq en más de cuatro meses (Nasdaq 100 +3,40 %, futuro NQ +3,57 % a 28.073), el futuro está plano esperando el IPC de octubre (14:30): se espera +0,3 % m/m general (previo +0,6 %) y +0,2 % subyacente (previo +0,3 %). El rebote lo lideraron los chips (SOXX +7,5 %, AMD +13 %, Broadcom +8,8 %) aunque Nvidia cayó un 4,3 % por la investigación a su CEO. Ayuda la caída del crudo (Brent ≈ 91,6 $, mínimo desde septiembre) tras decir Trump que aplaza nuevos ataques a Irán. Asia sigue el rebote (Kospi > +5 %, Nikkei ≈ +3 %). Pero el mercado da ya un 84 % a una subida de la Fed en diciembre: un IPC caliente lo confirmaría y castigaría a la tecnología.",
    "condicion": "IPC en línea o por debajo y aceptación sobre 28.129 (máximo de ayer) → 28.450–28.800. IPC caliente y pérdida de 27.941 (POC) → 27.373 (VAL)."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · lunes 9 nov",
    "etiqueta": "Nasdaq +2,74 %",
    "dir": "up",
    "resumen": "Fuerte rebote: mejor día del S&P 500 desde el 8 de abril y del Nasdaq en más de cuatro meses. Nasdaq 100 +3,40 % (27.907,63), Nasdaq +2,74 % (25.253,14), S&P 500 +2,35 % (7.549,94), Dow +2,15 % (52.389,75) y Russell 2000 +3,15 % (2.840,81). Lideraron industriales (+3,82 %), tecnología (+3,73 %) y consumo discrecional (+2,92 %); a la cola, energía (+0,52 %), consumo básico (+0,90 %) y utilities (+1,53 %). SOXX +7,49 %, AMD +13 %, Broadcom +8,8 %; Nvidia −4,27 %, su cierre más bajo desde el 7 de abril. Crudo a la baja tras decir Trump que no habrá nuevos ataques a Irán mientras siga la diplomacia: Brent −5,85 % (92,57 $), WTI 86,85 $. Bono a 10 años 4,88 % (+2 pb), oro +1,9 % (4.150,50), índice del dólar 101,67 (−0,6 %), VIX 19,92 (−22 %). Futuro NQ: 28.073,25 (+968,75; +3,57 %), máx. 28.129, mín. 26.751.",
    "indices": [
      { "n": "Nasdaq", "v": "+2,74 %", "dir": "up" },
      { "n": "S&P 500", "v": "+2,35 %", "dir": "up" },
      { "n": "Dow", "v": "+2,15 %", "dir": "up" },
      { "n": "Russell 2000", "v": "+3,15 %", "dir": "up" }
    ]
  },
  "noticias": [
    { "t": "Hoy IPC de octubre (14:30): se espera +0,3 % m/m general (previo +0,6 %) y +0,2 % subyacente (previo +0,3 %)", "v": "14:30", "dir": "" },
    { "t": "CME da un 84 % a una subida de 25 pb de la Fed en diciembre (74 % hace una semana)", "v": "84 %", "dir": "dn" },
    { "t": "Rebote de los chips: SOXX +7,5 %, AMD +13 %, Broadcom +8,8 %; Nvidia cae un 4,3 % por la investigación a Jensen Huang", "v": "SOXX +7,5 %", "dir": "up" },
    { "t": "El crudo cae a mínimos desde septiembre tras aplazar Trump nuevos ataques a Irán mientras siga la diplomacia", "v": "Brent ≈ 91,6 $", "dir": "up" },
    { "t": "Fuera de hora: The Trade Desk ≈ +23 % y Sanmina ≈ +22 % tras batir; Hims & Hers ≈ −3 %", "v": "TTD +23 %", "dir": "up" },
    { "t": "Hoy publica CoreWeave (tras el cierre); el jueves, Applied Materials y Cisco; Nvidia, la semana que viene", "v": "CRWV", "dir": "" }
  ],
  "noticias_nota": "Futuro NQ: Reuters vía Investing.com (07:19 Madrid, 28.013,75, «plano»); TipRanks daba −0,07 % a las 07:36. El % de la cabecera está calculado sobre el cierre de 28.073,25 (alphainvestment). Asia: Reuters vía Business Recorder (primeras horas).",
  "estructura": {
    "h4": "Rebote fuerte con estructura todavía bajista. Ayer el futuro barrió el mínimo del jueves por abajo (26.751) y subió casi 1.400 puntos hasta 28.129, recuperando los 27.166–27.440 y la zona de 28.000. Es el primer máximo creciente desde el desplome; para confirmar un giro de 4H hace falta superar el máximo decreciente anterior de 28.450–28.891. Mientras el precio aguante sobre el VAL de 27.373, el rebote sigue intacto.",
    "h1": "Alcista de corto plazo (BOS alcista de ayer sobre 27.440), ahora en consolidación justo bajo el máximo de 28.129 y sobre el POC de 27.941. Rango de espera antes del IPC: 27.941–28.129. Ruptura de cualquiera de los dos extremos tras el dato marca la dirección. Máx./mín. nocturnos: —."
  },
  "fuerza": [
    { "n": "AMD (lun.)", "v": "+13 %", "pct": 100, "dir": "up" },
    { "n": "Broadcom (lun.)", "v": "+8,8 %", "pct": 68, "dir": "up" },
    { "n": "SOXX (lun.)", "v": "+7,49 %", "pct": 58, "dir": "up" },
    { "n": "Kospi (hoy)", "v": "> +5 %", "pct": 38, "dir": "up" },
    { "n": "Industriales (lun.)", "v": "+3,82 %", "pct": 29, "dir": "up" },
    { "n": "Tecnología (lun.)", "v": "+3,73 %", "pct": 29, "dir": "up" },
    { "n": "Nasdaq 100 (lun.)", "v": "+3,40 %", "pct": 26, "dir": "up" },
    { "n": "Nikkei (hoy)", "v": "≈ +3 %", "pct": 23, "dir": "up" },
    { "n": "Energía (lun.)", "v": "+0,52 %", "pct": 4, "dir": "up" },
    { "n": "Nvidia (lun.)", "v": "−4,27 %", "pct": 33, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores, índices y SOXX: cierre del lunes (Capp Notes); AMD y Broadcom, Investing.com; Asia, hoy (Reuters). Todos los sectores subieron ayer; Nvidia fue la excepción entre los chips.",
  "niveles": [
    { "n": "Resistencia 3 · máx. decreciente previo", "v": "28.891", "tipo": "r" },
    { "n": "Resistencia 2 · reparación completa (ktusing)", "v": "28.450", "tipo": "r" },
    { "n": "Resistencia 1 · máx. de ayer / VAH", "v": "28.129", "tipo": "r" },
    { "n": "Cierre de ayer (futuro)", "v": "28.073,25", "tipo": "ref" },
    { "n": "Precio premarket (07:19 Madrid)", "v": "≈ 28.013,75", "tipo": "precio" },
    { "n": "Soporte 1 · POC de ayer", "v": "27.941", "tipo": "s" },
    { "n": "Soporte 2 · nivel de ATFX (6 nov, US100)", "v": "27.440", "tipo": "s" },
    { "n": "Soporte 3 · VAL de ayer", "v": "27.373", "tipo": "s" },
    { "n": "Soporte 4 · antiguo soporte del jueves", "v": "27.100–27.166", "tipo": "s" },
    { "n": "Soporte 5 · mínimo de ayer", "v": "26.751", "tipo": "s" }
  ],
  "niveles_nota": "Cierre, máx., mín., POC, VAH y VAL de ayer: alphainvestment (futuro NQ, 9 nov). 28.450 y 27.100–27.166: ktusing34 (5 nov). 28.891: máximo del 2 nov (alphainvestment). 27.440: ATFX (6 nov, CFD US100). Máx./mín. nocturnos: —. RSI: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · IPC en línea y continuación del rebote", "dir": "up", "texto": "Si el IPC sale en línea o por debajo (+0,3 % general, +0,2 % subyacente), baja algo la presión sobre la Fed y el rebote de los chips continúa: el precio supera 28.129 y busca 28.450 y, en extensión, 28.891.", "gatillo": "Gatillo: cierre de 15 min sobre 28.129 tras el dato (14:30) o tras la apertura cash (15:30)" },
    "alternativo": { "titulo": "Alternativo · IPC caliente y vuelta a la zona de valor", "dir": "dn", "texto": "Un IPC por encima de lo esperado consolida la subida de la Fed en diciembre: el precio pierde el POC de 27.941 y vuelve a 27.373–27.440, devolviendo parte del rebote de ayer.", "gatillo": "Gatillo: cierre de 15 min bajo 27.941 tras el dato" },
    "invalidacion": "Invalidación: cierre de 4H bajo 27.373 anula el escenario alcista (→ 27.100–26.751); cierre de 4H sobre 28.891 confirma el giro alcista de 4H."
  },
  "intermercado": [
    { "n": "Brent", "v": "≈ 91,6", "c": "−1 % hoy · mín. desde septiembre", "dir": "dn" },
    { "n": "Bono 10A EE. UU.", "v": "≈ 4,87 %", "c": "4,88 % cierre lun. · 2A 4,56 %", "dir": "" },
    { "n": "Oro", "v": "≈ 4.123", "c": "4.150,50 cierre lun. (+1,9 %)", "dir": "dn" },
    { "n": "USD/JPY", "v": "157,95", "c": "−0,2 % · EUR/USD 1,1193", "dir": "dn" },
    { "n": "VIX", "v": "19,92", "c": "−22,3 % (cierre lun.)", "dir": "up" },
    { "n": "Bitcoin", "v": "≈ 74.800", "c": "+0,7 % en 24 h", "dir": "up" }
  ],
  "globales": "Asia continúa el rebote de la IA y los chips: Kospi sube más de un 5 %, Nikkei ≈ +3 % (cierre del lunes 58.775,50) y el MSCI Asia-Pacífico +1,5 %, alejándose del mínimo de siete meses de la semana pasada. Hang Seng: cierre del lunes 24.448,95 (hoy: —). Europa abre a las 09:00 (ayer el DAX subió ≈ 3,4 % según su ETF).",
  "agenda": [
    { "h": "14:30", "e": "IPC de octubre: est. +0,3 % m/m general (previo +0,6 %) y +0,2 % subyacente (previo +0,3 %)", "imp": "alto" },
    { "h": "15:30", "e": "Apertura de Wall Street", "imp": "medio" },
    { "h": "22:00", "e": "Cierre de Wall Street", "imp": "bajo" },
    { "h": "Tras cierre", "e": "CoreWeave: resultados (también D-Wave y Rigetti)", "imp": "alto" },
    { "h": "11 nov", "e": "Veterans Day: la bolsa abre, el mercado de bonos cierra", "imp": "bajo" },
    { "h": "12 nov", "e": "Applied Materials y Cisco: resultados (tras el cierre)", "imp": "alto" },
    { "h": "13 nov", "e": "IPP de octubre", "imp": "medio" },
    { "h": "8–9 dic", "e": "Próximo FOMC: CME da un 84 % a una subida de 25 pb", "imp": "alto" }
  ],
  "resultados": "Hoy: Sea Limited (antes de la apertura) y CoreWeave, D-Wave y Rigetti (tras el cierre). Ayer tras el cierre: The Trade Desk (≈ +23 %), Sanmina (≈ +22 %) e Hims & Hers (≈ −3 %). Jueves: Applied Materials y Cisco. Nvidia, la semana que viene.",
  "pesados": [
    { "t": "NVDA", "v": "−4,27 % (lun.)", "dir": "dn" },
    { "t": "AAPL", "v": "+2,43 % (lun.)", "dir": "up" },
    { "t": "MSFT", "v": "+2,75 % (lun.)", "dir": "up" },
    { "t": "AMZN", "v": "—", "dir": "" },
    { "t": "META", "v": "—", "dir": "" },
    { "t": "GOOGL", "v": "—", "dir": "" },
    { "t": "TSLA", "v": "—", "dir": "" },
    { "t": "AVGO", "v": "+8,8 % (lun.)", "dir": "up" }
  ],
  "pesados_nota": "A esta hora no hay premarket publicado de los pesos pesados: se muestran los cierres del lunes (Capp Notes, MarketAlleys e Investing.com). AMZN, META, GOOGL y TSLA: sin dato. Semis el lunes: SOXX +7,49 %, AMD +13 %, SOXL +22,25 %.",
  "aviso_horario": "",
  "fuentes": [
    { "n": "Capp Notes (cierre del lunes, sectores y fuera de hora)", "url": "https://cappnotes.substack.com/p/closing-look-monday-november-9-2026" },
    { "n": "alphainvestment (niveles del futuro NQ, 9 nov)", "url": "https://github.com/alphainvestment/Nasdaq/releases/tag/nasdaq-2026-11-10" },
    { "n": "Reuters vía Investing.com (futuros, chips y Fed)", "url": "https://au.investing.com/news/stock-market-news/us-stock-futures-steady-after-techled-rebound-cpi-in-focus-4756870" },
    { "n": "TipRanks (futuros, IPC y resultados)", "url": "https://www.tipranks.com/news/cpi-data-due-today-cooler-inflation-could-support-u-s-stocks" },
    { "n": "Reuters vía Business Recorder (Asia, crudo y divisas)", "url": "https://www.brecorder.com/news/40448221/asian-stocks-climb-as-sliding-oil-prices-buoy-sentiment" },
    { "n": "MarketAlleys (divisas, bitcoin y agenda)", "url": "https://www.marketalleys.com/post/marketalleys-daily-brief-2026-11-10" },
    { "n": "ktusing34 (niveles del futuro NQ, 5 nov)", "url": "https://ktusing34.substack.com/p/tech-selloff-es-nq-futures-levels" }
  ]
};
