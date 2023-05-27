import React from 'react'
import './Item.css'

const Item = ({ product }) => {

  return (
    <div className='productInfo'>
      <img id="productImg" src={product.img} />
      <h4 id="productName">{product.name}</h4>
      <p id="productSize">Talla: {product.size}</p>
      <p id="productStock">Stock: {product.stock}</p>
      <button>Ver Detalle</button>
    </div>
  )
}

export default Item