import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Invia la richiesta di login al backend
      const response = await axios.post('http://localhost:5000/utenti/login', { username, password });
      // Gestisci la risposta, ad esempio, reindirizza l'utente a una pagina successiva
      console.log('Login avvenuto con successo:', response.data);
    } catch (error) {
      console.error('Errore durante il login:', error);
      // Gestisci gli errori di login, ad esempio, mostra un messaggio di errore all'utente
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome utente:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;