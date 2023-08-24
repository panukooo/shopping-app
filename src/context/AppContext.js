import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    let newItems = [];
    switch(action.type) {
        case "CHG_LOCATION":
            state.globalLocation = action.payload === "mx" ? "$" : action.payload;
            state.exchangeList.map((exch) => {
                if(exch.simbol === action.payload) {
                    state.exchange = exch.taza;
                }
                return true
            });
            action.type = "DONE";
            return { ...state };
        
        case "DELETE_QTY":
            state.items.map((item) => {
                if(item.itemName === action.payload) {
                    item.quantity = 0;
                }
                newItems.push(item);
                return true;
            });
            state.items = newItems;
            return {...state};

        case "ADD_QTY":
            state.items.map((item) => {
                if(item.itemName === action.payload.name) {
                    item.quantity += action.payload.val;
                }
                return true;
            });
            action.type = "DONE";
            return {...state};
        
        case "REDUCE_QTY":
            state.items.map((item) => {
                if(item.itemName === action.payload.name) {
                    item.quantity = item.quantity < action.payload.val ? 0 : item.quantity - action.payload.val; 
                }
                return true;
            });
            action.type = "DONE";
            return {...state};

        default: 
            return state;
    }
}

const initialState = {
    cartValue: 0,
    globalLocation: "₽",
    exchange: 94.3822,
    items: [
        {itemName: "Shirt", price: 500, quantity: 0},
        {itemName: "Jeans", price: 300, quantity: 0},
        {itemName: "T-Shirt", price: 150, quantity: 0},
        {itemName: "Dress", price: 820, quantity: 0},
        {itemName: "Shoes", price: 746, quantity: 0}
    ],
    exchangeList: [
        {simbol: "₽", taza: 94.3822},
        {simbol: "¥", taza: 7.2147},
        {simbol: "€", taza: 0.9218},
        {simbol: "mx", taza: 16.8503},
        {simbol: "₹", taza: 82.7322},
        {simbol: "$", taza: 1}
    ]
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    const totalExpenses = state.items.reduce((total, item) => {
        return (total = total + item.price * item.quantity);
    }, 0);

    const toTwo = Math.pow(10, 2);
    state.cartValue = Math.round(totalExpenses * state.exchange * toTwo) / toTwo;

    return (
        <AppContext.Provider value={{
            items: state.items,
            cartValue: state.cartValue,
            dispatch,
            globalLocation: state.globalLocation,
            exchange: state.exchange
        }}>
            {props.children}
        </AppContext.Provider>
    );
}
