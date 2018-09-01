# node-and-mySQL

<<<<<<< HEAD
1. SQL GUI showing how the table was constructed in the products database and the some of the values that were inserted. This included the product name, department name, price and quantity. With an assigned item id which is also the primary key. 

![one](/images/one.png?raw=true "SQL GUI")

2. SQL GUI showing the actual table once the values were inserted. 

![two](/images/two.png?raw=true "SQL table")
=======
1. SQL GUI showing how the table was constructed and the some of the values that were inserted. This included the product name, department name, price and quantity. With an assigned item id which is also the primary key. 

![one](/images/one.png?raw=true "SQI GUI")

2. SQL GUI showing the actual table once the values were inserted. 

![two](/images/two.png?raw=true "SQL Table")

3. After initializing the npm using npm init -y, you install the mysql and inquirer dependencies using npm install mysql --save and npm install inquirer --save. 

4. Establish a connection between your js file and your sql database. 

![three](/images/three.png?raw=true "Connection Established")

5. After a connection has been established the readProducts function will be called. This function selects all the data from the database and displays it in the terminal. 

![four](/images/four.png?raw=true "Products Displayed")

6. Afterwards the user will be asked to enter in the item id of the product they would like to order and the quantity. 

![five](/images/five.png?raw=true "User Prompt Questions")

7. If the user enters in a valid ID and the quantity they would like to order is in stock, the order will be placed. The user will receive a message saying their order has been placed and will receive a total (price * quantity ordered). Afterwards the connection will end. 

![six](/images/six.png?raw=true "Order Processed!")

8. If the user selects an item id that does not exist and also enters in a quantity, the message "Please enter a valid item ID" will be displayed in the console. The readProducts function will also run again, showing the user all the product information. 

![eight](/images/eight.png?raw=true "Invalid Item ID")

9. If the user enters in a valid ID but a quanitity that exceeds how much is in stock then they will receive a message "Insufficient quantity, please adjust." and the readProducts function will run again showing all the product information. 

![nine](/images/nine.png?raw=true "Invalid Quantity")


>>>>>>> 09ce58226b1b618d757c44761d667386aa4bd7b6

