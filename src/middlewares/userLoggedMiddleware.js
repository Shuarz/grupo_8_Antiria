let db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;
    let userInCookie = req.cookies.userCookie;

    if (userInCookie) {
        db.User.findOne({
            where: {
                email: userInCookie
            }
        }).then((userFromCookie) => {
            if (userFromCookie) {
                req.session.userLogged = userFromCookie;
                res.locals.isLogged = true;
                res.locals.userLogged = req.session.userLogged;
                if (res.locals.userLogged.id == 1) {
                    res.locals.userLogged.admin = 1;
                }
            }
            next();
        });

        return;
    } else {
        delete req.session.userLogged;
        next();
    }
}

module.exports = userLoggedMiddleware;
