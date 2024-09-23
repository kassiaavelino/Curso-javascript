/*
O IMC - Indice de Massa Corporea é um critério da Organização Mundial de Sause para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC
IMC = peso / (altura x altura)

Elabora um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com a tabela abaixo.

IMC em adultos, condição:
 - Abaixo 18.5 = abaixo do peso;
 - Entre 18.5 e 25 = peso normal;
 - Entre 25 e 30 = acima do peso;
 - Entre 30 e 40 = obeso;
 - Acima de 40 = obesidade grave
*/

const peso = 65;
const altura = 1.70;
const imc = peso / (altura * altura);
/*Math.pow(altura,2)*/

if (imc < 18.5) {
    console.log('Abaixo do peso')
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal')
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso')
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso')
} else {
    console.log('Obesidade grave')
}