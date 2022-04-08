//especificamos somente a sua lista de parâmetros e o seu corpo. 
//Há um símbolo => - daí o nome arrow - entre eles. Uma arrow function não tem nome e também pode ser armazenada em constantes ou variáveis.

//Quando a lista de parâmetros possui um único argumento, os parênteses podem ser omitidos

//Quando o corpo possui uma única instrução, as chaves podem ser omitidas.

//Quando o corpo possui uma única instrução que produz um valor a ser devolvido, a instrução return é opcional: Se usar as chaves, deve-se usar o
//return. Caso contrário, ele não pode ser usado.

const hello = () => console.log("Hello");
hello();
//Hello

const dobro = (valor) => valor * 2;
console.log(dobro(10));
//20

const triplo = (valor) => {
    return valor * 3;
};
console.log(triplo(10));
//30

//e agora?
const ehPar = (n) => {
    n % 2 === 0;
};
console.log(ehPar(10));
//undefined