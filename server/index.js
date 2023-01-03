const { default: userEvent } = require('@testing-library/user-event');
const express = require('express');
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { query } = require('express');
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "qwe123",
  database: "estacionamento"
});

app.use(cors());
app.use(express.json());

app.post("/status", (req, res) => {
  const bloco = req.body.bloco;
  const vaga = req.body.vaga;

  db.query("SELECT status FROM vaga_status WHERE bloco = ? AND codigo = ?", [bloco, vaga],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.lenght != 1) {
        res.send("Vaga Inexistente!");
      }
      if (result[0].status == 'D') {
        db.query("UPDATE vaga_status SET status = 'I' WHERE bloco = ? AND codigo = ? ", [bloco, vaga]);
        res.send("Vaga Alterada!");
      } else if (result[0].status == 'I') {
        db.query("UPDATE vaga_status SET status = 'D' WHERE bloco = ? AND codigo = ? ", [bloco, vaga]);
        res.send("Vaga Alterada!");
      } else {
        res.send("Vaga Ocupada!")
      }
    });
});

app.post("/vaga", (req, res) => {
  const bloco = req.body.bloco;
  const vaga = req.body.vaga;

  db.query("SELECT * FROM vaga_status WHERE bloco = ? AND codigo = ?", [bloco, vaga],
    (err, result) => {
      if (err) {
        res.send(err);
      } 
      if (result.length == 0) {
        db.query("INSERT INTO vaga_status (bloco, codigo, status) VALUES (?, ?, 'D')", [bloco, vaga]);
        res.send("Vaga Cadastrada!");
      } else {
        res.send("Vaga Já Existente!");
      }
    });
});

app.post("/excluivaga", (req, res) => {
  const bloco = req.body.bloco;
  const vaga = req.body.vaga;

  db.query("SELECT * FROM vaga_status WHERE bloco = ? AND codigo = ?", [bloco, vaga],
    (err, result) => {
      if (err) {
        res.send(err);
      } 
      if (result.length == 1) {
        db.query("DELETE FROM vaga_status WHERE bloco = ? AND codigo = ?", [bloco, vaga]);
        res.send("Vaga Excluída!");
      } else {
        res.send("Vaga Inexistente!");
      }
    });
});

app.get("/getCards", (req, res) => {
  let SQL = "SELECT status, codigo FROM vaga_status"

  db.query(SQL, (err, result) => {
    if(err) console.log(err);
    else res.send(result);
  })
})
/*
app.post("/mapa", (req, res) => {
  const stat = req.body.stat;

  db.query("SELECT status FROM vaga_status WHERE codigo IN ('61', '62', '63', '64', '65', '66')",
    (err, result) => {
      if (result) {
        res.send(result);
      }
    });
});
*/
app.post("/iniciaTempo", (req, res) => {
  const stat = req.body.stat;
  db.query("INSERT INTO vagas (bloco, codigo, data_chegada, hora_chegada) VALUES ('A', '66', TIME(current_date()), TIME(current_timestamp()))",
    (err, result) => {
      if (result) {
        res.send(result);
        db.query("UPDATE vaga_status SET status = 'O' WHERE bloco = 'A' AND codigo = '66' ");
      }
    });
});

app.post("/paraTempo", (req, res) => {
  const stat = req.body.stat;
  db.query("UPDATE vagas SET data_saida = TIME(current_date()), hora_saida = TIME(current_timestamp()) WHERE bloco = 'A' AND codigo = '66' AND id IN (SELECT id FROM (SELECT MAX(id) AS id FROM vagas) AS vag)",
    (err, result) => {
      if (result) {
        res.send(result);
        db.query("UPDATE vaga_status SET status = 'D' WHERE bloco = 'A' AND codigo = '66' ");
      }
    });
});

app.post("/calculaTempo", (req, res) => {
  const stat = req.body.stat;
  db.query("SELECT TIMEDIFF(hora_saida,hora_chegada) FROM vagas WHERE bloco = 'A' AND codigo = '66' AND id IN (SELECT id FROM (SELECT MAX(id) AS id FROM vagas) AS vag)",
    (err, result) => {
      if (result) {
        res.send(result);
      }
    });
});
/*
app.post("/ocupaVaga", (req, res) => {
  const stat = req.body.stat;
  db.query("UPDATE vaga_status SET status = 'O' WHERE bloco = 'A' AND codigo = '66' ",
    (err, result) => {
      if (result) {
        res.send(result);
      }
    });
});

app.post("/desocupaVaga", (req, res) => {
  const stat = req.body.stat;
  db.query("UPDATE vaga_status SET status = 'D' WHERE bloco = 'A' AND codigo = '66' ",
    (err, result) => {
      if (result) {
        res.send(result);
      }
    });
});
*/
app.post("/register", (req, res) => {
  const nome = req.body.nome;
  const senha = req.body.senha;

  db.query("SELECT * FROM usuario WHERE nome = ?", [nome],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length == 0) {
        bcrypt.hash(senha, saltRounds, (err, hash) => {
          db.query("INSERT INTO usuario (nome, senha) VALUES (?, ?)",
            [nome, hash],
            (err, result) => {
              if (err) {
                res.send(err);
              }
              res.send("Cadastrado com sucesso")
            });
        })
      } else {
        res.send("Usuário já existente")
      }
    })
});

app.post("/login", (req, res) => {
  const nome = req.body.nome;
  const senha = req.body.senha;

  db.query("SELECT * FROM usuario WHERE nome = ?", [nome], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      bcrypt.compare(senha, result[0].senha, (err, result) => {
        if (result) {
          res.send("Usuário Logado!");
        } else {
          res.send("Nome ou Senha Incorretos!");
        }
      });
    } else {
      res.send("Usuário não encontrado! Cadastre nos campos abaixo");
    }
  });
});

app.listen(3001, () => {
  console.log("TÁ RODANDO JÁ MISÉRA!!!");
});