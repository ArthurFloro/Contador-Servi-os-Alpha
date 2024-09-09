const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const banco = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Flr280906@",
  database: "servicos",
});

app.use(cors());
app.use(express.json());

app.post("/secretaria", (req, res) => {
  const { balcao, telefone, whatsapp, matriculas } = req.body;

let salvando = "INSERT INTO secretaria (balcao, telefone, whatsapp, matriculas) VALUES (?, ?, ?, ?)";

  banco.query(salvando, [balcao, telefone, whatsapp, matriculas], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados:', err);
      return res.status(500).send('Erro ao inserir dados');
    }
    console.log('Dados inseridos com sucesso:', result);
    res.status(200).send('Dados inseridos com sucesso');
  });
});


//Criando rota biblioteca para os valores no banco 
app.post("/biblioteca", (req, res) => {
    const { alunosAtendidos, livrosEmprestados, livrosDevolvidos } = req.body;
  
  let salvandoBiblioteca = "INSERT INTO biblioteca (alunosAtendidos, livrosEmprestados, livrosDevolvidos) VALUES (?, ?, ?)";
  
    banco.query(salvandoBiblioteca, [alunosAtendidos, livrosEmprestados, livrosDevolvidos], (err, result) => {
      if (err) {
        console.error('Erro ao inserir dados:', err);
        return res.status(500).send('Erro ao inserir dados');
      }
      console.log('Dados inseridos com sucesso:', result);
      res.status(200).send('Dados inseridos com sucesso');
    });
  });



  app.post("/central", (req, res) => {
    const { matriculas, telefone, whatsapp, lista } = req.body;
  
  let salvandoCentral = "INSERT INTO cas (matriculasCas, telefoneCas, whatsappCas, lista) VALUES (?, ?, ?, ?)";
  
    banco.query(salvandoCentral, [matriculas, telefone, whatsapp, lista], (err, result) => {
      if (err) {
        console.error('Erro ao inserir dados:', err);
        return res.status(500).send('Erro ao inserir dados');
      }
      console.log('Dados inseridos com sucesso:', result);
      res.status(200).send('Dados inseridos com sucesso');
    });
  });



  app.post("/coordenacao", (req, res) => {
    const { alunosAtendidos, paisAtendidos, professoresAtendidos } = req.body;
  
  let salvandoCoor = "INSERT INTO coordenacao (atendimentoAlunos, atendimentoPais, atendimentoProf) VALUES (?, ?, ?)";
  
    banco.query(salvandoCoor, [alunosAtendidos, paisAtendidos, professoresAtendidos], (err, result) => {
      if (err) {
        console.error('Erro ao inserir dados:', err);
        return res.status(500).send('Erro ao inserir dados');
      }
      console.log('Dados inseridos com sucesso:', result);
      res.status(200).send('Dados inseridos com sucesso');
    });
  });


// Salvando dados no banco negociacoes
  app.post("/negociacoes", (req, res) => {
    const { negociacoes } = req.body;
  
  let salvandoNegocio = "INSERT INTO negociacoes (financeiro) VALUES (?)";
  
    banco.query(salvandoNegocio, [negociacoes], (err, result) => {
      if (err) {
        console.error('Erro ao inserir dados:', err);
        return res.status(500).send('Erro ao inserir dados');
      }
      console.log('Dados inseridos com sucesso:', result);
      res.status(200).send('Dados inseridos com sucesso');
    });
  });


//método get para retorno de dados
app.get("/retornoSecretaria", (req, res) =>{
  let consulta = "SELECT * FROM secretaria"

  banco.query(consulta, (err, result) =>{
    if(err){
      console.log("Erro na busca de dados")
      return res.status(500).send("Erro na busca de dados")
    }
    res.status(200).json(result)
  })
})

app.get("/retornoNegociacoes", (req, res) =>{
  let consultaNegoci = "SELECT * FROM negociacoes"

  banco.query(consultaNegoci, (err, result) =>{
    if(err){
      console.log("Erro na busca de dados")
      return res.status(500).send("Erro na busca de dados")
    }
    res.status(200).json(result)
  })
})

app.get("/retornoCoordenacao", (req, res) =>{
  let consultaCoor = "SELECT * FROM coordenacao"

  banco.query(consultaCoor, (err, result) =>{
    if(err){
      console.log("Erro na busca de dados")
      return res.status(500).send("Erro na busca de dados")
    }
    res.status(200).json(result)
  })
})

app.get("/retornoCentral", (req, res) =>{
  let consultaCentral = "SELECT * FROM cas"

  banco.query(consultaCentral, (err, result) =>{
    if(err){
      console.log("Erro na busca de dados")
      return res.status(500).send("Erro na busca de dados")
    }
    res.status(200).json(result)
  })
})

app.get("/retornoBiblioteca", (req, res) =>{
  let consultaBibli = "SELECT * FROM biblioteca"

  banco.query(consultaBibli, (err, result) =>{
    if(err){
      console.log("Erro na busca de dados")
      return res.status(500).send("Erro na busca de dados")
    }
    res.status(200).json(result)
  })
})

// Rodando na porta 3001, pois o react roda na porta 3000, evitando conflito na execução completa
app.listen(3001, () => {
  console.log("Rodando no servidor");
});
