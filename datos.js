/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Miércoles 11 de noviembre de 2026",
  "actualizado": "08:10 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "Apertura cash", "v": "15:30" },
    { "n": "Cierre", "v": "22:00" },
    { "n": "Bonos EE. UU.", "v": "cerrados" }
  ],
  "precio": {
    "premarket": "≈ 28.227",
    "cambio": "≈ +1,45 % (TipRanks, 07:40 Madrid)",
    "dir": "up",
    "cierre_ayer": "— (futuro) · Nasdaq 100 cash 27.740,79 (martes)",
    "gap": "≈ +1,45 % (≈ +400 pts estimados, alcista)",
    "gap_mnq": "≈ +800 $ por contrato MNQ (estimado)"
  },
  "sesgo": {
    "dir": "up",
    "titulo": "Alcista prudente",
    "confianza": 3,
    "texto": "El futuro NQ sube ≈ 1,45 % gracias a CoreWeave (ingresos del T3 de 3.660 M$, +168 %; cartera de pedidos de 133.000 M$; guía de 2026 elevada), que reaviva la compra de IA: Micron, SanDisk y SK Hynix suben y Nvidia rebota tras dos días de caídas. Asia acompaña (Taiex +2,1 %, Kospi +1,6 %, TSMC +3,1 % por sus ventas de octubre). En contra: el IPC de ayer salió caliente (+0,4 % general, +0,3 % subyacente), el bono a 10 años tocó el 5 % y el mercado ya da ≈ 86–90 % a una subida de la Fed en diciembre. Hoy es Veterans Day: la bolsa abre, pero el mercado de bonos está cerrado.",
    "condicion": "Alcista mientras el precio aguante sobre 28.060–28.100. Aceptación sobre 28.233–28.250 → 28.465 y 28.600–28.800; pérdida de 27.780–27.813 (POC/VWAP de ayer) anula el rebote (→ 27.516)."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · martes 10 nov",
    "etiqueta": "Nasdaq −0,74 %",
    "dir": "dn",
    "resumen": "Caída tras un IPC por encima de lo esperado y otro desplome de Nvidia. Nasdaq 100 −0,60 % (27.740,79), Nasdaq −0,74 % (25.065,88), S&P 500 −0,38 % (7.520,93), Dow −0,30 % (52.231,89) y Russell 2000 −0,68 % (2.821,38). Lideraron financieras (+0,52 %), energía (+0,44 %) y comunicaciones (+0,37 %); a la cola, tecnología (−1,15 %), materiales (−0,17 %) y utilities (−0,14 %). IPC de octubre +0,4 % m/m (est. +0,3 %) y subyacente +0,3 % (est. +0,2 %); el BLS no publicó tasa anual por el cierre de 2025. Bonos vendidos: 2 años 4,73 % (+17 pb) y 10 años 4,98 % (+10 pb; llegó a superar el 5 %). Nvidia −5,47 %, Microsoft −2,20 %, Broadcom +3,91 %. Brent −1,2 % (91,49 $), oro −2,05 % (4.030,20), índice del dólar 102,25 (+0,6 %), VIX 19,46. Futuro NQ: mín. 27.516; POC 27.780; VWAP 27.813; cierre: —.",
    "indices": [
      { "n": "Nasdaq", "v": "−0,74 %", "dir": "dn" },
      { "n": "S&P 500", "v": "−0,38 %", "dir": "dn" },
      { "n": "Dow", "v": "−0,30 %", "dir": "dn" },
      { "n": "Russell 2000", "v": "−0,68 %", "dir": "dn" }
    ]
  },
  "noticias": [
    { "t": "CoreWeave bate: ingresos del T3 3.660 M$ (+168 %), cartera de 133.000 M$ y guía de 2026 elevada a 13.000–13.300 M$", "v": "CRWV ≈ +13 %", "dir": "up" },
    { "t": "IPC de octubre caliente: +0,4 % general y +0,3 % subyacente; el bono a 10 años llegó a superar el 5 %", "v": "+0,4 %", "dir": "dn" },
    { "t": "CME da ≈ 90 % a una subida de 25 pb en diciembre; Goldman añade otra subida a sus previsiones y un miembro de la Fed apunta a un movimiento doble", "v": "≈ 90 %", "dir": "dn" },
    { "t": "Nvidia cae un 5,5 % por la investigación a Jensen Huang, pero rebota de madrugada; Micron, SanDisk y SK Hynix suben", "v": "NVDA −5,47 %", "dir": "dn" },
    { "t": "TSMC sube un 3,1 % tras multiplicar casi por seis sus ventas de octubre; SoftBank cae un 3,7 % por pérdidas de 1,1 billones de yenes", "v": "TSMC +3,1 %", "dir": "up" },
    { "t": "Trump: la guerra en Irán está «militarmente prácticamente terminada»; Anthropic busca una valoración de ≈ 1,3 billones de $ para su salida a bolsa", "v": "Brent ≈ 92,4 $", "dir": "" }
  ],
  "noticias_nota": "Futuro NQ: TipRanks (+1,45 % a las 07:40 Madrid, sin nivel); investingLive (≈ 28.227 a las 06:29 Madrid, máx. nocturno 28.233,25). No he encontrado el cierre del futuro del martes: el gap en puntos está estimado a partir del %. CoreWeave: +1,5 % fuera de hora (Capp Notes) y ≈ +13 % según Finwire. Asia: AP.",
  "estructura": {
    "h4": "Neutral, intentando girar al alza. Tras el desplome hasta ≈ 26.366 (6 nov) y el rebote hasta 28.129 (9 nov), el martes el precio corrigió con el IPC pero aguantó en 27.516, por encima del mínimo previo: es un mínimo creciente. Esta madrugada recupera 28.200, cerca del máximo del lunes. Superar 28.465 y, sobre todo, aceptar sobre 28.800 (antiguo soporte, ahora resistencia; Oneup Trader) confirmaría el giro alcista de 4H. Por arriba quedan 28.969 (máx. del 4 nov) y la media rápida de 29.727.",
    "h1": "Alcista de corto plazo: BOS alcista nocturno sobre 28.060–28.100 con máximos crecientes desde 27.516. Un repliegue que respete 28.060–28.100 sería de compra; perder 27.780–27.813 (POC y VWAP del martes) devolvería el control a los bajistas. Máx. nocturno: 28.233,25; mín. nocturno: —."
  },
  "fuerza": [
    { "n": "CoreWeave (fuera de hora)", "v": "≈ +13 %", "pct": 100, "dir": "up" },
    { "n": "Broadcom (mar.)", "v": "+3,91 %", "pct": 30, "dir": "up" },
    { "n": "TSMC (hoy)", "v": "+3,1 %", "pct": 24, "dir": "up" },
    { "n": "Taiex (hoy)", "v": "+2,1 %", "pct": 16, "dir": "up" },
    { "n": "Futuro NQ (noche)", "v": "≈ +1,45 %", "pct": 11, "dir": "up" },
    { "n": "Financieras (mar.)", "v": "+0,52 %", "pct": 4, "dir": "up" },
    { "n": "Nasdaq 100 (mar.)", "v": "−0,60 %", "pct": 5, "dir": "dn" },
    { "n": "Tecnología (mar.)", "v": "−1,15 %", "pct": 9, "dir": "dn" },
    { "n": "Microsoft (mar.)", "v": "−2,20 %", "pct": 17, "dir": "dn" },
    { "n": "Nvidia (mar.)", "v": "−5,47 %", "pct": 42, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores, índices y valores del martes: Capp Notes; Asia y TSMC, hoy (AP); CoreWeave, Finwire; futuro NQ, TipRanks.",
  "niveles": [
    { "n": "Resistencia 5 · media rápida (Oneup Trader)", "v": "29.727", "tipo": "r" },
    { "n": "Resistencia 4 · máx. del 4 nov (investingLive)", "v": "28.969", "tipo": "r" },
    { "n": "Resistencia 3 · antiguo soporte (Oneup Trader)", "v": "28.600–28.800", "tipo": "r" },
    { "n": "Resistencia 2 · objetivo (investingLive)", "v": "28.465", "tipo": "r" },
    { "n": "Resistencia 1 · máx. nocturno (investingLive)", "v": "28.233–28.250", "tipo": "r" },
    { "n": "Precio premarket (06:29 Madrid)", "v": "≈ 28.227", "tipo": "precio" },
    { "n": "Soporte 1 · pérdida de impulso (investingLive)", "v": "28.060–28.100", "tipo": "s" },
    { "n": "Soporte 2 · POC y VWAP del martes", "v": "27.780–27.813", "tipo": "s" },
    { "n": "Soporte 3 · límite del área de valor del martes", "v": "27.600–27.619", "tipo": "s" },
    { "n": "Soporte 4 · mínimo del martes", "v": "27.516", "tipo": "s" },
    { "n": "Soporte 5 · mínimo del 6 nov", "v": "≈ 26.366,5", "tipo": "s" }
  ],
  "niveles_nota": "Niveles del futuro NQ: investingLive (11 nov, 05:56 Madrid; precio ≈ 28.227 a las 06:29) y Oneup Trader (28.600–28.800 y 29.727). Cierre del martes del futuro: —. RSI: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · CoreWeave tira de la IA", "dir": "up", "texto": "El rebote de la IA continúa en la apertura: el precio acepta sobre 28.233–28.250 y busca 28.465 y la zona de 28.600–28.800, donde está la primera resistencia seria. Sin bonos en EE. UU. (Veterans Day), el volumen puede ser menor.", "gatillo": "Gatillo: cierre de 15 min sobre 28.250 tras la apertura cash (15:30) con retroceso que respete 28.100" },
    "alternativo": { "titulo": "Alternativo · se vende el gap", "dir": "dn", "texto": "Con el mercado descontando una subida de la Fed en diciembre y el 10 años en el 5 %, el gap se vende: el precio pierde 28.060–28.100 y vuelve a 27.780–27.813, con riesgo de 27.516.", "gatillo": "Gatillo: cierre de 15 min bajo 28.060" },
    "invalidacion": "Invalidación: cierre de 4H bajo 27.780 anula el sesgo alcista (→ 27.516); cierre de 4H sobre 28.800 lo refuerza (→ 28.969–29.200)."
  },
  "intermercado": [
    { "n": "Brent", "v": "≈ 92,4", "c": "+1 % hoy · WTI 86,6", "dir": "up" },
    { "n": "Bono 10A EE. UU.", "v": "≈ 4,98 %", "c": "+10 pb mar. · hoy sin negociación (festivo)", "dir": "up" },
    { "n": "Oro", "v": "4.030,20", "c": "−2,05 % (cierre mar.)", "dir": "dn" },
    { "n": "USD/JPY", "v": "158,90", "c": "+0,1 % · EUR/USD 1,1167", "dir": "up" },
    { "n": "VIX", "v": "19,46", "c": "−2,3 % (cierre mar.)", "dir": "up" },
    { "n": "Bitcoin", "v": "≈ 73.800", "c": "−1,25 % (mar.)", "dir": "dn" }
  ],
  "globales": "Asia mayoritariamente al alza por la demanda de chips de IA: Taiex +2,1 % (TSMC +3,1 %), Kospi +1,6 % (5.321,10; Samsung +2,3 %, SK Hynix +3,4 %), Nikkei +0,8 % (60.942,48; SoftBank −3,7 %), ASX +0,1 % (9.132,30); a la baja, Hang Seng −0,7 % (24.381,84) y Shanghai −0,3 % (3.653,86). En China empieza el Día del Soltero. Europa abre a las 09:00.",
  "agenda": [
    { "h": "Todo el día", "e": "Veterans Day: la bolsa abre con normalidad; el mercado de bonos de EE. UU. está cerrado", "imp": "bajo" },
    { "h": "15:30", "e": "Apertura de Wall Street", "imp": "medio" },
    { "h": "22:00", "e": "Cierre de Wall Street", "imp": "bajo" },
    { "h": "Durante el día", "e": "Resultados de NIO (hora: —)", "imp": "bajo" },
    { "h": "12 nov", "e": "Applied Materials y Cisco: resultados (tras el cierre)", "imp": "alto" },
    { "h": "13 nov", "e": "IPP de octubre", "imp": "medio" },
    { "h": "Próx. semana", "e": "Nvidia: resultados", "imp": "alto" },
    { "h": "8–9 dic", "e": "Próximo FOMC: CME da ≈ 86–90 % a una subida de 25 pb", "imp": "alto" }
  ],
  "resultados": "Hoy: NIO (hora: —); no he encontrado otros resultados relevantes del Nasdaq 100. Ayer tras el cierre: CoreWeave (bate en ingresos y eleva la guía). Mañana tras el cierre: Applied Materials y Cisco.",
  "pesados": [
    { "t": "NVDA", "v": "−5,47 % (mar.) · rebota de madrugada", "dir": "dn" },
    { "t": "AAPL", "v": "—", "dir": "" },
    { "t": "MSFT", "v": "−2,20 % (mar.)", "dir": "dn" },
    { "t": "AMZN", "v": "—", "dir": "" },
    { "t": "META", "v": "—", "dir": "" },
    { "t": "GOOGL", "v": "—", "dir": "" },
    { "t": "TSLA", "v": "—", "dir": "" },
    { "t": "AVGO", "v": "+3,91 % (mar.)", "dir": "up" }
  ],
  "pesados_nota": "A esta hora no hay premarket publicado de los pesos pesados: se muestran los cierres del martes (Capp Notes). AAPL, AMZN, META, GOOGL y TSLA: sin dato. De madrugada suben Micron, SanDisk y SK Hynix, y Nvidia rebota (TipRanks, sin %). SOXX −0,12 % el martes.",
  "aviso_horario": "",
  "fuentes": [
    { "n": "Capp Notes (cierre del martes, IPC y CoreWeave)", "url": "https://cappnotes.substack.com/p/closing-look-tuesday-november-10" },
    { "n": "TipRanks (futuros, CoreWeave y Fed)", "url": "https://www.tipranks.com/news/coreweaves-strong-q3-results-ease-ai-fears-boost-u-s-stocks" },
    { "n": "investingLive (niveles del futuro NQ)", "url": "https://investinglive.com/technical-analysis/nasdaq-today-says-fold-that-short/" },
    { "n": "Oneup Trader (niveles del futuro NQ)", "url": "https://blog.oneuptrader.com/analysis/technical-analysis/nasdaq-futures-nq-technical-analysis-can-bulls-reclaim-28800/" },
    { "n": "AP vía WSLS (Asia, crudo y divisas)", "url": "https://www.wsls.com/business/2026/11/11/asian-shares-mostly-rise-on-ai-chip-demand-despite-wall-streets-retreat-on-inflation-data/" },
    { "n": "Finwire (CoreWeave y Asia)", "url": "https://finwire.io/news/stock-markets-news/asian-ai-stocks-rise-as-coreweave-jumps-13-after-earnings-beat" }
  ]
};
