const util = require( 'util' );
const mysql = require( 'mysql' );

async function querySingleCol(value) {
    // Get database result
    conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "elbartone1",
        database: "test"
        })
    // database access
    const query = util.promisify(conn.query).bind(conn);
    async function getRows() {
    try {
        // const rows = await query(`select * from Runs WHERE Category = '${value}';`);
        const rows = await query(`select * from Runs2 WHERE Category = 'Full';`);
        return rows
    } finally {
        conn.end();
    }
    }
    return getRows()
}
module.exports = querySingleCol