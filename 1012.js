var input = require("fs").readFileSync("arquivoteste", "utf8");

/*
var [A, B, C] = input.split(" ");
var PI = 3.14159;
var triangulo = (A * C) / 2;
var circulo = PI * Math.pow(C, 2);
var trapezio = ((parseFloat(A) + parseFloat(B)) * C) / 2.0;
var quadrado = B * B;
var retangulo = A * B;
console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO:  " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));
*/

/*
var [A, B, C] = input.split(" ");
var PI = 3.14159;
var triangulo = (A * C) / 2.0;
var circulo = PI * Math.pow(C, 2);
var trapezio = ((A*1 + B) * C) / 2.0;
var quadrado = B * B;
var retangulo = A * B;
console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));
*/




var [A, B, C] = input.split(" ").map(item => parseFloat(item));
var PI = 3.14159;
var triangulo = (A * C) / 2.0;
var circulo = PI * Math.pow(C, 2);
var trapezio = ((A + B) * C) / 2.0;
var quadrado = B * B;
var retangulo = A * B;
console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));