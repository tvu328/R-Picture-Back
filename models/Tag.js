const {Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init({
	name: {
		type: DataTypes.STRING,
		unique: true,
		validate: {
			notEmpty: true,
		}
	}
}, {
	sequelize: sequelize
});

module.exports = Tag;
