const cadastro = require('./cadastro_produtos')

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
test("Valida Busca", function(){

    expect(cadastro.buscarPorId(1)).toStrictEqual({id:1, nome:"Produto 1", preco:10});

});

// Insucesso
test("Valida Busca", function(){

    expect(() => cadastro.buscarPorId("a")).toThrow();

});

// Sucesso
test("Valida Atualização", function(){
    const novo = {id:2, nome:"Produto 2 Novo", preco:25}
    cadastro.atualizar(2,  novo)
    expect(cadastro.buscarPorId(2)).toStrictEqual(novo);

});

// Insucesso
test("Valida Atualização", function(){
    const novo = {id:3, nome:"Produto 3 Novo", preco:35}
    const antigo = {id:3, nome:"Produto 3", preco:30}
    cadastro.atualizar(3,  novo)
    expect(cadastro.buscarPorId(3)).toStrictEqual(antigo);
});

test("Valida Atualização", function(){
    const novo = {id:3, nome:"Produto 3 Novo", preco:35}
    expect(() => cadastro.atualizar(9,  novo)).toThrow();
});