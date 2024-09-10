// src/App.js
import React, { useState } from 'react';
import dresses from './data/dressesData';
import Filters from './components/Filters';
import Sort from './components/Sort';
import Products from './components/Products';
import Pagination from './components/Pagination';
import './styles.css';

const App = () => {
  const [filters, setFilters] = useState({
    size: '',
    color: '',
    brand: '',
    material: '',
    priceRange: '',
    style: '',
    occasion: '',
    sleeveLength: ''
  });

  const [sort, setSort] = useState('price-low-high');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3); // Items per page

  const filterAndSortProducts = () => {
    let filtered = dresses.filter((dress) => {
      return (
        (filters.size === '' || dress.size === filters.size) &&
        (filters.color === '' || dress.color === filters.color) &&
        (filters.brand === '' || dress.brand === filters.brand) &&
        (filters.material === '' || dress.material === filters.material) &&
        (filters.priceRange === '' || dress.priceRange === filters.priceRange) &&
        (filters.style === '' || dress.style === filters.style) &&
        (filters.occasion === '' || dress.occasion === filters.occasion) &&
        (filters.sleeveLength === '' || dress.sleeveLength === filters.sleeveLength)
      );
    });

    if (sort === 'price-low-high') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-high-low') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  };

  const filteredProducts = filterAndSortProducts();

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <h1>Dress Shop</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <Sort sort={sort} setSort={setSort} />
      <Products
        filteredProducts={filteredProducts}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
