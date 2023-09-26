const db = require('../../database/models');


module.exports = {
    list: async (req, res) => {
        const response = {
            success: true,
            endPoint: '/api/imagenesProd'
        };
        try {
            const imagenesProd = await db.ImagenesProd.findAll();
            response.imagenesProd = imagenesProd;
            res.json(response);
        } catch (error) {
            response.success = false;
            response.msg = 'Hubo un error';
            res.json(response);
        }
    }
};