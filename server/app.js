const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");
const cors = require("cors");
const { log } = require("console");

const server = express()

let corsvaliation = {
  origin: ["http://localhost:3000/iphones"],
};

server.use(cors());

var mysqlConnection = mysql.createConnection({
  user: "myDBuser",
  password: "mydb",
  host: "127.0.0.1",
  database: "mydb",
});
server.listen(3000,() => {
    console.log("server listen at:http://localhost:3000");
    
})

server.get("/",(res,req) =>{
    req.end("server is running")
})
server.get("/iphones", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM products JOIN productdescription JOIN productprice ON products.product_id = Productdescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows, fields) => {
      let iphones = { product: [] };
      iphones.products = rows;
      var stringIphones = JSON.stringify(iphones);
      if (!err) res.end(stringIphones);
      else console.log(err);
    }
  );
});