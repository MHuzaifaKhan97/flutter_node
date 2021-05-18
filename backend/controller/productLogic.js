const PRODUCTS = require('../model/products');

module.exports = {
    getProducts: async (req, res, next) => {
        const products = await PRODUCTS.find();
        res.json({
            result: products.map((res) => {
                return {
                    id: res.id,
                    name: res.name,
                    price: res.price,
                    desc: res.desc
                }
            })
        })
    },
    insertProduct: async (req, res) => {
        const product = await new PRODUCTS({
            name: req.body.name,
            price: req.body.price,
            desc: req.body.desc,
        })

        product.save();
        res.json({
            "message": "Product Successfully Inserted",
            id: product.id,
            name: product.name
        })
    },
    deleteProduct: async (req, res) => {
        const id = req.params.id;
        const del = await PRODUCTS.findByIdAndRemove(id)
        res.json({
            // "delete":del
            "message": "Product Successfully Deleted"
        })
    },
    updateProduct: async (req, res) => {
        const id = req.params.id;
        let product = await PRODUCTS.findById(id);

        product.id = req.body.id
        product.name = req.body.name
        product.price = req.body.price
        product.desc = req.body.desc

        let updatedProduct = await product.save();

        res.json({
            "res":product
        })
    }
}