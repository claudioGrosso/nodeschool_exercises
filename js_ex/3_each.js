const http  = require('http')
const async = require('async')

var urls = process.argv.slice(2)

async.each(urls, (url, callback) => {
	http.get(url, res => {
		var body = ''
		res.on('data', () => {})
		res.on('end', () => callback(null))
	}).on('error', (err) => callback(err))
	}
,(err) => console.error(err) 
)
