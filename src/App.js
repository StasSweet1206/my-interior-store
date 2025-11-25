// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Orders from './components/Orders';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <NavLink activeClassName="active-link" to="/">Главная</NavLink>
        <NavLink activeClassName="active-link" to="/catalog">Каталог</NavLink>
        <NavLink activeClassName="active-link" to="/orders">Заказы</NavLink>
        <NavLink activeClassName="active-link" to="/cart">Корзина</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;