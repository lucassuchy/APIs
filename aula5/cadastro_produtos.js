// Produto -> id, nome, preco
// {id:1, nome:"Produto1", preco:10}

const { type } = require("os")

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
    if ((typeof(produto.nome) == 'string') & (typeof(produto.preco) == 'number')){
        listaProdutos.push(produto)
    }
    throw new Error({"id":2,"message":"Tipo Invalido"});
}

function listar(){
    return listaProdutos
}

function buscarPorId(id) {
    for(let produto of listaProdutos){
        if(produto.id == id) {
            return produto
        }
    }
    throw new Error({"id":1,"message":"ID nao encontrado"});
}

function atualizar(id, produtoAlterado) {
    for(let produto of listaProdutos){
        if(produto.id == id) {
            if(produtoAlterado.nome) {
                produto.nome = produtoAlterado.nome
            }
            if(produtoAlterado.preco) {
                produto.preco = produtoAlterado.preco
            }
        }
    }
    throw new Error({"id":1,"message":"ID nao encontrado"});
}

function deletar(id) {
    for(let i in listaProdutos) {
        if(listaProdutos[i].id == id) {
            listaProdutos.splice(i, 1);
        }    throw new Error({"id":1,"message":"ID nao encontrado"});
    }    
}

module.exports = {
    inserir, listar, buscarPorId, atualizar, deletar
}