// App.js
import React, { useState } from 'react';
import './App.css';
import ProductList from '../ProductList';
import ARViewer from '../ARViewer';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleTryOn = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="app container mx-auto">
      <h1>E-commerce AR Trial</h1>
      <ProductList onTryOn={handleTryOn} />
      {selectedProduct && <ARViewer product={selectedProduct} />}
    </div>
  );
}

export default App;
