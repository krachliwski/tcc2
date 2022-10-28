const { default: userEvent } = require('@testing-library/user-event');
const express = require('express');
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "qwe123",
    database: "estacionamento"
});

app.use(cors());
app.use(express.json());

app.post("/usuario", (req, res) => {
    const { nome } = req.body;
    const { senha } = req.body;

    let SQL = "INSERT INTO usuario (nome, senha) VALUES (?, ?)";

    db.query(SQL, [nome, senha], (err, result) => {
        console.log(err);
    })
});

app.listen(3000, () => {
    console.log('http://localhost:3000/usuario');
});