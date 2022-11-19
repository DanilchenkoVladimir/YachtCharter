import React from "react";
import '../modalreserv/modalreserv.css';

function Modalreserv(props){
    const priceShef = 10000;
    const jetSki = 12000;

    return(props.trigger) ? (
        <div className="popup">
            <div className="popup__inner">
                <div className="popup__wrap">
                    <h3 className="popup__header">Бронирование яхты</h3>   
                        <button className="close__btn" onClick={() => props.setTrigger(false)}></button>
                </div>
                
                <form action="" className="popup__form">
                    <input className="input__main-name" type="text" placeholder={props.name}/>
                        
                    <div className="input__wrap-top">
                        <input className="input__main" type="text"  placeholder="Количество человек"/>
                        <input className="input__main" type="date" id="date" name="date"/>
                        
                    </div>    
                            
                    <div className="input__wrap-center">
                        <div className="checkbox">
                            <input className="popup__checkbox-box" type="checkbox"/>
                            <label>Услуги профессионального повара (+ {priceShef.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}/час)</label>
                        </div>
                        <div className="checkbox">
                            <input className="popup__checkbox-box" type="checkbox"/>
                            <label>Гидроцикл ( + {jetSki.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' })}/час ) </label>
                        </div>
                        
                    </div>
                           
                    <div className="input__wrap-bottom">
                        <input className="input__main" type="text" placeholder="Ваше имя" />
                        <input className="input__main" type="text" placeholder="Ваш телефон" />
                    </div>

                    <button className="send__btn" onClick={() => props.setTrigger(false)}>Отправить</button>    
                </form>

                {props.children}
            </div>
        </div>
    ) : "";
}

export default Modalreserv;