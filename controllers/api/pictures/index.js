const express = require('express');
const router = express.Router();

const commentRoutes = require("./comment")
router.use("/comment", commentRoutes)

const likeRoutes = require("./like")
router.use("/like", likeRoutes)

const galleryRoutes = require("./gallery")
router.use("/gallery", galleryRoutes)

module.exports = router;