var input = require("fs").readFileSync("arquivoteste", "utf8");


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