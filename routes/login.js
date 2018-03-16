var express = require('express');
var router = express.Router();
const passport = require('passport');

router.post('/', passport.authenticate('local'), function(req, res, next) {
  res.send(req.user.username);
});

module.exports = router;
