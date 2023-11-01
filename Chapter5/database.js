const mysql = require('mysql2/promise');

//connection pool 이용
const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'kwebuser',
    password: 'kwebpw',
    database: 'kwebdb1',
});

const runQuery1 = async sql => {
    const conn = await pool.getConnection();
    try {
        const [result] = await conn.query(sql);
        return result;  //row 들의 array 혹은 undefined 형태
    } finally {
        conn.release();
    }
};

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