import React, {Component} from 'react';
import CartContainer from './CartContainer';
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal'
require('../styles/styles.css')


class ModalClass extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }
  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
     this.setState({ show: true });
   }

  render () {
       return (
         <div>
          <div className='cart-empty-container'>
            <span>
              <Button bsStyle="link" className='cart-empty-text' onClick = {this.handleShow}>
              Your cart is empty</Button>
              <div className='cart-empty-icon'></div>
            </span>
         </div>
         <div className='modal-container'>
           <Modal className='modal'
                  show={this.state.show}
                  onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className='cart-title'>Your cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='modal-cart-container'>
                <CartContainer />
              </div>
            </Modal.Body>
           </Modal>
         </div>
        </div>
     )}
  }

export default ModalClass
