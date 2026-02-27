const { calculateAdjustedPension } = require('./utils'); // Adjust the path as necessary

var express = require('express');
//const SSE = require('express-sse');

const Person = require("../model/person");

var router = express.Router();
const { response } = require('express');

let channels = [];


// Post 
router.post("/person", async (req, res, next) => {
  const newData = req.body;

  try {
      // Check if personalnummer already exists
      const existingPerson = await Person.findOne({ personalnummer: newData.personalnummer });

      if (existingPerson) {
          return res.status(400).json({ message: `Person with personalnummer ${newData.personalnummer} already exists.` });
      }

      // If personalnummer doesn't exist, create new person
      const newPerson = await Person.create(newData);
      res.status(201).json(newPerson);
  } catch (error) {
      console.error('Error creating person:', error.message);
      res.status(500).json({ error: error.message });
  }
});

  router.post("/person/:id", async (req, res, next) => {
    const personId = req.params.id;
    const updatedData = req.body;
  
    try {
      const updatedPerson = await Person.findByIdAndUpdate(personId, updatedData, { new: true });
  
      if (!updatedPerson) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      res.json(updatedPerson);
    } catch (error) {
      console.error('Error updating person:', error.message);
      res.status(500).json({ error: error.message });
    }
  });


  router.post("/person/:id/pensionsDaten", async (req, res, next) => {
    const personId = req.params.id;
    const newData = req.body;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Add the new data to the pensionsDaten array
      person.pensionsDaten.push(newData);
  
      // Save the updated person document
      const updatedPerson = await person.save();
  
      res.json(updatedPerson);
    } catch (error) {
      console.error('Error adding data to pensionsDaten:', error.message);
      res.status(500).json({ error: error.message });
    }
  });

  router.post("/person/:id/ehegattenDaten", async (req, res, next) => {
    const personId = req.params.id;
    const newData = req.body;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Add the new data to the pensionsDaten array
      person.ehegattenDaten.push(newData);
  
      // Save the updated person document
      const updatedPerson = await person.save();
  
      res.json(updatedPerson);
    } catch (error) {
      console.error('Error adding data to pensionsDaten:', error.message);
      res.status(500).json({ error: error.message });
    }
  });


  router.post("/person/:id/rentenerstberechnungteil1", async (req, res, next) => {
    const personId = req.params.id;
    const newData = req.body;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Push the new data to the rentenErstberechnungTeil1Daten array
      person.rentenErstberechnungTeil1Daten.push(newData);
  
      // Save the updated person document
      const updatedPerson = await person.save();
  
      res.json(updatedPerson);
    } catch (error) {
      console.error('Error adding data to rentenErstberechnungTeil1Daten:', error.message);
      res.status(500).json({ error: error.message });
    }
  });


  router.post("/person/:id/rentenerstberechnungteil2", async (req, res, next) => {
    const personId = req.params.id;
    const newData = req.body;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
      // Push the new data to the rentenErstberechnungTeil2Daten array
      person.rentenErstberechnungTeil2Daten.push(newData);

      // Save the updated person document
      const updatedPerson = await person.save();

      res.json(updatedPerson);
    } catch (error) {
      console.error('Error adding data to rentenErstberechnungTeil2Daten:', error.message);
      res.status(500).json({ error: error.message });
    }
  });


  router.post("/person/:id/datenbzglderlaufendenrente", async (req, res, next) => {
    const personId = req.params.id;
    const newData = req.body;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }

      // Push the new data to the datenbzglderlaufendenRente array
      person.datenbzglderlaufendenRente.push(newData);
  
      // Save the updated person document
      const updatedPerson = await person.save();
  
      res.json(updatedPerson);
    } catch (error) {
      console.error('Error adding data to datenbzglderlaufendenRente:', error.message);
      res.status(500).json({ error: error.message });
    }
  });


  router.post("/person/:id/personaldatenzumverbliebenenangehoerigen", async (req, res, next) => {
    const personId = req.params.id;
    const newData = req.body;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Push the new data to the personaldatenZumVerbliebenenAngehoerigen array
      person.personaldatenangehoeriger.push(newData);
  
      // Save the updated person document
      const updatedPerson = await person.save();
  
      res.json(updatedPerson);
    } catch (error) {
      console.error('Error adding data to personaldatenZumVerbliebenenAngehoerigen:', error.message);
      res.status(500).json({ error: error.message });
    }
  });
  

  //fickaaa
  

  

  











  // PUT

  // PUT route for updating person's master data
  router.put("/person/:personId", async (req, res, next) => {
    const personId = req.params.personId;
    const newData = req.body;
  
    try {
      // Check if personalnummer already exists for another person
      const existingPerson = await Person.findOne({ personalnummer: newData.personalnummer, _id: { $ne: personId } });
  
      if (existingPerson) {
        return res.status(400).json({ message: `Person with personalnummer ${newData.personalnummer} already exists.` });
      }
  
      const updatedPerson = await Person.findByIdAndUpdate(personId, newData, { new: true });
  
      if (!updatedPerson) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      res.json(updatedPerson);
    } catch (error) {
      console.error('Error updating person:', error.message);
      res.status(500).json({ error: error.message });
    }
  });



  router.put("/person/:personId/pensionsDaten/:datumId", async (req, res, next) => {
    const { personId, datumId } = req.params;
    const newData = req.body;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Find the pensionsDaten object within the person's pensionsDaten array
      const pensionsDaten = person.pensionsDaten.find(datum => datum._id == datumId);
  
      if (!pensionsDaten) {
        return res.status(404).json({ error: 'PensionsDaten not found' });
      }
  
      // Update the pensionsDaten object
      Object.assign(pensionsDaten, newData);
  
      // Save the updated person document
      const updatedPerson = await person.save();
  
      res.json(updatedPerson);
    } catch (error) {
      console.error('Error updating pensionsDaten:', error.message);
      res.status(500).json({ error: error.message });
    }
  });

  router.put("/person/:personId/ehegattenDaten/:datumId", async (req, res, next) => {
    const { personId, datumId } = req.params;
    const newData = req.body;
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
    
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Find the ehegattenDaten object within the person's ehegattenDaten array
      const ehegattenDaten = person.ehegattenDaten.find(datum => datum._id == datumId);
  
      if (!ehegattenDaten) {
        return res.status(404).json({ error: 'EhegattenDaten not found' });
      }
  
      // Update the ehegattenDaten object
      Object.assign(ehegattenDaten, newData);
  
      // Save the updated person document
      const updatedPerson = await person.save();
  
      res.json(updatedPerson);
    } catch (error) {
      console.error('Error updating ehegattenDaten:', error.message);
      res.status(500).json({ error: error.message });
    }
  });
  
  
  router.put("/person/:personId/rentenerstberechnungteil1/:datumId", async (req, res, next) => {
    const { personId, datumId } = req.params;
    const newData = req.body;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Find the rentenErstberechnungTeil1Daten object within the person's rentenErstberechnungTeil1Daten array
      const rentenErstberechnungTeil1Daten = person.rentenErstberechnungTeil1Daten.find(datum => datum._id == datumId);
  
      if (!rentenErstberechnungTeil1Daten) {
        return res.status(404).json({ error: 'RentenErstberechnungTeil1Daten not found' });
      }
  
      // Update the rentenErstberechnungTeil1Daten object
      Object.assign(rentenErstberechnungTeil1Daten, newData);
  
      // Save the updated person document
      const updatedPerson = await person.save();
  
      res.json(updatedPerson);
    } catch (error) {
      console.error('Error updating rentenErstberechnungTeil1Daten:', error.message);
      res.status(500).json({ error: error.message });
    }
  });


  router.put("/person/:personId/rentenerstberechnungteil2/:rentenId", async (req, res, next) => {
    const { personId, rentenId } = req.params;
    const newData = req.body;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Find the rentenErstberechnungTeil2Daten object within the person's rentenErstberechnungTeil2Daten array
      const rentenErstberechnungTeil2Daten = person.rentenErstberechnungTeil2Daten.id(rentenId);
  
      if (!rentenErstberechnungTeil2Daten) {
        return res.status(404).json({ error: 'RentenErstberechnungTeil2Daten not found' });
      }
  
      // Update the rentenErstberechnungTeil2Daten object
      Object.assign(rentenErstberechnungTeil2Daten, newData);
  
      // Save the updated person document
      const updatedPerson = await person.save();
  
      res.json(updatedPerson);
    } catch (error) {
      console.error('Error updating rentenErstberechnungTeil2Daten:', error.message);
      res.status(500).json({ error: error.message });
    }
  });


  router.put("/person/:personId/datenbzglderlaufendenrente/:datenId", async (req, res, next) => {
    const { personId, datenId } = req.params;
    const newData = req.body;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Find the datenbzglderlaufendenRente object within the person's datenbzglderlaufendenRente array
      const datenbzglderlaufendenRente = person.datenbzglderlaufendenRente.id(datenId);
  
      if (!datenbzglderlaufendenRente) {
        return res.status(404).json({ error: 'DatenbzglderlaufendenRente not found' });
      }
  
      // Update the datenbzglderlaufendenRente object
      Object.assign(datenbzglderlaufendenRente, newData);
  
      // Save the updated person document
      const updatedPerson = await person.save();
  
      res.json(updatedPerson);
    } catch (error) {
      console.error('Error updating datenbzglderlaufendenRente:', error.message);
      res.status(500).json({ error: error.message });
    }
  });

  router.put("/person/:personId/personaldatenzumverbliebenenangehoerigen/:datenId", async (req, res, next) => {
    const { personId, datenId } = req.params;
    const newData = req.body;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Find the personaldatenZumVerbliebenenAngehoerigen object within the person's personaldatenZumVerbliebenenAngehoerigen array
      const personaldatenZumVerbliebenenAngehoerigen = person.personaldatenangehoeriger.id(datenId);
  
      if (!personaldatenZumVerbliebenenAngehoerigen) {
        return res.status(404).json({ error: 'PersonaldatenZumVerbliebenenAngehoerigen not found' });
      }
  
      // Update the personaldatenZumVerbliebenenAngehoerigen object
      Object.assign(personaldatenZumVerbliebenenAngehoerigen, newData);
  
      // Save the updated person document
      const updatedPerson = await person.save();
  
      res.json(updatedPerson);
    } catch (error) {
      console.error('Error updating personaldatenZumVerbliebenenAngehoerigen:', error.message);
      res.status(500).json({ error: error.message });
    }
  });
  
  
  
  





  //GET Methods

  router.get("/person", async (req, res, next) => {
    try {
      const allPersons = await Person.find();
      res.json(allPersons);
    } catch (error) {
      console.error('Error fetching all persons:', error.message);
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/person/:id", async (req, res, next) => {
    const personId = req.params.id;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      res.json(person);
    } catch (error) {
      console.error('Error fetching person data:', error.message);
      res.status(500).json({ error: error.message });
    }
  });



  router.get("/person/:id/pensionsDaten", async (req, res, next) => {
    const personId = req.params.id;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Extract pensionsDaten from the found person
      const pensionsDaten = person.pensionsDaten;
  
      res.json(pensionsDaten);
    } catch (error) {
      console.error('Error fetching pensionsDaten of the person:', error.message);
      res.status(500).json({ error: error.message });
    }
  });



  router.get("/person/:id/ehegattenDaten", async (req, res, next) => {
    const personId = req.params.id;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Extract ehegattenDaten from the found person
      const ehegattenDaten = person.ehegattenDaten;
  
      res.json(ehegattenDaten);
    } catch (error) {
      console.error('Error fetching ehegattenDaten of the person:', error.message);
      res.status(500).json({ error: error.message });
    }
  });



  router.get("/person/:id/rentenerstberechnungteil1", async (req, res, next) => {
    const personId = req.params.id;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Extract rentenerstberechnungteil1Daten from the found person
      const rentenerstberechnungteil1Daten = person.rentenErstberechnungTeil1Daten;
  
      res.json(rentenerstberechnungteil1Daten);
    } catch (error) {
      console.error('Error fetching rentenerstberechnungteil1 data of the person:', error.message);
      res.status(500).json({ error: error.message });
    }
  });



  
  router.get("/person/:id/rentenerstberechnungteil2", async (req, res, next) => {
    const personId = req.params.id;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Extract rentenerstberechnungteil2Daten from the found person
      const rentenerstberechnungteil2Daten = person.rentenErstberechnungTeil2Daten;
  
      res.json(rentenerstberechnungteil2Daten);
    } catch (error) {
      console.error('Error fetching rentenerstberechnungteil2 data of the person:', error.message);
      res.status(500).json({ error: error.message });
    }
  });




  router.get("/person/:id/datenbzglderlaufendenrente", async (req, res, next) => {
    const personId = req.params.id;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Extract datenbzglderlaufendenRente from the found person
      const datenbzglderlaufendenRente = person.datenbzglderlaufendenRente;
  
      res.json(datenbzglderlaufendenRente);
    } catch (error) {
      console.error('Error fetching datenbzglderlaufendenRente data of the person:', error.message);
      res.status(500).json({ error: error.message });
    }
  });



  router.get("/person/:id/personaldatenzumverbliebenenangehoerigen", async (req, res, next) => {
    const personId = req.params.id;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      // Extract personaldatenZumVerbliebenenAngehoerigen from the found person
      const personaldatenZumVerbliebenenAngehoerigen = person.personaldatenangehoeriger;
  
      res.json(personaldatenZumVerbliebenenAngehoerigen);
    } catch (error) {
      console.error('Error fetching personaldatenZumVerbliebenenAngehoerigen data of the person:', error.message);
      res.status(500).json({ error: error.message });
    }
  });







  // Get Methods for detail

  router.get("/person/:personId/pensionsDaten/:pensionsDatenId", async (req, res, next) => {
    const { personId, pensionsDatenId } = req.params;
  
    try {
      // Find the person by ID
      const person = await Person.findById(personId);
  
      if (!person) {
        return res.status(404).json({ error: 'Person not found' });
      }
      // Find the pensionsDaten object within the person's pensionsDaten array
      const pensionsDaten = person.pensionsDaten.find(datum => datum._id == pensionsDatenId);
  
      if (!pensionsDaten) {
        return res.status(404).json({ error: 'PensionsDaten not found' });
      }
      res.json(pensionsDaten);
    } catch (error) {
      console.error('Error fetching pensionsDaten:', error.message);
      res.status(500).json({ error: error.message });
    }
  });


  router.get("/person/:personId/ehegattenDaten/:ehegattenDatenId", async (req, res, next) => {
    const { personId, ehegattenDatenId } = req.params;

    try {
        // Find the person by ID
        const person = await Person.findById(personId);

        if (!person) {
            return res.status(404).json({ error: 'Person not found' });
        }

        // Find the specific ehegattenDaten object within the person's ehegattenDaten array
        const ehegattenDaten = person.ehegattenDaten.find(datum => datum._id == ehegattenDatenId);

        if (!ehegattenDaten) {
            return res.status(404).json({ error: 'EhegattenDaten not found' });
        }

        res.json(ehegattenDaten);
    } catch (error) {
        console.error('Error fetching ehegattenDaten of the person:', error.message);
        res.status(500).json({ error: error.message });
    }
});


