const { pool } = require('../config/database');

class FortuneController {
// Obtener todas las empresas
static async getAllCompanies(req, res) {
    try {
    const [rows] = await pool.execute('SELECT * FROM fortune500 LIMIT 50');
    res.json({
        success: true,
        data: rows,
        count: rows.length
    });
    } catch (error) {
    res.status(500).json({
        success: false,
        message: 'Error obteniendo datos',
        error: error.message
    });
    }
}

// Obtener empresa por ranking
static async getCompanyByRank(req, res) {
    try {
    const { rank } = req.params;
    const [rows] = await pool.execute(
        'SELECT * FROM fortune500 WHERE rank = ?',
        [rank]
    );
    
    if (rows.length === 0) {
        return res.status(404).json({
        success: false,
        message: 'Empresa no encontrada'
        });
    }

    res.json({
        success: true,
        data: rows[0]
    });
    } catch (error) {
    res.status(500).json({
        success: false,
        message: 'Error obteniendo empresa',
        error: error.message
    });
    }
}

// Buscar empresas por nombre
static async searchCompanies(req, res) {
    try {
    const { name } = req.query;
    const [rows] = await pool.execute(
        'SELECT * FROM fortune500 WHERE company_name LIKE ? LIMIT 20',
        [`%${name}%`]
    );

    res.json({
        success: true,
        data: rows,
        count: rows.length
    });
    } catch (error) {
    res.status(500).json({
        success: false,
        message: 'Error en búsqueda',
        error: error.message
    });
    }
}

// Obtener top empresas por ingresos
static async getTopByRevenue(req, res) {
    try {
    const { limit = 10 } = req.query;
    const [rows] = await pool.execute(
        'SELECT * FROM fortune500 ORDER BY revenue DESC LIMIT ?',
        [parseInt(limit)]
    );

    res.json({
        success: true,
        data: rows,
        count: rows.length
    });
    } catch (error) {
    res.status(500).json({
        success: false,
        message: 'Error obteniendo top empresas',
        error: error.message
    });
    }
}
}

module.exports = FortuneController;