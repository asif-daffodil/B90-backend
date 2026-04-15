const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello Universe!');
})

app.get('/user/:city', (req, res) => {
    const city = req.params.city;
    res.send(`Hello User from ${city}`);
})

app.get('/student/:name/:age', (req, res) => {
    const name = req.params.name;
    const age = req.params.age;
    res.send(`Hello ${name}, you are ${age} years old.`);
})

app.get('/teacher', (req, res) => {
    const name = req.query.name;
    const subject = req.query.subject;
    res.send(`Hello Teacher ${name} of ${subject}`);
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on: http://localhost:5000`);
});