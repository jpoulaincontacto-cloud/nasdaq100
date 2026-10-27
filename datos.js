/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Martes 27 de octubre de 2026",
  "actualizado": "08:00 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "Datos EE. UU.", "v": "13:30" },
    { "n": "Apertura cash", "v": "14:30" },
    { "n": "Fed (FOMC)", "v": "28 oct · 19:00" }
  ],
  "precio": {
    "premarket": "≈ 29.463",
    "cambio": "≈ −59 · −0,2 %",
    "dir": "dn",
    "cierre_ayer": "29.521,75 (lunes)",
    "gap": "≈ −59 pts (bajista leve)",
    "gap_mnq": "≈ −118 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "",
    "titulo": "Neutral",
    "confianza": 2,
    "texto": "Tras el +1,3 % del futuro el lunes (salida a bolsa de Anthropic y chips +2,8 %) el NQ recoge beneficios un 0,2 % de madrugada. Hoy arranca la reunión de la Fed (decisión mañana a las 19:00) y mañana publican Microsoft y Alphabet: martes de digestión, con datos a las 13:30 y la confianza del consumidor a las 15:00 como catalizadores.",
    "condicion": "Inclinación alcista solo mientras aguante 29.326 (máx. del viernes, ahora soporte). Aceptación sobre 29.571 → 29.800; cierre de 1H bajo 29.326 → vuelta a 29.027–29.000."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · lunes 26 oct",
    "etiqueta": "Nasdaq +0,82 %",
    "dir": "up",
    "resumen": "Rebote tecnológico: la solicitud de salida a bolsa de Anthropic en el Nasdaq (ticker ANT) reactivó el comercio de chips IA (SOX +2,82 %; Nvidia +2,4 %, Broadcom +2,3 %, Micron +3 %) y Tesla subió un 5,2 % por la mejora de Barclays. Meta cayó un 1,9 % al anunciar una ampliación de capital de hasta 95.000 M$ y arrastró a comunicaciones (−1,57 %). El crudo cedió (Brent ≈ 115,8 $), el bono a 10 años quedó en 4,99 % y el VIX bajó a 18,4. Amplitud floja: 349 mínimos nuevos en el Nasdaq frente a 82 máximos y el S&P de igual peso solo +0,35 %. Nasdaq 100 contado ≈ 29.318 (+1,2 %, sin cierre oficial confirmado); futuro NQZ26 29.521,75 (+1,31 %).",
    "indices": [
      { "n": "Nasdaq", "v": "+0,82 %", "dir": "up" },
      { "n": "S&P 500", "v": "+0,70 %", "dir": "up" },
      { "n": "Dow", "v": "+0,28 %", "dir": "up" },
      { "n": "Russell 2000", "v": "+0,38 %", "dir": "up" }
    ]
  },
  "noticias": [
    { "t": "Anthropic registra su salida a bolsa en el Nasdaq (ANT): vuelve el apetito por chips IA", "v": "SOX +2,8 %", "dir": "up" },
    { "t": "Meta busca hasta 95.000–97.500 M$ en acciones para financiar IA", "v": "META −1,9 %", "dir": "dn" },
    { "t": "Broadcom prepara 63.000 M$ de financiación para una compra; SpaceX, 40.000 M$ para chips", "v": "capex IA ↑", "dir": "" },
    { "t": "Barclays sube Tesla a sobreponderar (objetivo 450 $)", "v": "TSLA +5,2 %", "dir": "up" },
    { "t": "Delegaciones viajan a Irán para reactivar el diálogo; el crudo sigue cediendo", "v": "Brent ≈ 114,6", "dir": "up" },
    { "t": "Asia sube con la tecnología: Kospi +3,8 %, Nikkei +1,7 %; SK Hynix y Samsung +4 %", "v": "futuro −0,2 %", "dir": "dn" }
  ],
  "noticias_nota": "% del cierre del lunes salvo indicación.",
  "estructura": {
    "h4": "Giro de corto plazo. Tras la base en 29.000 (mínimos de jueves a lunes) el lunes superó el máximo del viernes, 29.326: CHoCH alcista en 4H con máximo en 29.571. La estructura mayor sigue bajista mientras no supere el máximo decreciente de 29.993–30.007 (21–22 oct). 29.326 pasa a ser el soporte que debe sostener el nuevo mínimo creciente.",
    "h1": "Alcista en corrección. Impulso del lunes de 29.027 a 29.571 con BOS sobre 29.326; de madrugada retrocede hacia ≈ 29.460. Mientras los mínimos de 1H se formen por encima de 29.326 la secuencia sigue alcista; un cierre de 1H bajo 29.326 sería CHoCH bajista y abriría 29.027."
  },
  "fuerza": [
    { "n": "Semis SOX", "v": "+2,82 %", "pct": 100, "dir": "up" },
    { "n": "Tecnología XLK", "v": "+1,69 %", "pct": 60, "dir": "up" },
    { "n": "Industrial XLI", "v": "+1,42 %", "pct": 50, "dir": "up" },
    { "n": "Discrecional XLY", "v": "+1,03 %", "pct": 37, "dir": "up" },
    { "n": "Nasdaq", "v": "+0,82 %", "pct": 29, "dir": "up" },
    { "n": "S&P 500", "v": "+0,70 %", "pct": 25, "dir": "up" },
    { "n": "Russell 2000", "v": "+0,38 %", "pct": 13, "dir": "up" },
    { "n": "Consumo básico XLP", "v": "−0,34 %", "pct": 12, "dir": "dn" },
    { "n": "Comunicaciones XLC", "v": "−1,57 %", "pct": 56, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores del S&P 500 (CappNotes). Chips y tecnología lideraron; comunicaciones (Meta) y consumo básico a la cola. Subida concentrada en grandes tecnológicas (S&P de igual peso +0,35 %).",
  "niveles": [
    { "n": "Resistencia 3 · máx. decreciente 21–22 oct", "v": "29.993–30.007", "tipo": "r" },
    { "n": "Resistencia 2 · 3 toques / SuperTrend (Investing)", "v": "29.800", "tipo": "r" },
    { "n": "Resistencia 1 · máx. de ayer", "v": "29.571", "tipo": "r" },
    { "n": "Cierre de ayer (futuro)", "v": "29.521,75", "tipo": "ref" },
    { "n": "Precio premarket (aprox.)", "v": "≈ 29.463", "tipo": "precio" },
    { "n": "Soporte 1 · máx. del viernes (CHoCH)", "v": "29.326", "tipo": "s" },
    { "n": "Cierre NDX contado (aprox., Yahoo)", "v": "≈ 29.318", "tipo": "ref" },
    { "n": "Pivote XTB (US100)", "v": "29.281", "tipo": "ref" },
    { "n": "Soporte 2 · mín. de ayer", "v": "29.027", "tipo": "s" },
    { "n": "Soporte 3 · 3 toques (Investing)", "v": "29.000", "tipo": "s" },
    { "n": "Soporte 4 · XTB (US100)", "v": "28.797", "tipo": "s" },
    { "n": "Soporte 5 · XTB (US100)", "v": "28.333", "tipo": "s" }
  ],
  "niveles_nota": "Máx./mín. y cierre de ayer: futuro NQZ26 (Investing.com). Niveles XTB del 26 oct sobre US100. Premarket estimado con el −0,2 % de FinancialJuice (07:17 Madrid); TipRanks daba −0,3 % a las 06:39. Máx./mín. nocturnos: —. RSI 14 diario: 48,9 (Investing, 26 oct); RSI 1H/4H: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · retroceso y mínimo creciente", "dir": "up", "texto": "Martes de digestión antes de la Fed y las megacaps: el gap bajista busca 29.400–29.326, se defiende el antiguo máximo del viernes y el precio vuelve a por 29.571.", "gatillo": "Gatillo: rechazo de 29.326–29.400 y cierre de 15 min sobre 29.500" },
    "alternativo": { "titulo": "Alternativo · fallo de ruptura", "dir": "dn", "texto": "La confianza del consumidor (15:00) decepciona o los bonos repuntan antes de la Fed: el CHoCH del lunes falla y el precio vuelve a la base de 29.027–29.000.", "gatillo": "Gatillo: cierre de 1H por debajo de 29.326" },
    "invalidacion": "Invalidación: cierre de 4H bajo 29.326 anula la inclinación alcista (→ 29.027 / 28.797); aceptación sobre 29.571 la refuerza (→ 29.800)."
  },
  "intermercado": [
    { "n": "Brent", "v": "114,64", "c": "≈ −0,7 % · alivio", "dir": "up" },
    { "n": "Bono 10A EE. UU.", "v": "4,99 %", "c": "plano (2A 4,71 %)", "dir": "" },
    { "n": "Oro", "v": "4.038", "c": "+0,8 % lunes", "dir": "" },
    { "n": "USD/JPY", "v": "≈ 157,5", "c": "+0,4 % lunes", "dir": "" },
    { "n": "VIX", "v": "18,39", "c": "−5,5 % lunes", "dir": "up" },
    { "n": "Bitcoin", "v": "≈ 79.800", "c": "−1,2 % lunes", "dir": "dn" }
  ],
  "globales": "Asia en verde con la tecnología (+0,9 % regional): Kospi +3,8 %, Nikkei +1,7 %, ASX −0,3 %; SK Hynix y Samsung +4 %; Taiwán reabre. Europa abre a las 09:00 con futuros ≈ −0,3 %. Brasil: Ibovespa −13,9 % el lunes tras la victoria de Lula. Semana de bancos centrales: Fed (mié.), BCE y Banco de Japón.",
  "agenda": [
    { "h": "13:30", "e": "Pedidos de bienes duraderos (septiembre)", "imp": "medio" },
    { "h": "14:00", "e": "Case-Shiller y precios FHFA de vivienda", "imp": "bajo" },
    { "h": "14:30", "e": "Apertura de Wall Street · empieza la reunión de la Fed (2 días)", "imp": "alto" },
    { "h": "15:00", "e": "Confianza del consumidor Conference Board (prev. 81,9, est. 80,5)", "imp": "alto" },
    { "h": "15:00", "e": "Venta de viviendas nuevas e índice manufacturero de la Fed de Richmond", "imp": "medio" },
    { "h": "18:00", "e": "Subasta de bonos a 5 años", "imp": "medio" },
    { "h": "28 oct 19:00", "e": "Decisión de la Fed (FOMC) y rueda de prensa a las 19:30 · ≈ 90 % mantener 3,75–4 %", "imp": "alto" },
    { "h": "28 oct", "e": "Microsoft y Alphabet, tras el cierre", "imp": "alto" },
    { "h": "29 oct", "e": "PIB T3 (avance) y PCE · Amazon e Intel tras el cierre", "imp": "alto" }
  ],
  "resultados": "Antes de la apertura: Coca-Cola, UPS, Boeing, PayPal, SoFi, Corning, Freeport-McMoRan, S&P Global y HCA. Después del cierre: Visa, Robinhood, Seagate, NXP y Enphase. En Asia: SK Hynix. Miércoles: Microsoft y Alphabet. Jueves: Amazon e Intel.",
  "pesados": [
    { "t": "NVDA", "v": "−0,03 %", "dir": "dn" },
    { "t": "AAPL", "v": "−0,32 %", "dir": "dn" },
    { "t": "MSFT", "v": "—", "dir": "" },
    { "t": "AMZN", "v": "−0,55 %", "dir": "dn" },
    { "t": "META", "v": "−0,91 %", "dir": "dn" },
    { "t": "GOOGL", "v": "—", "dir": "" },
    { "t": "TSLA", "v": "−0,14 %", "dir": "dn" },
    { "t": "AVGO", "v": "—", "dir": "" }
  ],
  "pesados_nota": "Premarket de Investing.com (sin hora confirmada). Lunes: TSLA +5,2 %, NVDA +2,4 %, AVGO +2,3 %, AMZN +0,5 %, GOOGL −1,0 %, AAPL −1,1 %, META −1,9 %. Semis: SOX +2,82 %, Micron +3,0 %, AMD +2,8 %; premarket MU +1,2 %, AMD +0,3 %. Mañana Microsoft y Alphabet tras el cierre.",
  "aviso_horario": "Europa cambió de hora el domingo 25 y EE. UU. lo hará el 1 nov: hasta el viernes 30 oct el desfase con Nueva York es de 5 h → datos a las 13:30, apertura a las 14:30, cierre a las 21:00 y Fed el miércoles 28 a las 19:00 (Madrid).",
  "fuentes": [
    { "n": "CappNotes (cierre del lunes, sectores e intermercado)", "url": "https://cappnotes.substack.com/p/closing-look-monday-october-26-2026" },
    { "n": "TheStreet (lunes)", "url": "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-oct-26-2026" },
    { "n": "HDFC Sky (cierres y megacaps)", "url": "https://hdfcsky.com/news/nasdaq-jumps-0-82percent-as-anthropic-ipo-filing-revives-ai-trade-lifting-us-stocks-october-27-2026" },
    { "n": "TipRanks (futuros del martes)", "url": "https://www.tipranks.com/news/stock-futures-trade-mixed-after-a-strong-monday" },
    { "n": "FinancialJuice (Asia y futuros)", "url": "https://features.financialjuice.com/2026/10/27/asian-stocks-rise-on-tech-nasdaq-futures-slip-asia-market-wrap/" },
    { "n": "Archyde/AP (futuros y Asia)", "url": "https://www.archyde.com/stock-futures-change-little-as-wall-street-weighs-earnings-and-fed-meeting/" },
    { "n": "Investing.com (histórico futuro NQ)", "url": "https://www.investing.com/indices/nq-100-futures-historical-data" },
    { "n": "Investing.com (premarket)", "url": "https://www.investing.com/equities/pre-market" },
    { "n": "Investing.com (niveles técnicos NQ)", "url": "https://es.investing.com/news/stock-market-news/futuros-del-nasdaq-100-comprimen-soporte-clave-niveles-en-vivo-93CH-3890585" },
    { "n": "XTB (niveles US100)", "url": "https://www.xtb.com/cl/analisis-y-noticias/analisis-de-mercado/lo-que-debes-saber-hoy-semana-clave-bancos-centrales-y-resultados-empresariales" },
    { "n": "iTechGuides (FedWatch)", "url": "https://www.itechguides.com/stock-futures-edge-higher-ahead-of-october-2026-fed-decision-what-traders-are-pricing/" }
  ]
};
