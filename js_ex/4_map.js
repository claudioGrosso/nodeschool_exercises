const http  = require('http')
const async = require('async')

var urls = process.argv.slice(2)

async.map(urls, (url, callback) => {
	http.get(url, res => {
		var body = ''
		res.on('data', chunk => body += chunk)
		res.on('end', () => callback(null, body))
	}).on('error', (err) => callback(err))
	}
,(err, results) => { 
	if(err) console.error(err) 
	//results.forEach( value => console.log(value) )
	console.log(results)
})
