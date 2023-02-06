/** @format */

const mysql = require('mysql');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3002;
// create sql connection
const connection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'aroma',
});


app.use(cors());
app.use(express.json()); 

// connection.connect((error)=>{
//     if (error) {
//         console.log('please you have an error');
//     } else {
//         console.log('connected');
//     }
// })

// connection.query('CREATE DATABASE demo_play2', (err, results) => {
//   if (err) {
//     console.log(err.sqlMessage);
//   } else {
//     console.log((results.message = 'created '));
//   }
// });

app.get('/', (req, res) => {
  res.send('this is workin');
});

app.get('/products', (req, res) => {
  connection.query('SELECT * FROM product_table', (err, results) => {
    if (err) {
      console.log(err.sqlMessage);
    } else {
      res.send(results);
      
    }
  });
});

app.post('/product/create', (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const sql = 'INSERT INTO product(name,price) VALUES (?,?)';
  connection.query(sql, [name, price], (err, results) => {
    if (err) {
      console.log(err.sqlMessage);
    } else {
      res.send(results);
    }
  });
});

app.delete('/product/delete/:id', (req, resp) => {
  const id = req.params.id;
  connection.query('DELETE FROM product WHERE id = ?',id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      resp.json(result);
    }
  });
});


app.listen(port, () =>
  console.log(`server is working on port ${port} http://localhost:3002`)
);
