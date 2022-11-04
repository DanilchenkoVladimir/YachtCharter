import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import { boats } from '../Data';
import Boatcard from "../components/boatcard/Boatcard";

function AboutBoat() {
    const {id} = useParams();
    const [item, setItem] = useState(null);

    

    

    React.useEffect(() => {
        fetch(`https://631f871f22cefb1edc4dd7fd.mockapi.io/items/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setItem(json);
            });
    }, [id]);


    return (
        <>
        <div>
            {item && (
                <>
                <Boatcard 
                    name={item.name}/>

                    <h3>{item.name}</h3>
                    <p>{item.region}</p>
                </>
            )}
        </div>
        
        
        
        
        </>
        


    )




}

export default AboutBoat;