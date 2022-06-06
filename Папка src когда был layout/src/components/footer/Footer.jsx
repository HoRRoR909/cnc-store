import React from 'react'

import logo from '../../resources/img/logo.svg'

import './footer.scss'

const Footer = () => {
  return (
    <div className='footer_wrapper'>
      <p>© WOODCRAFT. ALL RIGHTS RESERVED. 2022</p>
      <img width="96" height="37" src={logo} alt="logo" />
    </div>
  )
}

export default Footer