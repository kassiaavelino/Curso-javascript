/* 1 - Aula sobre variáveis e operadores.
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustivel.
2 - Gasto médio de combustível do carro por KM.
3 - Distância em KM da viagem.

Imprima no console o valor que será gasto para realizar essa viagem.
*/

const precoCombustivel = 5.79;
const kmLitros = 10;
const distanciaKM = 100;

const litrosGastos = distanciaKM / kmLitros;
const gastoTotal = litrosGastos * precoCombustivel;

console.log (gastoTotal.toFixed(2));