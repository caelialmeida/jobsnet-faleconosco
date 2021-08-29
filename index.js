module.exports = (async function () {
  const express = require("express");

  const app = express();
  const port = 3333;

  app.use(express.json());
  app.engine('html', require("ejs").renderFile);
  var bancodedados = [];
  app.get("/", function (req, res) {
    res.render("./index.html");
  });
  app.post("/formulario", function (req, res) {
    let formulario = req.body;
    let hascpf=bancodedados.filter(function (item) {
      return item.cpf == formulario.cpf;
    }).length;
    if (hascpf>0){
      res.json ({
        mensagem: "CPF já cadastrado!"
      });
    }
    else {
      bancodedados.push(formulario);
      res.render ("./sucesso.html");
    }
  })
  app.listen(port, function () {
    console.log("Servidor está funcionando!");
  });
})();
//Primeiro passo feito: criação do servidor
//return item.cpf = verificação de PCF no banco de dados.