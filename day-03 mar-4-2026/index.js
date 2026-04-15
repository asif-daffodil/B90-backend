const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/login", (req, res) => {
    const { username = null, password = null } = req?.body ?? {};

    if(!username || !password){
        res.send("Username and password are required!");
    }else{
        if (username === "admin" && password === "12345678") {
            res.send("Login successful!");
        }else{
            res.send("Invalid username or password!");
        }
    }
})

app.put("/update", (req, res) => {
    res.send("Update successful!");
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on http://localhost:5000");
})
