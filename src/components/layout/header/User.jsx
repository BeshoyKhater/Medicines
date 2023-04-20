import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from "react-router-dom"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { MdHelpOutline } from "react-icons/md"
import { BiLogOut } from "react-icons/bi"
import Divider from '@mui/material/Divider';

function User() {
  const userName = localStorage.getItem("userName")
  const navigate = useNavigate()
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLog = () => {
    localStorage.setItem("LoginUser",false)
    navigate("/login")
  }
  return (
    <>
          <Box sx={{ flexGrow: 0 }} className="user">
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Sharp" src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                  <MenuItem onClick={handleCloseUserMenu} className="menu_item">
                    <Box className="box">
                      <Link to="/account">
                        <div className="container_img d-flex align-items-center justify-content-between">
                          <div className="img me-3">
                            <img src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" alt="" />
                          </div>
                          <div className="text">
                              <h5>{userName}</h5>
                              <label htmlFor="">Los Angeles,CA</label>
                          </div>
                        </div>
                      </Link>
                    </Box>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Box textAlign="center">
                      <Link to="/account">
                        <div className="box d-flex justify-content-between align-items-center">
                          <IoSettingsOutline className="icon me-4" />
                          <h5>My Account</h5>
                        </div>
                      </Link>
                    </Box>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Box textAlign="center">
                      <Link to="/">
                        <div className="box d-flex justify-content-between">
                          <BsBagCheck className="icon me-4" />
                          <h5>My Order</h5>
                        </div>
                      </Link>
                    </Box>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Box textAlign="center">
                      <Link to="/">
                        <div className="box d-flex justify-content-between align-items-center">
                          <AiOutlineHeart className="icon me-4" />
                          <h5>Wishlist</h5>
                        </div>
                      </Link>
                    </Box>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Box textAlign="center">
                      <Link to="/account">
                        <div className="box d-flex justify-content-between align-items-center">
                          <MdHelpOutline className="icon me-4" />
                          <h5>Help</h5>
                        </div>
                      </Link>
                    </Box>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Box textAlign="center">
                      <button onClick={handleLog}>
                        <div className="box d-flex justify-content-between align-items-center">
                          <BiLogOut className="icon me-4" />
                          <h5>Log Out</h5>
                        </div>
                      </button>
                    </Box>
                </MenuItem>
            </Menu>
          </Box>
    </>
  )
}

export default User