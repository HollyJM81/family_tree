const express = require("express");
const {
	createCustomer,
	readAllCustomers,
	readCustomerByID,
	updateCustomer,
	deleteCustomer,
} = require("../controllers/customers");

const customerRouter = express.Router();

customerRouter.get("/customers", readAllCustomers);
customerRouter.get("/customers/:id", readCustomerByID);
customerRouter.post("/customers", createCustomer);
customerRouter.patch("/customers/:id", updateCustomer);
customerRouter.delete("/customers/:id", deleteCustomer);

module.exports = customerRouter;
