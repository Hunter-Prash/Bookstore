import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from '../components/Cards';

function Freebook() {

  const [book,setBook]=useState([])
  useEffect(()=>{
      const getBook=async()=>{
          try{
              let res=await axios.get('http://localhost:4001/book')
              res.data=res.data=res.data.filter((i)=>i.category==="Free")
              setBook(res.data)
          }
          catch(err){
              console.log(err)
          }
      }
      getBook()
  },[])

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <>
      <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='m-[30px] py-3' >
          <h1 className='font-bold text-xl pb-2 text-pink-600'>Free Books</h1>
          <p>Discover a wide range of free books, from classics to contemporary bestsellers, all available for you to read and enjoy. </p>
        </div>

        <div>
            <Slider {...settings}>
              {book.map((item)=>{
                return <Cards item={item} key={item.id}/>
              })}
            </Slider>
        </div>
      </div>
    </>
  )
}

export default Freebook
