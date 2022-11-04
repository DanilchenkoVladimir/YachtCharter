import React from 'react';
import '../questionblock/questionblock.css';

function Questionblock(props) {

    const [open, setOpen] = React.useState(false)
    
    function clickOncross(){
        setOpen(!open)
    }

    return (
        <div className="questions__item" onClick={clickOncross}>
        <div className="question__top">
            <h4 className="questions__item-header" >{props.question}</h4>
            <img className="cross" src="/img/ico/cross.svg" alt="cross" />
        </div>
            
        {open && (
                   <p className="questions__item-descr">{props.answer}</p>
                )
        }
                        
    </div>
    );   
}
export default Questionblock;