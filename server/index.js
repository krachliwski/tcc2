const { default: userEvent } = require('@testing-library/user-event');
const express = require('express');
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
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
      if (result[0].status == 'D') {
        db.query("UPDATE vaga_status SET status = 'I' WHERE bloco = ? AND codigo = ? ", [bloco, vaga]);
        res.send("Vaga Alterada!");
      } else {
        db.query("UPDATE vaga_status SET status = 'D' WHERE bloco = ? AND codigo = ? ", [bloco, vaga]);
        res.send("Vaga Alterada!");
      }
    });
});

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
          res.send("Senha Incorreta!");
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