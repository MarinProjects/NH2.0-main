const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const { createDynamicallyTrackedSearchParams } = require("next/dist/client/components/search-params");


//const PensionsDaten = require("pensionsDaten");
  // Define the schema for ehegattenDaten
const ehegattenSchema = new mongoose.Schema({
    name: { type: String, default: null },
    geburtsdatum: { type: Date, default: null },
    prozentsatzWitwenWitwerrente: { type: Number, default: null }
  });

// Define the schema for pensionsData
const pensionsDatenSchema = new mongoose.Schema({
    ratierlicherAnspruch: { type: Number, default: null },
    prozentsatzTeiluebertragung: { type: Number, default: null },
    pensionsfaehigeMonatsgehaltVA: { type: Number, default: null },
    sozVersPflJahresgehaltVA: { type: Number, default: null },
    ruhegeldfaehigesDurchschnittsgehalt: { type: Number, default: null },
    durchschnittsgehaltNachSozialplan: { type: Number, default: null },
    teilzeitgrad: { type: Number, default: null },
    sozVersFreieJahreAb20: { type: Number, default: null },
    schwerbehindert: { type: String, default: null },
    anzahlKinder: { type: Number, default: null },
    steuerklasse: { type: String, default: null },
    bemerkung: { type: String, default: null }
});

const rentenErstberechnungTeil1Schema = new mongoose.Schema({
    pensionsfaehigesMonatsgehalt: { type: Number, default: null },
    sozVersPflJahresgehaltRB: { type: Number, default: null },
    ruhegeldfaehigesDurchschnittsgehalt: { type: Number, default: null },
    durchschnittsgehaltNachSozialplan: { type: Number, default: null },
    teilzeitgrad: { type: Number, default: null },
    sozVersFreieJahreAb20: { type: Number, default: null },
    schwerbehindert: {type: String, default: null},
    versorgungsausgleichDurchgefuehrt: {type: String, default: null},
    entgeltpunkte: { type: Number, default: null },
    zugangsfaktor: { type: Number, default: null },
    rentenartfaktor: { type: Number, default: null },
    teilrentenfaktor: { type: Number, default: null },
  });

  const rentenErstberechnungTeil2Schema = new mongoose.Schema({
    gesamtversorgung: { type: Number, default: null },
    gesetzlicheSVRente: { type: Number, default: null },
    renteAusBefrLebensvers: { type: Number, default: null },
    andereAnzurechnRente: { type: Number, default: null },
    abschlag: { type: Number, default: null },
    zusatzrente: { type: Number, default: null },
    ratierlicherAnspruch: { type: Number, default: null },
    anteil: { type: Number, default: null },
    pension: { type: Number, default: null },
    ausgleich: { type: Number, default: null },
    betrRente: { type: Number, default: null },
    anpassungsschluessel: { type: Number, default: null }, // float or integer
  });

const datenBzglDerLaufendenRenteSchema = new mongoose.Schema({
    gueltigVon: { type: Date, default: null },
    gueltigBis: { type: Date, default: null },
    eingabedatum: { type: Date, default: null },
    gesamtversorgung: { type: Number, default: null },
    andereAnzurechnendeRente: { type: Number, default: null },
    andereAnzurechnendeRenteName: { type: String, default: null },
    gesetzlicheSVRente: { type: Number, default: null },
    renteAusBefrLebensvers: { type: Number, default: null },
    zusatzrente: { type: Number, default: null },
    zusatzrenteName: { type: String, default: null },
    pension: { type: Number, default: null },
    ausgleich: { type: Number, default: null },
    betrRente: { type: Number, default: null },
    bezugsart: { type: Number, default: null }, // float or integer
    weitereRenteUnterPersNr: { type: Number, default: null },
    anzahlKinder: { type: Number, default: null },
    entgeltpunkte: { type: Number, default: null },
    steuerklasse: { type: String, default: null },
    zugangsfaktor: { type: Number, default: null },
    krankenkassenkennziffer: { type: Number, default: null },
    beitragFuerKrankenvers: { type: Number, default: null },
    rentenartfaktor: { type: Number, default: null },
    teilrentenfaktor: { type: Number, default: null },
    anpassungsschluessel: { type: Number, default: null },
  });

const personaldatenZumVerbliebenenAngehoerigenSchema = new mongoose.Schema({
    name: { type: String, default: null },
    geburtsdatum: { type: Date, default: null },
    prozentsatz: { type: Number, default: null },
  });

const personenDatenSchema = new mongoose.Schema({
    personalnummer: Number,
    aktuelleStatusgruppe: {type: String, default: null},
    alteStatusgruppe: { type: String, default: null },
    name: { type: String, default: null },
    adresse: { type: String, default: null },
    geschlecht: { type: String, default: null },
    familienstand: { type: String, default: null },
    geburtsdatum: { type: Date, default: null },
    geheiratetAm: { type: Date, default: null },
    gesellschaft: { type: String,  default: null },
    versorgungsordnung: { type: Number, default: null },
    arbVerhRentTr: { type: Number, default: null },
    unternehmenseintritt: { type: Date, default: null },
    unternehmensaustritt: { type: Date, default: null },
    ruhegeldfaehigAb: { type: Date, default: null },
    rentenbeginn: { type: Date, default: null },
    zusagedatum: { type: Date, default: null },
    verstorbenAm: { type: Date, default: null },
    bemerkung: { type: String, default: null },
    pensionsDaten: [pensionsDatenSchema],
    ehegattenDaten: [ehegattenSchema],
    rentenErstberechnungTeil1Daten: [rentenErstberechnungTeil1Schema],
    rentenErstberechnungTeil2Daten: [rentenErstberechnungTeil2Schema],
    datenbzglderlaufendenRente: [datenBzglDerLaufendenRenteSchema],
    personaldatenangehoeriger: [personaldatenZumVerbliebenenAngehoerigenSchema]
  });



  personenDatenSchema.plugin(uniqueValidator);


  const Person = module.exports = mongoose.model("Person", personenDatenSchema);



