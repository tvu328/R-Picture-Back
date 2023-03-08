const sequelize = require("../config/connection");
const { User, Comment, GalleryPicture } = require("../models");


const comments = [
	{
		text: ''
	}
]

const gallery = [
	{
		name: '',
		description: ''
	}
]

const galleryPictures = [
	{
		name: '',
		description: ''
	}
]

const galleryUsers = [
	{
		name: '',
		description: ''
	}
]

const likes = [
	{
		count: ''
	}
]

const pictures = [
	{
		name:'',
		description:'' 
	}
]

const pictureTags = [
	{
		tag:''
	}
]

const tags = [
	{
		tag:'' 
	}
]

const users = [
	{
		email: 'joe@joe.com',
		password: 'password',
		displayName: 'theRealJoe',
		bio: 'Will theRealJoe please stand up.'
	},
	{
		email: 'eli@joe.com',
		password: 'password',
		displayName: 'theRadish',
		bio: 'Will theRadish please stand up.'
	},
	{
		email: 'eli@joe.com',
		password: 'password',
		displayName: 'theRadish',
		bio: 'Will theRadish please stand up.'
	},
	{
		email: 'eli@joe.com',
		password: 'password',
		displayName: 'theRadish',
		bio: 'Will theRadish please stand up.'
	}
]

const userUsers = [
	{
		email: 'joe@joe.com',
		password: 'password',
		displayName: 'theRealJoe',
		bio: 'Will theRealJoe please stand up.'
	},
	{
		email: 'eli@joe.com',
		password: 'password',
		displayName: 'theRadish',
		bio: 'Will theRadish please stand up.'
	},
	{
		email: 'eli@joe.com',
		password: 'password',
		displayName: 'theRadish',
		bio: 'Will theRadish please stand up.'
	},
	{
		email: 'eli@joe.com',
		password: 'password',
		displayName: 'theRadish',
		bio: 'Will theRadish please stand up.'
	}
]

const seed = async () => {
	try {
		await sequelize.sync({ force: true });

		await User.bulkCreate(comments);
		await User.bulkCreate(gallery);
		await User.bulkCreate(galleryPictures);
		await User.bulkCreate(galleryUsers);
		await User.bulkCreate(likes);
		await User.bulkCreate(pictures);
		await User.bulkCreate(pictureTags);
		await User.bulkCreate(tags);
		await User.bulkCreate(users);
		await User.bulkCreate(userUsers);

		process.exit(0);
	} catch (err) {
		console.log(err);
	}
};

seed();