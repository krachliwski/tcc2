const { default: userEvent } = require('@testing-library/user-event');
const express = require('express');
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { query } = require('express');
const { isEditableInput } = require('@testing-library/user-event/dist/utils');
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

  db.query("SELECT status FROM vaga_status WHERE bloco = ? AND codigo = ? ", [bloco, vaga],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result[0].status == 'D') {
        db.query("UPDATE vaga_status SET status = 'I' WHERE bloco = ? AND codigo = ? ", [bloco, vaga]);
        res.send("Vaga Alterada!");
      } else if (result[0].status == 'I') {
        db.query("UPDATE vaga_status SET status = 'D' WHERE bloco = ? AND codigo = ? ", [bloco, vaga]);
        res.send("Vaga Alterada!");
      } else if (result[0].status == '') {
        res.send("Vaga Inexistente!");
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
  let SQL = "SELECT status, codigo FROM vaga_status WHERE bloco = 'A'"

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  })
})

app.get("/getCardsB", (req, res) => {
  let SQL = "SELECT status, codigo FROM vaga_status WHERE bloco = 'B'"

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  })
})

app.get("/getCardsC", (req, res) => {
  let SQL = "SELECT status, codigo FROM vaga_status WHERE bloco = 'C'"

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  })
})

app.get("/getCardsD", (req, res) => {
  let SQL = "SELECT status, codigo FROM vaga_status WHERE bloco = 'D'"

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  })
})

app.get("/getCardsE", (req, res) => {
  let SQL = "SELECT status, codigo FROM vaga_status WHERE bloco = 'E'"

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  })
})

app.post("/dadosExtrato", (req, res) => {
  const stat = req.body.stat;
  db.query("SELECT bloco, codigo, DATE_FORMAT(data_chegada,'%d/%m/%Y') AS data_chegada, hora_chegada, DATE_FORMAT(data_chegada, '%d/%m/%Y') AS data_saida, hora_saida FROM vagas WHERE codigo = '01' ORDER BY id DESC LIMIT 1",
    (err, result) => {
      if (result) {
        res.send(result);
      }
    });
});

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
  db.query("INSERT INTO vagas (bloco, codigo, data_chegada, hora_chegada) VALUES ('A', '01', TIME(current_date()), TIME(current_timestamp()))",
    (err, result) => {
      if (result) {
        res.send(result);
        db.query("UPDATE vaga_status SET status = 'O' WHERE bloco = 'A' AND codigo = '01' ");
      }
    });
});

app.post("/paraTempo", (req, res) => {
  const stat = req.body.stat;
  db.query("UPDATE vagas SET data_saida = TIME(current_date()), hora_saida = TIME(current_timestamp()) WHERE bloco = 'A' AND codigo = '01' AND id IN (SELECT id FROM (SELECT MAX(id) AS id FROM vagas) AS vag)",
    (err, result) => {
      if (result) {
        res.send(result);
      }
    });
});

app.post("/liberaVaga", (req, res) => {
  db.query("UPDATE vaga_status SET status = 'D' WHERE bloco = 'A' AND codigo = '01' ",
    (err, result) => {
      if (result) {
        res.send(result);
      }
    });
});

app.post("/calculaTempo", (req, res) => {
  const stat = req.body.stat;
  db.query("SELECT CASE WHEN DIFF < '00:10:00' THEN '0' WHEN DIFF >= '00:10:00' AND DIFF < '00:30:00' THEN '1' WHEN DIFF >= '00:30:00' AND DIFF < '01:00:00' THEN '2' WHEN DIFF >= '01:00:00' AND DIFF < '03:00:00' THEN '3' ELSE '4' END AS TEMPO FROM (SELECT TIMEDIFF(hora_saida,hora_chegada) AS DIFF FROM vagas WHERE bloco = 'A' AND codigo = '01' AND id IN (SELECT id FROM (SELECT MAX(id) AS id FROM vagas) AS vag)) AS TESTE;",
    (err, result) => {
      if (result) {
        res.send(result);
      }
    });
});

