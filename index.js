const express = require('express');
const app = express();
const port = 5000;
require('dotenv').config()

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/twitter', (req, res) => {
    res.send('twitter.com/ayushthakur');
})

app.get('/login', (req, res) => {
    res.send('login page');
})

app.get('/register', (req, res) => {
    res.send('Create new account');
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${port}`)
}) 