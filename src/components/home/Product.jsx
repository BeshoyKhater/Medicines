import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlinePlusCircle} from "react-icons/ai"
import { useDispatch,useSelector } from "react-redux"
import { Row } from "react-bootstrap"
import { fetchData } from '../../store/slices/productSlice'
import { addToCart } from '../../store/slices/cartSlice'
import { Button } from '@mui/material'
import Loading from '../Loading'
import toast, { Toaster } from 'react-hot-toast';


function Product() {
    const dispatch=useDispatch()
    const {products, loading}=useSelector((state)=>state.products);
    useEffect(() => {
        dispatch(fetchData())
    },[dispatch]);

    return (
    <div className="container mt-5 product">
        <Row>
            {loading ? <Loading /> :
                products.map((item)=>(
                    <div className="col-lg-4 col-md-6 col-12 g-3"key={item.id}>
                            <div className="boxItems" id="product">
                                    <div className="img">
                                        <Link to={`product/${item.id}`}>
                                            <img src={item.cover} alt="cover" />
                                        </Link>
                                    </div>
                                    <div className="details">
                                        <p>{item.name}</p>
                                        <h3>${item.price}</h3>
                                            <Button className="add" onClick={()=>[dispatch(addToCart(item)),toast.success('Added successfully!')]}>
                                                <AiOutlinePlusCircle /> 
                                            </Button>
                                    </div>
                            </div>
                    </div>
                ))
            }
            <Toaster
                position="bottom-left"
                reverseOrder={false}
            />
        </Row>
    </div>
  )
}

export default Product