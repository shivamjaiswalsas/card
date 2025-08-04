import React, { useEffect, useState } from 'react'
import { fetchProduct } from './api/postApi'
import ProductList from './components/ProductList'

const App = () => {

  const [products, setProducts]= useState([])
  // const [loading , setloading]= useState(true)

useEffect(() => {
  const getProducts = async () => {
    try {
      const data = await fetchProduct();
      setProducts(data.products); // ✅ fix here
    } catch (err) {
      console.log("error");
    }
  };

  getProducts();
}, []);



  return (
    <div>

      <ProductList products={products}/>
    </div>
  )
}

export default App