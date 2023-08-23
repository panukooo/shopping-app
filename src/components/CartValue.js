import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const {cartValue, globalLocation} = useContext(AppContext);

    return (
        <div>
            Cart Value {`${globalLocation}${cartValue}`}
        </div>
    )
};

export default CartValue;
