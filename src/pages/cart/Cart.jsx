import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './cart.scss'

const Cart = () => {

  const cartProducts = useSelector(state => state.cartReducer.cartProducts)

 
  return (
    <div className='cart_wrapper'>
      <div className="legend">
        <p>Название</p>
        <p>Цена, р</p>
        <p>Количество, шт</p>
      </div>
      <ul className="cart_products_ul">
        {cartProducts.map((product) => (
          <li key={product.id}>
            <img width="108" height="150" src={product.imageUrl} alt="plus" />
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.count}</p>
          </li>))
        } 
      </ul>
      <p className='total'>Итого: 1500р</p>
      <Link to={'/catalog'}><button>Продолжить покупки</button></Link>
      <button>Оформить заказ</button>
    </div>
  )
}

export default Cart

