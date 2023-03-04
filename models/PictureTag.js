const {Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

/**
 * ORM Model for the picture_tag through table.
 * 
 * 
 * @property {number} id The private key of the picture_tag link.
 * @property {number} tagId The tag foreign key that this links to.
 * @property {number} pictureId The picture foreign key that this links to.
 */
class PictureTag extends Model {}

PictureTag.init({

}, {
	sequelize: sequelize,
	freezeTableName: true,
	underscored: true,
	modelName: "picture_tag",
});

module.exports = PictureTag;
