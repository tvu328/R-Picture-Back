const {Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class GalleryPicture extends Model {}

GalleryPicture.init({

}, {
	sequelize: sequelize,
	freezeTableName: true,
	underscored: true,
	modelName: "gallery_picture",
});

module.exports = GalleryPicture;
