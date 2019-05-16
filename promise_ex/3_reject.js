require('es6-promise')
'use-strict'

var promise = new Promise( (fulfill, reject) => {
	setTimeout( () => {
		reject(Error('REJECTED!'))
	},300)
})

function onRejected(err){
	console.log(err.message)
}

promise.then( null , onRejected )
