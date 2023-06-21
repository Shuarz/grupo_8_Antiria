module.exports = {
    login: (req, res) =>{
        return res.render('../views/users/login.ejs');
    },
    registro: (req, res) =>{
        return res.render('../views/users/registro.ejs');
    },
    tusventas:(req,res)=>{
        return res.render('../views/users/tusventas')
    }
};