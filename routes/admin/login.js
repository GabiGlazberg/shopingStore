var express = require('express');
var router = express.Router();
var passport = require('passport');
var adminAuth = require('../../middleware/adminAuth');
var Category = require('../../model/Category');
var User = require('../../model/User');

router.get('/', function(req, res, next) {
    res.render('admin/login');;
});

router.post('/', passport.authenticate('local'), function(req, res, next) {

    var admin = User.find({_id: req.user._id}, function (err, admin) {
        if (err) return res.redirect('/');
        if (admin.role != 'admin') {
            return res.redirect('/');
        }
    });

    res.render('admin/index');

});

module.exports = router;