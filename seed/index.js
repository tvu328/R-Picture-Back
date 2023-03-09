require("dotenv").config();
const sequelize = require("../config/connection");
const { User, Comment, GalleryPicture, Like, GalleryUser, Gallery, Picture, PictureTag, Tag, UserUser} = require("../models");


const comments = [
	{
		userId:'',
		pictureId:'',
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
		userId: '',
		galleryId: '',
		pictureId: ''
	}
]

const galleryUsers = [
	{
		followerUserId: '',
		followedGalleryId: ''
	}
]

const likes = [
	{
		userId: '',
		pictureId: ''
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
		tagId:'',
		pictureId:''
	}
]

const tags = [
	{
		name:['Tyler', 'Joe', 'Hieu', 'Kailen', 'Julian', 'Eli', 'Henry', 'Mathew', 'Sara', 'Martin']
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
		email: 'sara@joe.com',
		password: 'password',
		displayName: 'sara',
		bio: 'Will sara please stand up.'
	},
	{
		email: 'martin@joe.com',
		password: 'password',
		displayName: 'theMartin',
		bio: 'Will theMartin please stand up.'
	}
]

const userUsers = [
	{
		followerUserId: 'sarasmith123',
		followedUserId: 'martin55'
	},
	{
		followerUserId: 'martin55',
		followedUserId: 'mathew67'
	},
	{
		followerUserId: 'mathew67',
		followedUserId: 'joe34'
	},
	{
		followerUserId: 'joe34',
		followedUserId: 'henry17'
	}
]

const seed = async () => {
	try {
		await sequelize.sync({ force: true });

		// await Comment.bulkCreate(comments);
		// await Gallery.bulkCreate(gallery);
		// await GalleryPicture.bulkCreate(galleryPictures);
		// await GalleryUser.bulkCreate(galleryUsers);
		// await Like.bulkCreate(likes);
		// await Picture.bulkCreate(pictures);
		// await PictureTag.bulkCreate(pictureTags);
		// await Tag.bulkCreate(tags);
		await User.bulkCreate(users);
		// await UserUser.bulkCreate(userUsers);

		process.exit(0);
	} catch (err) {
		console.log(err);
	}
};

seed();