//npm i
//npm i express
//npm i method-override --save
//npm i multer
//npm i express-validator

//call modules
const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');

//call routes
const mainRouter = require("./routes/mainRouter")
const productsRoute = require('./routes/productsRoute');

const usersRoute = require('./routes/usersRoute');
const searchRoute = require('./routes/searchRouter');

//port
const port = 3008;

//database
app.use(express.json());

//form
app.use(express.urlencoded({ extended: false}));

//template engines
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

//statics => css / js / images
app.use(express.static("public"));

//Method Override
app.use(methodOverride("_method"))

//server
app.listen(port, () => console.log("Levantando servidor http://localhost:" + port));

//routes
app.use(mainRouter)
app.use(usersRoute);

app.use(productsRoute);
app.use(searchRoute);


//404
app.use((req, res, next) => {
    res.status(404).render('./404/404');
});

