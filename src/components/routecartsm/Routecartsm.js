import React from 'react';
import '../routecartsm/Routecartsm.css';

function Routecartsm(props) {
  return (
    <div className="routecartsm">
        <img className="routecartsm__img" src={props.img} alt=""/>
            <div className="boatcart__features">
                <h4 className="routecartsm__route-header">Маршрут из {props.nameofroute}</h4>

                    <div className="routecartsm__features-descr">
                        <ol className="routecartsm__list" type="1">
                            <li className="routecartsm__item">
                               sadsadsa
                            </li>

                            <li className="routecartsm__item">
                               sdasdsada
                            </li>
                            <li className="routecartsm__item">
                               dsaasd
                            </li>
                           
                        </ol>


                    </div>

                    <div className="routecartsm__about">
                        <div className="routecartsm__about-time">
                            <img className="routecartsm__about-img"src="/img/ico/routes/clock.svg" alt="" />
                            <p className="routecartsm__about-descr">В пути:</p>
                            <p className="descr__time">{props.time}</p>
                        </div>

                        <div className="routecartsm__about-entertainment">
                            <img className="routecartsm__about-img" src="/img/ico/routes/mountains.svg" alt="" />
                            <p className="routecartsm__about-descr">Развлечения:</p>
                            <p className="descr__entertainment">{props.activity}</p>
                        </div>
                    </div>

                    
            </div>
    </div>
  );
}

export default Routecartsm;
