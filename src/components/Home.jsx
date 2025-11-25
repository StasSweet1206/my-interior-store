// src/components/Home.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Меню нашего приложения</h1>
      <nav className="navbar">
        <NavLink to="/catalog" className="button">Каталог</NavLink>
        <NavLink to="/orders" className="button">Заказы</NavLink>
        <NavLink to="/cart" className="button">Корзина</NavLink>
      </nav>
    </div>
  );
}