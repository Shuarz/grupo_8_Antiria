let db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;

    if (req.session.userLogged){
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
            if (res.locals.userLogged.id == 1) {
                res.locals.userLogged.admin = 1;
            }
    }

    let userInCookie = req.cookies.userCookie;

    if (userInCookie) {
        db.User.findOne({
            where: {
                email: userInCookie
            }
        }).then((userFromCookie) => {
            if (userFromCookie) {
                req.session.userLogged = userFromCookie;
            }
            next();
        });

        return;
    } else {
        next();
    }
}

module.exports = userLoggedMiddleware;
