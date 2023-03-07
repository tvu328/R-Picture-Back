const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../../models");
//const jwt = require("jsonwebtoken");

//Get 1 user
router.get("/:userId", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.userId)
        if (!user) {
            res.sendStatus(404)
        } else {
            res.json(user)
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

//Create a user
router.post("/", async (req, res) => {
    try {
        if (!(req.body.displayName)) {
            return res.sendStatus(400)
        } else if (!(req.body.email)) {
            return res.sendStatus(400)
        } else if (!(req.body.password)) {
            return res.sendStatus(400)
        }
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (user) {
            return res.sendStatus(422)
        }
        const newUser = await User.create(req.body)
        res.status(201).json(newUser)
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

//Update a user
router.put("/:userId", async (req, res) => {
    try {
        const findUser = await User.findByPk(req.params.userId)
        if(!findUser){
            return res.sendStatus(404)
        }
        if (req.body.newPassword && !req.body.oldPassword) {
            return res.sendStatus(400)
        }
        else if (req.body.newPassword == req.body.oldPassword) {
            return res.sendStatus(422)
        }
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (user) {
            return res.sendStatus(422)
        }
        const newUser = await User.update({
            email: req.body.email,
            password: req.body.newPassword,
            displayName: req.body.displayName
        }, {
            where: {
                id: req.params.userId
            }
        })
        res.json(newUser)
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

//Delet a user
router.delete("/:userId", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.userId)
        if (!user) {
            res.sendStatus(404)
        }
        if(!req.body.password){
            return res.sendStatus(400)
        }
        if(await bcrypt.compare(req.body.password,user.password)){
            const deleteUser = await User.destroy(
                {
                    where: {
                        id: req.params.userId
                    }
                })
            res.json(deleteUser)
        }else{
        res.sendStatus(403)
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

module.exports = router;
