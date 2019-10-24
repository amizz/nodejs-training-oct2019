const { Schema, model } = require('../mongodb')

const Sale = model('Sale', {
    product: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    quantity: Number
})

// Sale.find().populate('Product')

module.exports = Sale