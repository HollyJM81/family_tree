const db = require("../db/index");

const createCustomer = async (req, res) => {
	// res.status(201).send(`You just made a new customer`);
	const { name, addressID } = req.body;

	try {
		const {
			rows: [customer],
		} = await db.query(
			"INSERT INTO Customer (name, addressID) VALUES ($1, $2) RETURNING *",
			[name, addressID]
		);
		res.status(201).json(customer);
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while creating the customer." });
	}
};

const readAllCustomers = async (_, res) => {
	// res.status(200).send(`I'm returning all of your customers`);
	try {
		const { rows } = await db.query("SELECT * FROM Customer");
		res.status(200).json(rows);
	} catch (err) {
		res.status(500).json(err.message);
	}
};

const readCustomerByID = async (_, res) => {
	res.status(200).send(`Here's the customer you want`);
};

const updateCustomer = async (_, res) => {
	res.status(200).send(`Customer updated`);
};

const deleteCustomer = async (req, res) => {
	res.status(204);
};

module.exports = {
	createCustomer,
	readAllCustomers,
	readCustomerByID,
	updateCustomer,
	deleteCustomer,
};
