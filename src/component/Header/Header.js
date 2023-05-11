import React from 'react';
import './Header.css'
import logo from '../../images/flipkart-com-logo-internet-ltd-state-of-kerala-10.png'
const Header = () => {
    return (
        <div className='header'>
            <nav>
                <img src={logo} alt="" />
                <div>
                    <a href="/shop">shopping</a>
                    <a href="/orders">orders</a>
                    <a href="/inventory">inventory</a>
                    <a href="/about">about</a>
                </div>
            </nav>

        </div>
    );
};

export default Header;