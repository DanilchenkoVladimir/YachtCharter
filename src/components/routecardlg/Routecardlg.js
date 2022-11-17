import React from 'react';
import './routecardlg.css';
import ModalImage from "react-modal-image";

function Routecardlg(props) {
  return (
    <>
    <div className="routecard__lg">
        <div className="routecard__lg-features">
            <h4 className="routecard__lg-header">Маршрут из <br/>{props.routeName}</h4>

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
                            <p className="routecartsm__about-descr">В пути (часа):</p>
                            <p className="routecard__lg-descrtime">{props.travelTime}</p>
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
                id={"Modal__first"}
                className={"modal__first"}
                small={props.polygon04}
                large={props.bigImg04}
                
            />          
            
            <ModalImage
                className={"modal__left"}
                small={props.polygon01}
                large={props.bigImg01}
                
            />

            <ModalImage
                className={"modal__center"}
                small={props.polygon02}
                large={props.bigImg02}
                
            />

            <ModalImage
                className={"modal__right"}
                small={props.polygon03}
                large={props.bigImg03}
                
            />

        </div>
    </div>
    </>
  );
}

export default Routecardlg;
