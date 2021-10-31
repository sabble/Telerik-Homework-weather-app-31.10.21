const express = require("express");
const app = express();
const cities = require("./data.json");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/weather", (req, res) => {
  const currentCity = undefined;
  res.render("weather", { cities, currentCity });
});

app.post("/weather", (req, res) => {
  const currentCity = cities.find((city) => {
    return req.body.city === city.name;
  });
  res.render("weather", { cities, currentCity });
});

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});

//Create a web application using NodeJS and Express, which has a static HTML for homepage,
//a GET route “/weather” containing an select field and submit button.
//After POST form submission to “/weather” the response should be displayed below the form.
// Data about daily forecast and pre-defined regions (used for the dropdown) to be stored in a static JSON.
