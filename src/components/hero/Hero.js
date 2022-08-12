
import React from 'react';
import './Main.css';


function Hero() {
  return (
    <div className="main">
        <div className="container">
            <div className="main__text">
                <h1 className="main__text-header">Аренда яхт <br /> в Крыму и Сочи</h1>
                <p className="main__text-descr">Организуем на борт водные активности, рыбалку, <br /> подготовим яхту для мероприятия, кейтеринг. <br /> Мы сделаем Ваш отдых ярким и запоминающимся!</p>
            </div>

            <div className="main__buttons">
                <a className="main__button-catalog" href="#id">Перейти в каталог</a>
                <a className="main__button-selection" href="#id">Быстрый подбор яхт</a>
            </div>
        </div>
    </div>
  );
}

export default Hero;