import { Alert, Divider } from '@mui/material'
import { Row } from 'react-bootstrap'
import { useParams } from "react-router-dom"
import Loading from '../../components/Loading'
import { useSuperHeroData } from './FetchProduct'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlinePlusCircle} from "react-icons/ai"
import { useDispatch,useSelector } from "react-redux"
import { fetchData } from '../../store/slices/productSlice'
import { addToCart } from '../../store/slices/cartSlice'
import { Button } from '@mui/material'
import toast, { Toaster } from 'react-hot-toast';

export const ViewProduct = () => {
    const { productId } = useParams()
    const { isLoading, data, isError, error }=useSuperHeroData(productId)

    if(isLoading) {
        return <Loading />
    }

    if(isError) {
        return <Alert severity="error">{error.message}</Alert>
    }
  return (
    <div className='view_product'>
        <div className="container">
            <Row className='align-items-center'>
                <div className="col-lg-4 col-12">
                    <div className="img">
                        <img src={data?.data.cover} alt="img" />
                    </div>
                </div>
                <div className="col-lg-8 col-12">
                    <div className="details">
                        <h3>Name: <small>{data?.data.name}</small></h3>
                        <h3>Category: <small>{data?.data.category}</small></h3>
                        <h3>Description: <small>{data?.data.desc}</small></h3>
                        <h3>Price: <small>{data?.data.price}$</small></h3>
                    </div>
                </div>
            </Row>
        </div>
    </div>
  )
}