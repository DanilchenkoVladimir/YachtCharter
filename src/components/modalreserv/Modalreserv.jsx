import React from "react";
import '../modalreserv/modalreserv.css';

function Modalreserv(props){
    console.log(props);
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup__inner">
                <div className="popup__wrap">
                    <h3 className="popup__header">Бронирование яхты</h3>   
                        <button className="close__btn" onClick={() => props.setTrigger(false)}></button>
                </div>
                
                <form action="" className="popup__form">
                    <select>
                        <option value={props.name}>
                            <li>
                                {props.name}
                            </li>
                        </option>     
                    </select>
                        
                    <div className="input__wrap-top">
                        <input className="input__main" type="text"  placeholder="Количество человек"/>
                        <input className="input__main" type="text"  placeholder="Планируемая дата"/>
                    </div>    
                            
                    <div className="input__wrap-center">
                        <div className="checkbox">
                            <input type="checkbox"/>
                            <label>Услуги профессионального повара ( + 10 000 ₽ )</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox"/>
                            <label>Гидроцикл ( + 12 000 ₽/час ) </label>
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