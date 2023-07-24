const fs = require('fs');

const User = {
    fileName: './src/database/users.json',

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId: function () {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    findAll: function () {
        return this.getData();
    },

    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(row => row[field] === text);
        return userFound;
    },

    create: function (userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        };
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    delete: function (id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(row => row.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    },

    addToProduct: function (userId, productId) {
        let allUsers = this.findAll();
        let userIndex = allUsers.findIndex(user => user.id === userId);

        if (userIndex !== -1) {
            if (!allUsers[userIndex].product) {
                allUsers[userIndex].product = [];
            }

            allUsers[userIndex].product.push(productId);
            fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
            return true;
        }

        return false;
    },

    removeFromProduct: function (userId, productId) {
        let allUsers = this.findAll();
        let userIndex = allUsers.findIndex(user => user.id == userId);
        if (userIndex != -1) {
            let productIndex = allUsers[userIndex].product.findIndex(id => id == productId);
            if (productIndex != -1) {
                allUsers[userIndex].product.splice(productIndex, 1);
                fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
                return true;
            }
        }
        return false;
    },

    addToCart: function (userId, productId) {
        let allUsers = this.findAll();
        let userIndex = allUsers.findIndex(user => user.id == userId);

        if (userIndex != -1) {
            if (!allUsers[userIndex].cart) {
                allUsers[userIndex].cart = [];
            }

            allUsers[userIndex].cart.push(productId);
            fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
            return true;
        }

        return false;
    },

    removeFromCart: function (userId, productId) {
        let allUsers = this.findAll();
        let userIndex = allUsers.findIndex(user => user.id == userId);
        if (userIndex != -1) {
            if (productId !== undefined) {
                let productIndex = allUsers[userIndex].cart.indexOf(productId);
                if (productIndex != -1) {
                    allUsers[userIndex].cart.splice(productIndex, 1);
                    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
                    return true;
                }
            }
        }
        return false;
    }
};

module.exports = User;
