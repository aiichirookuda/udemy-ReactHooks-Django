import React, { useState } from 'react'

const Basic1 = () => {

  const [products, setProducts] = useState({name: '', price: ''})

  return (
    <>
      <form>
        <input type='text' value={products.name}
        onChange={event=> setProducts({...product, name: event.target.value})}/>
        
        <input type='text' value={products.price}
        onChange={event=> setProducts({...product, price: event.target.value})}/>

      </form>

      <h3>Product name is {products.name}</h3>
      <h3>Product price is {products.price}</h3>
    </>
  )
}

export default Basic1

