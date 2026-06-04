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