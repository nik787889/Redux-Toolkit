
// // 
import React, { useMemo } from 'react'
import { IoHome } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaCartPlus } from "react-icons/fa";
import SidebarComp from './SidebarComp';
import SearchProducts from './SearchProducts';


const Navbar = ({ name }) => {

    // // This is for Showing FilterProducts components, if only when user is on Home page. In other page FilterProducts component is Hidden.
    const location = useLocation();
    const showSearchbar = location.pathname === '/'

    // Check if the current location is home or cart
    const isHome = location.pathname === '/';
    const isCart = location.pathname === '/cart';

    // //useSelector is works as "Subscriber". It gives all data from state, When data is changed or updated.
    const productCount = useSelector(state => state.cart)

    const renderName = useMemo(() => (
        <h1 style={{ color: '#00d6ff' }}>{name}</h1>
    ), [name])



    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginRight: "20px", background: "linear-gradient(135deg, #00d2ef, #550120)", boxShadow: "20px 15px 17px 0px rgb(115 38 67)", position: "sticky", top: "-1px", width: "100%", borderRadius: "10px", zIndex: "1" }}>


            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    <SidebarComp />
                </div>
                {/* <div style={{display:"flex", alignItems:"center"}}>
                    <TbBrandRedux style={{ height: "2rem", width: "2rem", marginBottom:"7px", color: "rgb(112 0 137)" }} />
                    <h3 style={{ color: "rgb(112 0 137)" }}>Redux-Toolkit</h3>
                </div> */}
                <div style={{display:"flex", alignItems:"center", marginLeft:"2rem"}}>
                   {renderName}
                </div>
            </div>

            {/* <h1 style={{ color: '#00d6ff' }}>{currentUser}</h1> */}


            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>

                <div>
                    {showSearchbar && <SearchProducts />}
                </div>

                <div style={{ display: "flex" }}>
                    <IoHome className='IoHome' style={{ color: isHome ? '#00d6ff' : '#f3075e' }} />
                    <Link className='navLink' style={{ color: isHome ? '#00d6ff' : '#f3075e' }} to='/'><h5>Home</h5></Link>
                </div>

                <div style={{ display: "flex" }}>
                    <span style={{ color: "yellow", margin: "-20px -15px 0px 0px" }}>{productCount.length}</span>
                    <FaCartPlus className='FaCartPlus' style={{ color: isCart ? '#00d6ff' : '#f3075e' }} />
                    <Link className='navLink' to='/cart'><h5 style={{ color: isCart ? '#00d6ff' : '#f3075e' }}>Cart</h5></Link>
                </div>

            </div>

        </div>
    )
}

export default Navbar
