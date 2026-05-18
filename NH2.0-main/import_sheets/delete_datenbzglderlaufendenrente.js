const axios = require('axios');

const personalnummern = [146449

];

const API_BASE_URL = 'http://localhost:4000/api'; // anpassen

async function deleteDatenBzglDerLaufendenRente() {
  for (const personalnummer of personalnummern) {
    try {
      // Person anhand Personalnummer holen
      const personResponse = await axios.get(
        `${API_BASE_URL}/persons/personalnummer/${personalnummer}`
      );

      const person = personResponse.data;

      if (
        !person ||
        !person.datenbzglderlaufendenRente ||
        person.datenbzglderlaufendenRente.length === 0
      ) {
        console.log(
          `Keine datenBzglDerLaufendenRente für Personalnummer ${personalnummer} gefunden`
        );
        continue;
      }

      // Alle vorhandenen Datensätze löschen
      for (const rente of person.datenbzglderlaufendenRente) {
        await axios.delete(
          `${API_BASE_URL}/person/${person._id}/datenBzglDerLaufendenRente/${rente._id}`
        );

        console.log(
          `Gelöscht: Personalnummer ${personalnummer} | Datensatz ${rente._id}`
        );
      }
    } catch (error) {
      console.error(
        `Fehler bei Personalnummer ${personalnummer}:`,
        error.response?.data || error.message
      );
    }
  }

  console.log('Löschvorgang abgeschlossen');
}

deleteDatenBzglDerLaufendenRente();