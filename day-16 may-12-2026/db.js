const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "myDatabase";
let db;

const connectToDatabase = async () => {
    try {
        await client.connect();
        db = client.db(dbName);
        console.log("Connected successfully to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

const getDb = () => {
    if (!db) {
        throw new Error("Database not connected. Call connectToDatabase first.");
    }
    return db;
};

module.exports = { connectToDatabase, getDb };