import React from 'react'
import { Col, Row } from 'react-bootstrap'

const order = [
  {
    id: 1,
    class:"num1",
    title: "Your Order",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
  {
    id: 2,
    class:"num2",
    title: "Ready Your Order",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
  {
    id: 3,
    class:"num3",
    title: "Packing Your Order",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
  {
    id: 4,
    class:"num4",
    title: "And Deliver",
    desc: "There are many variations of passages of Lorem Ipsum available",
  },
]

function Order() {
  return (
        <div className="container mt-5 ">
            <div className="boxItems">
                <Row className='g-4'>
                    {order.map((item)=>(
                        <div className="col-lg-3 col-md-6 col-12 " key={item.id}>
                            <div className="box text-center" >
                                <div className="num d-flex justify-content-center mb-3">
                                    <h1 className={`${item.class}`}>{item.id}</h1>
                                </div>
                                <div className="text">
                                    <h4 className='mb-3'>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Row>
            </div>
        </div>
  )
}

export default Order