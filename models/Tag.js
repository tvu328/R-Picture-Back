const {Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

/**
 * ORM Model for the tag table.
 * 
 * Tags have many Pictures through PictureTag.
 * 
 * @property {number} id The private key of the tag.
 * 
 * @property {string} name The name of the tag.
 * 
 * @property {Date} createdAt The date/time that the tag was created at.
 * @property {Date} updatedAt The date/time that the tag was last updated at.
 */
class Tag extends Model {}

Tag.init({
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			notEmpty: true,
		}
	}
}, {
	sequelize: sequelize,
	freezeTableName: true,
	underscored: true,
	modelName: "tag",
});

module.exports = Tag;
