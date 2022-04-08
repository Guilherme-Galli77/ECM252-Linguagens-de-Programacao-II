//funcões são cidadãs de primeiraclasse.Um cidadão de primeira classe é uma entidade que oferece suporte a operações como as seguintes.
//Ser passada como argumento para uma função.
//Ser devolvida por uma função.
//Ser atribuída a uma variável.

//Uma função de alta ordem é aquela que recebe pelo menos uma função como parâmetro e/ou devolve uma função quando seu processamento termina.

/*uma função pode ser atribuída
a uma variável*/
let umaFuncao = function () {
    console.log ("Fui armazenada em uma variável");
}
//e pode ser chamada assim
umaFuncao()

/*f recebe uma função como parâmetro e, por isso
é uma função de alta ordem.
Por devolver uma função, g também é de alta ordem.
*/
function f (funcao) {
//chamando a função
//note como a tipagem dinâmica tem seu preço
    funcao()
}
function g () {
    function outraFuncao(){
        console.log("Fui criada por g");
    }
    return outraFuncao;
}
//f pode ser chamada assim
f (function (){
    console.log ('Estou sendo passada para f')
})
//e g pode ser chamada assim
const gResult = g()
gResult()
//e assim também
g()()
//outros testes
/* f chama g, que somente devolve uma função.
Nada é exibido.*/
f(g)
/*f chama a função devolvida por g.
"Fui criada por g" é exibido.*/
f(g())
/*f tenta chamar o que a função criada por g
devolve. Ela não devolve coisa alguma. Por isso,
um erro - somente em tempo de execução - acontece. */
f(g()())
//O que acontece?
f(1)
/*    funcao()
^

TypeError: funcao is not a function
    at f (e:\GitHub\ECM252-Linguagens-de-Programacao-II\Closures.js:23:5)
    at Object.<anonymous> (e:\GitHub\ECM252-Linguagens-de-Programacao-II\Closures.js:52:1)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
    */
   