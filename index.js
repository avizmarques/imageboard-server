const express = require("express");
const app = express();
const db = require("./db");
const port = process.env.PORT || 4000;
require("./image/model");

const cors = require("cors");
const corsMiddleware = cors();
app.use(corsMiddleware);

const bodyParser = express.json();
app.use(bodyParser);

const imageRouter = require("./image/router");
app.use(imageRouter);

app.listen(port);
