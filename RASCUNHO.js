var input = require("fs").readFileSync("arquivoteste", "utf8");
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

/*
let valor = parseInt(input);

console.log(valor);

notas = parseInt(valor/100);
console.log(notas);
valor = valor % 100;
console.log(valor)


notas = parseInt(valor/50);
valor = valor % 50;
console.log(valor);

*/

/*
//1019
let segundos = parseInt(input);

let horas =parseInt(segundos/3600);
segundos = segundos % 3600;

let minutos = parseInt(segundos/60);
segundos = segundos % 60;

console.log(`${horas}:${minutos}:${segundos}`);

console.log(horas);
*/

/*
//1020

let idadeEmDias =parseInt(input);
let idadeEmAnos =parseInt(input/365);
idadeEmDias = idadeEmDias % 365;

idadeEmMeses = parseInt(idadeEmDias/30);
idadeEmDias = idadeEmDias % 30;

let idadeDias = idadeEmDias;

console.log(idadeEmAnos+ ' ano(s)');
console.log(idadeEmMeses+' mes(es)');
console.log(idadeDias+ ' dia(s)');

*/

// 1021

let coinsAndBills = parseFloat(input);
let oneHundred = parseInt(input / 100);
coinsAndBills = coinsAndBills % 100;

let fiftyDolars = parseInt(coinsAndBills / 50);
coinsAndBills = coinsAndBills % 50;

let twentyDolars = parseInt(coinsAndBills / 20);
coinsAndBills = coinsAndBills % 20;

let tenDolars = parseInt(coinsAndBills / 10);
coinsAndBills = coinsAndBills % 10;

let fiveDolars = parseInt(coinsAndBills / 5);
coinsAndBills = coinsAndBills % 5;

let twoDolars = parseInt(coinsAndBills / 2);
coinsAndBills = coinsAndBills % 2;

let oneDollar = parseInt(coinsAndBills / 1);
coinsAndBills = coinsAndBills % 1;

let fiftyCentsOfDollar = parseInt(coinsAndBills / 0.50);
coinsAndBills = coinsAndBills % 0.50;

let twentyFiveCents = parseInt(coinsAndBills / 0.25);
coinsAndBills = coinsAndBills % 0.25;

let tenCentsOfDollar = parseInt(coinsAndBills / 0.10);
coinsAndBills = coinsAndBills % 0.10;

let fiveCentsOfDollar = parseInt(coinsAndBills / 0.05);
coinsAndBills = coinsAndBills % 0.05;

let aDoallarCent = parseInt(coinsAndBills / 0.01);
coinsAndBills = coinsAndBills % 0.01;

console.log("NOTAS:");
console.log(oneHundred + " nota(s) de R$ 100.00");
console.log(fiftyDolars + " nota(s) de R$ 50.00");
console.log(twentyDolars + " nota(s) de R$ 20.00");
console.log(tenDolars + " nota(s) de R$ 10.00");
console.log(fiveDolars + " nota(s) de R$ 5.00");
console.log(twoDolars + " nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(oneDollar + " moeda(s) de R$ 1.00");
console.log(fiftyCentsOfDollar + " moeda(s) de R$ 0.50");
console.log(twentyFiveCents + " moeda(s) de R$ 0.25");
console.log(tenCentsOfDollar + " moeda(s) de R$ 0.10");
console.log(fiveCentsOfDollar + " moeda(s) de R$ 0.05");
console.log(aDoallarCent + " moeda(s) de R$ 0.01");
