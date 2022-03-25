import React, { useEffect, useState } from 'react';
import Products from '../products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='shope-conteiner'>
            <div className='cart-conteiner'>
                <h2>order product</h2>
            </div>
            <div className='products-conteiner'>
                {
                    products.map(product => <Products
                        product={product}
                        key={product.id}
                    ></Products>)
                }
            </div>
        </div>
    );
};

export default Shop;