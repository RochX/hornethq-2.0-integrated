import React from 'react';

const Cart = ({ carItems }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {carItems.map(item => (
                    <li key={item.key}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
