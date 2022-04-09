//Uma função assíncrona pode também devolver uma promise cujo estado é Fullfilled. 
//Isso pode acontecer quando ela detectar que a resposta para o problema que pretende resolver é imediata. 

//Dado que o cálculo não precisa ser demorado, a função assíncrona pode devolver uma promise já no estado Fullfilled

function calculoRapidinho (numero){
    return Promise.resolve((numero * (numero + 1)) / 2);
}
calculoRapidinho (10).then(resultado =>{
    console.log (resultado)
})
//Executa primeiro, mesmo que a promise já esteja fullfilled
console.log('Esperando...')

//Resultado da execução:
//Esperando...
//55