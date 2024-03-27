import React from 'react'
import './Cart.css'

const Cart = ({items, totalItems, totalPrice  }) => {
  console.log('Cart', items, totalItems, totalPrice)

  const itemList = items.map((items, index) =>{
    return (
      <div key={index} className='container_main'>
        <span>{items.name} </span> <span>{items.quantity} X  {items.price * items.quantity}</span>
      </div>
    )
  })
  return (
    <div className='cart'>
      <p>Cart</p>
      <div className='main_div'>
        <p>{itemList}</p>
        </div>
        {/* <p>{totalItems}</p> */}
        <div className='container_bottom'>
        <p>Total: {totalPrice}</p>
      </div>
    </div>
  )
}

export default Cart
