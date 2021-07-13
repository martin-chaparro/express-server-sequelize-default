const { response, request } = require('express');

const { db } = require('../models');

const getHome = async (req = request, res = response) => {
	const body = request.body;

	try {
		const users = await db.User.findAll();

		res.json({
			msg: 'Home Controller - Works',
			users,
			body,
		});
	} catch (error) {
		res.json({
			msg: error,
		});
	}
};

module.exports = {
	getHome,
};
