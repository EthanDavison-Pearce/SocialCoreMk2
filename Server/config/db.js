const mongoose = require("mongoose");
require("dotenv").config();
const username = "Randomedp";
const password = "uPU7igXXduYngN5u";
const cluster = "Cluster0";
const dbname = "SocialCore";
module.exports = () => mongoose.connect(
    `mongodb+srv://Randomedp:uPU7igXXduYngN5u@cluster0.nurp4vb.mongodb.net/?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  );