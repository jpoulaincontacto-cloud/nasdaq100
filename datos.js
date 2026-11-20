/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Viernes 20 de noviembre de 2026",
  "actualizado": "08:10 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "Apertura cash", "v": "15:30" },
    { "n": "Venc. opciones", "v": "hoy" },
    { "n": "Cierre", "v": "22:00" }
  ],
  "precio": {
    "premarket": "—",
    "cambio": "≈ −0,3 % (CNBC TV18, sesión asiática)",
    "dir": "dn",
    "cierre_ayer": "— (futuro) · Nasdaq 100 cash 26.517,05 (jueves)",
    "gap": "≈ −0,3 % (≈ −80 pts estimados)",
    "gap_mnq": "≈ −160 $ por contrato MNQ (estimado)"
  },
  "sesgo": {
    "dir": "dn",
    "titulo": "Bajista",
    "confianza": 4,
    "texto": "Ayer hubo un giro bajista de libro: el Nasdaq 100 abrió subiendo un 2 % con el debut de Anthropic y cerró cayendo un 2,21 % (26.517), con el S&P 500 en su sexta caída seguida y por debajo de su media de 200 sesiones, y el VIX cerca de 29, máximo desde marzo. Anthropic abrió en 111,50 $ (+34 %) y cerró en 97,17 $ (+17 %); fuera de hora cede ≈ 1,5–3 %. Pesan la Fed (subida de diciembre descontada al 96–100 %; Barr dice que la inflación sigue alta), los precios del Philly Fed y las dudas sobre la rentabilidad de la IA. Asia se desploma: Taiex −6,6 %, Kospi −5,2 %, Nikkei −4,9 %. El futuro NQ cede ≈ 0,3 %. Hoy hay vencimiento mensual de opciones.",
    "condicion": "Bajista mientras el precio no recupere 26.751–27.075. Pérdida de 26.366 (mínimo del 6 nov) → 26.130 y 25.830; recuperar 27.075 neutraliza la caída."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · jueves 19 nov",
    "etiqueta": "Nasdaq −2,25 %",
    "dir": "dn",
    "resumen": "Giro brusco a la baja el día del debut de Anthropic: el Nasdaq 100 llegó a subir un 2 % a primera hora y cerró en mínimos. Nasdaq 100 −2,21 % (26.517,05), Nasdaq −2,25 % (23.879,20), S&P 500 −2,02 % (7.175,83; sexta caída seguida, bajo su media de 200 sesiones), Dow −2,19 % (49.097,06; bajo 50.000 por primera vez desde junio, −3.250 puntos en cuatro días) y Russell 2000 −2,18 %. Los 11 sectores cayeron: lo menos malo, energía (−0,65 %) y utilities (−1,24 %); lo peor, consumo discrecional (−2,79 %), comunicaciones (−2,67 %) y materiales (−2,06 %). Amazon −3,87 %, Alphabet −3,46 %, Nvidia −3,30 % (sexta caída seguida), Broadcom −2,09 %, Microsoft −1,97 %; AMD llegó a caer un 8,5 %, CoreWeave −6,1 %, Nebius −9,4 %. Philly Fed 6,3 (mínimo de seis meses) con precios pagados en 58,2; paro semanal 203.000. Bono a 10 años 5,05 %, Brent 92,27 $, oro 3.674,68 $ (−1,4 %), VIX ≈ 28,3–28,4, bitcoin ≈ 62.000. Futuro NQ: cierre y máx./mín.: —.",
    "indices": [
      { "n": "Nasdaq", "v": "−2,25 %", "dir": "dn" },
      { "n": "S&P 500", "v": "−2,02 %", "dir": "dn" },
      { "n": "Dow", "v": "−2,19 %", "dir": "dn" },
      { "n": "Russell 2000", "v": "−2,18 %", "dir": "dn" }
    ]
  },
  "noticias": [
    { "t": "Anthropic abre en 111,50 $ (+34 %) y cierra en 97,17 $ (+17 %) en la mayor salida a bolsa de la historia; cede fuera de hora", "v": "ANT +17 %", "dir": "up" },
    { "t": "Giro bajista: el Nasdaq 100 pasa de +2 % a −2,2 % y el VIX roza 29, máximo desde marzo", "v": "NDX −2,21 %", "dir": "dn" },
    { "t": "Asia se desploma: Taiex −6,6 %, Kospi −5,2 %, Nikkei −4,9 %; el MSCI Asia-Pacífico suma siete caídas", "v": "Taiex −6,6 %", "dir": "dn" },
    { "t": "Intuit se hunde tras resultados y anuncia la venta de Mailchimp; Ross Stores también cae pese a elevar su guía", "v": "INTU ≈ −9,5 %", "dir": "dn" },
    { "t": "California investiga si China obtuvo de forma indebida chips avanzados o información confidencial de Nvidia", "v": "NVDA −3,30 %", "dir": "dn" },
    { "t": "La subida de la Fed de diciembre, descontada al 96–100 %; Barr: la inflación sigue demasiado alta", "v": "≈ 96 %", "dir": "dn" }
  ],
  "noticias_nota": "Futuro NQ: CNBC TV18 (−0,3 % en la sesión asiática, sin nivel). No he encontrado la cotización exacta ni el cierre del futuro: el gap en puntos es una estimación. Cierres: Strategitz, The Weekend Spread, Stocktitan y NordFX. Asia: NordFX (≈ 07:00 Madrid).",
  "estructura": {
    "h4": "Bajista con aceleración. Ayer el precio marcó una vela envolvente bajista: abrió con gap al alza hacia la zona 27.600–27.700 (VAH del 16 nov), fue rechazado y cerró en mínimos, por debajo de 27.075 y de 26.751. Ahora está a pocos puntos del mínimo de la corrección (26.366, 6 nov). Si lo pierde, la tendencia bajista desde el récord se extiende hacia 26.130 y 25.830. Para neutralizar haría falta recuperar 27.075.",
    "h1": "Bajista: máximos y mínimos decrecientes desde el pico de la apertura de ayer y cierre en mínimos. De madrugada el futuro cede algo más (≈ −0,3 %), sin rebote. Rebotes hacia 26.751–27.075 son zonas de venta. Máx./mín. nocturnos: —."
  },
  "fuerza": [
    { "n": "Anthropic (jue.)", "v": "+17,1 %", "pct": 100, "dir": "up" },
    { "n": "Energía (jue.)", "v": "−0,65 %", "pct": 4, "dir": "dn" },
    { "n": "Nasdaq 100 (jue.)", "v": "−2,21 %", "pct": 13, "dir": "dn" },
    { "n": "Comunicaciones (jue.)", "v": "−2,67 %", "pct": 16, "dir": "dn" },
    { "n": "Consumo discrecional (jue.)", "v": "−2,79 %", "pct": 16, "dir": "dn" },
    { "n": "Nvidia (jue.)", "v": "−3,30 %", "pct": 19, "dir": "dn" },
    { "n": "Amazon (jue.)", "v": "−3,87 %", "pct": 23, "dir": "dn" },
    { "n": "Nikkei (hoy)", "v": "−4,85 %", "pct": 28, "dir": "dn" },
    { "n": "Kospi (hoy)", "v": "−5,23 %", "pct": 31, "dir": "dn" },
    { "n": "Taiex (hoy)", "v": "−6,63 %", "pct": 39, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores e índices del jueves: Strategitz; valores: Stocktitan y The Weekend Spread; Asia, hoy (NordFX, sesión en curso). Los 11 sectores cayeron ayer.",
  "niveles": [
    { "n": "Resistencia 4 · VAH del 16 nov / zona del giro de ayer", "v": "27.600–27.705", "tipo": "r" },
    { "n": "Resistencia 3 · POC del 16 nov", "v": "27.433", "tipo": "r" },
    { "n": "Resistencia 2 · cierre del 17 nov", "v": "≈ 27.075", "tipo": "r" },
    { "n": "Resistencia 1 · mínimo del 9 nov", "v": "26.751", "tipo": "r" },
    { "n": "Cierre Nasdaq 100 cash (jueves)", "v": "26.517,05", "tipo": "precio" },
    { "n": "Soporte 1 · mínimo de la corrección (6 nov)", "v": "≈ 26.366", "tipo": "s" },
    { "n": "Soporte 2 · mínimo del 5 nov (US100, ATFX)", "v": "26.130", "tipo": "s" },
    { "n": "Soporte 3 · US100 (ATFX)", "v": "25.830", "tipo": "s" }
  ],
  "niveles_nota": "No he encontrado niveles del futuro NQ publicados hoy ni su cotización exacta: la referencia de precio es el cierre cash del Nasdaq 100. Niveles de días anteriores (alphainvestment, ATFX, investingLive). La zona del giro de ayer está estimada a partir de la subida de ≈ 2 % de la apertura. RSI: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · continuación bajista hacia el mínimo de noviembre", "dir": "dn", "texto": "Tras la vela envolvente de ayer y el desplome de Asia, el precio prueba el mínimo de la corrección (26.366). Si lo pierde, se abren 26.130 y 25.830. El vencimiento mensual de opciones puede amplificar los movimientos.", "gatillo": "Gatillo: cierre de 15 min bajo 26.366 tras la apertura cash (15:30)" },
    "alternativo": { "titulo": "Alternativo · doble suelo en 26.366", "dir": "up", "texto": "El mínimo del 6 nov aguanta como doble suelo con el VIX cerca de 29 (sobreventa) y el precio rebota hacia 26.751 y 27.075 al cierre de la semana.", "gatillo": "Gatillo: rechazo alcista en 26.366 y cierre de 1H sobre 26.751" },
    "invalidacion": "Invalidación: cierre de 4H sobre 27.075 anula el sesgo bajista (→ 27.433); cierre de 4H bajo 26.130 lo acelera (→ 25.830)."
  },
  "intermercado": [
    { "n": "Brent", "v": "≈ 92,3–92,6", "c": "+0,4 % ayer · WTI ≈ 82,7–82,8", "dir": "up" },
    { "n": "Bono 10A EE. UU.", "v": "≈ 5,04 %", "c": "5,05 % cierre jue. · 2A 4,78 %", "dir": "dn" },
    { "n": "Oro", "v": "≈ 3.558–3.588", "c": "≈ −1,9 % hoy · mínimo de 14 meses", "dir": "dn" },
    { "n": "USD/JPY", "v": "159,2–159,8", "c": "EUR/USD 1,0985 · DXY ≈ 103,8", "dir": "" },
    { "n": "VIX", "v": "≈ 28,4", "c": "+15,8 % (cierre jue.)", "dir": "dn" },
    { "n": "Bitcoin", "v": "≈ 62.000", "c": "mínimo desde julio", "dir": "dn" }
  ],
  "globales": "Asia se desploma por la venta de IA: Taiex −6,63 % (35.878), Kospi −5,23 % (4.869), Nikkei −4,85 % (56.562), Hang Seng −2,19 % (22.341), Shanghai −1,82 % (3.513), ASX −1,58 % (8.593). El MSCI Asia-Pacífico suma siete caídas seguidas y el dólar taiwanés roza mínimos de 10 años. Japón: IPC subyacente 2,2 % (est. 2,3 %); China mantiene tipos por 18.º mes. Europa abre a las 09:00 (hoy, ventas minoristas británicas y Lagarde).",
  "agenda": [
    { "h": "Todo el día", "e": "Vencimiento mensual de opciones (tercer viernes de noviembre)", "imp": "medio" },
    { "h": "Durante el día", "e": "Lagarde (BCE) y confianza del consumidor de la eurozona", "imp": "bajo" },
    { "h": "15:30", "e": "Apertura de Wall Street", "imp": "medio" },
    { "h": "22:00", "e": "Cierre de Wall Street", "imp": "bajo" },
    { "h": "Sesión", "e": "Se cierra la venta de acciones de la salida a bolsa de Anthropic", "imp": "bajo" },
    { "h": "26 nov", "e": "Acción de Gracias: bolsa de EE. UU. cerrada (27 nov, sesión corta)", "imp": "medio" },
    { "h": "8–9 dic", "e": "Próximo FOMC: subida de 25 pb descontada al 96–100 %", "imp": "alto" }
  ],
  "resultados": "Hoy: no he encontrado resultados relevantes del Nasdaq 100. Ayer tras el cierre: Intuit (≈ −9,5 % a −14,6 %, venta de Mailchimp), Ross Stores (≈ −5 % a −9 % pese a elevar su guía) y Gap (≈ +3,6 %).",
  "pesados": [
    { "t": "NVDA", "v": "−3,30 % (jue.)", "dir": "dn" },
    { "t": "AAPL", "v": "—", "dir": "" },
    { "t": "MSFT", "v": "−1,97 % (jue.)", "dir": "dn" },
    { "t": "AMZN", "v": "−3,87 % (jue.)", "dir": "dn" },
    { "t": "META", "v": "—", "dir": "" },
    { "t": "GOOGL", "v": "−3,46 % (jue.)", "dir": "dn" },
    { "t": "TSLA", "v": "—", "dir": "" },
    { "t": "AVGO", "v": "−2,09 % (jue.)", "dir": "dn" }
  ],
  "pesados_nota": "Cierres del jueves según Stocktitan y The Weekend Spread; Apple, Meta y Tesla no aparecen en mis fuentes. No hay premarket publicado a esta hora. Semis: AMD llegó a −8,5 %; CoreWeave −6,1 %, Nebius −9,4 %.",
  "analisis": {
    "swing": {
      "dir": "dn",
      "marco": "Diario / 4H · días a semanas",
      "titulo": "Bajista: vela envolvente en diario",
      "texto": "La vela de ayer (apertura +2 % y cierre −2,2 % el día de Anthropic) es una envolvente bajista que confirma la tendencia diaria desde el récord. El S&P 500 ha perdido su media de 200 sesiones, la Fed subirá en diciembre y el VIX está en 28. El precio está cerca del mínimo de noviembre (26.366): mejor vender rebotes que perseguir la caída en el soporte.",
      "entrada": "26.751–27.075 (rebote fallido) o ruptura confirmada de 26.366",
      "stop": "Cierre diario sobre 27.433",
      "objetivos": ["26.130", "25.830", "25.400"],
      "alternativa": "Alternativa: si 26.366 aguanta como doble suelo y el precio cierra en diario sobre 27.075, el sesgo swing pasa a neutral."
    },
    "intradia": {
      "dir": "dn",
      "marco": "15 min / 1H · solo hoy",
      "titulo": "Bajista: vender rebotes, cuidado con el soporte",
      "texto": "Día de vencimiento de opciones con mucha volatilidad. Plan: vender rebotes hacia 26.751 si son rechazados en 15 min. Si el precio llega a 26.366 sin rebote previo, no vender en el soporte: esperar ruptura y retesteo, o un rechazo alcista para un largo táctico.",
      "entrada": "26.751 (rechazo en 15 min) o retesteo de 26.366 tras ruptura",
      "stop": "26.850 (sobre 26.751) / 26.450 en el retesteo",
      "objetivos": ["26.366", "26.130", "25.830"],
      "alternativa": "Largo táctico solo con rechazo alcista claro en 26.366 (stop 26.280, objetivo 26.751). Si el precio cierra 1H sobre 27.075, se anulan los cortos."
    },
    "nota": "Análisis propio a partir de los niveles de días anteriores (alphainvestment, ATFX, investingLive) y la estructura de price action. Hoy no hay cotización exacta del futuro: los niveles pueden necesitar ajuste en la apertura. No incluye tamaño de posición ni gestión de riesgo personal."
  },
  "aviso_horario": "",
  "fuentes": [
    { "n": "Strategitz (cierres y sectores del jueves)", "url": "https://strategitz.substack.com/p/global-markets-close-november-19" },
    { "n": "The Weekend Spread (cierre, datos y Anthropic)", "url": "https://theweekendspread.substack.com/p/the-close-thursday-november-19-2026" },
    { "n": "Stocktitan (megacaps, Anthropic y fuera de hora)", "url": "https://www.stocktitan.net/articles/stock-market-today-live-november-19-2026" },
    { "n": "NordFX (Asia, divisas y materias primas)", "url": "https://nordfx.com/market-news/market-pulse-november-20-2026" },
    { "n": "CNBC TV18 vía TradingView (futuros y Asia)", "url": "https://www.tradingview.com/news/cnbctv:2df025db2094b:0/" }
  ]
};
