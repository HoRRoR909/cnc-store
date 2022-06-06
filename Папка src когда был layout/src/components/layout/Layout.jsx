import React from 'react'

import { Outlet } from 'react-router-dom'

import Header from '../header/Header'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'

import './layout.scss'

const Layout = () => {
  return (
    <div className="app">
      <div className="app_container">
        <Header />
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default Layout