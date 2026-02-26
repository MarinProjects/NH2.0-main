var express = require('express');
var path = require('path');

var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
//const SSE = require('express-sse');

// Create express instance
var app = express();
const routee = require('./rout/routes.js');

//Connect to MongoDB database using mongoose and creating a database item
mongoose.connect('mongodb://127.0.0.1:27017/neue_heimat_xx');
//mongoose.connect('mongodb://127.0.0.1:27017/users');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Verify connection to mongodb
mongoose.connection.on('connected', () => {console.log("connection succeed")});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

//Add Middleware

app.use(cors());
app.use(bodyparser.json());
app.use('/api', routee);


// ===== Angular Build aus /public ausliefern =====
const angularPath = path.join(__dirname, 'public');
app.use(express.static(angularPath));

// Wichtig: Fallback für Angular Routes (alles außer /api)
app.get('*', (req, res) => {
  res.sendFile(path.join(angularPath, 'index.html'));
});

// Create HTTP server and integrate with socket.io
const server = require('http').Server(app);

  // Use the existing Express app as middleware for the server
app.server = server;
const http = require('http').Server(app);

const PORT = 4000; // Port innerhalb der APP. 

/**
app.listen(PORT, ()=>{console.log("listening on Portt 4000");
});
 */

// App ist von anderen Endpunkten aus erreichbar. 
app.listen(PORT, "0.0.0.0", () => {
  console.log(`listening on Port ${PORT}`);
});

//http.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;