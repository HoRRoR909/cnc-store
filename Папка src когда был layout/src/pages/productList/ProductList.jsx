import React from 'react'

import './productList.scss'

const productListLogo = 'https://stavrosdecor.com/uploads/products/320x400/L-119_22865.webp'

const ProductList = () => {
  return (
    <div className="product_list_wrapper">
      <h2 >Декор из дерева:</h2>
      <ul className="product_list_ul">
        <li className="product_list_item">
        <img width="320" height="400" src={productListLogo} alt="plus" />
            <p>Балясина 01</p>
        </li>
        <li className="product_list_item">
        <img width="320" height="400" src={productListLogo} alt="plus" />
            <p>Балясина 01</p>
        </li>
        <li className="product_list_item">
        <img width="320" height="400" src={productListLogo} alt="plus" />
            <p>Балясина 01</p>
        </li>
        <li className="product_list_item">
        <img width="320" height="400" src={productListLogo} alt="plus" />
            <p>Балясина 01</p>
        </li>
        <li className="product_list_item">
        <img width="320" height="400" src={productListLogo} alt="plus" />
            <p>Балясина 01</p>
        </li>
        <li className="product_list_item">
        <img width="320" height="400" src={productListLogo} alt="plus" />
            <p>Балясина 01</p>
        </li>
        
        
        
      </ul>
    </div>
  )
}

export default ProductList