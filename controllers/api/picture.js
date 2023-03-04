const express = require("express");
const router = express.Router();
//const {  } = require("../models");

router.get("/", (req,res)=>{
    res.send("This is from picture controller for testing purpose")
})

module.exports = router;