const db = require('../../database/models');


module.exports = {
    list: async (req, res) => {
        const response = {
            success: true,
            endPoint: '/api/ofertas'
        };
        try {
            const oferta = await db.Oferta.findAll();
            response.oferta = oferta;
            res.json(response);
        } catch (error) {
            response.success = false;
            response.msg = 'Hubo un error';
            res.json(response);
        }
    }
};