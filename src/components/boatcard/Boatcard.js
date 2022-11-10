import React from 'react';
import '../boatcard/boatcard.css';
import { Routes, Route, Link } from 'react-router-dom';
import Modalreserv from '../modalreserv/Modalreserv';



function Boatcard(props) {
    const [buttonPopup, setButtonPopup] = React.useState(false);
    

    return (
        <>
        <div className="boatcart">
            <img className="boatcart__img" src={props.boatImg} alt=""/>
                <div className="boatcart__features">
                    <h4 className="boatcart__features-header">{props.name}</h4>
                        <div className="boatcart__features-descr">
                            <ul className="boatcart__list">
                                <li className="boatcart__item">
                                    <img className="boatcart__item-img" src="/img/ico/point.svg" alt=""/>
                                    <p className="boatcart__item-text">{props.home}</p>
                                </li>
                                <li className="boatcart__item">
                                    <img className="boatcart__item-img" src="/img/ico/people.svg" alt=""/>
                                    <p className="boatcart__item-text">{props.passengerMax}</p>
                                </li>
                                <li className="boatcart__item">
                                    <img className="boatcart__item-img" src="/img/ico/boat.svg" alt=""/>
                                    <p className="boatcart__item-text">{props.width}</p>
                                </li>
                                <li className="boatcart__item">
                                    <img className="boatcart__item-img" src="/img/ico/star.svg" alt=""/>
                                    <p className="boatcart__item-text">{props.class}</p>
                                </li>
                            </ul>
                        </div>

                    <div className="boatcart__price">
                        <p className="boatcart__price-new">{props.priceNew} ₽/час</p>
                        <p className="boatcart__price-discount">{props.priceOld} ₽/час</p>
                    </div>

                    <div className="boatcart__buttons">
                    <a className="boatcart__button-reserve" href="#id" onClick={() => setButtonPopup(true)}>Забронировать</a>    
                    <Link className="boatcart__button-about" key={props.id} to={`/boats/${props.id}`}>Подробнее</Link>
                        {/* <a  href="#id" >Забронировать</a>
                       
                        <a className="boatcart__button-about" href="#id">Подробнее</a> */}
                    </div>
                </div>
        </div>
        <Modalreserv {...props}
                
                trigger={buttonPopup}
                setTrigger={setButtonPopup}
            >
                
            </Modalreserv> 

      
    </>
    );
}

export default Boatcard;
