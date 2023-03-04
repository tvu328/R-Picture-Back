const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Comment extends Model { }

Comment.init({
	text: {
		type: DataTypes.TEXT,
		allowNull: false,
		validate: {
			notEmpty: true,
		}
	}
}, {
	sequelize: sequelize,
	freezeTableName: true,
	underscored: true,
	modelName: "comment",
});

module.exports = Comment;
