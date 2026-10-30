const axios = require('axios');

const dataToInsert = [

    {
  "personalnummer": 60,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": "Frühpensionäre",
  "name": "Ursula Tost",
  "adresse": "Fritz-Reuter-Str. 3, 22926 Ahrensburg",
  "geschlecht": "weiblich",
  "familienstand": "verh.",
  "geburtsdatum": new Date("1952-03-28"),
  "geheiratetAm": null,
  "gesellschaft": "902",
  "versorgungsordnung": 76,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1979-01-01"),
  "unternehmensaustritt": new Date("2006-12-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2016-01-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "04102-668677"
},

{
  "personalnummer": 500604,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": "---",
  "name": "Antje Bargmann",
  "adresse": "Kampstraße 32d, 21465 Reinbek",
  "geschlecht": "weiblich",
  "familienstand": "verw.",
  "geburtsdatum": new Date("1951-05-02"),
  "geheiratetAm": null,
  "gesellschaft": "902",
  "versorgungsordnung": 83,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1985-02-01"),
  "unternehmensaustritt": new Date("2003-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2003-07-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": ""
},

{
  "personalnummer": 500272,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": "---",
  "name": "Ingelore Hübenbecker",
  "adresse": "Enzianstraße 30, 22297 Hamburg",
  "geschlecht": "weiblich",
  "familienstand": "verw.",
  "geburtsdatum": null,
  "geheiratetAm": null,
  "gesellschaft": "902",
  "versorgungsordnung": 83,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1985-01-01"),
  "unternehmensaustritt": new Date("2004-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2006-01-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": ""
},

{
  "personalnummer": 500150,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": "---",
  "name": "Dieter Fritzsche",
  "adresse": "Rothenbaumchaussee 101, 20148 Hamburg",
  "geschlecht": "männlich",
  "familienstand": "verh.",
  "geburtsdatum": new Date("1936-06-25"),
  "geheiratetAm": null,
  "gesellschaft": "902",
  "versorgungsordnung": 83,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1985-01-01"),
  "unternehmensaustritt": new Date("2001-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2001-07-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "Telefon: 44 25 31 und 0170 90 119 77"
},


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





