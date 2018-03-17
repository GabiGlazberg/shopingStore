var express = require('express');
var router = express.Router();
var adminAuth = require('../../middleware/adminAuth');
var Category = require('../../model/Category');
var Product = require('../../model/Product');
var mongoose = require('mongoose');

router.get('/', adminAuth, function(req, res, next) {
    Category.find({}, function (err, rows) {
        if (err) res.render('admin/add-product', {categories: []});
        res.render('admin/add-product', {categories: (rows || [])});
    });
});

router.post('/', adminAuth, function(req, res, next) {
    var product = new Product({
        name: req.body.name,
        category_id: req.body.category_id
    });

    product.save(function (err) {
        if (err) return handleError(err);
        res.redirect('/admin/add-product');
    });
});

module.exports = router;