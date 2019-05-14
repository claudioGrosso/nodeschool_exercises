var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function show_stream(res){
	res.pipe(bl((err,data)=>{
		if(err) return console.error(err)
		results[count] = data.toString()
		count++
		if(count === 3) printResults()
	}))
}

function httpGet (index) {
  http.get(process.argv[2 + index], show_stream)
}

for (var i = 0; i < 3; i++) {
  httpGet(i)
}
