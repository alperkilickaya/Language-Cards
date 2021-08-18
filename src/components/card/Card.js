import React from "react";
import './Card.css';
import { categories } from '../helper/data';
import Item from '../Item/item';

const Card = () => {

  
    return( 
        <div className="card-container">
            {categories.map((catElement,index) => {
                return <Item card={catElement}
                       key={index}/>
            })}
        </div>      
    )
}

export default Card;

