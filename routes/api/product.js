var express = require('express');
var router = express.Router();
var passport = require('passport');
var adminAuth = require('../../middleware/adminAuth');
var mongoose = require('mongoose');
var Category = require('../../model/Category');
var Product = require('../../model/Product');

router.post('/addProduct', adminAuth, function(req, res, next) {
    if (!req.user) {
        return res.send(false);
    }

    var category = Category.find({name: req.body.category_name});

    console.log(category)
    var product = new product({
        name: 'Ian Fleming'
    });


    return res.send(req.user.username);
});

module.exports = router;