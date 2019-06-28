require('es6-promise')
'use-strict'

function alwaysThrows(){ throw new Error('OH NOES')}

function iterate(item){
	console.log(item)
	return item++
}

Promise.resolve(
