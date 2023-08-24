import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const {dispatch} = useContext(AppContext);
   
    const selectOption = (val) => {
        dispatch({
            type: "CHG_LOCATION",
            payload: val
        })
    }

    return (
        <div className="alert alert-secondary">
            Location
            <select name="location" id="location" onChange={(change) => {selectOption(change.target.value)}}>
                <option value="₽">Russia(₽)</option>
                <option value="mx">Mexico($)</option>
                <option value="₹">India(₹)</option>
                <option value="¥">China(¥)</option>
                <option value="€">Europe(€)</option>
                <option value="$">US($)</option>
            </select>
        </div>
    )
};

export default Location;