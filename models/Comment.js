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
	sequelize: sequelize
});

module.exports = Comment;
