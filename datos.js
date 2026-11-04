/* Datos del panel. La tarea diaria reescribe SOLO este fichero. */
window.PANEL = {
  "fecha": "Miércoles 4 de noviembre de 2026",
  "actualizado": "08:15 (Madrid)",
  "contrato": "MNQZ26",
  "contrato_nombre": "Micro E-mini Nasdaq-100 · dic. 2026 (rollover a MNQH27 a mediados de diciembre)",
  "horas": [
    { "n": "ADP", "v": "14:15" },
    { "n": "Apertura cash", "v": "15:30" },
    { "n": "ISM servicios", "v": "16:00" }
  ],
  "precio": {
    "premarket": "≈ 28.135",
    "cambio": "≈ −170 · −0,6 %",
    "dir": "dn",
    "cierre_ayer": "≈ 28.305 (martes, futuro, estimado)",
    "gap": "≈ −170 pts (bajista)",
    "gap_mnq": "≈ −340 $ por contrato MNQ"
  },
  "sesgo": {
    "dir": "dn",
    "titulo": "Bajista",
    "confianza": 3,
    "texto": "Según la AP, los demócratas han ganado el control del Senado y van camino de la Cámara. El mercado teme bloqueo político y más regulación de la IA y de los centros de datos: los futuros llegaron a caer entre un 1 % y un 2,5 % de madrugada y ahora el NQ cede ≈ 0,6 % (28.135). Lo compensan en parte los resultados de AMD (+4 % a +7 % fuera de hora, con una guía del T4 de ≈ 17.000 M$), Super Micro (+9 %) y Arista (+12 %). Asia tecnológica, a la baja: Nikkei −2,85 %, SoftBank −8 %. Hoy ADP (14:15), ISM de servicios (16:00), plan de emisiones del Tesoro y Qualcomm y Arm tras el cierre.",
    "condicion": "Bajista mientras no recupere 28.455–28.500 (VAL del lunes / objetivo de XTB). Cierre de 1H sobre 28.500 → 28.697–28.800; pérdida de 28.102 (mínimo del lunes) → 27.800."
  },
  "ayer": {
    "titulo": "Qué pasó ayer · martes 3 nov",
    "etiqueta": "Nasdaq +0,83 %",
    "dir": "up",
    "resumen": "Rebote de los chips en el día de elecciones: el S&P 500 cortó tres sesiones de caídas, aunque la mayoría de sus valores cayeron. Nasdaq 100 +0,68 % (28.180,26), Nasdaq 25.372,01, S&P 500 +0,36 % (7.568,92), Dow −0,38 % (51.786,72; Apple −1,9 %) y Russell 2000 +0,23 % (2.812,45). Lideraron tecnología (+1,31 %), comunicaciones (+1,18 %) e industriales (+0,95 %); a la cola, consumo básico (−2,07 %), materiales (−2,01 %) y energía (−0,85 %). Semis (SOX) +2,63 %. JOLTS 7,52 M (est. 7,15 M). Bono a 10 años 4,95 % (+4 pb), Brent 103,60 $ (−1,1 %), oro −0,95 %, VIX 20,83 (−1,5 %). Futuro NQ: cierre ≈ 28.305 (estimado); máx./mín.: —.",
    "indices": [
      { "n": "Nasdaq", "v": "+0,83 %", "dir": "up" },
      { "n": "S&P 500", "v": "+0,36 %", "dir": "up" },
      { "n": "Dow", "v": "−0,38 %", "dir": "dn" },
      { "n": "Russell 2000", "v": "+0,23 %", "dir": "up" }
    ]
  },
  "noticias": [
    { "t": "Elecciones: según la AP, los demócratas ganan el Senado y van camino de la Cámara; Trump promete ser «Mr. Veto». El mercado teme más regulación de la IA y los centros de datos", "v": "NQ ≈ −0,6 %", "dir": "dn" },
    { "t": "AMD bate (ingresos 13.380 M$, +45 %; BPA 2,09 $) y guía el T4 en ≈ 17.000 M$, muy por encima de lo esperado", "v": "AMD ≈ +4 % a +7 %", "dir": "up" },
    { "t": "Super Micro dispara sus ventas preliminares (19.900 M$) y eleva la guía anual; Arista también sorprende", "v": "ANET ≈ +12 %", "dir": "up" },
    { "t": "Skyworks se hunde por una guía débil; Microsoft y Amazon ceden fuera de hora", "v": "SWKS ≈ −15 %", "dir": "dn" },
    { "t": "Asia tecnológica a la baja: Nikkei −2,85 % y SoftBank −8 % por el resultado electoral", "v": "Nikkei −2,85 %", "dir": "dn" },
    { "t": "Hoy ADP y el ISM de servicios; el viernes, empleo de octubre (est. ≈ +59.000–65.000)", "v": "16:00", "dir": "" }
  ],
  "noticias_nota": "Futuro NQ: Investing.com (07:24 Madrid, 28.135, −0,6 %); TechFlow daba −0,5 %. Resultados electorales según la AP vía Euronews e Investing.com; el recuento sigue abierto. AMD: el alza fuera de hora llegó a ≈ 9 % y luego se moderó.",
  "estructura": {
    "h4": "Bajista. Máximos y mínimos decrecientes desde 30.007 (6 oct, récord ≈ 31.400). El lunes el futuro marcó un mínimo de 28.102 y el martes rebotó sin superar el máximo del lunes (28.891); esta madrugada vuelve a 28.135, cerca de ese mínimo. El precio sigue bajo la EMA 200 (por primera vez desde marzo, según XTB) y bajo las SMA 20 y 50. Para cambiar la estructura haría falta un cierre de 4H sobre 28.891; perder 28.102 confirmaría un nuevo mínimo decreciente.",
    "h1": "Bajista tras el gap electoral: el rebote del martes se frenó por debajo de 28.455–28.500 y el precio cae hacia el mínimo del lunes (28.102). Un cierre de 1H sobre 28.500 sería un BOS alcista de corto plazo hacia el POC de 28.697. Máx./mín. nocturnos: —."
  },
  "fuerza": [
    { "n": "AMD (fuera de hora)", "v": "≈ +4 %", "pct": 27, "dir": "up" },
    { "n": "Semis SOX (mar.)", "v": "+2,63 %", "pct": 18, "dir": "up" },
    { "n": "Tecnología (mar.)", "v": "+1,31 %", "pct": 9, "dir": "up" },
    { "n": "Comunicaciones (mar.)", "v": "+1,18 %", "pct": 8, "dir": "up" },
    { "n": "Industriales (mar.)", "v": "+0,95 %", "pct": 6, "dir": "up" },
    { "n": "Materiales (mar.)", "v": "−2,01 %", "pct": 13, "dir": "dn" },
    { "n": "Consumo básico (mar.)", "v": "−2,07 %", "pct": 14, "dir": "dn" },
    { "n": "Taiex (hoy)", "v": "−2,3 %", "pct": 15, "dir": "dn" },
    { "n": "Nikkei (hoy)", "v": "−2,85 %", "pct": 19, "dir": "dn" },
    { "n": "Skyworks (fuera de hora)", "v": "≈ −15 %", "pct": 100, "dir": "dn" }
  ],
  "fuerza_nota": "Sectores e índices: cierre del martes (Capp Notes); Asia, hoy (Euronews, ≈ 06:00 Madrid); valores, fuera de hora (TechFlow). El martes la tecnología lideró; hoy Asia castiga a la IA tras las elecciones.",
  "niveles": [
    { "n": "Resistencia 6 · SMA 20 (Investing, 2 nov)", "v": "29.305", "tipo": "r" },
    { "n": "Resistencia 5 · máx. del lunes / VAH", "v": "28.891", "tipo": "r" },
    { "n": "Resistencia 4 · zona de prueba (XTB)", "v": "28.800", "tipo": "r" },
    { "n": "Resistencia 3 · POC del lunes", "v": "28.697", "tipo": "r" },
    { "n": "Resistencia 2 · objetivo de recuperación (XTB)", "v": "28.500", "tipo": "r" },
    { "n": "Resistencia 1 · VAL del lunes", "v": "28.455", "tipo": "r" },
    { "n": "Cierre de ayer (futuro, estimado)", "v": "≈ 28.305", "tipo": "ref" },
    { "n": "Precio premarket (07:24 Madrid)", "v": "≈ 28.135", "tipo": "precio" },
    { "n": "Soporte 1 · mín. del lunes", "v": "28.102", "tipo": "s" },
    { "n": "Soporte 2 · psicológico", "v": "28.000", "tipo": "s" },
    { "n": "Soporte 3 · objetivo bajista (Investing)", "v": "27.800", "tipo": "s" },
    { "n": "Soporte 4 · extensión Fibo 127,2 % (Investing)", "v": "27.316", "tipo": "s" },
    { "n": "Soporte 5 · mínimos de julio–agosto (XTB)", "v": "27.000", "tipo": "s" }
  ],
  "niveles_nota": "Máx./mín., POC, VAH y VAL del lunes: alphainvestment (futuro NQ, 2 nov). 28.500, 28.800 y 27.000: XTB (3 nov, US100). SMA 20, 27.800 y 27.316: Investing.com (2 nov). No hay niveles nuevos publicados hoy. Cierre del martes estimado a partir de la cotización y el % de Investing. Máx./mín. del martes y nocturnos: —. RSI: —.",
  "escenarios": {
    "principal": { "titulo": "Escenario principal · presión vendedora por el resultado electoral", "dir": "dn", "texto": "Apertura con gap de ≈ −170 puntos. Si el rebote se frena bajo 28.455–28.500, el precio pierde el mínimo del lunes (28.102) y busca 28.000 y 27.800, con ADP (14:15) y el ISM de servicios (16:00) como catalizadores. AMD y los chips de centros de datos pueden amortiguar la caída.", "gatillo": "Gatillo: rechazo en 28.455–28.500 y cierre de 15 min bajo 28.100 tras la apertura cash (15:30)" },
    "alternativo": { "titulo": "Alternativo · AMD tira de los chips y se cubre el gap", "dir": "up", "texto": "Los resultados de AMD, Super Micro y Arista reactivan la compra de semis y el mercado asume el bloqueo político como algo ya descontado: el precio recupera 28.500 y busca el POC de 28.697 y 28.800.", "gatillo": "Gatillo: cierre de 1H sobre 28.500" },
    "invalidacion": "Invalidación: cierre de 4H sobre 28.891 anula el sesgo bajista (→ 29.305); cierre de 4H bajo 28.000 lo acelera (→ 27.800–27.316)."
  },
  "intermercado": [
    { "n": "Brent", "v": "≈ 104", "c": "plano · WTI ≈ 96,5", "dir": "" },
    { "n": "Bono 10A EE. UU.", "v": "≈ 4,94 %", "c": "4,95 % cierre mar. · 2A 4,61 %", "dir": "" },
    { "n": "Oro", "v": "3.958,5", "c": "+0,5 % hoy", "dir": "up" },
    { "n": "USD/JPY", "v": "157,63", "c": "dólar débil · EUR/USD 1,1249", "dir": "dn" },
    { "n": "VIX", "v": "20,83", "c": "−1,5 % (cierre mar.)", "dir": "up" },
    { "n": "Bitcoin", "v": "≈ 77.750", "c": "+1,4 % en 24 h", "dir": "up" }
  ],
  "globales": "Asia a la baja por la tecnología tras las elecciones: Nikkei −2,85 % (SoftBank −8 %), Taiex −2,3 %, Kospi −1,17 %, ASX −0,8 %, Shanghai −0,23 %; solo el Hang Seng sube (+0,38 %). Europa: futuros entre −0,3 % y −0,5 % (Euro Stoxx 50 −0,7 %); apertura a las 09:00. El dólar se debilita: libra 1,3460 (+0,4 %), índice del dólar ≈ 101,4. Bund a 10 años 3,35 %.",
  "agenda": [
    { "h": "Todo el día", "e": "Recuento de las elecciones de mitad de mandato (control de la Cámara pendiente)", "imp": "alto" },
    { "h": "Antes apertura", "e": "Resultados de Uber, CVS, McDonald's y Datadog", "imp": "medio" },
    { "h": "14:15", "e": "Empleo privado ADP de octubre (previo +90.000)", "imp": "medio" },
    { "h": "14:30", "e": "Plan trimestral de emisiones del Tesoro (hora: —)", "imp": "medio" },
    { "h": "15:30", "e": "Apertura de Wall Street", "imp": "medio" },
    { "h": "16:00", "e": "ISM de servicios de octubre (previo 54,9)", "imp": "alto" },
    { "h": "Tras cierre", "e": "Qualcomm, Arm y AppLovin: resultados", "imp": "alto" },
    { "h": "6 nov", "e": "Empleo de octubre (14:30): est. ≈ +59.000–65.000, paro 4,2 %", "imp": "alto" },
    { "h": "8–9 dic", "e": "Próximo FOMC: el mercado da ≈ 72 % a una subida de 25 pb", "imp": "alto" }
  ],
  "resultados": "Antes de la apertura: Uber, CVS Health, McDonald's y Datadog. Después del cierre: Qualcomm, Arm y AppLovin. Ayer tras el cierre: AMD (≈ +4 % a +7 %), Super Micro (≈ +9 %), Arista (≈ +12 %), Block (al alza) y Skyworks (≈ −15 %).",
  "pesados": [
    { "t": "NVDA", "v": "+2,29 % (mar.)", "dir": "up" },
    { "t": "AAPL", "v": "−1,90 % (mar.)", "dir": "dn" },
    { "t": "MSFT", "v": "+2,74 % (mar.) · cede fuera de hora", "dir": "up" },
    { "t": "AMZN", "v": "+2,06 % (mar.) · cede fuera de hora", "dir": "up" },
    { "t": "META", "v": "+2,36 % (mar.)", "dir": "up" },
    { "t": "GOOGL", "v": "+0,37 % (mar.)", "dir": "up" },
    { "t": "TSLA", "v": "−1,32 % (mar.)", "dir": "dn" },
    { "t": "AVGO", "v": "+3,07 % (mar.)", "dir": "up" }
  ],
  "pesados_nota": "A esta hora no hay premarket publicado de los pesos pesados: se muestran los cierres del martes (Capp Notes e Investing.com). TechFlow indica que Microsoft y Amazon ceden fuera de hora (sin %). Semis: SOX +2,63 % el martes; fuera de hora AMD ≈ +4 %, Super Micro ≈ +9 %, Skyworks ≈ −15 %.",
  "aviso_horario": "",
  "fuentes": [
    { "n": "Capp Notes (cierre del martes, sectores y fuera de hora)", "url": "https://cappnotes.substack.com/p/closing-look-tuesday-november-3-2026" },
    { "n": "Investing.com (futuros, elecciones y AMD)", "url": "https://www.investing.com/news/stock-market-news/us-stock-futures-steady-with-midterms-in-focus-amd-rallies-on-strong-earnings-4997029" },
    { "n": "Euronews (Asia, divisas y elecciones)", "url": "https://www.euronews.com/2026/11/04/asian-stocks-and-dollar-fall-as-democrats-gain-ground-in-us-midterms" },
    { "n": "TechFlow (AMD, Super Micro, Arista y agenda)", "url": "https://www.techflowpost.com/en-US/article/35085" },
    { "n": "alphainvestment (niveles del futuro NQ, 2 nov)", "url": "https://github.com/alphainvestment/Nasdaq/releases/tag/nasdaq-2026-11-02" },
    { "n": "XTB (corrección del Nasdaq 100 y niveles)", "url": "https://xtb.com/cl/analisis-y-noticias/analisis-de-mercado/grafico-del-dia-el-nasdaq-100-entra-en-fase-de-correccion" },
    { "n": "Investing.com (niveles técnicos del futuro NQ, 2 nov)", "url": "https://es.investing.com/news/stock-market-news/futuros-del-nasdaq-100-en-bandera-bajista-niveles-en-vivo-93CH-3904436" }
  ]
};
