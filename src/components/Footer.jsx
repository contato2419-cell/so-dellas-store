import React from 'react';
import { Camera, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" id="sobre">
      <div className="footer-content">
        <div className="footer-col">
          <h3>Só Dellas</h3>
          <p>Revendedora Oficial Patogê.</p>
          <p>Há 13 anos vestindo mulheres incríveis.</p>
        </div>
        
        <div className="footer-col">
          <h3>Contato</h3>
          <p><Phone size={16} style={{display:'inline', marginRight:'8px'}}/> (31) 2510-5966</p>
          <p><Phone size={16} style={{display:'inline', marginRight:'8px'}}/> (31) 9636-1899 (WhatsApp)</p>
          <a href="https://www.instagram.com/lojasodellas/" target="_blank" rel="noreferrer">
            <Camera size={16} style={{display:'inline', marginRight:'8px'}}/> @lojasodellas
          </a>
        </div>

        <div className="footer-col">
          <h3>Endereço</h3>
          <p><MapPin size={16} style={{display:'inline', marginRight:'8px'}}/> R. Rio de Janeiro, 773 - Centro</p>
          <p>Belo Horizonte - MG, 30160-041</p>
        </div>

        <div className="footer-col">
          <h3>Horário de Funcionamento</h3>
          <p>Segunda a Sexta: 09:00–19:30</p>
          <p>Sábado: 09:00–15:30</p>
          <p>Domingo: Fechado</p>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.8rem', color: '#777' }}>
        &copy; {new Date().getFullYear()} Só Dellas. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
