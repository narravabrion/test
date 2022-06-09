const { Pool } = require('pg')

console.log(process.env.PASSWORD)
const pool = new Pool({
  host: "localhost",
  database: "test",
  user: "postgres",
  password: "#development.db",
  port: 5432,
  // host: process.env.HOST,
  // database: process.env.DATABASE,
  // user: process.env.USER,
  // password: toString(process.env.PASSWORD),
  // port: process.env.PORT,
})

pool.on('error', (error) => {
  console.error(`Error: ${error.message}`)
})

module.exports = pool