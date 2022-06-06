import React from 'react'
import { Link } from 'react-router-dom'

import './navBar.scss'

import cart from '../../resources/img/icons/cart.png'

const NavBar = () => {
  return (
    <div className='navbar_wrapper'>
      <ul className="navbar_ul">
        <Link to="/"><li>Главная</li></Link>
        <Link to="/catalog"><li>Каталог</li></Link>
        <Link to="/gallery"><li>Галерея</li></Link>
        <Link to="/about"><li>О компании</li></Link>
        <Link to="/contacts"><li>Контакты</li></Link>
        <Link to="/productlist"><li>Product-List</li></Link>
        <Link to="/product"><li>Product</li></Link>
      </ul>
      <Link to="/cart"><img className='cart' width="30" height="30" src={cart} alt="cart" /></Link>
    </div>
  )
}

export default NavBar