require('dotenv').config();

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Pfad ggf. an deinen tatsächlichen Modell-Ordner anpassen
const User = require('./model/user');

async function createUsers() {
  try {
    // Gleiche Datenbank wie deine Anwendung
    await mongoose.connect(
      'mongodb://127.0.0.1:27017/neue_heimat_xx'
    );

    console.log('MongoDB verbunden.');

    // ==============================
    // PASSWÖRTER HIER FESTLEGEN
    // ==============================

    const adminPassword = 'NeueHeimatAdmin1!';
    const boeresPassword = 'StrandSonne1!';

    // Passwörter hashen
    const adminHash = await bcrypt.hash(
      adminPassword,
      12
    );

    const boeresHash = await bcrypt.hash(
      boeresPassword,
      12
    );

    // ==============================
    // PERSON A - ADMIN
    // ==============================

    await User.findOneAndUpdate(
      {
        username: 'admin'
      },
      {
        username: 'admin',
        passwordHash: adminHash,
        role: 'ADMIN',
        active: true
      },
      {
        upsert: true,
        new: true
      }
    );

    console.log(
      'ADMIN Benutzer wurde angelegt/aktualisiert.'
    );

    // ==============================
    // PERSON B - BOERES
    // READONLY
    // ==============================

    await User.findOneAndUpdate(
      {
        username: 'Boeres'
      },
      {
        username: 'Boeres',
        passwordHash: boeresHash,
        role: 'READONLY',
        active: true
      },
      {
        upsert: true,
        new: true
      }
    );

    console.log(
      'Benutzer Boeres wurde als READONLY angelegt/aktualisiert.'
    );

    await mongoose.disconnect();

    console.log('MongoDB Verbindung geschlossen.');
    console.log('Fertig.');

  } catch (error) {
    console.error(
      'Fehler beim Anlegen der Benutzer:',
      error
    );

    await mongoose.disconnect();

    process.exit(1);
  }
}

createUsers();