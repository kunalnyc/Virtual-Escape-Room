import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';
import GameRoom from './room/GameRoom';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gameroom" element={<GameRoom />} />
        <Route path="/" exact element={<div>Home is fun</div>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
