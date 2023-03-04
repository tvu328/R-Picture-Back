const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const { default: dayjs, Dayjs } = require("dayjs");

/**
 * ORM Model for the comment table.
 * 
 * Comments belong to Users.
 * Comments belong to Pictures.
 * 
 * @property {number} id The private key of the comment.
 * @property {number} userId The user foreign key that owns the comment.
 * @property {number} pictureId The picture foreign key that the comment was posted to.
 * 
 * @property {string} text The text body of the comment.
 * 
 * @property {Date} createdAt The date/time that the comment was created at.
 * @property {Date} updatedAt The date/time that the comment was last updated at.
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
