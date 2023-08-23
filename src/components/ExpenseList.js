import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Items</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Itme Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
        </table>
    )
};

export default ExpenseList;
