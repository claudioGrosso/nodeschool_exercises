const http  = require('http')
const fs    = require('fs')
const async = require('async')

var path = process.argv[2]

async.waterfall([
	(callback) => {
		fs.readFile(path,'utf8',(err, url) => {
			if(err) return callback(err)
			callback(null,url)
		})
	},

	(url,callback)=>{
		var body = ''
		http.get(url.trimRight(), (res)=> {
			res.setEncoding('utf8')
			res.on('data', chunk => body += chunk )
			res.on('end' , chunk => callback(null, body))
		}).on('error', err => callback(err))
	}
], (err, res)=>{
	if(err) return console.error(err)
	console.log(res)
})




