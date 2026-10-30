/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Viernes 30 de octubre de 2026",
  "actualizado": "14:30 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "Apertura cash", "v": "14:30" },
    { "n": "PMI de Chicago", "v": "14:45" },
    { "n": "Cierre", "v": "21:00" }
  ],
  "precio": {
    "premarket": "≈ 28.779,5",
    "cambio": "−782,5 · −2,65 %",
    "dir": "dn",
    "cierre_ayer": "≈ 29.562 (jueves, futuro)",
    "gap": "≈ −782 pts (bajista)",
    "gap_mnq": "≈ −1.565 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "dn",
    "titulo": "Bajista",
    "confianza": 4,
    "texto": "El futuro NQ se hunde ≈ 2,6 % tras Amazon (≈ −6,7 %: fallo en BPA y flujo de caja libre de −42.400 M$ por el gasto en IA) e Intel (≈ −25,7 % por una previsión del T4 muy débil), que arrastran a los chips (AMD −8,3 %, NVDA −3,2 %, SOXX ≈ −6 %). Es el segundo golpe seguido de las grandes tecnológicas tras Alphabet. El precio pierde los 29.000 y el soporte de marco mayor de 28.800. El ECI salió en línea (+0,8 %) y los bonos bajan de rentabilidad, pero el mercado sigue pagando la rotación fuera de la IA. Último día de octubre: ojo a los flujos de fin de mes.",
    "condicion": "Bajista mientras el precio no recupere 29.060–29.129 (SMA 20 de 1H). Cierre de 1H sobre 29.129 → rebote hacia 29.368; pérdida de 28.635 → 28.450."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · jueves 29 oct",
    "etiqueta": "Nasdaq −1,38 %",
    "dir": "dn",
    "resumen": "Caída del Nasdaq por Alphabet (≈ −12 %, la mayor caída de su historia), mientras el resto del mercado rotaba a sectores defensivos: el S&P 500 de igual ponderación subió +1,2 %. Lideraron salud (+2,40 %), inmobiliario (+2,21 %), consumo básico (+1,54 %) y utilities (+1,53 %); a la cola, comunicaciones (−1,87 %) y tecnología (−1,18 %). Cierres: Nasdaq 100 29.402 (−1,4 %), S&P 500 7.720,39, Nasdaq 26.184,72, Dow 52.342,56 y Russell 2000 2.859,22. Macro: PIB del T3 +3,4 % (est. 3,1 %); PCE de septiembre +0,5 % m/m y 3,6 % a/a, subyacente 3,1 % (en línea); el BCE mantuvo tipos y Lagarde anunció que dejará el cargo el 7 de febrero de 2027. Bono a 10 años 4,98 % (−7 pb), Brent 114,88 $, oro −0,5 %, VIX 17,20. Tras el cierre, Amazon −6,2 % e Intel −16,9 % (después amplió la caída). Futuro NQ: liquidación ≈ 29.562; máx./mín.: —.",
    "indices": [
      { "n": "Nasdaq", "v": "−1,38 %", "dir": "dn" },
      { "n": "S&P 500", "v": "−0,30 %", "dir": "dn" },
      { "n": "Dow", "v": "−0,25 %", "dir": "dn" },
      { "n": "Russell 2000", "v": "+1,01 %", "dir": "up" }
    ]
  },
  "noticias": [
    { "t": "Intel se desploma por una previsión del T4 muy por debajo de lo esperado y avisa de quema de caja", "v": "INTC ≈ −25,7 %", "dir": "dn" },
    { "t": "Amazon falla en BPA (1,89 $ vs 1,97 $) y su flujo de caja libre a 12 meses cae a −42.400 M$ por el gasto en IA; AWS +39 %", "v": "AMZN ≈ −6,7 %", "dir": "dn" },
    { "t": "Venta en chips y hardware: AMD, Dell y HP a la baja; Reddit −21,7 % por su previsión de usuarios", "v": "AMD −8,3 %", "dir": "dn" },
    { "t": "Petroleras al alza: ExxonMobil y Chevron baten; Brent ≈ 117 $ por los ataques a petroleros en Ormuz", "v": "XOM +2 %", "dir": "up" },
    { "t": "Coste laboral (ECI) del T3 +0,8 %, en línea; el bono a 10 años baja a ≈ 4,91 %", "v": "+0,8 %", "dir": "" },
    { "t": "CME da ≈ 74 % de probabilidad a una subida de la Fed en diciembre; Binance sufre un hackeo de ≈ 6.300 M$", "v": "BTC ≈ −3 %", "dir": "dn" }
  ],
  "noticias_nota": "% de premarket según Reuters (08:15 ET = 13:15 Madrid) e investingLive; futuro NQ de Yahoo Finance (≈ 13:27 Madrid). Otras fuentes daban el NQ entre −2,1 % y −2,6 % a distintas horas.",
  "estructura": {
    "h4": "Bajista. El rebote de la semana fracasó el miércoles en el máximo decreciente de 29.993–30.007 y el jueves el precio perdió el mínimo creciente de 29.559 (CHoCH bajista confirmado). Esta madrugada el gap lo lleva bajo 29.000 y bajo el soporte de marco mayor de 28.800, por debajo de la SMA 50 de 4H (≈ 29.368, XTB). La antigua zona de soporte 29.400–29.650 pasa a ser resistencia. Solo un cierre de 4H sobre 29.400 neutralizaría la estructura bajista.",
    "h1": "Bajista: máximos y mínimos decrecientes desde 29.650, con el precio bajo la SMA 20 de 1H (≈ 29.129) y bajo la SMA 200. El pivote es 28.880: por debajo, los rebotes son vendibles hacia 28.725 y 28.635. Un cierre de 1H sobre 29.060–29.129 sería la primera señal de alivio (CHoCH alcista de corto plazo)."
  },
  "fuerza": [
    { "n": "Salud (sector)", "v": "+2,40 %", "pct": 9, "dir": "up" },
    { "n": "Inmobiliario (sector)", "v": "+2,21 %", "pct": 9, "dir": "up" },
    { "n": "Hang Seng (Asia)", "v": "+1,5 %", "pct": 6, "dir": "up" },
    { "n": "Russell 2000", "v": "+1,01 %", "pct": 4, "dir": "up" },
    { "n": "Tecnología (sector)", "v": "−1,18 %", "pct": 5, "dir": "dn" },
    { "n": "Comunicaciones (sector)", "v": "−1,87 %", "pct": 7, "dir": "dn" },
    { "n": "Futuro NQ (noche)", "v": "−2,65 %", "pct": 10, "dir": "dn" },
    { "n": "Kospi (Asia)", "v": "≈ −4,5 %", "pct": 18, "dir": "dn" },
    { "n": "Amazon (premarket)", "v": "−6,7 %", "pct": 26, "dir": "dn" },
    { "n": "Intel (premarket)", "v": "−25,7 %", "pct": 100, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores e índices: cierre del jueves (Capp Notes); Asia y futuro, viernes; valores, premarket (investingLive, Reuters). Rotación clara a defensivos y pequeñas compañías; tecnología y comunicaciones, a la cola.",
  "niveles": [
    { "n": "Resistencia 5 · antigua zona de soporte del jueves", "v": "29.400–29.650", "tipo": "r" },
    { "n": "Cierre de ayer (futuro, liquidación)", "v": "≈ 29.562", "tipo": "ref" },
    { "n": "Resistencia 4 · SMA 50 de 4H (XTB, US100)", "v": "29.368", "tipo": "r" },
    { "n": "Resistencia 3 · objetivo de rebote (NQ Wizard)", "v": "29.195", "tipo": "r" },
    { "n": "Resistencia 2 · SMA 20 de 1H (XTB, US100)", "v": "29.129", "tipo": "r" },
    { "n": "Resistencia 1 · gatillo de ruptura (NQ Wizard)", "v": "29.060", "tipo": "r" },
    { "n": "Pivote del día (NQ Wizard)", "v": "28.880", "tipo": "ref" },
    { "n": "Precio premarket (≈ 13:27 Madrid)", "v": "≈ 28.779,5", "tipo": "precio" },
    { "n": "Soporte 1 · objetivo bajista (NQ Wizard)", "v": "28.725", "tipo": "s" },
    { "n": "Soporte 2 · estructura de marco mayor", "v": "28.635", "tipo": "s" },
    { "n": "Soporte 3 · rango bajo XTB / siguiente objetivo", "v": "28.574–28.450", "tipo": "s" }
  ],
  "niveles_nota": "Niveles del futuro NQ: The NQ Market Wizard (plan del 30 oct). SMA 20 de 1H, SMA 50 de 4H y rango 28.574–29.118: XTB (30 oct, 11:28, CFD US100; puede diferir unos puntos del futuro). Premarket: Yahoo Finance (NQ=F, ≈ 13:27 Madrid). Máx./mín. de ayer y nocturnos: —. RSI: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · continuación bajista tras el gap", "dir": "dn", "texto": "Apertura con gap de ≈ −782 puntos. Si el primer rebote se frena bajo 28.880–29.060, venta hacia 28.725 y 28.635, y por debajo 28.450. El PMI de Chicago (14:45) y las intervenciones de Barkin, Daly (17:00) y Musalem (17:30) son los catalizadores; los flujos de fin de mes pueden meter volatilidad al cierre.", "gatillo": "Gatillo: rechazo en 28.880–29.060 y cierre de 15 min bajo 28.725 tras la apertura cash (14:30)" },
    "alternativo": { "titulo": "Alternativo · rebote técnico por sobreventa", "dir": "up", "texto": "Tras tres sesiones de castigo a las grandes tecnológicas, compras de oportunidad y caída de rentabilidades sostienen al índice: el precio aguanta 28.635–28.725, recupera 29.060 y busca 29.195–29.368 dentro de una estructura todavía bajista.", "gatillo": "Gatillo: cierre de 1H sobre 29.129" },
    "invalidacion": "Invalidación: cierre de 4H sobre 29.400 anula el sesgo bajista (→ 29.650); cierre de 4H bajo 28.635 lo acelera (→ 28.450)."
  },
  "intermercado": [
    { "n": "Brent", "v": "≈ 117", "c": "+2,5 % hoy · WTI 104,2", "dir": "up" },
    { "n": "Bono 10A EE. UU.", "v": "≈ 4,91 %", "c": "−8 pb · 2A 4,57 %", "dir": "dn" },
    { "n": "Oro", "v": "3.968", "c": "−1,3 % hoy · bajo 4.000", "dir": "dn" },
    { "n": "USD/JPY", "v": "157,03", "c": "−0,4 % · EUR/USD 1,1194", "dir": "dn" },
    { "n": "VIX", "v": "18,60", "c": "+8,1 % (17,20 jue.)", "dir": "dn" },
    { "n": "Bitcoin", "v": "≈ 77.300", "c": "≈ −3 % · hackeo de Binance", "dir": "dn" }
  ],
  "globales": "Asia mayoritariamente a la baja: Nikkei −2,1 % (63.290,11), Topix −1 %, Kospi ≈ −4,5 % (≈ 5.662; se activó el sidecar), Taiex −2,5 %, Shanghai −1,4 % (3.599,02), CSI 300 −1,4 %; solo el Hang Seng sube +1,5 % (23.294,42). El Banco de Japón mantuvo el 1,25 % y subió su previsión de inflación. Europa, de más a menos: Euro Stoxx 50 −0,9 %, DAX −0,8 %, Ibex −0,6 %, FTSE +0,1 % a media sesión; ASML ≈ −4,5 %, Sanofi ≈ +5,5 %. Inflación por encima de lo esperado en Francia (3,8 %) e Italia (5,6 %). Índice del dólar ≈ 101,6–101,9.",
  "agenda": [
    { "h": "13:30", "e": "Coste laboral (ECI) T3: +0,8 %, en línea (previo +0,9 %)", "imp": "medio" },
    { "h": "14:30", "e": "Apertura de Wall Street · Barkin (Fed) en Sirius XM", "imp": "medio" },
    { "h": "14:45", "e": "PMI de Chicago de octubre (est. ≈ 55–56; previo 58,8)", "imp": "medio" },
    { "h": "17:00", "e": "Daly (Fed de San Francisco)", "imp": "medio" },
    { "h": "17:30", "e": "Musalem (Fed de San Luis)", "imp": "medio" },
    { "h": "21:00", "e": "Cierre de Wall Street y de mes", "imp": "bajo" },
    { "h": "2 nov", "e": "Apple y Palantir: resultados (lunes)", "imp": "alto" },
    { "h": "3 nov", "e": "AMD: resultados (martes)", "imp": "alto" },
    { "h": "6 nov", "e": "Empleo de octubre", "imp": "alto" },
    { "h": "8–9 dic", "e": "Próximo FOMC: CME da ≈ 74 % a una subida de tipos", "imp": "alto" }
  ],
  "resultados": "Antes de la apertura: ExxonMobil y Chevron (baten), AbbVie, Colgate-Palmolive, Regeneron, General Dynamics, LyondellBasell, Dominion Energy y Cboe. Después del cierre: sin resultados relevantes. Ayer tras el cierre: Amazon (≈ −6,7 %), Intel (≈ −25,7 %), Reddit (−21,7 %), Roblox (−19 %), Twilio (−18 %), Pinterest (−12 %); al alza, Rivian (+4 %) y Mondelez (+3 %). La semana que viene: Apple y Palantir (lunes), AMD (martes).",
  "pesados": [
    { "t": "NVDA", "v": "−3,2 %", "dir": "dn" },
    { "t": "AAPL", "v": "−1,1 %", "dir": "dn" },
    { "t": "MSFT", "v": "−0,6 %", "dir": "dn" },
    { "t": "AMZN", "v": "≈ −6,7 %", "dir": "dn" },
    { "t": "META", "v": "−1,8 %", "dir": "dn" },
    { "t": "GOOGL", "v": "≈ −1,0 %", "dir": "dn" },
    { "t": "TSLA", "v": "−2,4 %", "dir": "dn" },
    { "t": "AVGO", "v": "—", "dir": "" }
  ],
  "pesados_nota": "Premarket: NVDA, AMZN y GOOGL según Reuters/investingLive (13:15 Madrid); AAPL, MSFT, META y TSLA según Bloomberg vía ZeroHedge (≈ 12:30 Madrid). AVGO: sin dato publicado. Semis: Intel −25,7 %, AMD −8,3 %, Dell −11,8 %, HP −9,5 %, Sandisk −8 %; SOXX ≈ −6 %.",
  "aviso_horario": "Hoy es el último día con 5 h de desfase con Nueva York (apertura 14:30, cierre 21:00 en Madrid). EE. UU. cambia de hora el domingo 1 nov: desde el lunes 2 nov los datos salen a las 14:30, la apertura es a las 15:30 y el cierre a las 22:00 (Madrid).",
  "fuentes": [
    { "n": "Yahoo Finance (futuros, intermercado y Banco de Japón)", "url": "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-30-dow-sp-500-nasdaq-083236552.html" },
    { "n": "Reuters vía Investing.com (futuros y premarket)", "url": "https://www.investing.com/news/stock-market-news/nasdaq-futures-tumble-as-amazon-intel-results-deepen-ai-spending-woes-4986163" },
    { "n": "Capp Notes (cierre del jueves y sectores)", "url": "https://cappnotes.substack.com/p/closing-look-thursday-october-29" },
    { "n": "Saxo (Nasdaq 100, Asia, BoJ y calendario)", "url": "https://www.home.saxo/en-ch/content/articles/macro/market-quick-take---now-amazon-and-intel-spook-us-tech---30-october-2026-30102026" },
    { "n": "ZeroHedge/Bloomberg (megacaps, Europa, Fed y agenda)", "url": "https://www.zerohedge.com/markets/futures-slide-ai-reckoning-claims-amazon-intel-oil-jumps-hormuz-tanker-hits" },
    { "n": "investingLive (bonos, divisas, Europa y agenda)", "url": "https://investinglive.com/technical-analysis/morning-kickstart-tech-hammered-as-amazon-and-intel-tumble-oil-rises-despite-peace-talk/" },
    { "n": "Armenpress (cierres de Asia)", "url": "https://armenpress.am/en/article/1264357" },
    { "n": "XTB (niveles US100, 30 oct)", "url": "https://www.xtb.com/de/Marktanalysen/Trading-News/nasdaq-100-prognose-analyse-fuer-den-30-10-26-aktuelle-einschaetzung" },
    { "n": "The NQ Market Wizard (niveles del futuro NQ)", "url": "https://thenqmarketwizard.substack.com/p/nq-trade-plan-1030-8cc" },
    { "n": "TheStreet (crudo, oro y Binance)", "url": "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-oct-30-2026" }
  ]
};
