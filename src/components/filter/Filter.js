import React from 'react';
import '../filter/filter.css';

function Filter({ value, onClickCategory}) {
   const categories = [ 'Крым', 'Сочи'];
   
    return (
        <div className="main__filter">
            <>
                <ul className='filter__button-list'>
                    {categories.map((categoryName, i) => (
                        <li
                            key={i}
                            id='main__filter-button'
                            onClick={() => onClickCategory(i)}
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