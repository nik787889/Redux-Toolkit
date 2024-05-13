
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Navbar from './components/Navbar';
import SelectCart from './components/SelectCart';
import SignUp from './components/SignUp';
import Signin from './components/SigninPage';
import SidebarComp from './components/SidebarComp';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react'

import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';
import { app } from './firebase';


const firestore = getFirestore(app)


function App() {


  const loggedInUser = useSelector(state => state.users.user)
  const [currentUser, setCurrentUser] = useState('')

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
    if (loggedInUser)
      getUserName().then(resp => setCurrentUser(resp))
  }, [loggedInUser])


  return (
    <div className="App">


      <BrowserRouter>

        {loggedInUser && <Navbar name={currentUser} />}

        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/selectCart' element={<SelectCart />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
          <Route path='/sidebar' element={<SidebarComp />}></Route>

        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;


