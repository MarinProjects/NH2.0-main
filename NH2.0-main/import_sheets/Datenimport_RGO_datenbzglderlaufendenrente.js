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

{
  personalnummer: 136192,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 2924.0,
    andereAnzurechnendeRente: 0.0,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 1677.73,
    renteAusBefrLebensvers: 0.0,
    zusatzrente: 0.0,
    zusatzrenteName: null,
    pension: 0.0,
    ausgleich: 0.0,
    betrRente: 476.92,
    bezugsart: 180,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0,
    steuerklasse: 3,
    zugangsfaktor: 0.0,
    krankenkassenkennziffer: 2521,
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0,
    teilrentenfaktor: 0.0,
    anpassungsschluessel: 791004
  }
},

{
  personalnummer: 500443,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 2708.0,
    andereAnzurechnendeRente: 0.0,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 1222.99,
    renteAusBefrLebensvers: 0.0,
    zusatzrente: 0.0,
    zusatzrenteName: null,
    pension: 1189.68,
    ausgleich: 0.0,
    betrRente: 734.78,
    bezugsart: 182,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0,
    steuerklasse: 3,
    zugangsfaktor: 0.0,
    krankenkassenkennziffer: 8492,
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0,
    teilrentenfaktor: 0.0,
    anpassungsschluessel: 791000
  }
},

{
  personalnummer: 321679,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 5204.0,
    andereAnzurechnendeRente: 0.0,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 2379.40,
    renteAusBefrLebensvers: 0.0,
    zusatzrente: 0.0,
    zusatzrenteName: null,
    pension: 0.0,
    ausgleich: 0.0,
    betrRente: 2824.60,
    bezugsart: 180,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 58.3325,
    steuerklasse: 1,
    zugangsfaktor: 1.0,
    krankenkassenkennziffer: 471,
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 1.0,
    teilrentenfaktor: 0.0,
    anpassungsschluessel: 731000
  }
},

{
  personalnummer: 322008,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 1649.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 1028.07,
    renteAusBefrLebensvers: 0.00,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 296.29,
    ausgleich: 0.00,
    betrRente: 190.44,
    bezugsart: 180,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0000,
    steuerklasse: 6,
    zugangsfaktor: 0.000,
    krankenkassenkennziffer: 472,
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000,
    anpassungsschluessel: 791000
  }
},

{
  personalnummer: 282442,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 2406.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 1476.96,
    renteAusBefrLebensvers: 0.00,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 635.53,
    ausgleich: 0.00,
    betrRente: 298.78,
    bezugsart: 180,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0000,
    steuerklasse: 3,
    zugangsfaktor: 0.000,
    krankenkassenkennziffer: 1510,
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000,
    anpassungsschluessel: 791000
  }
},

{
  personalnummer: 500448,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 1481.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 816.50,
    renteAusBefrLebensvers: 0.00,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 546.13,
    ausgleich: 0.00,
    betrRente: 214.70,
    bezugsart: 182,
    weitereRenteUnterPersNr: 280396,
    anzahlKinder: 0,
    entgeltpunkte: 0.0000,
    steuerklasse: 6,
    zugangsfaktor: 0.000,
    krankenkassenkennziffer: "PKV",
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000,
    anpassungsschluessel: 791000
  }
},

{
  personalnummer: 500554,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 3458.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 373.10,
    renteAusBefrLebensvers: 0.00,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 1889.42,
    ausgleich: 0.00,
    betrRente: 1073.55,
    bezugsart: 182,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0000,
    steuerklasse: 6,
    zugangsfaktor: 0.000,
    krankenkassenkennziffer: "5300",
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000,
    anpassungsschluessel: 791000
  }
},

{
  personalnummer: 131953,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 2942.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 1355.95,
    renteAusBefrLebensvers: 0.00,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 1153.85,
    ausgleich: 0.00,
    betrRente: 642.35,
    bezugsart: 180,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0000,
    steuerklasse: 0,
    zugangsfaktor: 0.000,
    krankenkassenkennziffer: "Ausl",
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000,
    anpassungsschluessel: 791000
  }
},

