import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import '../stylesheets/ProductList.scss';
import Button from './Button';

const ProductList = ({ products }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  if (products.length === 0) {
    return <p>Aucun produit disponible pour votre sélection.</p>
  }

  const addToCart = (item) => {
    localStorage.setItem("cart", JSON.stringify([...cart, item]));
    navigate("/cart");
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <div className="product-name">{product.brand}<br /><small>{product.name}</small></div>
          <div className="product-picture">
            <img src={`${process.env.PUBLIC_URL}/img/products/${product.image}`} alt="" />
          </div>
          <div className="product-price">{product.price} €</div>
          <div className="product-sizes">Taille disponibles: {product.sizes.join(', ')}</div>
          <Button className="primary" action={() => addToCart(product)}>Ajouter au panier</Button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;