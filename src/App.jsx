import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryScroller from './components/CategoryScroller';
import CartSidebar from './components/CartSidebar';
import Highlight from './components/Highlight';
import Feedbacks from './components/Feedbacks';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <CartSidebar />
      <main>
        <Hero />
        <div className="container">
          <CategoryScroller />
          <Highlight />
          <Feedbacks />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
