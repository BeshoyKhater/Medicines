import React from 'react'
import { Link } from 'react-router-dom'
import User from './User';
import CartPro from './CartPro';
import { AiOutlineSearch } from "react-icons/ai"

function Header() {
  return (
    <nav>
      <div className="container">
        <div className="row align-items-center justify-content-evenly">
          <div className="logo col-md-3">
            <Link to="/">BESHOY</Link>
          </div>
            <div className="search col-md-6">
                <AiOutlineSearch className='searchIcon' />
                <input type="text" placeholder='Search...' />
            </div>
            <div className="account d-flex justify-content-end col-md-3">
                <CartPro />
                <User />
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Header