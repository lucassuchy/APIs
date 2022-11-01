const produtoPersistence = require('.././persistencia/produto_persistencia')

function validaCampos(produto) {
	if (typeof produto.nome === 'string'){
		if ( typeof produto.preco == 'number'){
			return produto
		}
		else{
			throw {id: 400, mensagem: 'Preço não é um numero'}
		}
		}
	else {
		throw {id: 400, mensagem: 'Nome não é uma string'}
	}
}

async function inserir(produto) {
	if (produto && produto.nome && produto.preco){
		await produtoPersistence.inserir(produto)
	}else{
		throw {id:400, mensagem: 'Erro'}
	}	
}

async function listar() {
	await produtoPersistence.listar()
}

module.exports = {inserir, listar}