// src/index.js
const express = require('express');
const dotenv = require('dotenv');
var cors = require('cors');

dotenv.config();

const app = express();

app.use(cors())

const port = process.env.PORT;

const WORDS = [
    'could',
    'dated',
    'fraud',
    'fruit',
    'guess',
    'chart',
    'china',
    'alert',
    'worry',
    'where',
    'light',
    'press',
]

let counter = 0

app.get('/random-words', (req, res) => {

    const randomIndex = Math.floor(Math.random() * WORDS.length)

    const guessWord = {
        word: WORDS[randomIndex],
    }

    counter++
    if (counter > 10 && counter % 2 === 0) {
        throw new Error("Internal server error")
    }

    res.send(guessWord);
});

app.get('/counter', (req, res) => {
    res.send(counter);
});


app.get('/reset-counter', (req, res) => {
    counter = 0
    res.send("Counter successfully reset");
});


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});