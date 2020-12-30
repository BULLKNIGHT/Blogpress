const express = require('express');
const router = express.Router();

// Model
const userModel = require('../models/User');

router.get("/", async (req, res) => {
    res.send(await userModel.find({}));
})

module.exports = router;