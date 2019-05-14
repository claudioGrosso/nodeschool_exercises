const http  = require('http')
const async = require('async')
var url = 'http://' + process.argv.slice(2).join(':')

var opts = {
	hostname: process.argv[2],
	port: process.argv[3],
	path: 'users/create',
	method: 'POST'
}

var postURL = (callback) => {
	async.times(5 ,(n , next) => {
		var req = http.request(opts, (res) =>{
			res.on('data', ()=>{})
			res.on('end', ()=> next(null))
		}).on('error', err => next(err))
		var body = JSON.stringify({'user_id':n})
		req.write(body)
		req.end
})

var getURL = (callback)=>{
	http.get(url, res => {
		url += '/users'
		var body = ''
		res.on('data', chunk => body += chunk)
		res.on('end', () => callback(body))
	}).on('error', err => console.error(err))
}


async.series({
	post: callback => postURL(callback)
	,get: callback => getURL(callback)
	}
	,(err,res)=>{
		if(err) return console.error('err')
		console.log(res.get)
	}
