var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.use(express.static(__dirname + '/static'));

app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

var portaroo = process.env.PORT || 3000;

var server = app.listen(portaroo, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('App listening at http://%s:%s', host, port);
});
