import React from 'react'
import Category from '../components/home/Category'
import Footer from '../components/home/Footer'
import Gallery from '../components/home/Gallery'
import Order from '../components/home/Order'
import Product from '../components/home/Product'
import Header from '../components/layout/header/Header'

function Home() {
  return (
    <>
      <Header />
      <Gallery />
      <Order />
      <Category />
      <Product />
      <Footer />
    </>
  )
}

export default Home