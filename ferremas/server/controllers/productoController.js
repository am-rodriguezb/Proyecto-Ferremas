const db = require('../config/database');

exports.getProducts = async (req, res) => {
    try {
        const [rows] = await db.pool.execute('SELECT * FROM producto');
        res.json({
            success: true,
            data: rows,
            count: rows.length
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error obteniendo productos',
            error: error.message
        });
    }
}