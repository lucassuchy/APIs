const { Client } = require('pg')
conexao = {
	host:'localhost',
	port:5432,
	database:'crud_produtos',
	user:'lucas',
	password:'lucas'	
}

async function listar() {
	const client = new Client(conexao)
	await client.connect()
	const res = await client.query('SELECT * from produtos')
	console.log(res.rows) // Hello world!
	await client.end()
}

async function inserir(produto) {
	const client = new Client(conexao)
	await client.connect()
    const res = await client.query('INSERT INTO produtos(nome,preco) VALUES ($1,$2);', 
        [produto.nome, produto.preco]);
	await client.end()
}

async function atualiza(id, produto) {
	const client = new Client(conexao);
	await client.connect()
	const atualiza = await client.query('UPDATE public.produtos SET nome=$2, preco=$3 WHERE id = $1;',[id, produto.nome, produto.preco]);
	await client.end()
}

async function buscaId(produto) {
	const client = new Client(conexao)
	await client.connect()
		const res = await client.query('select id from produtos where nome like $1;', [produto.nome]);
	await client.end();
	return res.rows[0]['id'];
}

async function deletar(id) {
	const client = new Client(conexao)
	await client.connect()
		const res = await client.query('DELETE FROM produtos WHERE id=$1;', [id]);
	await client.end();
}


// inserir({nome: 'Produto2', preco:'20'});
// 

async function main() {
	const retorno = await buscaId({nome:'ProdutoAtualizado', preco:'20'});
	console.log(retorno);
	await atualiza(1,{nome:'ProdutoAtualizado', preco:'200'})
	deletar(5)
	listar()
}

main()