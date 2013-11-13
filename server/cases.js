var mongo = require('mongodb');
var bcrypt = require('bcrypt');
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('ng-cases', server);

db.open(function (err, db) {
  if (!err) {
    console.log("Connected to 'ng-cases' database");
    db.collection('cases', {strict: true}, function (err, collection) {
      if (err) {
        console.log("The 'cases' collection doesn't exist. Creating it with sample data...");
        populateDB();
      }
    });
  }
  else {
      console.log('Error connecting to database. '+err);
  }
});



/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.
var populateDB = function () {

  var cases = [
    {"name": "Anders, Ann",
      "id": 1,
      "gender": "F",
      "done": false,
      "hasConsent": false,
      "room": "UF05",
      "time": "8:00",
      "pre": "IP",
      "roomNumber": "8241A",
      "post": "82SI",
      "mrn": "0203-1465",
      "procedure": "STEALTH CRANI WITH VP SHUNT REVISION",
      "duration": 90,
      "surgeon": "Davis/NOT ASSIGNED",
      "anesthesia": "",
      "type": "GEN",
      "caseNumber": 539923,
      "age": "20Y",
      "consentGeneral": false,
      "consentMac": false,
      "consentConsciousSedation": false,
      "consentRegional": false,
      "consentSpinal": false,
      "consentEpidural": false,
      "noConsentReason": " ",
      "noConsentNotes": ""
    },
    {"name": "Didley, Bo",
      "id": 2,
      "gender": "M",
      "done": false,
      "hasConsent": false,
      "room": "UA12",
      "time": "15:15",
      "pre": "IP",
      "roomNumber": "4244",
      "post": "PACU",
      "mrn": "0202-2100",
      "procedure": "G TUBE PLACEMENT",
      "duration": 45,
      "surgeon": "Stevens/Smith",
      "anesthesia": "Walters/Schmidt",
      "type": "GEN",
      "caseNumber": 5234905,
      "age": "72Y",
      "consentGeneral": false,
      "consentMac": false,
      "consentConsciousSedation": false,
      "consentRegional": false,
      "consentSpinal": false,
      "consentEpidural": false,
      "noConsentReason": " ",
      "noConsentNotes": ""
    },
    {"name": "Simpson, Homer",
      "id": 3,
      "gender": "M",
      "done": false,
      "hasConsent": false,
      "room": "UF07",
      "time": "8:00",
      "pre": "IP",
      "roomNumber": "UA6210",
      "post": "PACU",
      "mrn": "0170-8455",
      "procedure": "RIGHT FEMUR FRACTURE",
      "duration": 120,
      "surgeon": "Heisenberg/Balko",
      "anesthesia": "Payton/Robinson",
      "type": "BL/RM",
      "caseNumber": 466522,
      "age": "53Y",
      "consentGeneral": false,
      "consentMac": false,
      "consentConsciousSedation": false,
      "consentRegional": false,
      "consentSpinal": false,
      "consentEpidural": false,
      "noConsentReason": " ",
      "noConsentNotes": ""

    },
    {"name": "Smith, Judy",
      "id": 4,
      "gender": "F",
      "done": false,
      "hasConsent": false,
      "room": "GIST01",
      "time": "11:00",
      "pre": "OP",
      "roomNumber": "",
      "post": "PACU",
      "mrn": "0313-2109",
      "procedure": "EGD",
      "duration": 60,
      "surgeon": "Lasko/Jabir",
      "anesthesia": "Langley/Roberts",
      "type": "MAC",
      "caseNumber": 913456,
      "age": "2MO",
      "consentGeneral": false,
      "consentMac": false,
      "consentConsciousSedation": false,
      "consentRegional": false,
      "consentSpinal": false,
      "consentEpidural": false,
      "noConsentReason": " ",
      "noConsentNotes": ""

    }
  ];

  db.collection('cases', function (err, collection) {
    collection.insert(cases, {safe: true}, function (err, result) {
    });
  });

};