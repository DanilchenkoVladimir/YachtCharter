import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import SectionTemplate from '../sections/SectionTemplate';
import Servicescart from '../components/servicescart/Servicescart';
import Reservecalc from '../components/reservecalc/Reservecalc';
import Sliderabout from '../components/sliderabout/Sliderabout';
import Modalreserv from '../components/modalreserv/Modalreserv';

import '../pages/aboutboat.css';
import { services } from '../Data';

function AboutBoat() {
    
  const [items, setItem] = React.useState();
  const { id } = useParams();
  const [buttonPopup, setButtonPopup] = React.useState(false);
  
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

    if (!items){
        return 'loading...';
    }
    
    return (
        <div className="container">
            <div className="aboutboat__main">
                <div className="aboutboat__main-slider">
                    <Sliderabout {...items}/>
                </div>

                <div className="aboutboat__main-info">
                    <div className="aboutboat__header">{items.name}</div>
                    <div className="line"></div>

                    <div className="aboutboat__main-about">
                        <div className="aboutboat__list-wrap">
                            <ul className="aboutboat__list">
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/aboutboat/length.svg" alt=""/>
                                        <p className="aboutboat__item-text">Длинна: 
                                            <span className="aboutboat__item-data"> {items.length}</span>
                                        </p>
                                </li>
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/aboutboat/width.svg" alt=""/>
                                        <p className="aboutboat__item-text">Ширина: 
                                            <span className="aboutboat__item-data"> {items.width}</span>
                                        </p>
                                </li>
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/aboutboat/class.svg" alt=""/>
                                        <p className="aboutboat__item-text">Класс: 
                                            <span className="aboutboat__item-data"> {items.class}</span>
                                        </p>
                                </li>
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/aboutboat/cabin.svg" alt=""/>
                                        <p className="aboutboat__item-text">Кают: 
                                            <span className="aboutboat__item-data"> {items.cabin}</span>
                                        </p>
                                </li>
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/aboutboat/calendar.svg" alt=""/>
                                        <p className="aboutboat__item-text">Год выпуска: 
                                            <span className="aboutboat__item-data"> {items.est}</span>
                                        </p>
                                </li>
                            </ul>
                            <ul className="aboutboat__list">
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/point.svg" alt=""/>
                                        <p className="aboutboat__item-text">Домашний Порт: 
                                            <span className="aboutboat__item-data"> {items.home}</span>
                                        </p>
                                </li>
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/aboutboat/groups.svg" alt=""/>
                                        <p className="aboutboat__item-text">Гости: 
                                                <span className="aboutboat__item-data"> {items.passenger}</span>
                                        </p>
                                </li>
                                <li className="aboutboat__item">
                                    <img className="aboutboat__item-img" src="/img/ico/aboutboat/groups.svg" alt=""/>
                                        <p className="aboutboat__item-text">Крейсерская скорость: 
                                            <span className="aboutboat__item-data"> {items.speed}</span>
                                        </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="line"></div>

                    <div className="reserve__wrap">
                        <div className="aboutboat__button">
                            <a className="aboutboat__button-reserve" href="#id" onClick={() => setButtonPopup(true)}>Забронировать</a>
                        </div>

                        <div className="aboutboat__price">
                            <p className="boatcart__price-new">{items.priceNew.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}/час</p>
                            <p className="boatcart__price-discount">{items.priceOld.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}/час</p>
                        </div>
                    </div>
                </div>
            </div>

            <Modalreserv {...items}   
                trigger={buttonPopup}
                setTrigger={setButtonPopup}
            /><Modalreserv/> 
            <Modalreserv/>              
               
            <Reservecalc {...items}/>

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