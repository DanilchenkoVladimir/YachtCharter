import React from 'react';
import '../sections/Citybutton.css';



function Citybutton() {
  return (
    <div className="citybutton">
        <div className="container">
          <div className="city__main">
            <h3 className="city__main-header">Выберите город </h3>
                <div className="city__main-buttons">
                  <div className="main__button">
                    <a className="main__button-link" href="#id">
                      <img className="main__button-img" src="/img/Crimea1.png" alt="" />
                    </a>
                  </div>
                  
                  <div className="main__button">
                    <a className="main__button-link" href="#id">
                      <img className="main__button-img" src="/img/Sochi.png" alt="" />
                    </a>
                  </div>
                </div>
          </div>
        </div>
    </div>
  );
}

export default Citybutton;