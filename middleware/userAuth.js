const passport = require('passport');

const userAuth = (req, res, next) => {
    if (!req.user) {
        res.render('admin/login');
    }
    next();
};

module.exports = userAuth;
