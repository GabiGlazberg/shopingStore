var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',passport.authenticate('local') ,function(req, res, next) {
  res.redirect('/');
});


module.exports = router;
