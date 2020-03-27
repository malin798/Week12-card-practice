import React , { useState } from "react";
import { Cards } from "./Components/Cards";

export const App = () => {

  return (
    <div className="all-cards">

      <Cards  
        type="lemon"
        title="Lemon"
        image="🍋"
        description="This is a really tasty fruit"
        button="Order now"
      />

      <Cards 
        type="rocket"
        title="Rocket"
        image="🚀"
        description="Join us into the outer space"
        button="Book seat"
      />

      <Cards 
        type="doggy"
        title="Doggy"
        image="🐶"
        description="This is a super cute puppy!"
        button="Adopt me"
      />

    </div>
  )
}
