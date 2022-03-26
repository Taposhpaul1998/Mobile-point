import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <div className="header-conteiner">
                <div className="header-title">
                    <h2>Mobile Point</h2>
                </div>
                <div className="header-menu">
                    <a href="/Home">Home</a>
                    <a href="/about">About</a>
                    <a href="/order">Order</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;