const cadastro = require('./cadastro_produtos')


beforeEach(() => {
    cadastro.init();
});

test("Valida Lista", function(){
    let listaProdutos_original = [
        {id:1, nome:"Produto 1", preco:10},
        {id:2, nome:"Produto 2", preco:20},
        {id:3, nome:"Produto 3", preco:30},
    ];
    expect(cadastro.listar()).toStrictEqual(listaProdutos_original);

});

test("Valida tipo de dado na inserção", function(){

    expect(() => cadastro.inserir({nome:"Produto 4", preco:40})).toThrow();

});

test("Valida Deletar", function(){
    // Vou validar pelo tamanho da listagem, vou partir de um valor x e terminar com -1
    cadastro.deletar(2);
    expect(cadastro.listar().length).toStrictEqual(2);
});

// cenario de insucesso
test("Busca Id", function(){

    expect(() => cadastro.buscarPorId(10)).toThrow();

});

// cenario de sucesso
test("Valida tipo de dado na inserção", function(){

    expect(() => cadastro.inserir({nome:"Produto 4", preco:40})).toThrow();

});

// cenario de sucesso
test("Valida tipo de dado na inserção nome", function(){

    expect(() => cadastro.inserir({nome:5, preco:50})).toThrow();

});

// cenario de sucesso
test("Valida tipo de dado na inserção Valor", function(){

    expect(() => cadastro.inserir({nome:"Produto 6", preco:"60"})).toThrow();

});

// cenario de sucesso
test("Valida tipo de dado na inserção ambos", function(){

    expect(() => cadastro.inserir({nome:7, preco:"60"})).toThrow();

});

// Sucesso
test("Valida Busca sucesso", function(){

    expect(cadastro.buscarPorId(1)).toStrictEqual({id:1, nome:"Produto 1", preco:10});

});

// Insucesso
test("Valida Busca insucesso", function(){

    expect(() => cadastro.buscarPorId("a")).toThrow();

});

// Sucesso
test("Valida Atualização sucesso", function(){
    const novo = {nome:"Produto 2 Novo", preco:25};
    const base = {id:2, nome:"Produto 2 Novo", preco:25};
    cadastro.atualizar(2,  novo);
    expect(cadastro.buscarPorId(2)).toStrictEqual(base);

});

// Insucesso
test("Valida Atualização insucesso", function(){
    const novo = '{id:3, nome:"Produto 3 Novo", preco:35}';
    const antigo = {id:3, nome:"Produto 3", preco:30};
    cadastro.atualizar(3,  novo);
    expect(cadastro.buscarPorId(3)).toStrictEqual(antigo);
});




