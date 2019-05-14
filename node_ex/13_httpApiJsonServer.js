const http = require('http')
const url  = require('url')

var port = process.argv[2]

var server = http.createServer((req,res)=>{
	
	if(req.method !== 'GET') return res.writeHead(404).end('invalid method')
	
	res.writeHead(200, { 'Content-Type' : 'application/json' })
	var query = url.parse(req.url, true)
	var time =  query.query.iso
	var date = new Date(time)
	var result 

	if(query.pathname == '/api/parsetime'){
		result = {
		  	 hour : date.getHours(),
			 minute : date.getMinutes(),
			 second : date.getSeconds()
			 }
	}
	if(query.pathname == '/api/unixtime'){
		result = {
			 unixtime : date.getTime()
			 }
	}
	res.end(JSON.stringify(result))

}).listen(port)
