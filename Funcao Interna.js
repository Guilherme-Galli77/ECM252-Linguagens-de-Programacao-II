//Uma função, quando definida por outra, é chamada função interna e tem dois escopos: 
//o escopo interno e o escopo externo. 
//Seu escopo interno é delimitado pelas chaves que definem seu corpo. Seu escopo externo é delimitado pelas chaves que definem o corpo da função que a define. 

function f () {
    let nome = 'João';
    function g () {
        console.log (nome);
    }
    g()
}
f()

//Exibe Joao

function ola(){
    let nome = 'João';
    return function (){
        console.log ('Olá, João');
    }
}

let olaResult = ola();

/*perceba que aqui a função ola já terminou.
É de se esperar que a variável nome já não
possa ser acessada.*/

olaResult();

//Exibe Olá, João



//também vale com parâmetros
function saudacoesFactory(saudacao, nome){
    return function (){
        console.log (saudacao + ', ' + nome);
    }
}
let olaJoao = saudacoesFactory ('Olá', 'João');
let tchauJoao = saudacoesFactory('Tchau', 'João');
olaJoao();
tchauJoao()

//Olá, João
//Tchau, João

//Uma função interna em conjunto com as variáveis de seu escopo externo é o que chamamos de closure

//*****VER TAMBEM O Bloco de Código 1.7.4 no pdf*****//

