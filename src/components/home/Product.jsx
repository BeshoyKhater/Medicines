import React from 'react'
import { Link } from 'react-router-dom'
import cover from "../../assets/image/product1.jpg"
import {AiOutlinePlusCircle} from "react-icons/ai"
import { Row } from "react-bootstrap"

function Product() {
  return (
    <div className="container mt-5 product">
        <Row>
            <div className="col-4">
                <div className="boxItems" id="product">
                        <div className="img">
                            <Link>
                                <img src={cover} alt="cover" />
                            </Link>
                        </div>
                        <div className="details">
                            <h3>$100</h3>
                            <p>product1</p>
                            <div className="text-end">
                                <button>
                                    <AiOutlinePlusCircle /> 
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </Row>
    </div>
  )
}

export default Product