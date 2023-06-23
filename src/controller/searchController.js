const fs = require ('fs');
const path = require ('path');
const datos = JSON.parse (fs.readFileSync(path.resolve(__dirname,'../database/product.json')));



module.exports = {
    search: (req, res) =>{
        let search = datos.filter((row) => row.categoria == req.query.search);
        return res.render('./search/search', {search: search});
    }
};