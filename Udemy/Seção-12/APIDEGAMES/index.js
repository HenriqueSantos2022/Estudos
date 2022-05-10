const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const res = require("express/lib/response");

app.use (bodyParser. urlencoded({extended:false}));
app.use (bodyParser. json());


var DB = { 
    
    games:[

{
id: 23,
title:"Call of Duty MW",
year: 2019,
price: 40 
},

{
id: 65,
title:"Sea of Thieves",
year: 2018,
price: 40 
},

{ 
id: 2,
title:"Minecraft",
year: 2012,
price: 22 
},

{ 
    id: 3,
    title:"Grand Theft Auto V",
    year: 2013,
    price: 25
    }

]
}

app.get("/games",(req,res)=>{
    res.statuscode = 200;
    res.json(DB.games);

});

app.get("/game/:id",(req,res)=>{

    if (isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
       
        var id = parseInt(req.params.id);
       
       var game = DB.games.find (g => g.id == id);
    
       if (game != undefined){
        res.statusCode = 200;
        res.json(game);

    }else{
    res.sendStatus(404);
    }
    }

});
    app.listen(7070,() =>{
    console.log("API RODANDO!");
    });
