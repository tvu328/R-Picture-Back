const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Picture extends Model { }

Picture.init({
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		}
	},
	description: {
		type: DataTypes.TEXT,
		validate: {
			notEmpty: true,
		}
	},
	S3URL: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			//TODO: Validate S3URLS with REGEX
		}
	}
}, {
	sequelize: sequelize,
	freezeTableName: true,
	underscored: true,
	modelName: "picture",
});

module.exports = Picture;
