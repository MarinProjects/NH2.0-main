const axios = require("axios");

const API_BASE_URL = "http://localhost:4000/api";

const dataToInsert = [
  {
    personalnummer: 976050,
    rentenErstberechnungTeil1: {
      pensionsfaehigesMonatsgehalt: 13738.0,
      sozVersPflJahresgehaltRB: 164856.0,
      ruhegeldfaehigesDurchschnittsgehalt: 13738.0,
      durchschnittsgehaltNachSozialplan: 0.0,
      teilzeitgrad: 100.0,
      sozVersFreieJahreAb20: 16.0,
      schwerbehindert: "Nein",
      versorgungsausgleichDurchgefuehrt: "Nein",
      entgeltpunkte: 0.0,
      zugangsfaktor: 0.0,
      rentenartfaktor: 0.0,
      teilrentenfaktor: 0.0
    }
  },

  {
  personalnummer: 125104,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.0,
    sozVersPflJahresgehaltRB: 28308.0,
    ruhegeldfaehigesDurchschnittsgehalt: 2394.37,
    durchschnittsgehaltNachSozialplan: 0.0,
    teilzeitgrad: 100.0,
    sozVersFreieJahreAb20: 0.0,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0,
    zugangsfaktor: 0.0,
    rentenartfaktor: 0.0,
    teilrentenfaktor: 0.0
  }
},


];

async function importRentenErstberechnungTeil1() {
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
        `${API_BASE_URL}/person/${person._id}/rentenerstberechnungteil1`,
        item.rentenErstberechnungTeil1
      );

      erfolgreich++;

      console.log(
        `✔️ Rentenerstberechnung Teil 1 importiert für Personalnummer ${item.personalnummer}`
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

importRentenErstberechnungTeil1();