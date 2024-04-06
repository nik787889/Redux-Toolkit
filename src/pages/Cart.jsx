
// //

import React from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux'
import { removeProducts } from '../redux-toolkit/cartSlice'
import { isSelectCart, selectCart, updateCart } from '../redux-toolkit/selectCartSlice'
import Navbar from '../components/Navbar';

const Cart = () => {

  const navigate = useNavigate()

  const cartProducts = useSelector((state) => state.cart)

  const dispatch = useDispatch()

  const removeFromCart = (itemId) => {
    dispatch(removeProducts(itemId))
  }

  const updateProduct = (index, product) => {
    // console.log(index, product)
    dispatch(updateCart(product))
    dispatch(isSelectCart(true))
    navigate('/selectCart')
  }


  return (
    <div>

      <Navbar />

      <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%" }}>
        <FaCartPlus style={{ height: "88px", width: "44px", color: "#f3075e" }} />
        <h1 style={{ color: "#f3075e" }}>  Cart </h1>
      </div>



      <div className="cartWrapper">

        {

          cartProducts.map((item, index) => <div key={item.id} className='cartCard'>

            <img src={item.image} />

            <h1>Qty:{item.quntity}</h1>

            <h3>{item.title}</h3>

            <h2>{item.price}</h2>

            {/* <div style={{ display: "flex", marginRight: "20px" }}>
              
            </div> */}

            <div style={{ display: "flex", gap: "3rem", justifyContent: "end", marginRight: "20px" }}>
              <button className='btn' style={{ backgroundColor: "green" }} onClick={() => updateProduct(index, item)}>Update</button>
              {/* <button className='btn' onClick={() => removeFromCart(item.id)}>Remove</button> */}
              <button className='btn' onClick={() => removeFromCart(index)}>Remove</button>
            </div>

          </div>)

        }


        {/* (
        <Table className='cartCardTable' striped bordered hover >
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              cartProducts.map((item, index) => (
                <tr>
                  <td><img src={item.image} /></td>
                  <td><h1>Qty:{item.id}</h1></td>
                  <td><h3>{item.title}</h3></td>
                  <td><h2>{item.price}</h2></td>
                  <td><div style={{ display: "flex", gap: "3rem", justifyContent: "end", marginRight: "20px" }}>
                    <button className='btn' style={{ backgroundColor: "green" }} onClick={() => updateProduct(index, item)}>Update</button>
                    <button className='btn' onClick={() => removeFromCart(index)}>Remove</button>
                  </div></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        ); */}

      </div>

    </div>
  )
}

export default Cart
