var input = require("fs").readFileSync("arquivoteste", "utf8");


let numerosInteiros = input.split(" ");

let a = parseInt(numerosInteiros.shift());

let b = parseInt(numerosInteiros.shift());

let c = parseInt(numerosInteiros.shift());

let d = parseInt(numerosInteiros.shift());


if(b > c && d > a && (c + d )> (a + b) && c > -1 && d > -1 && a % 2===0){
  return console.log('Valores aceitos')
}

 return console.log('Valores nao aceitos');