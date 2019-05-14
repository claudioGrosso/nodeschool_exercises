var time = require('strftime')
var net = require('net')

var port = process.argv[2]

var server = net.createServer( socket => {
	socket.end(time('%F %R')+'\n')
})

server.listen(port)
