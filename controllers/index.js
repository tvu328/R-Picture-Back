const express = require('express');
const router = express.Router();

const userRoutes = require("./userController.js")
router.use("/api/users",userRoutes)

module.exports = router;