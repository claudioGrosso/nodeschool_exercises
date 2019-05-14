const http = require('http')
const async = require('async')

async.series({
	requestOne: (callback) => fetchURL(process.argv[2] , callback)
       ,requestTwo: (callback) => fetchURL(process.argv[3] , callback)
}, function callback(err, results){
	if(err) return console.error(err)
	console.log(results)
})

function fetchURL(url, callback){
	http.get(url, (res) => {
		var body = ''
		res.setEncoding('utf8')
		res.on('data', chunk => body += chunk)
		res.on('end', chunk => callback(null, body))
	}).on('error', err => callback(err))
}
