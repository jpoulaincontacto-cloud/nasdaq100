/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Viernes 23 de octubre de 2026",
  "actualizado": "07:55 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "Datos EE. UU.", "v": "15:45" },
    { "n": "Apertura cash", "v": "15:30" },
    { "n": "Fed (FOMC)", "v": "28 oct · 19:00" }
  ],
  "precio": {
    "premarket": "29.148,75",
    "cambio": "+6,75 · +0,02 %",
    "dir": "up",
    "cierre_ayer": "29.142",
    "gap": "≈ +7 pts (plano)",
    "gap_mnq": "≈ 13,5 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "dn",
    "titulo": "Bajista",
    "confianza": 2,
    "texto": "Tras el −2,9 % del Nasdaq 100 el futuro no rebota pese a la fuerte caída de rentabilidades. Brent en máximos de 5 meses y chips débiles en Asia; el precio está dentro de la zona de soporte 29.000–29.300.",
    "condicion": "Mientras no acepte por encima de 29.300. Perder 29.000 abre 28.750."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · jueves 22",
    "etiqueta": "Nasdaq −2,60 %",
    "dir": "dn",
    "resumen": "Peor sesión del Nasdaq desde junio: −2,60 % el Composite y −2,90 % el Nasdaq 100 (28.958,69). Meta cayó un 7 % por su gasto en IA y flujo de caja negativo, y los semiconductores se hundieron (SOX −6,7 %) tras la guía floja de Lam Research. El Brent rozó los 113 $ por los ataques hutíes en Arabia Saudí y el riesgo de nuevos ataques a Irán. El dinero rotó a bonos (10 años −19 pb, a ≈ 4,95 %) y a defensivos: consumo básico +3 %, Dow y Russell planos.",
    "indices": [
      { "n": "Nasdaq", "v": "−2,60 %", "dir": "dn" },
      { "n": "S&P 500", "v": "−1,21 %", "dir": "dn" },
      { "n": "Dow", "v": "+0,02 %", "dir": "up" },
      { "n": "Russell 2000", "v": "+0,11 %", "dir": "up" }
    ]
  },
  "noticias": [
    { "t": "Meta: más capex en IA y flujo de caja libre negativo", "v": "META −7,0 %", "dir": "dn" },
    { "t": "Chips: guía floja de Lam Research, peor día del SOX desde junio", "v": "SOX −6,7 %", "dir": "dn" },
    { "t": "Brent ≈ 113 $: ataques hutíes y riesgo de nuevos ataques a Irán", "v": "riesgo ↑", "dir": "dn" },
    { "t": "Bono a 10 años −19 pb: huida a bonos y defensivos", "v": "4,95 %", "dir": "up" },
    { "t": "Tesla bate, pero prevé más gasto en 2027–2028", "v": "TSLA −3,1 %", "dir": "dn" },
    { "t": "Noche: IPC de Japón 2,1 %, SK Hynix cancela la OPV de Solidigm", "v": "futuro =", "dir": "" }
  ],
  "noticias_nota": "% del cierre de ayer salvo indicación.",
  "estructura": {
    "h4": "Ruptura de estructura bajista ayer: el precio perdió el último mínimo creciente y la EMA100 (29.526) y ahora marca máximos y mínimos decrecientes. Está apoyado en la zona de demanda 29.000–29.300 (mínimos de septiembre); un cierre de 4H por debajo de 29.000 confirma continuación hacia 28.750 y 28.314.",
    "h1": "Tras la caída en tendencia de ayer, la 1H lleva toda la noche en un rango estrecho de 29.023 a 29.199. No hay cambio de carácter alcista mientras no recupere 29.300; por debajo de 29.023 se reanuda la secuencia bajista."
  },
  "fuerza": [
    { "n": "Consumo básico XLP", "v": "> +3 %", "pct": 45, "dir": "up" },
    { "n": "Russell 2000", "v": "+0,11 %", "pct": 2, "dir": "up" },
    { "n": "Dow", "v": "+0,02 %", "pct": 1, "dir": "up" },
    { "n": "S&P 500", "v": "−1,21 %", "pct": 18, "dir": "dn" },
    { "n": "Comunicaciones XLC", "v": "−1,42 %", "pct": 21, "dir": "dn" },
    { "n": "Nasdaq 100", "v": "−2,90 %", "pct": 43, "dir": "dn" },
    { "n": "Tecnología XLK", "v": "−3,3 %", "pct": 49, "dir": "dn" },
    { "n": "Semis SOX", "v": "−6,7 %", "pct": 100, "dir": "dn" }
  ],
  "fuerza_nota": "Seis de once sectores en verde: consumo básico, utilities, salud, inmobiliario y financieras lideraron; tecnología y comunicaciones a la cola.",
  "niveles": [
    { "n": "Cierre del miércoles", "v": "30.007", "tipo": "ref" },
    { "n": "Resistencia 2 · EMA100", "v": "29.526", "tipo": "r" },
    { "n": "Resistencia 1", "v": "29.300", "tipo": "r" },
    { "n": "Máx. nocturno", "v": "29.198,5", "tipo": "ref" },
    { "n": "Precio premarket", "v": "29.148,75", "tipo": "precio" },
    { "n": "Cierre de ayer (aprox.)", "v": "29.142", "tipo": "ref" },
    { "n": "Mín. nocturno", "v": "29.022,75", "tipo": "ref" },
    { "n": "Soporte 1", "v": "29.000", "tipo": "s" },
    { "n": "Soporte 2", "v": "28.750", "tipo": "s" },
    { "n": "Soporte 3 · EMA200", "v": "28.314", "tipo": "s" }
  ],
  "niveles_nota": "Zona 29.000–29.300, EMA100 y EMA200 del US100 según XTB (22 oct); 28.750 según TheStreet. Máx./mín. de ayer del futuro: —. RSI 14: ≈ 39 (XTB, jueves por la mañana, antes del cierre).",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · bajista", "dir": "dn", "texto": "Rebote inicial que se agota por debajo de 29.300 y pérdida de 29.000; continuación hacia 28.750 y, por extensión, 28.314 (EMA200).", "gatillo": "Gatillo: rechazo en 29.250–29.300 o cierre de 15 min bajo 29.000" },
    "alternativo": { "titulo": "Alternativo · rebote técnico", "dir": "up", "texto": "Rentabilidades a la baja y sobreventa cercana provocan cierre de cortos de viernes: recupera 29.300 y busca la EMA100 en 29.526.", "gatillo": "Gatillo: cierre de 1H por encima de 29.300" },
    "invalidacion": "Invalidación del sesgo bajista: cierre de 1H por encima de 29.300 tras la apertura cash; por encima de 29.526 la lectura pasa a neutral."
  },
  "intermercado": [
    { "n": "Brent", "v": "113,95", "c": "+0,7 %", "dir": "dn" },
    { "n": "Bono 10A EE. UU.", "v": "4,97 %", "c": "+1 pb (ayer −19 pb)", "dir": "" },
    { "n": "Oro", "v": "4.003,9", "c": "−0,5 %", "dir": "dn" },
    { "n": "USD/JPY", "v": "156,95", "c": "yen −0,1 %", "dir": "" },
    { "n": "VIX", "v": "19,03", "c": "+14,1 % ayer", "dir": "dn" },
    { "n": "Bitcoin", "v": "81.564", "c": "+0,5 %", "dir": "up" }
  ],
  "globales": "Asia (sesión en curso): Nikkei −1,4 %, Topix −1,3 %, Kospi −2,1 %, Shanghái −1,2 %, Hang Seng +0,3 %; Taiwán cerrado por tifón. Europa abre a las 09:00: futuro del Euro Stoxx 50 −0,1 %.",
  "agenda": [
    { "h": "15:30", "e": "Apertura de Wall Street", "imp": "alto" },
    { "h": "15:45", "e": "PMI manufacturero flash oct. · est. 55,5 · ant. 55,9", "imp": "medio" },
    { "h": "15:45", "e": "PMI de servicios flash oct. · est. 58,0 · ant. 58,8", "imp": "medio" },
    { "h": "16:00", "e": "Michigan: confianza y expectativas de inflación a 1 año · est. 4,7 %", "imp": "alto" },
    { "h": "28 oct 19:00", "e": "Decisión de la Fed (FOMC) y rueda de prensa de Warsh a las 19:30", "imp": "alto" },
    { "h": "29 oct 13:30", "e": "PIB T3 (avance) y PCE de septiembre", "imp": "alto" }
  ],
  "resultados": "Antes de la apertura: American Express, SLB, Illinois Tool Works, Booz Allen, Autoliv, First Citizens · Después del cierre: sin resultados relevantes. Próxima semana: Microsoft y Alphabet (28 oct), Amazon e Intel (29 oct).",
  "pesados": [
    { "t": "META", "v": "−7,0 %", "dir": "dn" },
    { "t": "AMZN", "v": "−4,6 %", "dir": "dn" },
    { "t": "NVDA", "v": "−4,4 %", "dir": "dn" },
    { "t": "AVGO", "v": "−4,3 %", "dir": "dn" },
    { "t": "GOOGL", "v": "−3,2 %", "dir": "dn" },
    { "t": "TSLA", "v": "−3,1 %", "dir": "dn" },
    { "t": "MSFT", "v": "−2,2 %", "dir": "dn" },
    { "t": "AAPL", "v": "+1,2 %", "dir": "up" }
  ],
  "pesados_nota": "Premarket individual: — (sin datos fiables a esta hora); los % son el cierre de ayer. Semis: AMD −8,1 %, Marvell ≈ −8,7 %, Intel ≈ −8 %, Micron −6,3 %. Western Digital cae tras resultados.",
  "aviso_horario": "Europa cambia de hora el domingo 25 y EE. UU. el 1 nov: del lunes 26 al viernes 30 oct el desfase con Nueva York es de 5 h → datos a las 13:30, apertura a las 14:30 y Fed el miércoles 28 a las 19:00 (Madrid).",
  "fuentes": [
    { "n": "AP / ABC News (cierres)", "url": "https://abcnews.com/Business/wireStory/major-us-stock-indexes-fared-thursday-10222026-137490327" },
    { "n": "MarketScreener (Nasdaq 100)", "url": "https://www.marketscreener.com/quote/index/NASDAQ-100-4946/" },
    { "n": "Yahoo Finance (NQ=F)", "url": "https://finance.yahoo.com/quote/NQ=F/" },
    { "n": "Bloomberg vía Swissinfo", "url": "https://swissinfo.ch/eng/global-ai-trade-under-pressure,-oil-extends-rally:-markets-wrap/92260391" },
    { "n": "Reuters vía Investing.com", "url": "https://www.investing.com/news/stock-market-news/nasdaq-futures-drop-over-1-as-ai-worries-resurface-oil-climbs-4965180" },
    { "n": "Investrade", "url": "https://investrade.com/market-review-october-22-2026/" },
    { "n": "XTB", "url": "https://www.xtb.com/cy/market-analysis/news-and-research/us100-drops-1-8" },
    { "n": "Investing.com (Asia)", "url": "https://ca.investing.com/news/stock-market-news/asia-stocks-fall-as-ai-rout-batters-skorea-japan-spooked-by-strong-cpi-4898468" },
    { "n": "Investing.com (calendario)", "url": "https://www.investing.com/news/stock-market-news/us-economic-calendar-preview-key-releases-for-the-week-of-oct-1923-2026-93CH-4958178" },
    { "n": "Schwab", "url": "https://www.schwab.com/learn/story/stock-market-update-open" },
    { "n": "LiteFinance (semana próxima)", "url": "https://www.litefinance.org/blog/analysts-opinions/weekly-economic-calendar-for-26102026-01112026/" }
  ]
};
