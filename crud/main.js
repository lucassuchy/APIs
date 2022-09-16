// Criar um objeto em json - feito
// Adicionar elementos - feito
// Editar elementos 
// Apagar um elemento especifico - feito
// Lista um elemento especifico - feito
// Lista todos os elementos - feito

// Criar a constante que vai receber os elementos do json
const lista = []

// Vou criar um json com 3 campos, um id um nome e um valor
function appendItem(nome,preco){
    var item = {
        id:lista.length
        ,nome:nome
        ,preco:preco
    }
    lista.push(item)
}

//Remove elemento pelo id
function removeItem(id){
        delete lista[id]
}

function retornaElemento(id) {
    console.log("Produto: "+lista[id].nome+" Preço: "+lista[id].preco)
    
}

function retornaLista(){
    lista.forEach(element => {
        console.log("Produto: "+element.nome+" Preço: "+element.preco)
    });
}

appendItem('banana',10)
appendItem('maça',2)
appendItem('Pera',3)
appendItem('Uva',4)
appendItem('Mamão',5)
appendItem('laranja',6)
appendItem('abacaxi',7)
removeItem(5)
appendItem('Mamão2',5.1)
retornaElemento(1)

retornaLista();
