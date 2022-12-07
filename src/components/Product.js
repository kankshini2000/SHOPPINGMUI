import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {data} from './data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  

const Product = () => {
    return (
        <div style={{ margin: "60px" }} className="carousel">
          <h2>Go affordable this festive season</h2>
          <Slider
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
            slidesToShow={4}
          >
            {data.map((item) => (
            <div className="card">
              <div className="card-top">
                <h3>{item.title}</h3>
                <img style={{'width':'90%','height':'250px','marginBottom': '10px'}}
                  src={
                    item.linkImg
                  }
                />
                <h1 style={{
                    fontSize: '14px'
                }}>{item.stock}</h1>
              </div>
              <div className="card-bottom">
                <h3 style={{
                    fontSize: '16px',
                }}>{item.category}</h3>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      );
};

export default Product
