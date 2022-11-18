import React from 'react';
import './paths.css';
import Howtoorder from '../sections/Howtoorder';
import Routecardlg from '../components/routecardlg/Routecardlg';
import Filter from '../components/filter/Filter';


function Paths() {
  const [items, setItem] = React.useState([])
  const [categoryName, setCategoryId] = React.useState([]);

  React.useEffect(() => {
    fetch('https://631f871f22cefb1edc4dd7fd.mockapi.io/routes?region=' + categoryName)
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
        
            <div className="catalog__paths">
                <h3 className="catalog__header">Популярные маршруты</h3>
                  <div className="catalog__main">
                    {items.map((items) => (
                       <Routecardlg {...items} />
                    ))}
                  </div>
            </div>
          </div>
        </div>
      </div>
      <Howtoorder/>
    </>
  );
}

export default Paths;