// Imports
const express = require("express");
const parser = require("body-parser");
const router = require("./routes/main-routes");

// Setups
const app = express();
app.set("view engine", "ejs");

// Middlewares
app.use(parser.urlencoded({ extended: false }));
app.use(router);

// Server starts
app.listen(5000);
