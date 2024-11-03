const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: '152365', // Replace with your MySQL password
  database: 'joiasAline',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

app.get('/usuarioscadastrados', (req, res) => {
  console.log('Request received for /usuarios'); // Log for debugging
  db.query("INSERT INTO usuariosCadastrados (nome, sobrenome, cpf, email, telefone, data_nascimento, chave_pix, login, senha) VALUES" +
        "('teste', 'teste', '123', 'teste', '11987654545', '1985-05-17', '1523', 'teste', 'teste')" , (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Error fetching data');
    }
    console.log('Data received:', results.length);
    results.forEach(result => console.log(result.id)); // Log to show the number of results
    res.set('Cache-Control', 'no-store'); // Prevent caching of the response
    res.json(results);
  });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
