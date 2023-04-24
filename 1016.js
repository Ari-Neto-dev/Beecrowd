/*o carro x percorre em uma hora 60km
o carro y percorre em uma hora 90km
quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.

60 mm esa para distancia de trinta km 
X esta para input

60----30
X-----input
resposta 60


var input=require("fs").readFileSync("arquivoteste","utf8");

let percorrido =parseInt(input.split('\n'));
let tempo =60;
let minutos=30;
let distancia =(tempo * percorrido)/minutos;

console.log(distancia + ' minutos');
*/

var input=require("fs").readFileSync("arquivoteste","utf8");

let numbers =parseInt(input.split());
let qtdMinutos = (60 * numbers)/30;

console.log(qtdMinutos+' minutos');