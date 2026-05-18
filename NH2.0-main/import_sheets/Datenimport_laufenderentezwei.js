const axios = require("axios");

const API_BASE_URL = "http://localhost:4000/api";

const datenBzglDerLaufendenRenteImport = [


    {
    personalnummer: 148742,
    datenBzglDerLaufendenRente: {
      gueltigVon: new Date("2025-10-01"),
      gueltigBis: null,
      eingabedatum: new Date("2025-10-07"),
      gesamtversorgung: 0.00,
      andereAnzurechnendeRente: 0.00,
      andereAnzurechnendeRenteName: null,
      gesetzlicheSVRente: 0.00,
      renteAusBefrLebensvers: 0.00,
      zusatzrente: 0.00,
      zusatzrenteName: null,
      pension: 468.89,
      ausgleich: 0.00,
      betrRente: 157.27,
      bezugsart: 175,
      weitereRenteUnterPersNr: 0,
      anzahlKinder: 0,
      entgeltpunkte: 0.0000,
      steuerklasse: "0",
      zugangsfaktor: 0.000,
      krankenkassenkennziffer: "661?",
      beitragFuerKrankenvers: 0.0,
      rentenartfaktor: 0.0000,
      teilrentenfaktor: 0.0000,
      anpassungsschluessel: 760000
    }}




];

async function importDatenBzglDerLaufendenRente() {
  for (const item of datenBzglDerLaufendenRenteImport) {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/person/personalnummer/${item.personalnummer}/datenBzglDerLaufendenRente`,
        item.datenBzglDerLaufendenRente
      );

      console.log(`Import erfolgreich für Personalnummer ${item.personalnummer}`);
    } catch (error) {
      console.error(`Fehler bei Personalnummer ${item.personalnummer}:`);
      console.error(error.response?.data || error.message);
    }
  }
}

importDatenBzglDerLaufendenRente();