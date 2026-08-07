const express = require('express');
const cors = require('cors');
require('dotenv').config();

const apiRoutes = require('./routes/apiRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// Agregador de rotas da API (/api)
app.use('/api', apiRoutes);

// Rota para tratar endpoints não encontrados (404)
app.use((req, res) => {
    res.status(404).json({ sucesso: false, erro: 'Endpoint não encontrado.' });
});

// Middleware global de tratamento de erros
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`[TAMBAKI API] Servidor rodando na porta ${PORT}`);
});