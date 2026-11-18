/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Miércoles 18 de noviembre de 2026",
  "actualizado": "08:10 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "Apertura cash", "v": "15:30" },
    { "n": "Actas Fed", "v": "20:00" },
    { "n": "Cierre", "v": "22:00" }
  ],
  "precio": {
    "premarket": "≈ 27.221",
    "cambio": "≈ +145,5 · +0,54 %",
    "dir": "up",
    "cierre_ayer": "≈ 27.075,5 (martes, futuro)",
    "gap": "≈ +146 pts (alcista moderado)",
    "gap_mnq": "≈ +291 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "",
    "titulo": "Neutral: Nvidia bate, pero el mercado duda",
    "confianza": 2,
    "texto": "Nvidia batió con holgura: ingresos de 115.840 M$ (+103 % a/a; est. ≈ 109.000 M$), BPA de 2,68 $ (est. 2,48 $), centros de datos 107.600 M$ y guía del T4 de ≈ 130.000 M$ (est. ≈ 125.000 M$). El consejo descarta el regreso de Jensen Huang. La acción llegó a subir un 6 % fuera de hora y el futuro NQ más de un 1,5 %, pero se fue desinflando: Nvidia acabó cayendo un 0,5 % y el futuro sube solo ≈ 0,5 % (27.221). Asia también devolvió casi todo (el Kospi pasó de +3 % a casi plano). El S&P 500 está en mínimos desde julio, el VIX en 25 y la Fed camino de subir en diciembre (Kalshi 91 %). Hoy, actas de la Fed (20:00) y precio de la salida a bolsa de Anthropic, que cotiza mañana.",
    "condicion": "Neutral entre 27.075 y 27.433. Aceptación sobre 27.433 → 27.705; pérdida de 27.075 (cierre de ayer) → 26.751."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · martes 17 nov",
    "etiqueta": "Nasdaq −0,74 %",
    "dir": "dn",
    "resumen": "Otra caída generalizada antes de Nvidia: los 11 sectores cerraron en rojo y solo subieron 75 valores del S&P 500. Nasdaq 100 −0,72 % (27.001,79; el mejor de los grandes índices), Nasdaq −0,74 % (24.328,38), S&P 500 −1,03 % (7.340,53, mínimo desde julio), Dow −1,64 % (50.759,42; −1.700 puntos en dos días) y Russell 2000 −1,50 % (2.701,87). Lo menos malo: energía (−0,52 %), industriales (−0,55 %) y consumo discrecional (−0,89 %); lo peor: financieras (−1,91 %), utilities (−1,59 %) e inmobiliario (−1,49 %). Venta en software (IGV −3,29 %; Salesforce −9,45 %, Microsoft −2,27 %). Datos: ventas minoristas +0,2 % (est. +0,1 %), producción industrial +0,3 % y confianza de constructores 25, mínimo de 14 años. Bono a 10 años 5,10 %, Brent 93,14 $, oro 3.851,90 $, VIX 25,46 (+11 %), índice del dólar 103,55, bitcoin ≈ 64.200. Futuro NQ: cierre ≈ 27.075,5; máx./mín.: —.",
    "indices": [
      { "n": "Nasdaq", "v": "−0,74 %", "dir": "dn" },
      { "n": "S&P 500", "v": "−1,03 %", "dir": "dn" },
      { "n": "Dow", "v": "−1,64 %", "dir": "dn" },
      { "n": "Russell 2000", "v": "−1,50 %", "dir": "dn" }
    ]
  },
  "noticias": [
    { "t": "Nvidia bate: ingresos 115.840 M$ (+103 %), BPA 2,68 $ y guía del T4 de ≈ 130.000 M$; el consejo descarta el regreso de Huang", "v": "NVDA ≈ −0,5 %", "dir": "" },
    { "t": "El entusiasmo se desinfla: Nvidia pasó de +6 % a −0,5 % fuera de hora y el Kospi devolvió casi todo su +3 %", "v": "NQ ≈ +0,5 %", "dir": "up" },
    { "t": "Anthropic fija hoy el precio de su salida a bolsa (en la parte alta del rango o por encima, según Bloomberg); cotiza mañana como ANT", "v": "≈ 1,4 bill. $", "dir": "" },
    { "t": "Hoy actas de la Fed (20:00); Kalshi da un 91 % a una subida de 25 pb el 9 de diciembre", "v": "91 %", "dir": "dn" },
    { "t": "EE. UU. ataca una lanzadera de misiles iraní en la isla de Qeshm tras un ataque con drones a un radar en Baréin", "v": "Brent ≈ 92,6 $", "dir": "dn" },
    { "t": "Nuevas licencias de exportación de chips de IA al Sudeste Asiático y Brasil, en vigor desde mañana", "v": "19 nov", "dir": "dn" }
  ],
  "noticias_nota": "Futuro NQ: Reuters vía Yahoo Finance (≈ 05:00 Madrid, 27.221, +145,5, +0,54 %); antes llegó a subir ≈ 1,5 % (CNBC TV18). Cierres: Capp Notes. Nvidia: Capp Notes, CNBC TV18 y Reuters. El oro del widget de Yahoo (3.780 $, −2,18 %) no tiene hora: lo tomo con cautela.",
  "estructura": {
    "h4": "Bajista. El lunes el precio perdió el mínimo creciente de 27.516 y ayer siguió bajando hasta cerrar en ≈ 27.075, por debajo de la zona 27.100–27.166. El rebote nocturno tras Nvidia se ha desinflado y por ahora no recupera ni el POC del lunes (27.433). Sigue la secuencia de máximos y mínimos decrecientes desde el récord; los soportes mayores están en 26.751 y 26.366.",
    "h1": "Rebote nocturno con mecha: el pico tras Nvidia (≈ +1,5 %) se vendió y el precio vuelve a ≈ 27.220. Rango 27.075–27.433: un cierre de 1H sobre 27.433 sería BOS alcista de corto plazo; perder 27.075 devolvería el control a los bajistas. Máx./mín. nocturnos exactos: —."
  },
  "fuerza": [
    { "n": "Bill.com (mar.)", "v": "+12,58 %", "pct": 100, "dir": "up" },
    { "n": "Nvidia (máx. fuera de hora)", "v": "+6 %", "pct": 48, "dir": "up" },
    { "n": "Futuro NQ (noche)", "v": "+0,54 %", "pct": 4, "dir": "up" },
    { "n": "Energía (mar.)", "v": "−0,52 %", "pct": 4, "dir": "dn" },
    { "n": "Nasdaq 100 (mar.)", "v": "−0,72 %", "pct": 6, "dir": "dn" },
    { "n": "S&P 500 (mar.)", "v": "−1,03 %", "pct": 8, "dir": "dn" },
    { "n": "Dow (mar.)", "v": "−1,64 %", "pct": 13, "dir": "dn" },
    { "n": "Financieras (mar.)", "v": "−1,91 %", "pct": 15, "dir": "dn" },
    { "n": "Software IGV (mar.)", "v": "−3,29 %", "pct": 26, "dir": "dn" },
    { "n": "Salesforce (mar.)", "v": "−9,45 %", "pct": 75, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores, índices y valores del martes: Capp Notes; Nvidia fuera de hora: CNBC TV18; futuro NQ: Reuters. Ayer los 11 sectores cayeron; el software fue lo peor.",
  "niveles": [
    { "n": "Resistencia 4 · máx. del lunes", "v": "28.279", "tipo": "r" },
    { "n": "Resistencia 3 · VAH del lunes", "v": "27.705", "tipo": "r" },
    { "n": "Resistencia 2 · POC del lunes", "v": "27.433", "tipo": "r" },
    { "n": "Resistencia 1 · cierre / mín. del lunes", "v": "27.235–27.285", "tipo": "r" },
    { "n": "Precio premarket (≈ 05:00 Madrid)", "v": "≈ 27.221", "tipo": "precio" },
    { "n": "Soporte 1 · antiguo soporte del 5 nov", "v": "27.100–27.166", "tipo": "s" },
    { "n": "Cierre de ayer (futuro)", "v": "≈ 27.075,5", "tipo": "ref" },
    { "n": "Soporte 2 · mínimo del 9 nov", "v": "26.751", "tipo": "s" },
    { "n": "Soporte 3 · mínimo de la corrección (6 nov)", "v": "≈ 26.366", "tipo": "s" }
  ],
  "niveles_nota": "No he encontrado niveles del futuro NQ publicados hoy ni el máx./mín. de ayer: se usan los del lunes (alphainvestment) y de semanas anteriores. Cierre del martes calculado a partir de la cotización y la variación de Reuters. RSI: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · rango con las actas de la Fed", "dir": "", "texto": "El mercado digiere Nvidia sin entusiasmo: el precio oscila entre 27.075 y 27.433 hasta las actas de la Fed (20:00). El tono de las actas (más o menos agresivo sobre la subida de diciembre) y el precio de Anthropic marcarán el cierre.", "gatillo": "Gatillo: rechazo en 27.433 → vuelta a 27.100; ruptura de 27.075 → 26.751" },
    "alternativo": { "titulo": "Alternativo · Nvidia reactiva la IA", "dir": "up", "texto": "La sesión cash recupera el entusiasmo de la noche (centros de datos +100 %, guía de 130.000 M$): el precio supera 27.433 y busca 27.705, con los semis tirando del índice.", "gatillo": "Gatillo: cierre de 1H sobre 27.433" },
    "invalidacion": "Invalidación: cierre de 4H sobre 27.705 cambia el sesgo a alcista de corto plazo (→ 28.033–28.279); cierre de 4H bajo 26.751 reactiva la caída (→ 26.366)."
  },
  "intermercado": [
    { "n": "Brent", "v": "≈ 92,6", "c": "−0,6 % hoy · WTI ≈ 84,6–86,0", "dir": "dn" },
    { "n": "Bono 10A EE. UU.", "v": "≈ 5,08 %", "c": "−2 pb · 2A 4,80 %", "dir": "dn" },
    { "n": "Oro", "v": "3.851,90", "c": "cierre mar. (−0,03 %)", "dir": "" },
    { "n": "USD/JPY", "v": "159,41–159,55", "c": "plano · índice del dólar 103,60", "dir": "" },
    { "n": "VIX", "v": "25,46", "c": "+11,1 % (cierre mar.)", "dir": "dn" },
    { "n": "Bitcoin", "v": "≈ 64.200", "c": "−1 % · cerca de mínimos de 3 meses", "dir": "dn" }
  ],
  "globales": "Asia empezó al alza por Nvidia (Kospi +3,1 %, Taiex +1,1 %, Nikkei +1 %) pero devolvió casi todo: según Reuters, el MSCI Asia-Pacífico sin Japón cae un 0,1 % (cinco días seguidos a la baja) y el Nikkei −0,3 %. Futuros del Hang Seng ≈ −0,3 %. Europa abre a las 09:00. Índice del dólar 103,60 (máximo desde abril de 2025).",
  "agenda": [
    { "h": "15:30", "e": "Apertura de Wall Street", "imp": "medio" },
    { "h": "20:00", "e": "Actas de la reunión de la Fed de octubre (hora habitual)", "imp": "alto" },
    { "h": "22:00", "e": "Cierre de Wall Street", "imp": "bajo" },
    { "h": "Tras cierre", "e": "Anthropic fija el precio de su salida a bolsa", "imp": "alto" },
    { "h": "19 nov", "e": "Debut de Anthropic en el Nasdaq (ANT) · entran en vigor nuevas licencias de exportación de chips · Trump–Xi–Putin en la APEC", "imp": "alto" },
    { "h": "Esta semana", "e": "Walmart, Home Depot y Target: resultados (fechas: —)", "imp": "medio" },
    { "h": "26 nov", "e": "Acción de Gracias: bolsa de EE. UU. cerrada (27 nov, sesión corta)", "imp": "medio" },
    { "h": "8–9 dic", "e": "Próximo FOMC: Kalshi da un 91 % a una subida de 25 pb", "imp": "alto" }
  ],
  "resultados": "Ayer tras el cierre: Nvidia (bate en ingresos, BPA y guía; acción ≈ −0,5 % tras subir un 6 %), Palo Alto Networks (resultado: —) y Dolby (≈ −3 %, guía floja). Hoy: no he encontrado resultados relevantes del Nasdaq 100 confirmados.",
  "pesados": [
    { "t": "NVDA", "v": "−0,44 % (mar.) · ≈ −0,5 % fuera de hora", "dir": "dn" },
    { "t": "AAPL", "v": "—", "dir": "" },
    { "t": "MSFT", "v": "−2,27 % (mar.)", "dir": "dn" },
    { "t": "AMZN", "v": "—", "dir": "" },
    { "t": "META", "v": "—", "dir": "" },
    { "t": "GOOGL", "v": "—", "dir": "" },
    { "t": "TSLA", "v": "—", "dir": "" },
    { "t": "AVGO", "v": "—", "dir": "" }
  ],
  "pesados_nota": "Cierres del martes según Capp Notes; Nvidia fuera de hora según Reuters. El resto de las 7 Magníficas no aparece en mis fuentes. Software ayer: IGV −3,29 %, Salesforce −9,45 %, Oracle −3,43 %, Palantir −2,39 %.",
  "analisis": {
    "swing": {
      "dir": "dn",
      "marco": "Diario / 4H · días a semanas",
      "titulo": "Bajista: Nvidia no ha cambiado la tendencia",
      "texto": "Pese a unos resultados muy buenos, el mercado vendió el rebote de Nvidia: es una señal de debilidad (buena noticia que no sube). La tendencia diaria sigue bajista desde el récord, con el S&P 500 en mínimos desde julio, el 10 años sobre el 5 % y la Fed camino de subir. Rebotes hacia 27.433–27.705 son de venta mientras no haya cierre diario sobre 28.279.",
      "entrada": "27.433–27.705 (rechazo en 4H)",
      "stop": "Cierre diario sobre 28.279",
      "objetivos": ["26.751", "26.366", "26.000"],
      "alternativa": "Alternativa alcista: un cierre diario sobre 27.705 tras las actas y el debut de Anthropic pondría el sesgo en neutral (→ 28.279)."
    },
    "intradia": {
      "dir": "",
      "marco": "15 min / 1H · solo hoy",
      "titulo": "Neutral: rango hasta las actas",
      "texto": "Gap alcista moderado que ya se ha desinflado. Plan: operar el rango 27.075–27.433 (venta en rechazo de 27.433, compra en rechazo de 27.075–27.100) con poco tamaño y reducir antes de las 20:00 (actas de la Fed).",
      "entrada": "Venta en 27.433 / compra en 27.075–27.100 (rechazo en 15 min)",
      "stop": "27.480 en la venta / 27.030 en la compra",
      "objetivos": ["27.250 (mitad del rango)", "27.075 o 27.433 (extremo opuesto)"],
      "alternativa": "Ruptura: cierre de 15 min sobre 27.433 → largos en el retesteo hacia 27.705; bajo 27.075 → cortos en el retesteo hacia 26.751."
    },
    "nota": "Análisis propio a partir de los niveles publicados (alphainvestment y semanas anteriores) y la estructura de price action. No incluye tamaño de posición ni gestión de riesgo personal."
  },
  "aviso_horario": "",
  "fuentes": [
    { "n": "Capp Notes (cierre del martes y Nvidia)", "url": "https://cappnotes.substack.com/p/closing-look-tuesday-november-17" },
    { "n": "Reuters vía Yahoo Finance (futuros, Asia, divisas y Anthropic)", "url": "https://finance.yahoo.com/markets/stocks/articles/asia-stocks-set-snap-losing-014340794.html" },
    { "n": "CNBC TV18 vía TradingView (Nvidia y Asia)", "url": "https://www.tradingview.com/news/cnbctv:352a14e2e094b:0/" },
    { "n": "Nvidia · nota de resultados (SEC)", "url": "https://www.sec.gov/Archives/edgar/data/0001045810/000104581026000088/q3fy27pr.htm" },
    { "n": "alphainvestment (niveles del futuro NQ, 16 nov)", "url": "https://github.com/alphainvestment/Nasdaq/releases/tag/nasdaq-2026-11-17" }
  ]
};
