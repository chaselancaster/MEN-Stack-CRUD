const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const logger = require("morgan");
const peopleRouter = require("./routes/people.js");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(logger("dev"));

app.use("/people", peopleRouter);

app.listen(3000, err => {
  console.log(err || "App is listening on port: 3000");
});
