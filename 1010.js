var input=require("fs").readFileSync("arquivoteste","utf8");
var lines = input.split('\n');

var produto1=lines.shift().split(" ");
var produto2=lines.shift().split(" ");

var valorAPagarProduto1 = produto1[1] * produto1[2];
var valorAPagarProduto2 = produto2[1] * produto2[2];
var valorTotalAPagar= (valorAPagarProduto1+valorAPagarProduto2).toFixed(2);     

console.log("VALOR A PAGAR: R$ " +valorTotalAPagar);