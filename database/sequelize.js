const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'music.db'),
    logging: false,
    define: {
        timestamps: true,
    }
});

module.exports = sequelize;

