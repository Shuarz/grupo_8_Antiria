//npm install express

//call modules
const express = require('express');
const path = require('path');
const app = express();

//call routes
const mainRouter = require("./routes/mainRouter")
const productsRoute = require('./routes/productsRoute');
const usersRoute = require('./routes/usersRoute');

//port
const port = 3008;

//template engines
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

//statics => css / js / images
app.use(express.static("public"));
const publicPath = path.resolve(__dirname, './public');

//server
app.listen(port, () => console.log("Levantando servidor http://localhost:" + port));

//routes
app.use(mainRouter);

app.use(usersRoute);

app.use(productsRoute);

//404
app.use((req, res, next) => {
    res.status(404).render('./404/404');
});

