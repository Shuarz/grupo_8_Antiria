const db = require ('../../database/models')
const sequelize = db.Sequelize;


module.exports = {
    list: async (req, res) => {
        const response = {

        }
        try {
            const usuarios = await db.findAll()
            response.count = usuarios.length
            response.users = usuarios.map((usuarios) => {
                return {
                    id: User.id,
                    name: User.nombre,
                    email: User.email,
                    detail: 'api/users/${usuario.id}'

                }
            })
            return res.json(response)

        }
        catch (e) {

            response.smg = 'hubo un error'
        }
        return res.json(response)
    }
}