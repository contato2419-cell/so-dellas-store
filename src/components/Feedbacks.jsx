import React from 'react';

const feedbacks = [
  "feedback1.png",
  "feedback2.png",
  "feedback3.png",
  "feedback4.png"
];

const Feedbacks = () => {
  return (
    <section className="feedbacks-section" id="feedbacks">
      <div className="section-header">
        <h2>O QUE NOSSAS CLIENTES DIZEM</h2>
        <p>A satisfação de quem veste Só Dellas</p>
      </div>
      <div className="feedbacks-grid">
        {feedbacks.map((src, index) => (
          <div key={index} className="feedback-card">
            <img src={src} alt={`Feedback de cliente ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feedbacks;
