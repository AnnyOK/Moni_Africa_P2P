const Sequelize = require('sequelize');

const db = new Sequelize("moniafrica", "postgres", "mymac",{
    host: "localhost",
    dialect:"postgres",

})

module.exports = db