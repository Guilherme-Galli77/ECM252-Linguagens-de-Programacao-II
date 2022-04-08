//Primitivos: boolean; null; number; string; undefined                 *Os valores primitivos são imutáveis
//Objetos: JSON; Array; Classes Wrapper (String, Number, Boolean); Date; Math; Funções   *Os objetos podem ser mutáveis ou imutáveis

//Coercao: Quando dois primitivos de tipos diferentes estão envolvidos em uma expressão, um deles pode ter seu tipo alterado

const n1 = 2;
const n2 = '3';

//coerção implícita de n1, concatenação acontece
const n3 = n1 + n2;
console.log(n3);

//Exibe 23



//coeração explícita, soma acontece
const n4 = n1 + Number (n2)
console.log(n4)

//Exibe 5