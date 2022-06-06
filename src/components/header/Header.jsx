import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../resources/img/logo.svg'
import doubleGis from '../../resources/img/icons/2gis.png'
import instagram from '../../resources/img/icons/instagram.png'
import telegram from '../../resources/img/icons/telegram.png'
import vk from '../../resources/img/icons/vk.png'
import whatsapp from '../../resources/img/icons/whatsapp.png'

import './header.scss'

const Header = () => {
  return (
    <div className='header_wrapper'>
      <ul className='header_ul'>
        <li className='logo'>
        <Link to="/"><img width="256" height="100" src={logo} alt="logo" /></Link>
          
        </li>
        <li className='adress'>г. Томск <br/>
          ул. Мичурина 110 ст. 1 <br/>
          +7 900 900 99 99 <br/>
          user12345@gmail.com
        </li>
        <li className='adress'>
          Режим работы: <br/>
          пн-пт: 08:00 - 17:00 <br/>
          сб: 09:00 - 15:00 <br/>
          вс: выходной
        </li>
        <li className='socials_li'>
          <button className='add_product'>Добавить товары</button>
          <ul className="socials">
            <li>
              <a href="https://2gis.ru/tomsk" target="_blank" rel="noreferrer">
                <img width="30" height="30" src={doubleGis} alt="plus" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <img width="30" height="30" src={instagram} alt="plus" />
              </a>
            </li>
            <li>
              <a href="https://web.telegram.org/" target="_blank" rel="noreferrer">
                <img width="30" height="30" src={telegram} alt="plus" />
              </a>
            </li>
            <li>
              <a href="https://vk.com/" target="_blank" rel="noreferrer">
                <img width="30" height="30" src={vk} alt="plus" />
              </a>
            </li>
            <li>
              <a href="https://web.whatsapp.com" target="_blank" rel="noreferrer">
                <img width="30" height="30" src={whatsapp} alt="plus" />
              </a>
            </li>
            
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Header