const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('public'));

module.exports = app;