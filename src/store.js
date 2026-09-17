import { create } from 'zustand';

export const useStore = create((set, get) => ({
  cart: [],
  isCartOpen: false,
  
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  
  addToCart: (product, size) => set((state) => {
    const existingItem = state.cart.find(item => item.id === product.id && item.size === size);
    if (existingItem) {
      return {
        cart: state.cart.map(item => 
          item.id === product.id && item.size === size 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        isCartOpen: true
      };
    }
    return { 
      cart: [...state.cart, { ...product, size, quantity: 1 }],
      isCartOpen: true
    };
  }),

  removeFromCart: (productId, size) => set((state) => ({
    cart: state.cart.filter(item => !(item.id === productId && item.size === size))
  })),

  getCartTotal: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  getCartCount: () => {
    const { cart } = get();
    return cart.reduce((count, item) => count + item.quantity, 0);
  }
}));
