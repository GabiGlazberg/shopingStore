var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/{productName}', function(req, res, next) {
    if (!req.user) {
        return res.send(false);
    }
    return res.send(req.user.username);
});

module.exports = router;