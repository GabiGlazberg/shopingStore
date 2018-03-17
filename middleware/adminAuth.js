const passport = require('passport');

const adminAuth = (req, res, next) => {
    if (!req.user || req.user.role != 'admin') {
        res.render('admin/login');
    }
    next();
}

module.exports = adminAuth;