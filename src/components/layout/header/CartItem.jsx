import { Button, ButtonGroup, Divider } from '@mui/material'
import React, { useEffect, useReducer, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch } from "react-redux"
import { decrement, deleteFromCart, increment } from '../../../store/slices/cartSlice'



function CartItem({item}) {
  const diSpatch = useDispatch()
  return (
          <div className='card_list'>
              <div className="cart_content d-flex align-items-center">
                  <div className="img me-3">
                      <img src={item.cover} alt="img" />
                  </div>
                  <div className="details">
                      <p>{item.name}</p>
                      <small>Unit Price ${item.price}</small>
                      <div className="price d-flex align-items-center">
                          <div className="qty me-md-3 me-2 ">
                            <ButtonGroup variant="contained" color="secondary" aria-label="outlined button group">
                              <Button onClick={()=>diSpatch(increment(item.id))}><AiOutlinePlus /></Button>
                              <Button disabled>{item.qty}</Button>
                              <Button onClick={()=>diSpatch(decrement(item.id))}><AiOutlineMinus /></Button>
                            </ButtonGroup>
                          </div>
                          <div className="price_title">${(item.price * item.qty).toFixed(2) }</div>
                      </div>
                  </div>
                  <Button className='delete' variant="contained" color="error" onClick={()=>diSpatch(deleteFromCart(item))}><RiDeleteBin5Line /></Button>
              </div>
              <Divider />
          </div>
  )
}

export default CartItem