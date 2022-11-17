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
            <Link to="/rent" className="mainscreen__link_left">Аренда яхт</Link>
            <Link to="/paths" className="mainscreen__link_right">Маршруты</Link>
          </div>
        
        </div>
    </div>
  );
}

export default Hero;