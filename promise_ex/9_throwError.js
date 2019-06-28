require('es6-promise')
'use-strict'

var fake_json = process.argv[2]

function parsePromised(){
	return new Promise((fullfil, reject)=>{
		try{ fullfil(JSON.parse(fake_json)) }
		catch(e){ reject(e) }
	})
}

parsePromised().then(null, (err) => console.log(err.message) )

