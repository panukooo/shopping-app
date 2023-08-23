import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    let newItems = [];
    switch(action.type) {
        case "CHG_LOCATION":
            state.globalLocation = action.payload;
            return { ...state };
        
        case "DELETE_QTY":
            state.items.map((item) => {
                if(item.itemName === action.payload) {
                    item.quantity = 0;
                }
                newItems.push(item);
            });
            state.items = newItems;
            return {...state};

        case "ADD_QTY":
            
    }
}

const initialState = {
    cartValue: 0,
    globalLocation: "₽",
    /*locations: [
        {location: "Russia", simbol: "₽"},
        {location: "India", simbol: "₹"},
        {location: "Mexico", simbol: "$"},
        {location: "Europe", simbol: "€"},
        {location: "US", simbol: "$"},
        {location: "China", simbol: "¥"}
    ],*/
    items: [
        {itemName: "Shirt", price: 500, quantity: 0, total: 0},
        {itemName: "Jeans", price: 300, quantity: 0, total:0},
        {itemName: "T-Shirt", price: 150, quantity: 0, total: 0},
        {itemName: "Dress", price: 820, quantity: 0, total:0},
        {itemName: "Shoes", price: 746, quantity: 0, total:0}
    ]
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    const totalExpenses = state.items.reduce((total, item) => {
        return (total = total + item.price * item.quantity);
    }, 0);

    state.cartValue = totalExpenses;

    return (
        <AppContext.Provider value={{
            items: state.items,
            cartValue: state.cartValue,
            dispatch,
            globalLocation: state.globalLocation,
            //locations: state.locations
        }}>
            {props.children}
        </AppContext.Provider>
    );
}
