require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const setRoutes = require("./routes");
const setMiddlewares = require("./middlewares");

// Initialize app
const app = express();
const DB_URL =  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.m0nad.mongodb.net/money-transaction?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 8080;


// Set Middlewares
setMiddlewares(app);

// Set Routes
setRoutes(app);

app.get("/", (req, res) => {

  res.status(200).json({
    message: "Assalamu Alaikum",
    status: "API is working fine........",
  });
});

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port - ${PORT}`);
    });
  } catch (error) {
    console.log("Database error occurred!", error);
  }
};
startApp();
