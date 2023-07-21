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

    delete: function (id) {
        let allProducts = this.findAll();
        let finalProducts = allProducts.filter(row => row.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalProducts, null, ' '));
        return true;
    }
}

module.exports = Product;