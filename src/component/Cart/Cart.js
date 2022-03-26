import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <h3 className='cart-title'>Selected Product</h3>
            <div className='choose-product'>
                <h3 className='cart-title'> Choose Product</h3>
            </div>
            <button className='choose-forMe'>CHOOSE 1 FOR ME</button>
            <button className='choose-again'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;