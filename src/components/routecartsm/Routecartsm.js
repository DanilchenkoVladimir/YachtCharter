import React from 'react';
import '../routecartsm/Routecartsm.css';

function Routecartsm(props) {
  return (
    <div className="routecartsm">
        <img className="routecartsm__img" src={props.routeImg} alt=""/>
            <div className="routecartsm__features">
                <div className="routecartsm__wrap">
                    <h4 className="routecartsm__route-header">Маршрут из {props.routeName}</h4>
                        <div className="routecartsm__features-descr">
                            <ol className="routecartsm__list" type="1">
                                {props.routePoints.map((item)=>(
                                    <li className="routecartsm__item">
                                        {item}
                                    </li>
                                ))} 
                            </ol>
                        </div>
                </div>
                    
                <div className="routecartsm__wrap">   
                    <div className="routecartsm__about">
                        <div className="routecartsm__about-time">
                            <img className="routecartsm__about-img"src="/img/ico/routes/clock.svg" alt="" />
                            <p className="routecartsm__about-descr">В пути (часов):</p>
                                <p className="descr__time">{props.travelTime}</p>
                        </div>

                        <div className="routecartsm__about-entertainment">
                            <img className="routecartsm__about-img" src="/img/ico/routes/mountains.svg" alt="" />
                                <p className="routecartsm__about-descr">Развлечения:</p>
                                    <p className="descr__entertainment">
                                        {props.entert.map((item)=>(
                                            <ul>
                                                <li className="routecardsm-nonumlist">{item},</li>
                                            </ul>    
                                        ))}    
                                    </p>
                        </div>
                    </div>
                </div>                    
            </div>
    </div>
  );
}

export default Routecartsm;
