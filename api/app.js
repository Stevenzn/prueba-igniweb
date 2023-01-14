const express = require("express");
const cors = require("cors");
const config = require("config");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/" + config.get("server.api_version"), routes);

module.exports = app;
