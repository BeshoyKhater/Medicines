import { Button, ButtonGroup, Divider } from '@mui/material'
import React, { useEffect, useReducer, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch } from "react-redux"
import { deleteFromCart } from '../../../store/slices/cartSlice'


const initialState = 1 
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
          return state + 1
        case 'decrement':
          if(state > 1){
            return state - 1
          }else {
            return state
          }
        default:
          return state ;
    }
}

function CartItem({key, img, name, price, item}) {
  const diSpatch = useDispatch()
  const [count, dispatch] = useReducer(reducer,initialState)
  const [totalPrice,setTotalPrice] = useState(price)
  useEffect(() => {
    setTotalPrice(price * count)
  }, [count, price]);
  return (
          <div className='card_list' key={key}>
              <div className="cart_content d-flex align-items-center">
                  <div className="img me-3">
                      <img src={img} alt="img" />
                  </div>
                  <div className="details">
                      <p>{item.name}</p>
                      <small>Unit Price ${price}</small>
                      <div className="price d-flex align-items-center">
                          <div className="qty me-md-3 me-2 ">
                            <ButtonGroup variant="contained" color="secondary" aria-label="outlined button group">
                              <Button onClick={()=>dispatch("increment")}><AiOutlinePlus /></Button>
                              <Button disabled>{count}</Button>
                              <Button onClick={()=>dispatch("decrement")}><AiOutlineMinus /></Button>
                            </ButtonGroup>
                          </div>
                          <div className="price_title">${totalPrice.toFixed(2)}</div>
                      </div>
                  </div>
                  <Button className='delete' variant="contained" color="error" onClick={()=>diSpatch(deleteFromCart(item))}><RiDeleteBin5Line /></Button>
              </div>
              <Divider />
          </div>
  )
}

export default CartItem