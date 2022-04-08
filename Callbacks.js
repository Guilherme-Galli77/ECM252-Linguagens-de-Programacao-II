/*  O inferno de callbacks As funções que entregamos como argumento para
a função setTimeout e a função exibirConteudo usada no Bloco de Código 3.1.7
são exemplos de funções callback. */

//callback hell ou inferno de callbacks que consiste no aninhamento de funções callback.

const fs = require("fs");
const abrirArquivo = function (nomeArquivo) {
    const exibirConteudo = function (erro, conteudo) {
        if (erro) {
            console.log(`Deu erro: ${erro}`);
        } else {
            console.log(conteudo.toString());
            const dobro = +conteudo.toString() * 2;
            const finalizar = function (erro){
                if(erro){
                    console.log('Deu erro tentando salvar o dobro')
                }
                else{
                    console.log("Salvou o dobro com sucesso");
                }
            }
            fs.writeFile('dobro.txt', dobro.toString(), finalizar);
        }
    };
    fs.readFile(nomeArquivo, exibirConteudo);
};
abrirArquivo("arquivo.txt");

//O aninhamento de funções callback compromete a legibilidade do código. Daí o
//singelo nome inferno de callbacks
//A ordem dos parâmetros de uma função callback varia.
