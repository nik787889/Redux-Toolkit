
import './App.css';
// import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
// import Navbar from './components/Navbar';
import SelectCart from './components/SelectCart';
import SignUp from './components/SignUp';
import Signin from './components/SigninPage';
import SidebarComp from './components/SidebarComp';
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux'

function App() {



  return (
    <div className="App">

     

        <BrowserRouter>

            {/* <Navbar /> */}

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


