const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = mongoose.Schema({
    name: String,
    category_id: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;