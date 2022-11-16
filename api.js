const express = require('express');
const user = require('./modulo');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://atalaver:Talavera.2002@cluster0.4kijey7.mongodb.net/?retryWrites=true&w=majority');

const app = express();
const port = 4000;
app.use(express.json());

app.get('/users', user.list);
app.post('/users', user.create);
app.get('/users/:id', user.get);
app.put('/users/:id', user.update);
app.patch('/users/:id', user.update);
app.delete('/users/:id', user.destroy);

app.use(express.static('app'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});
app.get('*', (req, res) => {
	res.status(404).send('No existe');
});

app.listen(port, () => {
	console.log('Funcionando...');
});