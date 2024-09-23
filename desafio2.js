/* 2 -Aula sobre condicionais 

boolean = true(1)/false(0)
% resto da divisão
= atribuição
== igualdade (porém ignora o tipo da variável) 
=== igualdade
*/

/*const numero = 4;

const isnumeroPar = (numero % 2) === 0;

if (numero === 0 ) {
    console.log('O número é inválido')
} else if (numeroPar) {    
    console.log('Par');
} else {    
    console.log('Impar');
}
*/

/* Faca um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço da etanol;
2 - Preço da gasolina;
3 - Tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro po KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar essa viagem.
*/

const precoEtanol = 3.19;
const precoGasolina = 5.79;
const tipoCombustivel = 'Etanol';
const kmLitros = 10;
const distanciaKM = 100;
const litrosGastos = distanciaKM / kmLitros;

if (tipoCombustivel === 'Gasolina') {

    const gastoTotal = litrosGastos * precoGasolina;

    console.log('Gasto total com gasolina : ' + gastoTotal.toFixed(2));

} else {
    const gastoTotal = litrosGastos * precoEtanol;

    console.log('Gasto total com etanol :' + gastoTotal.toFixed(2));

}

