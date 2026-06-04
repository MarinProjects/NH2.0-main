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
    anpassungsschluessel: 790000,
    bemerkung: "Telefon: 0038-1112132937, Sommer Montenegro, Winter Serbien"
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
    anpassungsschluessel: 72,
    bemerkung: "0211-325497 Co. Canyamel Via de la Golondrina 6, E07580 Capdepera"
  }
},




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