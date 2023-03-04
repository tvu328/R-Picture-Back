const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

/**
 * ORM Model for the like table.
 * 
 * Likes belong to Users.
 * Likes belong to Pictures.
 * 
 * @property {number} id The private key of the comment.
 * @property {number} userId The user foreign key that owns the comment.
 * @property {number} pictureId The picture foreign key that the comment was posted to.
 * 
 * @property {number} delta Either +1 or -1. Whether the user liked or disliked the picture.
 * 
 * @property {Date} createdAt The date/time that the like was created at.
 * @property {Date} updatedAt The date/time that the like was last updated at.
 */
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
