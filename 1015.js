var input=require("fs").readFileSync("arquivoteste","utf8");


let valores = input.split("\n");
let [x1, y1] = valores[0].split(" ");
let [x2, y2] = valores[1].split(" ");

let distancia = (Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))).toFixed(4);


console.log(distancia);