import React from 'react'

import './catalogItem.scss'

const woodTypeLogo = 'https://stavrosdecor.com/uploads/categories/320x240/lbalyasina_310_206.webp'

const CatalogItem = ({name}) => {
  

  return (
    <>
      <li className="woodtype_item">
        <img width="320" height="240" src={woodTypeLogo} alt="plus" />
        <p>{name}</p>
      </li>
    </>
  ) 
} 

export default CatalogItem