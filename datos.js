/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Lunes 2 de noviembre de 2026",
  "actualizado": "08:15 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "ISM manufacturero", "v": "16:00" },
    { "n": "Apertura cash", "v": "15:30" },
    { "n": "Apple y Palantir", "v": "tras 22:00" }
  ],
  "precio": {
    "premarket": "—",
    "cambio": "≈ +0,9 % (Reuters, 05:49 Madrid)",
    "dir": "up",
    "cierre_ayer": "— (futuro) · Nasdaq 100 cash 28.384,85 (viernes)",
    "gap": "≈ +0,9 % (alcista, rebote)",
    "gap_mnq": "≈ +500 $ por contrato MNQ (estimado sobre ≈ +250 pts)"
  },
  "sesgo": {
    "dir": "",
    "titulo": "Neutral (rebote en tendencia bajista)",
    "confianza": 2,
    "texto": "Tras el peor día desde junio (Nasdaq 100 −3,46 % el viernes, semis −7,2 %) y el peor mes desde abril de 2025 (Nasdaq ≈ −7 % en octubre), el futuro NQ rebota ≈ +0,9 % en Asia. Ayudan la caída del crudo (Brent −3,3 % por las negociaciones con Irán en Catar para reabrir Ormuz), Asia al alza (Kospi +2,3 %) y el bitcoin recuperando. Pero la estructura sigue bajista y hoy hay dos riesgos claros: ISM manufacturero (16:00) y Apple y Palantir tras el cierre; mañana, elecciones de mitad de mandato y AMD.",
    "condicion": "Rebote vendible mientras el precio no recupere 28.750–28.945 (antiguos soportes, ahora resistencia). Aceptación sobre 28.945 → 29.400; pérdida del mínimo del viernes → presión hacia 27.176."
  },
  "ayer": {
    "titulo": "Qué pasó el viernes · 30 oct",
    "etiqueta": "Nasdaq −2,86 %",
    "dir": "dn",
    "resumen": "Peor sesión desde junio por la venta en tecnología e IA tras Amazon e Intel (Intel −28,6 %, su peor día en décadas). Nasdaq 100 −3,46 % (28.384,85), Nasdaq 25.437,00, S&P 500 −1,82 % (7.580,07; mín. 7.527,67), Dow −1,09 % (51.770,31) y Russell 2000 −1,66 % (2.811,84). Lideraron energía (+1,91 %), consumo básico (+1,41 %) y utilities (+0,67 %); a la cola, tecnología (−4,89 %), industriales (−1,60 %) y comunicaciones (−1,29 %). Semis (SOX) −7,20 %, NVDA −4,22 %, AVGO −5,48 %, Reddit −29,2 %. Macro: PMI de Chicago 55,3 (est. 56,1); ECI +0,8 % t/t. Bono a 10 años 4,94 % (−4 pb), Brent 113,43 $, oro −3,3 % (mínimo de un año), VIX 19,42 (+12,9 %). Apple recuperó el puesto de mayor empresa del mundo. Futuro NQ: liquidación —; máx./mín.: —.",
    "indices": [
      { "n": "Nasdaq", "v": "−2,86 %", "dir": "dn" },
      { "n": "S&P 500", "v": "−1,82 %", "dir": "dn" },
      { "n": "Dow", "v": "−1,09 %", "dir": "dn" },
      { "n": "Russell 2000", "v": "−1,66 %", "dir": "dn" }
    ]
  },
  "noticias": [
    { "t": "Rebote en futuros tras el peor día desde junio; el Nasdaq cerró octubre ≈ −7 %, su peor mes desde abril de 2025", "v": "NQ ≈ +0,9 %", "dir": "up" },
    { "t": "Irán negocia en Catar una propuesta para reabrir Ormuz en dos días; el crudo cae con fuerza", "v": "Brent −3,3 %", "dir": "up" },
    { "t": "Hoy tras el cierre: Apple (BPA est. ≈ 2,00 $; ingresos ≈ 113.000 M$) y Palantir", "v": "AAPL", "dir": "" },
    { "t": "Mañana elecciones de mitad de mandato en EE. UU. y resultados de AMD; Trump da más tiempo a la diplomacia con Irán", "v": "3 nov", "dir": "" },
    { "t": "Binance reabre retiradas tras el hackeo de 6.300 M$ (salidas netas de 3.600 M$); bitcoin rebota", "v": "BTC +0,9 %", "dir": "up" },
    { "t": "El mercado da ≈ 72 % a una subida de la Fed en diciembre; empleo del viernes est. +65.000", "v": "72 %", "dir": "dn" }
  ],
  "noticias_nota": "Futuros: Reuters vía MarketScreener (05:49 Madrid, NQ ≈ +0,9 %); TipRanks daba +0,84 % a las 06:38 y TokenPost hablaba de subidas puntuales de más del 1 %. No he encontrado el precio exacto del futuro publicado a esta hora.",
  "estructura": {
    "h4": "Bajista. Tras el CHoCH bajista del jueves (pérdida de 29.559), el viernes el precio rompió los 29.000 y el soporte de corto plazo de 28.750, con máximos y mínimos decrecientes desde 30.007. El rebote de esta madrugada es, por ahora, un retroceso dentro de esa estructura: la zona 28.750–28.945 (soportes perdidos) es la primera resistencia y 29.400–29.650 la de marco mayor. Un cierre de 4H sobre 28.945 sería la primera señal de giro; perder el mínimo del viernes apunta a 27.176 (Bolsamanía).",
    "h1": "Rebote nocturno desde mínimos con máximos crecientes en Asia (posible mínimo de corto plazo). Mientras no acepte sobre 28.750–28.945, el rebote es correctivo y vendible; un BOS alcista de 1H sobre esa zona abriría 29.130–29.400. Máx./mín. nocturnos: —."
  },
  "fuerza": [
    { "n": "Energía (sector, vie.)", "v": "+1,91 %", "pct": 7, "dir": "up" },
    { "n": "Consumo básico (vie.)", "v": "+1,41 %", "pct": 5, "dir": "up" },
    { "n": "Utilities (vie.)", "v": "+0,67 %", "pct": 2, "dir": "up" },
    { "n": "Kospi (hoy)", "v": "+2,3 %", "pct": 8, "dir": "up" },
    { "n": "Nasdaq 100 (vie.)", "v": "−3,46 %", "pct": 12, "dir": "dn" },
    { "n": "Nvidia (vie.)", "v": "−4,22 %", "pct": 15, "dir": "dn" },
    { "n": "Tecnología (sector, vie.)", "v": "−4,89 %", "pct": 17, "dir": "dn" },
    { "n": "Broadcom (vie.)", "v": "−5,48 %", "pct": 19, "dir": "dn" },
    { "n": "Semis SOX (vie.)", "v": "−7,20 %", "pct": 25, "dir": "dn" },
    { "n": "Intel (vie.)", "v": "−28,58 %", "pct": 100, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores, índices y valores: cierre del viernes (Capp Notes); Kospi, hoy (AP). Rotación defensiva clara: energía y consumo básico arriba; tecnología y semis, a la cola.",
  "niveles": [
    { "n": "Resistencia 4 · máximo histórico (Bolsamanía)", "v": "31.361", "tipo": "r" },
    { "n": "Resistencia 3 · impulso alcista (Bolsamanía)", "v": "29.928", "tipo": "r" },
    { "n": "Resistencia 2 · antigua zona de soporte (futuro NQ)", "v": "29.400–29.650", "tipo": "r" },
    { "n": "Resistencia 1 · soportes perdidos (Bolsamanía)", "v": "28.750–28.945", "tipo": "r" },
    { "n": "Cierre Nasdaq 100 cash (viernes)", "v": "28.384,85", "tipo": "precio" },
    { "n": "Soporte 1 · cambio de tendencia (Bolsamanía)", "v": "27.176", "tipo": "s" }
  ],
  "niveles_nota": "Niveles del Nasdaq 100 cash: Bolsamanía (2 nov, 06:00), que además señala la media de 200 sesiones como posible soporte (valor: —). Zona 29.400–29.650: futuro NQ (The NQ Market Wizard, 30 oct). Precio del futuro esta madrugada: —. Máx./mín. del viernes y nocturnos: —. RSI: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · rebote que se frena en resistencia", "dir": "dn", "texto": "El rebote de Asia continúa en la apertura pero se agota en 28.750–28.945 (soportes perdidos). Con el ISM (16:00), Apple y Palantir tras el cierre y las elecciones mañana, el mercado no tiene prisa por comprar tecnología: vuelta a mínimos del viernes.", "gatillo": "Gatillo: rechazo en 28.750–28.945 y cierre de 15 min por debajo del mínimo del rango inicial tras la apertura cash (15:30)" },
    "alternativo": { "titulo": "Alternativo · rebote de alivio más amplio", "dir": "up", "texto": "La caída del crudo y de las rentabilidades, más compras por sobreventa tras el peor mes desde 2025, llevan al precio a aceptar sobre 28.945 y buscar 29.400–29.650.", "gatillo": "Gatillo: cierre de 1H sobre 28.945" },
    "invalidacion": "Invalidación: cierre de 4H sobre 29.650 anula el sesgo bajista de fondo (→ 29.928); perder el mínimo del viernes lo reactiva (→ 27.176)."
  },
  "intermercado": [
    { "n": "Brent", "v": "≈ 109,7", "c": "−3,3 % hoy · WTI 100,6", "dir": "dn" },
    { "n": "Bono 10A EE. UU.", "v": "4,93 %", "c": "plano · 2A 4,61 %", "dir": "" },
    { "n": "Oro", "v": "≈ 3.911", "c": "+0,9 % hoy · mín. de un año el vie.", "dir": "up" },
    { "n": "USD/JPY", "v": "≈ 157,8", "c": "+0,1 % · EUR/USD 1,1170", "dir": "up" },
    { "n": "VIX", "v": "19,42", "c": "+12,9 % (cierre vie.)", "dir": "dn" },
    { "n": "Bitcoin", "v": "≈ 78.477", "c": "+0,9 %", "dir": "up" }
  ],
  "globales": "Asia mixta-alcista: Kospi +2,3 % (5.859,83; SK Hynix +4,2 %, Samsung +1,7 %) tras caer un 16 % en octubre; Shanghai +1,2 % (3.640,93) con reuniones de los reguladores chinos para apoyar la bolsa, aunque el PMI manufacturero chino volvió a contracción; Hang Seng +0,6 % (23.437,41); Nikkei −0,1 % (63.218,02; Kioxia −14 %); Taiex −0,2 % (TSMC −1,5 %); ASX −0,6 %. Europa: futuros del Euro Stoxx 50 +0,3 % y del DAX +0,2 %; apertura a las 09:00. Índice del dólar ≈ 101,9.",
  "agenda": [
    { "h": "15:30", "e": "Apertura de Wall Street (ya con horario de invierno)", "imp": "medio" },
    { "h": "16:00", "e": "ISM manufacturero de octubre (EE. UU.)", "imp": "alto" },
    { "h": "22:00", "e": "Cierre de Wall Street", "imp": "bajo" },
    { "h": "Tras cierre", "e": "Apple: resultados (BPA est. ≈ 1,98–2,00 $; ingresos ≈ 113.000 M$; margen bruto guiado 47–48 %)", "imp": "alto" },
    { "h": "Tras cierre", "e": "Palantir: resultados (ingresos guiados 2.160–2.164 M$)", "imp": "alto" },
    { "h": "3 nov", "e": "Elecciones de mitad de mandato en EE. UU. · JOLTS (16:00) · AMD tras el cierre", "imp": "alto" },
    { "h": "4 nov", "e": "ISM de servicios (16:00) · Qualcomm y Arm · plan de emisiones del Tesoro", "imp": "medio" },
    { "h": "6 nov", "e": "Empleo de octubre (14:30): est. +65.000, paro 4,2 %", "imp": "alto" },
    { "h": "8–9 dic", "e": "Próximo FOMC: el mercado da ≈ 72 % a una subida de 25 pb", "imp": "alto" }
  ],
  "resultados": "Hoy después del cierre: Apple y Palantir (las dos a las 23:00 Madrid su conferencia). Antes de la apertura: —. Resto de la semana: AMD (martes), Qualcomm y Arm (miércoles), además de Pfizer, Uber, McDonald's, Super Micro, Block e IonQ. El viernes: Intel −28,6 % y Reddit −29,2 % tras sus resultados.",
  "pesados": [
    { "t": "NVDA", "v": "−4,22 % (vie.)", "dir": "dn" },
    { "t": "AAPL", "v": "−1,23 % (vie.)", "dir": "dn" },
    { "t": "MSFT", "v": "—", "dir": "" },
    { "t": "AMZN", "v": "−1,41 % (vie.)", "dir": "dn" },
    { "t": "META", "v": "—", "dir": "" },
    { "t": "GOOGL", "v": "—", "dir": "" },
    { "t": "TSLA", "v": "—", "dir": "" },
    { "t": "AVGO", "v": "−5,48 % (vie.)", "dir": "dn" }
  ],
  "pesados_nota": "A esta hora no hay premarket publicado de los pesos pesados: se muestran los cierres del viernes que he encontrado (Capp Notes). MSFT, META, GOOGL y TSLA: sin dato. Semis el viernes: SOX −7,20 %, Intel −28,58 %; hoy en Asia SK Hynix +4,2 % y TSMC −1,5 %.",
  "aviso_horario": "EE. UU. ya cambió de hora el domingo 1 nov: el desfase con Nueva York vuelve a 6 h → datos a las 14:30, apertura a las 15:30 y cierre a las 22:00 (Madrid).",
  "fuentes": [
    { "n": "Capp Notes (cierre del viernes y sectores)", "url": "https://cappnotes.substack.com/p/closing-look-friday-october-30-2026" },
    { "n": "Reuters vía MarketScreener (futuros, divisas, Fed y Apple)", "url": "https://www.marketscreener.com/news/stocks-bounce-as-apple-earnings-near-oil-falls-ce785fd8dc89fe2c" },
    { "n": "Bloomberg vía Swissinfo (Asia, crudo, oro y bitcoin)", "url": "https://swissinfo.ch/eng/stock-selloff-eases-in-asian-trade,-oil-declines:-markets-wrap/92310840" },
    { "n": "AP vía WSLS (cierres de Asia e Irán)", "url": "https://www.wsls.com/business/2026/11/02/asian-shares-mostly-advance-but-tech-stocks-remain-volatile-while-oil-sinks-33/" },
    { "n": "TipRanks (futuros de madrugada)", "url": "https://www.tipranks.com/news/u-s-stock-futures-rise-as-investors-eye-earnings-midterm-elections-and-jobs-report" },
    { "n": "Opportunity Costs (agenda de la semana)", "url": "https://opportunitycosts.substack.com/p/week-ahead-aapl-and-pltr-monday-midterms" },
    { "n": "Bolsamanía (niveles del Nasdaq 100)", "url": "https://www.bolsamania.com/noticias/analisis-tecnico/alerta-en-el-nasdaq-100-que-ataca-nieves-clave--23960234.html" }
  ]
};
