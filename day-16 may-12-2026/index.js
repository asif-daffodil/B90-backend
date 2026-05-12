const express = require("express");
const { ObjectId } = require("mongodb");
const app = express();
const { connectToDatabase, getDb } = require("./db");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/users", async (req, res) => {
    const { name, email } = req.body || {};
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }
    try {
        const db = getDb();
        const usersCollection = db.collection("users");
        const newUser = { name, email };
        const result = await usersCollection.insertOne(newUser);
        res.status(201).json(result);
    } catch (error) {
        console.error("Error inserting user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/users", async (req, res) => {
    try {
        const db = getDb();
        const usersCollection = db.collection("users");
        const users = await usersCollection.find({}).toArray();
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.put("/users/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body || {};

    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid user id", id });
    }

    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required" });
    }

    try {
        const db = getDb();
        const usersCollection = db.collection("users");
        const result = await usersCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { name, email } }
        );
        if (result.matchedCount === 0) {
            return res.status(404).json({ error: "User not found", id });
        }
        res.json(result);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.delete("/users/:id", async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid user id", id });
    }
    try {
        const db = getDb();
        const usersCollection = db.collection("users");
        const result = await usersCollection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "User not found", id });
        }
        res.json(result);
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

connectToDatabase().then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});