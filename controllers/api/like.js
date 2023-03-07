const express = require("express");
const router = express.Router();
const { Like } = require(".../models");

router.post("/", async (req,res)=>{
    try {

	} catch(error) {
		console.log(error);
		return res.sendStatus(500);
	}
});

router.put("/:likeId", async (req,res)=>{
    try {

	} catch(error) {
		console.log(error);
		return res.sendStatus(500);
	}
});

router.delete("/:likeId", async (req,res)=>{
    try {

	} catch(error) {
		console.log(error);
		return res.sendStatus(500);
	}
});


module.exports = router;