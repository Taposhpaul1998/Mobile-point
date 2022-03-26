import React from 'react';
import './products.css'

const Products = ({ product }) => {
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
            <button className='order-button'>Order Product</button>
        </div>
    );
};

export default Products;