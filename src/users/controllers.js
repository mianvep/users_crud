const uuid = require("uuid");

const userDB = [
	{
		id: "2016f7bc-a60a-4880-8d01-3aa3855de422",
		first_name: "Miguel",
		last_name: "Vera",
		email: "miguelv@gmail.com",
		password: "root123",
		birthday: "1996/01/01",
	},
];

const getAllUsers = () => {
	return userDB;
};

const getUserById = (id) => {
	const data = userDB.filter((item) => item.id === id);
	return data;
};

const createUser = (data) => {
	const newUser = {
		id: uuid.v4(),
		first_name: data.first_name,
		last_name: data.last_name,
		email: data.email,
		password: data.password,
		birthday: data.birthday,
	};
	userDB.push(newUser);
	return newUser;
};

module.exports = {
	getAllUsers,
	getUserById,
	createUser,
};
