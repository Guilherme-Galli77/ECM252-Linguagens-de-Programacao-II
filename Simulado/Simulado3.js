//Considere o seguinte trecho de código e marque as duas proposições verdadeiras.

//Todas as atribuições são válidas.
//A linha 3 faz uso de coerção implícita.
//A linha 4 faz uso de coerção implícita.
//As linhas 3 e 4 realizam uma operação aritmética de soma.

const n1 = 5
let n2 = '10'
var n3 = n1 + n2 //coerção implícita de n1, concatenação acontece
var n4 = n1 + Number(n2) //coeração explícita, soma acontece
console.log(n1, n2, n3, n4)

//Execução
//5 10 510 15

//RESPOSTAS:
//Todas as atribuições são válidas.
//A linha 3 faz uso de coerção implícita.