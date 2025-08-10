const mongoose = require('mongoose');

// Updated MongoDB URI with proper encoding for spaces
const mongoURI = "mongodb://Ahsanul%20Mostakin:123456@localhost:27017/fruitsDB?authSource=admin";

// Connect to the MongoDB server with an increased timeout
mongoose.connect(mongoURI, { serverSelectionTimeoutMS: 5000 })
    .then(() => console.log("Connected successfully to MongoDB"))
    .catch(err => console.error("Connection failed", err));

// Define the schema for fruits
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// Create a model based on the fruit schema
const Fruit = mongoose.model("Fruit", fruitSchema);

// Define the schema for persons
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// Create a model based on the person schema
const Person = mongoose.model("Person", personSchema);

// Create instances of Fruit and Person
const apple = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

const banana = new Fruit({
    name: "Banana",
    rating: 8,
    review: "Tasty and nutritious."
});

const kiwi = new Fruit({
    name: "Kiwi",
    rating: 10,
    review: "The best fruit!"
});

const john = new Person({
    name: "John",
    age: 37
});

// Save the documents to the database
async function saveDocuments() {
    try {
        await apple.save();
        await banana.save();
        await kiwi.save();
        await john.save();
        console.log("Documents saved successfully!");
    } catch (err) {
        console.error("Error saving documents:", err);
    }
}

// Run the function
async function run() {
    await saveDocuments();
}

run();
