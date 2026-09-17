import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useStore } from '../store';

const Navbar = () => {
  const toggleCart = useStore((state) => state.toggleCart);
  const getCartCount = useStore((state) => state.getCartCount);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="mobile-menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>
      <div className="navbar-logo">
        <img src="logo.png" alt="Só Dellas Logo" style={{ height: '40px' }} />
      </div>
      <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Início</a>
        <a href="#categorias" onClick={() => setMobileMenuOpen(false)}>Categorias</a>
        <a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
      </div>
      <div className="cart-icon-wrapper" onClick={toggleCart}>
        <ShoppingCart size={24} />
        {getCartCount() > 0 && (
          <span className="cart-badge">{getCartCount()}</span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
