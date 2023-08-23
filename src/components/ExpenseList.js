import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const {items} = useContext(AppContext);

    return (
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Item Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) => (
                    <ExpenseItem id={item.name} name={item.itemName} price={item.price} quantity={item.quantity} />
                ))}
            </tbody>
        </table>
    )
};

export default ExpenseList;
