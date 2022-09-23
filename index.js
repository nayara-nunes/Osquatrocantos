const express = require("express");
const app = express();
const bodyParser = require("body-parser");


// View Engine
app.set('view engine', 'ejs');

//Static
app.use(express.static('public'));

//body parser
app.use(express.urlencoded({extended: false}));
app. use(express.json());


// Rotas
app.get("/", (req, res)=>{
  // res.send("Olá bem vindo ao meu site")
  res.render("index")
});
app.get("/home", (req, res)=>{
  res.render("home")
});
app.get("/admin", (req, res)=>{
  res.render("/Admin/")
});


//Servidor
app.listen(8080, ()=>{
  console.log("O servidor está no ar!")
})