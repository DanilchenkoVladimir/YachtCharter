import React from 'react';
import Hero from '../components/hero/Hero';
import Ports from '../components/ports/Ports';
import Boatcard from '../components/boatcard/Boatcard';
import Howtoorder from '../sections/Howtoorder';
import Servicescart from '../components/servicescart/Servicescart';
import About from '../sections/About';
import SectionTemplate from '../sections/SectionTemplate';
import Routecartsm from '../components/routecartsm/Routecartsm';
import Questions from '../sections/Questions'; 
import { services } from '../Data'; //старый импорт через файл
import '../pages/main.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Main() {
    const [items, setItem] = React.useState([]) //хук useState для рендеринга карточек лодок, массив лодок - items
    const [routes, setRoute] = React.useState([])
    
    React.useEffect(() => {
        fetch('https://631f871f22cefb1edc4dd7fd.mockapi.io/items')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setItem(json);
            });
    }, []);
    
    React.useEffect(() => {
        fetch('https://631f871f22cefb1edc4dd7fd.mockapi.io/routes')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setRoute(json);
            });
    }, []); 

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
    <>
      <Hero />
      <Ports />
    
        <div className="container">
            <SectionTemplate 
                headerText="Все яхты"
                linkText="Открыть каталог"
                linkHref="/rent"
            />
 
            <div className="sectionTemplate-slider">
                <Slider {...settings}>
                    {    
                        items.map((items) => (
                            <Boatcard
                                id={items.id}
                                name={items.name}
                                boatImg={items.boatImg}
                                home={items.home}
                                passengerMax={items.passengerMax}
                                width={items.width}
                                class={items.class}
                                priceNew={items.priceNew}
                                priceOld={items.priceOld}
                                
                            />
                        ))
                    }
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
            linkHref="/paths"
        />

        <div className="container">
            <div className="sectionTemplate-slider">
                <Slider {...settings}>
                    {routes.map((routes) => (
                        <Routecartsm {...routes}/>
                    ))}
                </Slider>        
            </div>
        </div>

        <Questions />
    </>
  );
}

export default Main;