import './App.css'
import { useState } from 'react'
import { Cart } from './component/Cart'
import { ProductListing } from './component/ProductListing'

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  return (
    <div>
      <ProductListing addToCart={addToCart}/>
      <Cart items={cartItems} setItem={setCartItems}/>
    </div>
  )
}

export default App