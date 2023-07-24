const express = require('express');

const app = express();

let tater = "Explorer"

app.get("/edit/:query", (req, res) => {
    tater = req.params.query;
    res.send(tater);
});

app.get("/", (req, res) => {
  res.send(tater);
})

app.listen(process.env.PORT)