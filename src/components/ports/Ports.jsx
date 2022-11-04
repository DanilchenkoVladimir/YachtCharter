import React from 'react';
import '../ports/ports.css';


function Ports() {
  return (
    <div className="citybutton">
            <div className="container">
                <div className="city__main">
                    <h3 className="city__main-header">Наши яхты в портах:</h3>
                        <div className="city__main-buttons">
                            <div className="main__button">   
                                <img className="main__button-img" src="/img/Crimea1.png" alt="" />
                            </div>
                  
                            <div className="main__button"> 
                                <img className="main__button-img" src="/img/Sochi.png" alt="" />
                            </div>
                        </div>
                </div>
            </div>
        </div>
  );
}

export default Ports;