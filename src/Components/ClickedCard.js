import React from "react";

export const ClickedCard = (props) => (

  <section className="card">
    <section className={`title ${props.type} clicked `}
    style={{backgroundColor: props.titleBackgroundColor}}>
    <h1 style={{color: props.titleTextColor}}>{props.title}</h1> 
    </section>

    <section className={`${props.type}-description description clicked `}
    style={{backgroundColor: props.descriptionBackgroundColor}}>
    <p style={{fontSize: 80}}>{props.image}</p>
    </section>
  </section>

)