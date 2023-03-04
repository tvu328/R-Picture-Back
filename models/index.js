const Comment = require("./Comment.js");
const Gallery = require("./Gallery.js");
const GalleryPicture = require("./GalleryPicture.js");
const Like = require("./Like.js");
const Picture = require("./Picture.js");
const PictureTag = require("./PictureTag.js");
const Tag = require("./Tag.js");
const User = require("./User.js");

User.hasMany(Picture);
Picture.belongsTo(User);

User.hasMany(Gallery);
Gallery.belongsTo(User);

User.hasMany(GalleryPicture);
GalleryPicture.belongsTo(User);

User.hasMany(Comment);
Comment.belongsTo(User);

User.hasMany(Like);
Like.belongsTo(User);

Picture.hasMany(Tag, { through: PictureTag });
Tag.hasMany(Picture, { through: PictureTag });

Picture.hasMany(Comment);
Comment.belongsTo(Picture);

Picture.hasMany(Like);
Like.belongsTo(Picture);

Picture.hasMany(Gallery, { through: GalleryPicture });
Gallery.hasMany(Picture, { through: GalleryPicture });

module.exports = {
	Comment,
	Gallery,
	GalleryPicture,
	Like,
	Picture,
	PictureTag,
	Tag,
	User,
};