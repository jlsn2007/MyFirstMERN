import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/NavBar.css";


const Navbar = () => {
  const [showEmployees, setShowEmployees] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <h2>ZOMA DIGITAL</h2>
        <p>Sistema de Manejo</p>
      </div>

      <div className="nav-section">
        
        <ul>
          <Link to="/employees"> Empleados </Link>
          <Link to="/products"> Productos </Link>
          <Link to="/customers"> Clientes </Link>
          
        </ul>
      </div>

    </div>
  );
};

export default Navbar;