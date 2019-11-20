const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  name: String,
  preference: String,
  lat: Number,
  long: Number,
});

module.exports = mongoose.model("Person", personSchema);
