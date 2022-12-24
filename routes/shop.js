var express = require('express');
var router = express.Router();
const Shop = require("../models/shop");

/* GET users listing. */
router.get("/", async function (req, res, next) {
    const shop = await Shop.find();
    res.status(200).json({
        data: shop,
    });
});

module.exports = router;