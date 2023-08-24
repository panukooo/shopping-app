import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const ItemSelected = (props) => {
    const {dispatch} = useContext(AppContext);

    const [item, setItem] = useState("Shirt");
    const [action, setAction] = useState("Add");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = () => {

        const msg = {
            name: item,
            val: parseInt(quantity, 10)
        }
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
        <div>
            <div className="row">
                <div className="input-group mb-3" style={{marginLeft: "2rem"}}>
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="items">Item</label>
                </div>
                <select className="custom-select" id="items" onChange={(itemVal) => setItem(itemVal.target.value)}>
                    <option value="Shirt">Shirt</option>
                    <option value="Jeans">Jeans</option>
                    <option value="T-Shirt">T-Shirt</option>
                    <option value="Dress">Dress</option>
                    <option value="Shoes">Shoes</option>
                </select>
                <div className="input-group-prepend" style={{marginLeft: "2rem"}}>
                    <label className="input-group-text" htmlFor="quantity">Quantity</label>
                </div>
                <select className="custom-select" id="quantity" onChange={(actionVal) => setAction(actionVal.target.value)}>
                    <option value="Add">Add</option>
                    <option value="Reduce">Reduce</option>
                </select>
                <span className="eco" style={{marginLeft: "2rem", marginRight: "8px"}}></span>
                <input type="number" style={{size: 10}} value={quantity} required onChange={(txtQty) => setQuantity(txtQty.target.value)}/>
                <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
            </div>
            </div>
        </div>
    )
};

export default ItemSelected;
