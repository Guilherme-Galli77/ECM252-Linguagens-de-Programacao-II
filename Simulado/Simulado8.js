//Considere o trecho de código e as proposições a seguir. 
//I. A função sempre devolve uma promise no estado Fullfilled. 
//II. O código cliente - aquele que usa a função - pode obter o texto "Tudo OK!" usando a construção then. 
//III. A função const f = ( ) => Promise.resolve("Tudo OK!") é equivalente àquela exibida no trecho de código. 
//É correto apenas o que se afirma em :

function minhaPromise(){
    return Promise.resolve("Tudo OK! ")
}

//Resposta: Todos estão corretos