import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'

import './productList.scss'

// const productListLogo = 'https://stavrosdecor.com/uploads/products/320x400/L-119_22865.webp'

const ProductList = () => {
  const {type} = useParams()

  const [productType, setProductType] = useState(null)

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/HoRRoR909/cnc-json/productItems?type=${type}`)
      .then(res => res.json())
      .then(data => setProductType(data))
  }, [type])

  return (
    <div className="product_list_wrapper">
      <h1>{type}</h1>
      {productType && (
        <ul className="product_list_ul">
          {productType.map((product) => (
            <Link key={product.id} to={`/catalog/${type}/${product.name}`}>
              <li  className="product_list_item">
                <img width="320" height="400" src={product.imageUrl} alt="plus" />
                <p>{product.name}</p>
              </li>
            </Link>
          ))}
        </ul> 
      )}
    </div>
  )
}

export default ProductList



// {/* <>
//           <img width="320" height="400" src={productType.imageUrl} alt="plus" />
//           <h1>{productType.name}</h1>
//           <p>{productType.type}</p>
//         </> */}

