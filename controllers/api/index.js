const express = require('express');
const router = express.Router();


const searchRoutes = require("./search");
router.use("/search", searchRoutes);

const userRoutes = require("./user")
router.use("/user", userRoutes)

const galleryRoutes = require("./gallery")
router.use("/gallery", galleryRoutes)

const pictureRoutes = require("./picture")
router.use("/picture", pictureRoutes)

const commentRoutes = require("./comment")
router.use("/comment", commentRoutes)

const likeRoutes = require("./like")
router.use("/like", likeRoutes)


module.exports = router;