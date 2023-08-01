const express = require("express");
const {
	createAddress,
	readAllAddresses,
	readAddressByID,
	updateAddress,
	deleteAddress,
} = require("../controllers/addresses");

const addressRouter = express.Router();

addressRouter.get("/address", readAllAddresses);
addressRouter.get("/address/:id", readAddressByID);
addressRouter.post("/address", createAddress);
addressRouter.patch("/address/:id", updateAddress);
addressRouter.delete("/address/:id", deleteAddress);

module.exports = addressRouter;
