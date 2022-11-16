const Users = require('./bbdd');

const User = {
	get: async (res, req) => {
		const { id } = req.params;
		const user = await Users.findOne({ _id: id});
		req.status(200).send(user);
	},
	list: async (res, req) => {
		const users = await Users.find();
		req.status(200).send(users);
	},
	create: async (res, req) => {
		const user = new Users(req.body);
		const savedUser = await user.save();
		req.status(201).send(savedUser._id);
	},
	update: async (res, req) => {
		const { id } = req.params;
		const user = await Users.findOne({ _id: id});
		Object.assign(user, req.body);
		await user.save();
		req.sendStatus(204);
	},
	destroy: async (res, req) => {
		const { id } = req.params;
		const user = await Users.findOne({ _id: id});
		if (user)
		{
			user.remove();
		}
		req.sendStatus(204);
	}
};

module.exports = User;