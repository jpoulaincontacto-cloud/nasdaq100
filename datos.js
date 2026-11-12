/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Jueves 12 de noviembre de 2026",
  "actualizado": "08:10 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "Paro semanal", "v": "14:30" },
    { "n": "Apertura cash", "v": "15:30" },
    { "n": "Cisco y AMAT", "v": "tras 22:00" }
  ],
  "precio": {
    "premarket": "≈ 28.185",
    "cambio": "≈ −256 · −0,9 %",
    "dir": "dn",
    "cierre_ayer": "≈ 28.441 (miércoles, futuro, estimado)",
    "gap": "≈ −256 pts (bajista)",
    "gap_mnq": "≈ −512 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "dn",
    "titulo": "Bajista",
    "confianza": 3,
    "texto": "Nvidia se hunde ≈ 8–10 % fuera de hora: según varias informaciones, su consejo se reunió el miércoles por la noche para decidir si destituye a Jensen Huang y trabaja con una firma externa para buscarle sustituto, tras las acusaciones de varias relaciones extramatrimoniales (una con una presunta espía china). El futuro NQ cae ≈ 0,9 % (≈ 28.185) y borra parte del rally de ayer (Nasdaq 100 +2,28 %, SOX +5,7 % con CoreWeave +24,7 %). Asia, mixta y débil (Taiex −1,2 %, Hang Seng −0,9 %). El dólar está en máximos de 18 meses, el yen roza los 160 y el mercado da ya ≈ 87–100 % a una subida de la Fed en diciembre. Hoy, paro semanal (14:30) y, tras el cierre, Cisco y Applied Materials.",
    "condicion": "Bajista mientras el precio no recupere 28.300–28.337 (VAH en desarrollo / stop de investingLive). Pérdida de 28.165 → 27.957 y 27.837; recuperar 28.337 neutraliza la caída."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · miércoles 11 nov",
    "etiqueta": "Nasdaq +1,60 %",
    "dir": "up",
    "resumen": "Gran rally de la IA liderado por CoreWeave (+24,7 % tras batir y elevar su guía de 2026 a 13.000–13.300 M$). Nasdaq 100 +2,28 % (28.374,25), Nasdaq +1,60 % (25.466,19), S&P 500 +1,31 % (7.619,38; a un 2,6 % de su récord), Dow +0,49 % (52.486,49) y Russell 2000 +0,88 % (2.846,26). Lideraron tecnología (+3,23 %), energía (+1,86 %) e industriales (+1,33 %); a la cola, consumo discrecional (−0,05 %). El índice de semiconductores de Filadelfia subió un 5,7 % con todos sus componentes al alza; Nvidia +2,87 % pese a la rebaja de Baird. Bonos cerrados por Veterans Day (10 años 4,98 % del martes). Brent +1,39 % (92,76 $), oro −0,74 % (4.000,50), VIX 17,49 (−10 %), índice del dólar 102,92 (+0,67 %, máximo desde abril de 2025), bitcoin ≈ 74.440. Futuro NQ: cierre ≈ 28.441 (estimado); máx./mín.: —.",
    "indices": [
      { "n": "Nasdaq", "v": "+1,60 %", "dir": "up" },
      { "n": "S&P 500", "v": "+1,31 %", "dir": "up" },
      { "n": "Dow", "v": "+0,49 %", "dir": "up" },
      { "n": "Russell 2000", "v": "+0,88 %", "dir": "up" }
    ]
  },
  "noticias": [
    { "t": "El consejo de Nvidia se reúne para decidir si destituye a Jensen Huang y busca posibles sustitutos con una firma externa", "v": "NVDA ≈ −8,6 %", "dir": "dn" },
    { "t": "CoreWeave se dispara tras batir y elevar su guía de 2026; los semis tuvieron su mejor cierre desde el 3 de noviembre", "v": "CRWV +24,7 %", "dir": "up" },
    { "t": "Hoy tras el cierre: Cisco y Applied Materials, claves para el gasto en IA y equipos de chips", "v": "22:00", "dir": "" },
    { "t": "El dólar marca máximos de 18 meses y el yen roza 160; el mercado descuenta casi por completo una subida de la Fed en diciembre", "v": "USD/JPY 159,7", "dir": "dn" },
    { "t": "El crudo baja hacia mínimos de dos meses por el aumento de la producción en Oriente Medio", "v": "WTI −1,5 %", "dir": "up" },
    { "t": "Asia, débil por Nvidia: Taiex −1,2 %, Hang Seng −0,9 %, Nikkei −0,1 %", "v": "Taiex −1,2 %", "dir": "dn" }
  ],
  "noticias_nota": "Futuro NQ: Bloomberg vía Swissinfo (−0,9 % a las 05:54 Madrid) e investingLive (≈ 28.185 a las 06:25). Otras fuentes dieron −0,8 % tras la noticia del WSJ. Nvidia: AP (−8,6 % fuera de hora), Bloomberg (hasta −10 %), Reuters (más de −8 %). Las informaciones sobre el consejo de Nvidia citan fuentes anónimas; no hay decisión oficial a esta hora.",
  "estructura": {
    "h4": "Neutral-alcista en riesgo. El rebote desde 26.366 (6 nov) ha marcado mínimos crecientes (27.516 el martes) y ayer un nuevo máximo de rebote cerca de 28.441, superando el máximo del lunes (28.129). Pero la noticia de Nvidia devuelve el precio a 28.185: si pierde 27.957–27.837 (POC de los días anteriores) el giro alcista se invalida. La resistencia mayor sigue en 28.600–28.800 y 28.969.",
    "h1": "Bajista de corto plazo: gap nocturno con CHoCH bajista bajo 28.300 tras la noticia de Nvidia. La zona 28.232–28.337 (VWAP y bandas) es de venta según investingLive; por abajo, 28.165 (VAL del miércoles), 27.957 y 27.837 son los objetivos. Máx./mín. nocturnos: —."
  },
  "fuerza": [
    { "n": "CoreWeave (miér.)", "v": "+24,71 %", "pct": 100, "dir": "up" },
    { "n": "Semis SOX (miér.)", "v": "+5,7 %", "pct": 23, "dir": "up" },
    { "n": "Tecnología (miér.)", "v": "+3,23 %", "pct": 13, "dir": "up" },
    { "n": "Nasdaq 100 (miér.)", "v": "+2,28 %", "pct": 9, "dir": "up" },
    { "n": "Energía (miér.)", "v": "+1,86 %", "pct": 8, "dir": "up" },
    { "n": "Consumo discrecional (miér.)", "v": "−0,05 %", "pct": 1, "dir": "dn" },
    { "n": "Hang Seng (hoy)", "v": "−0,9 %", "pct": 4, "dir": "dn" },
    { "n": "Futuro NQ (noche)", "v": "≈ −0,9 %", "pct": 4, "dir": "dn" },
    { "n": "Taiex (hoy)", "v": "−1,2 %", "pct": 5, "dir": "dn" },
    { "n": "Nvidia (fuera de hora)", "v": "≈ −8,6 %", "pct": 35, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores, índices y valores del miércoles: Capp Notes; Asia, hoy (AP); Nvidia, fuera de hora (AP); futuro NQ, Bloomberg.",
  "niveles": [
    { "n": "Resistencia 5 · máx. del 4 nov", "v": "28.969", "tipo": "r" },
    { "n": "Resistencia 4 · antiguo soporte (Oneup Trader)", "v": "28.600–28.800", "tipo": "r" },
    { "n": "Cierre de ayer (futuro, estimado)", "v": "≈ 28.441", "tipo": "ref" },
    { "n": "Resistencia 3 · stop / VAH en desarrollo (investingLive)", "v": "28.300–28.337", "tipo": "r" },
    { "n": "Resistencia 2 · VWAP y banda (investingLive)", "v": "28.254–28.284", "tipo": "r" },
    { "n": "Resistencia 1 · primera entrada corta (investingLive)", "v": "28.232", "tipo": "r" },
    { "n": "Precio premarket (06:25 Madrid)", "v": "≈ 28.185", "tipo": "precio" },
    { "n": "Soporte 1 · VAL de ayer", "v": "28.165", "tipo": "s" },
    { "n": "Soporte 2 · POC de una sesión anterior", "v": "27.957", "tipo": "s" },
    { "n": "Soporte 3 · POC y VWAP del 10 nov", "v": "27.837", "tipo": "s" },
    { "n": "Soporte 4 · mínimo del 10 nov", "v": "27.516", "tipo": "s" }
  ],
  "niveles_nota": "Niveles del futuro NQ: investingLive (12 nov, 06:25 Madrid; sesgo bajista, vender rebotes). 28.600–28.800: Oneup Trader. 28.969 y 27.516: investingLive (11 nov). Cierre del miércoles estimado a partir de la cotización y el % de Bloomberg. RSI: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · Nvidia arrastra al índice", "dir": "dn", "texto": "Nvidia (≈ 8 % del índice) cae con fuerza en la apertura mientras el mercado espera la decisión del consejo. Rebotes hacia 28.232–28.300 se venden y el precio busca 28.165, 27.957 y 27.837.", "gatillo": "Gatillo: rechazo en 28.232–28.300 y cierre de 15 min bajo 28.165 tras la apertura cash (15:30)" },
    "alternativo": { "titulo": "Alternativo · el resto de la IA aguanta", "dir": "up", "texto": "El mercado separa el problema de gobierno de Nvidia de la demanda de IA (CoreWeave, TSMC): el resto de semis compensa, el precio recupera 28.337 y vuelve a 28.441 antes de Cisco y Applied Materials.", "gatillo": "Gatillo: cierre de 1H sobre 28.337" },
    "invalidacion": "Invalidación: cierre de 4H sobre 28.441 anula el sesgo bajista (→ 28.600–28.800); cierre de 4H bajo 27.837 lo acelera (→ 27.516)."
  },
  "intermercado": [
    { "n": "Brent", "v": "≈ 91,6", "c": "−1,2 % hoy · WTI 85,2", "dir": "dn" },
    { "n": "Bono 10A EE. UU.", "v": "≈ 4,98 %", "c": "−1 pb · 30A 5,32 %", "dir": "dn" },
    { "n": "Oro", "v": "≈ 3.975", "c": "−0,3 % hoy", "dir": "dn" },
    { "n": "USD/JPY", "v": "159,7", "c": "cerca de 160 · EUR/USD 1,1077", "dir": "up" },
    { "n": "VIX", "v": "17,49", "c": "−10,1 % (cierre miér.)", "dir": "up" },
    { "n": "Bitcoin", "v": "≈ 73.700", "c": "−0,8 %", "dir": "dn" }
  ],
  "globales": "Asia mixta y débil por Nvidia: Taiex −1,2 %, Hang Seng −0,9 % (24.088,41), ASX −0,4 % (9.117,00), Nikkei −0,1 % (61.224,87), Kospi plano (5.375,63) tras ceder sus ganancias, Shanghai +0,2 % (3.688,05), Topix +0,3 %. El MSCI Asia-Pacífico cae un 0,5 % tras tres días de subidas; la rupia indonesia marca mínimos históricos. Europa: futuros del Euro Stoxx 50 +0,3 %; apertura a las 09:00. Índice del dólar ≈ 102,9 (máximo de 18 meses).",
  "agenda": [
    { "h": "14:30", "e": "Peticiones semanales de subsidio de paro", "imp": "medio" },
    { "h": "15:30", "e": "Apertura de Wall Street", "imp": "medio" },
    { "h": "Todo el día", "e": "Posible comunicado del consejo de Nvidia sobre Jensen Huang", "imp": "alto" },
    { "h": "22:00", "e": "Cierre de Wall Street", "imp": "bajo" },
    { "h": "Tras cierre", "e": "Cisco y Applied Materials: resultados", "imp": "alto" },
    { "h": "13 nov", "e": "IPP de octubre", "imp": "medio" },
    { "h": "Próx. semana", "e": "Nvidia: resultados", "imp": "alto" },
    { "h": "8–9 dic", "e": "Próximo FOMC: el mercado descuenta ≈ 87–100 % de una subida de 25 pb", "imp": "alto" }
  ],
  "resultados": "Hoy tras el cierre: Cisco y Applied Materials. Ayer: CoreWeave (+24,7 % en la sesión); tras el cierre, Corteva a la baja. La semana que viene: Nvidia.",
  "pesados": [
    { "t": "NVDA", "v": "+2,87 % (miér.) · ≈ −8,6 % fuera de hora", "dir": "dn" },
    { "t": "AAPL", "v": "—", "dir": "" },
    { "t": "MSFT", "v": "—", "dir": "" },
    { "t": "AMZN", "v": "—", "dir": "" },
    { "t": "META", "v": "—", "dir": "" },
    { "t": "GOOGL", "v": "—", "dir": "" },
    { "t": "TSLA", "v": "—", "dir": "" },
    { "t": "AVGO", "v": "—", "dir": "" }
  ],
  "pesados_nota": "A esta hora no hay premarket publicado de los pesos pesados y mi fuente del cierre del miércoles no recoge el resto de las 7 Magníficas: solo hay dato de Nvidia (Capp Notes y AP). Semis el miércoles: SOX +5,7 % con todos sus valores al alza.",
  "aviso_horario": "",
  "fuentes": [
    { "n": "Capp Notes (cierre del miércoles)", "url": "https://cappnotes.substack.com/p/closing-look-wednesday-november-11" },
    { "n": "Bloomberg vía Swissinfo (futuros, Nvidia, divisas y materias primas)", "url": "https://www.swissinfo.ch/eng/us-stock-futures-fall-as-nvidia-turmoil-deepens:-markets-wrap/92367440" },
    { "n": "Reuters vía Business Recorder (consejo de Nvidia y Fed)", "url": "https://www.brecorder.com/news/40448543/asian-stocks-fragile-nvidia-plummets-as-board-to-decide-ceos-fate" },
    { "n": "AP vía News4Jax (Asia y Nvidia)", "url": "https://www.news4jax.com/business/2026/11/12/asian-shares-mostly-slip-as-nvidias-troubles-weigh-on-ai-stocks-despite-a-rally-on-wall-st/" },
    { "n": "investingLive (niveles del futuro NQ)", "url": "https://investinglive.com/technical-analysis/nasdaq-futures-are-under-pressure-is-it-too-late-to-short/" },
    { "n": "Oneup Trader (niveles del futuro NQ)", "url": "https://blog.oneuptrader.com/analysis/technical-analysis/nasdaq-futures-nq-technical-analysis-can-bulls-reclaim-28800/" }
  ]
};
