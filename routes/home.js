var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
    if (!req.user) {
        return res.send(FALSE);
    }
    return res.send(req.user.username);
});

module.exports = router;