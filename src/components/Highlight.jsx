import React from 'react';

const Highlight = () => {
  return (
    <section className="highlight-section">
      <div className="highlight-container">
        <div className="highlight-image-col">
          <img src="/highlight.png" alt="Destaque Só Dellas" className="highlight-image" />
        </div>
        <div className="highlight-text-col">
          <h2>Elegância e Conforto</h2>
          <p>
            Descubra peças exclusivas que valorizam o seu estilo e trazem a sofisticação 
            que você merece para qualquer ocasião. Na Só Dellas, cada detalhe é pensado 
            para realçar a sua beleza única.
          </p>
          <a href="#categorias" className="btn-primary highlight-btn">Ver Coleção</a>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
