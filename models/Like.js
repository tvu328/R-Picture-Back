const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Like extends Model { }

Like.init({
	delta: {
		type: DataTypes.TINYINT,
		allowNull: false,
		validate: {
			isNumeric: true,
			isIn: [[-1, +1]],
		}
	}
}, {
	sequelize: sequelize,
	freezeTableName: true,
	underscored: true,
	modelName: "like",
});

module.exports = Like;
