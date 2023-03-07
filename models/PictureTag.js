const {Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

/**
 * ORM Model for the picture_tag through table.
 * 
 * Connects many Pictures to many Tags.
 * 
 * @property {number} id The private key of the picture_tag link.
 * @property {number} tagId The tag foreign key that this links to.
 * @property {number} pictureId The picture foreign key that this links to.
 * 
 * @property {Date} createdAt The date/time that the picture_tag was created at.
 * @property {Date} updatedAt The date/time that the picture_tag was last updated at.
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
