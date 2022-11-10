import React, { useState } from 'react';
import './rent.css';
import axios from 'axios';
import Modalreserv from '../components/modalreserv/Modalreserv';
import { Link } from 'react-router-dom';
import Howtoorder from '../sections/Howtoorder';
import Boatcard from '../components/boatcard/Boatcard';

// import { boats } from '../Data';
// import { useEffect } from 'react';

function Rent() {
  // console.log(boats);
  const [items, setItem] = React.useState([])
  // const [filtered, setFiltered] = useState(boats)
  const [buttonPopup, setButtonPopup] = React.useState(false);
  
  // useEffect ( ()=> {
  //   setFiltered(boats)
  // }, [boats])

  React.useEffect(() => {
    async function fetchBoat() {
        try {
            const { data } = await axios.get('https://631f871f22cefb1edc4dd7fd.mockapi.io/items/');
            setItem(data);
        } catch (error) {
            alert('error...');    
        }
    }
    fetchBoat();    
}, []);

if (!items){
    return 'loading...';
}



  // function filterRegion(region) {
  //   if(region === 'crimea') {
  //     let crimeaBoats = [...boats].filter( boat => boat.region === region)
  //       setFiltered(crimeaBoats)
  //   } else {
  //       let sochiBoats = [...boats].filter( boat => boat.region === region)
  //       setFiltered(sochiBoats)
  //   }
  // }




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
        

              <div className="catalog__boats">
                <h3 className="catalog__header">Яхты в Крыму</h3>
                  <div className="catalog__main">
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
                    ))};

                  </div>
              </div>
        </div>
      </div>
    </div>

    <Modalreserv {...items}
                
                trigger={buttonPopup}
                setTrigger={setButtonPopup}
            >
                
            </Modalreserv> 

      <Howtoorder />
    </>
  );
}

export default Rent;