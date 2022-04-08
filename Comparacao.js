//Js possui 2 operadores de comparação
//== A comparação leva em conta somente os valores envolvidos. Caso eles sejam de tipos diferentes, ocorrerão coerções implícitas
//=== Este operador não realiza coerções. O resultado da comparação é true caso os valores e seus respectivos tipos forem iguais. Caso contrário, o resultado é false.

console.log(1 == 1)//true
console.log (1 == "1") //true
console.log (1 === 1) //true
console.log (1 === "1")//false
console.log (true == 1) //true
console.log (1 == [1])//true
console.log (null == null)//true
console.log (null == undefined)//true
console.log([] == false)//true
console.log ([] == [])//false
