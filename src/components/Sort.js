// src/components/Sort.js
import React from 'react';

const Sort = ({ sort, setSort }) => {
  const handleSortChange = (e) => setSort(e.target.value);

  return (
    <div className="sort">
      <label>Sort By</label>
      <select value={sort} onChange={handleSortChange}>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Sort;
