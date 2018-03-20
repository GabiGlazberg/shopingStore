var express = require('express');
var router = express.Router();
var Category = require('../../model/Category');
var Product = require('../../model/Product');
var userAuth = require('../../middleware/userAuth');

router.get('/by-category', function(req, res, next) {
    if (!req.user) {
        return res.send(false);
    }

    Category.findOne({name: req.query.category_name}, function (err, category) {
        Product.find({category_id: category._id}, function (err, products) {
           if (err) res.send("error");
           res.send(products);
        });
    });
});

router.get('/search', userAuth, function(req, res, next) {
    Product.find({name: req.query.search_product}, function (err, products) {
       if (err) res.send("error");
       res.send(products);
    });
});


module.exports = router;