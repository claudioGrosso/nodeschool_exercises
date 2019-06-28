require('es6-promise')
'use-strict'

var one = first();

var due = one.then( val => second(val) )

due.then( console.log ) 

// first().then(second).then(console.log)
