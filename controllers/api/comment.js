const express = require("express");
const router = express.Router();
const {Comments  } = require("../../models");

router.get("/", (req,res)=>{
    res.send("This is from api/picture/comment controller for testing purpose")
})

router.post("/", async (req, res) => {
	try {
		if (!(req.body.pictureId) || !(req.body.text)) {
			return res.sendStatus(400);
		}

    if (! (req.body.pictureId)  || !(req.body.userId) ) {
			return res.sendStatus(422);
		}
	if (Comments) { return res.sendStatus(422);
			}
		
        return res.sendStatus(201);
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
    }
);

router.put("/:commentId", async (req, res) => {
	try {
		if (!(req.body.text)) {
			return res.sendStatus(400);
		}

		if (!(req.body)) {
			return res.sendStatus(422);
		}
		console.log(rows);
		if (rows) {
			return res.sendStatus(201);
		}

		return res.sendStatus(201);
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
});

router.delete("/:commentId", async (req, res) => {
	try {
		const rows = await Comments.destroy({
			where: {
				id: req.params.commentId
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