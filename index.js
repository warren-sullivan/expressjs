const express = require('express');
const http = require('http');
const app = express();

const routes = require('./routes');

app.use('/', routes);

app.listen(5000, function () {
	console.log('server')
});
