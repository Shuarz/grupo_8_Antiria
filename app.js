//npm install express

//call modules
const express = require('express');
const app = express();

const path = require('path');

//statics => css / js / images
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//server
app.listen(8000, () => console.log("Levantando un servidor con Express"));

//pages
//index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
});
//login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});