import { useEffect, useState } from 'react';
import api from './services/api.js';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/')
      .then((res) => {
        setMessage(res.data.mensagem);
      })
      .catch((err) => {
        console.error('Erro ao conectar com o servidor:', err);
        setMessage('Erro ao conectar com o servidor.');
      });
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Tambaki B2B</h1>
      <p>Resposta do servidor: {message}</p>
    </main>
  );
}

export default App;
