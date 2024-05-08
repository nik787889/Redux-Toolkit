
// //

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import { removeProducts, clearCart } from '../redux-toolkit/cartSlice'
import { isSelectCart, selectCart, updateCart } from '../redux-toolkit/selectCartSlice'
import Navbar from '../components/Navbar';

const Cart = () => {

  const navigate = useNavigate()

  const cartProducts = useSelector((state) => state.cart)
  // console.log(cartProducts);

  const dispatch = useDispatch()

  const removeFromCart = (itemId) => {
    dispatch(removeProducts(itemId))
  }

  const updateProduct = (index, product) => {
    dispatch(updateCart(product))
    dispatch(isSelectCart(true))
    navigate('/selectCart', { state: { index: index,} })
  }

  // // This is for Clear The Cart
  const clearCartHandler = () => {
    dispatch(clearCart())
  }

  const placeOrder = () => {
    navigate('/signin')
  }

  const totalItems = cartProducts.reduce((total, item) => total + item.quntity, 0);
  const totalAmount = cartProducts.reduce((total, item) => total + (item.quntity * item.price), 0);


  if (cartProducts.length === 0) {
    return (
      <div>
        <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh", color: "#00d6ff" }}>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div>

      {/* <Navbar /> */}

      <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%" }}>
        <FaCartPlus style={{ height: "44px", width: "22px", color: "#f3075e" }} />
        <h2 style={{ color: "#f3075e" }}>  Cart </h2>
      </div>

      <div>
        <div className="cartCard" style={{ color: "yellow", fontWeight: "800", fontSize: "2rem", }}>
          <span>Products</span>
          <span>Price</span>
          <span>Title</span>
          <span>Total Price</span>
          <span style={{ display: "flex", gap: "7rem", justifyContent: "end", marginRight: "20px" }}>
            <span>Update</span>
            <span>Remove</span>
          </span>
        </div>
      </div>

      <div className="cartWrapper example">
        {
          
          cartProducts.map((item, index) => <div key={item.id} className='cartCard'>

            <div>
              <div className='qty'>{item.quntity}</div>
              <img style={{ width: "100px" }} src={item.image} />
            </div>

            <h2>${item.price}</h2>

            <marquee>
              <h2>{item.title}</h2>
            </marquee>

            <h2>${item.quntity * item.price}</h2>

            <div style={{ display: "flex", gap: "7rem", justifyContent: "end", marginRight: "20px" }}>
              <button className='button' style={{ backgroundColor: "green" }} onClick={() => updateProduct(index, item)}>Update</button>
              <button className='button' onClick={() => removeFromCart(index)}>Remove</button>
            </div>

          </div>)
        }
      </div>

      <div>
        <button className='button' onClick={() => clearCartHandler()}>Clear Cart</button>
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "end", marginTop: "2rem" }}>
        <div className='Purchase'>
          <h1 style={{ color: "yellow" }}>Total Itmes : {totalItems}</h1>
          <h1 style={{ color: "yellow" }}>Total Amout :  ${totalAmount.toFixed(2)}</h1>
          <button onClick={placeOrder} className='button'>Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
