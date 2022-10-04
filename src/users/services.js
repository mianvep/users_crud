const { getAllUsers, getUserById, createUser } = require("./controllers");

const getAll = (req, res) => {
	const data = getAllUsers();
	res.status(200).json(data);
};

const getById = (req, res) => {
	const id = req.params.id;
	const data = getUserById(id);
	if (data) {
		res.status(200).json(data);
	} else {
		res.status(400).json({ msg: `User with id: ${id} doesn't exist` });
	}
};

const create = (req, res) => {
	const data = req.body;

	if (
		data.first_name &&
		data.last_name &&
		data.email &&
		data.password &&
		data.birthday
	) {
		const userCreated = createUser(data);
		res
			.status(200)
			.json({ msg: "New user created successful", user: userCreated });
	} else {
		res.status(400).json({ msg: "Invalid data" });
	}
};

module.exports = {
	getAll,
	getById,
	create,
};
