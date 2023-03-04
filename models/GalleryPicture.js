const {Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class GalleryPicture extends Model {}

GalleryPicture.init({

}, {
	sequelize: sequelize
});

module.exports = GalleryPicture;
