const axios = require("axios");

const API_BASE_URL = "http://localhost:4000/api";

const dataToInsert = [
  {
    personalnummer: 976050,
    rentenErstberechnungTeil2: {
      gesamtversorgung: 4214.48,
      gesetzlicheSVRente: 391.37,
      renteAusBefrLebensvers: 0.0,
      andereAnzurechnendeRente: 0.0,
      abschlag: 0.0,
      zusatzrente: 0.0,
      ratierlicherAnspruch: 41.21,
      anteil: 100.0,
      pension: 3823.11,
      ausgleich: 0.0,
      betrRente: 1575.5,
      anpassungsschluessel: 79
    }
  },

  {
  personalnummer: 125104,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1795.78,
    gesetzlicheSVRente: 1173.21,
    renteAusBefrLebensvers: 0.0,
    andereAnzurechnendeRente: 0.0,
    abschlag: 0.0,
    zusatzrente: 0.0,
    ratierlicherAnspruch: 33.90,
    anteil: 100.0,
    pension: 622.57,
    ausgleich: 0.0,
    betrRente: 211.05,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 136192,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 2801.87,
    gesetzlicheSVRente: 1753.40,
    renteAusBefrLebensvers: 0.0,
    andereAnzurechnendeRente: 0.0,
    abschlag: 4.33,
    zusatzrente: 0.0,
    ratierlicherAnspruch: 40.00,
    anteil: 100.0,
    pension: 0.0,
    ausgleich: 0.0,
    betrRente: 401.23,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 500443,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 3842.16,
    gesetzlicheSVRente: 1977.91,
    renteAusBefrLebensvers: 0.0,
    andereAnzurechnendeRente: 0.0,
    abschlag: 0.0,
    zusatzrente: 0.0,
    ratierlicherAnspruch: 49.48,
    anteil: 100.0,
    pension: 0.0,
    ausgleich: 0.0,
    betrRente: 922.43,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 321679,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 3854.60,
    gesetzlicheSVRente: 2067.72,
    renteAusBefrLebensvers: 0.0,
    andereAnzurechnendeRente: 0.0,
    abschlag: 0.0,
    zusatzrente: 0.0,
    ratierlicherAnspruch: 0.0,
    anteil: 0.0,
    pension: 0.0,
    ausgleich: 0.0,
    betrRente: 1786.88,
    anpassungsschluessel: 73
  }
},

{
  personalnummer: 322008,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1775.19,
    gesetzlicheSVRente: 1195.69,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 30.67,
    anteil: 100.00,
    pension: 579.50,
    ausgleich: 0.00,
    betrRente: 177.73,
    anpassungsschluessel: 790000
  }
},

{
  personalnummer: 282442,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 0.00,
    gesetzlicheSVRente: 0.00,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 32.16,
    anteil: 100.00,
    pension: 635.53,
    ausgleich: 0.00,
    betrRente: 204.39,
    anpassungsschluessel: 76
  }
},

{
  personalnummer: 500448,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 2700.20,
    gesetzlicheSVRente: 1589.64,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 32.31,
    anteil: 100.00,
    pension: 1110.56,
    ausgleich: 0.00,
    betrRente: 358.82,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 500554,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 3543.25,
    gesetzlicheSVRente: 394.22,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 34.80,
    anteil: 100.00,
    pension: 3149.03,
    ausgleich: 0.00,
    betrRente: 1095.86,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 131953,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 3180.83,
    gesetzlicheSVRente: 1576.99,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 40.50,
    anteil: 100.00,
    pension: 1603.84,
    ausgleich: 0.00,
    betrRente: 649.56,
    anpassungsschluessel: 790000
  }
},

{
  personalnummer: 500446,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 0.00,
    gesetzlicheSVRente: 0.00,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 9520.70,
    anpassungsschluessel: 72
  }
},

{
  personalnummer: 254144,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 2886.65,
    gesetzlicheSVRente: 1633.36,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 39.30,
    anteil: 100.00,
    pension: 1253.29,
    ausgleich: 0.00,
    betrRente: 492.54,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 403406,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1073.70,
    gesetzlicheSVRente: 1094.10,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 100.00,
    anpassungsschluessel: 73
  }
},

{
  personalnummer: 258095,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 577.09,
    gesetzlicheSVRente: 877.13,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 42.00,
    anteil: 100.00,
    pension: 230.00,
    ausgleich: 0.00,
    betrRente: 96.60,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 283358,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1742.70,
    gesetzlicheSVRente: 1370.34,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 4.33,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 34.98,
    anteil: 100.00,
    pension: 356.24,
    ausgleich: 0.00,
    betrRente: 124.60,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 280065,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 0.00,
    gesetzlicheSVRente: 0.00,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 2.23,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 50.29,
    anteil: 100.00,
    pension: 3384.38,
    ausgleich: 0.00,
    betrRente: 1702.00,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 500569,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 2105.00,
    gesetzlicheSVRente: 853.19,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 42.30,
    anteil: 100.00,
    pension: 1251.81,
    ausgleich: 0.00,
    betrRente: 529.52,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 500279,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 2629.20,
    gesetzlicheSVRente: 1648.90,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 980.30,
    anpassungsschluessel: 73
  }
},

