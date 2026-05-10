const axios = require('axios');

const dataToInsert = [

    {
  "personalnummer": 206722,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
  "name": "Ilona Koxholt",
  "adresse": "Inselstraße 8, 40479 Düsseldorf",
  "geschlecht": "weiblich",
  "familienstand": "verheiratet",
  "geburtsdatum": new Date("1944-01-11"),
  "geheiratetAm": new Date("1966-02-25"),
  "gesellschaft": "31",
  "versorgungsordnung": 77,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1967-12-01"),
  "unternehmensaustritt": new Date("1981-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2009-02-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "02151-503959"
},

{
  "personalnummer": 500090,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Ursula Stötzer",
  "adresse": "Barlskamp 95, 22549 Hamburg",
  "geschlecht": "weiblich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1939-05-12"),
  "geheiratetAm": new Date("1967-03-23"),
  "gesellschaft": "N1",
  "versorgungsordnung": 75,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1970-10-01"),
  "unternehmensaustritt": new Date("1991-12-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1996-10-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": null
},

{
  "personalnummer": 500458,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Ingrid Schneider",
  "adresse": "Lesumer Heerstr. 101, 28717 Bremen",
  "geschlecht": "weiblich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1939-02-21"),
  "geheiratetAm": new Date("1962-12-19"),
  "gesellschaft": "91",
  "versorgungsordnung": 77,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1973-10-01"),
  "unternehmensaustritt": new Date("1984-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1986-02-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "Telefon: 0421-622212"
},

{
  "personalnummer": 976047,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Doris Antoni",
  "adresse": "Husumweg 1, 22929 Ahrensburg",
  "geschlecht": "weiblich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1938-04-29"),
  "geheiratetAm": new Date("1963-08-10"),
  "gesellschaft": "81A",
  "versorgungsordnung": 79,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1970-01-01"),
  "unternehmensaustritt": new Date("1980-02-29"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2003-11-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "Telefon: 040/519 06613"
},

{
  "personalnummer": 976067,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Holger Blumberg",
  "adresse": "Kirschenallee 12, 23746 Kellenhusen",
  "geschlecht": "männlich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1941-12-01"),
  "geheiratetAm": new Date("1969-09-02"),
  "gesellschaft": "91",
  "versorgungsordnung": 77,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1969-12-20"),
  "unternehmensaustritt": new Date("1982-12-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2008-01-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": null
},

{
  "personalnummer": 976068,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Edda Lohse",
  "adresse": "Rahlstedter Straße 186e, 22143 Hamburg",
  "geschlecht": "weiblich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1943-08-24"),
  "geheiratetAm": new Date("1969-08-25"),
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