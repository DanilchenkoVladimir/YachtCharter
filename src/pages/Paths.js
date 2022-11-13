import React from 'react';
import './paths.css';
import Howtoorder from '../sections/Howtoorder';
import Routecartlg from '../components/routecartlg/Routecartlg';



function Paths() {
  return (
    <>
      <div className="catalog">
        <div className="container">
          <div className="wrapper">
            <div className="side__filter">
              <h3 className="side__filter-header">Фильтры</h3>
                <div className="side__filter-buttons">
                  {/* <button className="filter-button" onClick={ ()=>filterRegion('crimea')}>Крым</button>
                  <button className="filter-button" onClick={ ()=>filterRegion('sochi')}>Сочи</button> */}
                  <button >Сочи</button>
                </div>

                <div className="side__form-port">
                  <h3 className="form__port-header">Порт</h3>

                  <form>
                    <input type="checkbox" name="sevastopol"/>
                    <label for="sevastopol">Севастополь</label><br/>
                    <input type="checkbox" name="balaclava"/>
                    <label for="balaclava">Балаклава</label><br/>
                    <input type="checkbox" name="yalta"/> 
                    <label for="yalta">Ялта</label>
                  </form>
                </div>
            </div>
        

            <div className="catalog__paths">
                <h3 className="catalog__header">Популярные маршруты</h3>

                  <Routecartlg/>
                  {/* <div className="catalog__main">
                    {items.map((items) => (
                       <Boatcard 
                          id={items.id}
                          name={items.name}
                          boatImg={items.boatImg}
                          home={items.home}
                          passenger={items.passenger}
                          width={items.width}
                          class={items.class}
                          priceNew={items.priceNew}
                          priceOld={items.priceOld}
                          
                        />
                    ))}
                  </div> */}
            </div>
          </div>
        </div>
      </div>

      <Howtoorder/>
    </>
  );
}

export default Paths;