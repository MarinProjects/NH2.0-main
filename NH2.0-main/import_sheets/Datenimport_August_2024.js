const axios = require('axios');

const dataToInsert = [
    
    {
        "personalnummer": 500568,
        "aktuelleStatusgruppe": "Hinterbliebene",
        "alteStatusgruppe": "---",
        "name": "Brügel",
        "adresse": "Schillerstraße 82, 73033 Göppingen",
        "geschlecht": "weiblich",
        "familienstand": "verw.",
        "geburtsdatum": new Date('1944-09-25'),
        "geheiratetAm": new Date('1966-08-30'),
        "gesellschaft": "N1",
        "versorgungsordnung": 71,
        "arbVerhRentTr": null,
        "unternehmenseintritt": new Date('1966-06-01'),
        "unternehmensaustritt": new Date('1988-12-31'),
        "ruhegeldfaehigAb": null,
        "rentenbeginn": new Date('1998-04-01'),
        "zusagedatum": null,
        "verstorbenAm": null,
        "bemerkung": "07391 419 68 und 0716 11 38 52"
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