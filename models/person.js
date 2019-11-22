const mongoose = require("mongoose");

const personSchema = mongoose.Schema({
  name: String,
  category: String,
});

module.exports = mongoose.model("Person", personSchema);
