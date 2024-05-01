// // 
import { CiSearch } from "react-icons/ci";
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allProducts, isSearch, isProduct, setSearchQuery } from '../redux-toolkit/filterSlice'



const SearchProducts = () => {

    const dispatch = useDispatch()

    const { data } = useSelector((state) => state.product)
    // console.log(data);

    const [search, setSearch] = useState("")

    const searchHandler = (e) => {
        const query = e.target.value
        setSearch(query)
        if (data) {
          const searchData = data.filter(item => item.title.includes(query) || item.description.includes(query) || item.category.includes(query));
            // console.log(searchData);
            dispatch(allProducts(searchData))
        }
        dispatch(setSearchQuery(query))
        dispatch(isSearch(true))
    }


  return (

      <div style={{margin:"14px"}}>
        <div className="search-container">
          <CiSearch className="search-icon"/>
          <input type="text" className="search-input" placeholder='search products' value={search} onChange={searchHandler} />
        </div>
      </div>

  )
}

export default SearchProducts