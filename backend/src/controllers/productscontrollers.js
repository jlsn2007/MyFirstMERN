//Array de metodos (C R U D )
const productsControllers = {};
import productsModel from "../models/Products.js"

//Select
productsControllers.getProducts = async (req, res) => {
    const products = await productsModel.find()
    res.json(products)
}

//Insert
productsControllers.postProducts = async (req, res) => {
    const { name, description, price, stock } = req.body;
    const newProduct = new productsModel({ name, description, price, stock})
    await newProduct.save()
    res.json({message: "Product Insert"})
}

//Delete
productsControllers.deleteProducts = async (req, res) => {
    await productsModel.findOneAndDelete(req.params.id)
    res.json({message: "Product Deleted"})
}

//Update
productsControllers.putProducts = async (req, res) => {
    const {name, description, price, stock} = req.body;

    await productsModel.findByIdAndUpdate(req.params.id, {
        name,
        description,
        price,
        stock
    }, {new: true}
);
res.json({ message: "Product updated"});
}

export default productsControllers