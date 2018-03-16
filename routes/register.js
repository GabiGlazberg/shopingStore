var express = require('express');
const passport = require('passport');
const User = require('../model/User');
var router = express.Router();

router.post('/', function (req, res, next) {
    User.register(new User({
            username: req.body.username
        }),
        req.body.password,
        function (err, user) {
            if (err) {
                res.send(false);
            } else {
                passport.authenticate('local')(req, res, function () {
                    res.send(user);
                });
            }
        }
    );
});

module.exports = router;