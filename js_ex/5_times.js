const http  = require('http')
const async = require('async')
var url = 'http://' + process.argv.slice(2).join(':')

var opts = {
	hostname: process.argv[2],
	port: process.argv[3],
	path: 'users/create',
	method: 'POST'
	}

var postURL = (n, callback)=>{
	var req = http.request(opts, (res) =>{
		res.on('data', ()=>{})
		res.on('end', ()=> callback(null))
	}).on('error', err => callback(err))
	var body = JSON.stringify({'user_id':1})
	req.write(body)
	req.end
}


async.times(
	5
	,(n,callback)=>{
		postURL(n, (err, res) => callback(err,res))}
	,(err,res)=>{
		if(err) console.error(err)
		url += '/users'
		http.get(url, res => {
			var body = ''
			res.on('data', chunk => body += chunk )
			res.on('end', () => console.log(body))
		}).on('error', err => console.error(err))
	}
)


