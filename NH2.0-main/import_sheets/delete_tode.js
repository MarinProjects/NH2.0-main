const axios = require('axios');

const personalnummernZumLoeschen = [
  100214,
  104703,
  104885,
  125484,
  131722,
  131946,
  149369,
  174052,
  207464,
  230516,
  230789,
  231340,
  254169,
  310235,
  323204,
  323468,
  337329,
  401215,
  401640,
  403881,
  404164,
  404165,
  500042,
  500096,
  500183,
  500223,
  500225,
  500255,
  500352,
  500359,
  500364,
  500376,
  500496,
  500510,
  976007,
  976012,
  976033,
  976042,
  976057,
  976063
];

const API_URL = 'http://localhost:4000/api/persons/personalnummer';

async function deletePersons() {
  for (const pn of personalnummernZumLoeschen) {
    try {
      const response = await axios.delete(`${API_URL}/${pn}`);

      console.log(`Gelöscht: ${pn}`);
      console.log(response.data.message);

    } catch (err) {
      console.error(`Fehler bei ${pn}:`);

      if (err.response) {
        console.error(err.response.data);
      } else {
        console.error(err.message);
      }
    }
  }
}

deletePersons();