router.get("/person/:personId/rentenerstberechnungteil1/:rentenErstberechnungTeil1DatenId", async (req, res, next) => {
  const { personId, rentenErstberechnungTeil1DatenId } = req.params;

  try {
      // Find the person by ID
      const person = await Person.findById(personId);

      if (!person) {
          return res.status(404).json({ error: 'Person not found' });
      }

      // Find the rentenErstberechnungTeil1Daten object within the person's rentenErstberechnungTeil1Daten array
      const rentenErstberechnungTeil1Daten = person.rentenErstberechnungTeil1Daten.find(data => data._id == rentenErstberechnungTeil1DatenId);

      if (!rentenErstberechnungTeil1Daten) {
          return res.status(404).json({ error: 'RentenErstberechnungTeil1Daten not found' });
      }

      res.json(rentenErstberechnungTeil1Daten);
  } catch (error) {
      console.error('Error fetching rentenErstberechnungTeil1Daten:', error.message);
      res.status(500).json({ error: error.message });
  }
});


router.get("/person/:personId/rentenerstberechnungteil2/:rentenErstberechnungTeil2DatenId", async (req, res, next) => {
  const { personId, rentenErstberechnungTeil2DatenId } = req.params;

  try {
    // Find the person by ID
    const person = await Person.findById(personId);

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Find the rentenErstberechnungTeil2Daten object within the person's rentenErstberechnungTeil2Daten array
    const rentenErstberechnungTeil2Daten = person.rentenErstberechnungTeil2Daten.find(data => data._id == rentenErstberechnungTeil2DatenId);

    if (!rentenErstberechnungTeil2Daten) {
      return res.status(404).json({ error: 'RentenErstberechnungTeil2Daten not found' });
    }

    res.json(rentenErstberechnungTeil2Daten);
  } catch (error) {
    console.error('Error fetching rentenErstberechnungTeil2Daten:', error.message);
    res.status(500).json({ error: error.message });
  }
});


