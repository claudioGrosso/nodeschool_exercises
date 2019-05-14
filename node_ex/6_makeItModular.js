var rd = require('./6_module_reader.js');
var path = process.argv[2];
var ext = process.argv[3];

function show(err,data){
	if(err) return console.log(err);
	data.forEach( (n) => console.log(n) );
}


var res = rd(path, ext, show);
