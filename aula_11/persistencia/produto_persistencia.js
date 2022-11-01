const { Client } = require('pg')
const conexao = require('./conexao')

async function listar() {
	const client = new Client(conexao.conexao)
	await client.connect()
	const res = await client.query('SELECT * from produtos order by id asc')
	console.log(res.rows) // Hello world!
	await client.end()
}

async function inserir(produto) {
	const client = new Client(conexao.conexao)
	await client.connect()
    const res = await client.query('INSERT INTO produtos(nome,preco) VALUES ($1,$2);', 
        [produto.nome, produto.preco]);
	await client.end()
}

async function buscaId(produto) {
	const client = new Client(conexao.conexao)
	await client.connect()
		const res = await client.query('select id from produtos where nome like $1;', [produto.nome]);
	await client.end();
	return res.rows[0]['id'];
}


async function atualiza(id, produto) {
	const client = new Client(conexao.conexao);
	await client.connect()
	const atualiza = await client.query('UPDATE public.produtos SET nome=$2, preco=$3 WHERE id = $1;',[id, produto.nome, produto.preco]);
	await client.end()
}

async function deletar(id) {
	const client = new Client(conexao.conexao)
	await client.connect()
		const res = await client.query('DELETE FROM produtos WHERE id=$1;', [id]);
	await client.end();
}

module.exports = {listar, inserir, buscaId, atualiza, deletar} 