import React, { createContext, useReducer } from 'react';

let initialState = {
    cartValue = 0,
    quantity = 0,
    locations: [
        {location: "Russia", simbol: "₽"},
        {location: "India", simbol: "₹"},
        {location: "Mexico", simbol: "$"},
        {location: "Europe", simbol: "€"},
        {location: "US", simbol: "$"},
        {location: "China", simbol: "¥"}
    ],
    items: [
        {itemName: "Shirt", price: 500, quantity: 0},
        {itemName: "Jeans", price: 300, quantity: 0},
        {itemName: "T-Shirt", price: 150, quantity: 0},
        {itemName: "Watch", price: 950, quantity: 0},
        {itemName: "Dress", price: 820, quantity: 0},
        {itemName: "Shoes", price: 746, quantity: 0}
    ]
};