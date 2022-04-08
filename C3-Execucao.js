//Modelo Single Threaded: um único fluxo de execução, não há
//execução de código em paralelo.As instruções são executadas uma após 
//a outra, na ordem em que foram definidas. Não há a
//possibidade de uma instrução i executar antes de outra instrução j

console.log('Eu primeiro')
console.log("Agora eu")
console.log("Sempre vou ser a última...:(")

const a = 2 + 7
const b = 5
//só faz sentido se os valores a e b já estiverem disponíveis
console.log(a + b)


//Modelo de execução sincrono/bloqueante.

function demorada(){
    const atualMais2Segundos = new Date().getTime() + 2000
    //não esqueça do ;, única instrução no corpo do while
    while (new Date().getTime() <= atualMais2Segundos);
    const d = 8 + 4
    return d
}
const a1 = 2 + 3
const b1 = 5 + 9
const d = demorada()
/*
o valor de e não depende do valor devolvido
pela função demorada.
*/
const e = 2 + a1 + b1
console.log(e)
    