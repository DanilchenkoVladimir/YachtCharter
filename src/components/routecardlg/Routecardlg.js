import React from 'react';
import './routecardlg.css';
import ModalImage from "react-modal-image";

function Routecardlg(props) {
    console.log(props);
  return (
    <>
    <div className="routecard__lg">
        <div className="routecard__lg-features">
            <h4 className="routecard__lg-header">Маршрут из {props.routeName}</h4>

                <div className="routecard__lg-descr">
                    <ol className="routecard__lg-list" type="1">
                        {props.routePoints.map((item)=>(
                            <li className="routecard__lg-item">
                                {item}
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="routecard__lg-about">
                    <div className="routecard__lg-abouttime">
                        <img className="routecartsm__about-img"src="/img/ico/routes/clock.svg" alt="" />
                            <p className="routecartsm__about-descr">В пути:</p>
                            <p className="routecard__lg-descrtime">{props.travelTime} часа</p>
                    </div>

                    <div className="routecard__lg-about-entertainment">
                        <img className="routecartsm__about-img" src={"/img/ico/routes/mountains.svg"} alt="" />
                            <p className="routecartsm__about-descr">Развлечения:</p>
                            <p className="routecard__lg-descrentertainment">
                                {props.entert.map((item)=>(
                                    <ul>
                                        <li className="routecard__lg-nonumlist">{item},</li>
                                    </ul>    
                                ))}
                            </p>
                    </div>
                </div>
        </div>

        <div className="routecard__lg-img">
            <img  src={props.routeImg} alt=""/>
            <ModalImage
            className={"modal"}
    small={props.routeImg}
    large={props.routeImg}
    alt="Hello World!"
    />
            <img  className='polygon' src='/img/routes/polygon1.svg' alt=""/>
            <img  className='polygon2' src='/img/routes/polygon2.svg' alt=""/>
            <img  className='polygon3' src='/img/routes/polygon3.svg' alt=""/>
        </div>
    </div>
    
    </>
  );
}

export default Routecardlg;
