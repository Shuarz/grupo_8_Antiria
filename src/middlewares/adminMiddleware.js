function adminMiddleware (req, res, next) {
    if (res.locals.userLogged.admin != 1) {
        return res.redirect('/login');
    }
    next();
}

module.exports = adminMiddleware;