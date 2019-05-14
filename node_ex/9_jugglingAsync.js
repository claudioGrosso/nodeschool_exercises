const http = require('http'),
      bl   = require('bl');

function manage_stream(res){
	res.pipe(bl((err,data) => {
		if(err) return console.error;
		value.push(data.toString());
	}));
}

var urls = [],
    value = [];

for( var i=2 ; i < process.argv.length ; i++ ){
	http.get(process.argv[i],manage_stream);
}

//urls.forEach(value => http.get(value, manage_stream));

value.forEach(data => console.log(data));






