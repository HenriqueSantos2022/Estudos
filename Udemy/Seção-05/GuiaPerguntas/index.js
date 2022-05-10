const express = require("express");
const app = express();

//Estou dizendo para o Express usar o EJS View engine 
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    var nome = "Henrique";
    var lang = "javascript";
    
    var produtos = [
    { nome : "Doritos", preço: 3.1},
    { nome : "Coca-Cola", preço: 5},
    { nome :"Leite", preço: 1.45},
    { nome :"Carne", preço: 39.90},
    { nome :"Cão", preço: 2.69},
    { nome :"Nescau", preço: 4.45},

]
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do Programador",
        inscritos: 10000,
       produtos:produtos
    });

});

app.listen(7070, () => { console.log("App rodando!"); });
