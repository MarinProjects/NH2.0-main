const axios = require('axios');

const dataToInsert = [

    
{
    "personalnummer": 146282,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Hildegard Pschunder",
    "adresse": "c/o Monika Mayer, Heukoppel 95, 22179 Hamburg",
    "geschlecht": "weiblich",
    "familienstand": "verw.",
    "geburtsdatum": new Date('1920-10-10'),
    "geheiratetAm": null,
    "gesellschaft": "11",
    "versorgungsordnung": 73,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1967-10-26'),
    "unternehmensaustritt": new Date('1978-08-31'),
    "ruhegeldfaehigAb": new Date('1967-10-01'),
    "rentenbeginn": new Date('1980-10-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2007-01-23'),
    "bemerkung": ""
},


{
    "personalnummer": 146316,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Herbert Ullmann",
    "adresse": "Mahlhaus 3, 22159 Hamburg",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1912-02-12'),
    "geheiratetAm": new Date('1953-05-30'),
    "gesellschaft": "11",
    "versorgungsordnung": 73,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1949-06-01'),
    "unternehmensaustritt": new Date('1975-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1976-03-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('1998-01-13'),
    "bemerkung": ""
},

{
    "personalnummer": 146324,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Erika Behnke",
    "adresse": "c/o Herrn RA S. Passlack, Eulenkrogstraße 7, 22359 Hamburg",
    "geschlecht": "weiblich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1925-08-06'),
    "geheiratetAm": null,
    "gesellschaft": "11",
    "versorgungsordnung": 73,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1961-07-01'),
    "unternehmensaustritt": new Date('1983-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1985-09-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2014-02-13'),
    "bemerkung": ""
},

{
    "personalnummer": 146332,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Christine Weisleder",
    "adresse": "An der Alster 10, 20099 Hamburg",
    "geschlecht": "weiblich",
    "familienstand": "ledig",
    "geburtsdatum": new Date('1938-02-28'),
    "geheiratetAm": null,
    "gesellschaft": "N1",
    "versorgungsordnung": 74,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1961-07-10'),
    "unternehmensaustritt": new Date('1993-06-30'),
    "ruhegeldfaehigAb": new Date('1961-07-01'),
    "rentenbeginn": new Date('1998-03-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2014-11-20'),
    "bemerkung": "Telefon: 017664991435 – Tochter vorhanden"
},

{
    "personalnummer": 146381,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Wolfgang Müller",
    "adresse": "Heilsberger Hang 7c, 22175 Hamburg",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1922-06-09'),
    "geheiratetAm": null,
    "gesellschaft": "11",
    "versorgungsordnung": 74,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1953-08-24'),
    "unternehmensaustritt": new Date('1985-06-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1985-07-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('1997-02-12'),
    "bemerkung": null
},

{
    "personalnummer": 146407,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Jürgen Sielfeld",
    "adresse": "Sülldorfer Heideweg 22, 22589 Hamburg",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1924-08-07'),
    "geheiratetAm": null,
    "gesellschaft": "11",
    "versorgungsordnung": 71,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1956-12-06'),
    "unternehmensaustritt": new Date('1987-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1988-01-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2019-06-08'),
    "bemerkung": "Telefon: 040/87 43 50 Tochter Andrea"
},

{
    "personalnummer": 146415,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Herbert Sliwa",
    "adresse": "c/o Frau Susanne Mallasch, Korteland 536, 22395 Hamburg",
    "geschlecht": "männlich",
    "familienstand": "ledig",
    "geburtsdatum": new Date('1921-05-03'),
    "geheiratetAm": null,
    "gesellschaft": "11",
    "versorgungsordnung": 71,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1946-12-01'),
    "unternehmensaustritt": new Date('1985-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1986-01-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2014-03-25'),
    "bemerkung": "Telefon Tochter: Frau Malasch 640 70 02"
},

{
    "personalnummer": 146423,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Hermann Wüpper",
    "adresse": "Düpheid 12, 22149 Hamburg",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1915-04-17'),
    "geheiratetAm": null,
    "gesellschaft": "11",
    "versorgungsordnung": 73,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1954-10-01'),
    "unternehmensaustritt": new Date('1976-12-31'),
    "ruhegeldfaehigAb": new Date('1951-08-01'),
    "rentenbeginn": new Date('1977-01-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('1994-02-10'),
    "bemerkung": ""
},

{
    "personalnummer": 146449,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
    "name": "Karl-Heinz Lüth",
    "adresse": "Höppnerweg 3, 23669 Timmendorfer Strand",
    "geschlecht": "männlich",
    "familienstand": null,
    "geburtsdatum": new Date('1940-07-18'),
    "geheiratetAm": null,
    "gesellschaft": "11",
    "versorgungsordnung": 77,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1970-01-01'),
    "unternehmensaustritt": new Date('1984-06-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('2003-08-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": ""
},

{
    "personalnummer": 146456,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Gerda Kotsch",
    "adresse": "c/o Frau Dagmar Klingelhöffer, Therese-Danner-Platz 7, 80636 München",
    "geschlecht": "weiblich",
    "familienstand": "ledig",
    "geburtsdatum": new Date('1918-10-06'),
    "geheiratetAm": null,
    "gesellschaft": "11",
    "versorgungsordnung": 73,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1953-08-01'),
    "unternehmensaustritt": new Date('1980-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1981-01-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2010-01-27'),
    "bemerkung": ""
},

{
    "personalnummer": 146480,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Ernst-August Horn",
    "adresse": "Lollfuß 116, 24837 Schleswig",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1916-03-29'),
    "geheiratetAm": new Date('1982-01-01'),
    "gesellschaft": "11",
    "versorgungsordnung": 73,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1967-04-25'),
    "unternehmensaustritt": new Date('1979-03-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1979-04-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2012-12-13'),
    "bemerkung": ""
},

{
    "personalnummer": 146498,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Helga-Elisabeth Grube",
    "adresse": "Sievekingsallee 24, 20535 Hamburg",
    "geschlecht": "weiblich",
    "familienstand": "ledig",
    "geburtsdatum": new Date('1932-01-26'),
    "geheiratetAm": null,
    "gesellschaft": "N1",
    "versorgungsordnung": 75,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1967-07-15'),
    "unternehmensaustritt": new Date('1988-12-31'),
    "ruhegeldfaehigAb": new Date('1967-07-01'),
    "rentenbeginn": new Date('1992-02-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2018-05-10'),
    "bemerkung": ""
},

{
    "personalnummer": 146514,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Karl-Heinz Behnke",
    "adresse": "Nordlandweg 40a, 22145 Hamburg",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1925-05-23'),
    "geheiratetAm": null,
    "gesellschaft": "11",
    "versorgungsordnung": 74,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1960-11-01'),
    "unternehmensaustritt": new Date('1983-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1985-06-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2006-12-23'),
    "bemerkung": ""
},

{
    "personalnummer": 146522,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Gunther Brügmann",
    "adresse": "Trenknerweg 11, 22605 Hamburg",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1922-12-01'),
    "geheiratetAm": null,
    "gesellschaft": "11",
    "versorgungsordnung": 73,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1952-08-04'),
    "unternehmensaustritt": new Date('1983-06-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1987-12-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2021-08-18'),
    "bemerkung": ""
},

{
    "personalnummer": 146563,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Wolfgang Rabe",
    "adresse": "Breslauer Str. 5, 23738 Lensahn/Osth.",
    "geschlecht": "männlich",
    "familienstand": "ledig",
    "geburtsdatum": new Date('1936-08-24'),
    "geheiratetAm": null,
    "gesellschaft": "N1",
    "versorgungsordnung": 74,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1961-11-01'),
    "unternehmensaustritt": new Date('1991-08-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1996-09-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2021-11-03'),
    "bemerkung": "Telefon: 04663-2878"
},

{
    "personalnummer": 146571,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Eckhard Schmalriede",
    "adresse": "Sichter 21, 21029 Hamburg",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1939-09-23'),
    "geheiratetAm": new Date('1966-03-07'),
    "gesellschaft": "N1",
    "versorgungsordnung": 71,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1963-03-01'),
    "unternehmensaustritt": new Date('1990-06-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1990-12-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2011-02-04'),
    "bemerkung": null
},

{
    "personalnummer": 146589,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
    "name": "Diethardt Kläning",
    "adresse": "Seebarg 21, 22397 Hamburg",
    "geschlecht": "männlich",
    "familienstand": null,
    "geburtsdatum": new Date('1941-04-27'),
    "geheiratetAm": null,
    "gesellschaft": "11",
    "versorgungsordnung": 77,
    "arbVerhRentTr": null,
    "unternehmenseintritt": new Date('1970-04-01'),
    "unternehmensaustritt": new Date('1984-09-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('2006-05-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": null
},

{
    "personalnummer": 146597,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Horst Jonas",
    "adresse": "Osterrade 61, 24340 Eckernförde",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1926-03-25'),
    "geheiratetAm": null,
    "gesellschaft": "11",
    "versorgungsordnung": 71,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1964-09-15'),
    "unternehmensaustritt": new Date('1988-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1989-04-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2020-11-27'),
    "bemerkung": null
},

{
    "personalnummer": 146605,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Heinz Wulf",
    "adresse": "Häußlerstraße 36, 21031 Hamburg",
    "geschlecht": "männlich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1922-10-14'),
    "geheiratetAm": null,
    "gesellschaft": "11",
    "versorgungsordnung": 73,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1954-06-01'),
    "unternehmensaustritt": new Date('1983-06-30'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1987-11-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2005-11-14'),
    "bemerkung": null
},

{
    "personalnummer": 146613,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Kurt Peters",
    "adresse": "Heinrich-Hauschildt-Str. 1, 25336 Elmshorn",
    "geschlecht": "männlich",
    "familienstand": "ledig",
    "geburtsdatum": new Date('1928-03-18'),
    "geheiratetAm": null,
    "gesellschaft": "N1",
    "versorgungsordnung": 71,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1957-11-01'),
    "unternehmensaustritt": new Date('1988-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1990-01-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2007-09-04'),
    "bemerkung": null
},

{
    "personalnummer": 146621,
    "aktuelleStatusgruppe": "Altersrentner",
    "alteStatusgruppe": null,
    "name": "Helga Müller de Madrid",
    "adresse": "c/o Frau RA P. Castiglia-Kroeber, Möllner Landstraße 93, 21509 Glinde",
    "geschlecht": "weiblich",
    "familienstand": "verh.",
    "geburtsdatum": new Date('1930-08-26'),
    "geheiratetAm": null,
    "gesellschaft": "11",
    "versorgungsordnung": 71,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1951-08-01'),
    "unternehmensaustritt": new Date('1985-12-31'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1990-09-01'),
    "zusagedatum": null,
    "verstorbenAm": null,
    "bemerkung": null
},

{
    "personalnummer": 146647,
    "aktuelleStatusgruppe": "Verstorbene",
    "alteStatusgruppe": "Altersrentner",
    "name": "Ursula Hamel",
    "adresse": "Abrahamstr 23, 22145 Hamburg",
    "geschlecht": "weiblich",
    "familienstand": "ledig",
    "geburtsdatum": new Date('1925-02-15'),
    "geheiratetAm": null,
    "gesellschaft": "11",
    "versorgungsordnung": 77,
    "arbVerhRentTr": 10,
    "unternehmenseintritt": new Date('1967-09-01'),
    "unternehmensaustritt": new Date('1985-02-28'),
    "ruhegeldfaehigAb": null,
    "rentenbeginn": new Date('1985-03-01'),
    "zusagedatum": null,
    "verstorbenAm": new Date('2020-09-04'),
    "bemerkung": null
},

{
  "personalnummer": 146654,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Heinz Meckel",
  "adresse": "Mendelstr 10a, 2050 Hamburg 80",
  "geschlecht": "männlich",
  "familienstand": "verh.",
  "geburtsdatum": new Date("1912-12-01"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 73,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1958-09-09"),
  "unternehmensaustritt": new Date("1976-09-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1976-10-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("1993-01-10"),
  "bemerkung": null
},

{
  "personalnummer": 146688,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": null,
  "name": "Walter Thormann",
  "adresse": "Berner Heerweg 12, 22159 Hamburg",
  "geschlecht": "männlich",
  "familienstand": "verh.",
  "geburtsdatum": new Date("1927-05-06"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 71,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1960-06-01"),
  "unternehmensaustritt": new Date("1986-03-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1987-06-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": null
}
,
{
  "personalnummer": 146712,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Gisela Thiess",
  "adresse": "c/o Rosenhof App. 219, Mecklenburger Landstr. 2, 23570 Lübeck",
  "geschlecht": "weiblich",
  "familienstand": "ledig",
  "geburtsdatum": new Date("1925-06-15"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 71,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1958-02-11"),
  "unternehmensaustritt": new Date("1985-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1985-07-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2014-06-08"),
  "bemerkung": null
}
,
{
  "personalnummer": 146720,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Helmuth Stracke",
  "adresse": "c/o Fam. A. Magiera, Bienenkamp 9, 22159 Hamburg",
  "geschlecht": "männlich",
  "familienstand": "ledig",
  "geburtsdatum": new Date("1925-09-13"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 75,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1971-04-01"),
  "unternehmensaustritt": new Date("1983-12-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1985-10-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2017-05-18"),
  "bemerkung": null
}
,
{
  "personalnummer": 146738,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Helmut Eilfeld",
  "adresse": "Schopbachweg 11d, 22527 Hamburg",
  "geschlecht": "männlich",
  "familienstand": "ledig",
  "geburtsdatum": new Date("1920-08-15"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 71,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1959-04-01"),
  "unternehmensaustritt": new Date("1984-04-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1984-05-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("1995-08-29"),
  "bemerkung": null
}
,
{
  "personalnummer": 146795,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Marie Neumann",
  "adresse": "c/o Dieter Christiansen, Neustadt 63, 24939 Flensburg",
  "geschlecht": "weiblich",
  "familienstand": "ledig",
  "geburtsdatum": new Date("1920-11-04"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 73,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1959-01-01"),
  "unternehmensaustritt": new Date("1980-11-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1980-12-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2000-06-21"),
  "bemerkung": null
}
,
{
  "personalnummer": 146803,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Ludwig Korff",
  "adresse": "c/o Herrn Manfred Hentrich, Moorkamp 13, 25421 Pinneberg",
  "geschlecht": "männlich",
  "familienstand": "verw.",
  "geburtsdatum": new Date("1935-01-19"),
  "geheiratetAm": null,
  "gesellschaft": "N1",
  "versorgungsordnung": 76,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1973-01-01"),
  "unternehmensaustritt": new Date("1990-01-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1993-05-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2012-10-18"),
  "bemerkung": "Telefon: 49 228 44"
}
,
{
  "personalnummer": 146811,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": "Ausgeschiedene mit unverfallbarem Anspruch",
  "name": "Jutta Leopold",
  "adresse": "Eiderstede 8, 24582 Bordesholm",
  "geschlecht": "weiblich",
  "familienstand": "verh.",
  "geburtsdatum": new Date("1942-02-01"),
  "geheiratetAm": null,
  "gesellschaft": "N1",
  "versorgungsordnung": 77,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1967-10-15"),
  "unternehmensaustritt": new Date("1989-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("2002-02-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": ""
}
,
{
  "personalnummer": 146829,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Ingeborg Witt",
  "adresse": "Hospital zum Heiligen Geist Haus Dahlie, Zi. 109, Hinsbleek 11, 22391 Hamburg",
  "geschlecht": "weiblich",
  "familienstand": "ledig",
  "geburtsdatum": new Date("1928-02-26"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 71,
  "arbVerhRentTr": null,
  "unternehmenseintritt": new Date("1965-04-01"),
  "unternehmensaustritt": new Date("1985-12-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1988-03-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2023-12-05"),
  "bemerkung": "Telefon: 040/511 37 130"
}
,
{
  "personalnummer": 146894,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Kurt Herrmann",
  "adresse": "Drachenbahn 20, App. 805, 24159 Kiel",
  "geschlecht": "männlich",
  "familienstand": "verh.",
  "geburtsdatum": new Date("1925-01-04"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 73,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1956-10-01"),
  "unternehmensaustritt": new Date("1983-03-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1985-02-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2004-03-28"),
  "bemerkung": ""
}
,

{
  "personalnummer": 146902,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Otto Ohrt",
  "adresse": "c/o Frau RA Susanne Schmidt, Heschredder 52, 22335 Hamburg",
  "geschlecht": "männlich",
  "familienstand": "verw.",
  "geburtsdatum": new Date("1930-08-08"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 71,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1964-10-01"),
  "unternehmensaustritt": new Date("1987-06-30"),
  "ruhegeldfaehigAb": new Date("1961-01-01"),
  "rentenbeginn": new Date("1990-09-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2020-03-09"),
  "bemerkung": "250 31 85"
}
,
{
  "personalnummer": 146936,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Hans Duderstadt",
  "adresse": "Tangst.Landstr 110, 2000 Hamburg 62",
  "geschlecht": "männlich",
  "familienstand": "verh.",
  "geburtsdatum": new Date("1923-08-16"),
  "geheiratetAm": new Date("1966-02-04"),
  "gesellschaft": "11",
  "versorgungsordnung": 63,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1968-02-01"),
  "unternehmensaustritt": new Date("1982-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1982-07-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("1992-11-07"),
  "bemerkung": ""
}
,
{
  "personalnummer": 146944,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Käte Scheerer",
  "adresse": "c/o Herrn Karsten Kroll, Gartenweg 13, 29386 Hankensbüttel",
  "geschlecht": "weiblich",
  "familienstand": "ledig",
  "geburtsdatum": new Date("1921-03-31"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 77,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1968-02-01"),
  "unternehmensaustritt": new Date("1983-07-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1983-08-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2009-09-08"),
  "bemerkung": ""
}
,
{
  "personalnummer": 146951,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Eckard Maaß",
  "adresse": "Am Diggen 38c, 21077 Hamburg",
  "geschlecht": "männlich",
  "familienstand": "verh.",
  "geburtsdatum": new Date("1929-10-20"),
  "geheiratetAm": null,
  "gesellschaft": "91",
  "versorgungsordnung": 74,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1965-01-01"),
  "unternehmensaustritt": new Date("1992-10-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1992-11-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2011-09-18"),
  "bemerkung": ""
}
,
{
  "personalnummer": 146985,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Harald Freudenberg",
  "adresse": "Bredenbeck 24, 21698 Brest",
  "geschlecht": "männlich",
  "familienstand": "verh.",
  "geburtsdatum": new Date("1930-03-03"),
  "geheiratetAm": new Date("1955-01-01"),
  "gesellschaft": "11",
  "versorgungsordnung": 74,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1970-01-01"),
  "unternehmensaustritt": new Date("1987-03-31"),
  "ruhegeldfaehigAb": new Date("1960-11-01"),
  "rentenbeginn": new Date("1990-04-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2003-05-11"),
  "bemerkung": ""
}
,

{
  "personalnummer": 146993,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Gert Böhme",
  "adresse": "Tralauer Weg 12, 23816 Leezen",
  "geschlecht": "männlich",
  "familienstand": "verw.",
  "geburtsdatum": new Date("1928-02-14"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 71,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1965-03-01"),
  "unternehmensaustritt": new Date("1986-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1988-03-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2020-07-20"),
  "bemerkung": "Telefon: 0455-299 38 39 0172 99 48 260 Schwiegertochter Böhme"
}
,

{
  "personalnummer": 147009,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Gerhard Rasch",
  "adresse": "Thomas-Mann-Str. 7, 22175 Hamburg",
  "geschlecht": "männlich",
  "familienstand": "verh.",
  "geburtsdatum": new Date("1920-09-14"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 71,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1965-04-01"),
  "unternehmensaustritt": new Date("1983-09-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1983-10-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2006-06-02"),
  "bemerkung": ""
}
,

{
  "personalnummer": 147025,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Horst Wendt",
  "adresse": "Leuschnerstraße 83c, 21031 Hamburg",
  "geschlecht": "männlich",
  "familienstand": "verh.",
  "geburtsdatum": new Date("1921-07-12"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 73,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1954-05-01"),
  "unternehmensaustritt": new Date("1983-03-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1984-04-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2000-01-20"),
  "bemerkung": ""
}
,
{
  "personalnummer": 147033,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Uwe Knieper",
  "adresse": "c/o Hospital zum Heiligen Geist, Haus A, Zimmer 424, Hinsbleek 11, 22391 Hamburg",
  "geschlecht": "männlich",
  "familienstand": "verh.",
  "geburtsdatum": new Date("1931-06-22"),
  "geheiratetAm": new Date("1957-08-03"),
  "gesellschaft": "11",
  "versorgungsordnung": 74,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1965-05-15"),
  "unternehmensaustritt": new Date("1986-06-30"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1991-07-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2001-02-25"),
  "bemerkung": ""
}
,
{
  "personalnummer": 147041,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Hans-Joachim Krüger",
  "adresse": "Heideweg 5, 22085 Hamburg",
  "geschlecht": "männlich",
  "familienstand": "ledig",
  "geburtsdatum": new Date("1916-10-30"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 73,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1965-06-01"),
  "unternehmensaustritt": new Date("1981-10-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1981-11-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("1994-03-26"),
  "bemerkung": ""
}
,


{
  "personalnummer": 147082,
  "aktuelleStatusgruppe": "Altersrentner",
  "alteStatusgruppe": null,
  "name": "Günter Kräft",
  "adresse": "Abrahamstr. 28, 22145 Hamburg",
  "geschlecht": "männlich",
  "familienstand": "verh.",
  "geburtsdatum": new Date("1927-06-22"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 71,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1965-07-01"),
  "unternehmensaustritt": new Date("1986-03-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1987-07-01"),
  "zusagedatum": null,
  "verstorbenAm": null,
  "bemerkung": ""
}
,

{
  "personalnummer": 147108,
  "aktuelleStatusgruppe": "Verstorbene",
  "alteStatusgruppe": "Altersrentner",
  "name": "Maria Meier",
  "adresse": "Tübinger Straße 9, 71144 Steinenbronn",
  "geschlecht": "weiblich",
  "familienstand": "ledig",
  "geburtsdatum": new Date("1920-03-24"),
  "geheiratetAm": null,
  "gesellschaft": "11",
  "versorgungsordnung": 77,
  "arbVerhRentTr": 10,
  "unternehmenseintritt": new Date("1968-05-01"),
  "unternehmensaustritt": new Date("1985-03-31"),
  "ruhegeldfaehigAb": null,
  "rentenbeginn": new Date("1985-04-01"),
  "zusagedatum": null,
  "verstorbenAm": new Date("2015-04-09"),
  "bemerkung": "Sohn: Telefon: 04518 18 43"
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