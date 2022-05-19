const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const DB = "ProductDB";

//============MIDDLEWARE============
app.use(cors(), express.json(), express.urlencoded({extended:true}))
//==================================

//=====DATABASE CONNECTION==========
require("./config/mongoose.config")(DB);

//====CONNECT THE ROUTE======
const allMyProductsRoutes = require("./routes/product.routes")(app);
//allDbNameRoutes(app);

//=========STARTS SERVER, KEEP ON BOTTOM========
app.listen(PORT, () => {
    console.log(`Server is locked and loaded on port ${PORT}`)
})
