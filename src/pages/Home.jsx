
// //

import React from 'react'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import Products from '../components/Products'
import Navbar from '../components/Navbar';


const Home = () => {
  return (
    <>

          <Navbar/>

    <div>

      {/* <h1 className="heading">Home</h1> */}

      <section>



        <h1 style={{ color: "#f3075e" }}> <MdOutlineProductionQuantityLimits /> Products</h1>

        <Products />

      </section>

    </div>
    </>
  )
}

export default Home
