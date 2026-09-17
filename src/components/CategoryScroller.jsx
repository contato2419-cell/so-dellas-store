import React, { useState, useRef } from 'react';
import { products } from '../data';
import ProductModal from './ProductModal';

const CategoryRow = ({ category, items, onSelectProduct }) => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.children[0]?.clientWidth || 280;
      // Adiciona o gap na conta se necessário, mas para aproximação itemWidth basta
      const newIndex = Math.round(scrollLeft / (itemWidth + 32)); // 32 is roughly the gap (2rem)
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="category-section">
      <h2 className="section-title">{category}</h2>
      <div 
        className="scroller-container" 
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {items.map((product) => (
          <div 
            key={product.id} 
            className="product-card"
            onClick={() => onSelectProduct(product)}
          >
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
            </div>
          </div>
        ))}
      </div>
      {items.length > 1 && (
        <div className="scroller-dots">
          {items.map((_, i) => (
            <div key={i} className={`dot ${i === activeIndex ? 'active' : ''}`} />
          ))}
        </div>
      )}
    </div>
  );
};

const CategoryScroller = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Group products by category
  const categories = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div id="categorias">
      {Object.entries(categories).map(([category, items]) => (
        <CategoryRow 
          key={category} 
          category={category} 
          items={items} 
          onSelectProduct={setSelectedProduct} 
        />
      ))}

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
};

export default CategoryScroller;
