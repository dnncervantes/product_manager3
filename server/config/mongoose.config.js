const mongoose = require("mongoose");
const DB = "ProductDB";

module.exports = () => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then(() => console.log(`You're connected to the ${DB} database`))
        .catch(err => console.log(`Cannot connect to ${DB}`, err))
}