app.post("/permanencia", (req, res) => {
  const stat = req.body.stat;
  db.query("SELECT TIMEDIFF(hora_saida,hora_chegada) AS permanencia FROM vagas WHERE bloco = 'A' AND codigo = '01' AND id IN (SELECT id FROM (SELECT MAX(id) AS id FROM vagas) AS vag);",
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
  const email = req.body.email;
  const telefone = req.body.telefone;
  const endereco = req.body.endereco;
  const cep = req.body.cep;
  const cpf = req.body.cpf;
  const senha = req.body.senha;

  db.query("SELECT * FROM usuario WHERE nome = ?", [nome],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length == 0) {
        bcrypt.hash(senha, saltRounds, (err, hash) => {
          db.query("INSERT INTO usuario (nome, email, telefone, endereco, cep, cpf, senha) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [nome, email, telefone, endereco, cep, cpf, hash],
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

/*
if (result[0].nome == 'Supervisor') {
      res.send("Logado como Supervisor!")
    }
*/

app.listen(3001, () => {
  console.log("TÁ RODANDO JÁ MISÉRA!!!");
});


app.post("/mandaEmail", (req, res) => {
  const nome = req.body.name;
  const email = req.body.email;

  db.query("SELECT * FROM usuario WHERE cpf = ? and email = ?", [nome, email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      res.send("Usuário Logado!");
    } else {
      res.send("CPF ou E-Mail inválidos");
    }
  });
});

/*
app.post("/testeUser", (req, res) => {

  db.query("SELECT nome, senaha FROM usuario WHERE nome = 'Mateus'", (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result) {
      bcrypt.compare(senha, result[0].senha, (err, result) => {
        if (result) {
          res.send(result);
        }
      });
    }
  });
});
*/

app.post("/update", (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const telefone = req.body.telefone;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  const cep = req.body.cep;

  db.query("UPDATE usuario SET nome = ?, email = ?, telefone = ?, endereco = ?, cep = ? WHERE cpf = ?",
    [nome, email, telefone, endereco, cep, cpf],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Alterado com sucesso!")
      }
    });
});

app.post("/loginSupervisor", (req, res) => {
  const nome = req.body.nome;
  const senha = req.body.senha;

  db.query("SELECT * FROM usuario WHERE nome = ?", [nome], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result[0].nome == 'Supervisor') {
      bcrypt.compare(senha, result[0].senha, (err, result) => {
        if (result) {
          res.send("Logado com Supervisor!");
        } else {
          res.send("Nome ou Senha Incorretos!");
        }
      });
    } else {
      res.send("Apenas usuário Supervisor autorizado!");
    }
  });
});

app.get("/getUsers", (req, res) => {
  let SQL = "SELECT * FROM usuario WHERE idusuario NOT IN ('83', '92')"

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  })
})

app.post("/excluiUser", (req, res) => {
  const cpf = req.body.cpf;

  db.query("SELECT * FROM usuario WHERE cpf = ?", [cpf],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length == 1) {
        db.query("DELETE FROM usuario WHERE cpf = ?", [cpf]);
        res.send("Usuário Excluído!");
      } else {
        res.send("Usuário Inexistente!");
      }
    });
});

app.post("/updateSenha", (req, res) => {
  const cpf = req.body.cpf;
  const senha = req.body.senha;

  bcrypt.hash(senha, saltRounds, (err, hash) => {
    db.query("UPDATE usuario SET senha = ? WHERE cpf = ?",
      [hash, cpf],
      (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Alterado com sucesso!")
        }
      });
  })
});

app.post("/criaEmpresa", (req, res) => {
  const cnpj = req.body.cnpj;
  const razao = req.body.razao;
  const nomeF = req.body.nomeF;
  const ie = req.body.ie;

  db.query("SELECT * FROM empresas WHERE cnpj = ?", [cnpj],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length == 0) {
        db.query("INSERT INTO empresas (cnpj, razaoSocial, nomeFantasia, inscricaoEstadual) VALUES (?, ?, ?, ?)",
          [cnpj, razao, nomeF, ie],
          (err, result) => {
            if (err) {
              res.send(err);
            }
            res.send("Cadastrado com sucesso")
          });
      } else {
        res.send("Empresa já existente")
      }
    })
});

app.post("/alteraEmpresa", (req, res) => {
  const cnpj = req.body.cnpj;
  const razao = req.body.razao;
  const nomeF = req.body.nomeF;
  const ie = req.body.ie;

  db.query("UPDATE empresas SET razaoSocial = ?, nomeFantasia = ?, inscricaoEstadual = ? WHERE cnpj = ?",
    [razao, nomeF, ie, cnpj],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Alterado com sucesso!")
      }
    });
});

app.get("/getEmp", (req, res) => {
  let SQL = "SELECT * FROM empresas"

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  })
})

app.post("/excluiEmp", (req, res) => {
  const cnpj = req.body.cnpj;

  db.query("SELECT * FROM empresas WHERE cnpj = ?", [cnpj],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length == 1) {
        db.query("DELETE FROM empresas WHERE cnpj = ?", [cnpj]);
        res.send("Empresa Excluída!");
      } else {
        res.send("Empresa Inexistente!");
      }
    });
});
