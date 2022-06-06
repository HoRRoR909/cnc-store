import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

import Catalog from '../../pages/catalog/Catalog'

import './navBar.scss'

import MainContent from '../mainContent/MainContent'
import Gallery from '../../pages/gallery/Gallery'
import AboutPage from '../../pages/aboutPage/AboutPage'
import ContactsPage from '../../pages/contactsPage/ContactsPage'
import ProductList from '../../pages/productList/ProductList'
import ProductPage from '../../pages/productPage/ProductPage'
import Cart from '../../pages/cart/Cart'
import ErrorPage from '../../pages/errorPage/ErrorPage'

import cart from '../../resources/img/icons/cart.png'

const NavBar = () => {
  return (
    <>
      <div className='navbar_wrapper'>
        <ul className="navbar_ul">
          <Link to="/"><li>Главная</li></Link>
          <Link to="/catalog"><li>Каталог</li></Link>
          <Link to="/gallery"><li>Галерея</li></Link>
          <Link to="/about"><li>О компании</li></Link>
          <Link to="/contacts"><li>Контакты</li></Link>
          {/* <Link to="/productlist"><li>Product-List</li></Link>
          <Link to="/product"><li>Product</li></Link> */}
        </ul>
        <Link to="/cart"><img className='cart' width="30" height="30" src={cart} alt="cart" /></Link>
      </div>
      <div className='content_wrapper'>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/:type" element={<ProductList />} />
        <Route path="catalog/:type/:name" element={<ProductPage />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </div>
    </>
  )
}

export default NavBar