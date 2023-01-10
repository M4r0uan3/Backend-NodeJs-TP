const express = require("express");
const prodRouter = require("./Routes/productRoutes");
const catRouter = require("./Routes/categoryRoutes");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
)

app.use(express.json());
app.use("/products", prodRouter);
app.use("/categories", catRouter);
mongoose.connect(process.env.mongo_url).then(
  app.listen(1337, () => {
    console.log("Server running on port 1337...");
  })
);
