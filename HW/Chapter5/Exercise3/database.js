const mysql = require('mysql2/promise');

//connection pool 이용
const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '0711',
    database: 'homework5'
});

const runQuery = async (pstmt, data) => {
    const conn = await pool.getConnection();
    try {
        const sql = conn.format(pstmt, data);
        const [result] = await conn.query(sql);
        return result;
    } finally {
        conn.release();
    }
};
    

module.exports = { runQuery };