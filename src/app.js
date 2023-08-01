const express = require("express");
const app = express();
const customerRouter = require("./routes/customer");
const addressRouter = require("./routes/address");

app.use(express.json());
app.use(customerRouter);
app.use(addressRouter);

module.exports = app;
