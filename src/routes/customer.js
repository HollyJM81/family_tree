const express = require("express");
const {
	createCustomer,
	readAllCustomers,
} = require("../controllers/customers");

const customerRouter = express.Router();

customerRouter.get("/customers", readAllCustomers);
customerRouter.post("/customers", createCustomer);

module.exports = customerRouter;
