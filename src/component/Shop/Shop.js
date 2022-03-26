import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const heandelOrderCart = (product) => {
        if (cart.length < 4 && cart.indexOf(product) === -1) {
            const newCart = [...cart, product]
            setCart(newCart);
        }

    }
    return (
        <div className='shope-conteiner'>
            <div className='cart-conteiner'>
                <Cart
                    cart={cart}
                    setCart={setCart}
                ></Cart>
            </div>
            <div className='products-conteiner'>
                {
                    products.map(product => <Products
                        product={product}
                        key={product.id}
                        heandelOrderCart={heandelOrderCart}
                    ></Products>)
                }
            </div>

        </div>
    );
};

export default Shop;