const {Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

/**
 * ORM Model for the gallery_user through table.
 * 
 * Connects many Galleries to many Users.
 * 
 * @property {number} id The private key of the gallery_user link.
 * @property {number} followerUserId The user foreign key that is the follower.
 * @property {number} followedGalleryId The gallery foreign key that this is following to.
 * 
 * @property {Date} createdAt The date/time that the gallery_user was created at.
 * @property {Date} updatedAt The date/time that the gallery_user was last updated at.
 */
class GalleryUser extends Model {}

GalleryUser.init({

}, {
	sequelize: sequelize,
	freezeTableName: true,
	underscored: true,
	modelName: "gallery_user",
});

module.exports = GalleryUser;
