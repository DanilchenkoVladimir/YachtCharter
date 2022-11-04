import React from 'react';
import '../sections/questions.css';
import Questionblock from '../components/questionblock/Questionblock';
import { questions } from '../Data';


function Questions() {
    // const [open, setOpen] = React.useState(false)
    
    // function clickOncross1(){
        
    //     setOpen(!open)

    // }

    // function clickOncross2(){
        
    //     setOpen(!open)

    // }

//     function clickOncross(){
       
        

//     }








  return (
    <div className="questions">
        <div className="container">
            <div className="questions__wrap">
                <h3 className="questions__header">Ответы на часто задаваемые вопросы</h3>

                    <div className="questions__main">
                        <div className="questions__main-left">  
                            {    
                                <Questionblock
                                    question={questions[0].question}
                                    answer={questions[0].answer}
                                />
                            }
                            {
                                <Questionblock
                                    question={questions[2].question}
                                    answer={questions[2].answer}
                                />
                            }  
                        </div>

                        <div className="questions__main-left">  
                            {    
                                <Questionblock
                                    question={questions[1].question}
                                    answer={questions[1].answer}
                                />
                            }
                            {
                                <Questionblock
                                    question={questions[3].question}
                                    answer={questions[3].answer}
                                />
                            }  
                        </div>
                    </div>
            </div>
        </div>
    </div>
  );
}

export default Questions;