import React from 'react';
import './products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = ({ product, heandelOrderCart }) => {
    const { img, name, price, brand, ratings } = product
    return (
        <div className='product-conteiner'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h4>Name: {name}</h4>
                <h5>Brand: {brand}</h5>
                <h5>Price: ${price}</h5>
                <p>Ratings: {ratings} <small>Star</small></p>
            </div>
            <button onClick={() => heandelOrderCart(product)} className='order-button'>Order Product <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Products;