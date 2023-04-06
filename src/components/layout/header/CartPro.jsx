import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { TiShoppingCart } from "react-icons/ti";
import { Badge } from '@mui/material';
import { Link } from "react-router-dom"
import CartItem from './CartItem';
import { useSelector } from "react-redux"



function CartPro() {
  const products=useSelector((state)=>state.cart)
  const [state, setState] = useState({right:false});
  const [totalData, setTotalData] = useState([]);
  const toggleDrawer = (anchor, open) => (event) => {
    return setState({ state, [anchor]: open });
  };
useEffect(() => {
  const totalArr = []
  const cartData = [...products]
  cartData.forEach((el)=>{
    totalArr.push(el.qty * el.price)
  })
  setTotalData(totalArr.length > 0 ? totalArr.reduce((a,b)=> a + b) : 0)
}, [products]);

  const list = () => (
    <Box sx={{ width:400 }} role="presentation">
      <>
        <div className="title mt-4 text-center">
          <h2>Shopping Cart</h2>
        </div>
          {products && products?.map((item)=>(
            <CartItem key={item.id} item={item}/>
          ))}
        <div className="d-flex justify-content-center">
          <div className="checkOut">
            <span>Priced To Checkout</span>
            <span className='price'>$
            {totalData > 0 ? totalData.toFixed(2) : 0}
            </span>
          </div>
        </div>
      </>
    </Box>
  );

  return (
    <>
    <div>
        <React.Fragment>
          <Badge onClick={toggleDrawer(state, true)} badgeContent={products.length} color="error">
            <Link><TiShoppingCart color="action" /></Link>
          </Badge>
          <SwipeableDrawer
            anchor="right"
            open={state[state]}
            onClose={toggleDrawer(state, false)}
            onOpen={toggleDrawer(state, true)}
          >
            {list(state)}
          </SwipeableDrawer>
        </React.Fragment>
    </div>

    </>
  )
}

export default CartPro