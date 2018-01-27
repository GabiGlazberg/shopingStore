const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

const categoriesSchema = mongoose.Schema({
    name: String,
    product_id: String
});

categoriesSchema.plugin(plm);
const categories = mongoose.model('categories', categoriesSchema);

module.exports = User;