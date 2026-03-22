const axios = require('axios');

const dataToInsert = [

    {
  "personalnummer": 500433,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Ingeborg Stinglwagner-Daschil",
  "adresse": "Traminerstraße 21, 81547 München",
  "geschlecht": "weiblich",
  "familienstand": "verw.",
  "geburtsdatum": new Date("1939-06-24"),
  "geheiratetAm": new Date("2010-06-23"),
  "gesellschaft": "81A",
  "versorgungsordnung": 72,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1972-05-01"),
  "unternehmensaustritt": new Date("1983-09-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1990-07-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": ""
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
  "personalnummer": 500446,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Gabriele Dehnkamp",
  "adresse": "Hodenberger Str. 37 A, 28355 Bremen",
  "geschlecht": "weiblich",
  "familienstand": "verw.",
  "geburtsdatum": new Date("1927-01-16"),
  "geheiratetAm": null,
  "gesellschaft": "91",
  "versorgungsordnung": 72,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1955-10-15"),
  "unternehmensaustritt": new Date("1982-03-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1990-03-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "Telefon: 0421-259 798"
},

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









]

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