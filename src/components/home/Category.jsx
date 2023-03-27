import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
        <button className="next">
            <IoIosArrowForward className="icon" />
        </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
        <button className="prev">
            <IoIosArrowBack className="icon" />
        </button>
    </div>
  );
}

function Category() {
       var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 2,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
      ]
    };
  return (
            <div className="container category mt-5">
                 <Slider {...settings}>
                    {category.map((item)=>(
                        <div className="container_box text-center" key={item.id}>
                            <div className="boxItems">
                                <img src={item.cover} alt="" />
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))}
                 </Slider>
            </div>
  )
}
const ca1=require("../../assets/image/ca1.jpg")
const ca2=require("../../assets/image/ca2.jpg")
const ca3=require("../../assets/image/product12.jpg")
const ca4=require("../../assets/image/product17.jpg")
const ca5=require("../../assets/image/product9.jpg")

const category = [
  {
    id: 1,
    title: "face & skin care",
    cover:ca1,
  },
  {
    id: 2,
    title: "baby care",
    cover: ca2,
  },
  {
    id: 3,
    title: "beauty care",
    cover: ca3,
  },
  {
    id: 4,
    title: "contraceptive",
    cover: ca2,
  },
  {
    id: 5,
    title: "feminine hygiene",
    cover: ca1,
  },
  {
    id: 6,
    title: "health & protein",
    cover: ca4,
  },
  {
    id: 7,
    title: "health & wellness",
    cover: ca1,
  },
  {
    id: 8,
    title: "medicine & first aid",
    cover: ca2,
  },
  {
    id: 9,
    title: "oral care",
    cover: ca5,
  },
  {
    id: 10,
    title: "Pregnacy",
    cover: ca2,
  },
  {
    id: 11,
    title: "sexual well-being",
    cover: ca1,
  },
  {
    id: 12,
    title: "Household",
    cover: ca2,
  },
]

export default Category