import React, { useState } from 'react';
import { useStore } from '../store';
import { X, ShoppingBag } from 'lucide-react';

const ProductModal = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const addToCart = useStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor, selecione um tamanho.");
      return;
    }
    addToCart(product, selectedSize);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="modal-image-col">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="modal-info-col">
          <h2 className="modal-title">{product.title}</h2>
          <p className="modal-price">R$ {product.price.toFixed(2).replace('.', ',')}</p>
          
          <div className="size-selector">
            <h4>Escolha o Tamanho:</h4>
            <div className="sizes-grid">
              {product.sizes.map(size => (
                <button 
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="btn-primary" onClick={handleAddToCart}>
            <ShoppingBag size={20} /> Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
