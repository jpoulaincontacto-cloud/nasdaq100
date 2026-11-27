/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Viernes 27 de noviembre de 2026",
  "actualizado": "08:10 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (último día de negociación: 18 dic; rollover a MNQH27 unos días antes)",
  "horas": [
    { "n": "Balanza comercial", "v": "14:30" },
    { "n": "Apertura cash", "v": "15:30" },
    { "n": "Cierre (corto)", "v": "19:00" }
  ],
  "precio": {
    "premarket": "≈ 26.571",
    "cambio": "≈ +470 · +1,8 % (sobre el cierre festivo del jueves)",
    "dir": "up",
    "cierre_ayer": "≈ 26.101 (jueves, sesión festiva) · 26.013 (miércoles)",
    "gap": "≈ +470 pts (≈ +558 sobre el miércoles, alcista)",
    "gap_mnq": "≈ +940 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "up",
    "titulo": "Alcista de corto plazo (sesión corta)",
    "confianza": 2,
    "texto": "El miércoles el Nasdaq 100 llegó a caer ≈ 4,6 % por la mañana (futuro en 25.027,5, cerca del mínimo del ciclo) y cerró solo −0,64 % (26.047): una fuerte reversión al alza con compras en caída. En la sesión festiva y esta madrugada el futuro NQ sube ≈ 1,8 % (≈ 26.571) y Asia acompaña (Kospi +4,2 %, Shanghai +3,2 %, Nikkei +2 %, Hang Seng +2,1 %). Pero ojo: hoy la sesión es corta (cierre a las 19:00 Madrid) y con poco volumen, el PCE subyacente salió por encima (3,3 %), la subida de la Fed de diciembre está casi descontada y EE. UU. propone nuevos aranceles (Sección 301) a 14 socios. El precio está justo en la zona de resistencia que marca la estructura diaria (26.351).",
    "condicion": "Alcista mientras aguante 26.146–26.170 (pivote alcista). Aceptación sobre 26.351 rompe la secuencia de máximos decrecientes → 26.451–26.514 y 26.569–26.603; pérdida de 26.146 → 25.905–26.011."
  },
  "ayer": {
    "titulo": "Qué pasó el miércoles · 25 nov (jueves cerrado)",
    "etiqueta": "Nasdaq −0,62 %",
    "dir": "dn",
    "resumen": "Gran reversión al alza en víspera de Acción de Gracias: el Nasdaq llegó a caer un 4,6 % y el S&P 500 un 3,2 %, pero cerraron casi planos. Nasdaq 100 −0,64 % (26.046,90), Nasdaq −0,62 % (23.585,80), S&P 500 −0,25 % (7.182,78), Dow +0,33 % (50.182,95; borró una caída de más de 1.100 puntos) y Russell 2000 +0,71 % (2.704,06). Amplitud positiva: 370 valores al alza y 128 a la baja. Lideraron materiales (+2,07 %), inmobiliario (+0,92 %) y comunicaciones (+0,89 %); a la cola, tecnología (−0,83 %), salud (−0,56 %) y consumo discrecional (−0,20 %). Nvidia −3,91 % (S&P Global puso su rating AA en vigilancia negativa), Amazon −3,12 %, Alphabet −2,13 %, Meta +3,40 %; Anthropic +1,07 % (82,79 $). Datos: PCE 3,8 % a/a (en línea), subyacente 3,3 % (est. 3,2 %); PIB del T3 revisado al 4,3 %. Bono a 10 años 4,85 % (−6 pb), Brent 94,61 $ (+3,5 %; ataque hutí a la refinería saudí de Ras Tanura), oro 3.534,70 $, VIX 28,29 (llegó a superar 34), índice del dólar 103,71, bitcoin ≈ 60.100. Futuro NQ: cierre 26.013 (−1 %), máx. 26.350,75, mín. 25.027,5.",
    "indices": [
      { "n": "Nasdaq", "v": "−0,62 %", "dir": "dn" },
      { "n": "S&P 500", "v": "−0,25 %", "dir": "dn" },
      { "n": "Dow", "v": "+0,33 %", "dir": "up" },
      { "n": "Russell 2000", "v": "+0,71 %", "dir": "up" }
    ]
  },
  "noticias": [
    { "t": "Reversión al alza el miércoles: el Nasdaq llegó a caer un 4,6 % y cerró −0,6 %; el futuro NQ marcó 25.027,5, cerca del mínimo del ciclo", "v": "NDX −0,64 %", "dir": "up" },
    { "t": "Los futuros suben en la sesión festiva y Asia acompaña: Kospi +4,2 %, Shanghai +3,2 %, Hang Seng +2,1 %, Nikkei +2 %", "v": "NQ ≈ +1,8 %", "dir": "up" },
    { "t": "PCE subyacente de octubre 3,3 % (est. 3,2 %) y PIB del T3 revisado al 4,3 %: la subida de la Fed de diciembre, casi segura", "v": "3,3 %", "dir": "dn" },
    { "t": "EE. UU. propone nuevos aranceles (Sección 301) a 14 socios, entre ellos China, la UE, Japón e India", "v": "aranceles", "dir": "dn" },
    { "t": "S&P Global pone en vigilancia negativa el rating AA de Nvidia", "v": "NVDA −3,91 %", "dir": "dn" },
    { "t": "Ataque hutí a la refinería saudí de Ras Tanura: el crudo sube con fuerza", "v": "Brent ≈ 97 $", "dir": "dn" }
  ],
  "noticias_nota": "Futuro NQ: Investing.com (26.571, +1,8 %, a las 03:18 Madrid); la barra de cotización de la misma página daba 26.731 (+2,6 %) más tarde. Cierre y rango del miércoles: Proptraderz. El cierre de la sesión festiva del jueves (≈ 26.101) está calculado a partir del %. Cierres de índices: Capp Notes. Asia: AP.",
  "estructura": {
    "h4": "Bajista con señal de suelo. La tendencia desde el récord de octubre (31.616,5) sigue marcando máximos decrecientes en diario (27.838 → 27.137 → 27.036 → 26.350,75), pero el miércoles el precio barrió por debajo de 25.510 y se dio la vuelta desde 25.027,5 sin perder el mínimo del ciclo (24.976,5): es un posible doble suelo. Para romper la secuencia bajista hace falta un cierre sobre 26.351; para hablar de giro alcista de fondo, recuperar 27.137.",
    "h1": "Alcista de corto plazo: máximos y mínimos crecientes desde 25.027,5 y gap nocturno sobre el pivote alcista (26.146–26.170). El precio está en la zona de peligro 26.350–26.400 y por encima de ella hay resistencias en 26.436–26.451, 26.500–26.514 y 26.569–26.603. Un retroceso que respete 26.146–26.170 sería de compra; perderlo devolvería el precio a la zona 25.905–26.011."
  },
  "fuerza": [
    { "n": "Kospi (hoy)", "v": "+4,2 %", "pct": 100, "dir": "up" },
    { "n": "Meta (miér.)", "v": "+3,40 %", "pct": 81, "dir": "up" },
    { "n": "Shanghai (hoy)", "v": "+3,2 %", "pct": 76, "dir": "up" },
    { "n": "Materiales (miér.)", "v": "+2,07 %", "pct": 49, "dir": "up" },
    { "n": "Nikkei (hoy)", "v": "+2,0 %", "pct": 48, "dir": "up" },
    { "n": "Futuro NQ (noche)", "v": "≈ +1,8 %", "pct": 43, "dir": "up" },
    { "n": "Nasdaq 100 (miér.)", "v": "−0,64 %", "pct": 15, "dir": "dn" },
    { "n": "Tecnología (miér.)", "v": "−0,83 %", "pct": 20, "dir": "dn" },
    { "n": "Amazon (miér.)", "v": "−3,12 %", "pct": 74, "dir": "dn" },
    { "n": "Nvidia (miér.)", "v": "−3,91 %", "pct": 93, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores, índices y valores del miércoles: Capp Notes; Asia, hoy (AP); futuro NQ: Investing.com. El miércoles la amplitud fue positiva pese a la caída del Nasdaq.",
  "niveles": [
    { "n": "Resistencia 4 · Proptraderz", "v": "26.638–26.710", "tipo": "r" },
    { "n": "Resistencia 3 · Proptraderz", "v": "26.569–26.603", "tipo": "r" },
    { "n": "Precio premarket (03:18 Madrid)", "v": "≈ 26.571", "tipo": "precio" },
    { "n": "Resistencia 2 · Proptraderz", "v": "26.500–26.514", "tipo": "r" },
    { "n": "Resistencia 1 · fuerza / máx. del miércoles", "v": "26.351–26.400", "tipo": "r" },
    { "n": "Cierre del jueves (sesión festiva, estimado)", "v": "≈ 26.101", "tipo": "ref" },
    { "n": "Soporte 1 · pivote alcista", "v": "26.146–26.170", "tipo": "s" },
    { "n": "Soporte 2 · zona de estrangulamiento / cierre del miércoles", "v": "25.905–26.013", "tipo": "s" },
    { "n": "Soporte 3 · Proptraderz", "v": "25.800–25.850", "tipo": "s" },
    { "n": "Soporte 4 · pivote bajista / debilidad", "v": "25.510–25.533", "tipo": "s" },
    { "n": "Soporte 5 · mínimo del ciclo", "v": "24.976,5–25.027,5", "tipo": "s" }
  ],
  "niveles_nota": "Niveles del futuro NQ (diciembre): Proptraderz (plan del 26–27 nov), con cierre, máximo y mínimo del miércoles. Nota: el precio de esta madrugada ya está por encima de 26.351–26.514, así que esas zonas pasan a ser primeros soportes si el precio se mantiene arriba. RSI: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · continuación del rebote en sesión corta", "dir": "up", "texto": "Con Asia al alza y el doble suelo del miércoles, el precio aguanta sobre 26.351–26.400 y busca 26.638–26.710 y 26.826–26.833 antes del cierre anticipado (19:00). Volumen bajo: los movimientos pueden ser bruscos.", "gatillo": "Gatillo: retroceso que respete 26.351–26.400 y cierre de 30 min por encima tras la apertura cash (15:30)" },
    "alternativo": { "titulo": "Alternativo · se vende el gap en la resistencia diaria", "dir": "dn", "texto": "La zona 26.351–26.400 frena otra vez al precio (máximo decreciente) y, con poco volumen y titulares de aranceles, el gap se cierra hacia 26.146–26.170 y 25.905–26.013.", "gatillo": "Gatillo: cierre de 30 min bajo 26.351 sin recuperación" },
    "invalidacion": "Invalidación: cierre de 4H bajo 25.905 anula el rebote (→ 25.510); cierre diario sobre 26.351 rompe la secuencia de máximos decrecientes (→ 27.000–27.137)."
  },
  "intermercado": [
    { "n": "Brent", "v": "≈ 97,3", "c": "+0,8 % hoy · +3,5 % el miércoles · WTI 86,2", "dir": "up" },
    { "n": "Bono 10A EE. UU.", "v": "4,85 %", "c": "−6 pb (cierre miér.) · 2A 4,61 %", "dir": "dn" },
    { "n": "Oro", "v": "3.534,70", "c": "−0,7 % (cierre miér.; tocó < 3.500)", "dir": "dn" },
    { "n": "USD/JPY", "v": "159,33", "c": "+0,1 % · EUR/USD 1,0982", "dir": "up" },
    { "n": "VIX", "v": "28,29", "c": "+7,3 % (cierre miér.; máx. ≈ 35)", "dir": "dn" },
    { "n": "Bitcoin", "v": "≈ 60.100", "c": "+0,6 % (miér.)", "dir": "up" }
  ],
  "globales": "Asia sube con la IA tras el festivo en EE. UU.: Kospi +4,2 % (4.906,93), Shanghai +3,2 % (3.586,30), Hang Seng +2,1 % (22.682,64), Nikkei +2,0 % (58.628,59; Tokyo Electron y Advantest se dieron la vuelta al alza), ASX +0,8 % (8.833,60). Preocupa el efecto de los nuevos aranceles de EE. UU. en la región. Europa abre a las 09:00. Índice del dólar 103,71.",
  "agenda": [
    { "h": "14:30", "e": "Balanza comercial de EE. UU.", "imp": "medio" },
    { "h": "15:30", "e": "Apertura de Wall Street (sesión corta)", "imp": "medio" },
    { "h": "19:00", "e": "Cierre anticipado de Wall Street (futuros: 19:15)", "imp": "medio" },
    { "h": "Todo el día", "e": "Black Friday: primeras lecturas del consumo en EE. UU.", "imp": "bajo" },
    { "h": "Próx. semana", "e": "Empleo de noviembre (viernes 4 dic) e ISM (horas: —)", "imp": "alto" },
    { "h": "18 dic", "e": "Último día de negociación de MNQZ26; rollover a MNQH27 unos días antes", "imp": "medio" },
    { "h": "8–9 dic", "e": "Próximo FOMC: subida de 25 pb casi descontada", "imp": "alto" }
  ],
  "resultados": "Hoy: sin resultados relevantes del Nasdaq 100. La semana que viene: no he encontrado la lista confirmada.",
  "pesados": [
    { "t": "NVDA", "v": "−3,91 % (miér.)", "dir": "dn" },
    { "t": "AAPL", "v": "+0,43 % (miér.)", "dir": "up" },
    { "t": "MSFT", "v": "—", "dir": "" },
    { "t": "AMZN", "v": "−3,12 % (miér.)", "dir": "dn" },
    { "t": "META", "v": "+3,40 % (miér.)", "dir": "up" },
    { "t": "GOOGL", "v": "−2,13 % (miér.)", "dir": "dn" },
    { "t": "TSLA", "v": "−1,18 % (miér.)", "dir": "dn" },
    { "t": "AVGO", "v": "—", "dir": "" }
  ],
  "pesados_nota": "Cierres del miércoles según Capp Notes e Investing.com; MSFT y AVGO: sin dato. No hay premarket publicado a esta hora. Semis el miércoles: SOXX −0,50 %, SMH −1,01 %.",
  "analisis": {
    "swing": {
      "dir": "",
      "marco": "Diario / 4H · días a semanas",
      "titulo": "Neutral: posible doble suelo, falta confirmación",
      "texto": "La tendencia diaria sigue con máximos decrecientes, pero el miércoles el precio barrió por debajo de 25.510 y se dio la vuelta desde 25.027,5 sin perder el mínimo del ciclo (24.976,5): posible doble suelo. Hoy el precio llega a la resistencia clave (26.351). Un cierre diario por encima rompería la secuencia bajista y daría pie a comprar retrocesos; un rechazo claro mantendría el sesgo bajista. Sesión corta y de poco volumen: mejor esperar al cierre semanal para decidir.",
      "entrada": "Largo: retroceso a 26.351–26.400 tras cierre diario por encima · Corto: rechazo diario en 26.351–26.638",
      "stop": "Largo: cierre diario bajo 25.905 · Corto: cierre diario sobre 26.710",
      "objetivos": ["27.000–27.137 (si rompe al alza)", "25.510 (si rechaza)", "24.976"],
      "alternativa": "Recuperar 27.137 en cierre diario cambiaría el sesgo swing a alcista; perder 24.976 abriría una nueva pata bajista (→ 24.561)."
    },
    "intradia": {
      "dir": "up",
      "marco": "15 min / 30 min · solo hoy",
      "titulo": "Alcista: comprar retrocesos, salir antes de las 19:00",
      "texto": "Gap alcista en sesión corta. Plan: no perseguir la apertura; comprar un retroceso a 26.351–26.400 que aguante en 15 min (antigua resistencia, ahora soporte) con objetivos en las resistencias de arriba. Cerrar todo antes de las 19:00: no dejar posiciones intradía en el cierre anticipado.",
      "entrada": "26.351–26.400 (rechazo alcista en 15 min)",
      "stop": "26.300 (bajo 26.351)",
      "objetivos": ["26.569–26.603", "26.638–26.710", "26.826–26.833"],
      "alternativa": "Si el precio cierra 30 min bajo 26.351, se anulan los largos: cortos tácticos hacia 26.146–26.170."
    },
    "nota": "Análisis propio a partir de los niveles publicados por Proptraderz (26–27 nov) y la estructura de price action. Sesión corta y de bajo volumen (cierre a las 19:00): conviene reducir tamaño. No incluye tamaño de posición ni gestión de riesgo personal."
  },
  "aviso_horario": "Hoy, viernes 27, sesión corta: Wall Street cierra a las 19:00 (Madrid) y los futuros a las 19:15. El lunes 30 vuelve el horario normal (apertura 15:30, cierre 22:00).",
  "fuentes": [
    { "n": "Capp Notes (cierre del miércoles)", "url": "https://cappnotes.substack.com/p/closing-look-wednesday-november-25" },
    { "n": "Proptraderz (niveles del futuro NQ, 26–27 nov)", "url": "https://www.proptraderz.com/nq-daily-trade-plan-2026-11-26-27/" },
    { "n": "Investing.com (futuros en la sesión festiva)", "url": "https://www.investing.com/news/stock-market-news/us-stock-futures-rise-in-holidaythinned-trade-tech-rebound-in-focus-5052775" },
    { "n": "AP vía Click2Houston (Asia, crudo y divisas)", "url": "https://www.click2houston.com/business/2026/11/27/asian-shares-mostly-rise-ahead-of-wall-streets-reopening-after-thanksgiving/" }
  ]
};
