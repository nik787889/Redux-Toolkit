
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isProduct } from '../redux-toolkit/filterSlice';
// import { isProduct, mansFilter } from '../redux-toolkit/filterSlice';
import { allProducts } from '../redux-toolkit/filterSlice';

const FilteredProducts = () => {

    const dispatch = useDispatch()

    const productsData = useSelector(state => state.product.data)


    function selectHandle(e) {

        if (e.target.value === 'allProducts') {
            e.preventDefault()
            dispatch(allProducts(productsData))
            dispatch(isProduct(false))

        } else {
            e.preventDefault()
            const filterData = productsData.filter(i => i.category == e.target.value)
            dispatch(allProducts(filterData))
            dispatch(isProduct(false))

        }
    }

    useEffect(() => {

    }, [])



    return (


        <div >
            <select onChange={(e) => selectHandle(e)} style={{ width: "175px", height: "42px", paddingLeft: "15px", fontSize: "15px", fontWeight: "bolder", borderRadius: "10px", backgroundColor: "#f3075e", color: "white" }}>
                <option value="allProducts" >All Products</option>
                <option value="men's clothing" >Mens Product</option>
                <option value="women's clothing">Womens Product</option>
                <option value="jewelery">Jewellery</option>
                <option value="electronics" >Electronics</option>
            </select>
        </div>


    )
}

export default FilteredProducts
