const Pool = require("pg").Pool;
require("dotenv").config();

//make a connection string
const con = `postgresql://${process.env.MDBUSERNAME}:${process.env.MDBPASSWORD}@${process.env.MDBHOST}:${process.env.MDBPORT}/${process.env.MDBNAME}`;
console.log(con);
const pool = new Pool({
    connectionString: con,
});
module.exports = pool;
