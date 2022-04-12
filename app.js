const express = require("express");
const body_parser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
mongoose.connect("mongodb://localhost:27017/test", (error) => {
  if (error) throw "connect failed";
});

const city = mongoose.Schema({
  city: String,
});

const cities = mongoose.model("cities", city);

app.use(cors({ origin: "*" }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());
// app.use(express.static("Client/build"));

app.get("/check", (req, res) => res.json({ message: "working" }));

const port = process.env.PORT || 8080;

app.listen(port, console.log(`listening on port ${port}`));
