const http = require('http')
const async = require('async')

var url = process.argv[2]
var word = 'meerkat'
var count = 0
var body 

async.whilst(
	() => body != word.trim()
	,(callback) => {
		http.get(url, (res) => {
			body = ''
			count++
			res.setEncoding('utf8')
			res.on('data', chunk => body += chunk)
			res.on('end', () => callback(null, count))
		}).on('error', () => callback(err))
	}
	,(err,count) => {
		if(err) return console.error(err)
		console.log(count)
	}

)

