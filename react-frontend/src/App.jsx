import './App.css'
import api from './services/api.js';
import {useEffect, useState} from "react";

function App() {

  const [message,setMessage] = useState('');

  useEffect(() => {
    api.get('/')
        .then((res)=>{
          setMessage(res.data.mensagem);
        })
        .catch((err)=>{
          console.error('Erro ao conectar com o banco.',err);
        });
  }, []);

  return (
    <main>
      <p>Resposta do servidor: {message}</p>
    </main>
  )
}

export default App
