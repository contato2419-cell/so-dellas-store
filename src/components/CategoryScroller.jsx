import React, { useState } from 'react';
import { products } from '../data';
import ProductModal from './ProductModal';

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
        <div key={category} className="category-section">
          <h2 className="section-title">{category}</h2>
          <div className="scroller-container">
            {items.map((product) => (
              <div 
                key={product.id} 
                className="product-card"
                onClick={() => setSelectedProduct(product)}
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
        </div>
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
