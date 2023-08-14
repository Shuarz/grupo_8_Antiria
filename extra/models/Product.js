const fs = require('fs');

const Product = {
    fileName: './src/database/product.json',

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId: function () {
        let allProducts = this.findAll();
        let lastProduct = allProducts.pop();
        if (lastProduct) {
            return lastProduct.id + 1;
        }
        return 1;
    },

    findAll: function (){
        return this.getData();
    },

    findByField: function (field, text) {
        let allProducts = this.findAll();
        let ProductFound = allProducts.find(row => row[field] === text);
        return ProductFound;
    },

    findByFildFilter: function (field, text) {
        let allProducts = this.findAll();
        let ProductFound = allProducts.filter(row => row[field] === text);
        return ProductFound;
    },

    create: function(ProductData){
        let allProducts = this.findAll();
        let newProduct = {
            id: this.generateId(),
            ...ProductData
        }
        allProducts.push(newProduct);
        fs.writeFileSync(this.fileName, JSON.stringify(allProducts, null, ' '));
        return newProduct;
    },

    edit: function(req){
        let allProducts = this.findAll();

        let idProducto = req.params.IdProd;
        let nombre = req.body.nombreProducto;
        let precio = parseFloat(req.body.precioProducto);
        let categoria = req.body.categoriaProducto;
        let marca = req.body.marca;
        let descGeneral = req.body.descripcionGeneral;
        let oferta = req.body.oferta;

        let productoEditado = allProducts.find(row => row.id == idProducto);

        if (nombre !== undefined) {
            productoEditado.nombreProducto = nombre;
        }
        if (precio !== undefined) {
            productoEditado.precioProducto = precio;
        }
        if (categoria !== undefined) {
            productoEditado.categoriaProducto = categoria;
        }
        if (marca !== undefined) {
            productoEditado.marca = marca;
        }
        if (descGeneral !== undefined) {
            productoEditado.descripcionGeneral = descGeneral;
        }
        if (oferta !== undefined) {
            productoEditado.oferta = oferta;
        }

        if (req.file) {
            const nuevaImg = req.file.filename;
            productoEditado.image = nuevaImg;
        }

        const jsonProductos = JSON.stringify(allProducts, null, 2);
        fs.writeFileSync(this.fileName, jsonProductos, 'utf8');

    },

    delete: function (id) {
        let allProducts = this.findAll();
        let newsProducts = allProducts.filter((row) => row.id != id);
        fs.writeFileSync(this.fileName, JSON.stringify(newsProducts, null, 2));

        return true;
    },

    search: function (element) {
        const allProducts = this.findAll();

        let search = allProducts.filter((row) => {
            const nombre = (row.nombreProducto || '').toString().toLowerCase();
            const categoria = (row.categoriaProducto || '').toString().toLowerCase();
            const descripcionGeneral = (row.descripcionGeneral || '').toString().toLowerCase();
            const marca = (row.marca || '').toString().toLowerCase();
            const query = (element || '').toString().toLowerCase();

            return categoria.includes(query) || descripcionGeneral.includes(query) || marca.includes(query) || nombre.includes(query);
        });

        return search

    }
}

module.exports = Product;