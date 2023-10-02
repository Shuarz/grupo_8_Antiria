const db = require('../../database/models');


module.exports = {
    list: async (req, res) => {
        const response = {
            success: true,
            endPoint: '/api/categorias'
        };
        try {
            const categorias = await db.Categoria.findAll();
            response.data = categorias;
            response.count = categorias.length;
            res.json(response);
        } catch (error) {
            response.success = false;
            response.msg = 'Hubo un error';
            res.json(response);
        }
    }
};