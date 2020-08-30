import React from 'react';
import ProductTable from "./Prod.js";
import './App.css';

const products = [
  {price: 120, name: "iron", category: "Electronics"},
  {price: 80, name: "jacket", category: "Clothes"},
  {price: 65, name: "dress", category: "Clothes"},
  {price: 210, name: "drayer", category: "Electronics"}
];



function App() {
  return (
    <div className="App">
    <table className='center'>
    <th>Name</th>
  <th>Category</th>
  <th>Price</th>
  <ProductTable prod={products}/>
      </table>  
    </div>
  );
}

export default App;
