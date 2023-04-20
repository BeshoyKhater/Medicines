import React from 'react'
import { Link } from 'react-router-dom'
import User from './User';
import CartPro from './CartPro';
import { AiOutlineSearch } from "react-icons/ai"
import { useSelector } from 'react-redux';

function Header() {
      window.addEventListener("scroll",function(){
        this.scrollTo({behavior: "smooth"})
        const nav=this.document.querySelector("nav")
        if(nav) {
          nav.classList.toggle("active",this.window.scrollY >  100)
        }
    })
  return (
    <nav>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="logo col-3">
            <Link to="/">BESHOY</Link>
          </div>
            <div className="search col-6">
                <AiOutlineSearch className='searchIcon' />
                <input type="text" placeholder='Search...' />
            </div>
            <div className="account d-flex justify-content-end col-3">
                <CartPro />
                <User />
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Header