{
  personalnummer: 500503,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1472.71,
    gesetzlicheSVRente: 500.34,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 2.23,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 31.60,
    anteil: 100.00,
    pension: 950.68,
    ausgleich: 0.00,
    betrRente: 300.42,
    anpassungsschluessel: 79,
    bemerkung: "Telefon: 02306-80031"
  }
},

{
  personalnummer: 500319,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 8058.68,
    gesetzlicheSVRente: 231.01,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 7827.67,
    anpassungsschluessel: 72
  }
},

{
  personalnummer: 500037,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1627.56,
    gesetzlicheSVRente: 1534.30,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 4.33,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 130.00,
    anpassungsschluessel: 73
    
  }
},

{
  personalnummer: 234542,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 0.00,
    gesetzlicheSVRente: 0.00,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 0.00,
    anpassungsschluessel: null
  }
},

{
  personalnummer: 230554,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1655.46,
    gesetzlicheSVRente: 1169.11,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 40.90,
    anteil: 100.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 198.92,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 232751,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1575.62,
    gesetzlicheSVRente: 823.31,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 4.33,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 30.50,
    anteil: 100.00,
    pension: 719.74,
    ausgleich: 0.00,
    betrRente: 219.52,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 255240,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1124.73,
    gesetzlicheSVRente: 807.86,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 32.80,
    anteil: 100.00,
    pension: 316.87,
    ausgleich: 0.00,
    betrRente: 103.93,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 225208,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1556.60,
    gesetzlicheSVRente: 871.34,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 31.78,
    anteil: 100.00,
    pension: 685.26,
    ausgleich: 0.00,
    betrRente: 217.78,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 253104,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 703.52,
    gesetzlicheSVRente: 477.35,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 29.86,
    anteil: 100.00,
    pension: 226.17,
    ausgleich: 0.00,
    betrRente: 67.53,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 253096,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1632.34,
    gesetzlicheSVRente: 973.37,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 37.70,
    anteil: 100.00,
    pension: 658.97,
    ausgleich: 0.00,
    betrRente: 248.43,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 257303,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 594.40,
    gesetzlicheSVRente: 577.26,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 40.40,
    anteil: 100.00,
    pension: 51.87,
    ausgleich: 0.00,
    betrRente: 20.96,
    anpassungsschluessel: 79
    
  }
},

{
  personalnummer: 253450,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 3971.06,
    gesetzlicheSVRente: 1659.07,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 31.00,
    anteil: 100.00,
    pension: 2311.99,
    ausgleich: 0.00,
    betrRente: 716.72,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 253419,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 2892.48,
    gesetzlicheSVRente: 1448.22,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 47.00,
    anteil: 100.00,
    pension: 1444.26,
    ausgleich: 0.00,
    betrRente: 678.80,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 500304,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1881.89,
    gesetzlicheSVRente: 1460.00,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 4.33,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 403.62,
    anpassungsschluessel: 73
  }
},

{
  personalnummer: 266130,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1783.64,
    gesetzlicheSVRente: 1363.30,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 420.31,
    anpassungsschluessel: 73
  }
},

{
  personalnummer: 401641,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1373.47,
    gesetzlicheSVRente: 1482.80,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 4.33,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 130.00,
    anpassungsschluessel: 73
  }
},

{
  personalnummer: 252279,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 920.66,
    gesetzlicheSVRente: 703.14,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 4.33,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 27.00,
    anteil: 100.00,
    pension: 208.10,
    ausgleich: 0.00,
    betrRente: 56.19,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 403762,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1515.61,
    gesetzlicheSVRente: 1106.30,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 410.00,
    anpassungsschluessel: 73
  }
},

{
  personalnummer: 320978,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 4749.14,
    gesetzlicheSVRente: 495.73,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 39.60,
    anteil: 78.05,
    pension: 4253.41,
    ausgleich: 0.00,
    betrRente: 1314.64,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 124859,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 2167.00,
    gesetzlicheSVRente: 1231.01,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 935.99,
    anpassungsschluessel: 73
  }
},

{
  personalnummer: 152371,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 389.29,
    gesetzlicheSVRente: 371.85,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 28.88,
    anteil: 100.00,
    pension: 36.56,
    ausgleich: 0.00,
    betrRente: 10.56,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 157339,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 950.29,
    gesetzlicheSVRente: 721.30,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 228.48,
    anpassungsschluessel: 73
  }
},

{
  personalnummer: 500356,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 879.42,
    gesetzlicheSVRente: 475.38,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 29.70,
    anteil: 100.00,
    pension: 404.04,
    ausgleich: 0.00,
    betrRente: 120.00,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 404894,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1607.98,
    gesetzlicheSVRente: 1550.40,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 130.00,
    anpassungsschluessel: 73
  }
},

