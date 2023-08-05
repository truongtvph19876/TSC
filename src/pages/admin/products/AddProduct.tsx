import React, { useContext } from 'react'
import { ProductContext } from './ProductProvider';

export const AddProduct = () => {

    const { addNewProduct } = useContext(ProductContext);
    
    
  return (
    <div>
      {/* Sử dụng hàm và giá trị từ ProductProvider */}
      <button onClick={()=> {addNewProduct()}}>Add Product</button>
    </div>
  );
}
