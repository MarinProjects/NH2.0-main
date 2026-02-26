const axios = require('axios');

const dataToInsert = [


    {
    "personalnummer": 315218,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
    "name": "Gertrud Olschewski",
    "adresse": "Eichenweg 16, 25746 Heide",
    "geschlecht": "weiblich",
    "familienstand": "verw.",
    "geburtsdatum": new Date('1943-04-25'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 75,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1968-05-01'),
    "unternehmensaustritt": new Date('1986-10-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('2005-10-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": ""
},
{
    "personalnummer": 500561,
    "aktuelleStatusgruppe": "Hinterbliebene",
    "alteStatusgruppe": null,
    "name": "Gerda Oswald",
    "adresse": "Albert-Einstein-Str. 3, 30926 Seelze",
    "geschlecht": "weiblich",
    "familienstand": "verw.",
    "geburtsdatum": new Date('1938-01-25'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 75,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1969-07-01'),
    "unternehmensaustritt": new Date('1985-09-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1991-10-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": ""
},
{
    "personalnummer": 500485,
    "aktuelleStatusgruppe": "Hinterbliebene",
    "alteStatusgruppe": null,
    "name": "Anni Pape",
    "adresse": "Wandsbeker Allee 11, 22041 Hamburg",
    "geschlecht": "weiblich",
    "familienstand": "verw.",
    "geburtsdatum": new Date('1933-06-30'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 75,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1963-05-01'),
    "unternehmensaustritt": new Date('1982-06-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1982-07-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": ""
},
{
    "personalnummer": 215459,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
    "name": "Karin Paul",
    "adresse": "Königsberger Str. 36, 31141 Hildesheim",
    "geschlecht": "weiblich",
    "familienstand": "verw.",
    "geburtsdatum": new Date('1944-04-06'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 75,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1970-04-01'),
    "unternehmensaustritt": new Date('1990-06-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('2009-05-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": ""
},
{
    "personalnummer": 112649,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
    "name": "Werner Petersen",
    "adresse": "Tannenkoppel 5, 21509 Glinde",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1944-02-28'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 75,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1967-06-01'),
    "unternehmensaustritt": new Date('1991-06-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('2007-09-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": ""
},
{
    "personalnummer": 318501,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
    "name": "Hans Pohl",
    "adresse": "Theodor-Körner-Str. 3, 24211 Preetz",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1943-02-15'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 75,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1971-01-01'),
    "unternehmensaustritt": new Date('1990-06-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('2003-08-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": ""
},

{
    "personalnummer": 131839,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Uwe Rabe",
    "adresse": "Huder Fähre Fährweg 4, 25876 Hude/Nordfriesland",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1931-07-18'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 77,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1969-01-01'),
    "unternehmensaustritt": new Date('1984-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1993-01-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2025-04-14'),
    "bemerkung": ""
},
{
    "personalnummer": 281683,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
    "name": "Marika Raichle",
    "adresse": "Torweg 14, 73277 Owen/Teck",
    "geschlecht": "weiblich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1942-10-12'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 77,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1970-07-01'),
    "unternehmensaustritt": new Date('1981-09-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('2002-11-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": ""
},
{
    "personalnummer": 132357,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Frühpensionäre",
    "name": "Erika Rau",
    "adresse": "Bockhorst 122, 22589 Hamburg",
    "geschlecht": "weiblich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1935-09-23'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 76,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1974-01-10'),
    "unternehmensaustritt": new Date('1990-09-30'),
    "ruhegeldfaehigAb": new Date('1974-01-01'),
    "rentenbeginn": new Date('1995-10-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": "Telefon: 827571, 0176 571 935 00"
},
{
    "personalnummer": 500318,
    "aktuelleStatusgruppe": "Hinterbliebene",
    "alteStatusgruppe": null,
    "name": "Erika Reibold",
    "adresse": "Abrahamstraße 4, 22145 Hamburg",
    "geschlecht": "weiblich",
    "familienstand": "verw.",
    "geburtsdatum": new Date('1937-03-18'),
    "geheiratetAm": new Date('1958-11-29'),
    "gesellschaft": "81A",
    "versorgungsordnung": 71,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1962-06-15'),
    "unternehmensaustritt": new Date('1985-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1999-08-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": "Telefon: 040/6782341"
},
{
    "personalnummer": 311340,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Frühpensionäre",
    "name": "Helmut Richter",
    "adresse": "Siedlerstraße 17, 58313 Herdecke",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1935-06-15'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 77,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1968-04-01'),
    "unternehmensaustritt": new Date('1991-03-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1995-07-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": "Telefon: 02330-9100345"
},
{
    "personalnummer": 157362,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
    "name": "Gisela Richter-Hansen",
    "adresse": "Reesenbüttler Redder 43a, 22926 Ahrensburg",
    "geschlecht": "weiblich",
    "familienstand": null,
    "geburtsdatum": new Date('1954-08-24'),
    "geheiratetAm": null,
    "gesellschaft": "N1",
    "versorgungsordnung": 76,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1980-10-01'),
    "unternehmensaustritt": new Date('1990-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('2020-06-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": "Telefon: 0171 68 23 206"
},
{
    "personalnummer": 141432,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
    "name": "Jürgen Ritze",
    "adresse": "Schöner Blick 6, 22587 Hamburg",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1941-04-30'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 71,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1965-06-01'),
    "unternehmensaustritt": new Date('1985-06-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('2006-05-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": ""
},
{
    "personalnummer": 100511,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
    "name": "Friedo Röhrs",
    "adresse": "Gunsbüttel 7, 25870 Oldenswort",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1938-11-03'),
    "geheiratetAm": null,
    "gesellschaft": "81A",
    "versorgungsordnung": 76,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1971-04-01'),
    "unternehmensaustritt": new Date('1984-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('2001-01-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": ""
},
{
    "personalnummer": 500306,
    "aktuelleStatusgruppe": "Hinterbliebene",
    "alteStatusgruppe": null,
    "name": "Mirsada Roznjakovic",
    "adresse": "Elligersweg 77, 22307 Hamburg",
    "geschlecht": "weiblich",
    "familienstand": "verw.",
    "geburtsdatum": new Date('1955-05-28'),
    "geheiratetAm": new Date('1981-10-08'),
    "gesellschaft": "81A",
    "versorgungsordnung": 76,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1971-10-01'),
    "unternehmensaustritt": new Date('1981-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1991-08-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": "Sohn: 017623 55 49 09"
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