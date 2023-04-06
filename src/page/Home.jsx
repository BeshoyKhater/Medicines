import React from 'react'
import Category from '../components/home/Category'
import Gallery from '../components/home/Gallery'
import Order from '../components/home/Order'
import Product from '../components/home/Product'

function Home() {
  return (
    <>
      <Gallery />
      <Order />
      <Category />
      <Product />
    </>
  )
}

export default Home