const express = require('express');
const router = express.Router();

const { Picture, Gallery, GalleryPicture } = require('../../models');

router.post("/:pictureId/gallery", async (req, res) => {
	try {
		const userId = 1;
		if (!(req.body.galleryId)) {
			return res.sendStatus(400);
		}

		const [pictureCount, galleryCount] = await Promise.all([
			Picture.count({ where: { id: req.params.pictureId } }),
			Gallery.count({ where: { id: req.body.galleryId } })
		]);

		if (pictureCount === 0 || galleryCount === 0) {
			return res.sendStatus(404);
		}

		await GalleryPicture.create({
			userId: userId,
			galleryId: req.body.galleryId,
			pictureId: req.params.pictureId
		});

		return res.sendStatus(204);
	} catch (error) {
		if (error.name === "SequelizeUniqueConstraintError") {
			return res.sendStatus(409);
		}
		console.log(error);
		return res.sendStatus(500);
	}
});

router.delete("/:pictureId/gallery/:galleryId", async (req, res) => {
	try {
		const userId = 1;
		const rows = await GalleryPicture.destroy({
			where: {
				userId: userId,
				galleryId: req.params.galleryId,
				pictureId: req.params.pictureId
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

const commentRoutes = require("./comment")
router.use("/:imageId/comment", commentRoutes)

const likeRoutes = require("./like")
router.use("/:imageId/like", likeRoutes)

const galleryRoutes = require("./gallery");
router.use("/:imageId/gallery", galleryRoutes)

module.exports = router;