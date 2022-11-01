const fs = require("fs");

fs.writeFile("teste.txt", "Hello World", (err) => {
    if(err) { 
        console.log(err); 
    }
    console.log("1: ", "Hello");
    fs.writeFile("teste1.txt", "Hello World", (err) => {
        if(err) { 
            console.log(err); 
        }
        console.log("2: ", "Hello");
    
    })
    
})
console.log("3: ", "Hello");
