const produtoNegocio = require('./negocio/produto_negocio')

async function main() {
	produto = {nome:'Teste Negocio',preco:100}
	produto_nome = {nome:100,preco:100}
	produto_preco = {nome:'Teste erro',preco:'199'}
	try {
		produtoNegocio.inserir(produto_nome)
	} catch (err) {
		console.log(err)
	};
	try {
		produtoNegocio.inserir(produto_preco)
	} catch (err) {
		console.log(err)
	}
	const teste = await produtoNegocio.listar();
	console.log(teste)
}

main()