
import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';
import MyVideo from "../video/video.mp4";




function Hero() {
  return (
    <div className="main">
        <div className="container">
        <div className="mainscreen">
        <video className="mainscreen-video" loop muted autoPlay controls = ''>
          <source src={MyVideo} type="video/mp4" />
            Your browser does not support HTML5 video.
        </video>
        </div>
        

        <div class="mainscreen__menu"> 
          {/* <a href="buy/" class="mainscreen__link_left">Каталог яхт</a> 
          <a href="home" class="mainscreen__link_right">Чартер яхт</a>  */}
          <Link to="/rent" className="mainscreen__link_left">Аренда яхт</Link>
          <Link to="/paths" className="mainscreen__link_right">Маршруты</Link>
        </div>
          
            {/* <div className="main__text">
                <h1 className="main__text-header">Аренда яхт <br /> в Крыму и Сочи</h1>
                <p className="main__text-descr">Организуем на борт водные активности, рыбалку, <br /> подготовим яхту для мероприятия, кейтеринг. <br /> Мы сделаем Ваш отдых ярким и запоминающимся!</p>
            </div> */}

            {/* <div className="main__buttons">
                <a className="main__button-catalog" href="#id">Перейти в каталог</a>
                <a className="main__button-selection" href="#id">Быстрый подбор яхт</a>
            </div> */}
        </div>
    </div>
  );
}

export default Hero;