
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isProduct } from '../redux-toolkit/filterSlice';
// import { isProduct, mansFilter } from '../redux-toolkit/filterSlice';
import { allProducts } from '../redux-toolkit/filterSlice';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { redirect } from 'react-router-dom';


const FilteredProducts = () => {

    const dispatch = useDispatch()

    const productsData = useSelector(state => state.product.data)
    // console.log(productsData);


    // // Filter Products in Navbar
    // function selectHandle(e) {

    //     if (e.target.value === 'allProducts') {
    //         e.preventDefault()
    //         dispatch(allProducts(productsData))
    //         dispatch(isProduct(true))

    //     } else {
    //         e.preventDefault()
    //         const filterData = productsData.filter(i => i.category == e.target.value)
    //         dispatch(allProducts(filterData))
    //         dispatch(isProduct(true))

    //     }
    // }


    // // Filter Products in Sidebar
    function allProduct(e){
        const filterData = productsData
        dispatch(allProducts(filterData))
        dispatch(isProduct(true))
        // console.log(filterData);
    }

    function mensProduct(e){
        const filterData = productsData.filter(i => i.category ==  "men's clothing")
        dispatch(allProducts(filterData))
        dispatch(isProduct(true))
        // console.log(filterData);
    }

    function womensProduct(e){
        const filterData = productsData.filter(i => i.category ==  "women's clothing")
        dispatch(allProducts(filterData))
        dispatch(isProduct(true))
        // console.log(filterData);
    }

    function jewelery(e){
        const filterData = productsData.filter(i => i.category ==  "jewelery")
        dispatch(allProducts(filterData))
        dispatch(isProduct(true))
        // console.log(filterData);
    }

    function electronics(e){
        const filterData = productsData.filter(i => i.category ==  "electronics")
        dispatch(allProducts(filterData))
        dispatch(isProduct(true))
        // console.log(filterData);
    }



    return (


        <div >
            {/* <select onChange={(e) => selectHandle(e)} style={{ width: "175px", height: "42px", paddingLeft: "15px", fontSize: "15px", fontWeight: "bolder", borderRadius: "10px", backgroundColor: "#f3075e", color: "white" }}>
                <option value="allProducts" >All Products</option>
                <option value="men's clothing" >Mens Product</option>
                <option value="women's clothing">Womens Product</option>
                <option value="jewelery">Jewellery</option>
                <option value="electronics" >Electronics</option>
            </select> */}
    
            <Menu>
              <SubMenu label="Category">
                  <MenuItem onClick={(e)=>allProduct(e)}> All Product </MenuItem>
                  <MenuItem onClick={(e)=>mensProduct(e)}> Mens Product </MenuItem>
                  <MenuItem onClick={(e)=>womensProduct(e)}> Womens Product </MenuItem>
                  <MenuItem onClick={(e)=>jewelery(e)}> Jwellary </MenuItem>
                  <MenuItem onClick={(e)=>electronics(e)}> Electronics </MenuItem>
              </SubMenu>
            </Menu>
        </div>


    )
}

export default FilteredProducts
