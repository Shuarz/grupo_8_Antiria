//npm install express

//call modules
const path = require('path');
const express = require('express');
const app = express();
const mainRouter = require("./routes/mainRouter")


app.set('views',path.join(__dirname,'../views'));
app.set('view engine','ejs');



//statics => css / js / images
app.use(express.static("public"));
const publicPath = path.resolve(__dirname, './public');


//server

app.listen(3008, () => console.log("Levantando un servidor con Express"));

app.use(mainRouter);

//pages
//index
