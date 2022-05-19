//=======CONTROLLER FOR CRUD import the model to use queries======
const Product = require("../models/product.model");

module.exports = {
    //READ ALL===
    findAll: (req, res) => {
        Product.find()
        .then((products) => {
            return res.json(products)
        })
        .catch(err => res.json(err))
    },
    //CREATE===
    create: (req, res) => {
        Product.create(req.body)
            .then(newProduct => {
                console.log("DB Success created new Product");
                return res.json(newProduct)
            })
            .catch(err => {
            console.log("DB Error creating product");
            return res.json(err)
            })
    },
    //READ ONE===
    findOne: (req, res) => {
        console.log(req.params);
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },
    //UPDATE===
    update: (req,res) => {
        console.log("UPDATE :", req.params.id);
        console.log("UPDATE Obj", req.body);
        Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json(err))
    },
    //DELETE===
    delete: (req, res) => {
        console.log(req.params.id);
        Product.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}