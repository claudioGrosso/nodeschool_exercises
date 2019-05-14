var http = require('http');
var url = process.argv[2];

http.get(url, cb_show).on('error', console.error);

function cb_show(response){
	response.setEncoding('utf8');
	response.on('error', err => console.log(err));
	response.on('data', data => console.log(data));
}


