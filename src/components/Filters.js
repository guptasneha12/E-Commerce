// src/components/Filters.js
import React from 'react';

const Filters = ({ filters, setFilters }) => {
  const handleSizeChange = (e) => setFilters({ ...filters, size: e.target.value });
  const handleColorChange = (e) => setFilters({ ...filters, color: e.target.value });
  const handleBrandChange = (e) => setFilters({ ...filters, brand: e.target.value });
  const handleMaterialChange = (e) => setFilters({ ...filters, material: e.target.value });
  const handlePriceRangeChange = (e) => setFilters({ ...filters, priceRange: e.target.value });
  const handleStyleChange = (e) => setFilters({ ...filters, style: e.target.value });
  const handleOccasionChange = (e) => setFilters({ ...filters, occasion: e.target.value });
  const handleSleeveLengthChange = (e) => setFilters({ ...filters, sleeveLength: e.target.value });

  return (
    <div className="filters">
      <h3>Filters</h3>
      
      <div className="filter-section">
        <label>Size</label>
        <select value={filters.size} onChange={handleSizeChange}>
          <option value="">All Sizes</option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Color</label>
        <select value={filters.color} onChange={handleColorChange}>
          <option value="">All Colors</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
          <option value="Pink">Pink</option>
          <option value="Black">Black</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Brand</label>
        <select value={filters.brand} onChange={handleBrandChange}>
          <option value="">All Brands</option>
          <option value="Zara">Zara</option>
          <option value="H&M">H&M</option>
          <option value="Gucci">Gucci</option>
          <option value="Forever21">Forever21</option>
          <option value="Prada">Prada</option>
          <option value="Dior">Dior</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Material</label>
        <select value={filters.material} onChange={handleMaterialChange}>
          <option value="">All Materials</option>
          <option value="Cotton">Cotton</option>
          <option value="Silk">Silk</option>
          <option value="Wool">Wool</option>
          <option value="Polyester">Polyester</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Price Range</label>
        <select value={filters.priceRange} onChange={handlePriceRangeChange}>
          <option value="">All Prices</option>
          <option value="0-30">0-30</option>
          <option value="30-60">30-60</option>
          <option value="60-100">60-100</option>
          <option value="100+">100+</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Style</label>
        <select value={filters.style} onChange={handleStyleChange}>
          <option value="">All Styles</option>
          <option value="Casual">Casual</option>
          <option value="Party">Party</option>
          <option value="Formal">Formal</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Occasion</label>
        <select value={filters.occasion} onChange={handleOccasionChange}>
          <option value="">All Occasions</option>
          <option value="Day">Day</option>
          <option value="Evening">Evening</option>
          <option value="Work">Work</option>
          <option value="Wedding">Wedding</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Sleeve Length</label>
        <select value={filters.sleeveLength} onChange={handleSleeveLengthChange}>
          <option value="">All Sleeve Lengths</option>
          <option value="Short">Short</option>
          <option value="Long">Long</option>
          <option value="Sleeveless">Sleeveless</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
