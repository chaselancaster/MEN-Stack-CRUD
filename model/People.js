const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  gender: String,
  bDay: Date
});

const People = mongoose.model("People", peopleSchema);

module.exports = People;
