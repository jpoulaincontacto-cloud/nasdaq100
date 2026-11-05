/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Jueves 5 de noviembre de 2026",
  "actualizado": "08:10 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "Paro semanal", "v": "14:30" },
    { "n": "Apertura cash", "v": "15:30" },
    { "n": "Cierre", "v": "22:00" }
  ],
  "precio": {
    "premarket": "≈ 28.183,75",
    "cambio": "≈ −371 · −1,3 %",
    "dir": "dn",
    "cierre_ayer": "≈ 28.555 (miércoles, futuro, estimado)",
    "gap": "≈ −371 pts (bajista)",
    "gap_mnq": "≈ −742 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "dn",
    "titulo": "Bajista",
    "confianza": 3,
    "texto": "Tras el rally electoral de ayer (Dow +3 %, su mejor sesión en 19 meses; Nasdaq 100 +0,91 %), el futuro NQ cae ≈ 1,3 % por los chips: Qualcomm (≈ −3 % a −6 %: móviles por debajo y costes de fabricación al alza) y Arm (≈ −3 % tras caer un 5 %; guía floja) castigan a los semis, y Asia se hunde en el sector (Kospi −3,5 %, SK Hynix −7,4 %, Samsung −5,7 %) por el temor a que el nuevo Congreso demócrata endurezca la regulación de la IA y los centros de datos. Mientras, el resto del mercado celebra la caída del crudo (Brent ≈ 94 $) y el posible fin de la guerra con Irán. Divergencia clara: el Dow sube y el Nasdaq cae.",
    "condicion": "Bajista mientras el precio no recupere 28.270–28.455 (pivote de investingLive / VAL del lunes). Cierre de 1H sobre 28.455 → 28.697–28.800; pérdida de 28.102 → 28.000 y 27.800."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · miércoles 4 nov",
    "etiqueta": "Nasdaq +1,44 %",
    "dir": "up",
    "resumen": "Rally tras las elecciones de mitad de mandato, en las que los demócratas ganaron ambas cámaras: el mercado apostó por el fin de la guerra con Irán y por menos aranceles. Dow +3,03 % (+1.569 puntos, 53.356,12), S&P 500 +1,58 % (7.688,62), Nasdaq +1,44 % (25.736,51), Nasdaq 100 +0,91 % (28.437,17) y Russell 2000 +1,58 % (2.856,95). Lideraron consumo discrecional (+4,26 %), financieras (+3,51 %) y comunicaciones (+3,47 %); a la cola, energía (−4,74 %), industriales (−1,09 %) y tecnología (plana). Semis (SOX) −3,13 %, defensa a la baja (Lockheed −6,9 %), renovables al alza. ADP +86.000 (est. 75.000); ISM de servicios 54,5 (est. 54,8). Crudo hundido: Brent −8,7 % (94,62 $), WTI 88,12 $. Bono a 10 años 4,89 % (−6 pb), oro +3,3 % (4.070), VIX 16,61 (−20 %). Futuro NQ: cierre ≈ 28.555 (estimado); máx./mín.: —.",
    "indices": [
      { "n": "Nasdaq", "v": "+1,44 %", "dir": "up" },
      { "n": "S&P 500", "v": "+1,58 %", "dir": "up" },
      { "n": "Dow", "v": "+3,03 %", "dir": "up" },
      { "n": "Russell 2000", "v": "+1,58 %", "dir": "up" }
    ]
  },
  "noticias": [
    { "t": "Qualcomm cae tras resultados: ingresos de móviles por debajo y aviso de costes de fabricación al alza", "v": "QCOM ≈ −3 % a −6 %", "dir": "dn" },
    { "t": "Arm decepciona con su guía del trimestre y amplía la caída de la sesión regular (−5 %)", "v": "ARM ≈ −3 %", "dir": "dn" },
    { "t": "Asia castiga a los chips por el temor a más regulación de la IA y los centros de datos con el nuevo Congreso", "v": "SK Hynix −7,4 %", "dir": "dn" },
    { "t": "AppLovin se dispara tras batir en BPA (4,30 $ vs 4,04 $); Snap y Zillow se hunden", "v": "APP ≈ +19 %", "dir": "up" },
    { "t": "Los demócratas ganan ambas cámaras: el crudo se desploma por la esperanza de fin de la guerra con Irán", "v": "Brent ≈ 94 $", "dir": "up" },
    { "t": "Hoy paro semanal y despidos de Challenger; mañana, empleo de octubre (est. ≈ +59.000–65.000)", "v": "14:30", "dir": "" }
  ],
  "noticias_nota": "Futuro NQ: Investing.com (06:55 Madrid, 28.183,75, −1,3 %). Cierres y fuera de hora del miércoles: Capp Notes. Asia: AP (media mañana). Las cifras de Qualcomm difieren entre fuentes (−6,2 % al cierre de la sesión ampliada; ≈ −3 % de madrugada).",
  "estructura": {
    "h4": "Bajista con rebote fallido. Desde el récord (≈ 31.400, 6 oct) la estructura marca máximos y mínimos decrecientes; el mínimo del lunes (28.102) aguantó y el miércoles el precio rebotó hasta ≈ 28.555, sin superar el máximo del lunes (28.891). Esta madrugada vuelve a 28.184, a 80 puntos de ese mínimo. Perder 28.102 sería un nuevo mínimo decreciente (continuación bajista) hacia 27.800; solo un cierre de 4H sobre 28.891 rompería la secuencia bajista.",
    "h1": "Bajista: el gap nocturno rompe la estructura alcista de corto plazo del miércoles (CHoCH bajista bajo 28.455) y el precio queda bajo el pivote de 28.270 (investingLive). Rebotes hacia 28.270–28.455 son vendibles mientras no haya un cierre de 1H por encima. Máx./mín. nocturnos: —."
  },
  "fuerza": [
    { "n": "AppLovin (fuera de hora)", "v": "+19,2 %", "pct": 100, "dir": "up" },
    { "n": "Consumo discrecional (miér.)", "v": "+4,26 %", "pct": 22, "dir": "up" },
    { "n": "Financieras (miér.)", "v": "+3,51 %", "pct": 18, "dir": "up" },
    { "n": "Dow (miér.)", "v": "+3,03 %", "pct": 16, "dir": "up" },
    { "n": "Hang Seng (hoy)", "v": "+2,8 %", "pct": 15, "dir": "up" },
    { "n": "Semis SOX (miér.)", "v": "−3,13 %", "pct": 16, "dir": "dn" },
    { "n": "Kospi (hoy)", "v": "−3,5 %", "pct": 18, "dir": "dn" },
    { "n": "Energía (miér.)", "v": "−4,74 %", "pct": 25, "dir": "dn" },
    { "n": "Qualcomm (fuera de hora)", "v": "−6,18 %", "pct": 32, "dir": "dn" },
    { "n": "SK Hynix (hoy)", "v": "−7,4 %", "pct": 38, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores e índices: cierre del miércoles (Capp Notes); Asia y SK Hynix, hoy (AP); valores, fuera de hora del miércoles (Capp Notes). Rotación: consumo y financieras arriba; energía y chips, a la cola.",
  "niveles": [
    { "n": "Resistencia 5 · máx. del lunes / VAH", "v": "28.891", "tipo": "r" },
    { "n": "Resistencia 4 · zona de prueba (XTB)", "v": "28.800", "tipo": "r" },
    { "n": "Resistencia 3 · POC del lunes", "v": "28.697", "tipo": "r" },
    { "n": "Cierre de ayer (futuro, estimado)", "v": "≈ 28.555", "tipo": "ref" },
    { "n": "Resistencia 2 · VAL del lunes", "v": "28.455", "tipo": "r" },
    { "n": "Resistencia 1 · pivote bajista (investingLive)", "v": "28.270", "tipo": "r" },
    { "n": "Precio premarket (06:55 Madrid)", "v": "≈ 28.183,75", "tipo": "precio" },
    { "n": "Soporte 1 · mín. del lunes", "v": "28.102", "tipo": "s" },
    { "n": "Soporte 2 · psicológico", "v": "28.000", "tipo": "s" },
    { "n": "Soporte 3 · objetivo bajista (Investing)", "v": "27.800", "tipo": "s" },
    { "n": "Soporte 4 · extensión Fibo 127,2 % (Investing)", "v": "27.316", "tipo": "s" },
    { "n": "Soporte 5 · mínimos de julio–agosto (XTB)", "v": "27.000", "tipo": "s" }
  ],
  "niveles_nota": "28.270: investingLive (análisis de hoy; solo he podido leer el titular, «bajistas al mando por debajo de 28.270»). Máx., POC, VAH, VAL y mín. del lunes: alphainvestment (2 nov). 28.800 y 27.000: XTB (3 nov). 27.800 y 27.316: Investing.com (2 nov). Cierre del miércoles estimado a partir de la cotización y el % de Investing. Máx./mín. del miércoles y nocturnos: —. RSI: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · los chips vuelven a pesar", "dir": "dn", "texto": "Apertura con gap de ≈ −371 puntos. Si el rebote se frena bajo 28.270–28.455, el precio pierde el mínimo del lunes (28.102) y busca 28.000 y 27.800. El paro semanal (14:30) es el único dato; el foco está en el empleo de mañana.", "gatillo": "Gatillo: rechazo en 28.270 y cierre de 15 min bajo 28.100 tras la apertura cash (15:30)" },
    "alternativo": { "titulo": "Alternativo · la rotación sostiene al índice", "dir": "up", "texto": "La caída del crudo y de las rentabilidades y la fuerza de Apple, Microsoft y Amazon (más del 5 % ayer) compensan la debilidad de los semis: el mínimo de 28.102 aguanta como doble suelo y el precio recupera 28.455 hacia el POC de 28.697.", "gatillo": "Gatillo: cierre de 1H sobre 28.455" },
    "invalidacion": "Invalidación: cierre de 4H sobre 28.891 anula el sesgo bajista (→ 29.305); cierre de 4H bajo 28.000 lo acelera (→ 27.800–27.316)."
  },
  "intermercado": [
    { "n": "Brent", "v": "≈ 93,9", "c": "−0,8 % hoy · −8,7 % ayer · WTI 87,3", "dir": "dn" },
    { "n": "Bono 10A EE. UU.", "v": "≈ 4,84 %", "c": "4,89 % cierre miér. · 2A 4,55 %", "dir": "dn" },
    { "n": "Oro", "v": "≈ 4.070", "c": "+3,3 % ayer (cierre)", "dir": "up" },
    { "n": "USD/JPY", "v": "157,96", "c": "−0,3 % · EUR/USD 1,1256", "dir": "dn" },
    { "n": "VIX", "v": "16,61", "c": "−20,3 % (cierre miér.)", "dir": "up" },
    { "n": "Bitcoin", "v": "≈ 80.230", "c": "+3,7 % en 24 h", "dir": "up" }
  ],
  "globales": "Asia dividida: los chips caen por el temor a la regulación en EE. UU. (Kospi −3,5 % a 5.484,38, llegó a perder más del 4 % y hubo suspensión temporal; Samsung −5,7 %, SK Hynix −7,4 %; Taiex −1,6 %; Nikkei −0,5 % a 61.914,53), mientras China y Australia suben (Hang Seng +2,8 % a 24.597,59; Shanghai +0,1 %; ASX +1,9 % a 9.003,40). Europa abre a las 09:00. Índice del dólar ≈ 101,5.",
  "agenda": [
    { "h": "Antes apertura", "e": "Resultados de Parker-Hannifin, Southern Co. y Duke Energy", "imp": "bajo" },
    { "h": "13:30", "e": "Despidos anunciados de Challenger (octubre)", "imp": "bajo" },
    { "h": "14:30", "e": "Peticiones semanales de subsidio de paro · productividad y costes laborales del T3", "imp": "medio" },
    { "h": "15:30", "e": "Apertura de Wall Street", "imp": "medio" },
    { "h": "22:00", "e": "Cierre de Wall Street", "imp": "bajo" },
    { "h": "Tras cierre", "e": "Airbnb: resultados", "imp": "medio" },
    { "h": "6 nov", "e": "Empleo de octubre (14:30): est. ≈ +59.000–65.000, paro 4,2 %", "imp": "alto" },
    { "h": "8–9 dic", "e": "Próximo FOMC: el mercado espera otra subida de tipos", "imp": "alto" }
  ],
  "resultados": "Hoy: Parker-Hannifin, Southern Company y Duke Energy (antes de la apertura) y Airbnb (tras el cierre). Ayer tras el cierre: Qualcomm (≈ −3 % a −6 %), Arm (≈ −3 %), AppLovin (+19 %), Snap (−8,6 %) y Zillow (−15 %).",
  "pesados": [
    { "t": "NVDA", "v": "−3,17 % (miér.)", "dir": "dn" },
    { "t": "AAPL", "v": "+5,31 % (miér., récord)", "dir": "up" },
    { "t": "MSFT", "v": "+6,68 % (miér.)", "dir": "up" },
    { "t": "AMZN", "v": "+6,12 % (miér.)", "dir": "up" },
    { "t": "META", "v": "—", "dir": "" },
    { "t": "GOOGL", "v": "+3,25 % (miér.)", "dir": "up" },
    { "t": "TSLA", "v": "−3,3 % (miér.)", "dir": "dn" },
    { "t": "AVGO", "v": "—", "dir": "" }
  ],
  "pesados_nota": "A esta hora no hay premarket publicado de los pesos pesados: se muestran los cierres del miércoles (Capp Notes; GOOGL y TSLA, Investing/AP). META y AVGO: sin dato. Semis: SOX −3,13 % el miércoles; fuera de hora Qualcomm y Arm a la baja.",
  "aviso_horario": "",
  "fuentes": [
    { "n": "Capp Notes (cierre del miércoles, sectores y fuera de hora)", "url": "https://cappnotes.substack.com/p/closing-look-wednesday-november-4" },
    { "n": "Investing.com (futuros, Qualcomm, Arm y elecciones)", "url": "https://ph.investing.com/news/stock-market-news/us-stock-index-futures-steady-after-midterms-rally-2676832" },
    { "n": "AP vía WSLS (Asia, crudo y divisas)", "url": "https://www.wsls.com/business/2026/11/05/asian-shares-mostly-advance-following-us-midterms-though-kospi-falls-on-selling-of-chipmakers/" },
    { "n": "investingLive (pivote del futuro NQ, solo titular)", "url": "https://investinglive.com/technical-analysis/nasdaq-futures-analysis-for-day-traders-today-bears-take-control-below-28-270-as-semiconductor-weakness-returns/" },
    { "n": "alphainvestment (niveles del futuro NQ, 2 nov)", "url": "https://github.com/alphainvestment/Nasdaq/releases/tag/nasdaq-2026-11-02" },
    { "n": "XTB (niveles US100, 3 nov)", "url": "https://xtb.com/cl/analisis-y-noticias/analisis-de-mercado/grafico-del-dia-el-nasdaq-100-entra-en-fase-de-correccion" },
    { "n": "Investing.com (niveles técnicos del futuro NQ, 2 nov)", "url": "https://es.investing.com/news/stock-market-news/futuros-del-nasdaq-100-en-bandera-bajista-niveles-en-vivo-93CH-3904436" }
  ]
};
