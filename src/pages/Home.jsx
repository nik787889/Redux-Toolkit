
// //

import React, { useState, useMemo, useEffect } from 'react'
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

import Products from '../components/Products'
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';

import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';
import { app } from '../firebase';
const firestore = getFirestore(app)
const Home = () => {

  const loggedInUser = useSelector(state => state.users.user)
  const [currentUser, setCurrentUser] = useState('')
  // console.log(loggedInUser);

  // // Getting Firestore Data
  const getUserName = async () => {

      const queryData = await getDocs(collection(firestore, 'users'))
      let userData = null
      const data = queryData.forEach((item) => {
          if (item.data().Email === loggedInUser) {
              userData = item.data().FirstName + " " + item.data().LastName
          }
      });

      return userData
  }

  useEffect(() => {
    console.log('---', loggedInUser)
    getUserName().then(resp => setCurrentUser(resp))
}, [])



const renderName = useMemo(() => (
    <h1 style={{ color: '#00d6ff' }}>{currentUser}</h1>
), [currentUser])

  return (
    <>

          {/* <Navbar /> */}

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
