const fs = require('fs');
const path = require('path');
const datos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/product.json')));





module.exports = {
    search: (req, res) => {
        let search = datos.filter((row) => {
            const nombre = (row.nombreProd || '').toString().toLowerCase();
            const categoria = (row.categoria || '').toString().toLowerCase();
            const descIndex = (row.descIndex || '').toString().toLowerCase();
            const marca = (row.marca || '').toString().toLowerCase();
            const query = (req.query.search || '').toString().toLowerCase();

            return categoria.includes(query) || descIndex.includes(query) || marca.includes(query) || nombre.includes(query);
        });

        return res.render('./search/search', { search: search });
    }
};
