require('es6-promise')
'use-strict'

var promise = new Promise((fulfill, reject) => {
	setTimeout(() => {
		fulfill('FULFILLED!')
	},300)
})

promise.then( value => console.log(value) )
