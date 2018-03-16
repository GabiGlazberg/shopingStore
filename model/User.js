const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
    f_name: String,
    l_name: String,
    user_name: String,
    id: Number,
    password: String,
    city: String,
    street: String,
    role: {
        type: String,
        default: 'customer'
    }
});


userSchema.plugin(plm);
const User = mongoose.model('users', userSchema);

module.exports = User;