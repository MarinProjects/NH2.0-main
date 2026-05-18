const axios = require('axios');

const dataToInsert = [

    {
  "personalnummer": 175596,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": null,
  "name": "Ingrid Hohnholz",
  "adresse": "bei Keese, Wesekampstraße 17, 26122 Oldenburg",
  "geschlecht": "weiblich",
  "familienstand": "ledig",
  "geburtsdatum": new Date("1925-03-29"),
  "geheiratetAm": null,
  "gesellschaft": "21",
  "versorgungsordnung": 77,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1968-04-01"),
  "unternehmensaustritt": new Date("1985-03-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1985-04-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": null
},
{
  "personalnummer": 254482,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
  "name": "Helga Siegl",
  "adresse": "Eduard-Spranger-Str. 8, 80935 München",
  "geschlecht": "weiblich",
  "familienstand": "geschieden",
  "geburtsdatum": new Date("1937-11-04"),
  "geheiratetAm": null,
  "gesellschaft": "51",
  "versorgungsordnung": 71,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1966-07-01"),
  "unternehmensaustritt": new Date("1985-12-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2002-12-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "Versorgungsausgleich"
},

{
  "personalnummer": 310250,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": null,
  "name": "Josef Menzel",
  "adresse": "c/o Frau Monika Oberascher, Bergstraße 17A, A5760 Saalfelden",
  "geschlecht": "männlich",
  "familienstand": "verheiratet",
  "geburtsdatum": new Date("1923-06-03"),
  "geheiratetAm": null,
  "gesellschaft": "81A",
  "versorgungsordnung": 82,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1962-01-01"),
  "unternehmensaustritt": new Date("1979-12-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1983-07-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2019-05-22"),
  "bemerkung": null
},
{
  "personalnummer": 322545,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": "Aktive mit zugesagter Betriebsrente",
  "name": "Barbara Alt-Günter",
  "adresse": "Schottmüllerstr. 36, 20251 Hamburg",
  "geschlecht": "weiblich",
  "familienstand": "verheiratet",
  "geburtsdatum": new Date("1950-02-11"),
  "geheiratetAm": new Date("1978-07-20"),
  "gesellschaft": "902",
  "versorgungsordnung": 76,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1972-10-01"),
  "unternehmensaustritt": new Date("2015-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2015-07-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": null
},

{
  "personalnummer": 338301,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": null,
  "name": "Karin Lotze",
  "adresse": "Borsigweg 3, 30165 Hannover",
  "geschlecht": "weiblich",
  "familienstand": "verheiratet",
  "geburtsdatum": new Date("1937-05-01"),
  "geheiratetAm": null,
  "gesellschaft": "N1",
  "versorgungsordnung": 77,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1969-11-14"),
  "unternehmensaustritt": new Date("1986-03-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1999-08-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2021-05-05"),
  "bemerkung": null
},
{
  "personalnummer": 500169,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Ruth Delling",
  "adresse": "Stuttgarter Straße 8, 71691 Freiberg",
  "geschlecht": "weiblich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1929-09-19"),
  "geheiratetAm": new Date("1953-05-19"),
  "gesellschaft": "81A",
  "versorgungsordnung": 76,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1971-07-01"),
  "unternehmensaustritt": new Date("1984-12-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1989-01-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": null
},

{
  "personalnummer": 500372,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Luzia Henschel",
  "adresse": "c/o Residenz am Wiesenkamp, Wiesenkamp 16, 22359 Hamburg",
  "geschlecht": "weiblich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1927-01-09"),
  "geheiratetAm": new Date("1954-02-06"),
  "gesellschaft": "81A",
  "versorgungsordnung": 77,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1970-07-01"),
  "unternehmensaustritt": new Date("1984-12-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1986-01-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": null
},
{
  "personalnummer": 500528,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Peter von der Heide",
  "adresse": "Curslacker Deich 147a, 21039 Hamburg",
  "geschlecht": "männlich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1941-03-02"),
  "geheiratetAm": new Date("1968-09-27"),
  "gesellschaft": "N1",
  "versorgungsordnung": 76,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1977-05-01"),
  "unternehmensaustritt": new Date("1987-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1991-06-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": null
},

{
  "personalnummer": 500547,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Erika Lengnick",
  "adresse": "Knochenhauerstraße 36, 30159 Hannover",
  "geschlecht": "weiblich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1932-05-29"),
  "geheiratetAm": new Date("1955-08-08"),
  "gesellschaft": "81A",
  "versorgungsordnung": 76,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1973-08-01"),
  "unternehmensaustritt": new Date("1989-09-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1991-06-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": null
},
{
  "personalnummer": 500565,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Elfriede Wulff",
  "adresse": "Reiherstieg 8, 25348 Glückstadt",
  "geschlecht": "weiblich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1936-10-17"),
  "geheiratetAm": new Date("1982-12-10"),
  "gesellschaft": "902",
  "versorgungsordnung": 74,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1965-09-01"),
  "unternehmensaustritt": new Date("2002-04-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2002-05-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": null
},

{
  "personalnummer": 500601,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Barbara Freifrau von Wintzingerode",
  "adresse": "Hermann-Kätelhön-Str. 15, 59519 Möhnesee",
  "geschlecht": "weiblich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1943-02-27"),
  "geheiratetAm": null,
  "gesellschaft": "902",
  "versorgungsordnung": 76,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1974-09-01"),
  "unternehmensaustritt": new Date("2006-08-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2006-09-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "Telefon: 02924-7881"
},
{
  "personalnummer": 122739,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": "Frühpensionäre",
  "name": "Dieter Unruh",
  "adresse": "Havighorster Redder 26f, 22115 Hamburg",
  "geschlecht": "männlich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1947-01-28"),
  "geheiratetAm": new Date("1977-07-01"),
  "gesellschaft": "902",
  "versorgungsordnung": 75,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1970-01-01"),
  "unternehmensaustritt": new Date("2006-12-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2008-03-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "Aufstockung für Rentenminderung ca. 300,00 Euro"
},

{
  "personalnummer": 125773,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": null,
  "name": "Edith Nägler",
  "adresse": "Beethovenstr. 46, 22083 Hamburg",
  "geschlecht": "weiblich",
  "familienstand": "ledig",
  "geburtsdatum": new Date("1930-10-11"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 76,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1973-01-01"),
  "unternehmensaustritt": new Date("1985-10-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1990-11-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": null
},
{
  "personalnummer": 131854,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": "Aktive mit zugesagter Betriebsrente",
  "name": "Ekkehard Rösler",
  "adresse": "Im Holt 72b, 23812 Wahlstedt",
  "geschlecht": "männlich",
  "familienstand": "verheiratet",
  "geburtsdatum": new Date("1943-02-23"),
  "geheiratetAm": null,
  "gesellschaft": "902",
  "versorgungsordnung": 77,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1969-04-01"),
  "unternehmensaustritt": new Date("2008-02-29"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2008-03-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "at2 Telefon: 04554-999634"
},

{
  "personalnummer": 976063,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Maren Puffert",
  "adresse": "c/o Tina Puffert, Fischerweg 10, 4058 Basel/Schweiz",
  "geschlecht": "weiblich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1946-04-23"),
  "geheiratetAm": new Date("1973-03-16"),
  "gesellschaft": "91",
  "versorgungsordnung": 77,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1970-03-01"),
  "unternehmensaustritt": new Date("1990-06-30"),
  "ruhegeldfaehigAb": new Date("1968-01-01"),
  "rentenbeginn": new Date("2000-07-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": null
},

{
  "personalnummer": 976009,
  "aktuelleStatusgruppe": "Waise ohne Anspruch",
  "alteStatusgruppe": "Waise mit Anspruch",
  "name": "Zoe Auras",
  "adresse": "Scharnhorstweg 14, 27755 Delmenhorst",
  "geschlecht": "weiblich",
  "familienstand": "ledig",
  "geburtsdatum": new Date("2000-03-05"),
  "geheiratetAm": null,
  "gesellschaft": "21",
  "versorgungsordnung": 76,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1970-06-01"),
  "unternehmensaustritt": new Date("1986-12-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2013-02-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2024-12-31"),
  "bemerkung": null
},

{
  "personalnummer": 500603,
  "aktuelleStatusgruppe": "Hinterbliebene",
  "alteStatusgruppe": null,
  "name": "Horst Ambrosius",
  "adresse": "Kirchstieg 5, 22880 Wedel",
  "geschlecht": "männlich",
  "familienstand": "verwitwet",
  "geburtsdatum": new Date("1941-10-18"),
  "geheiratetAm": new Date("1994-12-02"),
  "gesellschaft": "902",
  "versorgungsordnung": 75,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1970-07-01"),
  "unternehmensaustritt": new Date("2002-03-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2004-12-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "ausgeschieden bei BGIS - Schuldbeitritt"
},

{
  "personalnummer": 149815,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": null,
  "name": "Natalie K. Horn",
  "adresse": "c/o Hospital z.H. Geist, Haus Goldregen, Hinsbleek 11, 22391 Hamburg",
  "geschlecht": "weiblich",
  "familienstand": "verheiratet",
  "geburtsdatum": new Date("1931-07-08"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 77,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1969-05-12"),
  "unternehmensaustritt": new Date("1987-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1991-08-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": "556 40 144"
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
    
    
    // Call the function to inse