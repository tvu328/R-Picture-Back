const express = require('express');
const router = express.Router();

const commentRoutes = require("./comment")
router.use("/:imageId/comment", commentRoutes)

const likeRoutes = require("./like")
router.use("/:imageId/like", likeRoutes)

const galleryRoutes = require("./gallery")
router.use("/:imageId/gallery", galleryRoutes)

module.exports = router;