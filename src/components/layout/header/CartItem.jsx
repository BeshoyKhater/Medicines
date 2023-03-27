import { Button, ButtonGroup } from '@mui/material'
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import Img from "../../../assets/image/product1.jpg"

function CartItem() {
  return (
    <div className='card_list'>
        <div className="cart_content d-flex justify-content-between align-items-center">
            <div className="img">
                <img src={Img} alt="img" />
            </div>
            <div className="details">
                <p>Product</p>
                <small>Unit Price $12</small>

                <div className="price d-flex align-items-center">
                    <div className="qty me-md-3 me-2 ">
                      <ButtonGroup variant="contained" color="secondary" aria-label="outlined button group">
                        <Button><AiOutlinePlus /></Button>
                        <Button disabled>2</Button>
                        <Button><AiOutlineMinus /></Button>
                      </ButtonGroup>
                    </div>
                    <div className="price_title">$100</div>
                </div>
            </div>
            <Button variant="contained" color="error"><RiDeleteBin5Line /></Button>
        </div>
    </div>
  )
}

export default CartItem