const {Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

/**
 * ORM Model for the gallery_picture through table.
 * 
 * Connects many Galleries to many Pictures.
 * 
 * @property {number} id The private key of the gallery_picture link.
 * @property {number} userId The user foreign key that owns the gallery_picture link.
 * @property {number} galleryId The gallery foreign key that this links to.
 * @property {number} pictureId The picture foreign key that this links to.
 */
class GalleryPicture extends Model {}

GalleryPicture.init({

}, {
	sequelize: sequelize,
	freezeTableName: true,
	underscored: true,
	modelName: "gallery_picture",
});

module.exports = GalleryPicture;
