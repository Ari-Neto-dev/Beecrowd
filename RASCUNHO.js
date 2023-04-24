
var input=require("fs").readFileSync("arquivoteste","utf8");
/*
//1001
let numbers = input.split('\n');

let A = parseInt(numbers.shift());

let B = parseInt(numbers.shift());

let X = A + B;

console.log('X = '+ X);
*/


/*
//1002


let n =3.14159;
let raio = parseFloat(input);
let area = n*(raio*raio)
let A = area.toFixed(4)
console.log('A='+A);


//let circle = input;
//let n = 3.14159
//let raio = Math.pow(n, 2);
//let A = circle * raio .toFixed(4);
//console.log('A=' +A);

*/

/*
//1003

let numbers = input.split('\n');
let A = parseInt(numbers.shift());
let B = parseInt(numbers.shift());
let soma = A + B;


console.log('SOMA = '+ soma);

*/

/*
//1004

let numbers = input.split('\n');
let A = parseInt(numbers.shift());
let B = parseInt(numbers.shift());
let prod = A * B;

console.log('PROD = ' + prod);

*/
/*
//1005
let numbers = input.split('\n')
let A =parseFloat(numbers.shift());
let B =parseFloat(numbers.shift());
let peso1 = 3.5;
let peso2 = 7.5;

let media = (((A * peso1)+ (B * peso2))/(peso1 +peso2)).toFixed(5);

console.log('MEDIA = '+ media);
*/


/*
//1006
let numbers = input.split('\n');
let A = parseFloat(numbers.shift());
let B = parseFloat(numbers.shift());
let C = parseFloat(numbers.shift());
let peso1 = 2;
let peso2 = 3;
let peso3 = 5;
let media = (((A * peso1)+(B * peso2)+ (C * peso3))/ (peso1 + peso2 + peso3)).toFixed(1);
console.log('MEDIA = ' + media);
*/

/*
//1007
let numbers = input.split('\n');
let A = parseInt(numbers.shift());
let B = parseInt(numbers.shift());
let C = parseInt(numbers.shift());
let D = parseInt(numbers.shift());
let diferenca = (A * B)-(C * D);

console.log('DIFERENCA = ' + diferenca);

//console.log('DIFERENÇA = ' + diferenca);
*/


/*
 //1008

let numbers = input.split('\n');
let numerofuncionario = numbers.shift();
let numeroHorasTrabalhado = parseInt(numbers.shift());
let valorHoraTrabalhado = parseFloat(numbers.shift());
let salario= (numeroHorasTrabalhado * valorHoraTrabalhado).toFixed(2);

console.log('NUMBER = '+ numerofuncionario);
console.log('SALARY = U$ ' + salario);
*/


/*
//1009

let dadosDoVendedor = input.split('\n');
let nomeVendedor = dadosDoVendedor.shift();
let salarioFixo = parseFloat(dadosDoVendedor.shift());
let totalDasVendas = (parseFloat(dadosDoVendedor.shift())).toFixed(2);
let comissao = 15;

let salarioMaisComissoes = ((totalDasVendas * (comissao/100)) + salarioFixo).toFixed(2) ;



console.log('TOTAL = R$ ' + salarioMaisComissoes);

*/

/*
//1010

let valores = input.split('\n')

let produto1 = valores.shift().split(' ');
let produto2 = valores.shift().split(' ');

let valorProduto1 = produto1[1] * produto1[2];
let valorProduto2 = produto2[1] * produto2[2];
let total= (valorProduto1 + valorProduto2).toFixed(2);

console.log('VALOR A PAGAR: R$ ' + total);
*/

/*
//1011
let raio =parseFloat(input);
let R3 = Math.pow(raio, 3);
let pi = 3.14159
let volume =((4/3) * pi * R3).toFixed(3)


console.log('VOLUME = ' + volume);

*/

/*
//1012

let numbers = input.split(" ");
let A_base = (parseFloat(numbers.shift()));
let B_base = (parseFloat(numbers.shift()));
let C_altura = (parseFloat(numbers.shift()))
let pi= 3.14159;


let triangulo = (A_base * C_altura) / 2.0;
let circulo = pi * Math.pow(C_altura, 2.0);
let trapezio = ((parseFloat(A_base) +parseFloat(B_base)) * C_altura)/2.0;
let quadrado = Math.pow(B_base, 2.0);
let retangulo = A_base * B_base;


 console.log('TRIANGULO: '+triangulo.toFixed(3));
 console.log('CIRCULO: '+circulo.toFixed(3));
 console.log('TRAPEZIO: '+trapezio.toFixed(3));
 console.log('QUADRADO: '+quadrado.toFixed(3));
 console.log('RETANGULO: '+retangulo.toFixed(3));
*/


/*
let valores = input.split("\n");
let [x1, y1] = valores[0].split(" ");
let [x2, y2] = valores[1].split(" ");

let distancia = (Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2))).toFixed(4);


console.log(distancia);

*/

let valor = parseInt(input);

console.log(valor);

notas = parseInt(valor/100);
valor = valor % 100;
console.log(valor)


notas = parseInt(valor/50);
valor = valor % 50;
console.log(valor);





