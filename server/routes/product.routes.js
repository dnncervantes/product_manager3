// IMPORT THE CONTROLLER
const Product = require("../controllers/product.controllers")

module.exports = (app) => {
app.get("/api/products/all", Product.findAll)
app.post("/api/products/new", Product.create)
app.get("/api/products/find/:id", Product.findOne)
app.put("/api/products/update/:id", Product.update)
app.delete("/api/products/delete/:id", Product.delete)
}