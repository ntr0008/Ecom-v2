const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const port = 3002;

// Enable CORS middleware
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Ecom",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err.stack);
    return;
  }
  console.log("Connected to the database!");
});

// Define a route for retrieving product data
app.get("/products", (req, res) => {
  // Query the database to retrieve products
  const sql = "SELECT * FROM products";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error executing the query: " + err.stack);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    // Send the retrieved products as a response
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
