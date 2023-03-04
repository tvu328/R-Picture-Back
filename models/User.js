const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");
const bcrypt = require("bcrypt");

class User extends Model { }

User.init({
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true,
			notEmpty: true,
		}
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			not: /^([^a-z]*|[^A-Z]*|[^0-9]*|[a-zA-Z0-9]*|.{0,7})$/,
		}
	},
	displayName: {
		type: DataTypes.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
		}
	},
	bio: {
		type: DataTypes.TEXT,
		allowNull: true,
		validate: {
			notEmpty: true,
		}
	},
}, {
	sequelize: sequelize,
	hooks: {
		beforeCreate: async user => {
			user.password = await bcrypt.hash(user.password, 4);
			return user;
		},
	}
});

module.exports = User;
