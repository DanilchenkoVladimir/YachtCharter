import React, { useState } from 'react';
import './rent.css';



import Howtoorder from '../sections/Howtoorder';
import Boatcard from '../components/boatcard/Boatcard';
import { boats } from '../Data';
// import { useEffect } from 'react';

function Rent() {
  // console.log(boats);

  const [filtered, setFiltered] = useState(boats)
  
  // useEffect ( ()=> {
  //   setFiltered(boats)
  // }, [boats])

  function filterRegion(region) {
    if(region === 'crimea') {
      let crimeaBoats = [...boats].filter( boat => boat.region === region)
        setFiltered(crimeaBoats)
    } else {
        let sochiBoats = [...boats].filter( boat => boat.region === region)
        setFiltered(sochiBoats)
    }
  }




  return (


    <>
    <div className="catalog">
      <div className="container">
        <div className="wrapper">
          <div className="side__filter">
            <h3 className="side__filter-header">Фильтры</h3>
              <div className="side__filter-buttons">
                <button className="filter-button" onClick={ ()=>filterRegion('crimea')}>Крым</button>
                <button className="filter-button" onClick={ ()=>filterRegion('sochi')}>Сочи</button>
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
        

              <div className="catalog__boats">
                <h3 className="catalog__header">Яхты в Крыму</h3>
                  <div className="catalog__main">
                    {filtered.map((obj) => (
                        <Boatcard
                          key={obj.id}
                          name={obj.name}
                          boatImg={obj.boatImg}
                          home={obj.home}
                          passenger={obj.passenger}
                          width={obj.width}
                          class={obj.class}
                          priceNew={obj.priceNew}
                          priceOld={obj.priceOld}
                        />
                    ))}
                  </div>
              </div>
        </div>
      </div>
    </div>

      <Howtoorder />
    </>
  );
}

export default Rent;