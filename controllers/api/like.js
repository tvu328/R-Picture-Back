const express = require("express");
const router = express.Router();
const { Like } = require("../../models");

router.post("/", async (req, res) => {
	try {
		if (!(req.body.pictureId) || !(req.body.delta)) {
			return res.sendStatus(400);
		}

		if (typeof (req.body.pictureId) !== 'number' || typeof (req.body.delta) !== 'number') {
			return res.sendStatus(422);
		}

		const userId = 1;
		{// Check that a user has not already liked/disliked this picture.
			const like = await Like.findOne({
				where: {
					pictureId: req.body.pictureId,
					userId: userId
				}
			});

			if (like) {
				return res.sendStatus(422);
			}
		}
		{// Create the like. TODO: This is not atomic and will need to be made into a transaction.
			const like = await Like.create({
				delta: req.body.delta,
				pictureId: req.body.pictureId,
				userId: userId
			});
			return res.sendStatus(204);
		}
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
});

router.put("/:likeId", async (req, res) => {
	try {
		if (!(req.body.delta)) {
			return res.sendStatus(400);
		}

		if (typeof (req.body.delta) !== 'number') {
			return res.sendStatus(422);
		}

		const [rows] = await Like.update({
			delta: req.body.delta
		}, {
			where: {
				id: req.params.likeId
			}
		});
		console.log(rows);
		if (rows) {
			return res.sendStatus(204);
		}

		return res.sendStatus(404);
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
});

router.delete("/:likeId", async (req, res) => {
	try {
		const rows = await Like.destroy({
			where: {
				id: req.params.likeId
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