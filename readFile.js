//a leitura do arquivo, realizada pela função readFile
//pode executar em uma thread separada.

const fs = require("fs");
const abrirArquivo = function (nomeArquivo) {
    const exibirConteudo = function (erro, conteudo) {
        if (erro) {
            console.log(`Deu erro: ${erro}`);
        } else {
            console.log(conteudo.toString());
        }
    };
    fs.readFile(nomeArquivo, exibirConteudo);
};
//crie um arquivo chamado arquivo.txt com o conteúdo ``2'' (sem as aspas)
//no mesmo diretório em que se encontra seu script
abrirArquivo("arquivo.txt");
