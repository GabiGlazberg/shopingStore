const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const categoriesSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
});

const Category = mongoose.model('categories', categoriesSchema);

module.exports = Category;