{
  personalnummer: 500446,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2025-07-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-02-27"),
    gesamtversorgung: 4439.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 0.00,
    renteAusBefrLebensvers: 0.00,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 4439.00,
    bezugsart: 182,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0000,
    steuerklasse: 3,
    zugangsfaktor: 0.000,
    krankenkassenkennziffer: 8492,
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000,
    anpassungsschluessel: 720000
  }
},

{
  personalnummer: 254144,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 2544.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 1379.68,
    renteAusBefrLebensvers: 0.00,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 640.80,
    ausgleich: 0.00,
    betrRente: 457.58,
    bezugsart: 180,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0000,
    steuerklasse: 5,
    zugangsfaktor: 0.000,
    krankenkassenkennziffer: 8491,
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000,
    anpassungsschluessel: 731000
  }
},

{
  personalnummer: 403406,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 1792.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 1601.96,
    renteAusBefrLebensvers: 0.00,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 196.00,
    bezugsart: 182,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 65.4561,
    steuerklasse: 3,
    zugangsfaktor: 1.000,
    krankenkassenkennziffer: 2442,
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 1.0000,
    teilrentenfaktor: 0.0000,
    anpassungsschluessel: 731000
  }
},

{
  personalnummer: 258095,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 569.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 773.87,
    renteAusBefrLebensvers: 0.00,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 28.18,
    ausgleich: 0.00,
    betrRente: 82.32,
    bezugsart: 180,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0000,
    steuerklasse: 3,
    zugangsfaktor: 0.000,
    krankenkassenkennziffer: 2441,
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000,
    anpassungsschluessel: 791000
  }
},

{
  personalnummer: 283358,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 1683.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 1208.99,
    renteAusBefrLebensvers: 0.00,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 255.87,
    ausgleich: 0.00,
    betrRente: 158.63,
    bezugsart: 180,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0000,
    steuerklasse: 6,
    zugangsfaktor: 0.000,
    krankenkassenkennziffer: 5302,
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000,
    anpassungsschluessel: 791004
  }
},


{
  personalnummer: 280065,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 4682.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 1583.57,
    renteAusBefrLebensvers: 0.00,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 1730.41,
    ausgleich: 0.00,
    betrRente: 1523.46,
    bezugsart: 180,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0000,
    steuerklasse: 1,
    zugangsfaktor: 0.000,
    krankenkassenkennziffer: "PKV",
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000,
    anpassungsschluessel: 791002
  }
},

{
  personalnummer: 500569,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 2340.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 925.58,
    renteAusBefrLebensvers: 0.00,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 1251.81,
    ausgleich: 0.00,
    betrRente: 598.30,
    bezugsart: 182,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0000,
    steuerklasse: 5,
    zugangsfaktor: 0.000,
    krankenkassenkennziffer: 1422,
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000,
    anpassungsschluessel: 791000
  }
},

{
  personalnummer: 500279,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 2533.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 1712.95,
    renteAusBefrLebensvers: 0.00,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 820.05,
    bezugsart: 182,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0000,
    steuerklasse: 3,
    zugangsfaktor: 0.000,
    krankenkassenkennziffer: 8491,
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000,
    anpassungsschluessel: 731000
  }
},

{
  personalnummer: 500503,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 1481.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 483.76,
    renteAusBefrLebensvers: 0.00,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 783.79,
    ausgleich: 0.00,
    betrRente: 308.10,
    bezugsart: 182,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0000,
    steuerklasse: 3,
    zugangsfaktor: 0.000,
    krankenkassenkennziffer: 1512,
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000,
    anpassungsschluessel: 791002
  }
},

{
  personalnummer: 500319,
  datenbzglderlaufendenRente: {
    gueltigVon: new Date("2026-01-01"),
    gueltigBis: new Date("2026-06-30"),
    eingabedatum: new Date("2026-01-06"),
    gesamtversorgung: 6448.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    gesetzlicheSVRente: 0.00,
    renteAusBefrLebensvers: 0.00,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 0.00,
    ausgleich: 0.00,
    betrRente: 6448.00,
    bezugsart: 182,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    entgeltpunkte: 0.0000,
    steuerklasse: 1,
    zugangsfaktor: 0.000,
    krankenkassenkennziffer: 8491,
    beitragFuerKrankenvers: 0.0,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000,
    anpassungsschluessel: 730000
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