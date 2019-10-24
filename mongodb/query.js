const Product = require('../models/product.model')
const Sale = require('../models/sale.model')

async function seedProduct() {
    try {
        await new Product({
            title: "Samsung Galaxy S10",
            price: 2899.00
        }).save()
        await new Product({
            title: "Ubat Gegat",
            price: 12.00
        }).save()
        console.log('success')
    } catch (error) {
        console.error(error)
    }
}

async function seedSale() {
    try {
        await new Sale({
            product: "5daea3bd6c741b14b141c511",
            quantity: 1
        }).save()
        await new Sale({
            product: "5daea3bd6c741b14b141c511",
            quantity: 1
        }).save()
        await new Sale({
            product: "5daea3bd6c741b14b141c512",
            quantity: 3
        }).save()
        console.log('success')
    } catch (error) {
        console.error(error)
    }
}

async function query() {
    try {
        let arr = {name: 'S10', price: [12.00,34.00,21.00]}

        // arr.map((val, index, arr) => {

        // }).reduce((prev, curr, index) => {

        // })

        /**
         * Populate aka JOIN
         */
        let result = await Sale.find().populate({
            path: 'product',
            select: 'title'
        })

        console.log(JSON.stringify(result))

        /**
         * Sum
         */
        let sum = await Product.aggregate([
            {
                $group: {
                    _id: null,
                    totalPrice: {
                        $sum: '$price'
                    }
                }
            }
        ])
        /**
         * Text Search aka LIKE
         */
        let text = await Product.find(
            { $title: { $search: "S10" } },
        )

        console.log(text);
    } catch (error) {
        console.error(error)
    }
}

// main()
// seedSale()
query()