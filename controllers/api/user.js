const express = require("express");
const router = express.Router();
//const bcrypt = require("bcrypt");
const { User } = require("../../models");
//const jwt = require("jsonwebtoken");

//Get all users
router.get("/", async (req, res) => {
    try {
        const user = await User.findAll()
        res.json(user)
    } catch (err) {
        console.log(err);
        res.status(500);
    }
})

//Get 1 user
router.get("/:userId", async (req, res) => {
    const user = await User.findByPk(req.params.userId)
    res.json(user)
})


//Create a user
router.post("/", async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.json(newUser)
    } catch (err) {
        console.log(err);
        res.status(500);
    }
})

//Update a user
router.put("/:userId", async(req,res) =>{
    try {
        const newUser = await User.update({
            email:req.body.email,
            password:req.body.password,
            displayName:req.body.displayName
        },{where:{
            id:req.params.userId
        }})
        res.json(newUser)
    } catch (err) {
        console.log(err);
        res.status(500);
    }
})

//Delet a user
router.delete("/:userId", async(req,res) =>{
    try{
        const user = await User.destroy({
            where:{
                id:req.params.userId
            }
        })
        res.json(user)
    }catch (err) {
        console.log(err);
        res.status(500);
    }
})

module.exports = router;
