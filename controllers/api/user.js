const express = require("express");
const router = express.Router();
//const bcrypt = require("bcrypt");
//const { User } = require("../models");
//const jwt = require("jsonwebtoken");

router.get("/", (req,res)=>{
    res.send("This is from user controller for testing purpose")
})

module.exports = router;
