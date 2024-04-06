
/////////////////////////
import React, { useEffect, useId, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { HiPlusCircle, HiMinusCircle } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { addProducts } from '../redux-toolkit/cartSlice';
import { FcAbout } from 'react-icons/fc'
import { GiCancel } from "react-icons/gi";
import { Link } from 'react-router-dom';

function SelectCart() {

    const [qty, setQty] = useState(0)

    const dispatch = useDispatch()

    const selectCart = useSelector(state => state.selectCart.cartItem)
    const selectUpdateCart = useSelector(state => state.selectCart.isSelectCart)
    const selectQuntity = useSelector(state => state.selectCart.cartItem.quntity)
    const [incQty, setIncQty] = useState(selectQuntity)

    const navigate = useNavigate()

    const [cart, setCart] = useState(selectCart)
    const id = useId()


    const goToCart = () => {
        dispatch(addProducts({ cart: cart, quntity: qty }))
        setCart(cart)
        navigate('/')
    }


    const updateCart = () => {
        navigate('/cart')
    }

    const Inc = () => {
        setQty(qtty => qty + 1)
    }


    const Dec = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    const IncQuntity = () => {
        setIncQty(incQty + 1)
    }

    const DecQuntity = () => {
        // setIncQty(incQty - 1)
        if (qty > 1) {
            setQty(qty - 1)
        }
    }


    // console.log("selectCart", selectCart);

    // useEffect(() => {
    //     setCart(selectCart)
    // }, [])

    if (!selectUpdateCart) {

        return (

            <div style={{ padding: "20px 10px 0 10px", display: "flex", justifyContent: "center", width: "100%" }}>
                <div className='card ' key={cart.id} style={{ display: "block", width: "60%" }}  >

                    <div style={{ display: "flex", float: "right", height: "50px", width: "50px", borderRadius: "25px", alignItems: "center" }}>
                        <Link to="/"> <GiCancel style={{ height: "50px", width: "50px", color: "red" }} /> </Link>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", padding: "10px", gap: "2rem" }}>
                        <img src={cart.image} alt="" style={{ width: "50%", height: "40vh", margin: "0px", padding: "2rem", borderRadius: "40px", boxShadow: " inset 1px 1px 20px 7px rgb(115 38 67)" }} />
                        <div>
                            <h1>About <span><FcAbout /></span> </h1>
                            <h2 style={{ fontWeight: "500" }}> "{cart.description}"</h2>
                        </div>
                    </div>

                    <h2>{cart.title}</h2>

                    <div style={{ fontSize: "2rem", fontWeight: "900" }}>Price: ${cart.price}</div>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <buttton onClick={Dec}> <HiMinusCircle style={{ width: "70px", height: "70px" }} color='red' /> </buttton>
                        <div style={{ fontSize: "3rem", padding: "20px", fontWeight: "900" }}>{qty}</div>
                        <buttton onClick={Inc}> <HiPlusCircle style={{ width: "70px", height: "70px", color: "green" }} /> </buttton>
                    </div>

                    <button className='btn' onClick={() => goToCart()}> Add To Cart </button>

                </div>
            </div>
        )

    } else {

    }

    return (

        <div style={{ padding: "20px 10px 0 10px", display: "flex", justifyContent: "center", width: "100%" }}>
            <div className='card ' key={cart.id} style={{ display: "block", width: "60%" }}  >

                <div style={{ display: "flex", float: "right", height: "50px", width: "50px", borderRadius: "25px", alignItems: "center" }}>
                    <Link to="/cart"> <GiCancel style={{ height: "50px", width: "50px", color: "red" }} /> </Link>
                </div>

                <div style={{ display: "flex", justifyContent: "center", padding: "10px", gap: "2rem" }}>
                    <img src={cart.image} alt="" style={{ width: "50%", height: "40vh", margin: "0px", padding: "2rem", borderRadius: "40px", boxShadow: " inset 1px 1px 20px 7px rgb(115 38 67)" }} />
                    <div>
                        <h1>About <span><FcAbout /></span> </h1>
                        <h2 style={{ fontWeight: "500" }}> "{cart.description}"</h2>
                    </div>
                </div>

                <h2>{cart.title}</h2>

                <div style={{ fontSize: "2rem", fontWeight: "900" }}>Price: ${cart.price}</div>

                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <buttton onClick={DecQuntity}> <HiMinusCircle style={{ width: "70px", height: "70px" }} color='red' /> </buttton>
                    <div style={{ fontSize: "3rem", padding: "20px", fontWeight: "900" }}>{incQty}</div>
                    <buttton onClick={IncQuntity}> <HiPlusCircle style={{ width: "70px", height: "70px", color: "green" }} /> </buttton>
                </div>

                <button className='btn' style={{ backgroundColor: "green" }} onClick={() => updateCart()}> Update </button>

            </div>
        </div>
    )
}

export default SelectCart