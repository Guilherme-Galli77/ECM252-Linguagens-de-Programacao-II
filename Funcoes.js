function hello (){
    console.log ('Oi')
}
hello()
//cuidado, aqui redefinimos a função sem parâmetros
//Hello, undefined

function hello (nome){
    console.log ('Hello, ' + nome)
}
hello('Pedro')
//Hello, Pedro

function soma (a, b) {
    return a + b;
}
const res = soma (2, 3)
console.log (res)
//5


//Também é possível criar funções anônimas. Elas podem ser atribuídas a variáveis ou constantes
const dobro = function (n) {
    return n * 2;
};
const res2 = dobro(4);
console.log(res2);

//8

//valor padrão para o parâmetro
const triplo = function (n = 5) {
    return 3 * n;
};

console.log(triplo());
//15
console.log(triplo(10));
//30
