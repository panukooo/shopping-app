import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const {items, exchange} = useContext(AppContext);

    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Item Price</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <ExpenseItem id={item.name} name={item.itemName} price={item.price} quantity={item.quantity} exch={exchange}/>
                ))}
            </tbody>
        </table>
    )
};

export default ExpenseList;
