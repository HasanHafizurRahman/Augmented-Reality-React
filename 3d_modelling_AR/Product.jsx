// Product.js
import React from 'react';

const Product = ({ product, onTryOn }) => {
  const { name, image, price } = product;

  return (
    <div className="product">
      {/* <img src={require(`../assets/${image}`).default} alt={name} /> */}
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => onTryOn(product)}>Try On</button>
    </div>
  );
};

export default Product;
