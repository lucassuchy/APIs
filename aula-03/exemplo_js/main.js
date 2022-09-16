// Comentario
// Variavel sempre usar o let 

// Criei a lista
const lista = []

// Retorna o tamanho
//console.log(lista.length);

// Adiciona item no final
appendItem(['Item1','valor1'])
appendItem(['item2','valor2'])
appendItem(['item3','valor3'])
appendItem(['item4','valor4'])
appendItem(['item5','valor5'])


// Retorna o primeiro item, começa no zero
// console.log(lista[0])


//pop remove o ultimo elemento
//lista.pop()

// Remove o primeiro element
// lista.shift()

// Adiciona elemento no inicio
// lista.unshift(['item0', 'valor0'])

lista.unshift(['item10', 'valor10'])

//splice remove elemento por id, 
lista.splice(0,1)


function appendItem(item){
    lista.push(item)
}

lista.forEach(function (item, indice) {
    console.log(item, indice)
})


