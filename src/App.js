import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <AppProvider>
        <div className="App">
            <CartValue />
        </div>
        <div>
            <Location />
        </div>
        <div>
            <ExpenseList />
        </div>
    </AppProvider>
  );
}

export default App;
