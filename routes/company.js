var express = require("express");
var router = express.Router();
const companyController = require('../controllers/companyController')

/* GET home page. */
router.get("/",companyController.index );

module.exports = router;
