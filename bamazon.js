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
});

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

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
    userPrompt();

  });
}



function userPrompt() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is Item ID of the product you would like to order?",
      name: "itemID"
    },
    {
      type: "input",
      message: "How many would you like to order?",
      name: "itemQuantity"
    }
  ]).then(function (inquirerResponse) {
    var item = inquirerResponse.itemID;
    var quantity = inquirerResponse.itemQuantity;

    connection.query("SELECT * FROM products WHERE ?", { item_id: item },

      function (err, res) {

        if (err) throw err;

        if (res.length === 0) {
          console.log("==================================================");
          console.log("Please enter a valid Item ID.");
          console.log("==================================================");
          readProducts();
        } else {
          var data = res[0];
          if (quantity <= data.stock_quantity) {
            console.log("Item is in stock and your order will be processed!");
            connection.query('UPDATE products SET ? WHERE ?', [
              {
                stock_quantity: data.stock_quantity - quantity
              },
              {
                item_id: item
              }
            ],
              function (err, res) {
                console.log("Your total is $" + data.price * quantity);
                console.log("==================================================");
                connection.end();
              }
            );
          } else {
            console.log("Insufficient quantity, please adjust")
            readProducts();
          }
        }
      }
    );
  })
}



