import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Typography from '@mui/material/Typography';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data1 } from './data1';
import '../css/item.css'

const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIosIcon style={{ color: "black", fontSize: "30px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIosIcon  style={{ color: "black", fontSize: "30px" }} />
      </div>
    );
  };

  const sliderSettings = {
    dots: true,
    dotsClass: "slick-dots slick-bar",
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
  }
  

const Product = () => {
    return (
        <div style={{ margin: "60px" }} className="carousel">
          <Typography variant="h4" >Top furniture Categories</Typography>
          <Slider {...sliderSettings}
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
          >
            {data1.map((item) => (
            <div className="card">
              <div className="card-top">
                <Typography variant="h6">{item.title}</Typography>
                <img style={{'width':'90%','height':'250px','marginBottom': '10px'}}
                  src={
                    item.linkImg
                  }
                />
                <Typography variant="body1">{item.stock}</Typography>
              </div>
              <div className="card-bottom">
                <Typography variant="subtitle1" bgcolor={'#dfc087'}
                >{item.category}</Typography>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      );
};

export default Product
