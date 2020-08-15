const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const env = require("dotenv").config();

// Connection URL
const url = process.env.MONGO_URL;
let res = "";
MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  res = client;
  //   console.log(client);
  client.close();
});

console.log("rs", res);

class Some {
  constructor(val) {
    this.val = val;
  }

  getObject() {
    return this.val;
  }
}

var tmp = new Some("hello");
console.log(tmp.getObject());
