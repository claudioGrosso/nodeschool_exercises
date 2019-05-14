var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]).toString();
var tot = buf.split(/\r\n|\r|\n/).length;
console.log(tot-1);
