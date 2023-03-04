const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

/**
 * ORM Model for the gallery table.
 * 
 * Galleries belong to a user via userId.
 * Galleries have many pictures through galleryPictureId.
 * 
 * @property {number} id The private key of the gallery.
 * @property {number} userId The user foreign key that owns the gallery.
 * @property {number} galleryPictureId The id of the through table to pictures.
 * 
 * @property {string} name The display name of the gallery.
 * @property {string} description The description of the gallery.
 */
class Gallery extends Model { }

Gallery.init({
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: true,
		validate: {
			notEmpty: true,
		}
	}
}, {
	sequelize: sequelize,
	freezeTableName: true,
	underscored: true,
	modelName: "gallery",
});

module.exports = Gallery;
