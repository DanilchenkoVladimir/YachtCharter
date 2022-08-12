import React from 'react';
import '../sections/questions.css';



function Questions() {
    function clickOncross(){
        const item = document.getElementsByClassName('questions__item');
        item.setAttribute('value', 'Tom');
        console.log('click');

    }

  return (
    <div className="questions">
        <div className="container">
            <div className="questions__wrap">
                <h3 className="questions__header">Ответы на часто задаваемые вопросы</h3>

                <div className="questions__main">
                    <div className="questions__item">
                        <h4 className="questions__item-header">Что взять с собой на борт?</h4>
                        <img className="cross" src="/img/ico/cross.svg" alt="" onClick={clickOncross}/>
                        <p className="questions__item-descr">
                            Если у Вас имеется морская болезнь, то укачает даже в очень    спокойном море. Если в автомобиле или в самолете Вас неукачивает,  на море может укачать. Поэтому, чтобы вашемероприятие прошло    идеально, мы обязательно рекомендуем нашимгостям за 1-2 часа перед    отправлением в море выпить таблеткиот укачивания.
                        </p>
                    </div>

                    <div className="questions__item">
                        <h4 className="questions__item-header">В море может укачать?</h4>

                        <p className="questions__item-descr">
                            Если у Вас имеется морская болезнь, то укачает даже в очень    спокойном море. Если в автомобиле или в самолете Вас неукачивает,  на море может укачать. Поэтому, чтобы вашемероприятие прошло    идеально, мы обязательно рекомендуем нашимгостям за 1-2 часа перед    отправлением в море выпить таблеткиот укачивания.
                        </p>
                    </div>

                    <div className="questions__item">
                        <h4 className="questions__item-header">Можно снять яхту без капитана?</h4>

                        <p className="questions__item-descr">
                            Взять яхту напрокат можно только с капитаном. Цены и условия проката    указаны на странице каждой яхты и на странице условия. Минимальная     длительность проката зависит от модели катера или яхты и составляет     от 3 часов.
                        </p>
                    </div>

                    <div className="questions__item">
                        <h4 className="questions__item-header">Какие маршруты доступны?</h4>

                        <p className="questions__item-descr">
                            У нас доступно множество разнообразных программ и маршрутов на  роскошных судах различных классов. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Questions;