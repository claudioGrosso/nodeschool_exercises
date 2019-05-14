const path = require('path');
const fs = require('fs');

function cb_reader(err,list){
	if(err)  return console.log(err);
	var i ;
	for(i=0; i<list.length; i++){
		if(path.extname(list[i]) == ext) console.log(list[i]);
	}
}

var dir = process.argv[2];
var ext = '.' + process.argv[3];

var result = fs.readdir(dir, cb_reader);

