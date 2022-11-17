import React from 'react';
import '../header/header.css';
import { Routes, Route, Link } from 'react-router-dom';
import Rent from '../../pages/Rent';
import Paths from '../../pages/Paths';
import Main from '../../pages/Main';
import AboutBoat from '../../pages/AboutBoat.js';

function Header() {
  return (
    <>
    <div className="header" id="header">
        <div className="container">
            <div className="header__top">
                <div className="header__top-logo">
                    <Link to="/">
                        <img src="/img/logo.svg" alt="logo" />
                    </Link>
                </div>

                <nav className="header__top-nav">
                    <ul className="header__top-navlist">
                        <li className="header__top-item">
                            <Link to="/" className="header__top-link">
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
                            <a href="#footer" className="header__top-link">
                                Контакты
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="header__top-tel">
                    <img src="/img/ico/tel.svg" alt="telefon" />
                    <a href="tel:+79992557632">+7 (999) 255-76-32</a>           
                </div>

                <div className="header__top-social">
                    <a href="viber://chat?number=79992557632" className="top__social-link">
                        <img src="/img/ico/viber.svg" alt="" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=79992557632" className="top__social-link">
                        <img src="/img/ico/whatsapp.svg" alt="" />
                    </a>
                    <a href="https://web.telegram.org/z/" className="top__social-link">
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
            <Route path='/' element={ <Main /> } /> 
            <Route path='/rent' element={ <Rent /> } />
            <Route path='/paths' element={ <Paths /> } />
            <Route path='/boats/:id' element={ <AboutBoat /> } />
        </Routes>
    </>
  );
}

export default Header;