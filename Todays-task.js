const express = require("express");
const app = express();
const controller = require("./controller");
app.use(express.json());

let db = require("./model");

app.post("/", (req, res) => {
  controller.postdata(req, res);
});

app.listen(5000, () => {
  console.log("conected");
});
