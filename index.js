const express = require("express");
const app = express();
const db = require("./db");
const imageModel = require("./image/model");

const port = process.env.PORT || 4000;

app.listen(port);
