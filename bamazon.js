var mysql = require('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: 'localhost',
  port: 8000,
  user: 'root',
  password: 'password',
  database: 'bamazon'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  readProducts();
  connection.end();
});

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    // Log all results of the SELECT statement
    var info = '';
    for (var i = 0; i < res.length; i++) {
      info = '';
      info += 'Item ID: ' + res[i].item_id + '  ';
      info += 'Product Name: ' + res[i].product_name + '  ';
      info += 'Department: ' + res[i].department_name + '  ';
      info += 'Price: $' + res[i].price + "  ";
      info += 'Quantity: ' + res[i].stock_quantity;

      console.log(info);
    }
  });
}