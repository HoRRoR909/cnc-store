import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addCartProduct, cartProductCount } from '../../redux/cartSlice'

import './productPage.scss'

const productImage = 'https://stavrosdecor.com/uploads/products/L-119_22865.jpg'

const ProductPage = () => {
  const dispatch = useDispatch()

  const [product, setProduct] = useState(null)
  const [count, setCount] = useState(0)

  const {name} = useParams()

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/HoRRoR909/cnc-json/productItems?name=${name}`)
      .then(res => res.json())
      .then(data => setProduct(data[0]))
  }, [name])

  const plus = () => {
    setCount(count + 1)
    setProduct(() => {
      return {
        ...product, count: count + 1,
      }
    }) 
  }

  const minus = () => {
    setCount(count - 1)
    setProduct(() => {
      return {
        ...product, count: count - 1,
      }
    }) 
  }

  const addToCart = () => {
    dispatch(addCartProduct(product))
  }

  // setProduct(product[0].count = count)
  

  return (
    <>
      {product && (
      <div className="product_wrapper">
        <div className="product_image">
          <img width="364" height="500" src={product.imageUrl} alt="plus" />
        </div>
        <div className="product_description">
          <p>{name}</p>
          <p>{product.price}</p>
          <div className="product_count">
            
            <button  className="less" onClick={minus}>&nbsp;--&nbsp;</button>
            <p>{count}</p>
            <button className="more" onClick={plus}>&nbsp;+&nbsp;</button>
          </div>
          <button className="in_cart" onClick={addToCart}>Добавить в корзину</button>
        </div>
      </div>
      )}
    </>
  )
}

export default ProductPage