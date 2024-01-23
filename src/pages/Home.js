import React, { Fragment, useState } from 'react';
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import Header from '../components/Header';
import tabProducts from '../products';
import { MdContentCopy } from 'react-icons/md';


const Home = () => {
  const [products, setProducts] = useState(tabProducts);

  const [priceFilter, setPriceFilter] = useState('all');
  const [sizeFilter, setSizeFilter] = useState('all');

  const handlePriceFilterChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const handleSizeFilterChange = (event) => {
    setSizeFilter(Number(event.target.value));
  };

  const filteredProducts = products.filter((product) => {
    if (priceFilter !== 'all') {
      return product.price <= priceFilter;
    } else {
      return true;
    }
  });

  const filteredSize = products.filter((product) => {
    if (sizeFilter !== 'all') {
      return product.sizes === sizeFilter;
    } else {
      return true;
    }
  });


  return (
    <Fragment>
      <Header />
      <main>
        <div className="special-offers">
          <video autoPlay muted loop src={`${process.env.PUBLIC_URL}/spring_days.mp4`}></video>
          <div className="offer">
            <h2>Spring Days</h2>
            <p>-50% sur la 2ème paire avec le code promo :<br />SPRING <button onClick={() =>  navigator.clipboard.writeText('SPRING')}><MdContentCopy /></button></p>
          </div>
        </div>
        <div className="container">
          <h2>Liste des produits</h2>
          <Filters onPriceFilterChange={(e) => handlePriceFilterChange(e)} onSizeFilterChange={(e) => handleSizeFilterChange(e)} />
          <ProductList products={filteredProducts} />
        </div>
      </main>
    </Fragment>
  );
};

export default Home;