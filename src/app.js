const express = require("express");
const app = express();
const customerRouter = require("./routes/customer");

app.use(express.json());
app.use(customerRouter);

module.exports = app;
