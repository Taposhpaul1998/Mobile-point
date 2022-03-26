import React from 'react';
import './Order.css'

const Order = ({ item }) => {
    const { name, img } = item;
    return (
        <div className='order-item'>
            <img src={img} alt="" />
            <h5>{name}</h5>
        </div>
    );
};

export default Order;