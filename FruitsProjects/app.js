const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    await client.db("fruits").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

async function run1() {
    try {
      const database = client.db('fruits');
      const movies = database.collection('movies');
      // Query for a movie that has the title 'Back to the Future'
      movies.insertOne({title: "Hello Brother"});
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run1().catch(console.dir);
