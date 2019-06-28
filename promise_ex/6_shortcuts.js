require('es6-promise')
'use-strict'

var random = Math.floor(Math.random()*100)

if( random % 2 ) var true_promise = Promise.resolve('tutto bene')
else 		 var false_promise = Promise.reject('ops error')

false_promise.catch( err => console.error() )



