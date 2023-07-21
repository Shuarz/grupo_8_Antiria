const User = require('../models/User')

function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;

    let userInCookie = req.cookies.userCokkie;
    let userFromCookie = User.findByField('mail', userInCookie);

    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    };

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    };

    next()
}

module.exports = userLoggedMiddleware;