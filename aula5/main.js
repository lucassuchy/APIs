//Main
let cadastroProdutos = require('./cadastro_produtos')


let prod4 = {
    nome:"Produto 4", 
    preco:40
}

console.log(cadastroProdutos.inserir(prod4))

// let prod5 = {
//     nome:"Produto 5", 
//     preco:50
// }

// cadastroProdutos.inserir(prod5)


console.log("Listar",cadastroProdutos.listar())
console.log(cadastroProdutos.buscarPorId(4))

// console.log("Buscar Por ID=2", cadastroProdutos.buscarPorId(2))
// console.log("Buscar Por ID=4", cadastroProdutos.buscarPorId(4))
// console.log("Buscar Por ID=6", cadastroProdutos.buscarPorId(6))

// cadastroProdutos.atualizar(1, { preco: 11 })

// cadastroProdutos.deletar(6)

// console.log("Listar",cadastroProdutos.listar())


