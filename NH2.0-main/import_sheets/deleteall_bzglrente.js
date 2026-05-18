const mongoose = require("mongoose");
const Person = require("../model/person"); // Pfad ggf. anpassen

const MONGO_URI = "mongodb://127.0.0.1:27017/neue_heimat_xx"; // anpassen

async function deleteAlleDatenBzglDerLaufendenRente() {
  await mongoose.connect(MONGO_URI);

  console.log("Mit MongoDB verbunden");

  // Alle Personen laden
  const personen = await Person.find({});

  let gesamtGeloescht = 0;
  let betroffenePersonen = 0;

  for (const person of personen) {
    const anzahlDatensaetze =
      person.datenbzglderlaufendenRente?.length || 0;

    if (anzahlDatensaetze > 0) {
      person.datenbzglderlaufendenRente = [];

      await person.save();

      gesamtGeloescht += anzahlDatensaetze;
      betroffenePersonen++;

      console.log(
        `Personalnummer ${person.personalnummer}: ${anzahlDatensaetze} Datensatz/Datensätze gelöscht`
      );
    }
  }

  console.log("\n===== FERTIG =====");
  console.log(`Betroffene Personen: ${betroffenePersonen}`);
  console.log(`Gelöschte Datensätze insgesamt: ${gesamtGeloescht}`);

  await mongoose.disconnect();

  console.log("MongoDB Verbindung geschlossen");
}

deleteAlleDatenBzglDerLaufendenRente().catch(console.error);