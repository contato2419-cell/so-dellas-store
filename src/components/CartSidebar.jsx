import React from 'react';
import { useStore } from '../store';
import { X, MessageCircle } from 'lucide-react';

const CartSidebar = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, getCartTotal } = useStore();

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;
    
    let message = "Olá Só Dellas! Gostaria de finalizar meu pedido:\n\n";
    cart.forEach(item => {
      message += `- ${item.quantity}x ${item.title} (Tamanho: ${item.size}) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });
    message += `\n*Total: R$ ${getCartTotal().toFixed(2).replace('.', ',')}*\n\n`;
    message += "Aguardo retorno para combinar o pagamento e entrega!";
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "553196361899";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <div 
        className={`cart-sidebar-overlay ${isCartOpen ? 'open' : ''}`} 
        onClick={toggleCart} 
      />
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>Seu Carrinho</h2>
          <button onClick={toggleCart}><X size={24} /></button>
        </div>
        
        <div className="cart-items">
          {cart.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#777', marginTop: '2rem' }}>
              Seu carrinho está vazio.
            </p>
          ) : (
            cart.map(item => (
              <div key={`${item.id}-${item.size}`} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.title}</h4>
                  <p className="cart-item-meta">Tamanho: {item.size} | Qtd: {item.quantity}</p>
                  <p className="cart-item-price">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</p>
                  <button 
                    className="cart-remove"
                    onClick={() => removeFromCart(item.id, item.size)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>R$ {getCartTotal().toFixed(2).replace('.', ',')}</span>
            </div>
            <button className="btn-primary whatsapp-btn" onClick={handleWhatsAppCheckout}>
              <MessageCircle size={20} /> Finalizar pelo WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
