//declarando constantes
const nome = "Jose";
const idade = 27;
// aspas simples e duplas têm o mesmo efeito
const sexo = "M";
const endereco = 'Rua K, 12'
//declarando variáveis
//let: variável local com escopo de bloco
let a = 2;
let b = "abc";
//var: seu escopo é a função em que foi declarada ou global
var c = 2 + 3;
var d = "abcd";

//const -> é uma constante você não pode alterar se não dá erro
//let -> restrito ao bloco, exemplo vc faz um let dentro do if ele não existe fora dele
//var -> escopo global, criou dentro do if ele existe em todo o programa (não é muito comum de se usar)

var linguagem = "Javascript";
console.log("Aprendendo " + linguagem);
//nome pode ser redeclarada
var linguagem = "Java";
console.log("Aprendendo, " + linguagem);

//escopo não restrito a bloco
var idade2 = 18;
//exibe undefined. Ou seja, a variável já existe aqui, só não teve valor atribuído.
//Ela é içada - do inglês hoist - para fora do bloco if
console.log(`Oi, ${nome2}`);
if (idade2 >= 18) {
    var nome2 = "João";
    console.log(`Parabéns, ${nome2}. Você pode dirigir`);
}
//ainda existe aqui
console.log(`Até mais, ${nome2}.`);