//call modules
const express = require('express');
const methodOverride = require('method-override');
const session = require ('express-session');
const cookies = require('cookie-parser');
const path = require('path');
const app = express();

//call routes
const mainRouter = require("./routes/mainRouter")
const usersRoute = require('./routes/usersRoute');
const productsRoute = require('./routes/productsRoute');

//call apis
const productsApis = require("./api/routes/productsApisRouter");
const userApis = require("./api/routes/userApiRoute");
const ofertaApis = require("./api/routes/ofertasApisRoute");
const marcasApis = require("./api/routes/marcasApisRoute");
const imagenesApis = require("./api/routes/imagenesProdApisRoute");
const categoriasApis = require("./api/routes/categoriasApisRoute");


//port
const port = 3008;

//database
app.use(express.json());

//form
app.use(express.urlencoded({ extended: false}));

//session
app.use (session ({
    secret: "Shhhhh, es un secreto",
    resave : false,
    saveUninitialized:false,
}));

//cookies
app.use(cookies());

//user logged
 const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
 app.use(userLoggedMiddleware);

//template engines
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

//statics => css / js / images
app.use(express.static("public"));

//Method Override
app.use(methodOverride("_method"))

//server
app.listen(process.env.PORT || port, () => {
    console.log('Levantando servidor http://localhost:' + port)
})

//routes
app.use(mainRouter)
app.use(usersRoute);
app.use(productsRoute);

//use apis
app.use('/api/products', productsApis);
app.use('/api/users', userApis);
app.use('/api/ofertas', ofertaApis);
app.use('/api/marcas', marcasApis);
app.use('/api/imagenesProd', imagenesApis);
app.use('/api/categorias', categoriasApis);

//404
app.use((req, res, next) => {
    res.status(404).render('./error/404');
});