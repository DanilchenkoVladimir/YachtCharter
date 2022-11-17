import React from 'react';
import './Servicescart.css';

function Servicescart(props) {
  return (
    <div className="servicescart" key={props.id}>
      <img className="boatcart__img" src={props.serviceImg} alt=""/>
        <div className="servicescart__features">
          <h4 className="servicescart__features-header">{props.service}</h4>
            <p className="servicescart__features-descr">{props.about}</p>

            <div className="servicescart__price">
              <p className="servicescart__price-price">{props.price}</p>
              <p className="servicescart__price-option">{props.option}</p>        
            </div>
        </div>
    </div>
  );
}

export default Servicescart;