{
  personalnummer: 175547,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1465.24,
    gesetzlicheSVRente: 766.91,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 49.17,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 338.94,
    anpassungsschluessel: 790000
  }
},

{
  personalnummer: 500343,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 4226.14,
    gesetzlicheSVRente: 1599.50,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 2626.64,
    anpassungsschluessel: 730000
  }
},

{
  personalnummer: 186643,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1308.43,
    gesetzlicheSVRente: 828.30,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 0.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 481.00,
    anpassungsschluessel: 730000
  }
},

{
  personalnummer: 404188,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 2851.80,
    gesetzlicheSVRente: 1853.38,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 52.50,
    anteil: 100.00,
    pension: 998.42,
    ausgleich: 0.00,
    betrRente: 524.17,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 500438,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1882.45,
    gesetzlicheSVRente: 1120.45,
    renteAusBefrLebensvers: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 36.70,
    anteil: 100.00,
    pension: 762.00,
    ausgleich: 0.00,
    betrRente: 279.65,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 105999,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 2480.00,
    gesetzlicheSVRente: 406.80,
    renteAusBefrLebensversich: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 100.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 2073.20,
    anpassungsschluessel: 73
  }
},

{
  personalnummer: 122648,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 2689.62,
    gesetzlicheSVRente: 1053.96,
    renteAusBefrLebensversich: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 4.33,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 36.28,
    anteil: 100.00,
    pension: 1564.83,
    ausgleich: 0.00,
    betrRente: 567.72,
    anpassungsschluessel: 791004
  }
},

{
  personalnummer: 976051,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 343.20,
    gesetzlicheSVRente: 0.00,
    renteAusBefrLebensversich: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 39.30,
    anteil: 100.00,
    pension: 134.84,
    ausgleich: 0.00,
    betrRente: 134.84,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 500433,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 8620.00,
    gesetzlicheSVRente: 204.95,
    renteAusBefrLebensversich: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 0.00,
    anteil: 100.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 8415.05,
    anpassungsschluessel: 72
  }
},

{
  personalnummer: 102392,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 2847.61,
    gesetzlicheSVRente: 864.70,
    renteAusBefrLebensversich: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 4.33,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 29.00,
    anteil: 100.00,
    pension: 1897.05,
    ausgleich: 0.00,
    betrRente: 550.14,
    anpassungsschluessel: 79
  }
},

{
  personalnummer: 976046,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 0.00,
    gesetzlicheSVRente: 0.00,
    renteAusBefrLebensversich: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 33.55,
    anteil: 100.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 290.49,
    anpassungsschluessel: 76
  }
},

{
  personalnummer: 976032,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 4259.25,
    gesetzlicheSVRente: 1708.19,
    renteAusBefrLebensversich: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 42.70,
    anteil: 100.00,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 1089.17,
    anpassungsschluessel: 70
  }
},


{
  personalnummer: 112888,
  rentenErstberechnungTeil2: {
    gesamtversorgung: 1148.41,
    gesetzlicheSVRente: 742.47,
    renteAusBefrLebensversich: 0.00,
    andereAnzurechnendeRente: 0.00,
    abschlag: 0.00,
    zusatzrente: 0.00,
    ratierlicherAnspruch: 27.71,
    anteil: 100.00,
    pension: 405.94,
    ausgleich: 0.00,
    betriebsrente: 112.49,
    anpassungsschluessel: 79
  }
}
















];

async function importRentenErstberechnungTeil2() {
  let erfolgreich = 0;
  let nichtGefunden = 0;
  let fehler = 0;

  for (const item of dataToInsert) {
    try {
      const personResponse = await axios.get(
        `${API_BASE_URL}/persons/${item.personalnummer}`
      );

      const person = personResponse.data;

      await axios.post(
        `${API_BASE_URL}/person/${person._id}/rentenerstberechnungteil2`,
        item.rentenErstberechnungTeil2
      );

      erfolgreich++;

      console.log(
        `✔️ Rentenerstberechnung Teil 2 importiert für Personalnummer ${item.personalnummer}`
      );
    } catch (error) {
      if (error.response?.status === 404) {
        nichtGefunden++;
        console.error(`❌ Person nicht gefunden: ${item.personalnummer}`);
      } else {
        fehler++;
        console.error(`❌ Fehler bei Personalnummer ${item.personalnummer}:`);
        console.error(error.response?.data || error.message);
      }
    }
  }

  console.log("\n✅ Import finished.");
  console.log(`Erfolgreich importiert: ${erfolgreich}`);
  console.log(`Nicht gefunden: ${nichtGefunden}`);
  console.log(`Fehler: ${fehler}`);
  console.log(`Gesamt verarbeitet: ${dataToInsert.length}`);
}

importRentenErstberechnungTeil2();