const mongoose = require("mongoose");
require("dotenv").config();
module.exports = () => mongoose.connect("mongodb+srv://ethan:password123@cluster0.iuhx4hp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
