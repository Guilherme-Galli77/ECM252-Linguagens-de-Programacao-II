//JSON é um formato para representação de dados independente de tecnologia.
//A ideia é representar dados como coleções de pares chave/valor.

//Uma pessoa se chama João e tem 17 anos:
let pessoa = {
    nome: "João",
    idade: 17,
}
//o acesso a propriedades pode ser feito com ponto
console.log("Me chamo " + pessoa.nome); //Me chamo João

//e com [] também
console.log("Tenho " + pessoa["idade"] + " anos"); //Tenho 17 anos

//Uma pessoa se chama Maria, tem 21 anos e mora na rua B, número 121.

let pessoaComEndereco = {
    nome: "Maria",
    idade: 21,
    endereco: {
        logradouro: "Rua B",
        numero: 121,
    },
};
console.log(
    `Sou ${pessoaComEndereco.nome},tenho ${pessoaComEndereco.idade} anos e moro na rua ${pessoaComEndereco.endereco["logradouro"]} número ${pessoaComEndereco["endereco"]["numero"]}`
); //Sou Maria,tenho 21 anos e moro na rua Rua B número 121
    
    //VER OS OUTROS CODIGOS NO PDF