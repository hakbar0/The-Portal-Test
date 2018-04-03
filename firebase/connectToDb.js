let admin = require('firebase-admin');
const config = require('../config/config');

admin.initializeApp({
  credential: admin.credential.cert(config),
  databaseURL: "https://the-portal-test.firebaseio.com"
});

let db = admin.database();

module.exports = db;