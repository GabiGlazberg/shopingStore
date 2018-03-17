var express = require('express');
var router = express.Router();
var Category = require('../../model/Category');

router.get('/', function(req, res, next) {
    if (!req.user) {
        return res.send(false);
    }

    Category.find({}, function (err, row) {
        return res.send(row);
    });

});

module.exports = router;