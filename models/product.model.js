const { model } = require('../mongodb')

const Product = model('Product', {
    title: { type: String, index: true },
    price: Number
})

module.exports = Product