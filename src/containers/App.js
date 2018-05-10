import React from 'react'
import ProductsContainer from './ProductsContainer'
import ModalContainer from './ModalContainer'

const App = () => (
  <div className='acme-store'>
    <div className='title-bar'>
      <ModalContainer />
      <span className='title'>Acme Store</span>
    </div>
    <hr className='line'/>
    <ProductsContainer />
  </div>
)

export default App
