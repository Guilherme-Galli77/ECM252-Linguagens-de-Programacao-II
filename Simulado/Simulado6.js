//Analise o trecho de código e marque a opção correta. *

//Erro apenas na linha 15.
//Erro apenas na linha 16.
//Erro apenas nas linhas 15 e 16.
//Exibe f1 f2 f1 f3 f4.
//Exibe f2 f1 f1 f3 f4.

function f1 (){
    console.log('f1');
}
function f2 (f){
    console.log('f2');
    f();
}
function f3 (f){
    f()
    console.log('f3');
    return function (){
        console.log('f4');
    }
}
f2(f1)
f3(f1)()


//RESPOSTA
//Exibe f2 f1 f1 f3 f4.
