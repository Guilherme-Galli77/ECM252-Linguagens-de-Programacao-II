//Questao 2

//Analise o trecho de código e marque as duas proposições verdadeiras. 

//Erro na linha 1.
//Erro na linha 7.
//Exibe undefined João é maior de idade João
//Caso a palavra var seja trocada por let, na linha 4, o programa passa a se comportar de maneira diferente.
//O escopo da variável nome é restrito ao bloco if.

console.log (nome)
const idade = 18
if (idade >= 18) {
    var nome = 'João'
    console.log (nome = ' é maior de idade')
}
console.log (nome)

//Execucao:

/* undefined
 é maior de idade
 é maior de idade
 */