const http  = require('http')
const async = require('async')
const values = ['one','two','three']

var url = process.argv[2]

async.reduce(values, 0, (memo, item, callback) => {
	http.get(url+'?number='+item, (res) =>{
		var body = ''
		res.setEncoding('utf8')
		res.on('data', chunk => body += chunk)
		res.on('end', () => {
			memo += Number(body)
			callback(null,memo)
		})
	}).on('error', (err) => callback(err))}
	,(err, result) => {
		if(err)return console.error(err)
		console.log(result)
	}
)
