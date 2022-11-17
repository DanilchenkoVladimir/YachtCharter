import React from 'react';
import '../sections/SectionTemplate.css';


function SectionTemplate(props) {
  return (
      <div className="sectionTemplate">
          <div className="container">
          
            <div className="sectionTemplate__top">
                <div className="sectionTemplate__top-top">                
                    <h3 className="sectionTemplate__top-header">{props.headerText}</h3>
                        <a className="sectionTemplate__top-catalog" href={props.linkHref}>{props.linkText}
                            <img className="sectionTemplate__top-arrow" src="/img/ico/ArrowR.svg" alt=""/>
                        </a>
                </div>
            </div>
            
          </div>
      </div>
    );
  }
  
  export default SectionTemplate;