var input=require("fs").readFileSync("arquivoteste","utf8");

let segundos = parseInt(input);
let horas = parseInt(segundos/3600);
segundos = segundos % 3600;
let minutos =parseInt(segundos/60);
segundos = segundos % 60;


console.log(`${horas}:${minutos}:${segundos}`);