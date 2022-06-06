import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductTypes } from '../../redux/productTypeSlice';

import './catalog.scss'

const Catalog = () => {

  const dispatch = useDispatch()

  const productTypes = useSelector(state => state.productTypeReducer.productTypes)
  const status = useSelector(state => state.productTypeReducer.status)

  useEffect(() => {
    dispatch(fetchProductTypes())
}, [dispatch]) 
 
  return (
    <div className="catalog_wrapper">
      <h2 >Декор из дерева:</h2>
      <ul className="wood_ul">
        {status==='loading' ? <h2 >LOADING...</h2>  : null}
        {status==='resolved' ? productTypes.map((type) => (
        <Link key={type.id} to={`/catalog/${type.type}`}>
          <li className="woodtype_item">
            <img width="320" height="210" src={type.imageUrl} alt="imageUrl" />
            <p>{type.name}</p>
          </li>
        </Link>)) : null}
        {status==='rejected' ? <h2 >REJECTED...</h2>  : null}
      </ul>
    </div>
  )
}

export default Catalog

// let a = <h2 >LOADING...</h2>

// switch (a) {
//   case 'loading':
//     a = <h2 >LOADING...</h2>
//   break;
//   case 'resolved':
//     a = productTypes.map((type) => (
//       <Link key={type.id} to={`/catalog/${type.type}`}>
//         <li className="woodtype_item">
//           <img width="320" height="210" src={type.imageUrl} alt="imageUrl" />
//           <p>{type.name}</p>
//         </li>
//       </Link>))
//   break;
//   case 'rejected':
//     <h2 >REJECTED...</h2>
//   break;
//   default:
//     a = <h2 >LOADING...</h2>
// }



