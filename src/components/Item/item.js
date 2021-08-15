import React, { useState } from "react";

function Item({card}){
    
    const [showLogo, setShowLogo] = useState(true);
  
    return(
        <div className="card" onClick={()=>setShowLogo(!showLogo)}>
            {showLogo ?  
                <>        
                <img className="card-logo" src={card.img} alt="" />
                <h3 className="card-title" >{card.name}</h3>
                </>
                : 
                <ul className="list">
                    {card.options.map((element,i)=>{
                        return <li key={i}>
                            {element}
                        </li>
                    })
                    }
                </ul>
            }
        </div>
    )
}

export default Item;