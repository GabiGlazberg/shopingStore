var express = require('express');
var router = express.Router();
var adminAuth = require('../../middleware/adminAuth');

router.get('/index', adminAuth, function(req, res, next) {
    res.render('admin/index');;
});

module.exports = router;