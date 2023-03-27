import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { TiShoppingCart } from "react-icons/ti";
import { Badge } from '@mui/material';
import { Link } from "react-router-dom"
import CartItem from './CartItem';


function CartPro() {
  const [state, setState] = useState({right:false});

  const toggleDrawer = (anchor, open) => (event) => {
    return setState({ state, [anchor]: open });
  };


  const list = () => (
    <Box
      sx={{ width:400 }}
      role="presentation"
    >
      <>
        <div className="title mt-4 text-center">
            <h2>Shopping Cart</h2>
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <div className="d-flex justify-content-center">
          <div className="checkOut">
              <span>Priced To Checkout</span>
              <span className='price'>$888</span>
          </div>
        </div>
      </>
    </Box>
  );

  return (
    <>
    <div>
        <React.Fragment>
          <Badge onClick={toggleDrawer(state, true)} badgeContent={4} color="error">
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