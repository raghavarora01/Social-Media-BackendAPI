// database.js
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
    host: process.env.MYSQL_ADDON_HOST,
    user: process.env.MYSQL_ADDON_USER,
    password: process.env.MYSQL_ADDON_PASSWORD,
    database: process.env.MYSQL_ADDON_DB, // Ensure this database exists
    port: process.env.MYSQL_ADDON_PORT,
    connectionLimit: 10
});

pool.query('SELECT * FROM userinfo', (err, results) => {
    if (err) {
        console.error('Error executing query:', err);
        return;
    }
    // console.log('Query results:', results);
});
export default pool;