/** @format */

// npm install mysql express

const mysql = require('mysql');
const express = require('express');
// const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database:"justusqqqq"
});

function chexckConnetion() {
  return connection.connect((error) => {
    if (error) throw error;
    console.log('connected to database');
  });
}
// chexckConnetion()
app.get('/listuser', (req, res) => {
 
  const sql= 'SELECT * FROM user';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.send((results));
  });
});

app.post('/create', (req, res) => {
    const username= req.body.username;
    const password= req.body.password;
  //   res.send('Got a POST request');
  const sql= 'INSERT INTO USER (username,password) VALUES (?,?)';
  connection.query(sql,[username,password], (error, results) => {
    if (error) throw error;
    console.log((results));
  });
});

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

app.delete('/user', (req, res) => {
    // DELETE FROM `user` WHERE 0
  res.send('Got a DELETE request at /user');
});

app.listen(port, () => {
  console.log(`Starting development server at http://localhost:3001/`);
});
