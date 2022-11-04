import React from 'react';
import '../footer/footer.css';

function Footer() {
  return (
    <div className="footer" id="footer">
        <div className="container">
            <div className="footer__wrap">
                <div className="footer__logo">  
                    <a href="#header" className="header__top-link">
                        <img src="/img/logo.svg" alt="logo"/>
                    </a>
                </div>

                <div className="footer__address">
                    <p className="address__item">Крым, Балаклава, наб. Назукина, 1а</p>
                    <p className="address__item">Крым, Ялта, ул. Рузвельта, 5</p>
                    <p className="address__item">Сочи, ул. Войкова, 1</p>
                </div>

                <div className="footer__copyright">
                    <p className="copyright__item">LILIYA LUXURY 2022</p>
                    <p className="copyright__item">Крым, Ялта, ул. Рузвельта, 5</p>
                    <p className="copyright__item">Сочи, ул. Войкова, 1</p>
                </div>

                
                <div className="footer__tel">
                    <img src="/img/ico/tel.svg" alt="" />
                    <a href="tel:+79992557632">+7 (999) 255-76-32</a>           
                </div>

                <div className="footer__social">
                    <a href="viber://chat?number=+79992557632" rel="nofollow"  className="top__social-link">
                        <img src="/img/ico/viber.svg" alt="" />
                    </a>
                    <a href="#id" className="top__social-link">
                        <img src="/img/ico/whatsapp.svg" alt="" />
                    </a>
                    <a href="#id" className="top__social-link">
                        <img src="/img/ico/telegramm.svg" alt="" />
                    </a>
                    <a href="#id" className="top__social-link">
                        <img src="/img/ico/vk.svg" alt="" />
                    </a>              
                </div>
                
            </div>
        </div>
    </div>
  );
}

export default Footer;