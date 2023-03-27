import React from 'react'
import { Col, Row } from 'react-bootstrap'
import  img1  from "../../assets/image/slide1.jpg"
import  img2  from "../../assets/image/slide2.jpg"
import  img3  from "../../assets/image/slide3.jpg"
import  img4  from "../../assets/image/slide4.jpg"

const images = [
  {id:1 ,img: img1},
  {id:2 ,img: img2},
  {id:3 ,img: img3},
  {id:4 ,img: img4},
]

function Gallery() {
  return (
    <div className="container mt-5 gallery">
      <Row>
        {images.map((img)=>( 
          <Col className='col-lg-3 col-md-6 col-12 gy-4' key={img.id}>
            <img src={img.img} alt="img" />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Gallery