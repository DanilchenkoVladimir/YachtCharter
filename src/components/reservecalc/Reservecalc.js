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
                    <input className="input__main-name" type="text" placeholder="kjlrf"/>
                    
                    <select>
                        <option value={props.name}>
                            <li>
                                {props.name}
                            </li>
                        </option>     
                    </select>

                    <select>
                        <option value="На какое время планируете выйти в море?" placeholder="На какое время планируете выйти в море?">
                            <ul>
<li>
                                <div>1 день</div>
                            </li>
                            <li>
                                <div>21 день</div>
                            </li>

                            <li>
                                <div>21 день</div>
                            </li>

                            </ul>
                            
                        </option>     
                    </select>




                    <div className="input__wrap-left">
                        <input className="input__main" type="text"  placeholder="Количество человек"/>
                        <input className="input__main" type="date" id="date" name="date"/>
                    </div>    
                        
                    <div className="input__wrap-right">
                        <input className="input__main" type="text" placeholder="Ваше имя" />
                        <input className="input__main" type="text" placeholder="Ваш телефон" />
                    </div>

                    <div className="input__wrap-bottom">
                        <div className="checkbox">
                            <input type="checkbox"/>
                            <label>Услуги профессионального повара ( + 10 000 ₽ )</label>
                        </div>
                        <div className="checkbox">
                            <input type="checkbox"/>
                            <label>Гидроцикл ( + 12 000 ₽/час ) </label>
                        </div>
                    </div> 
                    
                       
                    <div className="popup__wrap">
                    <button className="close__btn"></button>
                    </div>
                    <button className="send__btn" >Отправить</button>    
                </form>
            </div>
        </div>   
     </>  
    );
}

export default Reservecalc;