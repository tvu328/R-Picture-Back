const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User, Picture, Gallery, Comment, Like } = require("../../models");
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
        if (!findUser) {
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
        if (!req.body.password) {
            return res.sendStatus(400)
        }
        if (await bcrypt.compare(req.body.password, user.password)) {
            const deleteUser = await User.destroy(
                {
                    where: {
                        id: req.params.userId
                    }
                })
            res.json(deleteUser)
        } else {
            res.sendStatus(403)
        }
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

//18
router.get("/:userId/feed", async (req, res) => {
    try {
        const userId = 1;
        const pageLength = parseInt(req.query["page-length"]) || 10;
        const pageNumber = parseInt(req.query["page-number"]) || 0;

        const user = await User.findByPk(req.params.userId, {
            limit: pageLength,
            offset: pageNumber * pageLength,
            subQuery: false,
            include: [{
                model: Gallery,
                as: "galleryFollowingUser",
                include: [{
                    model: Picture,
                    attributes: ["id", "name", "S3URL"],
                    include: [
						{
							model: User,
							attributes: ["displayName"]
						}, {
							model: Comment,
							attributes: ["id"]
						}, {
							model: Like,
							attributes: ["id", "delta"]
						}
					]
                }]
            },{
                through: {
                    attributes: []
                },
                model: User,
                as: "userFollowingUser",
                attributes: ["id","displayName"],
                include:[{
                    model: Picture,
                    attributes: ["id", "name", "S3URL"],
                    include: [
                        {
                            model: Comment,
                            attributes: ["id"]
                        }, {
                            model: Like,
                            attributes: ["id", "delta"]
                        }
                    ]
                }]
            }]
        })

        const galleryPictures = user.galleryFollowingUser.map(picture => ({
			id: picture.id,
			name: picture.name,
			commentCount: picture.comments.length,
			imageURL: picture.S3URL,
			score: picture.likes.reduce((score, { delta }) => score + delta, 0),
			like: picture.likes.find(like => like.id === userId),
		}));

        const pictures = user.userFollowingUser.map(picture => ({
			id: picture.id,
			name: picture.name,
			commentCount: picture.comments.length,
			imageURL: picture.S3URL,
			score: picture.likes.reduce((score, { delta }) => score + delta, 0),
			like: picture.likes.find(like => like.id === userId),
		}));

        const feedPicture = galleryPictures.concat(pictures)

        if (!user) {
            res.sendStatus(404)
        }

        const responseJson = {
            pageLength: pageLength,
            pageNumber: pageNumber,
            pictures: feedPicture
        }
        res.status(200).json(responseJson)
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

//20
router.get("/:userId/profile", async (req, res) => {
    try {
        const userId = 1;
        const picturesOnly = (req.query["pictures-only"] === 'true') || false;
        const pageLength = parseInt(req.query["page-length"]) || 10;
        const pageNumber = parseInt(req.query["page-number"]) || 0;

        const user = await User.findByPk(req.params.userId, {
            limit: pageLength,
            offset: pageNumber * pageLength,
            subQuery: false,
            attributes: picturesOnly? [] : ["bio", "id", "displayName"],
            include: [
                ...(picturesOnly ? [] : [{
                through: {
                    attributes: []
                },
                model: User,
                as: "userFollowingUser",
                attributes: ["id"]
            }]),
            {
                model: Picture,
                attributes: ["id", "name", "S3URL"],
                include: [
                    {
                        model: Comment,
                        attributes: ["id"]
                    }, {
                        model: Like,
                        attributes: ["id", "delta"]
                    }
                ]
            }
            ]
        })

        const pictures = user.pictures.map(picture => ({
			id: picture.id,
			name: picture.name,
			commentCount: picture.comments.length,
			imageURL: picture.S3URL,
			score: picture.likes.reduce((score, { delta }) => score + delta, 0),
			like: picture.likes.find(like => like.id === userId),
		}));

        if (!user) {
            res.sendStatus(404)
        }
        res.json(picturesOnly?{pictures:pictures}:{
            id: user.id,
            displayName: user.displayName,
            bio: user.bio,
            following: !!user.userFollowingUser.find(user => user.id === userId),
            followerCount: user.userFollowingUser.length,
            pictures: pictures
        })
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

module.exports = router;