router.get("/person/:personId/datenBzglDerLaufendenRente/:datenBzglDerLaufendenRenteId", async (req, res, next) => {
  const { personId, datenBzglDerLaufendenRenteId } = req.params;

  try {
      // Find the person by ID
      const person = await Person.findById(personId);

      if (!person) {
          return res.status(404).json({ error: 'Person not found' });
      }

      // Find the datenBzglDerLaufendenRente object within the person's datenBzglDerLaufendenRente array
      const datenBzglDerLaufendenRente = person.datenbzglderlaufendenRente.find(data => data._id == datenBzglDerLaufendenRenteId);

      if (!datenBzglDerLaufendenRente) {
          return res.status(404).json({ error: 'DatenBzglDerLaufendenRente not found' });
      }

      res.json(datenBzglDerLaufendenRente);
  } catch (error) {
      console.error('Error fetching datenBzglDerLaufendenRente:', error.message);
      res.status(500).json({ error: error.message });
  }
});


router.get("/person/:personId/personaldatenZumVerbliebenenAngehoerigen/:personaldatenZumVerbliebenenAngehoerigenId", async (req, res, next) => {
  const { personId, personaldatenZumVerbliebenenAngehoerigenId } = req.params;

  try {
      // Find the person by ID
      const person = await Person.findById(personId);

      if (!person) {
          return res.status(404).json({ error: 'Person not found' });
      }

      // Find the personaldatenZumVerbliebenenAngehoerigen object within the person's personaldatenZumVerbliebenenAngehoerigen array
      const personaldatenZumVerbliebenenAngehoerigen = person.personaldatenangehoeriger.find(data => data._id == personaldatenZumVerbliebenenAngehoerigenId);

      if (!personaldatenZumVerbliebenenAngehoerigen) {
          return res.status(404).json({ error: 'Personaldata not found' });
      }

      res.json(personaldatenZumVerbliebenenAngehoerigen);
  } catch (error) {
      console.error('Error fetching personaldatenZumVerbliebenenAngehoerigen:', error.message);
      res.status(500).json({ error: error.message });
  }
});


// freestyle+



router.get('/persons/:personalnummer', async (req, res) => {
  const { personalnummer } = req.params; // Extract personalnummer from URL parameters

  try {
    const person = await Person.findOne({ personalnummer: personalnummer });

    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }

    res.json(person);
  } catch (err) {
    console.error('Error fetching person by personalnummer:', err.message);
    res.status(500).json({ message: err.message });
  }
});








// Delete

