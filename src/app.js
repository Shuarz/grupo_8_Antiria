//npm install express

//call modules
const path = require('path');
const express = require('express');
const app = express();
const mainRouter = require("./routes/mainRouter")

<<<<<<< HEAD

const path = require('path');
=======
>>>>>>> 9d0fa81ecde8a6a97d01a4e9eaa0b00ec854839f

app.set('views',path.join(__dirname,'../views'));
app.set('view engine','ejs');




//statics => css / js / images
app.use(express.static("public"));
const publicPath = path.resolve(__dirname, './public');


//server

<<<<<<< HEAD
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
=======
app.listen(3008, () => console.log("Levantando un servidor con Express"));

app.use(mainRouter);

//pages
//index
>>>>>>> 9d0fa81ecde8a6a97d01a4e9eaa0b00ec854839f
