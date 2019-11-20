const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const Person = require("./models/person.js");
const path = require("path");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 9000;

// Setup Logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, ".", "dist")));

// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, ".", "dist", "index.html"));
});

app.use(bodyParser.json());
// Connection URL
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to db!")
);

//get all post
app.get("/api/", async (req, res) => {
  try {
    const person = await Person.find();
    res.json(person);
  } catch (err) {
    res.json({ err });
  }
});

//specific post
app.get("/api/:personId", async (req, res) => {
  try {
    const person = await Person.findById(req.params.personId);
    res.json(person);
  } catch (err) {
    res.json({ err });
  }
});

//add post
app.post("/api/", async (req, res) => {
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

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
