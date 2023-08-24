import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const {cartValue, globalLocation} = useContext(AppContext);

    return (
        <div className="alert alert-primary">
            <span>Cart Value: {`${globalLocation}${cartValue}`}</span>
        </div>
    )
};

export default CartValue;
