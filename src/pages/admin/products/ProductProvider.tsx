/**
 * Product Context
 * => provide functions for the product module
 */

import React, { createContext, useContext } from "react";
// Create ProductContext

  
const addNewProduct = (product = {}) => {
    console.log('add new product');
    
}
const deleteProduct = (product = {}) => {
    console.log('delete product');
    
}

const ProductProvider = {
    addNewProduct,
    deleteProduct
}
export const ProductContext = createContext(ProductProvider);
  
  
