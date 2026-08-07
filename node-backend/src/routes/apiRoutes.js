const express = require('express');
const router = express.Router();
const healthRoutes = require('./healthRoutes');

// Rota de Saúde / Status
router.use('/', healthRoutes);

// Futuras rotas do sistema Tambaki:
// router.use('/auth', authRoutes);
// router.use('/pedidos', pedidosRoutes);
// router.use('/estoque', estoqueRoutes);
// router.use('/caixa', caixaRoutes);

module.exports = router;
