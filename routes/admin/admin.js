var express = require('express');
var router = express.Router();
var adminAuth = require('../../middleware/adminAuth');

router.get('/', adminAuth, function(req, res, next) {
    res.render('admin/index');
});

router.get('/index', adminAuth, function(req, res, next) {
    res.render('admin/index', {name: req.user.username});
});

module.exports = router;