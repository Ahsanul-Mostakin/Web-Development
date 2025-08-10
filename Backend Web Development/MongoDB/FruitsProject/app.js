const { MongoClient } = require('mongodb');

const url = 'mongodb://Ahsanul Mostakin:123456@localhost:27017';
const dbName = 'fruitsdb';
const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected successfully to server");

        const db = client.db(dbName);
        const collection = db.collection('fruits');

        await insertDocuments(collection);

        client.close();
    } catch (err) {
        console.error("An error occurred:", err);
    }
}

async function insertDocuments(collection) {
    try {
        const result = await collection.insertMany([
            { "name": "Apple", "score": 8, "review": "Great fruit" },
            { "name": "Orange", "score": 6, "review": "Kinda sour" },
            { "name": "Banana", "score": 9, "review": "Great stuff!" }
        ]);
        console.log(`Inserted ${result.insertedCount} documents into the collection`);
    } catch (err) {
        console.error("Error inserting documents:", err);
    }
}

run();
