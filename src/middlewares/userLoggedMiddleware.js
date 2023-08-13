let db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;
    let userInCookie = req.cookies.userCookie;

    if (userInCookie) {
        db.Users.findOne({
            where: {
                usuario: userInCookie
            }
        }).then((userFromCookie) => {
            if (userFromCookie) {
                req.session.userLogged = userFromCookie;
                res.locals.isLogged = true;
                res.locals.userLogged = req.session.userLogged;
            }
            next();
        });

        return;
    }
    req.session.destroy();
    next();
}

module.exports = userLoggedMiddleware;
