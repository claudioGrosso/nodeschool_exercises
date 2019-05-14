const http = require('http')
const map  = require('through2-map')

var url    = process.argv[2]

http.createServer((req,res)=>{
	if(req.method!=='POST') return res.end('invalid method')
	req.pipe(map((chunk)=>{
		return chunk.toString().toUpperCase()
	})).pipe(res)
}).listen(url)
