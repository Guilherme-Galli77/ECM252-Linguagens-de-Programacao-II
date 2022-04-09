//Trata-se de um mecanismo próprio para a manipulação de código assíncrono
//que visa simplificar as características inerentes ao uso de callbacks.

//O uso de promises não implica na execução de código em paralelo.
//A ideia é simplificar a manipulação de código cuja execução se dá de maneira assíncrona.

//Uma Promise é um objeto por meio do qual uma função pode propagar um resultado ou um erro em algum momento no futuro

/*
Seu significado e transição são os seguintes:

-Quando uma promise é produzida e o processamento associado a ela ainda
não está concluído, ela está no estado Pending.

-Quando o processamento associado a uma promise termina com sucesso, ela
passa para o estado Fullfilled.

-Quando o processamento associado a uma promise termina com erro, ela passa
para o estado Rejected.

Os estados Fullfilled e Rejected são estados finais. Uma vez que uma
promise se encontre em um desses estados, ela nunca transita para outro
estado.

Uma promise pode ser criada em qualquer um dos três estados.
Uma das vantagens obtidas pelo uso de promises é a simplificação da passagem
de parâmetros entre funções assíncronas. 

O encadeamento, neste caso, é feito por meio da função then.
Ao longo de um encadeamento, as funções then e catch podem ser mescladas.


O uso das funções then e catch resolve um dos problemas inerentes ao uso de
callbacks: não é necessário verificar a documentação de cada biblioteca utilizada
para descobrir qual dos dois é entregue como primeiro argumento. O tratamento
de resultados sempre se dá na função then e o tratamento de erros sempre se dá
na função catch. 



//Construindo promises
Uma função cuja execução tem potencial para demorar, idealmente executa de maneira assíncrona. 
Ela constrói um objeto do tipo Promise e o devolve imediatamente, no estado Pending. 
A seguir, prossegue com a sua computação. Ela pode terminar com sucesso ou com erro. 
Caso termine com sucesso, a função especificada pelo cliente no bloco then entra em execução.
Caso contrário, aquela especificada no bloco catch executa.


*/

function calculoDemorado(numero) {
    return new Promise(function (resolve, reject) {
        let res = 0;
        for (let i = 1; i <= numero; i++) {
            res += i;
        }
        resolve(res);
    });
}
calculoDemorado(10).then( (resultado) => {
    console.log(resultado)
})
    
//Printa 55



    





