const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const Person = require("./models/person.js");
const path = require("path");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const axios = require("axios");
require("dotenv").config();

const PORT = process.env.PORT || 9000;

//queries all data in the data base
/* person.find({})
 .then((data)=>{
    console.log(data);
  })
 .catch((err)=>{
   console.log(err);
 }) */

//queries for specific data
/* person.find({name:"eugene"})
 .then((doc)=>{
    console.log(doc);
 })
.catch((err)=>{
    console.log(err);
}); */

/* person.remove({name: 'test'})
    .then((docs)=>{
      if(docs.deletedCount) {
        console.log({"success":true});
      } else {
        console.log({"success":false});
      }
    }).catch((err)=>{
      console.log(err);
  })
      */
//console.log(process.env.DB_CONNECTION)

// Setup Logger
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

// Serve static assets
app.use(express.static(path.resolve(__dirname, ".", "dist")));
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to db!")
);

//get all post
app.get("/api/", async (req, res) => {
  try {
    const person = await Person.find();
    res.json(person);
  } catch (err) {
    res.json({
      err,
    });
  }
});

//specific post
app.get("/api/:personId", async (req, res) => {
  try {
    const person = await Person.findById(req.params.personId);
    res.json(person);
  } catch (err) {
    res.json({
      err,
    });
  }
});

//add post
app.post("/api/", async (req, res) => {
  const person = new Person({
    name: req.body.name,
    category: req.body.category,
  });
  try {
    const savedPerson = await person.save();
    res.json(savedPerson);
  } catch (err) {
    res.json({
      err,
    });
  }
});

//delete post
app.delete("/api/", async (req, res) => {
  try {
    const person = await Person.remove({ _id: req.body.personId });
    res.json(person);
  } catch (err) {
    res.json({ err });
  }
});

const sendPhoto = (base64) => {
  return axios({
    timeout: 10000,
    url: "https://kairosapi-karios-v1.p.rapidapi.com/recognize",
    method: "POST",
    headers: {
      "x-rapidapi-host": "kairosapi-karios-v1.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPID_API_KEY,
      "content-type": "application/json",
      accept: "application/json",
    },
    data: {
      image: `${base64}`,
      gallery_name: "MyGallery",
    },
  })
    .then((response) => {
      //console.log( response.data.images);
      // console.log("STATUS", response[0].transaction.status);
      return response.data.images;
    })
    .then((response) => {
      let id = "";
      const status = response[0].transaction.status;
      if (status) {
        const id = response[0].transaction.subject_id;
        return {
          status,
          id,
        };
      }
      console.log({
        status,
        id,
      });
    })
    .catch((err) => {
      return {
        status: "failed",
        id: "",
      };
    });
};

app.get("/test/", async (req, res) => {
  try {
    const person = await Person.find({ name: "eugene" });
    res.json(person[0].category);
  } catch (err) {
    res.json({ err });
  }
});

const getNews = async (person) => {
  const findPerson = await Person.find({ name: person });
  let category = findPerson[0].category;
  console.log(category, "THIS IS THE CATEGORY");

  /*  switch(person) {
    case "baru":
      category = "Sports";
      break;

    case "eugene":
      category = "Entertainment";
      break;

    case "fraser":
      category = "LifeStyle";
      break;

    case "david":
      category = "Japan";
      break;

    case "naoto":
      category = "World";
      break;

    default:
      category = "ScienceAndTechnology"
      break
  } */

  return axios({
    url:
      "https://microsoft-azure-bing-news-search-v1.p.rapidapi.com/?Category=" +
      category,
    method: "GET",
    headers: {
      "x-rapidapi-host": "microsoft-azure-bing-news-search-v1.p.rapidapi.com",
      "x-rapidapi-key": process.env.RAPID_API_KEY,
    },
  })
    .then((response) => {
      //console.log(response.data)
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

app.post("/api/data", async (req, res) => {
  let totalResponse = {};
  const image = req.body.body;
  const recognitionResponse = await sendPhoto(image);
  if (recognitionResponse.status === "success") {
    totalResponse.result = true;
  } else totalResponse.result = false;
  totalResponse.name = recognitionResponse.id;
  console.log(totalResponse);
  if (recognitionResponse.status === "success") {
    const newsResponse = await getNews(recognitionResponse.id);
    //console.log(newsResponse)
    totalResponse.value = newsResponse;
  }
  console.log(totalResponse);
  res.send(totalResponse);
});

console.log(getNews("eugene"));
// Always return the main index.html, since we are developing a single page application
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, ".", "dist", "index.html"));
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
