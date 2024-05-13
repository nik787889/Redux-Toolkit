
// //

import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import { removeProducts, clearCart } from '../redux-toolkit/cartSlice'
import { isSelectCart, selectCart, updateCart } from '../redux-toolkit/selectCartSlice'
import Navbar from '../components/Navbar';
import { LiaEdit } from "react-icons/lia";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {

  const navigate = useNavigate()

  const cartProducts = useSelector((state) => state.cart)
  // console.log(cartProducts);

  const dispatch = useDispatch()

  const removeFromCart = (itemId, item) => {
    alert(`Removing ${item.title} from your cart`)
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
        <h4 style={{ color: "#f3075e", marginTop:"10px" }}>  Cart </h4>
      </div>

      <div>
        <div className="cartCard" style={{ color: "yellow", fontWeight: "800", fontSize: "1.3rem", }}>
          <span>Products</span>
          <span>Price</span>
          <span>Title</span>
          <span>Total Price</span>
          <span style={{ display: "flex", gap: "6rem", justifyContent: "end", marginRight: "20px" }}>
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
              <img style={{ height:"50px", width: "50px" }} src={item.image} />
            </div>

            <h5>${item.price}</h5>

            <marquee>
              <h5>{item.title}</h5>
            </marquee>

            <h5>${item.quntity * item.price}</h5>

            <div style={{ display: "flex", gap: "7rem", justifyContent: "end", marginRight: "20px" }}>
              {/* <button className='button' style={{ backgroundColor: "green" }} onClick={() => updateProduct(index, item)}>Update</button>
              <button className='button' onClick={() => removeFromCart(index)}>Remove</button> */}
              <h1 className='update-btn' onClick={() => updateProduct(index, item)}><LiaEdit/></h1>
              <h1 className='delete-btn' onClick={() => removeFromCart(index, item)}><RiDeleteBin5Line/></h1>
            </div>

          </div>)
        }
      </div>

      <div>
        <button className='button' onClick={() => clearCartHandler()}>Clear Cart</button>
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "end", marginTop: "2rem" }}>
        <div className='Purchase'>
          <h5 style={{ color: "yellow" }}>Total Itmes : {totalItems}</h5>
          <h5 style={{ color: "yellow" }}>Total Amout :  ${totalAmount.toFixed(2)}</h5>
          <button onClick={placeOrder} className='button'>Place Order</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
