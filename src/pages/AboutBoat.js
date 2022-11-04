import React from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
// import { useState } from "react";
// import { boats } from '../Data';
// import Boatcard from "../components/boatcard/Boatcard";
import '../pages/aboutboat.css';





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

    return (
        
        <div className="container">
            <div className="aboutboat__main">
                <div className="aboutboat__main-slider">
                <img src={item.boatUrl} alt=""/>
                </div>

                <div className="aboutboat__main-info">
                    <div className="aboutboat__header">{item.name}</div>
                    <div className="line"></div>

                    <div className="aboutboat__main-about">
                        <ul className="aboutboat__list">
                                <li className="boatcart__item">
                                    <img className="boatcart__item-img" src="/img/ico/point.svg" alt=""/>
                                    <p className="boatcart__item-text">Длинна: 
                                    <span className="boatcart__item-data"> {item.width}</span>
                                    
                                    </p>
                                    
                                </li>
                                <li className="boatcart__item">
                                    <img className="boatcart__item-img" src="/img/ico/people.svg" alt=""/>
                                    <p className="boatcart__item-text">{item.passenger}</p>
                                </li>
                                <li className="boatcart__item">
                                    <img className="boatcart__item-img" src="/img/ico/boat.svg" alt=""/>
                                    <p className="boatcart__item-text">{item.width}</p>
                                </li>
                                <li className="boatcart__item">
                                    <img className="boatcart__item-img" src="/img/ico/star.svg" alt=""/>
                                    <p className="boatcart__item-text">{item.class}</p>
                                    <p className="boatcart__item-text">{item.home}</p>
                                </li>
                        </ul>
                    </div>
                </div>






            </div>






           <div className="ma">
              
           <div>{item.title}</div>
           <img src={item.boatUrl} alt=""/>
            <div>{item.priceOld}    </div>
            <div>{item.priceNew}    </div>
            <p>{item.class}</p>
            <p>{item.name}</p>
            <img src={item.boatImg} alt=""/>
            
            
            </div> 
            
           
           
        </div>
        
        
        
        
        
        


    );
}

export default AboutBoat;