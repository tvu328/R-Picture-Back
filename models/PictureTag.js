const {Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class PictureTag extends Model {}

PictureTag.init({

}, {
	sequelize: sequelize,
	freezeTableName: true,
	underscored: true,
	modelName: "picture_tag",
});

module.exports = PictureTag;
