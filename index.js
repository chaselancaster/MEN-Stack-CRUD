const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const logger = require("morgan");
const peopleRouter = require("./routes/people.js");
const mongoose = require("mongoose");
const connectionString = "mongodb://localhost/people";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(logger("dev"));

app.use("/people", peopleRouter);

mongoose.connect(connectionString, err => {
  console.log(err || "connected to mongodb");
});

app.listen(3000, err => {
  console.log(err || "App is listening on port: 3000");
});
