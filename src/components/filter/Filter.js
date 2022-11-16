import React from 'react';
import '../filter/filter.css';




function Filter({ value, onClickCategory}) {
    // const [activeIndex, setActiveIndex] = React.useState(0);
    const categories = [ 'Крым', 'Сочи'];
   console.log(value)
    return (
        <div className="main__filter">
            <>
                <ul className='filter__button-list'>
                    {categories.map((categoryName, i) => (
                        <li
                        
                            key={i}
                            id='main__filter-button'
                            onClick={() => onClickCategory(i)}
                            // className='main__filter-button'
                            className={value === i ? 'active' : ''}>
                            {categoryName}
                        </li>
                    ))}
                </ul>
            </>
            
              
              
                
              
              
              
              
              
              
     


            
        </div>

    )
};

export default Filter;
