/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pegamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento: 
  1 - À vista Debito, recebe 10% de desconto;
  2 - À vista no dinheiro ou PIX, recebe 15% de desconto;
  3 - Em duas vezes, preço normal da etiqueta sem juros;
  4 - Acima de duas vezes, preço normal da etiqueta mais jutos de 10%;
*/

function aplicarDesconto(precoProduto, formaPagamento) {
    if (formaPagamento === 1) {
        return((precoProduto - (precoProduto * 0.10)).toFixed(2))
    } else if (formaPagamento === 2) {
        return((precoProduto - (precoProduto * 0.15)).toFixed(2))
    } else if (formaPagamento === 3) {
        return((precoProduto).toFixed(2));
    } else {
        return((precoProduto + (precoProduto * 0.1)).toFixed(2));
    }
}
aplicarDesconto(159.90, 4);