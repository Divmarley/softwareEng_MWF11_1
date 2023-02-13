/** @format */

// npm install mysql
// npm install express
// npm install cors

// or

// npm i mysql express cors

const mysql = require('mysql');
const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = 8080;
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  // port:'',
  database: 'noder',
});

// connection.connect((error)=>{
//     if (error) {
//         console.log(error);
//     }else{
//         console.log('connected !!!!!');
//     }
// })

// app.get('/createtable',(req,res)=>{
//   connection.query(`CREATE TABLE product(
//     id INT PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(255) NOT NULL,
//     price INT NOT NULL,
//     image VARCHAR(300) NULL,
//     category VARCHAR(200) NULL
//   )`, (err, result) => {
//     if (err) {
//       console.log(err.sqlMessage);
//     } else {
//       console.log('done!!!');
//     }
//   });
  
// })
app.get('/', (req, res) => {
  connection.query('SELECT * FROM product', (err, result) => {
    if (err) {
      console.log(err.sqlMessage);
    } else {
        res.send(result);
    }
  });
});

app.post('/create', (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const image = req.body.image;
  const category = req.body.category;
  connection.query(
    'INSERT INTO product(name,price,image,category) VALUES (?,?,?,?)',
    [name,price,image,category],
    (err, result) => {
      if (err) {
        console.log(err.sqlMessage);
      } else {
        console.log(result.message='sent');
      }
    }
  );
});

app.delete('/delete/:id', (req, res) => {
  console.log('loloollooloolo');
  const id = req.params.id;
  connection.query('DELETE FROM product WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.log(err.sqlMessage);
    } else {
    //   console.log(result);
    }
  });
});

 
app.put('/edit/:id', (req, res) => {
  const id = req.params.id;
  const name = req.bady.name;

  connection.query(
    `UPDATE product SET name=${name} WHERE id =?`,
    [id],
    (err, result) => {
      if (err) {
        console.log(err.sqlMessage);
      } else {
        console.log(result);
      }
    }
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));

// http
//   .createServer((req, res) => {
//     res.write('hello ghana');
//   })
//   .listen(8081);


// https://github.com/Divmarley/softwareEng_MWF11_1.git