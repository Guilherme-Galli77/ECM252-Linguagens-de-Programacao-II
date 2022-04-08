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
    console.log (nome + ' é maior de idade')
}
console.log (nome)

//Execução com var nome

/*undefined
João é maior de idade
João */

//Execução com let nome

/*console.log (nome)
             ^

ReferenceError: nome is not defined
    at Object.<anonymous> (e:\GitHub\ECM252-Linguagens-de-Programacao-II\Simulado\Simulado2.js:11:14)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
*/

//var -> escopo global, criou dentro do if ele 
//existe em todo o programa (não é muito comum de se usar)

//let -> restrito ao bloco, exemplo 
//vc faz um let dentro do if ele não existe fora dele

//const -> é uma constante você não pode alterar se não dá erro

//RESPOSTAS:

//Exibe undefined João é maior de idade João
//Caso a palavra var seja trocada por let, na linha 4, o programa passa a se comportar de maneira diferente.