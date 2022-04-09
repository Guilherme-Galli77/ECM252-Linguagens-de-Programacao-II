/*
Um promise também pode ser devolvida já no estado Rejected. Para este
exemplo, pode ser interessante fazê-lo caso o valor entregue para a função assíncrona seja negativo, 
como no Bloco de Código 3.3.3. Note que o código cliente
pode especificar funções para ambas as possibilidades. Somente uma delas executará.
*/

function calculoRapidinho(numero) {
    return numero >= 0
      ? Promise.resolve((numero * (numero + 1)) / 2)
      : Promise.reject("Somente valores positivos, por favor");
}

calculoRapidinho(10)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((err) => {
        console.log(err);
    });
calculoRapidinho(-1)
    .then((resultado) => {
      console.log(resultado);
    })
    .catch((err) => {
        console.log(err);
    });
console.log("esperando...");


//Resultado da execução:
//esperando...
//55
//Somente valores positivos, por favor

