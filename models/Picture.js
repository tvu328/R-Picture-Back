const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

/**
 * ORM Model for the picture table.
 * 
 * Pictures belong to Users.
 * Pictures have many Likes.
 * Pictures have many Comments.
 * Pictures have many Tags through PictureTag.
 * Pictures have many Galleries through GalleryPicture.
 * 
 * @property {number} id The private key of the picture.
 * @property {number} userId The user foreign key that owns the picture.
 * 
 * @property {string} name The display name of the picture.
 * @property {string} description The description of the picture.
 * @property {string} S3URL The url of the picture hosted on AWS S3.
 * 
 * @property {Date} createdAt The date/time that the picture was created at.
 * @property {Date} updatedAt The date/time that the picture was last updated at.
 */
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
			isUrl: true,
		},
		field: "s3_url",
	}
}, {
	sequelize: sequelize,
	freezeTableName: true,
	underscored: true,
	modelName: "picture",
});

module.exports = Picture;
