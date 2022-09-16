// Produto -> id, nome, preco
// {id:1, nome:"Produto1", preco:10}

let listaProdutos = [
    {id:1, nome:"Produto 1", preco:10},
    {id:2, nome:"Produto 2", preco:20},
    {id:3, nome:"Produto 3", preco:30},
]
let idGerado = 3

function geradorId() {
    
    return ++idGerado
}

function inserir(produto) {
    produto.id = geradorId()
    listaProdutos.push(produto)
}

function listar(){
    return listaProdutos
}

function buscarPorId(id) {
    let err = "";
    if (typeof(id) != Number) {
        err += "ID deve ser number\n"
    }
    for(let produto of listaProdutos){
        if(produto.id == id) {
            return produto
        }
    }
    // console.log("Erro", "ID nao encontrado");
    err += "ID nao encontrado\n"

    if(err) throw err
}


//Main

let prod4 = {
    nome:"Produto 4", 
    preco:40
}

inserir(prod4)

let prod5 = {
    nome:"Produto 5", 
    preco:50
}

inserir(prod5)


console.log("Listar",listar())

try {
console.log("Buscar Por ID=2", buscarPorId(2))
console.log("Buscar Por ID=4", buscarPorId(4))
console.log("Buscar Por ID=6", buscarPorId("X"))
}
catch (err) {
    console.log("Erro", err)
}

/*

function atualizar(id, produto) {

}

function deletar(id) {

}*/