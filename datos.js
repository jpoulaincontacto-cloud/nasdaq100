/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Miércoles 28 de octubre de 2026",
  "actualizado": "08:00 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "Datos EE. UU.", "v": "13:30" },
    { "n": "Apertura cash", "v": "14:30" },
    { "n": "Fed (FOMC)", "v": "Hoy · 19:00" }
  ],
  "precio": {
    "premarket": "≈ 29.949",
    "cambio": "≈ +137 · +0,46 %",
    "dir": "up",
    "cierre_ayer": "≈ 29.803–29.812 (martes)",
    "gap": "≈ +137 pts (alcista leve)",
    "gap_mnq": "≈ +274 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "up",
    "titulo": "Alcista",
    "confianza": 2,
    "texto": "Tras el +1,1 % del futuro el martes (chips IA, SOX +3,6 %), el NQ suma otro 0,46 % de madrugada empujado por SK Hynix (beneficio récord, Kospi +6,8 %). Pero el precio llega a la resistencia 29.993–30.007 con el bono a 10 años en el 5 %, el crudo rebotando y un día cargado: Fed a las 19:00 (rueda de prensa de Warsh a las 19:30) y Microsoft y Alphabet tras el cierre. Confianza baja: día de evento.",
    "condicion": "Alcista mientras aguante el POC de ayer 29.800–29.805. Aceptación sobre 30.007 → 30.118–30.150; cierre de 1H bajo 29.800 → relleno del gap hacia 29.559."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · martes 27 oct",
    "etiqueta": "Nasdaq +1,18 %",
    "dir": "up",
    "resumen": "Segundo día de rebote tecnológico: los chips IA volaron (SOX +3,60 %; AMD +5,5 %, Marvell +4,2 %, Broadcom +4,0 %, Micron +2,8 %) por los 63.000 M$ de financiación de Broadcom ligada a Anthropic tras su solicitud de salida a bolsa. Tesla +4,0 %, Amazon +1,6 %, Alphabet +1,2 %; Meta −1,6 % por su ampliación de capital y Boeing −10,7 % por recortar el ritmo del 737. El Dow quedó plano por Boeing. Brent 113,88 $ (−1,7 %) por el diálogo con Irán, bono a 10 años 4,99 % y VIX 17,53 (−4,7 %). Confianza del consumidor 91,7 y bienes duraderos +1,8 %. Futuro NQ: cierre ≈ 29.803 (+1,09 %), máx. 29.881, mín. 29.288, POC 29.805. Tras el cierre: Seagate −7 %, Teradyne −6,6 %, Robinhood −5 %, Visa −2 %.",
    "indices": [
      { "n": "Nasdaq", "v": "+1,18 %", "dir": "up" },
      { "n": "S&P 500", "v": "+0,60 %", "dir": "up" },
      { "n": "Dow", "v": "+0,03 %", "dir": "up" },
      { "n": "Russell 2000", "v": "+1,16 %", "dir": "up" }
    ]
  },
  "noticias": [
    { "t": "SK Hynix bate récord de beneficio y dispara la memoria en Asia; Micron +3 % fuera de hora", "v": "Kospi +6,8 %", "dir": "up" },
    { "t": "Broadcom: 63.000 M$ de financiación para que Anthropic compre sus chips", "v": "SOX +3,6 %", "dir": "up" },
    { "t": "Meta amplía su emisión de acciones hasta 97.500 M$; Nvidia pone 3.000 M$", "v": "META −1,6 %", "dir": "dn" },
    { "t": "Resultados tras el cierre castigan a chips y brókeres: Seagate, Teradyne, Robinhood, Visa", "v": "STX −7 %", "dir": "dn" },
    { "t": "El crudo rebota pese al diálogo con Irán y el bono a 10 años roza el 5 %", "v": "Brent ≈ 110,9", "dir": "dn" },
    { "t": "Fed hoy: se espera mantener 3,75–4,00 %; el foco, Warsh y el riesgo de nuevas subidas", "v": "futuro +0,46 %", "dir": "up" }
  ],
  "noticias_nota": "% del cierre del martes salvo indicación. Futuro NQ a las 07:13 (Madrid).",
  "estructura": {
    "h4": "Alcista de corto plazo dentro de una estructura mayor aún bajista. Tras el CHoCH alcista del lunes (sobre 29.326), el martes marcó un máximo creciente en 29.881 y de madrugada lo supera (≈ 29.949). El precio llega a la zona del máximo decreciente de 29.993–30.007 (21–22 oct), que coincide con el Fibonacci 38,2 % (29.995,6): un cierre de 4H por encima sería BOS alcista y abriría la SMA 200 (30.118). Mínimo creciente a defender: 29.559 (VAL de ayer).",
    "h1": "Alcista. BOS nocturno sobre el máximo del martes (29.881) tras defender el POC 29.805. Mientras los mínimos de 1H se formen por encima de 29.800 la secuencia de máximos y mínimos crecientes sigue; un cierre de 1H bajo 29.800 sería CHoCH bajista y abriría el relleno del gap hacia 29.559."
  },
  "fuerza": [
    { "n": "Semis SOX", "v": "+3,60 %", "pct": 100, "dir": "up" },
    { "n": "Tecnología XLK", "v": "+1,5 %", "pct": 42, "dir": "up" },
    { "n": "Discrecional XLY", "v": "+1,4 %", "pct": 39, "dir": "up" },
    { "n": "Nasdaq", "v": "+1,18 %", "pct": 33, "dir": "up" },
    { "n": "Russell 2000", "v": "+1,16 %", "pct": 32, "dir": "up" },
    { "n": "Industrial XLI", "v": "+0,9 %", "pct": 25, "dir": "up" },
    { "n": "S&P 500", "v": "+0,60 %", "pct": 17, "dir": "up" },
    { "n": "Consumo básico XLP", "v": "−0,8 %", "pct": 22, "dir": "dn" },
    { "n": "Comunicaciones XLC", "v": "−1,6 %", "pct": 44, "dir": "dn" },
    { "n": "Energía XLE", "v": "−1,9 %", "pct": 53, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores del S&P 500 (HDFC Sky). Chips, tecnología y discrecional (Tesla, Amazon) lideraron; energía (crudo a la baja) y comunicaciones (Meta) a la cola.",
  "niveles": [
    { "n": "Resistencia 3 · invalidación bajista (Investing)", "v": "30.150", "tipo": "r" },
    { "n": "Resistencia 2 · SMA 200 (Investing)", "v": "30.118", "tipo": "r" },
    { "n": "Resistencia 1 · máx. decreciente 21–22 oct · Fibo 38,2 %", "v": "29.993–30.007", "tipo": "r" },
    { "n": "Precio premarket (07:13 Madrid)", "v": "≈ 29.949", "tipo": "precio" },
    { "n": "Techo nube Ichimoku (Investing)", "v": "29.942", "tipo": "ref" },
    { "n": "Soporte 1 · máx. de ayer / VAH", "v": "29.879–29.881", "tipo": "s" },
    { "n": "Soporte 2 · POC de ayer", "v": "29.805", "tipo": "s" },
    { "n": "Cierre de ayer (futuro)", "v": "≈ 29.803", "tipo": "ref" },
    { "n": "Soporte 3 · VAL de ayer", "v": "29.559", "tipo": "s" },
    { "n": "Soporte 4 · mín. de ayer", "v": "29.288", "tipo": "s" },
    { "n": "Soporte 5 · línea de tendencia (Investing)", "v": "29.000", "tipo": "s" },
    { "n": "Soporte 6 · clave US100 (Bolsamanía)", "v": "28.742", "tipo": "s" }
  ],
  "niveles_nota": "Máx./mín., POC y área de valor de ayer: futuro NQ (alphainvestment). Premarket: Investing.com (07:13 Madrid). Niveles Investing del 27 oct y Bolsamanía del 26 oct (CFD US100, puede diferir del futuro). Máx./mín. nocturnos: —. RSI 14: 51,6 (Investing, 27 oct, con el precio en 29.552); RSI 1H/4H: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · gap alcista y rango hasta la Fed", "dir": "up", "texto": "Apertura con gap de ≈ 137 puntos justo bajo 29.993–30.007. En día de Fed lo habitual es rango estrecho hasta las 19:00: compras en retroceso a 29.881–29.805 buscando romper 30.007 hacia 30.118–30.150, con la volatilidad real a partir de las 19:00 y tras el cierre (Microsoft y Alphabet).", "gatillo": "Gatillo: retesteo de 29.805–29.881 defendido y cierre de 15 min sobre 29.950" },
    "alternativo": { "titulo": "Alternativo · rechazo en 30.000 y relleno del gap", "dir": "dn", "texto": "Rechazo en la resistencia 29.993–30.007 con el bono a 10 años en el 5 % y el crudo rebotando, o una Fed/Warsh que abra la puerta a más subidas: el precio rellena el gap y vuelve al área de valor de ayer (29.805–29.559).", "gatillo": "Gatillo: cierre de 1H por debajo de 29.800" },
    "invalidacion": "Invalidación: cierre de 4H bajo 29.559 anula la inclinación alcista (→ 29.288); aceptación de 4H sobre 30.007 la refuerza con un BOS alcista (→ 30.118 / 30.150)."
  },
  "intermercado": [
    { "n": "Brent", "v": "110,91", "c": "+1,3 % hoy · rebote", "dir": "dn" },
    { "n": "Bono 10A EE. UU.", "v": "5,01 %", "c": "roza el 5 %", "dir": "dn" },
    { "n": "Oro", "v": "4.054,6", "c": "−0,5 % hoy", "dir": "" },
    { "n": "USD/JPY", "v": "157,85", "c": "plano (157,91)", "dir": "" },
    { "n": "VIX", "v": "17,53", "c": "−4,7 % martes", "dir": "up" },
    { "n": "Bitcoin", "v": "≈ 80.766", "c": "+1,1 %", "dir": "up" }
  ],
  "globales": "Asia al alza con la memoria: Kospi +6,8 % (6.023,7; SK Hynix +11,4 %, Samsung +9,1 %), Taiex +2 %, Nikkei +1,1 % (63.954), Shanghai +0,5 %, Hang Seng +0,2 %, ASX +0,3 %; Sensex −0,8 %. Nueva Zelanda mantuvo tipos (2,75 %). Europa abre a las 09:00 en positivo: CAC 40 7.885,8 (+0,7 %); hoy, presupuesto británico. El jueves, BCE y Banco de Japón.",
  "agenda": [
    { "h": "12:00", "e": "Solicitudes de hipotecas MBA", "imp": "bajo" },
    { "h": "13:30", "e": "Balanza comercial de bienes (avance, sept.) e inventarios mayoristas", "imp": "medio" },
    { "h": "14:30", "e": "Apertura de Wall Street", "imp": "medio" },
    { "h": "15:30", "e": "Inventarios semanales de crudo (EIA)", "imp": "medio" },
    { "h": "19:00", "e": "Decisión de la Fed (FOMC) · se espera mantener 3,75–4,00 % (subida < 10 %)", "imp": "alto" },
    { "h": "19:30", "e": "Rueda de prensa del presidente de la Fed, Kevin Warsh", "imp": "alto" },
    { "h": "21:30", "e": "Alphabet: llamada de resultados (publica tras el cierre)", "imp": "alto" },
    { "h": "22:30", "e": "Microsoft: llamada de resultados (publica tras el cierre)", "imp": "alto" },
    { "h": "29 oct 13:30", "e": "PIB T3 (avance), PCE de septiembre y paro semanal · BCE y Banco de Japón · Amazon tras el cierre", "imp": "alto" },
    { "h": "30 oct 13:30", "e": "Índice de costes laborales T3 · PMI de Chicago (14:45)", "imp": "medio" }
  ],
  "resultados": "Antes de la apertura: ADP, Boston Scientific, GE Vernova, GE HealthCare, Amphenol, Vertiv, TE Connectivity, Otis, Phillips 66, Etsy, Biogen, Garmin, UBS, Stellantis y GSK. Después del cierre: Microsoft y Alphabet (consenso BPA 4,71 $ y 2,94 $), KLA, ServiceNow, T-Mobile, Fortinet, eBay, Ford, Chipotle, Carvana y Equinix. Jueves: Amazon (tras el cierre) y Samsung.",
  "pesados": [
    { "t": "NVDA", "v": "—", "dir": "" },
    { "t": "AAPL", "v": "—", "dir": "" },
    { "t": "MSFT", "v": "—", "dir": "" },
    { "t": "AMZN", "v": "—", "dir": "" },
    { "t": "META", "v": "—", "dir": "" },
    { "t": "GOOGL", "v": "—", "dir": "" },
    { "t": "TSLA", "v": "—", "dir": "" },
    { "t": "AVGO", "v": "—", "dir": "" }
  ],
  "pesados_nota": "Sin premarket fiable publicado a esta hora. Martes: AVGO +4,0 %, TSLA +4,0 %, AMZN +1,6 %, GOOGL +1,2 % (320,58 $), AAPL +0,9 %, NVDA +0,9 % (217,94 $), MSFT −0,2 % (531,33 $), META −1,6 %. Semis: SOX +3,60 %, AMD +5,5 %, ON +4,3 %, Marvell +4,2 %, Micron +2,8 %; fuera de hora Micron +3 %, ADR de SK Hynix +4 %, Seagate −7 %, Teradyne −6,6 %. Hoy Microsoft y Alphabet tras el cierre; KLA también.",
  "aviso_horario": "Europa cambió de hora el domingo 25 y EE. UU. lo hará el 1 nov: hasta el viernes 30 oct el desfase con Nueva York es de 5 h → datos a las 13:30, apertura a las 14:30, cierre a las 21:00 y Fed hoy a las 19:00 (Madrid). Desde el lunes 2 nov vuelve a 6 h.",
  "fuentes": [
    { "n": "HDFC Sky (cierre del martes, sectores e intermercado)", "url": "https://hdfcsky.com/news/nasdaq-jumps-1-2percent-as-chip-stocks-rally-oil-slides-and-fed-meeting-begins-october-28-2026" },
    { "n": "TheStreet (martes)", "url": "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-oct-27-2026" },
    { "n": "alphainvestment (niveles del futuro NQ, 27 oct)", "url": "https://github.com/alphainvestment/Nasdaq/releases/tag/nasdaq-2026-10-27" },
    { "n": "Investing.com (futuros del miércoles)", "url": "https://es.investing.com/news/stock-market-news/los-futuros-de-las-acciones-de-eeuu-se-estabilizan-antes-de-la-fed-y-resultados-tecnologicos-3893507" },
    { "n": "TipRanks (futuros y Fed)", "url": "https://www.tipranks.com/news/futures-trade-mixed-ahead-of-big-tech-earnings-and-the-feds-rate-decision" },
    { "n": "IC Markets (oro, crudo y bonos)", "url": "https://www.icmarkets.com.au/blog/wednesday-28th-oct-2026-u-s-stock-futures-mixed-ahead-of-fed-decision-and-big-tech-earnings/" },
    { "n": "AP vía KSAT (Asia, crudo y divisas)", "url": "https://www.ksat.com/business/2026/10/28/shares-in-asia-rise-after-a-rally-on-wall-street-and-oil-prices-gain-more-than-1/" },
    { "n": "Investing.com (movimientos tras el cierre)", "url": "https://www.investing.com/news/stock-market-news/afterhours-movers-stx-enph-hood-v-csgp-boom-cake-ppg-oi-ter-432SI-4976906" },
    { "n": "Investrade (agenda y resultados de la semana)", "url": "https://investrade.com/weekly-event-calendar-10-26-2026-10-30-2026/" },
    { "n": "Investing.com (niveles técnicos NQ)", "url": "https://es.investing.com/news/stock-market-news/futuros-del-nasdaq-100-comprimen-soporte-clave-niveles-en-vivo-93CH-3890585" },
    { "n": "Bolsamanía (soporte 28.742)", "url": "https://www.bolsamania.com/capitalbolsa/noticias/analisis-tecnico/el-nasdaq-se-juega-el-soporte-de-los-28742-puntos-antes-de-la-fed--23922238.html" },
    { "n": "FXEmpire (apertura europea)", "url": "https://www.fxempire.es/forecasts/article/analisis-fundamental-de-las-bolsas-de-europa-y-estados-unidos-para-28-de-octubre-de-2026-304838" },
    { "n": "Gotrade (megacaps y consenso MSFT/GOOGL)", "url": "https://www.heygotrade.com/en/news/fed-microsoft-and-alphabet-tonight/" },
    { "n": "Why It Moved (bitcoin)", "url": "https://whyitmoved.substack.com/p/daily-market-report-wednesday-october-880" }
  ]
};
