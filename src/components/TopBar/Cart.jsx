import React, { useState } from 'react';
import "./TopBar.css";

const Cart = ({ carItems }) => {

    return (
        <div>
            <ul>
                {carItems.map(product => (
                    <li key={product.index}>
                        <a href="">{product.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;