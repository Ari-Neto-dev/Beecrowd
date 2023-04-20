var input=require("fs").readFileSync("arquivoteste","utf8");


var [a, b, c] = input.split(" ");
console.log(c);