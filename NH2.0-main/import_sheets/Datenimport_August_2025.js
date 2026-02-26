const axios = require('axios');

const dataToInsert = [

    {
    "personalnummer": 976038,
    "aktuelleStatusgruppe": "Hinterbliebene",
    "alteStatusgruppe": null,
    "name": "Ramona Gardosch",
    "adresse": "Zum See 7, 14542 Werder",
    "geschlecht": "weiblich",
    "familienstand": "verw.",
    "geburtsdatum": new Date('1954-12-03'),
    "geheiratetAm": new Date('2008-01-05'),
    "gesellschaft": "81A",
    "versorgungsordnung": 81,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1969-01-01'),
    "unternehmensaustritt": new Date('1982-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1990-12-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": "Verzicht auf Anp. 1.12.96, 2. Ehe ? !!!! 03384 590 933"
    },
    {
    "personalnummer": 141457,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
    "name": "Rosaria Gigas",
    "adresse": "Friedenstraße 4, 21614 Buxtehude",
    "geschlecht": "weiblich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1947-04-09'),
    "geheiratetAm": new Date('1969-01-24'),
    "gesellschaft": "81A",
    "versorgungsordnung": 76,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1978-04-01'),
    "unternehmensaustritt": new Date('1993-06-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('2008-05-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": "Telefon: 04161 722216"
    },
    {
    "personalnummer": 310573,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Vorruheständler",
    "name": "Arno Grabbert",
    "adresse": "Budapester Straße 14, 21423 Winsen",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1936-03-04'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 77,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1968-01-01'),
    "unternehmensaustritt": new Date('1994-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1999-04-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": ""
    },
    {
    "personalnummer": 401714,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Hinterbliebene",
    "name": "Helgard Grothe",
    "adresse": "Nidaforum 11, 60439 Frankfurt",
    "geschlecht": "weiblich",
    "familienstand": "verw.",
    "geburtsdatum": new Date('1929-07-26'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 71,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1962-10-01'),
    "unternehmensaustritt": new Date('1983-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1987-01-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2024-12-06'),
    "bemerkung": ""
    },
    {
    "personalnummer": 104653,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
    "name": "Dieter Gusko",
    "adresse": "Droysenstraße 7, 10629 Berlin",
    "geschlecht": "männlich",
    "familienstand": null,
    "geburtsdatum": new Date('1937-12-05'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 76,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1973-06-15'),
    "unternehmensaustritt": new Date('1989-03-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('2002-04-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": ""
    },
    {
    "personalnummer": 131748,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
    "name": "Christel Hauptvogel",
    "adresse": "Hochfeld 44, 22607 Hamburg",
    "geschlecht": "weiblich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1941-12-24'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 71,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1966-05-01'),
    "unternehmensaustritt": new Date('1990-09-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('2002-01-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": ""
    },
    {
    "personalnummer": 178087,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
    "name": "Birgit Hermann",
    "adresse": "Hühnerwinkel 10, 31191 Algermissen",
    "geschlecht": "weiblich",
    "familienstand": null,
    "geburtsdatum": new Date('1945-12-13'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 77,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1969-01-01'),
    "unternehmensaustritt": new Date('1983-06-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('2007-12-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": ""
    },
    {
    "personalnummer": 500530,
    "aktuelleStatusgruppe": "Hinterbliebene",
    "alteStatusgruppe": null,
    "name": "Lore Hirrlinger",
    "adresse": "Wiflingshauser Straße 129, 73732 Eßlingen",
    "geschlecht": "weiblich",
    "familienstand": "verw.",
    "geburtsdatum": new Date('1928-08-09'),
    "geheiratetAm": new Date('2018-08-28'),
    "gesellschaft": "81A",
    "versorgungsordnung": 82,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1973-01-01'),
    "unternehmensaustritt": new Date('1986-06-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1986-07-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": ""
    },
    {
    "personalnummer": 105072,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
    "name": "Hartger Hoefs",
    "adresse": "Krottstraße 11–13, 52146 Würselen",
    "geschlecht": "männlich",
    "familienstand": null,
    "geburtsdatum": new Date('1943-05-23'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 76,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1971-10-15'),
    "unternehmensaustritt": new Date('1990-03-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('2008-06-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": "Telefon: 02405 40 684 24"
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