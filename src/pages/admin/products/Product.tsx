import React, { useContext } from 'react'
import {ProductContext} from './ProductProvider';

export const Product = () => {
    
    const data = useContext(ProductContext);
    // console.log(data);
    
    

  return (
    <>
    list Product
    </>
  )
}
