var express = require('express');
var router = express.Router();
var passport = require('passport');
var adminAuth = require('../../middleware/adminAuth');
var Category = require('../../model/Category');

router.post('/addCategory', adminAuth, function(req, res, next) {
    if (!req.user) {
        return res.send(false);
    }

    var product = new Category({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.category_name
    });

    product.save();


    console.log(product)


    return res.send(req.user.username);
});

module.exports = router;