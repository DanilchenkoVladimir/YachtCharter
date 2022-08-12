
import React from 'react';
import '../sections/About.css';


function About() {
  return (
    <div className="about">
        <div className="container">
            <div className="about__main">
                <h3 className="about__main-header">Незабываемые <br />яркие впечатления</h3>
                    <p className="about__main-descr">
                    Бодрящий морской воздух, мерный гул мотора, крики чаек над головой и – невероятные пейзажи, открывающиеся вокруг… <br />
                    Всё это вы можете ощутить, заказав морскую прогулку у нас!
                    </p>
            </div>

            <div className="about__wrapper">
                <div className="about__features">
                    <div className="about__features-item">
                    <div className="about__features-plate">
                                <img src="/img/ico/about/about-yaht.svg" alt="" />
                        </div>                        
                            <p className="features-item-descr">
                                Флот из 120 яхт классом от Эконом до Luxury
                            </p>    
                    </div>
                </div>

                <div className="about__features">
                    <div className="about__features-item">
                        <div className="about__features-plate">
                                <img src="/img/ico/about/about-party.svg" alt="" />
                        </div>
                            <p className="features-item-descr">
                                Организуем вечеринки, свадьбы, мальчишники и девичники
                            </p>    
                    </div>
                </div>

                <div className="about__features">
                    <div className="about__features-item">
                        <div className="about__features-plate">
                                <img src="/img/ico/about/about-fishing.svg" alt="" />
                        </div>
                            <p className="features-item-descr">
                                Морская рыбалка.
                                Снасти – бесплатно
                            </p>    
                    </div>
                </div>

                <div className="about__features">
                    <div className="about__features-item">
                        <div className="about__features-plate">
                                <img src="/img/ico/about/about-friends.svg" alt="" />
                        </div>
                            <p className="features-item-descr">
                                Индивидуальные морские прогулки своей компанией
                            </p>    
                    </div>
                </div>

                <div className="about__features">
                    <div className="about__features-item">
                            <div className="about__features-plate">
                                <img src="/img/ico/about/about-chef.svg" alt="" />
                            </div>
                            <p className="features-item-descr">
                                Выездной профессиональный повар на яхте
                            </p>    
                    </div>
                </div> 
            </div>

            <div className="about__image-wrap">
                <img src="/img/shot-big.png" alt="" />
            </div>
           
            
                
                                         
            

        </div>
    </div>
  );
}

export default About;