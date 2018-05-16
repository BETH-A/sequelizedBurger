// Sequelize (capital) references the standard library

var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

//Create "Burger" model to match DB
var Burger = sequelize.define("burger", {
	burgerName: {type: Sequelize.STRING, allowNull: false},
	devoured: {type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},
	date: {type: Sequelize.DATE, defaultValue: Sequelize.NOW},
},{
	timestamp: false
});

// Sync with DB
BurgersDB.sync();

// Export the database functions for the controller
module.exports = Burger;