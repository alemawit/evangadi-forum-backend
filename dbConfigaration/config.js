const mysql2 = require("mysql2");

// Define database connection configuration
const dbConnection = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  connectionLimit: 10,
});

// Test database connectivity
dbConnection.execute("select'test'", (err, result) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(result);
  }
});

 module.exports = dbConnection.promise();
