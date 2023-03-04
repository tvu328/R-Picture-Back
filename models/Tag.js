const {Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init({
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			notEmpty: true,
		}
	}
}, {
	sequelize: sequelize,
	freezeTableName: true,
	underscored: true,
	modelName: "tag",
});

module.exports = Tag;
