// Custom Module


var path = require('path');
var fs = require('fs');

module.exports = function (dir, ext, callback){
	fs.readdir(dir, (err,list) => {
		if(err) return callback(err);
		ext = '.' + ext;
		var i ;
		var data = [];
		for(i=0; i<list.length; i++){
			if(path.extname(list[i]) == ext) data.push(list[i]);
		}
		callback(null,data);
	});
}

