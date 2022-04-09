/* É verdade que o uso de promises é vantajoso quando comparado ao uso de callbacks. Entretanto, o encadeamento de promises usando then
e catch é significaticamente mais complexo do que a execução sequencial bloqueante.

Existe um, recurso que permite a execução de funções assíncronas envolvendo promises sem ter de lidar diretamente com
as funções then e catch. Este recurso é caracterizado pelas palavras-chave async
e await. A palavra async pode preceder o nome de uma função, no momento em que ela é definida. Os efeitos são os seguintes.

A função executa de forma assíncrona. Caso em sua definição original ela devolva um valor qualquer, uma vez que tenha sido marcada com async, ela
passa a devolver uma promise que permite a obtenção daquele valor.

Uma chamada de função assíncrona feita por ela pode ser precedida pela
palavra await. Neste caso, a função chamada deixará de retornar uma promise imediatamente. Ela irá prosseguir com seu processamento e somente
devolver o resultado quando estiver pronto. Ela executa, portanto, como se fosse síncrona.

//Condição 1
O Bloco de Código 3.3.6 mostra um exemplo em que uma função que originalmente executa de maneira síncrona é marcada com a palavra async. Ela passa
a devolver uma promise que permite a obtenção do resultado. O código cliente pode, portanto, aplicar as funções then e catch. */

async function hello(nome) {
    return "Oi, " + nome;
}
const boasVindas = hello("João");
console.log(boasVindas);
boasVindas.then((res) => console.log(res));

//Resultado da execução:
//Promise { 'Oi, João' }
//Oi, João

/*
Para ilustrar o uso da palavra await, vamos utilizar uma função assíncrona
que calcula o fatorial de um número inteiro recebido como parâmetro. Ela toma o
cuidado de verificar se o valor passado é negativo. */

function fatorial(n) {
    if (n < 0) return Promise.reject("Valor não pode ser negativo");
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return Promise.resolve(res);
}

//Como vimos, ela pode ser chamada e ter seu resultado tratado com as funções then e catch.

function chamadaComThenCatch() {
    fatorial(5)
      .then((res) => console.log(res))
      .catch((res) => console.log(res));

    fatorial(-1)
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
}
chamadaComThenCatch();

//Resultado da execução:
//120
//Valor não pode ser negativo



//Usando a palavra await, podemos fazer chamadas mais simples, sem utilizar
//then e catch

//para usar await tem que ser async
async function chamadaComAwait() {
//note que não há paralelismo implícito
//somente haverá paralelismo se a função chamada utilizar explicitamente
    const f1 = await fatorial(5);
    console.log(f1);
    const f2 = await fatorial(-1);
    console.log(f2);
}


/*Assim, a palavra async pode ser usada para tornar uma função síncrona em uma função assíncrona. 
As palavras async e await podem ser utilizadas em conjunto para simplificar o uso de promises, descartando o uso de then e catch. */

//Resultado da execução:
//120
//Valor não pode ser negativo

