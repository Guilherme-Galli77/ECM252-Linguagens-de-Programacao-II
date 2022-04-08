//Considere o trecho de código e as proposições a seguir. 
//I. A função reduce é uma função de alta ordem. 
//II. O resultado exibido é a soma de todos os elementos contidos na coleção valores. 
//III. O resultado exibido depende da paridade dos elementos contidos na coleção valores.
//É correto apenas o que se afirma em *

const valores = [1, 2, 3, 4, 5]

const res = valores.reduce((ac, v) => {
    return v % 2 == 1 ? ac + v : ac
})
console.log(res)

//Execução

//9


//Funções de alta ordem em JavaScript para arrays: 
//forEach, filter, map, reduce, some, every, find, findIndex.

//Respostas
//I e III

//I. A função reduce é uma função de alta ordem. 
//III. O resultado exibido depende da paridade dos elementos contidos na coleção valores.