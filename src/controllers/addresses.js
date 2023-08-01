const db = require("../db/index");

// FlatNumber Varchar(255),
// StreetNumber Varchar(255),
// City Varchar(255),
// Postcode Varchar(7),
// Country Varchar(20),
// CustomerID Int,

const createAddress = async (req, res) => {
	// res.status(201).send(`You just added a new address`);
	const { flatNumber, streetNumber, city, postcode, country, customerID } =
		req.body;

	try {
		const {
			rows: [address],
		} = await db.query(
			"INSERT INTO Address (flatNumber, streetNumber, city, postcode, country, customerID) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
			[flatNumber, streetNumber, city, postcode, country, customerID]
		);
		res.status(201).json(address);
	} catch (error) {
		res
			.status(500)
			.json({ error: "An error occurred while creating the address." });
	}
};

const readAllAddresses = async (_, res) => {
	// res.status(200).send(`I'm returning all of your customers`);
	try {
		const { rows } = await db.query("SELECT * FROM Address");
		res.status(200).json(rows);
	} catch (err) {
		res.status(500).json(err.message);
	}
};

const readAddressByID = async (req, res) => {
	res.status(200).send(`Here's the address you want - change my code`);
};

const updateAddress = async (req, res) => {
	res.status(200).send(`Address updated - change my code`);
};

const deleteAddress = async (req, res) => {
	res.status(204).send(`Deleted Address - change my code`);
};

module.exports = {
	createAddress,
	readAllAddresses,
	readAddressByID,
	updateAddress,
	deleteAddress,
};
