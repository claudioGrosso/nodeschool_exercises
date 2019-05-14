var num = process.argv.length;
var i;
var tot = 0;
for( i = 2 ; i < num ; i++){
	tot += Number(process.argv[i]);
}
console.log(tot);
