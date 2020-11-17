const express = require("express");
const path = require("path");
const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>hello</h1>");
// });
const d = new Date();
const day = d.getDay();
const hours = d.getHours();
app.use(express.static(path.join(__dirname, "public")));

if (day in [1, 2, 3, 4, 5] && hours >= 9 && hours <= 17) {
  app.listen(5000, (err) => {
    if (err) {
      console.log("failed");
    } else {
      console.log("server worked");
    }
  });
} else {
  app.get("/", (req, res) => {
    res.send("<h1>Hors horaire </h1>");
  });
}
