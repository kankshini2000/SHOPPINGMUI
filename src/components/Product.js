import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import Slider from 'react-slick';
import '../css/item.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const dataDigitalBestSeller = [
    {
      id: 1,
      title: 'Decorative Candle',
      stock:'INSTOCK',
      category: 'Decorative candle starting at Rs199',
      linkImg:require("../images/decor.jpg")
    },
    {
      id: 2,
      title: 'Cushion',
      stock:'INSTOCK',
      category: 'Cushion starting at Rs199',
      linkImg:require("../images/cushion.avif")
    },
    {
      id: 3,
      title: 'Plants and Flowers',
      stock:'INSTOCK',
      category: 'Plants and flower starting at Rs199',
      linkImg:require("../images/plants&flowers.avif")
    },
    {
      id: 4,
      title: 'BedSheets',
      stock:'INSTOCK',
      category: 'BedSheets starting at Rs199',
      linkImg:require("../images/BedSheets.avif")
    },
    {
      id: 5,
      title: 'Serve Ware',
      stock:'INSTOCK',
      category: 'Serve ware starting at Rs199',
      linkImg:require("../images/serve-ware.avif")
    },
    {
      id: 6,
      title: 'Candle',
      stock:'INSTOCK',
      category: 'Candle starting at Rs199',
      linkImg:require("../images/candle.avif")
    },
  ];

function Product() { 
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        
        responsive: [
          {
            breakpoint: 1084,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div className="App">
        <h1 >Go affordable with festive season</h1>
        <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <div className="card">
              <div className="card-top">
                <h3>{item.title}</h3>
                <img
                  src={
                    item.linkImg
                  }
                  alt={item.stock}
                />
                <h1>{item.stock}</h1>
              </div>
              <div className="card-bottom">
                <h3>{item.category}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
}

export default Product