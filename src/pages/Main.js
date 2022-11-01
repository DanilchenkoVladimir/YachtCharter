import React, { useState } from 'react';
import Hero from '../components/hero/Hero';
import Citybutton from '../sections/Citybutton';
import Boatcard from '../components/boatcard/Boatcard';
import Howtoorder from '../sections/Howtoorder';
import Servicescart from '../components/servicescart/Servicescart';
import About from '../sections/About';
import SectionTemplate from '../sections/SectionTemplate';

import Routecartsm from '../components/routecartsm/Routecartsm';
import Questions from '../sections/Questions';

import { boats } from '../Data';
import { services } from '../Data';
import { routes } from '../Data';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Main() {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
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

const [filtered, setFiltered] = useState(boats)

  function filterRegion(region) {
    if(region === 'crimea') {
      let crimeaBoats = [...boats].filter( boat => boat.region === region)
        setFiltered(crimeaBoats)
    } else {
        let sochiBoats = [...boats].filter( boat => boat.region === region)
        setFiltered(sochiBoats)
    }
  }


    return (
    <>
        <Hero />
        {/* <Citybutton /> */}

        <div className="citybutton">
            <div className="container">
            <div className="city__main">
                <h3 className="city__main-header">Выберите город </h3>
                    <div className="city__main-buttons">
                    <div className="main__button">
                        <a className="main__button-link" onClick={ ()=>filterRegion('crimea')} href="#id">
                      <img className="main__button-img" src="/img/Crimea1.png" alt="" />
                        </a>
                    </div>
                  
                    <div className="main__button">
                        <a className="main__button-link" onClick={ ()=>filterRegion('sochi')} href="#id">
                      <img className="main__button-img" src="/img/Sochi.png" alt="" />
                        </a>
                    </div>
                    </div>
            </div>
            </div>
        </div>

        <SectionTemplate 
            headerText="Популярные яхты"
            linkText="Открыть каталог"
        />
        <div className="container">
            <div className="sectionTemplate-slider">
                <Slider {...settings}>
                    {filtered.map((obj) => (
                        <Boatcard
                            key={obj.id}
                            name={obj.name}
                            boatImg={obj.boatImg}
                            home={obj.home}
                            passenger={obj.passenger}
                            width={obj.width}
                            class={obj.class}
                            priceNew={obj.priceNew}
                            priceOld={obj.priceOld}
                        />
                    ))}
                </Slider>        
            </div>
        </div>

        <Howtoorder />
        
        <SectionTemplate 
            headerText="Дополнительные услуги"
            linkText="Открыть каталог"
        />
            <div className="container">
                <div className="sectionTemplate-slider">
                    <Slider {...settings}>
                        {services.map((obj) => (
                            <Servicescart 
                                key={obj.id}
                                serviceImg={obj.serviceImg}
                                service={obj.service}
                                about={obj.about}
                                price={obj.price}
                                option={obj.option}
                            />
                        ))}
                    </Slider>
                </div>
            </div>

        <About />

        <SectionTemplate 
            headerText="Популярные маршруты"
            linkText="Все маршруты"
        />
        <div className="container">
            <div className="sectionTemplate-slider">
                <Slider {...settings}>
                    {routes.map((obj) => (
                        <Routecartsm
                            key={obj.id}
                            nameofroute={obj.nameofroute}
                            img={obj.routeImg}
                            time={obj.time}
                            activity={obj.activity}
                        />
                    ))}
                </Slider>        
            </div>
        </div>

        <Questions />
    </>
  );
}

export default Main;