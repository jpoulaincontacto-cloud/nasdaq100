/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Jueves 22 de octubre de 2026",
  "actualizado": "14:16 (Madrid) · prueba de despliegue",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026",
  "horas": [
    { "n": "Datos EE. UU.", "v": "14:30" },
    { "n": "Apertura cash", "v": "15:30" },
    { "n": "Fed (FOMC)", "v": "27–28 oct" }
  ],
  "precio": {
    "premarket": "29.488,5",
    "cambio": "−518,5 · −1,73 %",
    "dir": "dn",
    "cierre_ayer": "30.007",
    "gap": "≈ −518 pts",
    "gap_mnq": "≈ 1.037 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "dn",
    "titulo": "Bajista",
    "confianza": 3,
    "texto": "Gap a la baja tras Tesla y Meta, petróleo al alza y Asia en rojo. Se pierde lo ganado ayer.",
    "condicion": "Condicionado a que no recupere 29.926 en la apertura."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · miércoles 21",
    "etiqueta": "Nasdaq +1,05 %",
    "dir": "up",
    "resumen": "Sesión alcista liderada por tecnología y chips. El Nasdaq llegó a subir +1,24 % pero a última hora recortó hasta +0,80 % mientras se reducía riesgo antes de los resultados de Meta y Tesla; cerró +1,05 %. Tras el cierre, Tesla recortó su previsión de capex y Meta anunció una nueva clase de acciones sin voto para financiar IA: el mercado lo leyó como más dudas sobre el gasto en IA y el futuro se dio la vuelta por la noche.",
    "indices": [
      { "n": "Nasdaq", "v": "+1,05 %", "dir": "up" },
      { "n": "S&P 500", "v": "+0,59 %", "dir": "up" },
      { "n": "Dow", "v": "+0,69 %", "dir": "up" },
      { "n": "Russell 2000", "v": "+0,27 %", "dir": "up" }
    ]
  },
  "noticias": [
    { "t": "Tesla recorta su previsión anual de capex", "v": "TSLA −5,3 %", "dir": "dn" },
    { "t": "Meta: nuevas acciones sin voto para financiar IA", "v": "META −1,9 %", "dir": "dn" },
    { "t": "Brent > 111 $ por ataques hutíes en Arabia Saudí", "v": "riesgo ↑", "dir": "dn" },
    { "t": "SpaceX bate: ingresos 14,6 MM $ (+161 %)", "v": "ayer ↑", "dir": "up" },
    { "t": "Super Micro sube su guía a 18,5–19,5 MM $", "v": "ayer ↑", "dir": "up" },
    { "t": "Netflix decepciona con su previsión", "v": "ayer ↓", "dir": "dn" }
  ],
  "noticias_nota": "% en premarket de hoy salvo indicación.",
  "estructura": {
    "h4": "Tendencia alcista en 4H que hoy se pone en duda: el gap perfora el último mínimo creciente. Un cierre de vela de 4H por debajo confirmaría un cambio de carácter bajista con 29.200 como objetivo.",
    "h1": "Estructura de 1H ya bajista tras la sesión nocturna. Mientras no recupere el último máximo decreciente, los rebotes son zona de oferta hasta 29.926."
  },
  "fuerza": [
    { "n": "Tecnología XLK", "v": "+1,68 %", "pct": 100, "dir": "up" },
    { "n": "Nasdaq", "v": "+1,05 %", "pct": 62, "dir": "up" },
    { "n": "Industriales XLI", "v": "+0,91 %", "pct": 54, "dir": "up" },
    { "n": "S&P 500", "v": "+0,59 %", "pct": 35, "dir": "up" },
    { "n": "Russell 2000", "v": "+0,27 %", "pct": 16, "dir": "up" }
  ],
  "fuerza_nota": "Salud, consumo básico y utilities a la cola.",
  "niveles": [
    { "n": "Resistencia 2", "v": "30.580", "tipo": "r" },
    { "n": "Cierre de ayer", "v": "30.007", "tipo": "ref" },
    { "n": "Resistencia 1", "v": "29.926", "tipo": "r" },
    { "n": "Precio premarket", "v": "29.488,5", "tipo": "precio" },
    { "n": "Soporte 1", "v": "29.200", "tipo": "s" },
    { "n": "Soporte 2", "v": "28.798", "tipo": "s" }
  ],
  "niveles_nota": "Resistencias y soportes del US100 según el análisis de XTB del 21 oct.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · bajista", "dir": "dn", "texto": "Abre con gap y no recupera 29.926. Los rebotes hacia la zona de oferta se venden; objetivo 29.200 y, si rompe, 28.798.", "gatillo": "Gatillo: rechazo en 29.7xx–29.926 en 5–15 min" },
    "alternativo": { "titulo": "Alternativo · cierre de gap", "dir": "up", "texto": "El petróleo se relaja y la caída se compra en 29.200. Recupera 29.926 y busca rellenar el gap hacia 30.007.", "gatillo": "Gatillo: cierre de 1H por encima de 29.926" },
    "invalidacion": "Invalidación del sesgo bajista: aceptación por encima de 29.926 tras la apertura cash."
  },
  "intermercado": [
    { "n": "Brent", "v": "111,55", "c": "+2,73", "dir": "dn" },
    { "n": "Bono 10A EE. UU.", "v": "5,07 %", "c": "−5 pb", "dir": "up" },
    { "n": "Oro", "v": "4.106,8", "c": "−43,2", "dir": "" },
    { "n": "USD/JPY", "v": "156,94", "c": "yen refugio", "dir": "" },
    { "n": "VIX", "v": "—", "c": "", "dir": "" },
    { "n": "Bitcoin", "v": "≈ 85.000", "c": "−3,4 %", "dir": "dn" }
  ],
  "globales": "Asia: Nikkei −2,65 %, Kospi −3,7 %, Hang Seng −3 %. Europa: DAX ≈ −275 pts.",
  "agenda": [
    { "h": "14:30", "e": "Peticiones de desempleo · est. 200K", "imp": "alto" },
    { "h": "14:30", "e": "Peticiones continuadas · est. 1,72M", "imp": "medio" },
    { "h": "15:30", "e": "Apertura de Wall Street", "imp": "alto" },
    { "h": "16:00", "e": "Indicador adelantado sept. · est. −0,1 %", "imp": "bajo" },
    { "h": "17:00", "e": "Fed de Kansas City, manufacturas · ant. 20", "imp": "bajo" }
  ],
  "resultados": "Antes de la apertura: Honeywell, Comcast, Spotify, Blackstone, Union Pacific · Después del cierre: Western Digital, VeriSign, Deckers.",
  "pesados": [
    { "t": "TSLA", "v": "−5,3 %", "dir": "dn" },
    { "t": "INTC", "v": "−5,1 %", "dir": "dn" },
    { "t": "SMCI", "v": "−4,7 %", "dir": "dn" },
    { "t": "NVDA", "v": "−2,4 %", "dir": "dn" },
    { "t": "SPCX", "v": "−2,3 %", "dir": "dn" },
    { "t": "META", "v": "−1,9 %", "dir": "dn" },
    { "t": "AMZN", "v": "−1,6 %", "dir": "dn" }
  ],
  "pesados_nota": "AMD, Qualcomm, Marvell, Broadcom y Micron entre −2,9 % y −5,3 %: los semis arrastran.",
  "aviso_horario": "Del 25 oct al 1 nov el desfase con Nueva York es de 5 h: datos a las 13:30 y apertura a las 14:30 (Madrid).",
  "fuentes": [
    { "n": "Investrade", "url": "https://investrade.com/morning-preview-october-22-2026/" },
    { "n": "Yahoo Finance / Reuters", "url": "https://finance.yahoo.com/markets/stocks/articles/nasdaq-futures-drop-over-1-093849296.html" },
    { "n": "XTB", "url": "https://www.xtb.com/cl/analisis-y-noticias/analisis-de-mercado/mercados-a-observar-hoy-nasdaq-100-libra-esterlina-y-cobre-21-de-octubre-de-2026" },
    { "n": "EconCurrents", "url": "https://econcurrents.substack.com/p/21-october-2026-market-close-and" }
  ]
};
