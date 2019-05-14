const http = require('http'),
      bl   = require('bl');
var url = process.argv[2];

function show_stream(res){
	res.pipe(bl((err,data) => {
		if(err) return console.error;
		console.log(data.length + '\n' + data.toString());
	}));
}

http.get(url,show_stream).on('error',console.error);
