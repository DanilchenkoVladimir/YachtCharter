import React from 'react';
import '../routecartlg/routecartlg.css';

function Routecartlg(props) {
  return (
    <div className="routecard__lg">
        <div className="routecard__lg-features">
            <h4 className="routecard__lg-header">Маршрут из Балаклавы №1</h4>

                    <div className="routecard__lg-descr">
                        <ol className="routecartsm__list" type="1">
                            <li className="routecard__lg-item">
                               Васили пляж
                            </li>

                            <li className="routecard__lg-item">
                               Мыс Фиолент
                            </li>
                            <li className="routecard__lg-item">
                               грот Дианы
                            </li>
                        </ol>
                    </div>

                    <div className="routecartsm__about">
                        <div className="routecartsm__about-time">
                            <img className="routecartsm__about-img"src="/img/ico/routes/clock.svg" alt="" />
                            <p className="routecartsm__about-descr">В пути:</p>
                            <p className="descr__time">3 часа</p>
                        </div>

                        <div className="routecartsm__about-entertainment">
                            <img className="routecartsm__about-img" src="/img/ico/routes/mountains.svg" alt="" />
                            <p className="routecartsm__about-descr">Развлечения:</p>
                            <p className="descr__entertainment">купание, стоянки в живописных местах</p>
                        </div>
                    </div>

                    
        </div>

        <div className="routecard__lg-img">
            <img  src='/img/routes/Balaklava1.png' alt=""/>
            <img  className='polygon' src='/img/routes/polygon1.svg' alt=""/>
            <img  className='polygon2' src='/img/routes/polygon2.svg' alt=""/>
            <img  className='polygon3' src='/img/routes/polygon3.svg' alt=""/>
        </div>

        

    </div>
  );
}

export default Routecartlg;
