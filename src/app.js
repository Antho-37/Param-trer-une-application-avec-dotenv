const express = require("express");
const app = express();

require("dotenv").config();

app.get("/*", (req, res) => {
  res.send(
    `I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`
  );
});

module.exports = app;
