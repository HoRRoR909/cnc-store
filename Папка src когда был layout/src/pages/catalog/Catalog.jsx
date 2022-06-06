import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';

import CatalogItem from '../../components/catalogItem/CatalogItem'

import './catalog.scss'

const woodTypeLogo = 'https://stavrosdecor.com/uploads/categories/320x240/lbalyasina_310_206.webp'

const Catalog = () => {

  const dispatch = useDispatch()

  const products = useSelector(state => state.productReducer.products)
  const status = useSelector(state => state.productReducer.status)

  const showProducts = () => {
    dispatch(fetchProducts())
  }

//   useEffect(() => {
//     dispatch(fetchProducts())
// }, [dispatch])

  useEffect(() => {
    console.log(status)
  }, [status])

 
  useEffect(() => {
    console.log(products)
  }, [products])
 

  return (
    <div className="catalog_wrapper">
      <h2 >Декор из дерева:</h2>
      <button onClick={showProducts}>Button</button>
      <ul className="wood_ul">
        {status==='loading' ? <h2 >LOADING...</h2>  : null}
        {status==='resolved' ? products.map((product) => (
          <CatalogItem key={product.id} {...product} />
        ))  : null}
      </ul>
    </div>
  )
}

export default Catalog

// switch (status) {
//   case "loading":
      
//     break
//   case "resolved":
//     products.map((product) => (
//       <CatalogItem key={product.id} {...product} />
//     ))
//     break

 
//   default:
//     console.log("Sorry, we are out of");
// }