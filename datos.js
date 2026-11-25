/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Miércoles 25 de noviembre de 2026",
  "actualizado": "08:10 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "PCE, PIB y paro", "v": "14:30" },
    { "n": "Apertura cash", "v": "15:30" },
    { "n": "Cierre", "v": "22:00" }
  ],
  "precio": {
    "premarket": "≈ 25.897,5",
    "cambio": "≈ −378,25 · −1,44 %",
    "dir": "dn",
    "cierre_ayer": "≈ 26.275,75 (martes, futuro)",
    "gap": "≈ −378 pts (bajista)",
    "gap_mnq": "≈ −757 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "dn",
    "titulo": "Bajista: vuelve la venta de la IA",
    "confianza": 3,
    "texto": "El rebote por la vuelta de Huang se ha deshecho en un día: ayer el Nasdaq 100 cayó un 1,99 % (26.214) con Nvidia −5,9 %, SOXX −8,3 % y Micron −11 %, mientras el Dow superaba por primera vez los 50.000 (rotación a salud y consumo básico). Anthropic cerró por debajo de su precio de salida (81,90 $). Esta madrugada el futuro NQ cae ≈ 1,4 % (≈ 25.898) y Asia se hunde en tecnología: Taiex −6 %, Kospi −5,6 %, Nikkei −3,6 % (SoftBank −15 %, Tokyo Electron y Advantest −13 %). Además, según Bloomberg, EE. UU. prepara nuevos aranceles a China, la UE y otra docena de economías. Hoy, a las 14:30, PCE, PIB, pedidos de bienes duraderos y paro, todo junto, en víspera de Acción de Gracias.",
    "condicion": "Bajista mientras el precio no recupere 26.000–26.275. Pérdida de 25.611 → 25.126 y 24.977; recuperar 26.366 neutraliza la caída."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · martes 24 nov",
    "etiqueta": "Nasdaq −1,48 %",
    "dir": "dn",
    "resumen": "La IA devolvió buena parte del rally del lunes mientras el Dow cerraba por primera vez por encima de 50.000. Nasdaq 100 −1,99 % (26.214,17), Nasdaq −1,48 % (23.733,54), S&P 500 −0,50 % (7.201,09; octava caída en nueve sesiones), Dow +0,85 % (50.018,70) y Russell 2000 +0,57 % (2.684,94). Lideraron salud (+2,95 %; Sanofi compra Insmed por 41.000 M$), consumo básico (+1,66 %) e inmobiliario (+1,31 %); a la cola, tecnología (−3,26 %) e industriales (−0,53 %). Nvidia −5,86 %, Broadcom −3,98 %, Micron −11,01 %, SOXX −8,27 %; Anthropic −6,54 % (81,90 $, bajo su precio de salida de 83 $). Confianza del consumidor 103,3 (est. 92,2). Bono a 10 años 4,90 %, Brent 91,40 $ (+2,3 %), oro −2,6 % (3.555 $), índice del dólar 103,83, VIX 26,36, bitcoin ≈ 59.900. Fuera de hora: HP ≈ +9 %, Dell ≈ +4 % (ingresos récord de 54.900 M$), Workday y Autodesk ≈ −4 %. Futuro NQ: cierre ≈ 26.275,75; máx./mín.: —.",
    "indices": [
      { "n": "Nasdaq", "v": "−1,48 %", "dir": "dn" },
      { "n": "S&P 500", "v": "−0,50 %", "dir": "dn" },
      { "n": "Dow", "v": "+0,85 %", "dir": "up" },
      { "n": "Russell 2000", "v": "+0,57 %", "dir": "up" }
    ]
  },
  "noticias": [
    { "t": "Se deshace el rebote de Huang: Nvidia −5,9 %, Micron −11 % y SOXX −8,3 % por las dudas sobre el gasto en centros de datos (HPE)", "v": "SOXX −8,27 %", "dir": "dn" },
    { "t": "Asia se hunde en tecnología: SoftBank −15 %, Tokyo Electron y Advantest −13 %, TSMC −7 %, Samsung y SK Hynix −8 %", "v": "Taiex −6 %", "dir": "dn" },
    { "t": "Bloomberg: EE. UU. prepara aranceles más altos a China, la UE y otra docena de economías, sustituyendo a los que anuló el Supremo", "v": "aranceles", "dir": "dn" },
    { "t": "Anthropic cierra por debajo de su precio de salida (81,90 $ frente a 83 $)", "v": "ANT −6,54 %", "dir": "dn" },
    { "t": "El Tesoro (FinCEN) investiga un acceso no autorizado a sus sistemas", "v": "ciber", "dir": "dn" },
    { "t": "Hoy a las 14:30: PCE, PIB del T3 (2.ª estimación), bienes duraderos y paro; mañana, bolsa cerrada por Acción de Gracias", "v": "14:30", "dir": "" }
  ],
  "noticias_nota": "Futuro NQ: cotización de Yahoo Finance (25.897,5, −378,25, −1,44 %); el texto del mismo artículo (07:06 Madrid) daba −1,20 % y Oninvest −1,4 %. Cierres: Capp Notes. Asia: AP y Oninvest (cifras del Kospi y del Nikkei distintas según la hora).",
  "estructura": {
    "h4": "Bajista. El rebote desde 24.977 se frenó el lunes en ≈ 26.750 (justo bajo el mínimo del 9 nov, 26.751) y ayer el precio perdió 26.366–26.399; esta madrugada cae también por debajo de 26.000. Es un máximo decreciente: la tendencia desde el récord sigue siendo bajista. Soportes: 25.611 (mínimo de reacción del 23 nov), 25.126 (cierre del 20 nov) y 24.977 (mínimo del ciclo). Perder 24.977 abriría una nueva pata bajista.",
    "h1": "Bajista: gap nocturno bajo 26.000 con máximos y mínimos decrecientes desde el pico del lunes. Rebotes hacia 26.000–26.253 son zonas de venta. Máx./mín. nocturnos: —. Los datos de las 14:30 pueden provocar un movimiento brusco en cualquier dirección."
  },
  "fuerza": [
    { "n": "HP (fuera de hora)", "v": "≈ +9 %", "pct": 59, "dir": "up" },
    { "n": "Salud (mar.)", "v": "+2,95 %", "pct": 19, "dir": "up" },
    { "n": "Hang Seng (hoy)", "v": "+1,0 %", "pct": 7, "dir": "up" },
    { "n": "Dow (mar.)", "v": "+0,85 %", "pct": 6, "dir": "up" },
    { "n": "Futuro NQ (noche)", "v": "≈ −1,44 %", "pct": 9, "dir": "dn" },
    { "n": "Nasdaq 100 (mar.)", "v": "−1,99 %", "pct": 13, "dir": "dn" },
    { "n": "Nikkei (hoy)", "v": "−3,6 %", "pct": 24, "dir": "dn" },
    { "n": "Kospi (hoy)", "v": "−5,6 %", "pct": 37, "dir": "dn" },
    { "n": "SOXX (mar.)", "v": "−8,27 %", "pct": 54, "dir": "dn" },
    { "n": "SoftBank (hoy)", "v": "−15 %", "pct": 100, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores, índices y valores del martes: Capp Notes; Asia, hoy (AP y Oninvest); futuro NQ: Yahoo Finance. Rotación clara: salud y consumo básico arriba; tecnología y semis, a la cola.",
  "niveles": [
    { "n": "Resistencia 4 · máximo del rebote (23 nov) / mín. del 9 nov", "v": "26.750", "tipo": "r" },
    { "n": "Resistencia 3 · máximo de 2025 / mínimo de noviembre", "v": "26.366–26.399", "tipo": "r" },
    { "n": "Cierre de ayer (futuro)", "v": "≈ 26.275,75", "tipo": "ref" },
    { "n": "Resistencia 2 · referencia de gráfico (investingLive)", "v": "26.253", "tipo": "r" },
    { "n": "Resistencia 1 · número redondo", "v": "26.000", "tipo": "r" },
    { "n": "Precio premarket (≈ 07:00 Madrid)", "v": "≈ 25.897,5", "tipo": "precio" },
    { "n": "Soporte 1 · área de valor nocturna del 23 nov", "v": "25.747–25.850", "tipo": "s" },
    { "n": "Soporte 2 · mínimo de reacción del 23 nov", "v": "25.611", "tipo": "s" },
    { "n": "Soporte 3 · cierre del 20 nov (futuro)", "v": "≈ 25.126", "tipo": "s" },
    { "n": "Soporte 4 · mínimo del ciclo (20 nov)", "v": "24.977", "tipo": "s" }
  ],
  "niveles_nota": "No he encontrado niveles del futuro NQ publicados hoy: se usan los de investingLive (23 nov) y los máximos y mínimos de los días anteriores. Cierre del martes calculado a partir de la cotización y la variación de Yahoo. RSI: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · continuación bajista hacia 25.611", "dir": "dn", "texto": "Con Asia hundiendo a los chips y amenaza de aranceles, el precio sigue cayendo: rebotes hacia 26.000 se venden y el precio busca 25.747–25.611. Un PCE caliente a las 14:30 reforzaría la subida de la Fed y la venta.", "gatillo": "Gatillo: rechazo en 26.000 y cierre de 15 min bajo 25.747 tras el dato o la apertura cash (15:30)" },
    "alternativo": { "titulo": "Alternativo · datos suaves y rebote de víspera de festivo", "dir": "up", "texto": "Un PCE en línea o por debajo y el cierre de posiciones antes de Acción de Gracias provocan un rebote: el precio recupera 26.000 y busca 26.253–26.366. HP y Dell ayudan al hardware.", "gatillo": "Gatillo: cierre de 1H sobre 26.000" },
    "invalidacion": "Invalidación: cierre de 4H sobre 26.399 anula el sesgo bajista (→ 26.750); cierre de 4H bajo 25.611 lo acelera (→ 25.126 y 24.977)."
  },
  "intermercado": [
    { "n": "Brent", "v": "≈ 87,4–87,7", "c": "−1,3 % a −1,6 % hoy · WTI ≈ 80,6–80,9", "dir": "dn" },
    { "n": "Bono 10A EE. UU.", "v": "≈ 4,90 %", "c": "plano · 2A 4,63 %", "dir": "" },
    { "n": "Oro", "v": "≈ 3.520", "c": "−1,2 % hoy · −2,6 % ayer", "dir": "dn" },
    { "n": "USD/JPY", "v": "159,29", "c": "plano · EUR/USD 1,0946", "dir": "" },
    { "n": "VIX", "v": "26,36", "c": "−1,0 % (cierre mar.)", "dir": "up" },
    { "n": "Bitcoin", "v": "≈ 59.900", "c": "−2,2 % (mar.)", "dir": "dn" }
  ],
  "globales": "Asia se hunde en tecnología: Taiex −6 %, Kospi −5,6 % (4.725,84), Nikkei −3,6 % (56.502,97), Shanghai −0,9 % (3.515,05), ASX −0,5 % (8.683,90); solo sube el Hang Seng (+1 %, 22.449,86). SoftBank −15 %, Tokyo Electron y Advantest ≈ −13 %, TSMC −7 %, Samsung y SK Hynix más de −8 %. Europa abre a las 09:00. Índice del dólar 103,83.",
  "agenda": [
    { "h": "Antes apertura", "e": "Deere, Li Auto y Kanzhun: resultados", "imp": "bajo" },
    { "h": "14:30", "e": "PCE de octubre, renta y gasto personal · PIB del T3 (2.ª estimación) · bienes duraderos · paro semanal", "imp": "alto" },
    { "h": "15:30", "e": "Apertura de Wall Street", "imp": "medio" },
    { "h": "22:00", "e": "Cierre de Wall Street", "imp": "bajo" },
    { "h": "26 nov", "e": "Acción de Gracias: bolsa de EE. UU. cerrada", "imp": "medio" },
    { "h": "27 nov", "e": "Sesión corta: cierre a las 19:00 (Madrid)", "imp": "medio" },
    { "h": "Mediados dic.", "e": "Rollover de MNQZ26 a MNQH27", "imp": "medio" },
    { "h": "8–9 dic", "e": "Próximo FOMC: el mercado sigue esperando una subida", "imp": "alto" }
  ],
  "resultados": "Hoy: Deere, Li Auto y Kanzhun (antes de la apertura). Ayer tras el cierre: HP (≈ +9 %), Dell (≈ +4 %, ingresos récord y guía al alza), Workday (≈ −4 %, guía floja de suscripciones) y Autodesk (≈ −4 % pese a batir).",
  "pesados": [
    { "t": "NVDA", "v": "−5,86 % (mar.)", "dir": "dn" },
    { "t": "AAPL", "v": "—", "dir": "" },
    { "t": "MSFT", "v": "—", "dir": "" },
    { "t": "AMZN", "v": "—", "dir": "" },
    { "t": "META", "v": "—", "dir": "" },
    { "t": "GOOGL", "v": "—", "dir": "" },
    { "t": "TSLA", "v": "—", "dir": "" },
    { "t": "AVGO", "v": "−3,98 % (mar.)", "dir": "dn" }
  ],
  "pesados_nota": "Cierres del martes según Capp Notes; el resto de las 7 Magníficas no aparece en mi fuente. No hay premarket publicado a esta hora. Semis el martes: SOXX −8,27 %, Micron −11,01 %.",
  "analisis": {
    "swing": {
      "dir": "dn",
      "marco": "Diario / 4H · días a semanas",
      "titulo": "Bajista: el rebote ha marcado un máximo decreciente",
      "texto": "El rebote desde 24.977 se agotó en ≈ 26.750, justo bajo el soporte perdido de 26.751, y ya se ha deshecho más de la mitad. La tendencia diaria sigue bajista y vuelve la presión sobre los chips, con amenaza de aranceles y la Fed camino de subir. Semana corta (jueves cerrado y viernes medio día): tamaño reducido. Rebotes hacia 26.253–26.399 son zonas de venta.",
      "entrada": "26.253–26.399 (rechazo en 4H)",
      "stop": "Cierre diario sobre 26.750",
      "objetivos": ["25.611", "24.977", "24.500"],
      "alternativa": "Alternativa: si 24.977 aguanta como doble suelo y el precio recupera 26.750 en cierre diario, el sesgo swing pasa a neutral-alcista."
    },
    "intradia": {
      "dir": "dn",
      "marco": "15 min / 1H · solo hoy",
      "titulo": "Bajista: vender rebotes, cuidado con las 14:30",
      "texto": "Gap bajista de ≈ 380 puntos con datos muy importantes a las 14:30. Plan: no operar en los minutos del dato. Después, vender rebotes hacia 26.000 si son rechazados en 15 min. Si el precio llega a 25.611 sin rebote previo, no vender en el soporte.",
      "entrada": "26.000 (rechazo en 15 min tras los datos)",
      "stop": "26.080 (sobre 26.000)",
      "objetivos": ["25.850", "25.747", "25.611"],
      "alternativa": "Si el precio cierra 1H sobre 26.000, se anulan los cortos: posible rebote hacia 26.253–26.275 (cierre de ayer)."
    },
    "nota": "Análisis propio a partir de los niveles de días anteriores (investingLive) y la estructura de price action. Volatilidad alta (VIX 26) y datos clave a las 14:30: conviene reducir tamaño. No incluye tamaño de posición ni gestión de riesgo personal."
  },
  "aviso_horario": "Semana de Acción de Gracias: mañana, jueves 26, la bolsa de EE. UU. está cerrada y el viernes 27 cierra antes, a las 19:00 (Madrid).",
  "fuentes": [
    { "n": "Capp Notes (cierre del martes)", "url": "https://cappnotes.substack.com/p/closing-look-tuesday-november-24" },
    { "n": "Yahoo Finance (futuros, agenda y materias primas)", "url": "https://finance.yahoo.com/markets/stocks/articles/stock-market-p-500-open-060617625.html" },
    { "n": "AP vía WSLS (Asia, crudo y divisas)", "url": "https://www.wsls.com/business/2026/11/25/asian-stocks-mostly-decline-as-ai-shares-fall-following-a-retreat-on-wall-street/" },
    { "n": "Oninvest (Asia, aranceles y Tesoro)", "url": "https://en.oninvest.com/article/top-stories-this-morning-a-sell-off-in-asia-a-hack-of-the-u-s-treasury-and-huang-s-apology" },
    { "n": "investingLive (niveles del futuro NQ, 23 nov)", "url": "https://investinglive.com/stocks/nasdaq-analysis-today-as-we-wake-up-to-the-green/" }
  ]
};
