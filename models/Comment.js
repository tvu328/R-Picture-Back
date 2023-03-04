const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

/**
 * ORM Model for the comment table.
 * 
 * Comments belong to a user via userId.
 * Comments belong to a picture via pictureId.
 * 
 * @property {number} id The private key of the comment.
 * @property {number} userId The user foreign key that owns the comment.
 * @property {number} pictureId The picture foreign key that the comment was posted to.
 * 
 * @property {string} text The text body of the comment.
 */
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
