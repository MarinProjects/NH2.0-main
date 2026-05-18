const mongoose = require("mongoose");
const Person = require("../model/person"); // Pfad ggf. anpassen

const personalnummern = [
  // hier deine Personalnummern eintragen
148742

];

const MONGO_URI = "mongodb://127.0.0.1:27017/neue_heimat_xx"; // anpassen

async function deleteDatenBzglDerLaufendenRente() {
  await mongoose.connect(MONGO_URI);

  let gesamtGeloescht = 0;

  for (const personalnummer of personalnummern) {
    const person = await Person.findOne({ personalnummer });

    if (!person) {
      console.log(`Nicht gefunden: ${personalnummer}`);
      continue;
    }

    const anzahlDatensaetze =
      person.datenBzglDerLaufendenRente?.length || 0;

    const result = await Person.updateOne(
      { personalnummer },
      {
        $set: {
          datenbzglderlaufendenRente: []
        }
      }
    );

    if (result.matchedCount === 0) {
      console.log(`Nicht gefunden: ${personalnummer}`);
    } else {
      gesamtGeloescht += anzahlDatensaetze;

      console.log(
        `Personalnummer ${personalnummer}: ${anzahlDatensaetze} Datensatz/Datensätze gelöscht`
      );
    }
  }

  console.log(
    `\nFertig. Insgesamt ${gesamtGeloescht} Datensatz/Datensätze gelöscht.`
  );

  await mongoose.disconnect();
}

deleteDatenBzglDerLaufendenRente().catch(console.error);