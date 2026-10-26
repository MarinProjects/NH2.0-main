const axios = require('axios');
const dataToInsert = [
    
    {
  "personalnummer": 500352,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Gertrud Blaszczyk",
  "adresse": "Im Schlafläger 6, 68519 Viernheim",
  "geschlecht": "weiblich",
  "familienstand": "verw.",
  "geburtsdatum": new Date("1934-06-17"),
  "geheiratetAm": new Date("1955-02-12"),
  "gesellschaft": "61",
  "versorgungsordnung": 76,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1973-04-01"),
  "unternehmensaustritt": new Date("1983-12-31"),
  "ruhegeldfaehigAb": new Date("1972-02-01"),
  "rentenbeginn": new Date("1988-06-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "Telefon: 0620 44244"
}
,


{

        "personalnummer": 500359,
        "aktuelleStatusgruppe": "Hinterbliebene",
        "alteStatusgruppe": "---",
        "name": "Helga Benecke",
        "adresse": "Schulenburgring 1a, 21031 Hamburg",
        "geschlecht": "weiblich",
        "familienstand": "verw.",
        "geburtsdatum": new Date('1934-10-16'),
        "geheiratetAm": new Date('1953-08-01'),
        "gesellschaft": "81A",
        "versorgungsordnung": 73,
        "arbVerhRentTr": null,
        "unternehmenseintritt": new Date('1960-03-01'),
        "unternehmensaustritt": new Date('1984-02-29'),
        "ruhegeldfaehigAb": new Date('1959-06-01'),
        "rentenbeginn": new Date('1988-03-01'),
        "zusagedatum": null,
        "verstorbenAm": null,
        "bemerkung": "Telefon: 738 43 74 3 Kinder, 1 Neuseeland"
    },



{
  "personalnummer": 401215,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Maria Fell",
  "adresse": "c/o Betreuungsbüro Lorenz, Mühlenstr. 17, 66802 Überherrn",
  "geschlecht": "weiblich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1931-06-20"),
  "geheiratetAm": new Date("1957-05-13"),
  "gesellschaft": "41",
  "versorgungsordnung": 77,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1971-01-01"),
  "unternehmensaustritt": new Date("1984-07-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1984-08-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": ""
},



{
  "personalnummer": 976012,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Gerda Galeazzi",
  "adresse": "Mühlendamm 7, 22087 Hamburg",
  "geschlecht": "weiblich",
  "familienstand": "verw.",
  "geburtsdatum": new Date("1934-06-11"),
  "geheiratetAm": null,
  "gesellschaft": "91",
  "versorgungsordnung": 71,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1970-04-01"),
  "unternehmensaustritt": new Date("1990-12-31"),
  "ruhegeldfaehigAb": new Date("1964-02-01"),
  "rentenbeginn": new Date("1995-02-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": ""
},


{
  "personalnummer": 500510,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Ingrid Reich",
  "adresse": "c/o Herrn Olaf Reich, Finkenweg 1, 34266 Niestetal",
  "geschlecht": "weiblich",
  "familienstand": "verw.",
  "geburtsdatum": new Date("1936-10-25"),
  "geheiratetAm": new Date("1961-03-09"),
  "gesellschaft": "41",
  "versorgungsordnung": 71,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1950-10-01"),
  "unternehmensaustritt": new Date("1986-02-28"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1987-03-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": ""
},


{
  "personalnummer": 131946,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": "Teilübertragung auf Direktversicherung",
  "name": "Gerhard Lohse",
  "adresse": "Rahlstedter Straße 186e, 22143 Hamburg",
  "geschlecht": "männlich",
  "familienstand": "verh.",
  "geburtsdatum": new Date("1938-03-24"),
  "geheiratetAm": null,
  "gesellschaft": "91",
  "versorgungsordnung": 77,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1970-07-01"),
  "unternehmensaustritt": new Date("1986-12-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2000-07-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "677 65 82"
},


{
  "personalnummer": 500364,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Erna Gabel",
  "adresse": "Lilienthaler Heerstr. 59 A, 28357 Bremen",
  "geschlecht": "weiblich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1927-08-07"),
  "geheiratetAm": new Date("1951-06-20"),
  "gesellschaft": "21",
  "versorgungsordnung": 73,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1966-03-01"),
  "unternehmensaustritt": new Date("1983-03-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1983-04-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": ""
},


{
  "personalnummer": 976007,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
  "name": "Heidi Schroth",
  "adresse": "Tulpenweg 7, 76571 Gaggenau",
  "geschlecht": "weiblich",
  "familienstand": "gesch.",
  "geburtsdatum": new Date("1939-11-14"),
  "geheiratetAm": new Date("1976-10-05"),
  "gesellschaft": "81A",
  "versorgungsordnung": 79,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1964-01-01"),
  "unternehmensaustritt": new Date("1976-10-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1999-12-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "Versorgungsausgleich"
},


{
  "personalnummer": 976025,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Helga Brüggmann",
  "adresse": "c/o Dr. Th. Brüggmann, Hirtenbrink 3, 21423 Winsen/Luhe",
  "geschlecht": "weiblich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1934-09-29"),
  "geheiratetAm": new Date("1956-03-03"),
  "gesellschaft": "11",
  "versorgungsordnung": 73,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1952-08-04"),
  "unternehmensaustritt": new Date("1983-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1987-12-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": ""
},


{
  "personalnummer": 174052,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
  "name": "Ursel Anderseck",
  "adresse": "c/o Maj-Britt Anderseck, Reinsweg 5, 28844 Weyhe",
  "geschlecht": "weiblich",
  "familienstand": "ledig",
  "geburtsdatum": new Date("1936-01-15"),
  "geheiratetAm": null,
  "gesellschaft": "21",
  "versorgungsordnung": 71,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1963-11-15"),
  "unternehmensaustritt": new Date("1986-12-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1996-01-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "0421-803064"
},



{
        "personalnummer": 404165,
        "aktuelleStatusgruppe": "Hinterbliebene",
        "alteStatusgruppe": "---",
        "name": "Elisabeth Beyn",
        "adresse": "Am Feenteich 1, 22085 Hamburg",
        "geschlecht": "weiblich",
        "familienstand": "verw.",
        "geburtsdatum": new Date('1925-12-30'),
        "geheiratetAm": new Date('1959-03-26'),
        "gesellschaft": "81G",
        "versorgungsordnung": 72,
        "arbVerhRentTr": null,
        "unternehmenseintritt": new Date('1969-06-01'),
        "unternehmensaustritt": new Date('1977-06-30'),
        "ruhegeldfaehigAb": new Date('1954-03-01'),
        "rentenbeginn": new Date('1977-07-01'),
        "zusagedatum": null,
        "verstorbenAm": null,
        "bemerkung": ""
},



{
  "personalnummer": 404164,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Elisabeth Beyn",
  "adresse": "Am Feenteich 1, 22085 Hamburg",
  "geschlecht": "weiblich",
  "familienstand": "verw.",
  "geburtsdatum": new Date("1925-12-30"),
  "geheiratetAm": new Date("1959-03-26"),
  "gesellschaft": "91",
  "versorgungsordnung": 72,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1954-03-01"),
  "unternehmensaustritt": new Date("1977-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1977-07-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "Telefon: 229 95 01"
},



{
  "personalnummer": 230789,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
  "name": "Karl-Heinz Kröger",
  "adresse": "Am Hang 4, 34253 Lohfelden",
  "geschlecht": "männlich",
  "familienstand": "verheiratet",
  "geburtsdatum": new Date("1936-12-31"),
  "geheiratetAm": new Date("1965-01-18"),
  "gesellschaft": "41",
  "versorgungsordnung": 76,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1972-01-01"),
  "unternehmensaustritt": new Date("1982-12-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2002-01-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "Telefon: 0561-514932"
},


{
  "personalnummer": 976042,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Renate Kienast",
  "adresse": "Willinghusener Landstr. 33, 22885 Barsbüttel",
  "geschlecht": "weiblich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1937-03-07"),
  "geheiratetAm": new Date("1964-05-14"),
  "gesellschaft": "11",
  "versorgungsordnung": 77,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1969-03-01"),
  "unternehmensaustritt": new Date("1987-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2002-04-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": null
},



{
  "personalnummer": 500042,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Sigrid Irmler",
  "adresse": "c/o GGI GmbH Frau Alt-Günter, Eppendorfer Weg 204, 20251 Hamburg",
  "geschlecht": "weiblich",
  "familienstand": "verw.",
  "geburtsdatum": new Date("1934-05-28"),
  "geheiratetAm": new Date("1972-03-30"),
  "gesellschaft": "61",
  "versorgungsordnung": 76,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1972-10-01"),
  "unternehmensaustritt": new Date("1985-12-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1987-07-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "Dr. Katrin Stieß, Kanzlei Norton Rose Fulbright LLP"
},


{
  "personalnummer": 500376,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Christa Jürgensen",
  "adresse": "Wippen 10, 24107 Kiel",
  "geschlecht": "weiblich",
  "familienstand": "verw.",
  "geburtsdatum": new Date("1929-12-25"),
  "geheiratetAm": new Date("1956-03-22"),
  "gesellschaft": "N1",
  "versorgungsordnung": 71,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1960-08-04"),
  "unternehmensaustritt": new Date("1988-03-31"),
  "ruhegeldfaehigAb": new Date("1960-09-01"),
  "rentenbeginn": new Date("1992-05-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": null
},



{
  "personalnummer": 500096,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Elisabeth Kuhn",
  "adresse": "c/o Dagmar Wolf, Zeil 24, 65719 Hofheim",
  "geschlecht": "weiblich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1928-03-29"),
  "geheiratetAm": new Date("1951-06-09"),
  "gesellschaft": "41",
  "versorgungsordnung": 73,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1953-01-02"),
  "unternehmensaustritt": new Date("1983-03-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1983-04-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "Schwiegersohn Helmut Wolf, Telefon: 06192-6503"
},


{
  "personalnummer": 125484,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": "Frühpensionäre",
  "name": "Alice Cerwenka",
  "adresse": "Gartenstraße 15a, 22885 Barsbüttel",
  "geschlecht": "weiblich",
  "familienstand": "verw.",
  "geburtsdatum": new Date("1936-05-12"),
  "geheiratetAm": null,
  "gesellschaft": "91",
  "versorgungsordnung": 76,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1971-09-01"),
  "unternehmensaustritt": new Date("1993-09-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1996-06-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": ""
}


          ];
// Axios POST request function
// Axios POST request function
async function insertData() {
  for (let i = 0; i < dataToInsert.length; i++) {
    const person = dataToInsert[i];
    try {
      const response = await axios.post(
        "http://localhost:4000/api/person",
        person
      );
      console.log(`✔️ Inserted personalnummer ${person.personalnummer}`);
    } catch (error) {
      // Wenn der Server geantwortet hat (HTTP-Fehlercode)
      if (error.response) {
        // 400 = existiert schon (so wie du es in deiner Route gebaut hast)
        if (error.response.status === 400) {
          console.warn(
            `⚠️ personalnummer ${person.personalnummer} exists – skipped`
          );
          continue; // optional, macht nur explizit "weiter" zur nächsten Person
        }
        // Andere HTTP-Fehler
        console.error(
          `❌ HTTP ${error.response.status} for personalnummer ${person.personalnummer}:`,
          error.response.data
        );
      } else {
        // Kein Response = z.B. Netzwerkfehler / Server nicht erreichbar
        console.error(
          `❌ Network/Unknown error for personalnummer ${person.personalnummer}:`,
          error.message
        );
      }
    }
  }
  console.log("✅ Import finished.");
}

// Call the function to insert data
insertData();
