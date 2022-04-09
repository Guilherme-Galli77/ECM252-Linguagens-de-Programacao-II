//Analise o trecho de código e marque as duas opções corretas

//Erro apenas na linha 1.
//Há quatro variáveis chamadas res. Elas possuem o mesmo nome e escopos distintos.
//Erro apenas nas linhas 5, 6, 7 e 8.
//Exibe undefined.
//Exibe true.

const f = async () => {
    return 1
}
f()
.then (res => res)
.then (res => res + 2)
.then (res => res % 2 == 1)
.then (res => console.log(res))

//Erro apenas na linha 1.
//Há quatro variáveis chamadas res. Elas possuem o mesmo nome e escopos distintos.
//Erro apenas nas linhas 5, 6, 7 e 8.
//Exibe undefined.
//Exibe true.

//Execução: true

//Respostas:
//Exibe true.
//Há quatro variáveis chamadas res. Elas possuem o mesmo nome e escopos distintos.
