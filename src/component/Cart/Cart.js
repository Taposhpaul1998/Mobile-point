import React, { useState } from 'react';
import ChooseCart from '../ChooseCart/ChooseCart';
import Order from '../Order-item/Order';
import './Cart.css'

const Cart = ({ cart, setCart }) => {
    const [chooseCart, setChooseCart] = useState([]);

    const getRendomCart = (min, max) => {
        let rendom1 = max - min + 1;
        let rendom2 = Math.random() * rendom1;
        let result = Math.floor(rendom2) + min;
        return result;
    }
    const hendelChooseForMe = (cart) => {
        let index = getRendomCart(0, cart.length);
        const rendomCart = cart[index];
        if (rendomCart !== undefined) {
            setChooseCart(rendomCart);
        }
    }

    const chooseAgain = () => {
        setCart([]);
        setChooseCart([]);
    }
    return (
        <div className='cart'>
            <h3 className='cart-title'>Selected Product</h3>
            <div>
                {
                    cart.map(item => <Order
                        item={item}
                        key={item.id}
                    ></Order>

                    )
                }
            </div>
            <div className='choose-product'>
                <h3 className='cart-title'> Choose Product</h3>
                <div className='order-item'>
                    <ChooseCart
                        chooseCart={chooseCart}
                    ></ChooseCart>
                </div>
            </div>
            <button onClick={() => hendelChooseForMe(cart)} className='choose-forMe'>CHOOSE 1 FOR ME</button>
            <button onClick={chooseAgain} className='choose-again'>CHOOSE AGAIN</button>
        </div>
    );
};

export default Cart;