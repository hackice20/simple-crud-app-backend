const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())


app.use("/api/products", productRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    "mongodb://localhost:27017/simple-crud-backend"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3001, () => {
      console.log("Server is running on port 3001");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
