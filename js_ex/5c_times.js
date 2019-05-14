var http = require('http')
  , async = require('async')
  , hostname = process.argv[2]
  , port = process.argv[3]
  , url = 'http://' +  hostname + ':' + port

async.series({
  post:(done) => {
    async.times(
	5
	,(n, next)=>{ _addUser(++n, (err) => next(err))}
	,(err)=>{if (err) return done(err)
      		done(null, 'saved')}
	)
  },

  get:(done) => {
	http.get(url + '/users', (res)=>{
      		var body = "";
      		res.on('data', chunk => body += chunk.toString())
		res.on('end', () => done(null, body))
	}).on('error', done)}
}
 ,(err, result) => {
	if (err) return console.log(err)
  	console.log(result.get)
})


function _addUser(user_id, next){
  	var postdata = JSON.stringify({'user_id': user_id}),
  	opts = {
    		hostname: hostname,
    		port: port,
    		path: '/users/create',
    		method: 'POST',
    		headers: {'Content-Length': postdata.length}
		}

	var req = http.request(opts, (res) => {
    		res.on('data', (chunk)=>{})
		res.on('end', () => next())
  	})
	req.on('error', (err) => next(err))
	req.write(postdata);
  	req.end();
}
