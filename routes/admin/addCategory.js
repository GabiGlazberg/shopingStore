var express = require('express');
var router = express.Router();
var adminAuth = require('../../middleware/adminAuth');
var Category = require('../../model/Category');
var mongoose = require('mongoose');

router.get('/', adminAuth, function(req, res, next) {
    res.render('admin/add-category');
});

router.post('/', adminAuth, function(req, res, next) {

    var category = new Category({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
    });
    category.save();

    res.render('admin/add-category');
});

module.exports = router;