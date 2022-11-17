import React from "react";
import "../reservecalc/reservecalc.css";


function Reservecalc(props) {

    return (
     <>
        <div className="calc">
            <div className="calc__main">
                <h3 className="calc__main-header">Расчет стоимости бронирования</h3>
            </div>
                
            <div className="calc__main-form">           
                <form action="" className="popup__form">
                    
                    <div className="popup__form-top">
                        <select>
                            <option value={props.name}>
                                <li>
                                    {props.name}
                                </li>
                            </option>     
                        </select>
                    </div>
                    
                    <div className="calc__form-center">
                        <div className="calc__wrap-left">
                            <input className="input__main" type="text"  placeholder="Количество человек"/>
                            <input className="input__main" type="date" id="date" name="date"/>
                        </div>    
                                                
                        <div className="calc__wrap-right">
                            <input className="input__main" type="text" placeholder="Ваше имя" />
                            <input className="input__main" type="text" placeholder="Ваш телефон" />
                        </div>
                    </div>
                   
                    <div className="calc__wrap-bottom">
                        <div className="calc__checkbox">
                            <input className="calc__checkbox-box" type="checkbox"/>
                            <label>Услуги профессионального повара ( + 10 000 ₽ )</label>
                        </div>
                        <div className="calc__checkbox">
                            <input className="calc__checkbox-box" type="checkbox"/>
                            <label>Гидроцикл ( + 12 000 ₽/час ) </label>
                        </div>
                    </div> 
                    
                    <div className="calc__button-wrap">
                        <button className="send__btn" >Отправить</button> 
                    </div>
                       
                </form>
            </div>
        </div>   
     </>  
    );
}

export default Reservecalc;