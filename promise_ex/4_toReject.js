require('es6-promise')
'use-strict'

var promise = new Promise((fulfill, reject) => {
	fulfill('I FIRED')
	reject(Error('I DID NOT FIRE'))
})

function onRejected(err){ console.log(err.message)}

promise.then(console.log, onRejected)
