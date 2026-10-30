const axios = require("axios");

const API_BASE_URL = "http://localhost:4000/api";

const datenBzglDerLaufendenRenteImport = [

    {
  personalnummer: 60,
  datenBzglLaufendenRenten: {
    gueltigVon: new Date("2025-10-01"),
    gueltigBis: null,
    eingabedatum: new Date("2025-10-07"),
    gesamtversorgung: 0.00,
    gesetzlicheSVRente: 0.00,
    renteAusBefrLebensversich: 0.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 1649.13,
    ausgleich: 0.00,
    betriebsrente: 1206.67,
    bezugsart: 175,
    anpassungsschluessel: 760000,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    steuerklasse: 0,
    krankenkassenkennziffer: null,
    beitragFuerKrankenvers: 0.0,
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
}
  ,

{
  personalnummer: 500604,
  datenBzglLaufendenRenten: {
    gueltigVon: new Date("2025-12-01"),
    gueltigBis: null,
    eingabedatum: new Date("2026-03-12"),
    gesamtversorgung: 0.00,
    gesetzlicheSVRente: 0.00,
    renteAusBefrLebensversich: 0.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 508.18,
    ausgleich: 0.00,
    betriebsrente: 304.90,
    bezugsart: 0,
    anpassungsschluessel: 830000,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    steuerklasse: 0,
    krankenkassenkennziffer: "0477",
    beitragFuerKrankenvers: 0.0,
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 500272,
  datenBzglLaufendenRenten: {
    gueltigVon: new Date("2013-01-01"),
    gueltigBis: null,
    eingabedatum: new Date("2013-01-15"),
    gesamtversorgung: 0.00,
    gesetzlicheSVRente: 0.00,
    renteAusBefrLebensversich: 0.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 270.16,
    ausgleich: 0.00,
    betriebsrente: 270.16,
    bezugsart: 177,
    anpassungsschluessel: 0,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    steuerklasse: 0,
    krankenkassenkennziffer: null,
    beitragFuerKrankenvers: 0.0,
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 500150,
  datenBzglLaufendenRenten: {
    gueltigVon: new Date("2013-01-01"),
    gueltigBis: null,
    eingabedatum: new Date("2013-01-15"),
    gesamtversorgung: 0.00,
    gesetzlicheSVRente: 0.00,
    renteAusBefrLebensversich: 0.00,
    andereAnzurechnendeRente: 0.00,
    andereAnzurechnendeRenteName: null,
    zusatzrente: 0.00,
    zusatzrenteName: null,
    pension: 459.70,
    ausgleich: 0.00,
    betriebsrente: 459.70,
    bezugsart: 175,
    anpassungsschluessel: 830000,
    weitereRenteUnterPersNr: 0,
    anzahlKinder: 0,
    steuerklasse: 0,
    krankenkassenkennziffer: "0477",
    beitragFuerKrankenvers: 0.0,
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
}



];

async function importDatenBzglDerLaufendenRente() {
  let erfolgreichImportiert = 0;
  let fehlgeschlagen = 0;

  for (const item of datenBzglDerLaufendenRenteImport) {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/person/personalnummer/${item.personalnummer}/datenBzglDerLaufendenRente`,
        item.datenBzglDerLaufendenRente
      );

      erfolgreichImportiert++;

      console.log(`Import erfolgreich für Personalnummer ${item.personalnummer}`);
    } catch (error) {
      fehlgeschlagen++;

      console.error(`Fehler bei Personalnummer ${item.personalnummer}:`);
      console.error(error.response?.data || error.message);
    }
  }

  console.log("Import abgeschlossen.");
  console.log(`Erfolgreich importiert: ${erfolgreichImportiert}`);
  console.log(`Fehlgeschlagen: ${fehlgeschlagen}`);
  console.log(`Gesamt verarbeitet: ${datenBzglDerLaufendenRenteImport.length}`);
}

importDatenBzglDerLaufendenRente();
