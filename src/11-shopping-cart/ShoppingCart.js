import { useState } from 'react'

const items = [{
  name: 'apple',
  price: 0.39,
  quantity: 0
}, {
  name: 'banana',
  price: 0.79,
  quantity: 0
}, {
  name: 'cherry tomatoes',
  price: 3.99,
  quantity: 0
}]

function ShoppingCart () {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState((0).toFixed(2));

  function addToCart(item) {
    if (item.quantity === 0) {
      item.quantity += 1;
      setCart([...cart, item]);
    } else if (item.quantity >= 1) {
      item.quantity += 1;
      const newCart = items.filter(item => item.quantity >= 1)
      setCart(newCart);
      
      }
    console.log(cart)
    let newTotal = 0;
    for (let i = 0; i < items.length; i++) {
      newTotal += (items[i].quantity * items[i].price)
    }
    setTotal(newTotal.toFixed(2))
  }

  function clearButton() {
    setCart([]);
    setTotal(0);
    items.map(item => item.quantity = 0)
  }
  
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={() => addToCart(item)} >Add to Cart</button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button>-</button>
                {item.quantity}
                <button>+</button>
              </p>
              <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='total'>
        <h2>Total: ${total}</h2>
        <button onClick={() => clearButton()}>Clear</button>
      </div>
    </div>
  )
}

export default ShoppingCart
