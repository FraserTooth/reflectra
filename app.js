const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Person = require("./models/person.js");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());
// Connection URL
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to db!")
);

//get all post
app.get("/", async (req, res) => {
  try {
    const person = await Person.find();
    res.json(person);
  } catch (err) {
    res.json({ err });
  }
});

//specific post
app.get("/:personId", async (req, res) => {
  try {
    const person = await Person.findById(req.params.personId);
    res.json(person);
  } catch (err) {
    res.json({ err });
  }
});

//add post
app.post("/", async (req, res) => {
  const person = new Person({
    name: req.body.name,
    preference: req.body.preference,
    lat: req.body.lat,
    long: req.body.long,
  });
  try {
    const savedPerson = await person.save();
    res.json(savedPerson);
  } catch (err) {
    res.json({ err });
  }
});

app.listen(3000);
