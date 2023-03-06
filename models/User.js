const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const bcrypt = require("bcrypt");

/**
 * ORM Model for the user table.
 * 
 * Users have many Pictures.
 * Users have many Galleries.
 * Users have many FollowedGalleries through GalleryUser.
 * Users have many GalleryPictures.
 * Users have many Comments.
 * Users have many Likes.
 * Users have many UserFollowingUsers through UserUser.
 * Users have many FollowedUsers through UserUser.
 * 
 * @property {number} id The private key of the user.
 * 
 * @property {string} email The email of the user.
 * @property {string} password The password hash of the user.
 * @property {string} displayName The display name of the user.
 * @property {string} bio The biography of the user.
 * 
 * @property {Date} createdAt The date/time that the user was created at.
 * @property {Date} updatedAt The date/time that the user was last updated at.
 */
class User extends Model { }

User.init({
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true,
			notEmpty: true,
		}
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			not: /^([^a-z]*|[^A-Z]*|[^0-9]*|[a-zA-Z0-9]*|.{0,7})$/,
		}
	},
	displayName: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		}
	},
	bio: {
		type: DataTypes.TEXT,
		allowNull: true,
		validate: {
			notEmpty: true,
		}
	},
}, {
	sequelize: sequelize,
	hooks: {
		beforeCreate: async user => {
			user.password = await bcrypt.hash(user.password, 4);
			return user;
		},
	},
	freezeTableName: true,
	underscored: true,
	modelName: "user",
});

module.exports = User;
