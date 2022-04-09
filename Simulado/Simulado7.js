//Considere o trecho de código e as proposições a seguir. 
//OBS: Suponha que um arquivo chamado arquivo.txt existe, pode ser acessado sem erros e seu conteúdo é 2. 

//I. O código faz uso de arrow functions e, portanto, não apresenta o conceito de "inferno de callbacks". 
//II. Exibe 2 2. 
//III. A função f1 é incondizente com o uso do pacote fs, já que a sua lista de parâmetros não admite o recebimento de um objeto que representa um erro. 

//É correto apenas o que se afirma em *

const fs = require('fs');
const f1 = (nome) => {
    const f2 = (erro, conteudo) => {
        if(!erro)
            console.log(conteudo.toString())
        const f3 = (erro, conteudo) => {
            if(!erro)
                console.log(conteudo.toString())
        }
        fs.readFile(nome, f3)
    }
    fs.readFile(nome, f2)
}

f1("arquivo.txt")

//Resultado da execução:
//2
//2

//Resposta:
//II. Exibe 2 2. 