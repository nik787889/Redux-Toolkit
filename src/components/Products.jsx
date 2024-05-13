
// // 
// import LoadingIcons from 'react-loading-icons'
import RingLoader from 'react-spinners/RingLoader'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProducts } from '../redux-toolkit/cartSlice'
import { fetchProducts } from '../redux-toolkit/productSlice'
import { STATUSE } from '../redux-toolkit/productSlice'
import { isSelectCart, selectCart } from '../redux-toolkit/selectCartSlice'
import { useNavigate } from 'react-router-dom'


const Products = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    // const data = useSelector((state) => state.product.data)
    // const status = useSelector((state) => state.product.data)
    // // or
    const { data, status } = useSelector((state) => state.product)

    const selectisProduct = useSelector((state) => state.filter.isProduct)

    const filteredProduct = useSelector((state) => state.filter.filterData)

    const isSearchProduct = useSelector((state) => state.filter.isSearch)

    const searchProduct = useSelector((state) => state.filter.searchQuery)
    // console.log(searchProduct);



    useEffect(() => {

        dispatch(fetchProducts())

    }, [])

    const addToCart = (item) => {
        // dispatch(addProducts(item))
        dispatch(selectCart(item))
        dispatch(isSelectCart(false))
        navigate('/selectCart')

    }

    const filteredProducts = data.filter(item => item.title.toLowerCase().includes(searchProduct.toLowerCase()));

    if (status === STATUSE.LOADING) {
        return <div style={{ display: "flex", height: "50vh", justifyContent: "center", alignItems: "center" }}> <RingLoader color="#00d6ff" /></div>
    }

    if (status === STATUSE.ERROR) {
        return <h1 style={{ color: "red", display: "flex", justifyContent: "center" }}> Oops ... ! Somthing Went Wrong  </h1>
    }



    // //--------------------------// //
    if (selectisProduct === false) {

        return (
            // <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
            //     {
            //         data.map((item) => {
            //             return (
            //                 <div className='card' style={{ boxShadow: "20px 15px 17px 0px rgb(115 38 67)" }} key={item.id}>
            //                     <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            //                         <img src={item.image} alt={item.title} />
            //                     </div>
            //                     <h4>{item.title}</h4>
            //                     <h3 style={{color:"#9ceb9c"}}>Price : ${item.price}</h3>
            //                     <button className='button' onClick={() => addToCart(item)}> Buy Now </button>
            //                 </div>
            //             )
            //         })
            //     }
            // </div>


             // //Working on New CSS.
            <div style={{ display: 'flex', flexWrap:"wrap", justifyContent:"center", alignItems:"center", gap:'3rem' }}>
                {
                    data.map((item) => {
                        return (<>
                            <div className="product-main-container" >
                                <div className="product-container"  >
                                    <div className='img-container'>
                                        {/* <span className='img-span'>11%</span> */}
                                        <img src={item.image} className='product-img' alt="" />
                                    </div>
                                    <div className='product-info'>
                                        <p>{item.title}</p>
                                    </div>
                                    <div className='cart-info'>
                                        <span className='cart-price'>${item.price}</span>
                                        <button className='cart-btn' onClick={() => addToCart(item)}>
                                            <svg className='cart-svg' viewBox="0 0 14.4 12">
                                                <g transform="translate(-288 -413.89)">
                                                    <path
                                                        fill="currentColor"
                                                        d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
                                                    />
                                                </g>
                                            </svg>
                                            <span>Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div></>
                        )
                    })
                }
            </div>
        )
    }

    else if (selectisProduct === true) {

        return (
            // <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
            //     {
            //         filteredProduct.map((item) => {
            //             return (
            //                 <div className='card' style={{ boxShadow: "20px 15px 17px 0px rgb(115 38 67)" }} key={item.id}>
            //                     <img src={item.image} alt={item.title} />
            //                     <h4>{item.title}</h4>
            //                     <h3 style={{color:"#9ceb9c"}}>Price : ${item.price}</h3>
            //                     <button className='button' onClick={() => addToCart(item)}> Buy Now </button>
            //                 </div>
            //             )
            //         })
            //     }
            // </div>


             // //Working on New CSS.
            <div style={{  display: 'flex', flexWrap:"wrap",  justifyContent:"center", alignItems:"center", gap:'3rem' }}>
                {
                    filteredProduct.map((item) => {
                        return (<>
                            <div className="product-main-container" >
                                <div className="product-container"  >
                                    <div className='img-container'>
                                        {/* <span className='img-span'>11%</span> */}
                                        <img src={item.image} className='product-img' alt="" />
                                    </div>
                                    <div className='product-info'>
                                        <p>{item.title}</p>
                                    </div>
                                    <div className='cart-info'>
                                        <span className='cart-price'>${item.price}</span>
                                        <button className='cart-btn' onClick={() => addToCart(item)}>
                                            <svg className='cart-svg' viewBox="0 0 14.4 12">
                                                <g transform="translate(-288 -413.89)">
                                                    <path
                                                        fill="currentColor"
                                                        d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
                                                    />
                                                </g>
                                            </svg>
                                            <span>Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div></>
                        )
                    })
                }
            </div>
        )
    }

    ///// This is for filter products by Searching. /////
    if (isSearchProduct === true) {

        return (

            // filteredProducts.map((item) => (

            //     <div className='card' style={{ boxShadow: "20px 15px 17px 0px rgb(115 38 67)" }} key={item.id}>
            //         <img src={item.image} alt={item.title} />
            //         <h4>{item.title}</h4>
            //         <h3 style={{color:"#9ceb9c"}}>Price: ${item.price}</h3>
            //         <button className='button' onClick={() => addToCart(item)}>Buy Now</button>
            //     </div>

            // ))

            // //Working on New CSS.
            filteredProducts.map((item) => (
            <div style={{ display: 'flex', flexWrap:"wrap",  justifyContent:"center", alignItems:"center", gap:'3rem' }}>
                {
                    data.map((item) => {
                        return (<>
                            <div className="product-main-container" >
                                <div className="product-container"  >
                                    <div className='img-container'>
                                        {/* <span className='img-span'>11%</span> */}
                                        <img src={item.image} className='product-img' alt="" />
                                    </div>
                                    <div className='product-info'>
                                        <p>{item.title}</p>
                                    </div>
                                    <div className='cart-info'>
                                        <span className='cart-price'>${item.price}</span>
                                        <button className='cart-btn' onClick={() => addToCart(item)}>
                                            <svg className='cart-svg' viewBox="0 0 14.4 12">
                                                <g transform="translate(-288 -413.89)">
                                                    <path
                                                        fill="currentColor"
                                                        d="M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
                                                    />
                                                </g>
                                            </svg>
                                            <span>Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div></>
                        )
                    })
                }
            </div>
            ))
        )
    }
}


export default Products
