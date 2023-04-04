const mysql = require('mysql')

const connection = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12611036",
  password: "arKqJVErRn",
  database: "sql12611036",
  multipleStatements: true,
  dateStrings: true,
})

connection.connect((err) => {
  if (!err) {
    console.log("Connected")
  } else {
    console.log("Connection failed")
  }
})

module.exports = connection