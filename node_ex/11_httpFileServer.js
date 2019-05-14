const http = require('http')
const fs   = require('fs')

var port   = process.argv[2]
var url	   = process.argv[3]

var server = http.createServer( (req,res) => {
	res.writeHead(200, {'content-type' : 'text/plain'})
	fs.createReadStream(url).pipe(res)
}).listen(port)
