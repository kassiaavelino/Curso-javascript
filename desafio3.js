/*
Faça um algoritmo que dado as 3 notas tiradas dpor um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Media = (nota 1 + nota 2 + nota 3) /3;

Classificação :
 - Média menor que 5, reprovado;
 - Media entre 5 e 7, recuperação
 - Media acima de 7, passsou de semestre;
*/

const nota1 = 3;
const nota2 = 9;
const nota3 = 6;

const mediaSemestral = (nota1 + nota2 + nota3) / 3;
console.log(mediaSemestral)

if (mediaSemestral < 5) {
    console.log('Você foi reprovado');

} else if (mediaSemestral >=5 && mediaSemestral <=7){
    console.log('Você está de recupeação');

} else {
    console.log('Você está aprovado');

}
