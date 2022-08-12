
import React from 'react';
import '../header/header.css';

import { Routes, Route, Link } from 'react-router-dom';
import Rent from '../../pages/Rent';
import Paths from '../../pages/Paths';
import Main from '../../pages/Main';

// import AboutBoat from '../pages/AboutBoat';

function Header() {
  return (
    <>

    <div className="header">
        <div className="container">
            <div className="header__top">
                <div className="header__top-logo">
                    <Link to="/main">
                        <img src="/img/logo.svg" alt="logo" />
                    </Link>
                </div>
                <nav className="header__top-nav">
                    <ul className="header__top-navlist">
                        <li className="header__top-item">
                            <Link to="/main" className="header__top-link">
                                Главная
                            </Link>
                        </li>
                        <li className="header__top-item">
                            <Link to="/rent" className="header__top-link">
                                Аренда яхт
                            </Link>
                        </li>
                        <li className="header__top-item">
                            <a href="/paths" className="header__top-link">
                                Маршруты
                            </a>
                        </li>
                        <li className="header__top-item">
                            <a href="#id" className="header__top-link">
                                доп. услуги
                            </a>
                        </li>
                        <li className="header__top-item">
                            <a href="#id" className="header__top-link">
                                Контакты
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="header__top-tel">
                    <img src="/img/ico/tel.svg" alt="" />
                    <p>+7 (978) 050-43-16</p>           
                </div>

                <div className="header__top-social">
                    <a href="viber://chat?number=+79992557632" rel="nofollow"  className="top__social-link">
                        <img src="/img/ico/viber.svg" alt="" />
                    </a>
                    <a href="#id" className="top__social-link">
                        <img src="/img/ico/whatsapp.svg" alt="" />
                    </a>
                    <a href="#id" className="top__social-link">
                        <img src="/img/ico/telegramm.svg" alt="" />
                    </a>
                    <a href="#id" className="top__social-link">
                        <img src="/img/ico/vk.svg" alt="" />
                    </a>              
                </div>

            </div>
        </div>
    </div>

        <Routes>
            <Route path='/main' element={ <Main /> } /> 
            <Route path='/rent//*' element={ <Rent /> } />
            <Route path='/paths' element={ <Paths /> } />
            {/* <Route path='/aboutBoat/:id' element={ <AboutBoat /> } />    */}
        </Routes>
    </>
  );
}

export default Header;