import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = (props) => {
    const {dispatch} = useContext(AppContext);

    const [item, setItem] = useState("Shirt");
    const [action, setAction] = useState("Add");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const msg = {
            name: item,
            val: parseInt(quantity, 10)
        }
        //alert(`Ropa: ${item} Cantidad: ${quantity} Accion: ${action}`);
        if(action === "Add") {
            dispatch({
                type: "ADD_QTY",
                payload: msg
            });
        }
        else {
            dispatch({
                type: "REDUCE_QTY",
                payload: msg
            });
        }
        setQuantity("");
    }

    return (
        <form>
            <label htmlFor="items">Item</label>
            <select id="items" onChange={(itemVal) => setItem(itemVal.target.value)}>
                <option value="Shirt">Shirt</option>
                <option value="Jeans">Jeans</option>
                <option value="T-Shirt">T-Shirt</option>
                <option value="Dress">Dress</option>
                <option value="Shoes">Shoes</option>
            </select>
            <label htmlFor="quantity">Quantity</label>
            <select id="quantity" onChange={(actionVal) => setAction(actionVal.target.value)}>
                <option value="Add">Add</option>
                <option value="Reduce">Reduce</option>
            </select>
            <input type="number" value={quantity} required onChange={(txtQty) => setQuantity(txtQty.target.value)}/>
            <button onClick={handleSubmit}>Save</button>
        </form>
    )
};

export default ItemSelected;
