const mongoose = require("mongoose");
require("dotenv").config();
module.exports = () => mongoose.connect('mongodb://Randomedp:uPU7igXXduYngN5u@cluster0.nurp4vb.mongodb.net/?retryWrites=true&w=majority');