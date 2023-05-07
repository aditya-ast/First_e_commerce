import React from 'react';
import {useSelector } from 'react-redux';
import {useDispatch } from 'react-redux';
import {delItem} from '../Redux/action/index'
import Product from './Product';

function Cart() {

  const state = useSelector((state)=> state.addItem)
  const dispatch = useDispatch()

  const cartItems = (cartItems) => {
    return (
      <div className='px-4 my-5 bg-light rounded-3' key={...}>
        <div className='container py-4'>
          <button className='btn-close float-end' aria-label="Close"></button>
          <div className='row justify-content-center'>
            <div className='col-md-4'>
              <img src={...} alt={...} height="200px" width="180" />
            </div>
          <div className='col-md-4'>
            <h3></h3>
          </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>

    </div>
  )
}

export default Cart