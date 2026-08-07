/**
 * Middleware centralizado de tratamento de erros no Express.
 */
function errorHandler(err, req, res, next) {
    console.error('[ERRO NO SERVIDOR]:', err.stack || err.message || err);

    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        sucesso: false,
        erro: err.message || 'Erro interno no servidor.',
        timestamp: new Date().toISOString()
    });
}

module.exports = errorHandler;
