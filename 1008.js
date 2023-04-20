var input=require("fs").readFileSync("arquivoteste","utf8");
var lines = input.split('\n');

var number = parseInt(lines.shift());
var numeroHoras = parseInt(lines.shift());
var valorHora = parseFloat(lines.shift());
var salary= numeroHoras * valorHora

console.log("NUMBER = "+ number);
console.log("SALARY = U$ "+salary.toFixed(2));