const db = require('../../database/models');


module.exports = {
    list: async (req, res) => {
        const response = {
            success: true,
            endPoint: '/api/marcas'
        };
        try {
            const marcas = await db.Marca.findAll();
            response.data = marcas;
            response.count = marcas.length;
            res.json(response);
        } catch (error) {
            response.success = false;
            response.msg = 'Hubo un error';
            res.json(response);
        }
    }
};