const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

let db = require('../database/models');
const { response } = require('express');

module.exports = {
    register: (req, res) => {
        return res.render('./user/register');
    },

    processRegister: (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('./user/register', {
                errors: resultValidation.mapped()
            });
        }

        db.User.findOne({
            where: {
                EMAIL: req.body.mail
            }
        }).then((emailResult) => {
            if (emailResult) {
                return res.render('./user/register', {
                    errors: {
                        mail: {
                            msg: 'Este email ya está registrado'
                        }
                    }
                });
            }else {
                if (req.body.password !== req.body.passwordConfirm) {
                    return res.render('./user/register', {
                        errors: {
                            passwordConfirm: {
                                msg: 'Ambas contraseñas deben coincidir'
                            }
                        }
                    });
                } else {
                    db.User.create({
                        nombre: req.body.name,
                        apellido: req.body.lastname,
                        email: req.body.mail,
                        password: bcryptjs.hashSync(req.body.password, 10),
                        avatar: req.file ? req.file.filename : 'user_undefined.png'
                    }).then(() => {
                        res.render('./user/create');
                    });
                }
            }
        });
    },

    login: (req, res) => {
        return res.render('user/login');
    },

    loginProcess: (req, res) => {
        db.User.findOne({
            where: {
                email: req.body.mail
            }
        }).then((userToLogin) => {
            if (userToLogin) {
                const isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                if (isOkPassword) {
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    if (req.body.remember_user) {
                        res.cookie('userCookie', req.body.mail, { maxAge: (1000 * 60) * 10 });
                    }
                    return res.redirect('/profile');
                }
            }
            return res.render('user/login', {
                errors: {
                    mail: {
                        msg: 'Las credenciales no son válidas'
                    }
                }
            });
        });
    },

    profile: (req, res) => {
        db.User.findByPk(req.session.userLogged.id)
            .then(function (user) {
                res.render('user/profile', { user: user })
            })
    },

    logout: (req, res) => {
        res.clearCookie('userCookie')
        req.session.destroy();
        return res.redirect('/');
    },

    help: (req, res) => {
        return res.render('user/help');
    },

    list: (req, res) => {
        db.User
            .findAll()
            .then(user => {
                return res.status(200).render('user/listadoUser', {
                    total: user.length,
                    data: user,
                    status: 200
                })
            })
    },

    delete: (req, res) => {
        db.User
            .destroy({
                where: {
                    id: req.params.idUser
                }
            })
            .then(response => {
                return res.redirect('/listadoUser')
            })
    }
}