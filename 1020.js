var input = require("fs").readFileSync("arquivoteste", "utf8");

let age = parseInt(input);
let ageInYears = parseInt(input / 365);
age = age % 365;

let ageInMonths = parseInt(age / 30);
age = age % 30;

let ageInDays = age;

console.log(ageInYears + " ano(s)");
console.log(ageInMonths + " mes(es)");
console.log(ageInDays + " dia(s)");
