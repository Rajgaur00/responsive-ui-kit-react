import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <div className="logo">XoWeb UI</div>
      <nav className={`nav-links ${open ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Docs</a>
        <a href="#">Contact</a>
      </nav>
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </header>
  );
};

export default Navbar;
