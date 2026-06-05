const axios = require("axios");

const API_BASE_URL = "http://localhost:4000/api";

const dataToInsert = [
  {
    personalnummer: 976050,
    rentenErstberechnungTeil1: {
      pensionsfaehigesMonatsgehalt: 13738.0,
      sozVersPflJahresgehaltRB: 164856.0,
      ruhegeldfaehigesDurchschnittsgehalt: 13738.0,
      durchschnittsgehaltNachSozialplan: 0.0,
      teilzeitgrad: 100.0,
      sozVersFreieJahreAb20: 16.0,
      schwerbehindert: "Nein",
      versorgungsausgleichDurchgefuehrt: "Nein",
      entgeltpunkte: 0.0,
      zugangsfaktor: 0.0,
      rentenartfaktor: 0.0,
      teilrentenfaktor: 0.0
    }
  },

  {
  personalnummer: 125104,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.0,
    sozVersPflJahresgehaltRB: 28308.0,
    ruhegeldfaehigesDurchschnittsgehalt: 2394.37,
    durchschnittsgehaltNachSozialplan: 0.0,
    teilzeitgrad: 100.0,
    sozVersFreieJahreAb20: 0.0,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0,
    zugangsfaktor: 0.0,
    rentenartfaktor: 0.0,
    teilrentenfaktor: 0.0
  }
},

{
  personalnummer: 136192,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.0,
    sozVersPflJahresgehaltRB: 51732.0,
    ruhegeldfaehigesDurchschnittsgehalt: 4311.0,
    durchschnittsgehaltNachSozialplan: 0.0,
    teilzeitgrad: 100.0,
    sozVersFreieJahreAb20: 0.0,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0,
    zugangsfaktor: 0.0,
    rentenartfaktor: 0.0,
    teilrentenfaktor: 0.0
  }
},

{
  personalnummer: 500443,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.0,
    sozVersPflJahresgehaltRB: 0.0,
    ruhegeldfaehigesDurchschnittsgehalt: 0.0,
    durchschnittsgehaltNachSozialplan: 0.0,
    teilzeitgrad: 100.0,
    sozVersFreieJahreAb20: 0.0,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0,
    zugangsfaktor: 0.0,
    rentenartfaktor: 0.0,
    teilrentenfaktor: 0.0
  }
},

{
  personalnummer: 321679,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.0,
    sozVersPflJahresgehaltRB: 0.0,
    ruhegeldfaehigesDurchschnittsgehalt: 0.0,
    durchschnittsgehaltNachSozialplan: 0.0,
    teilzeitgrad: 100.0,
    sozVersFreieJahreAb20: 0.0,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 58.3325,
    zugangsfaktor: 1.0,
    rentenartfaktor: 1.0,
    teilrentenfaktor: 0.0
  }
},

{
  personalnummer: 322008,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 2610.57,
    sozVersPflJahresgehaltRB: 34370.00,
    ruhegeldfaehigesDurchschnittsgehalt: 2610.57,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 282442,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 4165.00,
    sozVersPflJahresgehaltRB: 52004.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 500448,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 3971.00,
    sozVersPflJahresgehaltRB: 51444.00,
    ruhegeldfaehigesDurchschnittsgehalt: 3971.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 500554,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 11550.00,
    sozVersPflJahresgehaltRB: 138600.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 13.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 131953,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 4747.50,
    sozVersPflJahresgehaltRB: 61804.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 500446,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 254144,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 3901.00,
    sozVersPflJahresgehaltRB: 50604.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 403406,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 65.4561,
    zugangsfaktor: 1.000,
    rentenartfaktor: 1.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 258095,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 1890.00,
    sozVersPflJahresgehaltRB: 25824.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 42.40,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},


{
  personalnummer: 283358,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 2601.00,
    sozVersPflJahresgehaltRB: 34434.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 280065,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 7511.00,
    sozVersPflJahresgehaltRB: 89796.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 500569,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 6084.00,
    sozVersPflJahresgehaltRB: 78044.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 500279,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 57.8837,
    zugangsfaktor: 1.000,
    rentenartfaktor: 1.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 500503,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 4001.00,
    sozVersPflJahresgehaltRB: 53824.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 500319,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 500037,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 56.0135,
    zugangsfaktor: 1.000,
    rentenartfaktor: 1.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 234542,
   rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozialversPflichtigesJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozialversFreieJahreAb20: 0.00,
    schwerbehindert: false,
    versorgungsausgleichDurchgefuehrt: false,
    entgeltpunkte: 51.1945,
    zugangsfaktor: 1.000,
    rentenartfaktor: 0.6000,
    teilrentenfaktor: 0.0000
}},

