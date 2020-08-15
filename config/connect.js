const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const env = require("dotenv").config();

// Connection URL
const url = process.env.MONGO_URL;
// console.log("url is ", url);
// Database Name

// Use connect method to connect to the server
let db = (function () {
  var instance;

  async function createInstance() {
    instance = await new Promise((resolve, reject) => {
      MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        if (err) throw err;
        resolve(client);
        console.log("Connected successfully to server");
      });
    });
    return instance;
  }

  return {
    getInstance: () => {
      if (!instance) instance = createInstance();
      return instance;
    },
  };
})();

db.getInstance().then((val) => {
  console.log(val);
  db.getInstance().collection("users").find({}, function (err, docs) {
    if (err) throw err;
    docs.each(function (err, doc) {
      if (doc) {
        console.log(doc);
      } 
      }
    })
  })
);
  console.log();
  console.log(db.getInstance() === db.getInstance());

module.exports = db.getInstance();
