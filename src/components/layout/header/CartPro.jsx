import React, { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { TiShoppingCart } from "react-icons/ti";
import { Badge } from '@mui/material';
import { Link } from "react-router-dom"


function CartPro() {
  const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => () => {
    setState({ state, [anchor]: open });
  };

  const list = () => (
    <Box
      sx={{ width:400 }}
      role="presentation"
    >
      welcome
    </Box>
  );

  return (
    <>
    <div>
        <React.Fragment>
          <Badge onClick={toggleDrawer(state, true)} badgeContent={4} color="primary">
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