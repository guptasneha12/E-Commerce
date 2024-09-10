// src/components/Products.js
import React from 'react';

const Products = ({ filteredProducts, currentPage, itemsPerPage }) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="products">
      {currentItems.map((dress) => (
        <div key={dress.id} className="product">
          <h3>{dress.name}</h3>
          <p>Price: ${dress.price}</p>
          <p>Size: {dress.size}</p>
          <p>Color: {dress.color}</p>
          <p>Brand: {dress.brand}</p>
          <p>Material: {dress.material}</p>
          <p>Style: {dress.style}</p>
          <p>Occasion: {dress.occasion}</p>
          <p>Sleeve Length: {dress.sleeveLength}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
