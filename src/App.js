import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import GameRoom from './room/GameRoom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/room/gameroom" element={<GameRoom />} />
        <Route path="/" exact element={<div>Home</div>} />
      </Routes>
    </Router>
  );
}

export default App;
