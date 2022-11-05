import React from "react";
import Slider from "react-slick";

function Sliderabout(props){
   const baseUrl = `${props.base}`;
   console.log(props);
   
    const settings = {
       
      customPaging: function(i) {
        
        return (
          <a>
            <img src={`${baseUrl}/${props.group}${i + 1}.jpg`} />
          </a>
        );
      },
      arrows: false,
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplaySpeed: 2000
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={baseUrl + `/${props.group}1.jpg`} />
          </div>
          <div>
            <img src={baseUrl + `/${props.group}2.jpg`} />
          </div>
          <div>
            <img src={baseUrl + `/${props.group}3.jpg`} />
          </div>
          <div>
            <img src={baseUrl + `/${props.group}4.jpg`} />
          </div>
          <div>
            <img src={baseUrl + `/${props.group}5.jpg`} />
          </div>
        </Slider>
      </div>
    );
}

export default Sliderabout;