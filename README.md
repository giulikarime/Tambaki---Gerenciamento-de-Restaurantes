\# TAMBAKI B2B - Gerenciamento de Restaurantes



\*\*Tambaki\*\* é um sistema completo de gerenciamento de restaurantes desenvolvido como TCC para o curso Técnico em Desenvolvimento de Sistemas (Turma TDS03 - Formandos de 2026 - SENAI Mariano Ferraz).



\---



\## 📌 Funcionalidades



\* Registro de Pedidos

\* Análise de custos

\* Gestão de estoque

\* Abertura e Fechamento de Caixa

\* Registro e acesso com autenticação



\---



\## 🛠️ Tecnologias Utilizadas



\* \*\*Frontend\*\*: React 19, Vite, Axios.

\* \*\*Backend\*\*: Node.js, Express, Cors, Dotenv, Nodemon.

\* \*\*Banco de Dados\*\*: PostgreSQL (`pg` pool cliente).



\---



\## 📂 Estrutura do Projeto



```text

Tambaki---Gerenciamento-de-Restaurantes/

├── node-backend/           # API REST em Node.js / Express

│   ├── src/

│   │   ├── config/         # Conexão PostgreSQL (database.js)

│   │   ├── controllers/    # Controladores de regra de negócio

│   │   ├── middlewares/    # Middlewares (Erros, Autenticação)

│   │   ├── models/         # Modelos de Dados

│   │   ├── routes/         # Rotas modulares da API

│   │   └── server.js       # Ponto de entrada do servidor

│   ├── .env                # Variáveis de ambiente locais

│   ├── .env.example        # Modelo de variáveis de ambiente

│   └── package.json

│

└── react-frontend/          # Aplicação Web em React / Vite

&#x20;   ├── src/

&#x20;   │   ├── assets/         # Imagens, ícones e arquivos estáticos

&#x20;   │   ├── components/     # Componentes React reutilizáveis

&#x20;   │   ├── pages/          # Páginas da aplicação (Login, Pedidos, etc.)

&#x20;   │   ├── services/       # Cliente API Axios (api.js)

&#x20;   │   ├── App.css         # Estilos específicos do componente App

&#x20;   │   ├── App.jsx         # Componente principal

&#x20;   │   ├── index.css       # Estilos globais

&#x20;   │   └── main.jsx        # Ponto de entrada do React

&#x20;   ├── .env                # Variáveis de ambiente locais

&#x20;   ├── .env.example        # Modelo de variáveis de ambiente

&#x20;   └── package.json

```



\---



\## ⚙️ Como Executar o Projeto



\### 1. Backend (`node-backend`)



```bash

cd node-backend

npm install

npm run dev

```

O servidor estará rodando em `http://localhost:3001`.



\### 2. Frontend (`react-frontend`)



```bash

cd react-frontend

npm install

npm run dev

```

O frontend estará acessível em `http://localhost:5173`.



\---



\## 👥 Autores



\* Laura S. Borges

\* Júlia Resplandes

\* Gabriele I. Souza

\* Rafael S. Pereira

\* Giuliana K. Durães



