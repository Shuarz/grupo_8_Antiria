//npm install express

//call modules
const express = require('express');
const app = express();


const path = require('path');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');




//statics => css / js / images
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

//server

app.listen(8000, () => console.log("Levantando un servidor con Express"));
/*
//pages
//index
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
});
//login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});
//carrito
app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, './views/carrito.html'))
});
//productDetail
app.get ('/productDetail',(req,res) => {
res.sendFile(path.join(__dirname, './views/productDetail.html'))
});
//registro
app.get ('/registro',(req,res) => {
    res.sendFile(path.join(__dirname, './views/registro.html'))
});*/