import React from 'react'

import './productPage.scss'

const productImage = 'https://stavrosdecor.com/uploads/products/L-119_22865.jpg'

const ProductPage = () => {
  return (
    <div className="product_wrapper">
      <div className="product_image">
        <img width="364" height="500" src={productImage} alt="plus" />
      </div>
      <div className="product_description">
        <div className="product_count">
          <button className="less">&nbsp;--&nbsp;</button>
          <p>2</p>
          <button className="more">&nbsp;+&nbsp;</button>
        </div>
        <button className="in_cart">Добавить в корзину</button>
      </div>
    </div>
  )
}

export default ProductPage