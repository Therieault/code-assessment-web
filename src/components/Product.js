import React from 'react'
import PropTypes from 'prop-types'
import image from '../assets/Bitmap.jpg'
require('../styles/styles.css')


var Product = ({ price, inventory, title }) => (
  <div className='product-container'>
   <img className='product-image' src = {image} alt='product' width='423'/>
    <div className ='product-info'>
      <div className ='product-headline'>
        <span className='product-title'>{title}</span>
        <span className= 'product-price'>  &#36;{price}</span>
      </div>
      <div className='product-inventory-container'>
        <span className='product-inventory'> {inventory ? ` ${inventory} REMAINING`: null} </span>
    </div>
  </div>
</div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
