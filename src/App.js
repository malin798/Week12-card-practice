import React from "react";
import { Cards } from "./Components/Cards";

export const App = () => {

  return (
    <div className="all-cards">

      <Cards  
        type="lemon"
        title="Lemon"
        titleBackgroundColor= "#8CFFBA"
        titleTextColor= "#000000"
        image="🍋"
        description="This is a really tasty fruit"
        descriptionBackgroundColor= "#CFFFE2"
        descriptionTextColor= "#000000"
        button="Order now"
        buttonBackgroundColor= "#FCED84"
        buttonTextColor= "#166F39"
      />

      <Cards 
        type="rocket"
        title="Rocket"
        titleBackgroundColor= "#A6CFE2"
        titleTextColor= "#0B0C11"
        image="🚀"
        description="Join us into the outer space"
        descriptionBackgroundColor= "#C2DCE9"
        descriptionTextColor= "#0B0C11"
        button="Book seat"
        buttonBackgroundColor= "#0B0C11"
        buttonTextColor= "#FFD600"
      />

      <Cards 
        type="doggy"
        title="Doggy"
        titleBackgroundColor= "#EEB200"
        titleTextColor= "#502F7E"
        image="🐶"
        description="This is a super cute puppy!"
        descriptionBackgroundColor= "#FFE086"
        descriptionTextColor= "#502F7E"
        button="Adopt me"
        buttonBackgroundColor= "#FFFFFF"
        buttonTextColor= "#502F7E"
      />

    </div>
  )
}
