var express = require('express');
var router = express.Router();
var passport = require('passport');
var adminAuth = require('../../middleware/adminAuth');
var Category = require('../../model/Category');
var User = require('../../model/User');

router.get('/', function(req, res, next) {
    res.render('admin/login');
});

router.post('/', passport.authenticate('local'),
    function(req, res, next) {

    res.redirect('/admin/index');

});

module.exports = router;