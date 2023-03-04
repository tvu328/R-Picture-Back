const express = require('express');
const router = express.Router();

const userRoutes = require("./user")
router.use("/user", userRoutes)

const galleryRoutes = require("./gallery")
router.use("/gallery", galleryRoutes)

const pictureRoutes = require("./picture")
router.use("/picture", pictureRoutes)

module.exports = router;