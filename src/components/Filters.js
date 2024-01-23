import React from 'react'
import "../stylesheets/Filters.scss";

const Filters = ({ priceFilter, onPriceFilterChange, sizeFilter, onSizeFilterChange }) => {
    return (
        <div className="container">
            <div className="filter-section">
                <div className="filter-label">Filtrer par prix :</div>
                <select
                    className="filter-select"
                    value={priceFilter}
                    onChange={onPriceFilterChange}
                >
                    <option value="all">Tous</option>
                    <option value="50">Moins de 50€</option>
                    <option value="100">Moins de 100€</option>
                    <option value="moreThan100">Plus de 100€</option>
                </select>
                <div className="filter-label">Filtrer par taille :</div>
                <select
                    className="filter-select"
                    value={sizeFilter}
                    onChange={onSizeFilterChange}
                >
                    <option value="all">Toutes</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;