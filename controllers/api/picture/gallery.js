const express = require("express");
const router = express.Router();
//const {  } = require(".../models");

router.get("/", (req,res)=>{
    res.send("This is from api/picture/gallery controller for testing purpose")
})



module.exports = router;