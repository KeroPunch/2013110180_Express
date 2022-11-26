var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    fullname: 'Kritsakorn Dechalert',
  });
});

router.get('/bio', function(req, res, next) {
  res.status(200).json({
    fullname: 'Kritsakorn Dechalert',
    nickname: 'Kong',
    hobby: 'Travel',
    gitusername: 'KeroPunch'
  });
});

module.exports = router;
