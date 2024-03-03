// ProductList.js
import React from 'react';
import Product from './Product';
import { products } from './Products';

const ProductList = ({ onTryOn }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} onTryOn={onTryOn} />
      ))}
    </div>
  );
};

export default ProductList;
