const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded());

const port = process.env.PORT;

app.post("/", (req, res) => {
    res.status(200).json({
        "name": "Asif",
        "age": 25,
        "city": "Dhaka"
    });
})

app.get("/arafat/:city", (req, res) => {
    const city = req.params.city;
    res.send(city);
});

app.get("/mohan", (req, res) => {
    const city = req.query.city;
    const country = req.query.country;
    res.send(`Mohan vai lives in ${city}, ${country}`);
});

app.listen(port, () => {
    console.log(`server is running on http://127.0.0.1:5000`);
})