import React, { useState } from "react";

export const Button = (props, state) => {

  console.log(state)

  // const [state, setState] = useState(true);

  return (
    <button className={`${props.type} button`}
    // onClick={event => setState(false)}
    >
      {props.button}
    </button>
  )
}