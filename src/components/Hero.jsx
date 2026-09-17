import React, { useState, useEffect } from 'react';
import { heroImages } from '../data';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero" id="inicio">
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Nova Coleção Patogê</h1>
        <p>Elegância e conforto em cada detalhe</p>
        <button className="btn-primary" onClick={() => document.getElementById('categorias').scrollIntoView({ behavior: 'smooth'})}>
          Ver Coleção
        </button>
      </div>
    </div>
  );
};

export default Hero;
