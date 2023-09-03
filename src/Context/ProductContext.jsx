import { createContext, useState } from "react";
const ProductContext = createContext({})

export const ProductContainer = ({ children }) => {

 const [allProducts,setallProducts] =useState ([])
  
 const setProductsGlobally = (data) =>{
    setallProducts(data)
 }


 
    return <ProductContext.Provider
        value={{
         allProducts,
         setProductsGlobally,
        
      }}
    >
  {children} 
  </ProductContext.Provider>
};

export default ProductContext;

