var input=require("fs").readFileSync("arquivoteste","utf8");


//var [a, b, c] = input.split(" ");
//console.log(a);


let numbers = input.split(" ")
let elementoA = parseInt(numbers.shift());
let elementoB = parseInt(numbers.shift());
let elementoC = parseInt(numbers.shift());

let maiorAB=(elementoA + elementoB + Math.abs(elementoA - elementoB))/2;
let maiorXC=(elementoC + maiorAB + Math.abs(maiorAB - elementoC))/2;



console.log(maiorXC + ' eh o maior' );