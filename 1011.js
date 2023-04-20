var input=require("fs").readFileSync("arquivoteste","utf8");
var lines = input.split('\n');

var raio=parseFloat(lines.shift());
var pi=3.14159;
var volume = ((4/3)*pi*Math.pow(raio, 3)).toFixed(3);
console.log("VOLUME = " + volume);
