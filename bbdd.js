const mongoose = require('mongoose');

const Users = mongoose.model('User', {
	nombre: { type: String, required: true, minLength: 3},
	apellido: { type: String, required: true, minLength: 3}
});

module.exports = Users;