router.delete('/persons/:id', async (req, res) => {
  const personId = req.params.id;

  try {
    const deletedPerson = await Person.findByIdAndDelete(personId);

    if (!deletedPerson) {
      return res.status(404).json({ message: 'Person not found' });
    }

    res.json({ message: 'Person deleted successfully', deletedPerson });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/person/:personId/rentenerstberechnungteil1/:rentenErstberechnungTeil1DatenId", async (req, res) => {
  const { personId, rentenErstberechnungTeil1DatenId } = req.params;

  try {
    // Find the person by ID
    const person = await Person.findById(personId);

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Filter out the rentenErstberechnungTeil1Daten object from the array
    const updatedRentenErstberechnungTeil1Daten = person.rentenErstberechnungTeil1Daten.filter(data => data._id != rentenErstberechnungTeil1DatenId);

    // Ensure that the data was actually deleted
    if (updatedRentenErstberechnungTeil1Daten.length === person.rentenErstberechnungTeil1Daten.length) {
      return res.status(404).json({ error: 'RentenErstberechnungTeil1Daten not found' });
    }

    // Update the person object with the modified rentenErstberechnungTeil1Daten array
    person.rentenErstberechnungTeil1Daten = updatedRentenErstberechnungTeil1Daten;

    // Save the updated person object
    await person.save();

    res.json({ message: 'RentenErstberechnungTeil1Daten deleted successfully' });
  } catch (error) {
    console.error('Error deleting rentenErstberechnungTeil1Daten:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/person/:personId/rentenerstberechnungteil2/:rentenErstberechnungTeil2DatenId", async (req, res, next) => {
  const { personId, rentenErstberechnungTeil2DatenId } = req.params;
  
  try {
    const person = await Person.findById(personId);
    
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    
    const index = person.rentenErstberechnungTeil2Daten.findIndex(data => data._id == rentenErstberechnungTeil2DatenId);
    
    if (index === -1) {
      return res.status(404).json({ error: 'RentenErstberechnungTeil2Daten not found' });
    }
    
    person.rentenErstberechnungTeil2Daten.splice(index, 1);
    await person.save();
    
    res.json({ message: 'RentenErstberechnungTeil2Daten deleted successfully' });
  } catch (error) {
    console.error('Error deleting rentenErstberechnungTeil2Daten:', error.message);
    res.status(500).json({ error: error.message });
  }
});


router.delete("/person/:personId/pensionsDaten/:pensionsDatenId", async (req, res, next) => {
  const { personId, pensionsDatenId } = req.params;
  
  try {
    const person = await Person.findById(personId);
    
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    
    const index = person.pensionsDaten.findIndex(datum => datum._id == pensionsDatenId);
    
    if (index === -1) {
      return res.status(404).json({ error: 'PensionsDaten not found' });
    }
    
    person.pensionsDaten.splice(index, 1);
    await person.save();
    
    res.json({ message: 'PensionsDaten deleted successfully' });
  } catch (error) {
    console.error('Error deleting pensionsDaten:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/person/:personId/ehegattenDaten/:ehegattenDatenId", async (req, res, next) => {
  const { personId, ehegattenDatenId } = req.params;
  
  try {
    const person = await Person.findById(personId);
    
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    
    const index = person.ehegattenDaten.findIndex(datum => datum._id == ehegattenDatenId);
    
    if (index === -1) {
      return res.status(404).json({ error: 'EhegattenDaten not found' });
    }
    
    person.ehegattenDaten.splice(index, 1);
    await person.save();
    
    res.json({ message: 'EhegattenDaten deleted successfully' });
  } catch (error) {
    console.error('Error deleting ehegattenDaten:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/person/:personId/datenBzglDerLaufendenRente/:datenBzglDerLaufendenRenteId", async (req, res, next) => {
  const { personId, datenBzglDerLaufendenRenteId } = req.params;
  
  try {
    const person = await Person.findById(personId);
    
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    
    const index = person.datenbzglderlaufendenRente.findIndex(data => data._id == datenBzglDerLaufendenRenteId);
    
    if (index === -1) {
      return res.status(404).json({ error: 'DatenBzglDerLaufendenRente not found' });
    }
    
    person.datenbzglderlaufendenRente.splice(index, 1);
    await person.save();
    
    res.json({ message: 'DatenBzglDerLaufendenRente deleted successfully' });
  } catch (error) {
    console.error('Error deleting datenBzglDerLaufendenRente:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.delete("/person/:personId/personaldatenZumVerbliebenenAngehoerigen/:personaldatenZumVerbliebenenAngehoerigenId", async (req, res, next) => {
  const { personId, personaldatenZumVerbliebenenAngehoerigenId } = req.params;
  
  try {
    const person = await Person.findById(personId);
    
    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }
    
    const index = person.personaldatenangehoeriger.findIndex(data => data._id == personaldatenZumVerbliebenenAngehoerigenId);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Personaldata not found' });
    }
    
    person.personaldatenangehoeriger.splice(index, 1);
    await person.save();
    
    res.json({ message: 'Personaldata deleted successfully' });
  } catch (error) {
    console.error('Error deleting personaldatenZumVerbliebenenAngehoerigen:', error.message);
    res.status(500).json({ error: error.message });
  }
});



// Post by personalnummer

// Adding data by personalnummer
router.post("/person/personalnummer/:personalnummer/rentenerstberechnungteil1", async (req, res, next) => {
  const { personalnummer } = req.params;
  const newData = req.body;

  try {
    // Find the person by personalnummer
    const person = await Person.findOne({ personalnummer: personalnummer });

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Push the new data to the rentenErstberechnungTeil1Daten array
    person.rentenErstberechnungTeil1Daten.push(newData);

    // Save the updated person document
    const updatedPerson = await person.save();

    res.json(updatedPerson);
  } catch (error) {
    console.error('Error adding data to rentenErstberechnungTeil1Daten:', error.message);
    res.status(500).json({ error: error.message });
  }
});

router.post("/person/personalnummer/:personalnummer/rentenerstberechnungteil2", async (req, res, next) => {
  const { personalnummer } = req.params;
  const newData = req.body;

  try {
    // Find the person by personalnummer
    const person = await Person.findOne({ personalnummer: personalnummer });

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Push the new data to the rentenErstberechnungTeil2Daten array
    person.rentenErstberechnungTeil2Daten.push(newData);

    // Save the updated person document
    const updatedPerson = await person.save();

    res.json(updatedPerson);
  } catch (error) {
    console.error('Error adding data to rentenErstberechnungTeil2Daten:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Adding data by personalnummer for ehegattenDaten
router.post("/person/personalnummer/:personalnummer/ehegattenDaten", async (req, res, next) => {
  const { personalnummer } = req.params;
  const newData = req.body;

  try {
    // Find the person by personalnummer
    const person = await Person.findOne({ personalnummer: personalnummer });

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Push the new data to the ehegattenDaten array
    person.ehegattenDaten.push(newData);

    // Save the updated person document
    const updatedPerson = await person.save();

    res.json(updatedPerson);
  } catch (error) {
    console.error('Error adding data to ehegattenDaten:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Adding data by personalnummer for pensionsDaten
router.post("/person/personalnummer/:personalnummer/pensionsDaten", async (req, res, next) => {
  const { personalnummer } = req.params;
  const newData = req.body;

  try {
    // Find the person by personalnummer
    const person = await Person.findOne({ personalnummer: personalnummer });

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Push the new data to the pensionsDaten array
    person.pensionsDaten.push(newData);

    // Save the updated person document
    const updatedPerson = await person.save();

    res.json(updatedPerson);
  } catch (error) {
    console.error('Error adding data to pensionsDaten:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Adding data by personalnummer for datenBzglDerLaufendenRente
router.post("/person/personalnummer/:personalnummer/datenBzglDerLaufendenRente", async (req, res, next) => {
  const { personalnummer } = req.params;
  const newData = req.body;

  try {
    // Find the person by personalnummer
    const person = await Person.findOne({ personalnummer: personalnummer });

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Push the new data to the datenbzglderlaufendenRente array
    person.datenbzglderlaufendenRente.push(newData);

    // Save the updated person document
    const updatedPerson = await person.save();

    res.json(updatedPerson);
  } catch (error) {
    console.error('Error adding data to datenbzglderlaufendenRente:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Adding data by personalnummer for personaldatenZumVerbliebenenAngehoerigen
router.post("/person/personalnummer/:personalnummer/personaldatenZumVerbliebenenAngehoerigen", async (req, res, next) => {
  const { personalnummer } = req.params;
  const newData = req.body;

  try {
    // Find the person by personalnummer
    const person = await Person.findOne({ personalnummer: personalnummer });

    if (!person) {
      return res.status(404).json({ error: 'Person not found' });
    }

    // Push the new data to the personaldatenangehoeriger array
    person.personaldatenangehoeriger.push(newData);

    // Save the updated person document
    const updatedPerson = await person.save();

    res.json(updatedPerson);
  } catch (error) {
    console.error('Error adding data to personaldatenZumVerbliebenenAngehoerigen:', error.message);
    res.status(500).json({ error: error.message });
  }
});







// Anpassungsberechnungen 

// POST route for adjusting pensions for multiple persons

/**


// Route for adjusting pensions
// Route for adjusting pensions
router.post('/adjustPensions', async (req, res) => {
  const { dateOnAdjustmentOccurs, monatlicheMindestrente, lebensunterhaltungskosteindizesInPct, steigungssatzInDerWohnungswirtschaftInPct } = req.body;

  try {
    const adjustmentYear = new Date(dateOnAdjustmentOccurs).getFullYear();

    // Fetch persons who meet criteria
    const persons = await Person.find({
      $and: [
        { versorgungsordnung: { $in: [71, 61, 75, 65, 76, 66, 77, 67, 78, 68, 82, 86, 90] } },
        { aktuelleStatusgruppe: { $ne: 'verstorben' } }
      ]
    });

    // Iterate through persons and update datenBzglDerLaufendenRente for each
    for (let person of persons) {
      // Check if there's an existing entry for the year of adjustment
      const hasExistingEntryForYear = person.datenbzglderlaufendenRente.some(entry => {
        const entryYear = new Date(entry.gueltigVon).getFullYear();
        return entryYear === adjustmentYear;
      });

      if (hasExistingEntryForYear) {
        // Skip this person if there's an existing entry for the year
        continue;
      }

      const lastEntry = person.datenbzglderlaufendenRente[person.datenbzglderlaufendenRente.length - 1];
      
      if (!lastEntry) {
        continue; // Skip if no last entry
      }

      // Calculate adjusted values
      const adjustedPension = calculateAdjustedPension(
        lastEntry.pension,
        steigungssatzInDerWohnungswirtschaftInPct
      );

      const adjustedBetrRente = lastEntry.betrRente ? calculateAdjustedPension(
        lastEntry.betrRente,
        steigungssatzInDerWohnungswirtschaftInPct
      ) : 0; // Ensure betrRente exists or default to 0

      const newEntry = {
        gueltigVon: dateOnAdjustmentOccurs,
        pension: adjustedPension,
        betrRente: adjustedBetrRente,
        eingabedatum: new Date(),
        bezugsart: lastEntry.bezugsart,
        anpassungsschluessel: lastEntry.anpassungsschluessel,
        krankenkassenkennziffer: lastEntry.krankenkassenkennziffer,
        gesetzlicheSVRente: lastEntry.gesetzlicheSVRente,
        renteAusBefrLebensvers: lastEntry.renteAusBefrLebensvers,
        zusatzrente: lastEntry.zusatzrente,
        zusatzrenteName: lastEntry.zusatzrenteName,
        ausgleich: lastEntry.ausgleich,
        weitereRenteUnterPersNr: lastEntry.weitereRenteUnterPersNr,
        anzahlKinder: lastEntry.anzahlKinder,
        entgeltpunkte: lastEntry.entgeltpunkte,
        steuerklasse: lastEntry.steuerklasse,
        zugangsfaktor: lastEntry.zugangsfaktor,
        beitragFuerKrankenvers: lastEntry.beitragFuerKrankenvers,
        rentenartfaktor: lastEntry.rentenartfaktor,
        teilrentenfaktor: lastEntry.teilrentenfaktor,
        // Add other fields as needed
      };

      person.datenbzglderlaufendenRente.push(newEntry);
      await person.save();
    }

    res.status(200).json({ message: 'Pensions adjusted successfully' });
  } catch (error) {
    console.error('Error adjusting pensions:', error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

*/

// Route for adjusting pensions
router.post('/adjustPensions', async (req, res) => {
  const { dateOnAdjustmentOccurs, monatlicheMindestrente, lebensunterhaltungskosteindizesInPct, steigungssatzInDerWohnungswirtschaftInPct } = req.body;

  try {
    const adjustmentYear = new Date(dateOnAdjustmentOccurs).getFullYear();

    // Fetch persons who meet criteria
    const persons = await Person.find({
      $and: [
        { versorgungsordnung: { $in: [71, 61, 75, 65, 76, 66, 77, 67, 78, 68, 82, 86, 90] } },
        { aktuelleStatusgruppe: { $ne: 'verstorben' } }
      ]
    });

    let adjustedCount = 0; // Track the number of persons adjusted
    let adjustmentDetails = []; // To store details for CSV

    // Iterate through persons and update datenBzglDerLaufendenRente for each
    for (let person of persons) {
      // Check if there's an existing entry for the year of adjustment
      const hasExistingEntryForYear = person.datenbzglderlaufendenRente.some(entry => {
        const entryYear = new Date(entry.gueltigVon).getFullYear();
        return entryYear === adjustmentYear;
      });

      if (hasExistingEntryForYear) {
        // Skip this person if there's an existing entry for the year
        continue;
      }

      const lastEntry = person.datenbzglderlaufendenRente[person.datenbzglderlaufendenRente.length - 1];
      
      if (!lastEntry) {
        continue; // Skip if no last entry
      }

      // Calculate adjusted values
      const adjustedPension = calculateAdjustedPension(
        lastEntry.pension,
        steigungssatzInDerWohnungswirtschaftInPct
      );

      const adjustedBetrRente = lastEntry.betrRente ? calculateAdjustedPension(
        lastEntry.betrRente,
        steigungssatzInDerWohnungswirtschaftInPct
      ) : 0; // Ensure betrRente exists or default to 0

      const newEntry = {
        gueltigVon: dateOnAdjustmentOccurs,
        pension: adjustedPension,
        betrRente: adjustedBetrRente,
        eingabedatum: new Date(),
        bezugsart: lastEntry.bezugsart,
        anpassungsschluessel: lastEntry.anpassungsschluessel,
        krankenkassenkennziffer: lastEntry.krankenkassenkennziffer,
        gesetzlicheSVRente: lastEntry.gesetzlicheSVRente,
        renteAusBefrLebensvers: lastEntry.renteAusBefrLebensvers,
        zusatzrente: lastEntry.zusatzrente,
        zusatzrenteName: lastEntry.zusatzrenteName,
        ausgleich: lastEntry.ausgleich,
        weitereRenteUnterPersNr: lastEntry.weitereRenteUnterPersNr,
        anzahlKinder: lastEntry.anzahlKinder,
        entgeltpunkte: lastEntry.entgeltpunkte,
        steuerklasse: lastEntry.steuerklasse,
        zugangsfaktor: lastEntry.zugangsfaktor,
        beitragFuerKrankenvers: lastEntry.beitragFuerKrankenvers,
        rentenartfaktor: lastEntry.rentenartfaktor,
        teilrentenfaktor: lastEntry.teilrentenfaktor,
        // Add other fields as needed
      };

      person.datenbzglderlaufendenRente.push(newEntry);
      await person.save();
      
      adjustedCount++; // Increment count for each adjusted person
      
      // Collect details for CSV
      adjustmentDetails.push({
        personalnummer: person.personalnummer,
        name: person.name, // Adjust according to your model
        pensionLastPeriod: lastEntry.pension,
        pensionNewPeriod: adjustedPension,
        betrRenteLastPeriod: lastEntry.betrRente,
        betrRenteNewPeriod: adjustedBetrRente
      });
    }

    res.status(200).json({
      message: `Pensionen erfolgreich angepasst für ${adjustedCount} Personen`,
      adjustmentDetails // Send details for CSV generation
    });
  } catch (error) {
    console.error('Error adjusting pensions:', error.message);
    res.status(500).json({ error: error.message });
  }
});

// Route for backing up the database
router.get('/backupDatabase', (req, res) => {
  const backupFileName = `Neue_Heimat_2.0_${new Date().toISOString().split('T')[0]}.gz`;
  const backupFilePath = path.join(__dirname, '..', 'backups', backupFileName);

  // Create the backups directory if it doesn't exist
  if (!fs.existsSync(path.dirname(backupFilePath))) {
    fs.mkdirSync(path.dirname(backupFilePath), { recursive: true });
  }

  // Run mongodump command to create the backup
  const command = `mongodump --uri="mongodb://127.0.0.1:27017/neue_heimat_xx" --gzip --archive=${backupFilePath}`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error during database backup: ${stderr}`);
      return res.status(500).json({ error: 'Failed to create backup' });
    }

    // Send the backup file to the client
    res.download(backupFilePath, backupFileName, (err) => {
      if (err) {
        console.error(`Error sending backup file: ${err}`);
        res.status(500).json({ error: 'Failed to send backup file' });
      }

      // Delete the backup file after sending
      fs.unlink(backupFilePath, (unlinkErr) => {
        if (unlinkErr) {
          console.error(`Error deleting backup file: ${unlinkErr}`);
        }
      });
    });
  });
});



// Endpoint to get the two latest adjustments for each person
router.get('/latestAdjustments', async (req, res) => {
  try {
    // Define the criteria for versorgungsordnung
    const validVersorgungsordnung = [71, 61, 75, 65, 76, 66, 77, 67, 78, 68, 82, 86, 90];
    
    // Find persons matching the criteria
    const persons = await Person.find({
      versorgungsordnung: { $in: validVersorgungsordnung },
      aktuelleStatusgruppe: { $ne: 'verstorben' },
    });

    const result = [];

    for (const person of persons) {
      if (person.datenbzglderlaufendenRente.length < 2) {
        continue; // Skip persons with less than 2 entries
      }

      // Sort entries by gueltigVon in descending order
      const sortedEntries = person.datenbzglderlaufendenRente
        .sort((a, b) => new Date(b.gueltigVon) - new Date(a.gueltigVon));

      // Get the two latest entries
      const latestTwoEntries = sortedEntries.slice(0, 2);

      result.push({
        personalnummer: person.personalnummer,
        name: person.name,
        adresse: person.adresse,
        geburtsdatum: person.geburtsdatum,
        adjustments: latestTwoEntries
      });
    }

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching latest adjustments:', error.message);
    res.status(500).json({ error: error.message });
  }
});




// RGO Halbjahr 1 – Anpassung
router.post('/adjustRGOHalfYear1', async (req, res) => {
  const {
    terminangabe,
    gueltigVon,
    gueltigBis,
    monatlicheMindestrente,
    sollGesamtversorgungAngepasstWerden,
    anpassungswertInPct
  } = req.body;

  try {
    const persons = await Person.find({
      $and: [
        { versorgungsordnung: { $in: [72, 73, 79] } },
        { aktuelleStatusgruppe: { $ne: 'verstorben' } }
      ]
    });

    const toDateKey = (d) => {
      const x = new Date(d);
      const yyyy = x.getFullYear();
      const mm = String(x.getMonth() + 1).padStart(2, '0');
      const dd = String(x.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    };

    const specialHalfPct = new Set([500433, 404165, 404164, 500446]);

    const parseNum = (v) => {
      const n = Number(v);
      return Number.isFinite(n) ? n : 0;
    };

    const clamp2 = (v) => Math.round((v + Number.EPSILON) * 100) / 100;

    const calculate = ({
      oldGesamtversorgung,
      gesetzlicheSVRente,
      renteAusBefrLebensvers,
      pct,
      sollAnpassen,
      abschlagPct,
      ratierlicherAnspruchPct,
      mindestrente
    }) => {
      // neue Gesamtversorgung
      const newGesamtversorgung = sollAnpassen
        ? oldGesamtversorgung * (1 + pct / 100)
        : oldGesamtversorgung;

      // Zwischenbasis (inkl. befr. LV vor Abschlag)
      const base = newGesamtversorgung - gesetzlicheSVRente - (renteAusBefrLebensvers || 0);

      // Abschlag (Prozent)
      const afterAbschlag = abschlagPct > 0 ? base * (1 - abschlagPct / 100) : base;

      // Mindestrente greift auf "betrRente1"
      const betrRente1 = afterAbschlag < mindestrente ? mindestrente : afterAbschlag;

      // ratierlicher Anspruch
      const betrRenteFinal =
        ratierlicherAnspruchPct > 0 ? betrRente1 * (ratierlicherAnspruchPct / 100) : betrRente1;

      return {
        newGesamtversorgung: clamp2(newGesamtversorgung),
        betrRenteNew: clamp2(betrRenteFinal)
      };
    };

    let adjustedCount = 0;
    const adjustmentDetails = [];

    for (const person of persons) {
      const arr = person.datenbzglderlaufendenRente || [];
      const lastEntry = arr.length > 0 ? arr[arr.length - 1] : null;

      if (!lastEntry) continue; // ohne Vorperiode keine Berechnung

      // Skip: wenn bereits Eintrag mit gleichem gueltigVon existiert
      const targetKey = toDateKey(gueltigVon);
      const alreadyExists = arr.some(e => e?.gueltigVon && toDateKey(e.gueltigVon) === targetKey);
      if (alreadyExists) continue;

      // Prozentsatz ggf. halbieren
      let pct = parseNum(anpassungswertInPct);
      if (specialHalfPct.has(person.personalnummer)) pct = pct / 2;

      // Abschlag & ratierlicher Anspruch aus rentenErstberechnungTeil2Daten (falls vorhanden)
      const teil2Arr = person.rentenErstberechnungTeil2Daten || [];
      const teil2Last = teil2Arr.length > 0 ? teil2Arr[teil2Arr.length - 1] : null;

      const abschlagPct = parseNum(teil2Last?.abschlag); // z.B. 4.33
      const ratierlicherAnspruchPct = parseNum(teil2Last?.ratierlicherAnspruch); // z.B. 55

      // Rente aus befr. LV (laut Vorgabe: aus Teil2 nehmen; fallback: lastEntry)
      const renteAusBefrLebensvers =
        parseNum(teil2Last?.renteAusBefrLebensvers) || parseNum(lastEntry?.renteAusBefrLebensvers);

      const oldGesamtversorgung = parseNum(lastEntry?.gesamtversorgung);
      const gesetzlicheSVRente = parseNum(lastEntry?.gesetzlicheSVRente);
      const mindestrente = parseNum(monatlicheMindestrente);

      const { newGesamtversorgung, betrRenteNew } = calculate({
        oldGesamtversorgung,
        gesetzlicheSVRente,
        renteAusBefrLebensvers,
        pct,
        sollAnpassen: !!sollGesamtversorgungAngepasstWerden,
        abschlagPct,
        ratierlicherAnspruchPct,
        mindestrente
      });

      // Neues Objekt: alles vom letzten Halbjahr übernehmen, nur relevante Felder ändern
      const newEntry = {
        ...lastEntry.toObject(),
        _id: undefined, // neuer Subdoc
        gueltigVon: new Date(gueltigVon),
        gueltigBis: new Date(gueltigBis),
        eingabedatum: new Date(), // Zeitpunkt Klick/Berechnung
        gesamtversorgung: newGesamtversorgung,
        betrRente: betrRenteNew
      };

      person.datenbzglderlaufendenRente.push(newEntry);
      await person.save();

      adjustedCount++;

      adjustmentDetails.push({
        personalnummer: person.personalnummer,
        name: person.name || '',
        betrRenteLastHalf: clamp2(parseNum(lastEntry?.betrRente)),
        betrRenteNewHalf: clamp2(betrRenteNew)
      });
    }

    res.status(200).json({
      message: `RGO Halbjahr 1 erfolgreich berechnet für ${adjustedCount} Personen`,
      adjustmentDetails
    });
  } catch (error) {
    console.error('Error adjusting RGO HalfYear1:', error.message);
    res.status(500).json({ error: error.message });
  }
});



// RGO Halbjahr 1 Serienbriefe – Daten liefern
router.post('/rgoHalfYear1Letters', async (req, res) => {
  const {
    terminangabe,                       // Datum im Briefkopf (z.B. 05.01.2026)
    gueltigVon,                         // Start der neuen Periode (z.B. 01.01.2026)
    anpassungswertInPct,                // z.B. 3.1
    monatlicheMindestrente              // z.B. 196
  } = req.body;

  try {
    const persons = await Person.find({
      $and: [
        { versorgungsordnung: { $in: [72, 73, 79] } },
        { aktuelleStatusgruppe: { $ne: 'verstorben' } }
      ]
    });

    const specialHalfPct = new Set([500433, 404165, 404164, 500446]);
    const num = (v) => {
      const n = Number(v);
      return Number.isFinite(n) ? n : 0;
    };
    const clamp2 = (v) => Math.round((v + Number.EPSILON) * 100) / 100;

    const toGermanDate = (d) => {
      const x = new Date(d);
      const dd = String(x.getDate()).padStart(2, '0');
      const mm = String(x.getMonth() + 1).padStart(2, '0');
      const yyyy = x.getFullYear();
      return `${dd}.${mm}.${yyyy}`;
    };

    const letters = [];

    for (const person of persons) {
      const arr = person.datenbzglderlaufendenRente || [];
      if (arr.length < 2) continue;

      const latest = arr[arr.length - 1];
      const previous = arr[arr.length - 2];

      // Nur Personen berücksichtigen, bei denen das neue Halbjahr bereits existiert
      // (weil die Berechnung vorher durchgeführt wurde)
      const latestKey = new Date(latest.gueltigVon).toISOString().slice(0, 10);
      const targetKey = new Date(gueltigVon).toISOString().slice(0, 10);
      if (latestKey !== targetKey) continue;

      // Eingaben
      let pct = num(anpassungswertInPct);
      if (specialHalfPct.has(person.personalnummer)) pct = pct / 2;

      const mindestrente = num(monatlicheMindestrente);

      // Werte aus Vorperiode
      const oldGesamt = num(previous.gesamtversorgung);
      const oldGesetzliche = num(previous.gesetzlicheSVRente);
      const oldRenteBefrLV = num(previous.renteAusBefrLebensvers);

      // Teil2 Daten (Abschlag, ratierlicher Anspruch, Rente aus befr. LV ggf. dort gepflegt)
      const teil2Arr = person.rentenErstberechnungTeil2Daten || [];
      const teil2Last = teil2Arr.length > 0 ? teil2Arr[teil2Arr.length - 1] : null;

      const abschlagPct = num(teil2Last?.abschlag); // Prozent
      const ratierlicherPct = num(teil2Last?.ratierlicherAnspruch); // Prozent
      const renteBefrLV = num(teil2Last?.renteAusBefrLebensvers) || oldRenteBefrLV;

      // Rechenweg:
      // neue Gesamtversorgung = alt * (1 + pct/100)
      const newGesamt = clamp2(oldGesamt * (1 + pct / 100));

      // Basis = neueGesamt - gesetzlicheSVRente - renteAusBefrLV  (wie von dir beschrieben: befr. LV vor Abschlag)
      const basis = clamp2(newGesamt - oldGesetzliche - renteBefrLV);

      // Abschlag (wenn vorhanden)
      const nachAbschlag = abschlagPct > 0 ? clamp2(basis * (1 - abschlagPct / 100)) : basis;

      // Mindestrente
      const betrRente1 = nachAbschlag < mindestrente ? mindestrente : nachAbschlag;

      // ratierlicher Anspruch
      const betrRenteFinal =
        ratierlicherPct > 0 ? clamp2(betrRente1 * (ratierlicherPct / 100)) : clamp2(betrRente1);

      // Zur Kontrolle: sollte mit latest.betrRente übereinstimmen
      const oldBetrRente = clamp2(num(previous.betrRente));
      const newBetrRente = clamp2(num(latest.betrRente)); // gespeicherter Wert
      // Optional: auf computed setzen, falls du absolut die Berechnung im Brief nutzen willst:
      // const newBetrRente = betrRenteFinal;

      letters.push({
        personalnummer: person.personalnummer,
        name: person.name || '',
        adresse: person.adresse || '',
        geburtsdatum: person.geburtsdatum ? toGermanDate(person.geburtsdatum) : '',
        terminangabe: terminangabe ? toGermanDate(terminangabe) : toGermanDate(new Date()),
        gueltigVon: toGermanDate(latest.gueltigVon),
        oldDateLabel: previous.gueltigBis ? toGermanDate(previous.gueltigBis) : toGermanDate(previous.gueltigVon),
        pctUsed: pct, // inkl. halbe Anpassung falls Spezial-PNR

        // Werte für Tabelle
        oldGesamt,
        newGesamt,
        oldGesetzliche,
        renteBefrLV,
        basis,
        abschlagPct,
        nachAbschlag,
        mindestrente,
        ratierlicherPct,
        oldBetrRente,
        newBetrRente
      });
    }

    res.status(200).json({ letters, count: letters.length });
  } catch (error) {
    console.error('Error building RGO HalfYear1 letters:', error.message);
    res.status(500).json({ error: error.message });
  }
});


// RGO Halbjahr 2 – Anpassung (gesetzliche SV-Rente wird erhöht, Gesamtversorgung bleibt gleich)
router.post('/adjustRGOHalfYear2', async (req, res) => {
  const {
    terminangabe,
    gueltigVon,
    gueltigBis,
    monatlicheMindestrente,
    sollGesetzlicheRenteAngepasstWerden,
    anpassungswertInPct
  } = req.body;

  try {
    const persons = await Person.find({
      $and: [
        { versorgungsordnung: { $in: [72, 73, 79] } },
        { aktuelleStatusgruppe: { $ne: 'verstorben' } }
      ]
    });

    const toDateKey = (d) => {
      const x = new Date(d);
      const yyyy = x.getFullYear();
      const mm = String(x.getMonth() + 1).padStart(2, '0');
      const dd = String(x.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    };

    const specialHalfPct = new Set([500433, 404165, 404164, 500446]);

    const parseNum = (v) => {
      const n = Number(v);
      return Number.isFinite(n) ? n : 0;
    };

    const clamp2 = (v) => Math.round((v + Number.EPSILON) * 100) / 100;

    const calculate = ({
      gesamtversorgungOld,
      gesetzlicheSVRenteOld,
      renteAusBefrLebensvers,
      pct,
      sollSVAnpassen,
      abschlagPct,
      ratierlicherAnspruchPct,
      mindestrente
    }) => {
      // 1) Gesamtversorgung bleibt gleich
      const gesamtversorgungNew = gesamtversorgungOld;

      // 2) gesetzliche SV-Rente wird erhöht (wenn gewünscht)
      const gesetzlicheSVRenteNew = sollSVAnpassen
        ? gesetzlicheSVRenteOld * (1 + pct / 100)
        : gesetzlicheSVRenteOld;

      // 3) Basis: GV - gesetzl. SV - befr. LV (vor Abschlag)
      const base =
        gesamtversorgungNew - gesetzlicheSVRenteNew - (renteAusBefrLebensvers || 0);

      // 4) Abschlag (Prozent)
      const afterAbschlag = abschlagPct > 0 ? base * (1 - abschlagPct / 100) : base;

      // 5) Mindestrente greift auf "betrRente1"
      const betrRente1 = afterAbschlag < mindestrente ? mindestrente : afterAbschlag;

      // 6) ratierlicher Anspruch (unverfallbarer Anspruch)
      const betrRenteFinal =
        ratierlicherAnspruchPct > 0
          ? betrRente1 * (ratierlicherAnspruchPct / 100)
          : betrRente1;

      return {
        gesetzlicheSVRenteNew: clamp2(gesetzlicheSVRenteNew),
        gesamtversorgungNew: clamp2(gesamtversorgungNew),
        betrRenteNew: clamp2(betrRenteFinal)
      };
    };

    let adjustedCount = 0;
    const adjustmentDetails = [];

    for (const person of persons) {
      const arr = person.datenbzglderlaufendenRente || [];
      const lastEntry = arr.length > 0 ? arr[arr.length - 1] : null;
      if (!lastEntry) continue;

      // Skip: wenn bereits Eintrag mit gleichem gueltigVon existiert
      const targetKey = toDateKey(gueltigVon);
      const alreadyExists = arr.some(e => e?.gueltigVon && toDateKey(e.gueltigVon) === targetKey);
      if (alreadyExists) continue;

      // Prozentsatz ggf. halbieren (Sonderfälle)
      let pct = parseNum(anpassungswertInPct);
      if (specialHalfPct.has(person.personalnummer)) pct = pct / 2;

      // Teil2-Daten (Abschlag / ratierlicher Anspruch / Rente aus befr. LV)
      const teil2Arr = person.rentenErstberechnungTeil2Daten || [];
      const teil2Last = teil2Arr.length > 0 ? teil2Arr[teil2Arr.length - 1] : null;

      const abschlagPct = parseNum(teil2Last?.abschlag);
      const ratierlicherAnspruchPct = parseNum(teil2Last?.ratierlicherAnspruch);

      const renteAusBefrLebensvers =
        parseNum(teil2Last?.renteAusBefrLebensvers) || parseNum(lastEntry?.renteAusBefrLebensvers);

      const gesamtversorgungOld = parseNum(lastEntry?.gesamtversorgung);
      const gesetzlicheSVRenteOld = parseNum(lastEntry?.gesetzlicheSVRente);
      const mindestrente = parseNum(monatlicheMindestrente);

      const { gesetzlicheSVRenteNew, gesamtversorgungNew, betrRenteNew } = calculate({
        gesamtversorgungOld,
        gesetzlicheSVRenteOld,
        renteAusBefrLebensvers,
        pct,
        sollSVAnpassen: !!sollGesetzlicheRenteAngepasstWerden,
        abschlagPct,
        ratierlicherAnspruchPct,
        mindestrente
      });

      const newEntry = {
        ...lastEntry.toObject(),
        _id: undefined,
        gueltigVon: new Date(gueltigVon),
        gueltigBis: new Date(gueltigBis),
        eingabedatum: new Date(),
        gesamtversorgung: gesamtversorgungNew,
        gesetzlicheSVRente: gesetzlicheSVRenteNew,
        betrRente: betrRenteNew
      };

      person.datenbzglderlaufendenRente.push(newEntry);
      await person.save();

      adjustedCount++;

      adjustmentDetails.push({
        personalnummer: person.personalnummer,
        name: person.name || '',
        gesetzlicheSVRenteLastHalf: clamp2(parseNum(lastEntry?.gesetzlicheSVRente)),
        gesetzlicheSVRenteNewHalf: clamp2(gesetzlicheSVRenteNew),
        betrRenteLastHalf: clamp2(parseNum(lastEntry?.betrRente)),
        betrRenteNewHalf: clamp2(betrRenteNew)
      });
    }

    res.status(200).json({
      message: `RGO Halbjahr 2 erfolgreich berechnet für ${adjustedCount} Personen`,
      adjustmentDetails
    });
  } catch (error) {
    console.error('Error adjusting RGO HalfYear2:', error.message);
    res.status(500).json({ error: error.message });
  }
});


// GET: Daten für RGO Halbjahr 2 Serienbriefe (nur Personen mit VO 72/73/79)
// Liefert pro Person die 2 letzten Einträge aus datenbzglderlaufendenRente,
// aber NUR wenn der letzte Eintrag gueltigVon = requested gueltigVon hat.
router.get('/rgoHalfYear2LetterData', async (req, res) => {
  try {
    const { gueltigVon } = req.query; // erwartet YYYY-MM-DD

    if (!gueltigVon) {
      return res.status(400).json({ error: 'gueltigVon query parameter is required (YYYY-MM-DD).' });
    }

    const toDateKey = (d) => {
      const x = new Date(d);
      const yyyy = x.getFullYear();
      const mm = String(x.getMonth() + 1).padStart(2, '0');
      const dd = String(x.getDate()).padStart(2, '0');
      return `${yyyy}-${mm}-${dd}`;
    };

    const targetKey = toDateKey(gueltigVon);

    const persons = await Person.find({
      $and: [
        { versorgungsordnung: { $in: [72, 73, 79] } },
        { aktuelleStatusgruppe: { $ne: 'verstorben' } }
      ]
    });

    const result = [];

    for (const person of persons) {
      const arr = person.datenbzglderlaufendenRente || [];
      if (arr.length < 2) continue;

      const last = arr[arr.length - 1];
      const prev = arr[arr.length - 2];

      if (!last?.gueltigVon) continue;

      // NUR wenn letzter Eintrag genau dieses Halbjahr ist
      if (toDateKey(last.gueltigVon) !== targetKey) continue;

      // Teil2 (Abschlag / ratierlicher Anspruch / ggf. renteAusBefrLebensvers)
      const teil2Arr = person.rentenErstberechnungTeil2Daten || [];
      const teil2Last = teil2Arr.length > 0 ? teil2Arr[teil2Arr.length - 1] : null;

      result.push({
        personalnummer: person.personalnummer,
        name: person.name,
        adresse: person.adresse,
        geschlecht: person.geschlecht,
        geburtsdatum: person.geburtsdatum,
        gesellschaft: person.gesellschaft,
        versorgungsordnung: person.versorgungsordnung,
        teil2: teil2Last ? {
          abschlag: teil2Last.abschlag,
          ratierlicherAnspruch: teil2Last.ratierlicherAnspruch,
          renteAusBefrLebensvers: teil2Last.renteAusBefrLebensvers
        } : null,
        periods: [
          // Neueste zuerst:
          last,
          prev
        ]
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error('Error in rgoHalfYear2LetterData:', error.message);
    res.status(500).json({ error: error.message });
  }
});
















  
  

  
  
  //mikka
  
  // chika

  // mika

  module.exports = router;