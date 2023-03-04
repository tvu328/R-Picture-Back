const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Gallery extends Model { }

Gallery.init({
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: true,
		validate: {
			notEmpty: true,
		}
	}
}, {
	sequelize: sequelize
});

module.exports = Gallery;
