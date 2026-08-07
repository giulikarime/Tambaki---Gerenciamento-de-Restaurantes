const express = require('express');
const router = express.Router();
const db = require('../config/database');

/**
 * GET /api
 * Rota padrão de boas-vindas e teste de conexão do Backend + PostgreSQL.
 */
router.get('/', async (req, res) => {
    let dbConectado = false;

    try {
        await db.query('SELECT 1');
        dbConectado = true;
    } catch (err) {
        dbConectado = false;
    }

    const mensagem = dbConectado
        ? 'Backend e Banco de Dados (PostgreSQL) conectados com sucesso!'
        : 'Backend conectado com sucesso! (Banco de Dados PostgreSQL desconectado)';

    res.json({
        sucesso: true,
        mensagem,
        bancoDados: dbConectado ? 'conectado' : 'desconectado'
    });
});

/**
 * GET /api/health
 * Verificação detalhada de saúde da aplicação e conectividade.
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
