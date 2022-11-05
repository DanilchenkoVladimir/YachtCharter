import React from "react";
import axios from 'axios';

import { useParams } from "react-router-dom";

import SectionTemplate from '../sections/SectionTemplate';
import Servicescart from '../components/servicescart/Servicescart';
import Reservecalc from '../components/reservecalc/Reservecalc';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



// import { useState } from "react";
// import { boats } from '../Data';
// import Boatcard from "../components/boatcard/Boatcard";
import '../pages/aboutboat.css';

import { services } from '../Data';




function AboutBoat() {
    
  const [item, setItem] = React.useState();
  const { id } = useParams();
  
  
  React.useEffect(() => {
        async function fetchBoat() {
            try {
                const { data } = await axios.get('https://631f871f22cefb1edc4dd7fd.mockapi.io/items/' + id);
                setItem(data);
            } catch (error) {
                alert('error...');    
            }
        }
        fetchBoat();    
    }, []);

    if (!item){
        return 'loading...';
    }

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
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
    }; //слайдер-настройки

    return (
        
        <div className="container">
            <div className="aboutboat__main">
                <div className="aboutboat__main-slider">
                <img src={item.boatImg} alt=""/>
                </div>

                <div className="aboutboat__main-info">
                    <div className="aboutboat__header">{item.name}</div>
                    <div className="line"></div>

                    <div className="aboutboat__main-about">
                        <div className="aboutboat__list-wrap">
                            <ul className="aboutboat__list">
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/aboutboat/length.svg" alt=""/>
                                        <p className="aboutboat__item-text">Длинна: 
                                            <span className="aboutboat__item-data"> {item.length}</span>
                                        </p>
                                </li>
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/aboutboat/width.svg" alt=""/>
                                        <p className="aboutboat__item-text">Ширина: 
                                            <span className="aboutboat__item-data"> {item.width}</span>
                                        </p>
                                </li>
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/aboutboat/class.svg" alt=""/>
                                        <p className="aboutboat__item-text">Класс: 
                                            <span className="aboutboat__item-data"> {item.class}</span>
                                        </p>
                                </li>
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/aboutboat/cabin.svg" alt=""/>
                                        <p className="aboutboat__item-text">Кают: 
                                            <span className="aboutboat__item-data"> {item.cabin}</span>
                                        </p>
                                </li>
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/aboutboat/calendar.svg" alt=""/>
                                        <p className="aboutboat__item-text">Год выпуска: 
                                            <span className="aboutboat__item-data"> {item.est}</span>
                                        </p>
                                </li>
                            </ul>
                            <ul className="aboutboat__list">
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/point.svg" alt=""/>
                                        <p className="aboutboat__item-text">Домашний Порт: 
                                            <span className="aboutboat__item-data"> {item.home}</span>
                                        </p>
                                </li>
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/aboutboat/groups.svg" alt=""/>
                                        <p className="aboutboat__item-text">Гости: 
                                                <span className="aboutboat__item-data"> {item.passenger}</span>
                                        </p>
                                </li>
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/aboutboat/groups.svg" alt=""/>
                                        <p className="aboutboat__item-text">Крейсерская скорость: 
                                            <span className="aboutboat__item-data"> {item.speed}</span>
                                        </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="line"></div>

                    <div className="reserve__wrap">
                        <div className="aboutboat__button">
                            <a className="aboutboat__button-reserve" href="#id">Забронировать</a>
                        </div>

                        <div className="aboutboat__price">
                            <p className="boatcart__price-new">{item.priceNew} ₽/час</p>
                            <p className="boatcart__price-discount">{item.priceOld} ₽/час</p>
                        </div>
                    </div>
                </div>
            </div>


            <Reservecalc />

            <SectionTemplate 
            headerText="Дополнительные услуги"
            linkText="Открыть каталог"
        />
            
            <div className="container">
                <div className="sectionTemplate">
                    <div className="services__wrap">
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
                    </div>
                        
                    
                </div>
            </div>





        
            
           
           
        </div>
        
        
        
        
        
        


    );
}

export default AboutBoat;