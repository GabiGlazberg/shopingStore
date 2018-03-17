const passport = require('passport');

const adminAuth = (req, res, next) => {
    if (req.user) {
        if (req.user.role === 'admin' || req.user.role === 'super') {
            next();
        } else {
            res.redirect('/');
        }
    } else {
        res.redirect('/');
    }
}

module.exports = adminAuth;