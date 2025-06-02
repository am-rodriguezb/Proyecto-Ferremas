const mysql = require('mysql2/promise');
require('dotenv').config();

const dbConfig = {
    host: process.env.TIDB_HOST,
    port: process.env.TIDB_PORT,
    user: process.env.TIDB_USER,
    password: process.env.TIDB_PASSWORD,
    database: process.env.TIDB_DATABASE,
    ssl: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true
    },
    connectionLimit: 10,
    acquireTimeout: 60000,
    timeout: 60000
};

const pool = mysql.createPool(dbConfig);

// Test connection
const testConnection = async () => {
    try {
    const connection = await pool.getConnection();
    console.log('✅ Conexión exitosa a TiDB Cloud');
    connection.release();
    } catch (error) {
    console.error('❌ Error conectando a TiDB:', error.message);
    }
};

module.exports = { pool, testConnection };