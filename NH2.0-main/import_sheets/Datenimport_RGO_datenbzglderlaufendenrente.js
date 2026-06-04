const axios = require("axios");

const API_BASE_URL = "http://localhost:4000/api";

const dataToInsert = [
  {
    personalnummer: 976050,
    datenbzglderlaufendenRente: {
      gueltigVon: new Date("2026-01-01"),
      gueltigBis: new Date("2026-06-30"),
      eingabedatum: new Date("2026-01-06"),
      gesamtversorgung: 4111.0,
      andereAnzurechnendeRente: 0.0,
      andereAnzurechnendeRenteName: null,
      gesetzlicheSVRente: 370.37,
      renteAusBefrLebensvers: 0.0,
      zusatzrente: 0.0,
      zusatzrenteName: null,
      pension: 3823.11,
      ausgleich: 0.0,
      betrRente: 1541.51,
      bezugsart: 182,
      weitereRenteUnterPersNr: 0,
      anzahlKinder: 0,
      entgeltpunkte: 0.0,
      steuerklasse: "3",
      zugangsfaktor: 0.0,
      krankenkassenkennziffer: 470,
      beitragFuerKrankenvers: 0.0,
      rentenartfaktor: 0.0,
      teilrentenfaktor: 0.0,
      anpassungsschluessel: 791000
    }
  },

  {
  personalnummer: 125104,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 1589.0,
    andereAnzurechnendeRente: 0.0,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 991.02,
    renteAusBefrLebensvers: 0.0,
    zusatzrente: 0.0,
    zusatzrenteName: null,
    pension: 318.31,
    ausgleich: 0.0,
    betrRente: 202.72,
    bezugsart: 180,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0,
    steuerklasse: "6",
    zugangsfaktor: 0.0,
    krankenkassenkennziffer: 472,
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0,
    teilrentenfaktor: 0.0,
    anpassungsschluessel: 791000
  }
},
];

async function importDatenBzglDerLaufendenRente() {
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
        `${API_BASE_URL}/person/${person._id}/datenbzglderlaufendenrente`,
        item.datenbzglderlaufendenRente
      );

      erfolgreich++;
      console.log(`✔️ Import erfolgreich für Personalnummer ${item.personalnummer}`);
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

importDatenBzglDerLaufendenRente();