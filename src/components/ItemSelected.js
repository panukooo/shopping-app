import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = (props) => {
    const {dispatch} = useContext(AppContext);

    const [item, setItem] = useState("");
    const [action, setAction] = useState("");
    const [value, setValue] = useState(0);

    const handleSubmit = () => {
        if(action === "Add") {
            let msg = {
                name: item,
                val: value
            }
            dispatch({
                type: "ADD_QTY",
                payload: msg
            });
        }
        else {
            let msg = {
                name: item,
                val: value
            }
            dispatch({
                type: "REDUCE_QTY",
                payload: msg
            });
        }
    }

    return (
        <form>
            <label for="items">Item</label>
            <select id="items" onChange={(itemVal) => setItem(itemVal.target.value)}>
                <option value="Shirt">Shirt</option>
                <option value="Jeans">Jeans</option>
                <option value="T-Shirt">T-Shirt</option>
                <option value="Dress">Dress</option>
                <option value="Shoes">Shoes</option>
            </select>
            <label for="quantity">Quantity</label>
            <select id="quantity" onChange={(actionVal) => setAction(actionVal.target.value)}>
                <option value="Add">Add</option>
                <option value="Reduce">Reduce</option>
            </select>
            <input type="number" onChange={(txtVal) => setValue(txtVal.target.value)}/>
            <button onClick={handleSubmit}>Save</button>
        </form>
    )
};

export default ItemSelected;
