const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const todaysDate = new Date();
  const dateAfterHundredDays = addDays(todaysDate, 100);
  response.send(
    `${dateAfterHundredDays.getDate()}/${
      dateAfterHundredDays.getMonth() + 1
    }/${dateAfterHundredDays.getFullYear()}`
  );
});

module.exports = app;
