var input=require("fs").readFileSync("arquivoteste","utf8");
var lines = input.split('\n');

var nome= lines.shift();
var salarioFIxo=parseFloat(lines.shift());
var totalVendas=parseFloat(lines.shift());
var porcentagem=15;
var totalSalario=((totalVendas*(porcentagem/100))+salarioFIxo).toFixed(2);


console.log("TOTAL = R$ "+totalSalario);