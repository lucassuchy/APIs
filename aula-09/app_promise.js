const fs = require('fs').promises;

fs.writeFile('teste.txt', "Hello World")
    .then(()=> {
        console.log("1:", "Hello");
        fs.writeFile("teste1.txt", "Hello")
    })
    .then(()=> { 
        console.log("2:", "Hello");        
    })
    .catch((err) => console.log(err));
console.log("3: ", "Hello");