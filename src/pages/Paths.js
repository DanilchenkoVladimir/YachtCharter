import React from 'react';
import axios from 'axios';
import './paths.css';
import Howtoorder from '../sections/Howtoorder';
import Routecardlg from '../components/routecardlg/Routecardlg';



function Paths() {

  const [items, setItem] = React.useState([])

  React.useEffect(() => {
    async function fetchRoutes() {
        try {
            const { data } = await axios.get('https://631f871f22cefb1edc4dd7fd.mockapi.io/routes/');
            setItem(data);
        } catch (error) {
            alert('error...');    
        }
    }
    fetchRoutes();    
  }, []);

  if (!items){
    return 'loading...';
  }




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

                  {/* <Routecartlg/> */}
                  <div className="catalog__main">
                    {items.map((items) => (
                       <Routecardlg {...items}
                          // id={items.id}
                          // routeName={items.routeName}
                          // routePoints={items.routePoints}
                          // travelTime={items.travelTime}
                          // entert={items.entert}
                          // routeImg={items.routeImg}
                          // polygon01={items.polygon01}
                          // polygon02={items.polygon02}
                          // polygon03={items.polygon03}
                          // bigImg01={items.bigImg01}
                          // bigImg02={items.bigImg02}
                          // bigImg03={items.bigImg03}

                        />
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