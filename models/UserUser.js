const {Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

/**
 * ORM Model for the user_user through table.
 * 
 * Connects many Users to many Users.
 * 
 * @property {number} id The private key of the user_user link.
 * @property {number} followerUserId The user foreign key that is the follower.
 * @property {number} followedUserId The user foreign key that is being followed.
 * 
 * @property {Date} createdAt The date/time that the user_user was created at.
 * @property {Date} updatedAt The date/time that the user_user was last updated at.
 */
class UserUser extends Model {}

UserUser.init({

}, {
	sequelize: sequelize,
	freezeTableName: true,
	underscored: true,
	modelName: "user_user",
});

module.exports = UserUser;
