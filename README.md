# Tambaki B2B — Gerenciamento de Restaurantes

**Tambaki** é um sistema completo de gerenciamento de restaurantes, desenvolvido como Trabalho de Conclusão de Curso (TCC) para o curso Técnico em Desenvolvimento de Sistemas — Turma TDS03, formandos de 2026, do SENAI Mariano Ferraz.

---

## Funcionalidades

* Registro e gerenciamento de pedidos
* Análise de custos
* Gestão de estoque
* Abertura e fechamento de caixa
* Cadastro e autenticação de usuários

---

## Tecnologias Utilizadas

### Frontend

* React 19
* Vite
* Axios

### Backend

* Node.js
* Express
* CORS
* Dotenv
* Nodemon

### Banco de Dados

* PostgreSQL
* `pg` — cliente para conexão com PostgreSQL

---

## Estrutura do Projeto

```text
Tambaki---Gerenciamento-de-Restaurantes/
│
├── node-backend/                  # API REST em Node.js / Express
│   ├── src/
│   │   ├── config/                # Configuração da conexão com PostgreSQL
│   │   │   └── database.js
│   │   ├── controllers/           # Controladores e regras de negócio
│   │   ├── middlewares/           # Middlewares de autenticação e tratamento de erros
│   │   ├── models/                # Modelos de dados
│   │   ├── routes/                # Rotas modulares da API
│   │   └── server.js              # Ponto de entrada do servidor
│   │
│   ├── .env                       # Variáveis de ambiente locais
│   ├── .env.example               # Modelo de variáveis de ambiente
│   └── package.json
│
└── react-frontend/                # Aplicação web em React / Vite
    ├── src/
    │   ├── assets/                # Imagens, ícones e arquivos estáticos
    │   ├── components/            # Componentes React reutilizáveis
    │   ├── pages/                 # Páginas da aplicação
    │   ├── services/              # Serviços e comunicação com a API
    │   │   └── api.js
    │   ├── App.css                # Estilos do componente App
    │   ├── App.jsx                # Componente principal
    │   ├── index.css              # Estilos globais
    │   └── main.jsx               # Ponto de entrada do React
    │
    ├── .env                       # Variáveis de ambiente locais
    ├── .env.example               # Modelo de variáveis de ambiente
    └── package.json
```

---

## Como Executar o Projeto

### 1. Backend

Acesse a pasta do backend e instale as dependências:

```bash
cd node-backend
npm install
npx prisma migrate reset
prisma generate 
npx tsx .\prisma\seed.ts
```

Inicie o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O backend estará disponível em:

```text
http://localhost:3001
```

### 2. Frontend

Em outro terminal, acesse a pasta do frontend:

```bash
cd react-frontend
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

O frontend estará disponível em:

```text
http://localhost:5173
```

---

## Variáveis de Ambiente

Antes de executar o projeto, configure os arquivos `.env` de acordo com os modelos disponibilizados em:

```text
node-backend/.env.example
react-frontend/.env.example
```

> **Importante:** nunca compartilhe ou versione arquivos `.env` que contenham senhas, chaves ou outras informações sensíveis.

---

## Autores

* Laura S. Borges
* Júlia Resplandes
* Gabriele I. Sousa
* Rafael S. Pereira
* Giuliana K. Durães

---

## Projeto Acadêmico

Projeto desenvolvido como Trabalho de Conclusão de Curso (TCC) do curso **Técnico em Desenvolvimento de Sistemas — TDS03**, do **SENAI Mariano Ferraz**, com conclusão prevista para 2026.


