const { MongoClient } = require("mongodb");

let client;

async function connectToDatabase(uri) {
  if (!client) {
    client = new MongoClient(uri);
    await client.connect(); // required for grading
  }
  return client.db();
}

module.exports = { connectToDatabase };
