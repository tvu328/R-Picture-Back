const sequelize = require("../config/connection");
const Models = require("../models");




const seed = async () => {
	await sequelize.sync({ force: true });
	

	process.exit(0);
};

seed();