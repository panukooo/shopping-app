import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const {dispatch, globalLocation} = useContext(AppContext);
    const roundTwo = Math.pow(10, 2);
    const unitPrice = Math.round(props.price * props.exch * roundTwo) / roundTwo;
    const totalPrice = Math.round(unitPrice * props.quantity * roundTwo) / roundTwo;

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
            <td>{globalLocation}{unitPrice}</td>
            <td>{globalLocation}{totalPrice}</td>
            <td><FaTimesCircle size="1.5em" color="red" onClick={deleteQuantity}/></td>
        </tr>
    )
};

export default ExpenseItem;
