//npm install express

//call modules
const express = require('express');
const path = require('path');
const app = express();

//call routes
const mainRouter = require("./routes/mainRouter")
const productsRoute = require('./routes/productsRoute');
const usersRoute = require('./routes/usersRoute');
const searchRoute = require('./routes/searchRouter');

//port
const port = 3008;
//basedate
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
//template engines
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

//statics => css / js / images
app.use(express.static("public"));

//server
app.listen(port, () => console.log("Levantando servidor http://localhost:" + port));

//routes
app.use(mainRouter);
app.use(usersRoute);
app.use(productsRoute);
app.use(searchRoute);


//404
app.use((req, res, next) => {
    res.status(404).render('./404/404');
});

