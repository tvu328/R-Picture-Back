const express = require('express');
const router = express.Router();

const commentRoutes = require("./comment")
router.use("/:imageId/comment", commentRoutes)

const likeRoutes = require("./like")
router.use("/:imageId/like", likeRoutes)

const galleryRoutes = require("./gallery");
const { Tag, Picture, PictureTag } = require('../../models');
router.use("/:imageId/gallery", galleryRoutes)

router.get("")

router.post("/", async (req, res) => {
	try {
		const userId = 1
		if (!(req.body.name) || !(req.body.description)) {
			return res.sendStatus(400);
		}

		const picture = await Picture.create({
			userId: userId,
			name: req.body.name,
			description: req.body.description,
			S3URL: "placeholderurl.com"
		})
		const allTags = []
		for (let index = 0; index < req.body.tags.length; index++) {
			const tag = req.body.tags[index];
			try {
				const newTag = await Tag.create({
					name: tag
				})
				allTags.push(newTag)
			} catch (error) {
				if SequelizeUniqueConstraintError 
			}
		}
		await PictureTag.bulkCreate(allTags.map(currentTag => {
			return {
				tagId: currentTag.id,
				pictureId: picture.id
			}
		}))
		return res.status(201).json({
			id: picture.id, name: picture.name, description: picture.description
		});
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
});

router.put("")

router.delete("/:pictureId", async (req, res) => {
	try {
		const rows = await Picture.destroy({
			where: {
				id: req.params.pictureId
			}
		});
		if (rows === 0) {
			return res.sendStatus(404);
		}

		return res.status(200).json({ rows: rows });
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
});

module.exports = router;
