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


//Exemplo de callback hell
/*    })
          }.bind(this))
        }
      })
    })
  }
})

Definição de callback:

Trata-se de uma função que é executada quando algum evento acontece ou depois que algum código chega ao estado desejado. 
Também conhecido como função de retorno, o Callback cria regras dentro de outras funções para que sejam utilizadas no futuro.
Normalmente, ele age de forma assíncrona, ou seja, não é executado imediatamente. A aplicação continuará rodando enquanto espera o momento certo da sua execução.
A grande vantagem dessa função é que o computador pode realizar outros processos enquanto a resposta não chega, eliminando a necessidade de parar tudo enquanto aguarda a resposta.


Outra definição:

Em programação de computadores, um método de callback é uma rotina que é passada como parâmetro para outro método. 
É esperado então que o método execute o código do argumento em algum momento. 
A invocação do trecho pode ser imediata, como em um, ou em outro momento.

*/


