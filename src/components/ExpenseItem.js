import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const {dispatch, globalLocation} = useContext(AppContext);

    const deleteQuantity = () => {
        dispatch({
            type: "DELETE_QTY",
            payload: props.name
        })
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.quantity}</td>
            <td>{globalLocation}{props.price}</td>
            <td>{globalLocation}{props.quantity * props.price}</td>
            <td><FaTimesCircle onClick={deleteQuantity}/></td>
        </tr>
    )
};

export default ExpenseItem;