{
  personalnummer: 230554,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 3010.00,
    sozVersPflJahresgehaltRB: 38354.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 82.10,
    sozVersFreieJahreAb20: 1.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 232751,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 4109.00,
    sozVersPflJahresgehaltRB: 52004.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 255240,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehaltRB: 2445.00,
    sozVersPflJahresgehaltRB: 32194.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 66.60,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 225208,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehaltRB: 4024.00,
    sozVersPflJahresgehaltRB: 52354.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 253104,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 2208.00,
    sozVersPflJahresgehaltRB: 28284.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 81.70,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 253096,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 4252.00,
    sozVersPflJahresgehaltRB: 54384.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 257303,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 1981.00,
    sozVersPflJahresgehaltRB: 25334.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 39.90,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 253450,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 5480.00,
    sozVersPflJahresgehaltRB: 70204.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 253419,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 3909.00,
    sozVersPflJahresgehaltRB: 50044.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 500304,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 51.4406,
    zugangsfaktor: 1.000,
    rentenartfaktor: 1.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 266130,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 45.2703,
    zugangsfaktor: 1.000,
    rentenartfaktor: 0.6000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 401641,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 252279,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 2366.00,
    sozVersPflJahresgehaltRB: 33946.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 403762,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 38.8345,
    zugangsfaktor: 1.000,
    rentenartfaktor: 1.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 320978,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 15480.89,
    sozVersPflJahresgehaltRB: 185770.00,
    ruhegeldfaehigesDurchschnittsgehalt: 15480.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 0.00,
    sozVersFreieJahreAb20: 13.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 124859,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 152371,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 1923.00,
    sozVersPflJahresgehaltRB: 25824.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 55.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 157339,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 42.2015,
    zugangsfaktor: 1.000,
    rentenartfaktor: 0.6000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 500356,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 4587.00,
    sozVersPflJahresgehaltRB: 57884.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 404894,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 56.6047,
    zugangsfaktor: 1.000,
    rentenartfaktor: 1.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 175547,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 28.4894,
    zugangsfaktor: 1.000,
    rentenartfaktor: 1.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 500343,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 58.3929,
    zugangsfaktor: 1.000,
    rentenartfaktor: 1.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 186643,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 52.4132,
    zugangsfaktor: 1.000,
    rentenartfaktor: 0.6000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 404188,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 3961.00,
    sozVersPflJahresgehaltRB: 50744.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 500438,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 2707.00,
    sozVersPflJahresgehaltRB: 35232.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 92.70,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 105999,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 122648,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 46776.00,
    ruhegeldfaehigesDurchschnittsgehalt: 3898.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 976051,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 1250.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 50.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 500433,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 102392,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 89112.00,
    ruhegeldfaehigesDurchschnittsgehalt: 7426.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 976046,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 6069.86,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 0.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},

{
  personalnummer: 976032,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehalt: 0.00,
    sozVersPflJahresgehaltRB: 0.00,
    ruhegeldfaehigesDurchschnittsgehalt: 6357.07,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
},


{
  personalnummer: 112888,
  rentenErstberechnungTeil1: {
    pensionsfaehigesMonatsgehaltRB: 0.00,
    sozVersPflJahresgehaltRB: 36048.00,
    ruhegeldfaehigesDurchschnittsgehalt: 2995.00,
    durchschnittsgehaltNachSozialplan687: 0.00,
    teilzeitgrad: 100.00,
    sozVersFreieJahreAb20: 0.00,
    schwerbehindert: "Nein",
    versorgungsausgleichDurchgefuehrt: "Nein",
    entgeltpunkte: 0.0000,
    zugangsfaktor: 0.000,
    rentenartfaktor: 0.0000,
    teilrentenfaktor: 0.0000
  }
}










];

async function importRentenErstberechnungTeil1() {
  let erfolgreich = 0;
  let nichtGefunden = 0;
  let fehler = 0;

  for (const item of dataToInsert) {
    try {
      const personResponse = await axios.get(
        `${API_BASE_URL}/persons/${item.personalnummer}`
      );

      const person = personResponse.data;

      await axios.post(
        `${API_BASE_URL}/person/${person._id}/rentenerstberechnungteil1`,
        item.rentenErstberechnungTeil1
      );

      erfolgreich++;

      console.log(
        `✔️ Rentenerstberechnung Teil 1 importiert für Personalnummer ${item.personalnummer}`
      );
    } catch (error) {
      if (error.response?.status === 404) {
        nichtGefunden++;
        console.error(`❌ Person nicht gefunden: ${item.personalnummer}`);
      } else {
        fehler++;
        console.error(`❌ Fehler bei Personalnummer ${item.personalnummer}:`);
        console.error(error.response?.data || error.message);
      }
    }
  }

  console.log("\n✅ Import finished.");
  console.log(`Erfolgreich importiert: ${erfolgreich}`);
  console.log(`Nicht gefunden: ${nichtGefunden}`);
  console.log(`Fehler: ${fehler}`);
  console.log(`Gesamt verarbeitet: ${dataToInsert.length}`);
}

importRentenErstberechnungTeil1();