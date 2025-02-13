var admin = require("firebase-admin");

var serviceAccount = require("../svcars.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://console.firebase.google.com/u/2/project/svcars-ca083/firestore/databases/-default-/data/~2Femail~2F940094"
});

module.exports = admin;