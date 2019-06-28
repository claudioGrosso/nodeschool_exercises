//require('es6-promise')
'use-strict'

function attachTitle(word){ return 'DR. ' + word }

Promise.resolve('MANHATTAN')
	.then( attachTitle )
	.then( console.log )
