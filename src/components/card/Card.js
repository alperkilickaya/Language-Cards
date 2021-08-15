import React, { useState } from "react";
import './Card.css';
import { categories } from '../helper/data';
import Item from '../Item/item';

const Card = () => {

  
    return( 
        <div className="cards">
            {categories.map((card,index) => {
                return <Item card={card}
                        key={index}/>
            })}
        </div>      
    )
}

export default Card;

