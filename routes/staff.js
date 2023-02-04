var express = require("express");
var router = express.Router();
const staffController = require('../controllers/staffController')
const { body } = require('express-validator')
const passportJWT = require("../middleware/passportJWT")

/* GET home page. */
router.get("/",[passportJWT.isLogin],staffController.index );

router.get("/:id",staffController.show );

router.post("/",[
    body('name').not().isEmpty().withMessage("กรุณาป้อนชื่อสกุลด้วย"),
    body('salary').not().isEmpty().withMessage("กรุณาป้อนเงินเดือนด้วย").isInt().withMessage("รูปแบบเงินเดือนไม่ถูกต้อง"),
],staffController.insert );

router.delete("/:id",staffController.destroy);
router.put("/:id",staffController.update);


module.exports = router;
