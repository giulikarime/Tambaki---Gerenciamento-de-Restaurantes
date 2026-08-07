const express = require('express');
const router = express.Router();
const db = require('../config/database');

/**
 * GET /api
 * Rota padrão de boas-vindas / teste básico de conexão.
 */
router.get('/', (req, res) => {
    res.json({
        sucesso: true,
        mensagem: 'Backend conectado com sucesso!'
    });
});

/**
 * GET /api/health
 * Verificação de saúde da aplicação e conectividade com o banco de dados.
 */
router.get('/health', async (req, res) => {
    let dbStatus = 'desconectado';
    let dbError = null;

    try {
        await db.query('SELECT 1');
        dbStatus = 'conectado';
    } catch (err) {
        dbError = err.message;
    }

    res.json({
        status: 'online',
        bancoDados: {
            status: dbStatus,
            erro: dbError
        },
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

module.exports = router;
