import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from '../../components/header/Header'
import NavBar from '../../components/navBar/NavBar'
import Footer from '../../components/footer/Footer'
// import MainContent from '../../components/mainContent/MainContent'

// import ProductList from '../productList/ProductList'
// import ProductPage from '../productPage/ProductPage'


import './mainPage.scss'


const MainPage = () => {
  return (
    <>
      <div className="app">
        <div className="app_container">
          <Header />
          <NavBar />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default MainPage

// {/* <Routes>
//   <Route path="/" element={<MainContent />} />
//   <Route path="catalog" element={<Catalog />} />
//   <Route path="productlist" element={<ProductList />} />
//   <Route path="product" element={<ProductPage />} />
//   <Route path="gallery" element={<Gallery />} />
//   <Route path="about" element={<AboutPage />} />
//   <Route path="contacts" element={<ContactsPage />} />
//   <Route path="cart" element={<Cart />} />
//   <Route path="*" element={<ErrorPage />} />
// </Routes>  */}

// {/* <ProductList />
//     <ProductPage />
//     <Gallery />
//     <AboutPage />
//     <ContactsPage />
//     <Cart />
//     <ErrorPage /> */}
//     {/* <MainContent /> */}

