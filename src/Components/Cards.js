import React, { useState } from "react";
import { ClickedCard } from "./ClickedCard";

export const Cards = (props) => {

  const [state, setState] = useState(true);
     
    {if (state) {
      return ( 
      
      <section className="card">

        <section className={`title ${props.type}`}
        style={{backgroundColor: props.titleBackgroundColor}}>
          <h1
          style={{color: props.titleTextColor}}>{props.title}</h1> 
          <div className="emoji">{props.image}</div>
        </section>
        
        <section 
        className={`${props.type}-description description`}
        style={{backgroundColor: props.descriptionBackgroundColor}}
        >
          <p 
          className="italic"
          style={{color: props.descriptionTextColor}}
          >
          {props.description}
          </p>

          <button 
          className={`${props.type} button`}
          style={{background: props.buttonBackgroundColor, color: props.buttonTextColor}}
          onClick={event => setState(false)}
          >
            {props.button}
          </button>

        </section>
      </section>

      )
    }

    else {
      return (

        <ClickedCard {...props}/>

      )
    }
  }
}
