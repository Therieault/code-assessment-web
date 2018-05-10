import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import CartImage from '../assets/shopping-cart-large.jpg'
import Modal from 'react-bootstrap/lib/Modal'
require('../styles/styles.css');


const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        key={product.id}
      />
    )
  ) : (
      <Modal.Body>
      <div className='empty-cart-container'>
        <img src={CartImage} alt='cart' />
        < br />
        <p className='empty-cart-message'>Please add some products</p>
        <p className='empty-cart-message'>to your cart.</p>
      </div>
    </Modal.Body>
  )

  return (
    <div className='cart-container'>
      <div className='cart-nodes'>{nodes}</div>
      <Modal.Footer>
        <p className='cart-total'>Total: &#36;{total}</p>
        <button className = 'checkout-button'
                onClick={onCheckoutClicked}
                disabled={hasProducts ? '' : 'disabled'}> Checkout
        </button>
      </Modal.Footer>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
