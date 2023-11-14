import React, { useState, useEffect } from 'react';
import './CartDrop.css'
import { FaCartArrowDown } from "react-icons/fa";

function CartDrop({ courseID, cartDropActive }) {
    const [stringArray, setStringArray] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    useEffect(() => {
        // Add the parentString to the array every time it changes
        if (courseID) {
            setStringArray((prevArray) => [...prevArray, courseID]);
        }
    }, [courseID]);

    return (
        <div>
            <FaCartArrowDown /> Class Cart


            {cartDropActive && (
                <div
                    style={{
                        color: "black",
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        backgroundColor: '#fff', // Set your preferred background color
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        display: cartDropActive ? 'block' : 'none',
                        padding: '8px',
                        zIndex: 1,
                    }}
                >
                    {stringArray.length > 0 ? (
                        <div>
                            {stringArray.map((item, index) => (
                                <div key={index}>{item}</div>
                            ))}
                        </div>) : (null)
                    }
                </div>
            )}
        </div>
    );
}

export default CartDrop;
