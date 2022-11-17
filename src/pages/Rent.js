import React from 'react';
import './rent.css';
import Howtoorder from '../sections/Howtoorder';
import Boatcard from '../components/boatcard/Boatcard';
import Filter from '../components/filter/Filter';

function Rent() {
  const [items, setItem] = React.useState([]);
  const [categoryName, setCategoryId] = React.useState([]);
 
  React.useEffect(() => {
      fetch('https://631f871f22cefb1edc4dd7fd.mockapi.io/items?region=' + categoryName)
        .then((res) => res.json())
        .then((arr) => {
            setItem(arr);
      });
        window.scrollTo(0, 0);
  }, [categoryName]);

  return (
    <>
      <div className="catalog">
        <div className="container">
          <div className="wrapper">
            <div className="side__filter">
              <h3 className="side__filter-header">Фильтры</h3>
                <div className="side__filter-buttons">
                  <Filter value={categoryName} onClickCategory={(i) => setCategoryId(i)}/>
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