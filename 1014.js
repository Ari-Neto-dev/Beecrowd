var input=require("fs").readFileSync("arquivoteste","utf8");

let automovel = input.split("\n");
let distancia =parseInt(automovel.shift());
let combustivelGasto =parseFloat(automovel.shift());

let total = distancia / combustivelGasto;

console.log(total.toFixed(3) + " km/l");