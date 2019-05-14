var fs = require('fs');

function cb_counter(err,data){
	if(err)console.log(err);

	var tot = data.split(/\n/).length;
	console.log(tot-1);
}

var buf = fs.readFile(process.argv[2],'utf8', cb_counter);


