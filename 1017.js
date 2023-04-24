var input=require("fs").readFileSync("arquivoteste","utf8");

let gasoline =(input.split('\n'));

let tempoGastoHoras = parseInt(gasoline.shift());
let velocidadeMediaKmHora = parseInt(gasoline.shift());
let distanciaPercorrida = tempoGastoHoras * velocidadeMediaKmHora;
let consumoPorLitro = 12;
let totalDeCombustivelGasto = (distanciaPercorrida/consumoPorLitro).toFixed(3);

console.log(totalDeCombustivelGasto);