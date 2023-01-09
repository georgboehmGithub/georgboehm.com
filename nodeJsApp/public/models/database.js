const util = require( 'util' );
const mysql = require( 'mysql' );
var path = require('path');
require("dotenv").config({
    path: path.resolve(__dirname, '../../confidential.env')
  });

async function querySingleCol(value) {
    // Get database result
	conn = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PW,
        database: process.env.DATABASE
        })
    // database access
    const query = util.promisify(conn.query).bind(conn);
    async function getRows() {
    try {
        const rows = await query(`select * from Runs WHERE Category = '${value}';`);
        // const rows = await query(`select * from Runs WHERE Category = 'Full';`);
        return rows
    } finally {
        conn.end();
    }
    }
    return getRows()
}
module.exports = querySingleCol
