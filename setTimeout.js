//Ela recebe dois parâmetros: uma função e um valor em
//milissegundos. A execução da função somente ocorre uma vez que pelo menos a
//quantidade de milissegundos especificada se esgote. Enquanto isso, as instruções
//que vem depois da chamada à função continuam executando normalmente, sem
//ficar esperando. Elas não ficam bloqueadas.

function demorada(){
    const atualMais2Segundos = new Date().getTime() + 2000
        //não esqueça do ;, única instrução no corpo do while
        while (new Date().getTime() <= atualMais2Segundos);
        const d = 8 + 4
        return d
}
const a = 2 + 3
const b = 5 + 9
//função será executada depois de, pelo menos, 500 milissegundos
setTimeout(function(){
    const d = demorada()
    console.log(d)
}, 500)

  
//enquanto isso, essas linhas prosseguem executando
//sem ficar esperando
const e = a + b
console.log(e)

//Resultado da execução
//19
//um tempo depois...
//12

// A função que foi entregue
//como parâmetro à função setTimeout foi, na verdade, enfileirada. Ela somente
//vai executar depois de o bloco principal ter sido completamente executado

setTimeout(function(){
console.log('dentro da timeout', 0)
})
const a2 = new Date().getTime() + 1000
//não esqueça do ;, única instrução no corpo do while
while (new Date().getTime() <= a2);
console.log('fora da timeout')
