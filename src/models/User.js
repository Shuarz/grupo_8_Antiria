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

    findAll: function (){
        return this.getData();
    },

    findByField: function (field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(row => row[field] === text);
        return userFound;
    },

    create: function(userData){
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
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

    addToCart: function (userId, productId) {
        let allUsers = this.findAll();
        let indexToUpdate = allUsers.findIndex((user) => user.id === userId);
        if (indexToUpdate !== -1) {
            allUsers[indexToUpdate].cart.push(productId);
            fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
            return true;
        }
        return false;
    }
}

module.exports = User;